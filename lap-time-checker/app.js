"use strict";

const els = {
  video: document.querySelector("#cameraVideo"),
  stage: document.querySelector("#cameraStage"),
  roiCanvas: document.querySelector("#roiCanvas"),
  processingCanvas: document.querySelector("#processingCanvas"),
  debugCanvas: document.querySelector("#debugCanvas"),
  debugPanel: document.querySelector("#debugPanel"),
  debugSize: document.querySelector("#debugSize"),
  cameraEmpty: document.querySelector("#cameraEmpty"),
  cameraHelp: document.querySelector("#cameraHelp"),
  timer: document.querySelector("#timerDisplay"),
  motionValue: document.querySelector("#motionValue"),
  motionBar: document.querySelector("#motionBar"),
  statusPill: document.querySelector("#statusPill"),
  statusText: document.querySelector("#statusText"),
  cameraButton: document.querySelector("#cameraButton"),
  measureButton: document.querySelector("#measureButton"),
  clearButton: document.querySelector("#clearButton"),
  debugButton: document.querySelector("#debugButton"),
  resetBackgroundButton: document.querySelector("#resetBackgroundButton"),
  sensitivityInput: document.querySelector("#sensitivityInput"),
  sensitivityOutput: document.querySelector("#sensitivityOutput"),
  cooldownInput: document.querySelector("#cooldownInput"),
  cameraSelect: document.querySelector("#cameraSelect"),
  lapList: document.querySelector("#lapList"),
  lapCount: document.querySelector("#lapCount"),
  toast: document.querySelector("#toast")
};

const STORAGE_KEY = "nukcanon-lap-time-checker-v1";
const PROCESS_MAX_WIDTH = 960;
const PROCESS_INTERVAL_MS = 34;
const LEARNING_TIME_MS = 1200;
const CLEAR_FRAMES_REQUIRED = 4;

let cvApi = null;
let cvReady = false;
let stream = null;
let detector = null;
let noiseKernel = null;
let animationFrameId = 0;
let timerFrameId = 0;
let lastProcessAt = 0;
let processing = false;
let debugVisible = false;

let roi = null;
let drag = null;
let measuring = false;
let timerStarted = false;
let lapStartedAt = 0;
let detectorState = "idle";
let learningStartedAt = 0;
let lastDetectionAt = 0;
let highMotionFrames = 0;
let clearFrames = 0;

const saved = loadSavedState();
let laps = Array.isArray(saved.laps) ? saved.laps : [];
els.sensitivityInput.value = String(saved.sensitivity ?? 5);
els.cooldownInput.value = String(saved.cooldown ?? 2000);

function loadSavedState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      sensitivity: Number(els.sensitivityInput.value),
      cooldown: Number(els.cooldownInput.value),
      laps
    }));
  } catch {
    // 사생활 보호 모드 등에서 저장소가 차단되어도 측정은 계속한다.
  }
}

function setStatus(text, state = "loading") {
  els.statusText.textContent = text;
  els.statusPill.dataset.state = state;
}

let toastTimer = 0;
function showToast(message) {
  window.clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimer = window.setTimeout(() => els.toast.classList.remove("show"), 2200);
}

function updateSensitivityLabel() {
  els.sensitivityOutput.value = `${Number(els.sensitivityInput.value).toFixed(1)}%`;
}

