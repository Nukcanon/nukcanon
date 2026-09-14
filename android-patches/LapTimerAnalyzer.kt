package com.nukcanon.laptimechecker

import android.graphics.Bitmap
import android.graphics.PixelFormat
import android.graphics.RectF
import android.os.SystemClock
import android.util.Log
import android.util.Size
import androidx.camera.core.ImageAnalysis
import androidx.camera.core.ImageProxy
import org.opencv.android.Utils
import org.opencv.core.Core
import org.opencv.core.CvType
import org.opencv.core.Mat
import org.opencv.core.MatOfInt
import org.opencv.imgproc.Imgproc
import org.opencv.video.BackgroundSubtractorMOG2
import org.opencv.video.Video
import kotlin.math.ceil
import kotlin.math.floor
import kotlin.math.max

class LapTimerAnalyzer(
    @Volatile private var sensitivity: Double,
    @Volatile private var cooldownMillis: Long,
    @Volatile private var history: Int,
    private val onLapDetected: () -> Unit,
    private val onDebugFrame: ((Bitmap) -> Unit)?,
    screenRoi: RectF? = null,
    viewSize: Size? = null
) : ImageAnalysis.Analyzer {

    @Volatile var isDebugMode: Boolean = false
    private enum class State { LEARNING, DETECTING, BLOCKED }

    private var currentState = State.LEARNING
    private var subtractor: BackgroundSubtractorMOG2 = createSubtractor()
    @Volatile private var screenRoi: RectF? = screenRoi?.let(::RectF)
    @Volatile private var viewSize: Size? = viewSize
    @Volatile private var pendingBackgroundReset = false
    @Volatile var roiRect: org.opencv.core.Rect? = null
        private set

    private var lastDetectionTime = 0L
    private var learningStartedAt = 0L
    private var clearFrameCount = 0
    private val rgbFrame = Mat()
    private val foregroundMask = Mat()
    private val argbToRgbaMap = MatOfInt(1, 0, 2, 1, 3, 2, 0, 3)

    fun setScreenRoi(rect: RectF, size: Size) {
        screenRoi = RectF(rect)
        viewSize = size
        roiRect = null
        pendingBackgroundReset = true
    }

    fun hasRoi(): Boolean = screenRoi != null

    fun updateSettings(newSensitivity: Double, newCooldown: Long, newHistory: Int) {
        sensitivity = newSensitivity
        cooldownMillis = newCooldown
        if (history != newHistory) {
            history = newHistory
            pendingBackgroundReset = true
        }
    }

    fun resetBackground() {
        pendingBackgroundReset = true
    }

    private fun createSubtractor(): BackgroundSubtractorMOG2 =
        Video.createBackgroundSubtractorMOG2(history, 16.0, false)

    private fun resetBackgroundNow(now: Long = SystemClock.elapsedRealtime()) {
        subtractor = createSubtractor()
        currentState = State.LEARNING
        learningStartedAt = now
        clearFrameCount = 0
        pendingBackgroundReset = false
    }

    override fun analyze(imageProxy: ImageProxy) {
        var rgbaMat: Mat? = null
        var rotatedMat: Mat? = null
        var roiFrame: Mat? = null
        try {
            val now = SystemClock.elapsedRealtime()
            if (pendingBackgroundReset) resetBackgroundNow(now)

            rgbaMat = imageProxy.toRgbaMat() ?: return
            rotatedMat = Mat()
            when (imageProxy.imageInfo.rotationDegrees) {
                90 -> Core.rotate(rgbaMat, rotatedMat, Core.ROTATE_90_CLOCKWISE)
                180 -> Core.rotate(rgbaMat, rotatedMat, Core.ROTATE_180)
                270 -> Core.rotate(rgbaMat, rotatedMat, Core.ROTATE_90_COUNTERCLOCKWISE)
                else -> rgbaMat.copyTo(rotatedMat)
            }

            val selectedScreenRect = screenRoi ?: return
            val selectedViewSize = viewSize ?: return
            if (roiRect == null) {
                roiRect = transformScreenRectToImageRect(
                    selectedScreenRect,
                    selectedViewSize,
                    rotatedMat.cols(),
                    rotatedMat.rows()
                )
            }

            val roi = roiRect ?: return
            if (roi.x < 0 || roi.y < 0 || roi.width <= 0 || roi.height <= 0 ||
                roi.x + roi.width > rotatedMat.cols() || roi.y + roi.height > rotatedMat.rows()
            ) {
                roiRect = null
                return
            }

            roiFrame = rotatedMat.submat(roi)
            Imgproc.cvtColor(roiFrame, rgbFrame, Imgproc.COLOR_RGBA2RGB)
            subtractor.apply(
                rgbFrame,
                foregroundMask,
                if (currentState == State.LEARNING) -1.0 else 0.001
            )

            val totalPixels = roiFrame.rows() * roiFrame.cols()
            val motionPercentage = if (totalPixels > 0) {
                Core.countNonZero(foregroundMask).toDouble() / totalPixels * 100.0
            } else {
                0.0
            }

            when (currentState) {
                State.LEARNING -> {
                    if (now - learningStartedAt >= LEARNING_TIME_MS) {
                        currentState = State.DETECTING
                    }
                }
                State.DETECTING -> {
                    if (motionPercentage >= sensitivity) {
                        onLapDetected()
                        lastDetectionTime = now
                        clearFrameCount = 0
                        currentState = State.BLOCKED
                    }
                }
                State.BLOCKED -> {
                    clearFrameCount =
                        if (motionPercentage < sensitivity * CLEAR_RATIO) clearFrameCount + 1 else 0
                    if (clearFrameCount >= CLEAR_FRAMES_REQUIRED &&
                        now - lastDetectionTime >= cooldownMillis
                    ) {
                        clearFrameCount = 0
                        currentState = State.DETECTING
                    }
                }
            }

            if (isDebugMode) updateDebugFrame(foregroundMask)
        } catch (error: Exception) {
            Log.e(TAG, "Frame analysis failed", error)
            roiRect = null
        } finally {
            roiFrame?.release()
            rotatedMat?.release()
            rgbaMat?.release()
            imageProxy.close()
        }
    }

    private fun transformScreenRectToImageRect(
        screenRect: RectF,
        previewSize: Size,
        imageWidth: Int,
        imageHeight: Int
    ): org.opencv.core.Rect {
        val scale = max(
            previewSize.width.toFloat() / imageWidth,
            previewSize.height.toFloat() / imageHeight
        )
        val offsetX = (previewSize.width - imageWidth * scale) / 2f
        val offsetY = (previewSize.height - imageHeight * scale) / 2f
        val left = floor((screenRect.left - offsetX) / scale).toInt().coerceIn(0, imageWidth - 1)
        val top = floor((screenRect.top - offsetY) / scale).toInt().coerceIn(0, imageHeight - 1)
        val right = ceil((screenRect.right - offsetX) / scale).toInt().coerceIn(left + 1, imageWidth)
        val bottom = ceil((screenRect.bottom - offsetY) / scale).toInt().coerceIn(top + 1, imageHeight)
        return org.opencv.core.Rect(left, top, right - left, bottom - top)
    }

    private fun updateDebugFrame(mat: Mat) {
        if (mat.empty()) return
        val bitmap = Bitmap.createBitmap(mat.cols(), mat.rows(), Bitmap.Config.ARGB_8888)
        Utils.matToBitmap(mat, bitmap)
        onDebugFrame?.invoke(bitmap)
    }

    private fun ImageProxy.toRgbaMat(): Mat? {
        if (format != PixelFormat.RGBA_8888 || planes.isEmpty()) return null
        val plane = planes[0]
        val buffer = plane.buffer.duplicate()
        val rowBytes = width * 4
        val bytes = ByteArray(rowBytes * height)
        val base = buffer.position()

        if (plane.pixelStride == 4) {
            for (row in 0 until height) {
                buffer.position(base + row * plane.rowStride)
                buffer.get(bytes, row * rowBytes, rowBytes)
            }
        } else {
            for (row in 0 until height) {
                val rowStart = base + row * plane.rowStride
                for (column in 0 until width) {
                    val source = rowStart + column * plane.pixelStride
                    val target = (row * width + column) * 4
                    bytes[target] = buffer.get(source)
                    bytes[target + 1] = buffer.get(source + 1)
                    bytes[target + 2] = buffer.get(source + 2)
                    bytes[target + 3] = buffer.get(source + 3)
                }
            }
        }

        val argb = Mat(height, width, CvType.CV_8UC4)
        val rgba = Mat(height, width, CvType.CV_8UC4)
        return try {
            argb.put(0, 0, bytes)
            Core.mixChannels(listOf(argb), listOf(rgba), argbToRgbaMap)
            rgba
        } catch (error: Exception) {
            rgba.release()
            null
        } finally {
            argb.release()
        }
    }

    fun release() {
        rgbFrame.release()
        foregroundMask.release()
        argbToRgbaMap.release()
    }

    companion object {
        private const val TAG = "LapTimerAnalyzer"
        private const val LEARNING_TIME_MS = 700L
        private const val CLEAR_FRAMES_REQUIRED = 3
        private const val CLEAR_RATIO = 0.6
    }
}