function formatTime(milliseconds) {
  const safe = Math.max(0, milliseconds);
  const minutes = Math.floor(safe / 60000);
  const seconds = Math.floor((safe % 60000) / 1000);
  const hundredths = Math.floor((safe % 1000) / 10);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(hundredths).padStart(2, "0")}`;
}

function renderLaps() {
  els.lapCount.textContent = `${laps.length} LAP`;
  els.lapList.replaceChildren();

  if (!laps.length) {
    const empty = document.createElement("li");
    empty.className = "empty-row";
    empty.textContent = "아직 기록된 랩타임이 없습니다.";
    els.lapList.append(empty);
    return;
  }

  laps.forEach((lap) => {
    const item = document.createElement("li");
    item.className = "lap-row";
    const number = document.createElement("span");
    number.className = "lap-number";
    number.textContent = String(lap.number);
    const time = document.createElement("span");
    time.className = "lap-time";
    time.textContent = lap.time;
    item.append(number, time);
    els.lapList.append(item);
  });
}

function resizeRoiCanvas() {
  const rect = els.roiCanvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(rect.width * dpr));
  const height = Math.max(1, Math.round(rect.height * dpr));
  if (els.roiCanvas.width !== width || els.roiCanvas.height !== height) {
    els.roiCanvas.width = width;
    els.roiCanvas.height = height;
  }
  drawRoi();
}

function canvasPoint(event) {
  const rect = els.roiCanvas.getBoundingClientRect();
  return {
    x: Math.max(0, Math.min(rect.width, event.clientX - rect.left)),
    y: Math.max(0, Math.min(rect.height, event.clientY - rect.top)),
    width: rect.width,
    height: rect.height
  };
}

function normalizedRect(start, end) {
  const left = Math.min(start.x, end.x) / start.width;
  const top = Math.min(start.y, end.y) / start.height;
  const right = Math.max(start.x, end.x) / start.width;
  const bottom = Math.max(start.y, end.y) / start.height;
  return { left, top, right, bottom };
}

function drawRoi(previewRect = null) {
  const canvas = els.roiCanvas;
  const rect = canvas.getBoundingClientRect();
  const dpr = canvas.width / Math.max(1, rect.width);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);

  const selected = previewRect || roi;
  if (!selected) return;

  const left = selected.left * rect.width;
  const top = selected.top * rect.height;
  const width = (selected.right - selected.left) * rect.width;
  const height = (selected.bottom - selected.top) * rect.height;

  ctx.fillStyle = "rgba(3, 169, 244, .10)";
  ctx.fillRect(left, top, width, height);
  ctx.strokeStyle = "#35e58a";
  ctx.lineWidth = 3;
  ctx.setLineDash([9, 6]);
  ctx.strokeRect(left + 1.5, top + 1.5, Math.max(0, width - 3), Math.max(0, height - 3));
  ctx.setLineDash([]);

  const label = "감지 영역";
  ctx.font = "700 13px sans-serif";
  const labelWidth = ctx.measureText(label).width + 16;
  const labelY = top >= 32 ? top - 28 : top + 6;
  ctx.fillStyle = "rgba(10, 24, 37, .84)";
  ctx.fillRect(left, labelY, labelWidth, 23);
  ctx.fillStyle = "#dfffee";
  ctx.fillText(label, left + 8, labelY + 16);
}

function onPointerDown(event) {
  if (!stream) {
    showToast("먼저 카메라를 시작해주세요.");
    return;
  }
  if (measuring) {
    showToast("측정을 중지한 후 감지 영역을 바꿔주세요.");
    return;
  }
  const point = canvasPoint(event);
  drag = { pointerId: event.pointerId, start: point, end: point };
  els.roiCanvas.setPointerCapture(event.pointerId);
  drawRoi(normalizedRect(point, point));
}

function onPointerMove(event) {
  if (!drag || drag.pointerId !== event.pointerId) return;
  drag.end = canvasPoint(event);
  drawRoi(normalizedRect(drag.start, drag.end));
}

function finishPointer(event) {
  if (!drag || drag.pointerId !== event.pointerId) return;
  drag.end = canvasPoint(event);
  const nextRoi = normalizedRect(drag.start, drag.end);
  const widthPixels = (nextRoi.right - nextRoi.left) * drag.start.width;
  const heightPixels = (nextRoi.bottom - nextRoi.top) * drag.start.height;
  drag = null;

  if (widthPixels < 20 || heightPixels < 20) {
    drawRoi();
    showToast("감지 영역을 조금 더 크게 드래그해주세요.");
    return;
  }

  roi = nextRoi;
  drawRoi();
  resetDetector();
  updateMeasureAvailability();
  els.cameraHelp.textContent = "초록색 사각형과 실제 움직임 감지 영역이 같은 위치로 처리됩니다.";
}

function cancelPointer(event) {
  if (!drag || drag.pointerId !== event.pointerId) return;
  drag = null;
  drawRoi();
}

function mapRoiToVideo() {
  if (!roi || !els.video.videoWidth || !els.video.videoHeight) return null;
  const display = els.roiCanvas.getBoundingClientRect();
  const videoWidth = els.video.videoWidth;
  const videoHeight = els.video.videoHeight;
  const scale = Math.max(display.width / videoWidth, display.height / videoHeight);
  const renderedWidth = videoWidth * scale;
  const renderedHeight = videoHeight * scale;
  const offsetX = (display.width - renderedWidth) / 2;
  const offsetY = (display.height - renderedHeight) / 2;

  const screenLeft = roi.left * display.width;
  const screenTop = roi.top * display.height;
  const screenRight = roi.right * display.width;
  const screenBottom = roi.bottom * display.height;

  const left = Math.max(0, Math.min(videoWidth - 1, (screenLeft - offsetX) / scale));
  const top = Math.max(0, Math.min(videoHeight - 1, (screenTop - offsetY) / scale));
  const right = Math.max(left + 1, Math.min(videoWidth, (screenRight - offsetX) / scale));
  const bottom = Math.max(top + 1, Math.min(videoHeight, (screenBottom - offsetY) / scale));
  return { left, top, right, bottom, videoWidth, videoHeight };
}

async function listCameras() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    const selected = els.cameraSelect.value;
    els.cameraSelect.replaceChildren();
    cameras.forEach((camera, index) => {
      const option = document.createElement("option");
      option.value = camera.deviceId;
      option.textContent = camera.label || `카메라 ${index + 1}`;
      els.cameraSelect.append(option);
    });
    els.cameraSelect.disabled = cameras.length < 2;
    if (cameras.some((camera) => camera.deviceId === selected)) {
      els.cameraSelect.value = selected;
    }
  } catch {
    els.cameraSelect.disabled = true;
  }
}

async function startCamera(deviceId = "") {
  if (!navigator.mediaDevices?.getUserMedia) {
    setStatus("이 브라우저는 카메라를 지원하지 않습니다", "detected");
    showToast("HTTPS에서 최신 Chrome, Edge 또는 Safari로 열어주세요.");
    return;
  }

  stopTracks();
  setStatus("카메라 권한 확인 중", "loading");
  try {
    const videoConstraints = deviceId
      ? { deviceId: { exact: deviceId }, width: { ideal: 1920 }, height: { ideal: 1080 }, frameRate: { ideal: 30, max: 60 } }
      : { facingMode: { ideal: "environment" }, width: { ideal: 1920 }, height: { ideal: 1080 }, frameRate: { ideal: 30, max: 60 } };
    stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false });
    els.video.srcObject = stream;
    await els.video.play();
    await new Promise((resolve) => {
      if (els.video.readyState >= 2) resolve();
      else els.video.addEventListener("loadedmetadata", resolve, { once: true });
    });

    els.cameraEmpty.hidden = true;
    els.cameraButton.lastChild.textContent = " 카메라 중지";
    els.cameraHelp.textContent = "영상 위에서 자동차가 통과할 영역을 드래그하세요.";
    setStatus(roi ? "감지 준비" : "감지 영역을 선택하세요", roi ? "ready" : "loading");
    await listCameras();
    resizeProcessingCanvas();
    resetDetector();
    updateMeasureAvailability();
    startProcessingLoop();
  } catch (error) {
    stream = null;
    els.cameraEmpty.hidden = false;
    setStatus("카메라를 열 수 없습니다", "detected");
    if (error?.name === "NotAllowedError") showToast("브라우저 설정에서 카메라 권한을 허용해주세요.");
    else if (error?.name === "NotFoundError") showToast("사용 가능한 카메라를 찾지 못했습니다.");
    else showToast("카메라를 시작하지 못했습니다.");
  }
}

function stopTracks() {
  if (stream) stream.getTracks().forEach((track) => track.stop());
  stream = null;
  els.video.srcObject = null;
}

function stopCamera() {
  stopMeasurement();
  stopTracks();
  window.cancelAnimationFrame(animationFrameId);
  animationFrameId = 0;
  els.cameraEmpty.hidden = false;
  els.cameraButton.lastChild.textContent = " 카메라 시작";
  els.measureButton.disabled = true;
  setStatus(cvReady ? "카메라 대기" : "영상 처리 모듈 준비 중", "loading");
  updateMotionMeter(0);
}

function resizeProcessingCanvas() {
  if (!els.video.videoWidth || !els.video.videoHeight) return;
  const scale = Math.min(1, PROCESS_MAX_WIDTH / els.video.videoWidth);
  els.processingCanvas.width = Math.max(2, Math.round(els.video.videoWidth * scale));
  els.processingCanvas.height = Math.max(2, Math.round(els.video.videoHeight * scale));
}

function createDetector() {
  if (!cvReady) return null;
  if (typeof cvApi.BackgroundSubtractorMOG2 === "function") {
    return new cvApi.BackgroundSubtractorMOG2(1000, 16, false);
  }
  if (typeof cvApi.createBackgroundSubtractorMOG2 === "function") {
    return cvApi.createBackgroundSubtractorMOG2(1000, 16, false);
  }
  throw new Error("MOG2 is not available in this OpenCV.js build.");
}

function resetDetector() {
  if (detector?.delete) detector.delete();
  if (noiseKernel?.delete) noiseKernel.delete();
  detector = null;
  noiseKernel = null;
  detectorState = "idle";
  highMotionFrames = 0;
  clearFrames = 0;
  updateMotionMeter(0);

  if (!cvReady || !stream || !roi) return;
  try {
    detector = createDetector();
    noiseKernel = cvApi.Mat.ones(3, 3, cvApi.CV_8U);
    detectorState = "learning";
    learningStartedAt = performance.now();
    setStatus("배경 학습 중", "learning");
  } catch (error) {
    console.error(error);
    setStatus("움직임 감지 모듈 오류", "detected");
  }
}

function updateMotionMeter(value) {
  const safe = Number.isFinite(value) ? Math.max(0, value) : 0;
  els.motionValue.textContent = `${safe.toFixed(1)}%`;
  els.motionBar.style.width = `${Math.min(100, safe)}%`;
}

function updateDetectorStatus() {
  if (detectorState === "learning") {
    setStatus("배경 학습 중", "learning");
  } else if (detectorState === "blocked") {
    setStatus("통과 감지 · 재감지 대기", "detected");
  } else if (detectorState === "ready") {
    if (measuring && !timerStarted) setStatus("첫 통과 대기", "measuring");
    else if (measuring) setStatus("랩타임 측정 중", "measuring");
    else setStatus("감지 준비", "ready");
  }
}

function processFrame(now) {
  animationFrameId = window.requestAnimationFrame(processFrame);
  if (processing || !cvReady || !stream || !detector || !roi || now - lastProcessAt < PROCESS_INTERVAL_MS) return;
  if (els.video.readyState < 2) return;
  lastProcessAt = now;
  processing = true;

  let source = null;
  let roiMat = null;
  let gray = null;
  let mask = null;
  try {
    if (!els.processingCanvas.width) resizeProcessingCanvas();
    const ctx = els.processingCanvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(els.video, 0, 0, els.processingCanvas.width, els.processingCanvas.height);

    const mapped = mapRoiToVideo();
    if (!mapped) return;
    const scaleX = els.processingCanvas.width / mapped.videoWidth;
    const scaleY = els.processingCanvas.height / mapped.videoHeight;
    const x = Math.max(0, Math.floor(mapped.left * scaleX));
    const y = Math.max(0, Math.floor(mapped.top * scaleY));
    const width = Math.max(1, Math.min(els.processingCanvas.width - x, Math.ceil((mapped.right - mapped.left) * scaleX)));
    const height = Math.max(1, Math.min(els.processingCanvas.height - y, Math.ceil((mapped.bottom - mapped.top) * scaleY)));

    source = cvApi.imread(els.processingCanvas);
    roiMat = source.roi(new cvApi.Rect(x, y, width, height));
    gray = new cvApi.Mat();
    mask = new cvApi.Mat();
    cvApi.cvtColor(roiMat, gray, cvApi.COLOR_RGBA2GRAY);
    detector.apply(gray, mask, detectorState === "learning" ? -1 : 0.002);
    cvApi.morphologyEx(mask, mask, cvApi.MORPH_OPEN, noiseKernel);

    const motion = cvApi.countNonZero(mask) / (width * height) * 100;
    updateMotionMeter(motion);
    const threshold = Number(els.sensitivityInput.value);

    if (detectorState === "learning") {
      if (now - learningStartedAt >= LEARNING_TIME_MS) detectorState = "ready";
    } else if (detectorState === "ready") {
      highMotionFrames = motion >= threshold ? highMotionFrames + 1 : 0;
      if (highMotionFrames >= 2) {
        detectorState = "blocked";
        lastDetectionAt = now;
        highMotionFrames = 0;
        clearFrames = 0;
        handlePass(now);
      }
    } else if (detectorState === "blocked") {
      clearFrames = motion < threshold * 0.6 ? clearFrames + 1 : 0;
      const cooldown = Number(els.cooldownInput.value);
      if (clearFrames >= CLEAR_FRAMES_REQUIRED && now - lastDetectionAt >= cooldown) {
        detectorState = "ready";
        clearFrames = 0;
      }
    }

    if (debugVisible) {
      cvApi.imshow(els.debugCanvas, mask);
      els.debugSize.textContent = `${width} × ${height}`;
    }
    updateDetectorStatus();
  } catch (error) {
    console.error(error);
    setStatus("프레임 처리 오류", "detected");
  } finally {
    mask?.delete();
    gray?.delete();
    roiMat?.delete();
    source?.delete();
    processing = false;
  }
}

function startProcessingLoop() {
  if (animationFrameId) return;
  lastProcessAt = 0;
  animationFrameId = window.requestAnimationFrame(processFrame);
}

function handlePass(now) {
  if (!measuring) return;
  if (!timerStarted) {
    timerStarted = true;
    lapStartedAt = now;
    updateTimer();
    showToast("첫 통과를 기준으로 타이머를 시작했습니다.");
    return;
  }

  const elapsed = now - lapStartedAt;
  if (elapsed < 500) return;
  laps.unshift({ number: laps.length + 1, time: formatTime(elapsed) });
  lapStartedAt = now;
  renderLaps();
  saveState();
}

function updateTimer(now = performance.now()) {
  if (!measuring || !timerStarted) return;
  els.timer.textContent = formatTime(now - lapStartedAt);
  timerFrameId = window.requestAnimationFrame(updateTimer);
}

function startMeasurement() {
  if (!stream || !roi || !cvReady) return;
  measuring = true;
  timerStarted = false;
  lapStartedAt = 0;
  els.timer.textContent = "00:00.00";
  els.measureButton.classList.add("running");
  els.measureButton.lastChild.textContent = " 측정 중지";
  resetDetector();
}

function stopMeasurement() {
  measuring = false;
  timerStarted = false;
  lapStartedAt = 0;
  window.cancelAnimationFrame(timerFrameId);
  timerFrameId = 0;
  els.timer.textContent = "00:00.00";
  els.measureButton.classList.remove("running");
  els.measureButton.lastChild.textContent = " 측정 시작";
  if (stream && roi) resetDetector();
}

function updateMeasureAvailability() {
  els.measureButton.disabled = !(cvReady && stream && roi);
}

async function initializeOpenCv() {
  try {
    const candidate = window.cv;
    if (!candidate) return false;
    cvApi = typeof candidate.then === "function" ? await candidate : candidate;
    if (typeof cvApi?.Mat !== "function") return false;
    cvReady = true;
    setStatus(stream ? (roi ? "감지 준비" : "감지 영역을 선택하세요") : "카메라 대기", stream && roi ? "ready" : "loading");
    updateMeasureAvailability();
    resetDetector();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

els.roiCanvas.addEventListener("pointerdown", onPointerDown);
els.roiCanvas.addEventListener("pointermove", onPointerMove);
els.roiCanvas.addEventListener("pointerup", finishPointer);
els.roiCanvas.addEventListener("pointercancel", cancelPointer);

els.cameraButton.addEventListener("click", () => {
  if (stream) stopCamera();
  else startCamera(els.cameraSelect.value);
});

els.measureButton.addEventListener("click", () => {
  if (measuring) stopMeasurement();
  else startMeasurement();
});

els.clearButton.addEventListener("click", () => {
  laps = [];
  renderLaps();
  saveState();
  showToast("랩타임 기록을 초기화했습니다.");
});

els.debugButton.addEventListener("click", () => {
  debugVisible = !debugVisible;
  els.debugPanel.hidden = !debugVisible;
  els.debugButton.setAttribute("aria-pressed", String(debugVisible));
});

els.resetBackgroundButton.addEventListener("click", () => {
  resetDetector();
  showToast("배경을 다시 학습합니다. 카메라를 잠시 고정해주세요.");
});

els.sensitivityInput.addEventListener("input", updateSensitivityLabel);
els.sensitivityInput.addEventListener("change", saveState);
els.cooldownInput.addEventListener("change", saveState);
els.cameraSelect.addEventListener("change", () => {
  if (stream) startCamera(els.cameraSelect.value);
});

window.addEventListener("resize", resizeRoiCanvas);
window.addEventListener("orientationchange", () => window.setTimeout(resizeRoiCanvas, 150));
window.addEventListener("opencv-ready", initializeOpenCv, { once: true });
window.addEventListener("pagehide", stopTracks);

updateSensitivityLabel();
renderLaps();
resizeRoiCanvas();

let openCvAttempts = 0;
const openCvPoll = window.setInterval(async () => {
  openCvAttempts += 1;
  if (await initializeOpenCv()) {
    window.clearInterval(openCvPoll);
  } else if (openCvAttempts >= 150) {
    window.clearInterval(openCvPoll);
    setStatus("영상 처리 모듈을 불러오지 못했습니다", "detected");
  }
}, 100);
