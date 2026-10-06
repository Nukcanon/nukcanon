import{a as e,n as t,o as n,r}from"./acis-DZFFxT5j.js";import{$i as i,$l as a,$o as o,$s as s,Aa as c,Ac as l,Ar as u,As as d,Ba as f,Bi as p,Bs as m,Ca as h,Cc as g,Cl as _,Cs as v,Cu as y,Dc as b,Di as x,Dl as S,Ds as C,Du as w,Ea as T,Ec as E,Ei as D,El as O,Er as k,Eu as A,Fc as ee,Fi as te,Fl as ne,Fr as re,Fs as j,Gi as ie,Gl as ae,Go as oe,Gs as se,Ha as ce,Hc as le,Hi as ue,Hl as de,Hs as fe,Ia as pe,Ii as M,Il as N,Ir as me,Is as he,Ji as ge,Jl as _e,Jo as ve,Ki as P,Kl as ye,Ks as be,La as xe,Lc as Se,Li as Ce,Ll as we,Ls as Te,Lt as Ee,Ma as F,Mi as De,Ms as Oe,Nc as ke,Ni as I,Nl as Ae,Nr as je,Ns as L,Oa as R,Oc as Me,Oi as Ne,Ol as Pe,Or as Fe,Os as Ie,Ou as Le,Pc as Re,Pi as ze,Pl as Be,Pr as Ve,Pt as He,Qi as Ue,Ql as We,Qo as Ge,Ra as Ke,Ri as qe,Rl as Je,Rs as Ye,Rt as Xe,Sc as Ze,Sl as Qe,Ss as $e,Su as et,Tc as tt,Tl as nt,Tr as rt,Ts as it,Tu as at,Ua as ot,Uc as st,Ui as ct,Ul as lt,Uo as ut,Ut as dt,Va as ft,Vc as pt,Vi as z,Vl as mt,Wi as ht,Wo as gt,Ws as B,Xi as _t,Xl as vt,Xo as yt,Xs as bt,Yl as xt,Yo as St,Ys as Ct,Zi as wt,Zo as Tt,_a as Et,_c as Dt,_u as Ot,aa as kt,ac as At,an as jt,as as Mt,bl as Nt,br as Pt,bs as Ft,bu as It,c as Lt,cc as Rt,cr as zt,cu as Bt,da as Vt,dc as Ht,dr as Ut,ds as Wt,du as V,ea as Gt,ec as Kt,es as qt,eu as Jt,fa as Yt,fc as Xt,fr as Zt,fs as Qt,ft as $t,fu as en,gc as H,gs as tn,gu as nn,hc as rn,hr as an,hu as on,ia as sn,ic as cn,is as ln,iu as un,jc as dn,ji as fn,jr as pn,js as mn,jt as hn,ka as gn,kc as _n,ki as vn,ks as yn,la as bn,lc as xn,lu as Sn,ma as Cn,mc as wn,mr as Tn,ms as U,mu as En,n as Dn,na as On,nc as kn,ns as An,nu as jn,oa as Mn,oc as Nn,or as Pn,ou as Fn,pa as In,pc as Ln,ps as Rn,pu as zn,qi as Bn,ql as Vn,qo as Hn,qt as Un,r as Wn,ra as Gn,rc as Kn,rs as qn,sa as Jn,sc as Yn,sr as Xn,ss as Zn,su as Qn,t as $n,ta as er,tc as tr,tn as nr,tu as rr,u as ir,ua as ar,uc as or,ur as sr,us as cr,uu as W,vc as lr,vs as ur,vu as dr,wa as fr,wc as pr,wi as mr,ws as hr,wu as gr,xi as _r,xl as vr,xu as yr,ya as br,yc as xr,yi as Sr,yl as Cr,ys as G,yu as wr,za as Tr,zi as Er,zl as Dr,zs as Or}from"./store-BamAyQdr.js";import{$ as K,$t as kr,A as Ar,At as jr,B as Mr,C as Nr,D as Pr,E as Fr,F as Ir,G as Lr,H as Rr,I as zr,It as Br,K as Vr,L as Hr,Pt as Ur,R as Wr,Rt as Gr,S as Kr,St as qr,T as Jr,U as Yr,V as Xr,W as Zr,X as q,Y as Qr,_t as $r,at as J,bt as ei,ct as ti,dt as ni,en as ri,et as ii,gt as ai,ht as oi,jt as si,l as ci,ln as li,lt as ui,mt as di,ot as fi,q as pi,r as mi,rt as hi,st as gi,tn as _i,vt as vi,w as yi,x as bi,xt as xi,yt as Si,z as Ci}from"./sketchTools-CHyesYYD.js";function wi(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ti(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wn},alphaMap:{value:null},alphaMapTransform:{value:new wn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wn}},envmap:{envMap:{value:null},envMapRotation:{value:new wn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wn},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wn},alphaTest:{value:0},uvTransform:{value:new wn}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wn},alphaMap:{value:null},alphaMapTransform:{value:new wn},alphaTest:{value:0}}},Ei={basic:{uniforms:gr([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:gr([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:gr([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:gr([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:gr([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new G(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:gr([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:gr([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:gr([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:gr([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:gr([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:gr([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new wn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wn}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:gr([X.common,X.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:gr([X.lights,X.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Ei.physical={uniforms:gr([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wn},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wn},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wn},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wn},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wn},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wn}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Di={r:0,b:0,g:0},Oi=new rn,ki=new wn;ki.set(-1,0,0,0,1,0,0,0,1);function Ai(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new H(new Qt(1,1,1),new N({name:`BackgroundCubeMaterial`,uniforms:Ot(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Oi.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ki),l.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Be,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new H(new dn(2,2),new N({name:`BackgroundMaterial`,uniforms:Ot(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Di,et(e)),n.buffers.color.setClear(Di.r,Di.g,Di.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ji(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Mi(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ni(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(A(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&A(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Pi(e){let t=this,n=null,r=0,i=!1,a=!1,o=new l,s=new wn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=d(e,t,0)},this.setState=function(t,o,s){let l=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||l===null||l.length===0||a&&!p)a?d(null):u();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=d(l,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function d(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Fi=4,Ii=6,Li=20,Ri=256,zi=new Me,Bi=new G,Vi=null,Hi=0,Ui=0,Wi=!1,Gi=new V,Ki=new V,qi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Gi}=i;Vi=this._renderer.getRenderTarget(),Hi=this._renderer.getActiveCubeFace(),Ui=this._renderer.getActiveMipmapLevel(),Wi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$i(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vi,Hi,Ui),this._renderer.xr.enabled=Wi,e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vi=this._renderer.getRenderTarget(),Hi=this._renderer.getActiveCubeFace(),Ui=this._renderer.getActiveMipmapLevel(),Wi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:se,format:le,colorSpace:or,depthBuffer:!1},r=Yi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yi(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ji(r)),this._blurMaterial=Qi(r,e,t),this._ggxMaterial=Zi(r,e,t)}return r}_compileMaterial(e){let t=new H(new U,e);this._renderer.compile(t,zi)}_sceneToCubeUV(e,t,n,r,i){let a=new _n(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Bi),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new H(new Qt,new Dt({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Bi),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Xi(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$i());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Xi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,zi)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Fi?n-d+Fi:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Xi(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,zi),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Xi(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,zi)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Xi(t,3*l*(r>this._lodMax-Fi?r-this._lodMax+Fi:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,zi)}};function Ji(e){let t=[],n=[],r=e,i=e-Fi+1+Ii;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ki.set(1,r,n):e===1?Ki.set(-n,1,-r):e===2?Ki.set(-n,r,1):e===3?Ki.set(-1,r,-n):e===4?Ki.set(-n,-1,r):Ki.set(n,r,-1),Ki.toArray(l,(e*6+t)*3)}}let u=new U;u.setAttribute(`position`,new Rn(c,3)),u.setAttribute(`outputDirection`,new Rn(l,3)),n.push(new H(u,null)),r>Fi&&r--}return{lodMeshes:n,sizeLods:t}}function Yi(e,t,n){let r=new En(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Xi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Zi(e,t,n){return new N({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qi(e,t,n){return new N({name:`SphericalGaussianBlur`,defines:{SAMPLES:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $i(){return new N({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ea(){return new N({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ta(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var na=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new it(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qt(5,5,5),i=new N({name:`CubemapFromEquirect`,uniforms:Ot(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new H(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Yn),new v(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ra(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new na(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new qi(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new qi(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ia(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&w(`WebGLRenderer: `+e+` extension not supported.`),t}}}function aa(e,t,n,r){let i={},o=new WeakMap;function s(e){let a=e.target;a.index!==null&&t.remove(a.index);for(let e in a.attributes)t.remove(a.attributes[e]);a.removeEventListener(`dispose`,s),delete i[a.id];let c=o.get(a);c&&(t.remove(c),o.delete(a)),r.releaseStatesOfGeometry(a),a.isInstancedBufferGeometry===!0&&delete a._maxInstanceCount,n.memory.geometries--}function c(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,s),i[t.id]=!0,n.memory.geometries++,t)}function l(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function u(e){let n=[],r=e.index,i=e.attributes.position,s=0;if(i===void 0)return;if(r!==null){let e=r.array;s=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;s=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let c=new(i.count>=65535?Jt:a)(n,1);c.version=s;let l=o.get(e);l&&t.remove(l),o.set(e,c)}function d(e){let t=o.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&u(e)}else u(e);return o.get(e)}return{get:c,update:l,getWireframeAttribute:d}}function oa(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function sa(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:It(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ca(e,t,n){let r=new WeakMap,i=new en;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,h=1;p>t.maxTextureSize&&(h=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*h*4*u),_=new Ie(g,p,h,u);_.type=m,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new W(p,h)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function la(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ua={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function da(e,t,n,r,i,a){let o=new En(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new U;l.setAttribute(`position`,new Or([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Or([0,2,0,0,2,0],2));let u=new vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new H(l,u),f=new Me(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new En(t,n,{type:se,depthBuffer:!1,stencilBuffer:!1}),c=new En(t,n,{type:se,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ft.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ua[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var fa=new _e,pa=new Oe(1,1),ma=new Ie,ha=new C,ga=new it,_a=[],va=[],ya=new Float32Array(16),ba=new Float32Array(9),xa=new Float32Array(4);function Sa(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=_a[i];if(a===void 0&&(a=new Float32Array(i),_a[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ca(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function wa(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ta(e,t){let n=va[t];n===void 0&&(n=new Int32Array(t),va[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ea(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Da(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ca(n,t))return;e.uniform2fv(this.addr,t),wa(n,t)}}function Oa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ca(n,t))return;e.uniform3fv(this.addr,t),wa(n,t)}}function ka(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ca(n,t))return;e.uniform4fv(this.addr,t),wa(n,t)}}function Aa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ca(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),wa(n,t)}else{if(Ca(n,r))return;xa.set(r),e.uniformMatrix2fv(this.addr,!1,xa),wa(n,r)}}function ja(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ca(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),wa(n,t)}else{if(Ca(n,r))return;ba.set(r),e.uniformMatrix3fv(this.addr,!1,ba),wa(n,r)}}function Ma(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ca(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),wa(n,t)}else{if(Ca(n,r))return;ya.set(r),e.uniformMatrix4fv(this.addr,!1,ya),wa(n,r)}}function Na(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Pa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ca(n,t))return;e.uniform2iv(this.addr,t),wa(n,t)}}function Fa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ca(n,t))return;e.uniform3iv(this.addr,t),wa(n,t)}}function Ia(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ca(n,t))return;e.uniform4iv(this.addr,t),wa(n,t)}}function La(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ra(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ca(n,t))return;e.uniform2uiv(this.addr,t),wa(n,t)}}function za(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ca(n,t))return;e.uniform3uiv(this.addr,t),wa(n,t)}}function Ba(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ca(n,t))return;e.uniform4uiv(this.addr,t),wa(n,t)}}function Va(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(pa.compareFunction=n.isReversedDepthBuffer()?518:515,a=pa):a=fa,n.setTexture2D(t||a,i)}function Ha(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ha,i)}function Ua(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ga,i)}function Wa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ma,i)}function Ga(e){switch(e){case 5126:return Ea;case 35664:return Da;case 35665:return Oa;case 35666:return ka;case 35674:return Aa;case 35675:return ja;case 35676:return Ma;case 5124:case 35670:return Na;case 35667:case 35671:return Pa;case 35668:case 35672:return Fa;case 35669:case 35673:return Ia;case 5125:return La;case 36294:return Ra;case 36295:return za;case 36296:return Ba;case 35678:case 36198:case 36298:case 36306:case 35682:return Va;case 35679:case 36299:case 36307:return Ha;case 35680:case 36300:case 36308:case 36293:return Ua;case 36289:case 36303:case 36311:case 36292:return Wa}}function Ka(e,t){e.uniform1fv(this.addr,t)}function qa(e,t){let n=Sa(t,this.size,2);e.uniform2fv(this.addr,n)}function Ja(e,t){let n=Sa(t,this.size,3);e.uniform3fv(this.addr,n)}function Ya(e,t){let n=Sa(t,this.size,4);e.uniform4fv(this.addr,n)}function Xa(e,t){let n=Sa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Za(e,t){let n=Sa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Qa(e,t){let n=Sa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function $a(e,t){e.uniform1iv(this.addr,t)}function eo(e,t){e.uniform2iv(this.addr,t)}function to(e,t){e.uniform3iv(this.addr,t)}function no(e,t){e.uniform4iv(this.addr,t)}function ro(e,t){e.uniform1uiv(this.addr,t)}function io(e,t){e.uniform2uiv(this.addr,t)}function ao(e,t){e.uniform3uiv(this.addr,t)}function oo(e,t){e.uniform4uiv(this.addr,t)}function so(e,t,n){let r=this.cache,i=t.length,a=Ta(n,i);Ca(r,a)||(e.uniform1iv(this.addr,a),wa(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?pa:fa;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function co(e,t,n){let r=this.cache,i=t.length,a=Ta(n,i);Ca(r,a)||(e.uniform1iv(this.addr,a),wa(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ha,a[e])}function lo(e,t,n){let r=this.cache,i=t.length,a=Ta(n,i);Ca(r,a)||(e.uniform1iv(this.addr,a),wa(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ga,a[e])}function uo(e,t,n){let r=this.cache,i=t.length,a=Ta(n,i);Ca(r,a)||(e.uniform1iv(this.addr,a),wa(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ma,a[e])}function fo(e){switch(e){case 5126:return Ka;case 35664:return qa;case 35665:return Ja;case 35666:return Ya;case 35674:return Xa;case 35675:return Za;case 35676:return Qa;case 5124:case 35670:return $a;case 35667:case 35671:return eo;case 35668:case 35672:return to;case 35669:case 35673:return no;case 5125:return ro;case 36294:return io;case 36295:return ao;case 36296:return oo;case 35678:case 36198:case 36298:case 36306:case 35682:return so;case 35679:case 36299:case 36307:return co;case 35680:case 36300:case 36308:case 36293:return lo;case 36289:case 36303:case 36311:case 36292:return uo}}var po=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ga(t.type)}},mo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fo(t.type)}},ho=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},go=/(\w+)(\])?(\[|\.)?/g;function _o(e,t){e.seq.push(t),e.map[t.id]=t}function vo(e,t,n){let r=e.name,i=r.length;for(go.lastIndex=0;;){let a=go.exec(r),o=go.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){_o(n,l===void 0?new po(s,e,t):new mo(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ho(s),_o(n,e)),n=e}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);vo(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function bo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var xo=37297,So=0;function Co(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var wo=new wn;function To(e){Ft._getMatrix(wo,Ft.workingColorSpace,e);let t=`mat3( ${wo.elements.map(e=>e.toFixed(4))} )`;switch(Ft.getTransfer(e)){case Ht:return[t,`LinearTransferOETF`];case Be:return[t,`sRGBTransferOETF`];default:return A(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Eo(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Co(e.getShaderSource(t),r)}return i}function Do(e,t){let n=To(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Oo={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ko(e,t){let n=Oo[t];return n===void 0?(A(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ao=new V;function jo(){return Ft.getLuminanceCoefficients(Ao),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ao.x.toFixed(4)}, ${Ao.y.toFixed(4)}, ${Ao.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Mo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Fo).join(`
`)}function No(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Po(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Fo(e){return e!==``}function Io(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ro=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(e){return e.replace(Ro,Vo)}var Bo=new Map;function Vo(e,t){let n=Y[t];if(n===void 0){let e=Bo.get(t);if(e!==void 0)n=Y[e],A(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return zo(n)}var Ho=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(e){return e.replace(Ho,Wo)}function Wo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Go(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ko={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function qo(e){return Ko[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Jo={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Yo(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Jo[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Xo={302:`ENVMAP_MODE_REFRACTION`};function Zo(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Xo[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Qo={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function $o(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Qo[e.combine]||`ENVMAP_BLENDING_NONE`}function es(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ts(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=qo(n),l=Yo(n),u=Zo(n),d=$o(n),f=es(n),p=Mo(n),m=No(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Fo).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Fo).join(`
`),_.length>0&&(_+=`
`)):(g=[Go(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Fo).join(`
`),_=[Go(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:ko(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Do(`linearToOutputTexel`,n.outputColorSpace),jo(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Fo).join(`
`)),o=zo(o),o=Io(o,n),o=Lo(o,n),s=zo(s),s=Io(s,n),s=Lo(s,n),o=Uo(o),s=Uo(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=bo(i,i.VERTEX_SHADER,y),S=bo(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Eo(i,x,`vertex`),n=Eo(i,S,`fragment`);It(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):A(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new yo(i,h),T=Po(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,xo)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=So++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ns=0,rs=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new is(e),t.set(e,n)),n}},is=class{constructor(e){this.id=ns++,this.code=e,this.usedTimes=0}};function as(e){return e===1030||e===37490||e===36285}function os(e,t,n,r,i,a){let o=new Kt,s=new rs,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&A(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=Ei[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,ee=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,ie=!!i.map,ae=!!i.matcap,oe=!!x,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,ue=!!i.normalMap,de=!!i.displacementMap,fe=!!i.emissiveMap,pe=!!i.metalnessMap,M=!!i.roughnessMap,N=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,P=i.transmission>0,ye=N&&!!i.anisotropyMap,be=me&&!!i.clearcoatMap,xe=me&&!!i.clearcoatNormalMap,Se=me&&!!i.clearcoatRoughnessMap,Ce=_e&&!!i.iridescenceMap,we=_e&&!!i.iridescenceThicknessMap,Te=ve&&!!i.sheenColorMap,Ee=ve&&!!i.sheenRoughnessMap,F=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=P&&!!i.transmissionMap,I=P&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,L=i.alphaTest>0,R=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:ae,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:se,lightMap:ce,bumpMap:le,normalMap:ue,displacementMap:de,emissiveMap:fe,normalMapObjectSpace:ue&&i.normalMapType===1,normalMapTangentSpace:ue&&i.normalMapType===0,packedNormalMap:ue&&i.normalMapType===0&&as(i.normalMap.format),metalnessMap:pe,roughnessMap:M,anisotropy:N,anisotropyMap:ye,clearcoat:me,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:ve,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:F,specularColorMap:De,specularIntensityMap:Oe,transmission:P,transmissionMap:ke,thicknessMap:I,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:L,alphaHash:R,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:ce&&m(i.lightMap.channel),bumpMapUv:le&&m(i.bumpMap.channel),normalMapUv:ue&&m(i.normalMap.channel),displacementMapUv:de&&m(i.displacementMap.channel),emissiveMapUv:fe&&m(i.emissiveMap.channel),metalnessMapUv:pe&&m(i.metalnessMap.channel),roughnessMapUv:M&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:F&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:I&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ue||N),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ue===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Ft.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:fe&&i.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ei[t];n=rr.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ts(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ss(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function cs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ls(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function us(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||cs),r.length>1&&r.sort(t||ls),i.length>1&&i.sort(t||ls)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ds(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new us,e.set(t,[i])):n>=r.length?(i=new us,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function fs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new G};break;case`SpotLight`:n={position:new V,direction:new V,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function ps(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ms=0;function hs(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function gs(e){let t=new fs,n=ps(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new rn,o=new rn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(hs);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ms++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function _s(e){let t=new gs(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function vs(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new _s(e),t.set(n,[a])):r>=i.length?(a=new _s(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ys=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bs=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xs=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Ss=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Cs=new rn,ws=new V,Ts=new V;function Es(e,t,n){let r=new fe,i=new W,a=new W,o=new en,s=new lr,c=new xr,l={},u=n.maxTextureSize,f={0:1,1:0,2:2},p=new N({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:ys,fragmentShader:bs}),h=p.clone();h.defines.HORIZONTAL_PASS=1;let g=new U;g.setAttribute(`position`,new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new H(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(A(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let h=y!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],f=l.shadow;if(f===void 0){A(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();i.multiply(g),a.copy(f.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,f.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,f.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=_,f.map===null||h===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(l.isPointLight){A(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new En(i.x,i.y,{format:Cr,type:se,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),f.map.texture.name=l.name+`.shadowMap`,f.map.depthTexture=new Oe(i.x,i.y,m),f.map.depthTexture.name=l.name+`.shadowMapDepth`,f.map.depthTexture.format=d,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=pr,f.map.depthTexture.magFilter=pr}else l.isPointLight?(f.map=new na(i.x),f.map.depthTexture=new hr(i.x,Fn)):(f.map=new En(i.x,i.y),f.map.depthTexture=new Oe(i.x,i.y,Fn)),f.map.depthTexture.name=l.name+`.shadowMap`,f.map.depthTexture.format=d,this.type===1?(f.map.depthTexture.compareFunction=_?518:515,f.map.depthTexture.minFilter=Yn,f.map.depthTexture.magFilter=Yn):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=pr,f.map.depthTexture.magFilter=pr);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==i.x||f.map.height!==i.y)&&f.map.setSize(i.x,i.y);let v=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();l.isPointLight!==!0&&f.updateMatrices(l,s);for(let t=0;t<v;t++){let i=f.getCamera(t);if(l.isPointLight){let e=f.camera,n=f.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ws.setFromMatrixPosition(l.matrixWorld),e.position.copy(ws),Ts.copy(e.position),Ts.add(xs[t]),e.up.copy(Ss[t]),e.lookAt(Ts),e.updateMatrixWorld(),n.makeTranslation(-ws.x,-ws.y,-ws.z),Cs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Cs,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=f.getFrustum(t),S(n,s,i,l,this.type)}f.isPointLightShadow!==!0&&this.type===3&&b(f,s),f.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,f)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new En(i.x,i.y,{format:Cr,type:se}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ds(e,t){function n(){let t=!1,n=new en,r=null,i=new en(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?pe(e.DEPTH_TEST):M(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=S[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?pe(e.STENCIL_TEST):M(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,C=null,w=null,T=new G(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,j=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=j>=1);let ae=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new en().fromArray(se),ue=new en().fromArray(ce);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let fe={};fe[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),pe(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),pe(e.CULL_FACE),ve(0);function pe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function M(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function N(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(M(e.BLEND),g=!1);return}if(g===!1&&(pe(e.BLEND),g=!0),t!==5){if(t!==_||u!==D){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:It(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:It(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:It(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:It(`WebGLState: Invalid blending: `,t)}y=null,b=null,C=null,w=null,T.set(0,0,0),E=0,_=t,D=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==C||s!==w)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),_=t,D=!1}function P(t,n){t.side===2?M(e.CULL_FACE):pe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):M(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function be(t){t===0?M(e.CULL_FACE):(pe(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function xe(t){t!==A&&(re&&e.lineWidth(t),A=t)}function Se(t,n,r){t?(pe(e.POLYGON_OFFSET_FILL),(ee!==n||te!==r)&&(ee=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):M(e.POLYGON_OFFSET_FILL)}function Ce(t){t?pe(e.SCISSOR_TEST):M(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+ne-1),ae!==t&&(e.activeTexture(t),ae=t)}function Te(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+ne-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||fe[t]),i.type=t,i.texture=n)}function Ee(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function F(){try{e.compressedTexImage2D(...arguments)}catch(e){It(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){It(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){It(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){It(`WebGLState:`,e)}}function I(){try{e.compressedTexSubImage2D(...arguments)}catch(e){It(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){It(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){It(`WebGLState:`,e)}}function L(){try{e.texStorage3D(...arguments)}catch(e){It(`WebGLState:`,e)}}function R(){try{e.texImage2D(...arguments)}catch(e){It(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){It(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Fe(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Ie(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,C=null,w=null,T=new G(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,te=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:pe,disable:M,bindFramebuffer:N,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:P,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:F,compressedTexImage3D:De,texImage2D:R,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:je,texStorage3D:L,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:I,compressedTexSubImage3D:Ae,scissor:Fe,viewport:Ie,reset:ze}}function Os(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new W,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):wr(`canvas`)}function _(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),A(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&A(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function v(e){return e.generateMipmaps}function y(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];A(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||A(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ht:Ft.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function S(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,A(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function C(e,t){return v(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),ee(t)}function D(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&k(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function k(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let te=0;function ne(){te=0}function re(){return te}function j(e){te=e}function ie(){let e=te;return e>=i.maxTextures&&A(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),te+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,i){let a=r.get(t);if(t.isVideoTexture&&De(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)A(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)A(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){he(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){he(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[O]:e.REPEAT,[ur]:e.CLAMP_TO_EDGE,[g]:e.MIRRORED_REPEAT},de={[pr]:e.NEAREST,[E]:e.NEAREST_MIPMAP_NEAREST,[tt]:e.NEAREST_MIPMAP_LINEAR,[Yn]:e.LINEAR,[xn]:e.LINEAR_MIPMAP_NEAREST,[Rt]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&A(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function M(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,w));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ae(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&k(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function N(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=N(n.start,r.width,4),c=N(t.start,r.width,4);n.start<=i+1&&a===c&&N(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function he(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=M(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Ft.getPrimaries(Ft.workingColorSpace),r=o.colorSpace===``?null:Ft.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=_(o.image,!1,i.maxTextureSize);t=Oe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=x(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);pe(c,o);let h,g=o.mipmaps,b=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=C(o,t);if(o.isDepthTexture)m=S(o.format===mn,o.type),w&&(b?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else b?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&me(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){b&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(b){if(T){if(o.layerUpdates.size>0){let t=yr(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else A(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else b?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?A(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(b){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=yr(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)b?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(b)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(b&&w){let t=ke(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(b){if(w){let r=ke(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);v(o)&&y(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,o,s){if(o.image.length!==6)return;let c=M(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Ft.getPrimaries(Ft.workingColorSpace),r=o.colorSpace===``?null:Ft.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=_(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Oe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),b=a.convert(o.type),S=x(o.internalFormat,g,b,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=C(o,h);pe(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,g,b,i.data):g===null?A(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ke(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,m[t].width,m[t].height,0,g,b,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,g,b,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,g,b,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,g,b,i.image[t])}}}v(o)&&y(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=x(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ee(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=S(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=x(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function P(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,w)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else oe(i.depthTexture,0);let u=l.__webglTexture,d=Ee(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ye(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)P(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?P(i.__webglFramebuffer[0],t,0):P(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ye(t)}function xe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,T);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=x(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(i)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),pe(c,a),_e(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),v(a)&&y(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),pe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);v(i)&&y(r),n.unbindTexture()}t.depthBuffer&&ye(t)}function Se(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(v(a)){let t=b(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),y(t),n.unbindTexture()}}}let Ce=[],we=[];function Te(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ce.length=0,we.length=0,Ce.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ce.push(l),we.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function De(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Oe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ft.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&A(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):It(`WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ie,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=j,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=be,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=F,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ks(e,t){function n(n,r=``){let i,a=Ft.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var As=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,js=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ms=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ye(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new N({vertexShader:As,fragmentShader:js,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ns=class extends Te{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new Ms,_={},v=t.getContextAttributes(),y=null,b=null,x=[],S=[],C=new W,w=null,T=null,E=new _n;E.viewport=new en;let D=new _n;D.viewport=new en;let O=[E,D],k=new cr,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new on,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new on,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new on,x[e]=t),t.getHandSpace()};function ne(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,j);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,te=null,g.reset();for(let e in _)delete _[e];if(e.setRenderTarget(y),p=null,f=null,u=null,r=null,b=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&A(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&A(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,j),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?mn:d,a=v.stencil?un:Fn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new En(f.textureWidth,f.textureHeight,{format:le,type:jn,depthTexture:new Oe(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new En(p.framebufferWidth,p.framebufferHeight,{format:le,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ie=new V,ae=new V;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),k.near=D.near=E.near=t,k.far=D.far=E.far=n,(ee!==k.near||te!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ee=k.near,te=k.far),k.layers.mask=e.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;se(k,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,k,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Se*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(e){return _[e]};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=O[n];o===void 0&&(o=new _n,o.layers.enable(n),o.viewport=new en,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new Ye,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let fe=new wi;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},Ps=new rn,Fs=new wn;Fs.set(-1,0,0,0,1,0,0,0,1);function Is(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,et(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ps.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Fs),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ls(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return It(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?A(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):A(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Rs=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zs=null;function Bs(){return zs===null&&(zs=new yn(Rs,16,16,Cr,se),zs.name=`DFG_LUT`,zs.minFilter=Yn,zs.magFilter=Yn,zs.wrapS=ur,zs.wrapT=ur,zs.generateMipmaps=!1,zs.needsUpdate=!0),zs}var Vs=class{constructor(e={}){let{canvas:t=dr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=jn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([st,Nt,nt]),g=new Set([jn,Fn,Sn,un,Qn,Bt]),_=new Uint32Array(4),v=new Int32Array(4),b=new V,x=null,S=null,C=[],w=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1,O=null,k=null,ee=null,te=null;this._outputColorSpace=Ae;let ne=0,re=0,j=null,ie=-1,ae=null,oe=new en,ce=new en,le=null,ue=new G(0),de=0,pe=t.width,M=t.height,N=1,me=null,he=null,ge=new en(0,0,pe,M),_e=new en(0,0,pe,M),ve=!1,P=new fe,ye=!1,be=!1,xe=new rn,Se=new V,Ce=new en,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ee(){return j===null?N:1}let F=n;function De(e,n){return t.getContext(e,n)}let Oe,ke,I,je,L,R,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ze,!1),t.addEventListener(`webglcontextrestored`,Qe,!1),t.addEventListener(`webglcontextcreationerror`,$e,!1),F===null){let t=`webgl2`;if(F=De(t,e),F===null)throw De(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ye()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ze,!1),t.removeEventListener(`webglcontextrestored`,Qe,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),It(`WebGLRenderer: `+e.message),e}function Ye(){Oe=new ia(F),Oe.init(),Ke=new ks(F,Oe),ke=new Ni(F,Oe,e,Ke),I=new Ds(F,Oe),ke.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),k=F.createFramebuffer(),ee=F.createFramebuffer(),te=F.createFramebuffer(),je=new sa(F),L=new ss,R=new Os(F,Oe,I,L,ke,Ke,je),Me=new ra(E),Ne=new Ti(F),qe=new ji(F,Ne),Pe=new aa(F,Ne,je,qe),Fe=new la(F,Pe,Ne,qe,je),Ue=new ca(F,ke,R),Be=new Pi(L),Ie=new os(E,Me,Oe,ke,qe,Be),Le=new Is(E,L),Re=new ds,ze=new vs(Oe),He=new Ai(E,Me,I,Fe,p,s),Ve=new Es(E,Fe,ke),Je=new Ls(F,je,ke,I),We=new Mi(F,Oe,je),Ge=new oa(F,Oe,je),je.programs=Ie.programs,E.capabilities=ke,E.extensions=Oe,E.properties=L,E.renderLists=Re,E.shadowMap=Ve,E.state=I,E.info=je}m!==1009&&(T=new da(m,t.width,t.height,o,r,i));let Xe=new Ns(E,F);this.xr=Xe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(e){e!==void 0&&(N=e,this.setSize(pe,M,!1))},this.getSize=function(e){return e.set(pe,M)},this.setSize=function(e,n,r=!0){if(Xe.isPresenting){A(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,M=n,t.width=Math.floor(e*N),t.height=Math.floor(n*N),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*N,M*N).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,M=n,N=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){It(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){A(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}T.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(oe)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),I.viewport(oe.copy(ge).multiplyScalar(N).round())},this.getScissor=function(e){return e.copy(_e)},this.setScissor=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),I.scissor(ce.copy(_e).multiplyScalar(N).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){I.setScissorTest(ve=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=He.getClearColor(),r=He.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),O=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ze,!1),t.removeEventListener(`webglcontextrestored`,Qe,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),He.dispose(),Re.dispose(),ze.dispose(),L.dispose(),Me.dispose(),Fe.dispose(),qe.dispose(),Je.dispose(),Ie.dispose(),Xe.dispose(),Xe.removeEventListener(`sessionstart`,lt),Xe.removeEventListener(`sessionend`,ut),dt.stop()};function Ze(e){e.preventDefault(),y(`WebGLRenderer: Context Lost.`),D=!0}function Qe(){y(`WebGLRenderer: Context Restored.`),D=!1;let e=je.autoReset,t=Ve.enabled,n=Ve.autoUpdate,r=Ve.needsUpdate,i=Ve.type;Ye(),je.autoReset=e,Ve.enabled=t,Ve.autoUpdate=n,Ve.needsUpdate=r,Ve.type=i}function $e(e){It(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function et(e){let t=e.target;t.removeEventListener(`dispose`,et),tt(t)}function tt(e){rt(e),L.remove(e)}function rt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ie.releaseProgram(e)}),e.isShaderMaterial&&Ie.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=we);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=yt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;qe.setup(i,r,s,n,c);let h,g=We;if(c!==null&&(h=Ne.get(c),g=Ge,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ee()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ee()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Oe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function it(e,t,n,r){O!==null&&e.isNodeMaterial&&O.setObject(r,e),ye===!0&&Be.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,gt(e,t,r),e.side=0,e.needsUpdate=!0,gt(e,t,r),e.side=2):gt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),O!==null&&O.renderStart(e,t,n),S=ze.get(n),S.init(t),w.push(S),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),S.setupLights(),O!==null&&O.updateLights(S.state.lightsArray),be=this.localClippingEnabled,ye=Be.init(this.clippingPlanes,be),ye===!0&&Be.setGlobalState(this.clippingPlanes,t),O!==null&&Ve.render(S.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];it(o,n,t,e),r.add(o)}else it(i,n,t,e),r.add(i)}}),S=w.pop(),O!==null&&O.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Oe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ot=null;function ct(e){ot&&ot(e)}function lt(){dt.stop()}function ut(){dt.start()}let dt=new wi;dt.setAnimationLoop(ct),typeof self<`u`&&dt.setContext(self),this.setAnimationLoop=function(e){ot=e,Xe.setAnimationLoop(e),e===null?dt.stop():dt.start()},Xe.addEventListener(`sessionstart`,lt),Xe.addEventListener(`sessionend`,ut),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){It(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(D===!0)return;O!==null&&O.renderStart(e,t);let n=Xe.enabled===!0&&Xe.isPresenting===!0,r=T!==null&&(j===null||n)&&T.begin(E,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(t),t=Xe.getCamera()),e.isScene===!0&&e.onBeforeRender(E,e,t,j),S=ze.get(e,w.length),S.init(t),S.state.textureUnits=R.getTextureUnits(),w.push(S),xe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),P.setFromProjectionMatrix(xe,zn,t.reversedDepth),be=this.localClippingEnabled,ye=Be.init(this.clippingPlanes,be),x=Re.get(e,C.length),x.init(),C.push(x),Xe.enabled===!0&&Xe.isPresenting===!0){let e=E.xr.getDepthSensingMesh();e!==null&&ft(e,t,-1/0,E.sortObjects)}ft(e,t,0,E.sortObjects),x.finish(),O!==null&&O.updateLights(S.state.lightsArray),E.sortObjects===!0&&x.sort(me,he),Te=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Te&&He.addToRenderList(x,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&Be.beginShadows();let i=S.state.shadowsArray;if(Ve.render(i,e,t),ye===!0&&Be.endShadows(),(r&&T.hasRenderPass())===!1){let n=x.opaque,r=x.transmissive;if(S.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];z(n,r,e,a)}Te&&He.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];pt(x,e,n,n.viewport)}}else r.length>0&&z(n,r,e,t),Te&&He.render(e),pt(x,e,t)}j!==null&&re===0&&(R.updateMultisampleRenderTarget(j),R.updateRenderTargetMipmap(j)),r&&T.end(E),e.isScene===!0&&e.onAfterRender(E,e,t),qe.resetDefaultState(),ie=-1,ae=null,w.pop(),w.length>0?(S=w[w.length-1],R.setTextureUnits(S.state.textureUnits),ye===!0&&Be.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,C.pop(),x=C.length>0?C[C.length-1]:null,O!==null&&O.renderEnd()};function ft(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)S.pushLightProbeGrid(e);else if(e.isLight)S.pushLight(e),e.castShadow&&S.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(P)){r&&Ce.setFromMatrixPosition(e.matrixWorld).applyMatrix4(xe);let i=Fe.update(e),a=e.material;a.visible&&x.push(e,i,a,n,Ce.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(P))){let i=Fe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ce.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ce.copy(e.boundingSphere.center)),Ce.applyMatrix4(e.matrixWorld).applyMatrix4(xe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&x.push(e,i,c,n,Ce.z,s,t)}}else a.visible&&x.push(e,i,a,n,Ce.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ft(i[e],t,n,r)}function pt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;S.setupLightsView(n),ye===!0&&Be.setGlobalState(E.clippingPlanes,n),r&&I.viewport(oe.copy(r)),i.length>0&&mt(i,t,n),a.length>0&&mt(a,t,n),o.length>0&&mt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function z(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[r.id]===void 0){let e=Oe.has(`EXT_color_buffer_half_float`)||Oe.has(`EXT_color_buffer_float`);S.state.transmissionRenderTarget[r.id]=new En(1,1,{generateMipmaps:!0,type:e?se:jn,minFilter:Rt,samples:Math.max(4,ke.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}let a=S.state.transmissionRenderTarget[r.id],o=r.viewport||oe;a.setSize(o.z*E.transmissionResolutionScale,o.w*E.transmissionResolutionScale);let s=E.getRenderTarget(),c=E.getActiveCubeFace(),l=E.getActiveMipmapLevel();E.setRenderTarget(a),E.getClearColor(ue),de=E.getClearAlpha(),de<1&&E.setClearColor(16777215,.5),E.clear(),Te&&He.render(n);let u=E.toneMapping;E.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),S.setupLightsView(r),ye===!0&&Be.setGlobalState(E.clippingPlanes,r),mt(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Oe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ht(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}E.setRenderTarget(s,c,l),E.setClearColor(ue,de),d!==void 0&&(r.viewport=d),E.toneMapping=u}function mt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ht(o,t,n,s,l,c)}}function ht(e,t,n,r,i,a){O!==null&&i.isNodeMaterial&&O.setObject(e,i),e.onBeforeRender(E,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(E,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,E.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,E.renderBufferDirect(n,t,r,i,e,a),i.side=2):E.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(E,t,n,r,i,a)}function gt(e,t,n){t.isScene!==!0&&(t=we);let r=L.get(e),i=S.state.lights,a=S.state.shadowsArray,o=i.state.version,s=Ie.getParameters(e,i.state,a,t,n,S.state.lightProbeGridArray),c=Ie.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,et),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return _t(e,s),d}else s.uniforms=Ie.getUniforms(e),O!==null&&e.isNodeMaterial&&O.build(e,n,s),e.onBeforeCompile(s,E),d=Ie.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Be.uniform),_t(e,s),r.needsLights=xt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=S.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function B(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=yo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function _t(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function vt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];b.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(b))return n}return null}function yt(e,t,n,r,i){t.isScene!==!0&&(t=we),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?E.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ft.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=E.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=S.state.lights;if(ye===!0&&(be===!0||e!==ae)){let t=e===ae&&r.id===ie;Be.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Be.numPlanes||v.numIntersection!==Be.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=S.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=gt(r,t,i),O&&r.isNodeMaterial&&O.onUpdateProgram(r,x,v));let C=!1,w=!1,T=!1,D=x.getUniforms(),k=v.uniforms;if(I.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==ie&&(ie=r.id,w=!0),v.needsLights){let e=vt(S.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ae!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),D.setValue(F,`projectionMatrix`,e.projectionMatrix),D.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(F,Se.setFromMatrixPosition(e.matrixWorld)),ke.logarithmicDepthBuffer&&D.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),ae!==e&&(ae=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&D.setValue(F,`sunShadowMap`,y.state.sunShadowMap,R),y.state.directionalShadowMap.length>0&&D.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,R),y.state.spotShadowMap.length>0&&D.setValue(F,`spotShadowMap`,y.state.spotShadowMap,R),y.state.pointShadowMap.length>0&&D.setValue(F,`pointShadowMap`,y.state.pointShadowMap,R)),i.isSkinnedMesh){D.setOptional(F,i,`bindMatrix`),D.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(D.setOptional(F,i,`batchingTexture`),D.setValue(F,`batchingTexture`,i._matricesTexture,R),D.setOptional(F,i,`batchingIdTexture`),D.setValue(F,`batchingIdTexture`,i._indirectTexture,R),D.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ue.update(i,n,x),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,D.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Bs()),w){if(D.setValue(F,`toneMappingExposure`,E.toneMappingExposure),v.needsLights&&bt(k,T),a&&r.fog===!0&&Le.refreshFogUniforms(k,a),Le.refreshMaterialUniforms(k,r,N,M,S.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}yo.upload(F,B(v),k,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(yo.upload(F,B(v),k,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(F,`center`,i.center),D.setValue(F,`modelViewMatrix`,i.modelViewMatrix),D.setValue(F,`normalMatrix`,i.normalMatrix),D.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Je.update(n,x),Je.bind(n,x)}}return x}function bt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function xt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),oe.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,I.viewport(oe),I.scissor(ce),I.setScissorTest(le),ie=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,oe.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else oe.copy(ge).multiplyScalar(N).floor(),ce.copy(_e).multiplyScalar(N).floor(),le=ve;if(n!==0&&(r=k),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(oe),I.scissor(ce),I.setScissorTest(le),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function St(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ke.textureFormatReadable(e.format),t.__typeReadable=ke.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){It(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=St(o);if(u.__formatReadable===!1){It(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){It(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Ke.convert(c),Ke.convert(l),a)}finally{let e=j===null?null:L.get(j).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=St(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Ke.convert(l),Ke.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=j===null?null:L.get(j).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await at(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ke.convert(t.format),_=Ke.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,ee),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ne=0,re=0,j=null,I.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}},Hs=.25,Us=h;function Ws(e){let[t,n]=Us[e.paper];return e.landscape?[t,n]:[n,t]}var Gs=[10,5,2,1,1/2,1/5,1/10,1/20,1/50,1/100,1/200,1/500,1/1e3],Ks=ce;function qs(e){let[t,n]=Ws(e),r=Ke(e.paper,!!e.filing),i={x0:r.l,y0:r.t,x1:t-r.r,y1:n-r.b};return{W:t,H:n,m:r,frame:i,title:{x0:i.x1-gn,y0:i.y1-R,x1:i.x1,y1:i.y1}}}var Js=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Ys=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Xs=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},Zs=.5*Math.SQRT1_2;function Qs(e){return Xs(Ys(Math.abs(e[2])>.999?[0,1,0]:[0,0,1],e))}var $s={front:{dir:[0,-1,0],x:[1,0,0]},back:{dir:[0,1,0],x:[-1,0,0]},right:{dir:[1,0,0],x:[0,1,0]},left:{dir:[-1,0,0],x:[0,-1,0]},top:{dir:[0,0,1],x:[1,0,0]},bottom:{dir:[0,0,-1],x:[1,0,0]},iso:{dir:Xs([1,-1,1]),x:Xs([1,1,0])}};function ec(e){let t=$s[e.kind];if(t)return{...t};if(e.kind===`oblique`){let e=Xs([Zs,-1,Zs]),t=Qs(e),n=Ys(e,t),r=[-Zs,1,-Zs];return{dir:e,x:t,post:(e,i)=>{let a=[e*t[0]+i*n[0],e*t[1]+i*n[1],e*t[2]+i*n[2]],o=-a[1]/r[1];return[a[0]+o*r[0],a[2]+o*r[2]]}}}let n=e.plane??{o:[0,0,0],n:[0,-1,0],name:`XZ`},r=Xs(n.n),i=e.flip?[-r[0],-r[1],-r[2]]:r,a={dir:i,x:Qs(i)};if(e.kind===`section`){let t=e.offset??0;a.section={origin:[n.o[0]+r[0]*t,n.o[1]+r[1]*t,n.o[2]+r[2]*t],normal:i}}return a}function tc(e,t,n){let r=[];for(let e of[t[0],n[0]])for(let i of[t[1],n[1]])for(let a of[t[2],n[2]])r.push([e,i,a]);let i=ec(e),a=Ys(i.dir,i.x),o=1/0,s=-1/0,c=1/0,l=-1/0;for(let e of r){let t=Js(e,i.x),n=Js(e,a);i.post&&([t,n]=i.post(t,n)),o=Math.min(o,t),s=Math.max(s,t),c=Math.min(c,n),l=Math.max(l,n)}return[s-o,l-c]}var nc=0,rc=()=>`v${Date.now().toString(36)}${(nc++).toString(36)}`;function ic(e,t,n,r,i={}){return{id:rc(),kind:e,scale:t,x:n,y:r,hidden:e!==`iso`&&e!==`oblique`,dims:e!==`iso`&&e!==`oblique`,...i}}function ac(e){let t=qs(e);return{x0:t.frame.x0+5,y0:t.frame.y0+5,x1:t.frame.x1-5,y1:t.title.y0-8}}function oc(e,t,n){let r={paper:`A3`,landscape:!0,method:`third`,title:``,author:``,school:``,views:[],...n};return r.views=sc(r,e,t),r}function sc(e,t,n){let r=Math.max(n[0]-t[0],1),i=Math.max(n[1]-t[1],1),a=Math.max(n[2]-t[2],1),o=ac(e),s=tc(ic(`iso`,1,0,0),t,n),c=e=>(r+i)*e+60,l=e=>(a+i)*e+60,u=Gs.find(e=>c(e)<=o.x1-o.x0&&l(e)<=o.y1-o.y0)??Gs[Gs.length-1],d=r*u,f=a*u,p=i*u,m=d+24+p,h=f+24+p,g=o.x0+24*.6+Math.max(0,(o.x1-o.x0-24*.6-m)/2)*.6,_=o.y0+Math.max(0,(o.y1-o.y0-24*.8-h)/2),v=[];if(e.method===`third`){let e=g+d/2,t=_+p+24+f/2;v.push(ic(`top`,u,e,_+p/2)),v.push(ic(`front`,u,e,t)),v.push(ic(`right`,u,g+d+24+p/2,t))}else{let e=g+d/2,t=_+f/2;v.push(ic(`front`,u,e,t)),v.push(ic(`top`,u,e,_+f+24+p/2)),v.push(ic(`left`,u,g+d+24+p/2,t))}let y=o.x1-(g+d+24),b=e.method===`third`?_+p-o.y0:o.y1-(_+f+24)-24*.6,x=Gs.find(e=>e<=u&&s[0]*e<=y&&s[1]*e<=b)??u,S=s[0]*x,C=s[1]*x,w=g+d+24+Math.max(S/2,Math.min(y-S/2,p/2)),T=e.method===`third`?Math.max(o.y0+C/2,_+p-C/2):_+f+24+C/2;return v.push(ic(`iso`,x,Math.max(w,o.x0+S/2),T)),v}var cc=e=>(Math.round(e*100)/100||0).toFixed(2);function lc(e){let t=new Map;for(let n of e??[]){if(!(n.r>1e-6)||!(n.len>=0))continue;let e=Xs(n.d),r=Math.abs(e[0])>1e-6?e[0]:Math.abs(e[1])>1e-6?e[1]:e[2],i=Js(n.p,e),a=i+n.len;r<0&&(e=[-e[0],-e[1],-e[2]],[i,a]=[-a,-i]);let o=`${[n.p[0]-e[0]*Js(n.p,e),n.p[1]-e[1]*Js(n.p,e),n.p[2]-e[2]*Js(n.p,e)].map(cc).join(`,`)}|${e.map(e=>(Math.round(e*1e4)/1e4||0).toFixed(4)).join(`,`)}|${cc(n.r)}`,s=t.get(o);if(!s){t.set(o,{...n,d:e,key:o,full:!1,t0:i,t1:a,best:n.span});continue}s.span+=n.span,s.t0=Math.min(s.t0,i),s.t1=Math.max(s.t1,a),n.span>s.best&&(s.best=n.span,s.m=n.m)}return[...t.values()].map(({t0:e,t1:t,best:n,...r})=>{let i=[r.p[0]-r.d[0]*Js(r.p,r.d),r.p[1]-r.d[1]*Js(r.p,r.d),r.p[2]-r.d[2]*Js(r.p,r.d)];return{...r,p:[i[0]+r.d[0]*e,i[1]+r.d[1]*e,i[2]+r.d[2]*e],len:t-e,full:r.span>=Math.PI*2-.05}})}var uc=(e,t)=>Math.abs(Js(e.d,t.dir))>.999,dc=(e,t)=>Math.abs(Js(e.d,t.dir))<.001,fc=e=>e.kind!==`iso`&&e.kind!==`oblique`,pc=[`front`,`top`,`right`,`left`,`back`,`bottom`,`section`,`custom`],mc=e=>{let t=[0,1,2].find(t=>Math.abs(Math.abs(e[t])-1)<1e-6);return t==null?e.map(e=>(Math.round(Math.abs(e)*1e3)/1e3).toFixed(3)).join(`,`):`xyz`[t]};function hc(e){let t=new Map,n=new Set,r=new Set,i=[...e].filter(e=>e.view.dims&&fc(e.view)).sort((e,t)=>pc.indexOf(e.view.kind)-pc.indexOf(t.view.kind));for(let{view:e,axes:a}of i){let i=ec(e),o=mc(i.x),s=mc(Ys(i.dir,i.x)),c={h:!n.has(o),v:!n.has(s),rounds:new Set};n.add(o),n.add(s);for(let e of lc(a))r.has(e.key)||!uc(e,i)||!e.full&&e.span<.2||(r.add(e.key),c.rounds.add(e.key));t.set(e.id,c)}return t}function gc(e,t){let n=ec(e),r=e=>{if(!n.post)return e;let t=new Float32Array(e.length);for(let r=0;r<e.length;r+=2){let[i,a]=n.post(e[r],e[r+1]);t[r]=i,t[r+1]=a}return t},i=r(t.visible),a=r(t.hidden),o=t.cut.map(r),s=1/0,c=1/0,l=-1/0,u=-1/0;for(let e of[i,a,...o])for(let t=0;t<e.length;t+=2)s=Math.min(s,e[t]),l=Math.max(l,e[t]),c=Math.min(c,e[t+1]),u=Math.max(u,e[t+1]);return Number.isFinite(s)||([s,c,l,u]=[0,0,0,0]),{visible:i,hidden:a,cut:o,axes:t.axes,box:[s,c,l,u]}}function _c(e,t){let n=(t[0]+t[2])/2,r=(t[1]+t[3])/2;return(t,i)=>[e.x+(t-n)*e.scale,e.y-(i-r)*e.scale]}function vc(e,t,n){let r=[];for(let i=0;i+5<e.length;i+=6){let a=[n(e[i],e[i+1]),n(e[i+2],e[i+3]),n(e[i+4],e[i+5])],o=a.map(([e,t])=>e-t),s=Math.ceil(Math.min(...o)/t)*t,c=Math.max(...o);for(let e=s;e<=c;e+=t){let t=[];for(let n=0;n<3;n++){let r=a[n],i=a[(n+1)%3],o=r[0]-r[1]-e,s=i[0]-i[1]-e;if(o<=0&&s>=0||o>=0&&s<=0){let e=o===s?0:o/(o-s);t.push([r[0]+(i[0]-r[0])*e,r[1]+(i[1]-r[1])*e])}}t.length>=2&&r.push(t[0][0],t[0][1],t[1][0],t[1][1])}}return r}var yc=(e,t,n,r,i)=>e.push(t,n,r,n,r,n,r,i,r,i,t,i,t,i,t,n);function bc(e){let t=qs(e),n=fr.length,r=t.W/2-n/2;return r+n>t.title.x0-3&&(r=t.title.x0-3-n),r>=t.frame.x0+3?{x0:r,base:t.frame.y1}:{x0:(t.frame.x0+t.frame.x1)/2-n/2,base:t.title.y0-1.5}}function xc(e,t){let{W:n,H:r,frame:i,title:a}=qs(e),o=f(e.paper),s={border:[],thick:[],thin:[],scale:[],centre:[],fills:[],texts:[]};yc(s.border,i.x0,i.y0,i.x1,i.y1);let l=n/2>a.x0&&n/2<a.x1;s.border.push(n/2,0,n/2,i.y0+5,n/2,r,n/2,l?i.y1:i.y1-5,0,r/2,i.x0+5,r/2,n,r/2,i.x1-5,r/2);let[u,d]=c[e.paper],[p,m]=e.landscape?[u,d]:[d,u],h=3.5,g=(i.x1-i.x0)/p,_=(i.y1-i.y0)/m;for(let e=0;e<p;e++){let t=i.x0+g*e;e>0&&s.thin.push(t,i.y0,t,i.y0-5,t,i.y1,t,i.y1+5);let n=String(e+1);s.texts.push({x:t+g/2,y:i.y0-5/2+h*.36,s:h,text:n},{x:t+g/2,y:i.y1+5/2+h*.36,s:h,text:n})}for(let e=0;e<m;e++){let t=i.y0+_*e;e>0&&s.thin.push(i.x0,t,i.x0-5,t,i.x1,t,i.x1+5,t);let n=`ABCDEFGHJKLMNPQRSTUVWXYZ`[e]??``;s.texts.push({x:i.x0-5/2,y:t+_/2+h*.36,s:h,text:n},{x:i.x1+5/2,y:t+_/2+h*.36,s:h,text:n})}let v=bc(e);s.scale.push(v.x0,v.base,v.x0+fr.length,v.base);for(let e=0;e<=fr.length/fr.step;e++){let t=v.x0+e*fr.step;s.scale.push(t,v.base,t,v.base-(e%5==0?fr.height:fr.height*.6))}yc(s.thick,a.x0,a.y0,a.x1,a.y1);let[y,b,x,S]=T.cols,C=T.rowH;for(let e=1;e<4;e++)s.thin.push(a.x0,a.y0+C*e,a.x1,a.y0+C*e);for(let e of[a.x0+y,a.x0+y+b,a.x0+y+b+x])s.thin.push(e,a.y0,e,a.y1);let w=t.labels,E=Math.min(3,o.label),D=Math.min(o.label,C-3),O=(e,t,n,r,i=!1)=>{if(!n)return;let o=[a.x0,a.x0+y,a.x0+y+b,a.x0+y+b+x],c=[y,b,x,S][t],l=xe(n,r?E:D,c-2);s.texts.push({x:o[t]+c/2,y:a.y0+C*e+C/2+l.size*.36,s:l.size,text:l.text,bold:i})};O(0,0,w.school,!0),O(0,1,t.school,!1),O(0,2,w.date,!0),O(0,3,t.date,!1),O(1,0,w.number,!0),O(1,1,t.number,!1),O(1,2,w.scale,!0),O(1,3,t.scale,!1),O(2,0,w.author,!0),O(2,1,t.author,!1),O(3,0,w.title,!0),O(3,1,t.title,!1,!0),O(3,2,w.docNo,!0),O(3,3,t.docNo,!1);let k=a.x0+y+b+x,A=a.y0+C*2+C/2;if(t.method){O(2,2,w.method,!0);let e=C-3.4,n=Math.min(D,3),r=ot(t.methodText,n),i=e*2.5,a=S-2,o=k+1+Math.max(0,(a-r-1.5-i)/2);s.texts.push({x:o,y:A+n*.36,s:n,text:t.methodText,anchor:`start`});let c=ft(o+r+1.5+i/2,A,e,t.method);s.thick.push(...c.lines),s.centre.push(...c.centre)}else O(2,2,w.unit,!0),O(2,3,t.unit,!1);if(t.north){let e=Tr(i.x1-5-6,i.y0+9+6,6);s.thin.push(...e.lines),s.fills.push(...e.fill),s.texts.push({x:e.n.x,y:e.n.y,s:3.5,text:`N`,bold:!0})}return s}function Sc(e,t,n,r,i,a){let o=Math.hypot(i-n,a-r);if(o<1e-9)return;let s=(i-n)/o,c=(a-r)/o;if(o>=br.arrowL*2+1)e.push(n,r,i,a),t.push(...F(n,r,-s,-c),...F(i,a,s,c));else{let o=br.arrowL+2;e.push(n-s*o,r-c*o,i+s*o,a+c*o),t.push(...F(n,r,s,c),...F(i,a,-s,-c))}}function Cc(e,t){let n=[];for(let[t,r,i,a]of e){let e=Math.hypot(i-t,a-r);if(e<1e-6)continue;let o=(i-t)/e,s=(a-r)/e;(o<-1e-9||Math.abs(o)<=1e-9&&s<0)&&([o,s]=[-o,-s]);let c=-s*t+o*r,l=n.find(e=>Math.abs(e.ux*s-e.uy*o)<1e-4&&Math.abs(e.c-c)<.05);l||n.push(l={ux:o,uy:s,nx:0,c,iv:[],ox:t,oy:r});let u=(e,t)=>(e-l.ox)*l.ux+(t-l.oy)*l.uy,d=u(t,r),f=u(i,a);l.iv.push([Math.min(d,f),Math.max(d,f)])}let r=[];for(let e of n){e.iv.sort((e,t)=>e[0]-t[0]);let n=[];for(let t of e.iv){let e=n[n.length-1];e&&t[0]<=e[1]+.5?e[1]=Math.max(e[1],t[1]):n.push([...t])}for(let[i,a]of n)r.push([e.ox+e.ux*(i-t),e.oy+e.uy*(i-t),e.ox+e.ux*(a+t),e.oy+e.uy*(a+t)])}return r}var wc=(e,t,n,r,i)=>{let a=(t+r)/2,o=(n+i)/2;e.push(a,o,t,n,a,o,r,i)};function Tc(e,t,n,r,i){let a=gc(e,t),o=_c(e,a.box),s=i?.text??3.5,c=e=>{let t=[];for(let n=0;n<e.length;n+=2)t.push(...o(e[n],e[n+1]));return t},l=[],u=[];for(let e of a.cut)l.push(...c(e)),i?.noHatch||u.push(...vc(e,2.5,o));let d=[],f=[],p=[],m=[],[h]=o(a.box[0],a.box[3]),[g,_]=o(a.box[2],a.box[1]),v=ec(e),y=Ys(v.dir,v.x),b=e=>o(Js(e,v.x),Js(e,y)),x=fc(e)?lc(a.axes):[],S=new Map,C=[];for(let t of x)if(t.full){if(uc(t,v)){let[n,r]=b(t.p),i=`${n.toFixed(2)},${r.toFixed(2)}`,a=t.r*e.scale+br.centreOver,o=S.get(i);(!o||o.arm<a)&&S.set(i,{x:n,y:r,arm:a})}else if(dc(t,v)){let[e,n]=b(t.p),[r,i]=b([t.p[0]+t.d[0]*t.len,t.p[1]+t.d[1]*t.len,t.p[2]+t.d[2]*t.len]);C.push([e,n,r,i])}}for(let e of S.values())p.push(e.x,e.y,e.x+e.arm,e.y,e.x,e.y,e.x-e.arm,e.y,e.x,e.y,e.x,e.y-e.arm,e.x,e.y,e.x,e.y+e.arm);for(let[e,t,n,r]of Cc(C,br.centreOver))wc(p,e,t,n,r);let w=br.leaderAngle*Math.PI/180;for(let t of x){if(!i?.plan?.rounds.has(t.key)||!uc(t,v))continue;let[n,a]=b(t.p),o=t.r*e.scale;if(o<.2)continue;let c,l,u,p,h=1,g;if(t.full){let e=Math.cos(w),i=-Math.sin(w);c=n+e*o,l=a+i*o,u=c+e*7,p=l+i*7,d.push(c,l,u,p),f.push(...F(c,l,-e,-i)),g=pe(r(t.r*2),`dia`)}else{let[e,i]=[Js(t.m,v.x),-Js(t.m,y)],s=Math.hypot(e,i);if(s<1e-6)continue;let m=e/s,_=i/s;c=n+m*o,l=a+_*o,u=c+m*5,p=l+_*5,d.push(n,a,u,p),f.push(...F(c,l,m,_)),h=m<-1e-6?-1:1,g=pe(r(t.r),`rad`)}let _=ot(g,s);d.push(u,p,u+h*(_+br.shoulder),p),m.push({x:u+h*br.shoulder/2,y:p-br.textGap,s,text:g,anchor:h>0?`start`:`end`})}let T=i?.dimBox??a.box,[E,D]=o(T[0],T[3]),[O,k]=o(T[2],T[1]),A=!i?.plan||i.plan.h,ee=!i?.plan||i.plan.v,te=e.dims&&O>E&&A;if(te){let e=_+br.first;d.push(E,k+br.gap,E,e+br.over,O,k+br.gap,O,e+br.over),Sc(d,f,E,e,O,e),m.push({x:(E+O)/2,y:e-br.textGap,s,text:r(T[2]-T[0])})}if(e.dims&&k>D&&ee){let e=h-br.first;d.push(E-br.gap,D,e-br.over,D,E-br.gap,k,e-br.over,k),Sc(d,f,e,k,e,D),m.push({x:e-br.textGap,y:(D+k)/2,s,text:r(T[3]-T[1]),rot:-90})}for(let e of i?.marks??[]){let[,t]=o(a.box[0],e.y),n=g+2;d.push(n,t,n+26,t,n+2,t,n+.8,t-1.6,n+.8,t-1.6,n+3.2,t-1.6,n+3.2,t-1.6,n+2,t),m.push({x:n+15,y:t-1,s:Math.min(s,3),text:e.text})}return m.push({x:(h+g)/2,y:te?_+br.first+s+3:_+s+2.5,s,text:n,label:!0}),{view:e,visible:c(a.visible),hidden:c(a.hidden),hatch:u,dims:d,arrows:f,centre:p,texts:m,cut:l}}var Ec=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),Dc=e=>(Math.round(e*1e3)/1e3).toString();function Oc(e){let t=``;for(let n=0;n+3<e.length;n+=4)t+=`M${Dc(e[n])} ${Dc(e[n+1])}L${Dc(e[n+2])} ${Dc(e[n+3])}`;return t}function kc(e){let t=``;for(let n=0;n+5<e.length;n+=6)t+=`M${Dc(e[n])} ${Dc(e[n+1])}L${Dc(e[n+2])} ${Dc(e[n+3])}L${Dc(e[n+4])} ${Dc(e[n+5])}Z`;return t}var Ac=`font-family="Pretendard, 'Malgun Gothic', Arial, sans-serif"`;function jc(e,t){let n=e.text.split(`
`),r=e.anchor??`middle`,i=e.rot?` transform="rotate(${e.rot} ${Dc(e.x)} ${Dc(e.y)})"`:``;return n.map((a,o)=>{let s=e.y-(n.length-1-o)*e.s*.95;return`<text x="${Dc(e.x)}" y="${Dc(s)}" font-size="${e.s}" text-anchor="${r}" fill="${t}"${e.bold?` font-weight="700"`:``}${i}>${Ec(a)}</text>`}).join(``)}var Mc=(e,t,n,r=``,i=`butt`)=>e.length?`<path d="${Oc(e)}" stroke="${n}" stroke-width="${t}"${r?` stroke-dasharray="${r}"`:``} stroke-linecap="${i}" fill="none"/>`:``;function Nc(e,t,n=!1){let r=n?`#111`:`#000`,i=n?`#2c6fbb`:`#000`,a=``;return a+=Mc(e.hatch,t.thin*.7,r),a+=Mc(e.hidden,t.thin,r,ln(`dashed`,t.thin)),a+=Mc(e.centre,t.thin,r,ln(`chain`,t.thin)),a+=Mc(e.visible,t.thick,r,``,`round`),a+=Mc(e.dims,t.thin,i),e.arrows.length&&(a+=`<path d="${kc(e.arrows)}" fill="${i}" stroke="none"/>`),a+=`<g ${Ac}>${e.texts.map(e=>jc(e,e.label?r:i)).join(``)}</g>`,a}function Pc(e,t){let n=f(e.paper),r=xc(e,t),i=Mc(r.border,n.border,`#000`,``,`square`);return i+=Mc(r.thick,n.thick,`#000`),i+=Mc(r.thin,n.thin,`#000`),i+=Mc(r.scale,fr.pen,`#000`),i+=Mc(r.centre,n.thin,`#000`,ln(`chain`,n.thin*.5)),r.fills.length&&(i+=`<path d="${kc(r.fills)}" fill="#000" stroke="none"/>`),i+=`<g ${Ac}>${r.texts.map(e=>jc(e,`#000`)).join(``)}</g>`,i}function Fc(e,t,n){let[r,i]=Ws(e),a=f(e.paper),o=t.map(e=>`<g>${Nc(e,a)}</g>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" width="${r}mm" height="${i}mm" viewBox="0 0 ${r} ${i}"><rect width="${r}" height="${i}" fill="#fff"/>${Pc(e,n)}${o}</svg>`}var Ic=class{flipH;thin;body=[];constructor(e=0,t=Hs){this.flipH=e,this.thin=t}y(e){return this.flipH?this.flipH-e:e}lines(e,t){for(let n=0;n+3<e.length;n+=4)this.body.push(`0\nLINE\n8\n${t}\n10\n${e[n].toFixed(4)}\n20\n${this.y(e[n+1]).toFixed(4)}\n30\n0\n11\n${e[n+2].toFixed(4)}\n21\n${this.y(e[n+3]).toFixed(4)}\n31\n0`)}solids(e,t){for(let n=0;n+5<e.length;n+=6){let r=(e,t,n)=>`1${e}\n${t.toFixed(4)}\n2${e}\n${this.y(n).toFixed(4)}\n3${e}\n0`;this.body.push(`0\nSOLID\n8\n${t}\n${r(0,e[n],e[n+1])}\n${r(1,e[n+2],e[n+3])}\n${r(2,e[n+4],e[n+5])}\n${r(3,e[n+4],e[n+5])}`)}}text(e,t,n,r,i=`TEXT`,a=0,o=!0){let s=this.y(t),c=this.flipH?-a:a,l=o===!0||o===`middle`?1:o===`end`?2:0;this.body.push(`0\nTEXT\n8\n${i}\n10\n${e.toFixed(4)}\n20\n${s.toFixed(4)}\n30\n0\n40\n${n}\n1\n${r.replace(/\n/g,` `)}${c?`\n50\n${c}`:``}${l?`\n72\n${l}\n11\n${e.toFixed(4)}\n21\n${s.toFixed(4)}\n31\n0`:``}`)}sheetText(e,t=`TEXT`){let n=e.text.split(`
`);n.forEach((r,i)=>{let a=(n.length-1-i)*e.s*.95,o=(e.rot??0)*Math.PI/180;this.text(e.x+Math.sin(o)*a,e.y-Math.cos(o)*a,e.s,r,t,e.rot??0,e.anchor??`middle`)})}face3d(e,t,n,r){let i=(e,t)=>`1${e}\n${t[0].toFixed(5)}\n2${e}\n${t[1].toFixed(5)}\n3${e}\n${t[2].toFixed(5)}`;this.body.push(`0\n3DFACE\n8\n${r}\n${i(0,e)}\n${i(1,t)}\n${i(2,n)}\n${i(3,n)}`)}toString(e=[`VISIBLE`,`HIDDEN`,`CENTER`,`HATCH`,`DIM`,`TEXT`,`BORDER`]){let t=(e,t,n)=>`0\nLTYPE\n2\n${e}\n70\n0\n3\n${t}\n72\n65\n73\n${n.length}\n40\n${+n.reduce((e,t)=>e+t,0).toFixed(4)}${n.map((e,t)=>`\n49\n${t%2?-e:e}`).join(``)}`;return`0
SECTION
2
HEADER
9
$ACADVER
1
AC1009
9
$INSUNITS
70
4
9
$MEASUREMENT
70
1
9
$LTSCALE
40
1.0
0
ENDSEC\n0\nSECTION\n2\nTABLES\n${`0\nTABLE\n2\nLTYPE\n70\n3\n0\nLTYPE\n2\nCONTINUOUS\n70\n0\n3\nSolid line\n72\n65\n73\n0\n40\n0.0\n${t(`HIDDEN`,`__ __ __`,Hn(`dashed`,this.thin))}\n${t(`CENTER`,`____ . ____`,Hn(`chain`,this.thin))}\n0\nENDTAB`}\n${`0\nTABLE\n2\nLAYER\n70\n${e.length}\n${e.map(e=>`0\nLAYER\n2\n${e}\n70\n0\n62\n${e===`HIDDEN`?8:e===`CENTER`?1:e===`DIM`||e===`TEXT`?3:e===`HATCH`?9:7}\n6\n${e===`HIDDEN`?`HIDDEN`:e===`CENTER`?`CENTER`:`CONTINUOUS`}`).join(`
`)}\n0\nENDTAB`}\n0\nENDSEC\n0\nSECTION\n2\nENTITIES\n${this.body.join(`
`)}\n0\nENDSEC\n0\nEOF\n`}};function Lc(e,t,n){let[,r]=Ws(e),i=new Ic(r,f(e.paper).thin),a=xc(e,n);i.lines([...a.border,...a.thick,...a.thin,...a.scale],`BORDER`),i.lines(a.centre,`CENTER`),i.solids(a.fills,`BORDER`);for(let e of a.texts)e.text&&i.sheetText(e);for(let e of t){i.lines(e.visible,`VISIBLE`),i.lines(e.hidden,`HIDDEN`),i.lines(e.centre,`CENTER`),i.lines(e.hatch,`HATCH`),i.lines(e.dims,`DIM`),i.solids(e.arrows,`DIM`);for(let t of e.texts)i.sheetText(t)}return i.toString()}function Rc(e,t,n=!1){let r=gc(e,t),i=new Ic(0),a=e=>Array.from(e);if(i.lines(a(r.visible),`VISIBLE`),i.lines(a(r.hidden),`HIDDEN`),!n)for(let t of r.cut)i.lines(vc(t,2.5/Math.max(e.scale,1e-6),(e,t)=>[e,t]),`HATCH`);return i.toString([`VISIBLE`,`HIDDEN`,`CENTER`,`HATCH`])}var zc=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function Bc(e){let t=4294967295;for(let n=0;n<e.length;n++)t=zc[(t^e[n])&255]^t>>>8;return(t^4294967295)>>>0}function Vc(e){let t=new TextEncoder,n=[],r=[],i=0;for(let a of e){let e=t.encode(a.name),o=Bc(a.data),s=new DataView(new ArrayBuffer(30));s.setUint32(0,67324752,!0),s.setUint16(4,20,!0),s.setUint16(8,0,!0),s.setUint32(14,o,!0),s.setUint32(18,a.data.length,!0),s.setUint32(22,a.data.length,!0),s.setUint16(26,e.length,!0),n.push(new Uint8Array(s.buffer),e,a.data);let c=new DataView(new ArrayBuffer(46));c.setUint32(0,33639248,!0),c.setUint16(4,20,!0),c.setUint16(6,20,!0),c.setUint32(16,o,!0),c.setUint32(20,a.data.length,!0),c.setUint32(24,a.data.length,!0),c.setUint16(28,e.length,!0),c.setUint32(42,i,!0),r.push(new Uint8Array(c.buffer),e),i+=30+e.length+a.data.length}let a=r.reduce((e,t)=>e+t.length,0),o=new DataView(new ArrayBuffer(22));o.setUint32(0,101010256,!0),o.setUint16(8,e.length,!0),o.setUint16(10,e.length,!0),o.setUint32(12,a,!0),o.setUint32(16,i,!0);let s=[...n,...r,new Uint8Array(o.buffer)],c=new Uint8Array(s.reduce((e,t)=>e+t.length,0)),l=0;for(let e of s)c.set(e,l),l+=e.length;return c}function Hc(e){let t=new Ic(0),n=[];for(let r of e){let e=r.name.replace(/[<>/\\":;?*|=,` ]+/g,`_`).slice(0,60)||`BODY`;n.push(e);let i=e=>[r.pos[e*3],r.pos[e*3+1],r.pos[e*3+2]];for(let n=0;n+2<r.idx.length;n+=3)t.face3d(i(r.idx[n]),i(r.idx[n+1]),i(r.idx[n+2]),e)}return t.toString([...new Set(n)])}function Uc(e){let t=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/"/g,`&quot;`),n=[],r=[],i=e.length+1,a=e.map(e=>`<base name="${t(e.name)}" displaycolor="${/^#[0-9a-f]{6}$/i.test(e.color??``)?e.color.toUpperCase():`#B4B4B4`}"/>`);e.forEach((e,a)=>{let o=a+1,s=[],c=new Map,l=new Uint32Array(e.pos.length/3);for(let t=0;t<l.length;t++){let n=`x="${+e.pos[t*3].toFixed(5)}" y="${+e.pos[t*3+1].toFixed(5)}" z="${+e.pos[t*3+2].toFixed(5)}"`,r=c.get(n);r===void 0&&(r=s.length,c.set(n,r),s.push(`<vertex ${n}/>`)),l[t]=r}let u=[];for(let t=0;t+2<e.idx.length;t+=3){let n=l[e.idx[t]],r=l[e.idx[t+1]],i=l[e.idx[t+2]];n!==r&&r!==i&&n!==i&&u.push(`<triangle v1="${n}" v2="${r}" v3="${i}"/>`)}n.push(`<object id="${o}" name="${t(e.name)}" type="model" pid="${i}" pindex="${a}"><mesh><vertices>${s.join(``)}</vertices><triangles>${u.join(``)}</triangles></mesh></object>`),r.push(`<item objectid="${o}"/>`)});let o=new TextEncoder,s=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><metadata name="Application">NukCAD</metadata><resources>${e.length?`<basematerials id="${i}">${a.join(``)}</basematerials>`:``}${n.join(``)}</resources><build>${r.join(``)}</build></model>`;return Vc([{name:`[Content_Types].xml`,data:o.encode(`<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>`)},{name:`_rels/.rels`,data:o.encode(`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>`)},{name:`3D/3dmodel.model`,data:o.encode(s)}])}function Wc(e){let t=e.split(/\r?\n/),n=[];for(let e=0;e+1<t.length;e+=2)n.push([parseInt(t[e].trim(),10),t[e+1].trim()]);return n}function Gc(e){let t=Wc(e),n=[],r=new Map,i={},a=new Map,o=null,s=``,c=null,l=null,u=null,d=()=>{c&&=(s===`ENTITIES`?n.push(c):s===`BLOCKS`&&l&&c.type!==`BLOCK`&&c.type!==`ENDBLK`&&l.ents.push(c),null)};for(let e=0;e<t.length;e++){let[n,i]=t[e];if(s===`ACDSDATA`&&(n!==0||i!==`ENDSEC`)){n===0?(o?.on&&o.hex.length&&a.set(o.handle,o.hex),o=i===`ACDSRECORD`?{handle:``,on:!1,hex:[]}:null):o&&(n===320?o.handle=i:n===2?o.on=i===`ASM_Data`:n===310&&o.on&&o.hex.push(i));continue}if(n===0){if(s===`ACDSDATA`&&o?.on&&o.hex.length&&a.set(o.handle,o.hex),d(),i===`SECTION`){s=t[e+1]?.[0]===2?t[e+1][1]:``;continue}if(i===`ENDSEC`){s=``;continue}if(s===`BLOCKS`&&i===`BLOCK`){u={type:`BLOCK`,codes:[]},c=u;continue}if(s===`BLOCKS`&&i===`ENDBLK`){l&&r.set(l.name,{base:l.base,ents:l.ents}),l=null,c={type:`ENDBLK`,codes:[]};continue}c={type:i,codes:[]};continue}c&&(c.codes.push([n,i]),c===u&&n===20&&(l={name:c.codes.find(([e])=>e===2)?.[1]??``,base:[Z(c,10),Number(i)],ents:[]}))}return d(),{entities:n,blocks:r,skipped:i,asm:a}}var Kc=e=>{let t=e.join(``),n=new Uint8Array(t.length>>1);for(let e=0;e<n.length;e++)n[e]=parseInt(t.substr(e*2,2),16);return n},qc=(e,t)=>[e[0]*t[0]+e[1]*t[3],e[0]*t[1]+e[1]*t[4],e[0]*t[2]+e[1]*t[5]+e[2],e[3]*t[0]+e[4]*t[3],e[3]*t[1]+e[4]*t[4],e[3]*t[2]+e[4]*t[5]+e[5]],Jc=(e,t)=>[e[0]*t[0]+e[1]*t[1]+e[2],e[3]*t[0]+e[4]*t[1]+e[5]],Yc=[-1,0,0,0,1,0];function Xc(e,t,n){let r=t[0]*t[0]+n[0]*n[0],i=t[0]*t[1]+n[0]*n[1],a=t[1]*t[1]+n[1]*n[1],o=Math.hypot((r-a)/2,i);return{id:P(),t:`ellipse`,c:e,rx:Math.sqrt((r+a)/2+o),ry:Math.sqrt(Math.max(0,(r+a)/2-o)),rot:Math.atan2(2*i,r-a)/2}}function Zc(e,t,n,r,i){let a=Math.max(1,Math.ceil((i-r)/(Math.PI/2)-1e-9)),o=r=>[e[0]+t[0]*Math.cos(r)+n[0]*Math.sin(r),e[1]+t[1]*Math.cos(r)+n[1]*Math.sin(r)],s=e=>[-t[0]*Math.sin(e)+n[0]*Math.cos(e),-t[1]*Math.sin(e)+n[1]*Math.cos(e)],c=[];for(let e=0;e<a;e++){let t=r+(i-r)*e/a,n=r+(i-r)*(e+1)/a,l=4/3*Math.tan((n-t)/4),u=o(t),d=o(n),f=s(t),p=s(n);c.push({id:P(),t:`bezier`,pts:[u,[u[0]+l*f[0],u[1]+l*f[1]],[d[0]-l*p[0],d[1]-l*p[1]],d]})}return c}function Qc(e,t){let n=e=>Jc(t,e),[r,i,,a,o]=t,s=r*r+a*a||1;if(!(Math.abs(r*i+a*o)<1e-9*s&&Math.abs(r*r+a*a-i*i-o*o)<1e-9*s)){let t=(e,t)=>[r*e+i*t,a*e+o*t];if(e.t===`circle`)return[Xc(n(e.c),t(e.r,0),t(0,e.r))];if(e.t===`ellipse`){let r=Math.cos(e.rot),i=Math.sin(e.rot);return[Xc(n(e.c),t(e.rx*r,e.rx*i),t(-e.ry*i,e.ry*r))]}if(e.t===`arc`)return Zc(n(e.c),t(e.r,0),t(0,e.r),e.a0,e.a0+jr(e.a0,e.a1))}return[li(e,n,!1)]}function $c(e){let t={text:0,hatch:0,point:0,other:0,otherTypes:[]};for(let[n,r]of Object.entries(e))n===`TEXT`||n===`MTEXT`||n===`ATTRIB`?t.text+=r:n===`HATCH`||n===`SOLID`?t.hatch+=r:n===`POINT`?t.point+=r:(t.other+=r,t.otherTypes.push(n));return t}var el=new Set([`3DSOLID`,`BODY`,`REGION`,`SURFACE`,`EXTRUDEDSURFACE`,`LOFTEDSURFACE`,`REVOLVEDSURFACE`,`SWEPTSURFACE`,`PLANESURFACE`,`NURBSURFACE`]),Z=(e,t,n=0)=>{let r=e.codes.find(([e])=>e===t);return r?Number(r[1]):n},tl=(e,t)=>e.codes.find(([e])=>e===t)?.[1]??``,nl=(e,t)=>e.codes.filter(([e])=>e===t).map(([,e])=>Number(e));function rl(e,t,n){let r=4*Math.atan(n),i=Math.hypot(t[0]-e[0],t[1]-e[1]),a=i/(2*Math.sin(Math.abs(r)/2)),o=[(e[0]+t[0])/2,(e[1]+t[1])/2],s=Math.sqrt(Math.max(0,a*a-(i/2)**2)),c=[(t[0]-e[0])/i,(t[1]-e[1])/i],l=(n>0?1:-1)*(Math.abs(r)>Math.PI?-1:1),u=[o[0]-c[1]*s*l,o[1]+c[0]*s*l],d=Math.atan2(e[1]-u[1],e[0]-u[0]),f=Math.atan2(t[1]-u[1],t[0]-u[0]);return n<0&&([d,f]=[f,d]),{id:P(),t:`arc`,c:u,r:a,a0:(d+2*Math.PI)%(2*Math.PI),a1:(f+2*Math.PI)%(2*Math.PI)}}function il(e,t,n){let r=[],i=e.length;for(let a=0;a<(n?i:i-1);a++){let n=e[a],o=e[(a+1)%i];Math.hypot(o[0]-n[0],o[1]-n[1])<1e-12||r.push(Math.abs(t[a]??0)>1e-12?rl(n,o,t[a]):{id:P(),t:`line`,a:n,b:o})}return r}function al(e){let t={},n,r,i=!1;for(let[t,a]of e.codes)t===1001?i=a.trim().toUpperCase()===`NUKCAD`:i&&t===1070?r=Number(a)/100:i&&t===1e3&&gt(a)&&(n=gt(a));let a=tl(e,6);if(a&&(t.type=o(a)),!n){let t=e.codes.find(([e])=>e===420);if(t)n=`#`+(Number(t[1])&16777215).toString(16).padStart(6,`0`);else{let t=Math.abs(Z(e,62,256));t>=1&&t<=255&&(n=ut(t))}}if(r==null){let t=Z(e,370,-1);t>0&&(r=t/100)}return t.color=n,t.weight=r,oe(t)}var ol={1:25.4,2:304.8,4:1,5:10,6:1e3,9:.0254,10:914.4,14:100};function sl(e){let{entities:t,blocks:n,asm:i}=Gc(e),a=ol[Number(/\$INSUNITS\s*\r?\n\s*70\s*\r?\n\s*(-?\d+)/.exec(e)?.[1]??0)]??1,o={},s=[],c=[],l=[],u=(e,t,d,f)=>{let p=d?d.map(e=>e*a):a===1?null:[a,0,0,0,a,0],m,h=e=>{if(e.t===`line`&&Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1])<1e-9)return;let t=p?Qc(e,p):[e];if(m&&!f)for(let e of t)e.style={...m};(f?c:s).push(...t)},g=e=>{f||(o[e]=(o[e]??0)+1)};for(let o=0;o<e.length;o++){let s=e[o];if(Z(s,67)===1)continue;m=al(s);let c=Z(s,230,1)<0,p=e=>c?[-e[0],e[1]]:e;if(el.has(s.type)){let e=i.get(tl(s,5)),t=d?[d[0],d[1],d[2]*a,d[3],d[4],d[5]*a]:null;if(e)l.push({data:Kc(e),xf:t,kind:s.type,unit:a});else{let e=[];for(let[t,n]of s.codes)t===1?e.push(n):t===3&&e.length&&(e[e.length-1]+=n);e.length>2?l.push({data:r(e),xf:t,kind:s.type,unit:a}):g(s.type)}continue}switch(s.type){case`LINE`:h({id:P(),t:`line`,a:[Z(s,10),Z(s,20)],b:[Z(s,11),Z(s,21)]});break;case`CIRCLE`:h({id:P(),t:`circle`,c:p([Z(s,10),Z(s,20)]),r:Z(s,40)});break;case`ARC`:{let e=Math.PI/180,t=Z(s,50)*e,n=Z(s,51)*e;h({id:P(),t:`arc`,c:p([Z(s,10),Z(s,20)]),r:Z(s,40),a0:c?Math.PI-n:t,a1:c?Math.PI-t:n});break}case`LWPOLYLINE`:{let e=nl(s,10),t=nl(s,20),n=[],r=-1;for(let[e,t]of s.codes)e===10&&r++,e===42&&(n[r]=c?-Number(t):Number(t));for(let r of il(e.map((e,n)=>p([e,t[n]])),n,(Z(s,70)&1)==1))h(r);break}case`POLYLINE`:{let t=c&&!(Z(s,70)&88),n=[],r=[];for(;e[o+1]?.type===`VERTEX`;){o++;let i=[Z(e[o],10),Z(e[o],20)];n.push(t?[-i[0],i[1]]:i),r.push(t?-Z(e[o],42):Z(e[o],42))}for(let e of il(n,r,(Z(s,70)&1)==1))h(e);break}case`ELLIPSE`:{let e=[Z(s,10),Z(s,20)],t=[Z(s,11),Z(s,21)],n=Z(s,40,1)*(c?-1:1),r=[-t[1]*n,t[0]*n],i=Z(s,41,0),a=Z(s,42,2*Math.PI);for(;a<=i;)a+=2*Math.PI;if(a-i>=2*Math.PI-1e-9){let r=Math.hypot(t[0],t[1]);h({id:P(),t:`ellipse`,c:e,rx:r,ry:r*Math.abs(n),rot:Math.atan2(t[1],t[0])})}else for(let n of Zc(e,t,r,i,a))h(n);break}case`SPLINE`:{let e=nl(s,11),t=nl(s,21),n=nl(s,10),r=nl(s,20),i=e.length>=2?e.map((e,n)=>[e,t[n]]):n.map((e,t)=>[e,r[t]]);i.length>=2&&h({id:P(),t:`spline`,pts:i});break}case`INSERT`:case`DIMENSION`:{let e=n.get(tl(s,2));if(!e||t>8)break;let r=s.type===`DIMENSION`,i=r?[0,0]:[Z(s,10),Z(s,20)],a=r?1:Z(s,41,1),o=r?1:Z(s,42,1),l=r?0:Z(s,50)*Math.PI/180,p=Math.cos(l),m=Math.sin(l),[h,g]=e.base,_=[p*a,-m*o,i[0]-p*a*h+m*o*g,m*a,p*o,i[1]-m*a*h-p*o*g];c&&!r&&(_=qc(Yc,_)),u(e.ents,t+1,d?qc(d,_):_,f||r);break}case`TEXT`:case`MTEXT`:case`ATTRIB`:case`HATCH`:case`SOLID`:case`POINT`:g(s.type);break;case`ATTDEF`:case`VIEWPORT`:case`SEQEND`:case`VERTEX`:break;default:g(s.type)}}};return u(t,0,null,!1),{entities:s,dims:c,solids:l,skipped:o}}function cl(e){let t=new DataView(e);if(e.byteLength>=84){let n=t.getUint32(80,!0);if(84+n*50===e.byteLength){let e=new Float32Array(n*9);for(let r=0;r<n;r++){let n=84+r*50+12;for(let i=0;i<9;i++)e[r*9+i]=t.getFloat32(n+i*4,!0)}return e}}let n=new TextDecoder().decode(e),r=[],i=/vertex\s+([-+\d.eE]+)\s+([-+\d.eE]+)\s+([-+\d.eE]+)/g,a;for(;a=i.exec(n);)r.push(Number(a[1]),Number(a[2]),Number(a[3]));return new Float32Array(r.slice(0,r.length-r.length%9))}function ll(e,t=!0){let n=new TextDecoder().decode(e),r=[],i=[],a=null,o=``;for(let e of n.split(/\r?\n/)){let n=e.trim();if(n.startsWith(`v `)){let[e,i,a]=n.slice(2).trim().split(/\s+/).map(Number);r.push(t?[e,-a,i]:[e,i,a])}else if(n.startsWith(`o `)||n.startsWith(`g `))o=n.slice(2).trim(),a=null;else if(n.startsWith(`f `)){a||(a=i.find(e=>e.name===o)??null,a||i.push(a={name:o,out:[]}));let e=n.slice(2).trim().split(/\s+/).map(e=>{let t=parseInt(e.split(`/`)[0],10);return t<0?r.length+t:t-1});for(let t=1;t+1<e.length;t++)for(let n of[e[0],e[t],e[t+1]])a.out.push(...(r[n]??[0,0,0]).slice(0,3))}}return i.filter(e=>e.out.length).map(e=>({name:e.name,soup:new Float32Array(e.out)}))}var ul={micron:.001,millimeter:1,centimeter:10,inch:25.4,foot:304.8,meter:1e3};async function dl(e){let{unzip:t}=await zt(async()=>{let{unzip:e}=await import(`./acis-DZFFxT5j.js`).then(e=>e.t);return{unzip:e}},[],import.meta.url),n=await t(e),r=new Map;for(let[e,t]of n)/\.model$/i.test(e)&&r.set(`/`+e.replace(/\\/g,`/`).replace(/^\//,``),new TextDecoder().decode(t));let i=[...r.keys()].find(e=>/^\/3D\/3dmodel\.model$/i.test(e))??[...r.keys()][0];if(!i)throw Error(`no model`);let a=(e,t)=>RegExp(`(?:^|\\s)${t}="([^"]*)"`).exec(e)?.[1],o=[1,0,0,0,1,0,0,0,1,0,0,0],s=e=>e?e.trim().split(/\s+/).map(Number):o,c=(e,t)=>{let n=[];for(let r=0;r<4;r++)for(let i=0;i<3;i++){let a=r===3?t[9+i]:0;for(let n=0;n<3;n++)a+=e[r*3+n]*t[n*3+i];n.push(a)}return n},l=new Map,u=e=>{let t=l.get(e);if(t)return t;let n=r.get(e)??``,i=ul[a(/<model\b[^>]*>/.exec(n)?.[0]??``,`unit`)??`millimeter`]??1,o=new Map;for(let t of n.matchAll(/<object\b([^>]*)>([\s\S]*?)<\/object>/g)){let n=t[1],r=t[2],i=[];for(let e of r.matchAll(/<vertex\b([^>]*)\/?>/g))i.push(Number(a(e[1],`x`)),Number(a(e[1],`y`)),Number(a(e[1],`z`)));let c=[];for(let e of r.matchAll(/<triangle\b([^>]*)\/?>/g))c.push(Number(a(e[1],`v1`)),Number(a(e[1],`v2`)),Number(a(e[1],`v3`)));let l=[];for(let t of r.matchAll(/<component\b([^>]*)\/?>/g))l.push({id:a(t[1],`objectid`)??``,path:a(t[1],`p:path`)??e,m:s(a(t[1],`transform`))});o.set(a(n,`id`)??``,{name:a(n,`name`)??``,verts:i,tris:c,comps:l})}return t={unit:i,objects:o,build:[...n.matchAll(/<item\b([^>]*)\/?>/g)].map(t=>({id:a(t[1],`objectid`)??``,m:s(a(t[1],`transform`)),path:a(t[1],`p:path`)??e}))},l.set(e,t),t},d=(e,t,n,r,i)=>{let a=u(e),o=a.objects.get(t);if(!o||i>16)return;let s=a.unit;for(let e=0;e<o.tris.length;e++){let t=o.tris[e]*3,i=o.verts[t],a=o.verts[t+1],c=o.verts[t+2];r.push((i*n[0]+a*n[3]+c*n[6]+n[9])*s,(i*n[1]+a*n[4]+c*n[7]+n[10])*s,(i*n[2]+a*n[5]+c*n[8]+n[11])*s)}for(let e of o.comps)d(e.path,e.id,c(e.m,n),r,i+1)},f=u(i),p=[],m=f.build.length?f.build:[...f.objects.keys()].map(e=>({id:e,m:o,path:i}));for(let e of m){let t=[];d(e.path,e.id,e.m,t,0),t.length&&p.push({name:u(e.path).objects.get(e.id)?.name??``,soup:new Float32Array(t)})}return p}function fl(e){let t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode(...t.subarray(e,e+32768));return btoa(n)}function pl(e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let r=0;r<e.length;r+=3)for(let i=0;i<3;i++)t[i]=Math.min(t[i],e[r+i]),n[i]=Math.max(n[i],e[r+i]);return[t,n]}async function ml(e){let t=new Uint8Array(e);if(t[0]===31&&t[1]===139){let e=new Blob([t]).stream().pipeThrough(new DecompressionStream(`gzip`));return new Uint8Array(await new Response(e).arrayBuffer())}if(t[0]===40&&t[1]===181&&t[2]===47&&t[3]===253){let{decompress:e}=await zt(async()=>{let{decompress:e}=await import(`./esm-BU7wOCM-.js`);return{decompress:e}},[],import.meta.url);return e(t)}return t}function hl(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=(t,n)=>{let r=``;for(let i=0;i<n;i++)r+=String.fromCharCode(e[t+i]);return r};if(n(0,7)!==`BLENDER`)throw Error(`not a blend file`);let r,i,a,o,s=!1;if(e[7]===95||e[7]===45)i=e[7]===95?4:8,a=e[8]===118,o=parseInt(n(9,3),10),r=12;else{let t=parseInt(n(7,2),10);i=8,a=e[12]===118,o=parseInt(n(13,4),10),s=n(10,2)===`01`,r=t}if(!a)throw Error(`big-endian blend`);let c=e=>t.getInt32(e,a),l=e=>t.getUint16(e,a),u=e=>t.getInt16(e,a),d=e=>t.getFloat32(e,a),f=e=>i===8?t.getBigUint64(e,a):BigInt(t.getUint32(e,a)),p=[],m=new Map;for(;r+16<=e.length;){let e=n(r,4).replace(/\0/g,``),o;if(o=s?{code:e,sdna:c(r+4),old:t.getBigUint64(r+8,a),size:Number(t.getBigInt64(r+16,a)),count:Number(t.getBigInt64(r+24,a)),offset:r+32}:{code:e,size:c(r+4),old:f(r+8),sdna:c(r+8+i),count:c(r+12+i),offset:r+16+i},e===`ENDB`)break;p.push(o),o.old&&m.set(o.old,o),r=o.offset+o.size}let h=p.find(e=>e.code===`DNA1`);if(!h)throw Error(`no DNA`);let g=h.offset+8,_=()=>{let t=g;for(;e[t]!==0;)t++;let r=n(g,t-g);return g=t+1,r},v=()=>g=g+3&-4,y=c(g);g+=4;let b=[];for(let e=0;e<y;e++)b.push(_());v(),g+=4;let x=c(g);g+=4;let S=[];for(let e=0;e<x;e++)S.push(_());v(),g+=4;let C=[];for(let e=0;e<x;e++)C.push(l(g+e*2));g+=x*2,v(),g+=4;let w=c(g);g+=4;let T=[],E=new Map;for(let e=0;e<w;e++){let e=u(g),t=u(g+2);g+=4;let n=new Map,r=0;for(let e=0;e<t;e++){let e=S[u(g)],t=b[u(g+2)];g+=4;let a=t.startsWith(`*`)||t.startsWith(`(*`),o=1;for(let e of t.matchAll(/\[(\d+)\]/g))o*=Number(e[1]);let s=t.replace(/^[*(]+/,``).replace(/\).*$/,``).replace(/\[.*$/,``),c=a?i:C[S.indexOf(e)],l={type:e,name:t,base:s,ptr:a,count:o,offset:r,size:c*o};n.set(s,l),r+=l.size}let a={type:S[e],size:C[e],fields:n};T.push(a),E.set(a.type,a)}let D=(e,t,n)=>{let r=e.fields.get(n);return r?{...r,at:t+r.offset}:null},O=(t,n,r,i=0)=>{let a=D(t,n,r);return a?a.type===`int`?c(a.at):a.type===`short`?u(a.at):a.type===`char`||a.type===`uchar`?e[a.at]:i:i},k=(e,t,n)=>{let r=D(e,t,n);return!r||!r.ptr?null:m.get(f(r.at))??null},A=(e,t,n)=>{let r=D(e,t,n);if(!r||r.type!==`float`)return null;let i=[];for(let e=0;e<r.count;e++)i.push(d(r.at+e*4));return i},ee=(t,n,r)=>{let i=D(t,n,r);if(!i)return``;let a=i.at;for(;a<i.at+i.count&&e[a]!==0;)a++;return new TextDecoder().decode(e.subarray(i.at,a))},te=E.get(`ID`),ne=E.get(`Object`),re=E.get(`Mesh`);if(!ne||!re||!te)throw Error(`no mesh structs`);let j=E.get(`CustomData`),ie=E.get(`CustomDataLayer`),ae=(e,t,n,r)=>{if(!j||!ie)return null;let i=D(re,e,t);if(!i)return null;let a=k(j,i.at,`layers`),o=O(j,i.at,`totlayer`);if(!a)return null;for(let e=0;e<o;e++){let t=a.offset+e*ie.size,i=ee(ie,t,`name`),o=O(ie,t,`type`);if(i===n||r!=null&&o===r&&!i.startsWith(`.`))return k(ie,t,`data`)}return null},oe=t=>{let n=t.offset,r=O(re,n,`totvert`,O(re,n,`verts_num`));if(!r)return null;let i=null,a=k(re,n,`mvert`),o=E.get(`MVert`);if(a&&o){i=new Float32Array(r*3);for(let e=0;e<r;e++){let t=A(o,a.offset+e*o.size,`co`);i.set(t,e*3)}}else{let t=ae(n,`vdata`,`position`)??ae(n,`vert_data`,`position`);t&&(i=new Float32Array(e.slice(t.offset,t.offset+r*12).buffer))}if(!i)return null;let s={pos:Array.from(i),polys:[]},l=e=>{e.length>=3&&e.every(e=>e>=0&&e<r)&&s.polys.push(e)},u=k(re,n,`mpoly`),d=k(re,n,`mloop`),f=E.get(`MPoly`),p=E.get(`MLoop`);if(u&&d&&f&&p){let e=O(re,n,`totpoly`);for(let t=0;t<e;t++){let e=u.offset+t*f.size,n=O(f,e,`loopstart`),r=O(f,e,`totloop`),i=[];for(let e=0;e<r;e++)i.push(O(p,d.offset+(n+e)*p.size,`v`));l(i)}return s}let m=k(re,n,`face_offset_indices`)??k(re,n,`poly_offset_indices`),h=O(re,n,`faces_num`,O(re,n,`totpoly`)),g=ae(n,`corner_data`,`.corner_vert`)??ae(n,`ldata`,`.corner_vert`);if(m&&g&&h){for(let e=0;e<h;e++){let t=c(m.offset+e*4),n=c(m.offset+(e+1)*4),r=[];for(let e=t;e<n;e++)r.push(c(g.offset+e*4));l(r)}return s}let _=k(re,n,`mface`),v=E.get(`MFace`);if(_&&v){let e=O(re,n,`totface`);for(let t=0;t<e;t++){let e=_.offset+t*v.size,n=[O(v,e,`v1`),O(v,e,`v2`),O(v,e,`v3`),O(v,e,`v4`)];l(n[3]?n:n.slice(0,3))}return s}return null},se=e=>{let t=A(ne,e,`obmat`)??A(ne,e,`object_to_world`);if(t&&t.length===16&&t.some(e=>e!==0))return t;let n=A(ne,e,`loc`)??[0,0,0],r=A(ne,e,`rot`)??[0,0,0],i=A(ne,e,`size`)??A(ne,e,`scale`)??[1,1,1],[a,o,s]=r.map(Math.cos),[c,l,u]=r.map(Math.sin),d=[o*s,o*u,-l,c*l*s-a*u,c*l*u+a*s,c*o,a*l*s+c*u,a*l*u-c*s,a*o];return[d[0]*i[0],d[1]*i[0],d[2]*i[0],0,d[3]*i[1],d[4]*i[1],d[5]*i[1],0,d[6]*i[2],d[7]*i[2],d[8]*i[2],0,n[0],n[1],n[2],1]},ce=[],le=0,ue=new Map,de=E.get(`ModifierData`);for(let e of p){if(e.code!==`OB`||T[e.sdna]!==ne)continue;let t=e.offset;if(O(ne,t,`type`)!==1)continue;let n=k(ne,t,`data`);if(!n||T[n.sdna]!==re)continue;ue.has(n)||ue.set(n,oe(n));let r=ue.get(n);if(!r?.polys.length)continue;let i=D(ne,t,`modifiers`),a=i?m.get(f(i.at))??null:null,o=0;for(;a&&de&&o++<64;){let e=T[a.sdna],t=a.offset,n=O(de,t,`type`);if(O(de,t,`mode`)&1){if(n===5&&e.fields.has(`flag`)){let n=O(e,t,`flag`),i=n>>3&7;i||=1<<Math.max(0,O(e,t,`axis`));let a=A(e,t,`tolerance`)?.[0]??.001;for(let e=0;e<3;e++)i&1<<e&&(r=gl(r,e,n&128?-1:a))}else if(n===1&&e.fields.has(`levels`)){let n=Math.min(O(e,t,`levels`),3);for(let e=0;e<n&&r.polys.length*4<=6e4;e++)r=_l(r)}else le++}a=k(de,t,`next`)}let s=se(t),c=r.pos,l=[],u=e=>{let t=c[e*3],n=c[e*3+1],r=c[e*3+2];l.push(s[0]*t+s[4]*n+s[8]*r+s[12],s[1]*t+s[5]*n+s[9]*r+s[13],s[2]*t+s[6]*n+s[10]*r+s[14])};for(let e of r.polys)for(let t=1;t+1<e.length;t++)u(e[0]),u(e[t]),u(e[t+1]);ce.push({name:ee(te,t,`name`).replace(/^OB/,``)||`Object`,soup:new Float32Array(l)})}return{parts:ce,modifiers:le,version:o}}function gl(e,t,n){let r=e.pos.length/3,i=e.pos.slice(),a=[];for(let o=0;o<r;o++){let r=e.pos[o*3+t];n>=0&&Math.abs(r)<=n?a.push(o):(a.push(i.length/3),i.push(e.pos[o*3],e.pos[o*3+1],e.pos[o*3+2]),i[i.length-3+t]=-r)}return{pos:i,polys:[...e.polys,...e.polys.map(e=>e.map(e=>a[e]).reverse())]}}function _l(e){let t=e.pos.length/3,n=e.pos,r=n.slice(),i=[];for(let t of e.polys){let e=0,a=0,o=0;for(let r of t)e+=n[r*3],a+=n[r*3+1],o+=n[r*3+2];i.push(r.length/3),r.push(e/t.length,a/t.length,o/t.length)}let a=(e,n)=>e<n?e*t+n:n*t+e,o=new Map;e.polys.forEach((e,t)=>{for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length],s=a(r,i),c=o.get(s);c||o.set(s,c={a:r,b:i,faces:[],pt:-1}),c.faces.push(t)}});for(let e of o.values()){e.pt=r.length/3;let t=[0,1,2].map(t=>n[e.a*3+t]+n[e.b*3+t]);if(e.faces.length===2){let n=i[e.faces[0]],a=i[e.faces[1]];for(let e=0;e<3;e++)r.push((t[e]+r[n*3+e]+r[a*3+e])/4)}else for(let e=0;e<3;e++)r.push(t[e]/2)}let s=new Float64Array(t*3),c=new Uint32Array(t);e.polys.forEach((e,t)=>{for(let n of e){c[n]++;for(let e=0;e<3;e++)s[n*3+e]+=r[i[t]*3+e]}});let l=new Float64Array(t*3),u=new Uint32Array(t),d=new Float64Array(t*3),f=new Uint32Array(t);for(let e of o.values())for(let[t,r]of[[e.a,e.b],[e.b,e.a]]){u[t]++;for(let e=0;e<3;e++)l[t*3+e]+=(n[t*3+e]+n[r*3+e])/2;if(e.faces.length!==2){f[t]++;for(let e=0;e<3;e++)d[t*3+e]+=n[r*3+e]}}for(let e=0;e<t;e++){let t=u[e];if(!t)continue;if(f[e]>=2){for(let t=0;t<3;t++)r[e*3+t]=(d[e*3+t]+6*n[e*3+t])/8;continue}if(f[e])continue;let i=c[e];for(let a=0;a<3;a++)r[e*3+a]=(s[e*3+a]/i+2*l[e*3+a]/t+(t-3)*n[e*3+a])/t}let p=[];return e.polys.forEach((e,t)=>{for(let n=0;n<e.length;n++){let r=e[(n+e.length-1)%e.length],s=e[(n+1)%e.length];p.push([e[n],o.get(a(e[n],s)).pt,i[t],o.get(a(r,e[n])).pt])}}),{pos:r,polys:p}}function vl(e,t){let n={app:`NukCAD`,version:1,mode:e,doc:bn(t)};return JSON.stringify(n)}function yl(e){let t;try{t=JSON.parse(e)}catch{throw Error(`not-nukcad`)}let n=typeof t==`object`&&t?t:{};if(n.app!==`NukCAD`||typeof n.doc!=`object`||n.doc===null||Array.isArray(n.doc))throw Error(`not-nukcad`);let r={unknownSteps:0,dropped:0},i=ge(n.doc,r),a=typeof n.version==`number`&&Number.isFinite(n.version)?n.version:1;return{app:`NukCAD`,version:a,mode:n.mode===`arch`?`arch`:`print`,doc:i,newer:a>1,report:r}}function bl(e,t){let n=new Map;for(let e of[...t.bodies,...t.sketches,...t.workPlanes??[]])n.set(e.id,P());let r=e=>e?n.get(e):void 0,i=new Map,a=e=>{if(e)return i.has(e)||i.set(e,P()),i.get(e)},o=t.bodies.map(e=>({...e,id:n.get(e.id),linkTo:r(e.linkTo),group:a(e.group)})),s=t.sketches.map(e=>({...e,id:n.get(e.id),host:r(e.host),plane:r(e.plane),group:a(e.group)})),c=(t.workPlanes??[]).map(e=>({...e,id:n.get(e.id)})),l=e=>e.bodyId?{...e,bodyId:r(e.bodyId)}:e,u=(t.annotations??[]).filter(e=>[e.a,e.b].every(e=>!e?.bodyId||n.has(e.bodyId))).map(e=>({...e,id:P(),a:l(e.a),b:e.b&&l(e.b)}));return{doc:ar({...e,bodies:[...e.bodies,...o],sketches:[...e.sketches,...s],annotations:[...e.annotations??[],...u],workPlanes:[...e.workPlanes??[],...c]},t.assets),ids:[...o.map(e=>e.id),...s.map(e=>e.id)]}}var xl=(e,t)=>[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]],Sl=(e,t)=>[e[0]*t[0]+e[2]*t[1]+e[4],e[1]*t[0]+e[3]*t[1]+e[5]],Cl=[1,0,0,1,0,0];function wl(e){if(!e)return Cl;let t=Cl,n=/(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g,r;for(;r=n.exec(e);){let e=r[2].split(/[\s,]+/).filter(Boolean).map(Number),n=Cl;switch(r[1]){case`matrix`:n=e.slice(0,6);break;case`translate`:n=[1,0,0,1,e[0]??0,e[1]??0];break;case`scale`:n=[e[0]??1,0,0,e[1]??e[0]??1,0,0];break;case`rotate`:{let t=(e[0]??0)*Math.PI/180,r=Math.cos(t),i=Math.sin(t);n=[r,i,-i,r,0,0],e.length>=3&&(n=xl(xl([1,0,0,1,e[1],e[2]],n),[1,0,0,1,-e[1],-e[2]]));break}case`skewX`:n=[1,0,Math.tan((e[0]??0)*Math.PI/180),1,0,0];break;case`skewY`:n=[1,Math.tan((e[0]??0)*Math.PI/180),0,1,0,0]}t=xl(t,n)}return t}function Tl(e,t,n,r,i,a,o){if(t===0||n===0)return[[e,o]];let s=Math.sin(r),c=Math.cos(r),l=(e[0]-o[0])/2,u=(e[1]-o[1])/2,d=c*l+s*u,f=-s*l+c*u;t=Math.abs(t),n=Math.abs(n);let p=d*d/(t*t)+f*f/(n*n);p>1&&(t*=Math.sqrt(p),n*=Math.sqrt(p));let m=i===a?-1:1,h=t*t*n*n-t*t*f*f-n*n*d*d,g=m*Math.sqrt(Math.max(0,h/(t*t*f*f+n*n*d*d))),_=g*t*f/n,v=-g*n*d/t,y=c*_-s*v+(e[0]+o[0])/2,b=s*_+c*v+(e[1]+o[1])/2,x=(e,t,n,r)=>Math.atan2(e*r-t*n,e*n+t*r),S=x(1,0,(d-_)/t,(f-v)/n),C=x((d-_)/t,(f-v)/n,(-d-_)/t,(-f-v)/n);!a&&C>0&&(C-=2*Math.PI),a&&C<0&&(C+=2*Math.PI);let w=Math.ceil(Math.abs(C)/(Math.PI/2)),T=[],E=e=>[y+t*Math.cos(e)*c-n*Math.sin(e)*s,b+t*Math.cos(e)*s+n*Math.sin(e)*c],D=e=>[-t*Math.sin(e)*c-n*Math.cos(e)*s,-t*Math.sin(e)*s+n*Math.cos(e)*c];for(let e=0;e<w;e++){let t=S+C*e/w,n=S+C*(e+1)/w,r=4/3*Math.tan((n-t)/4),i=E(t),a=E(n),o=D(t),s=D(n);T.push([i,[i[0]+r*o[0],i[1]+r*o[1]],[a[0]-r*s[0],a[1]-r*s[1]],a])}return T}function El(e){let t=e.match(/[a-zA-Z]|[-+]?(?:\d*\.\d+|\d+\.?)(?:e[-+]?\d+)?/g)??[],n=[],r=0,i=``,a=[0,0],o=[0,0],s=null,c=``,l=()=>Number(t[r++]),u=()=>r<t.length&&!/[a-zA-Z]/.test(t[r]);for(;r<t.length;){/[a-zA-Z]/.test(t[r])&&(i=t[r++]);let e=i===i.toLowerCase(),d=i.toUpperCase(),f=(t,n)=>e?[a[0]+t,a[1]+n]:[t,n];switch(d){case`M`:a=f(l(),l()),o=a,i=e?`l`:`L`,s=null;break;case`L`:{let e=f(l(),l());n.push([a,e]),a=e,s=null;break}case`H`:{let t=l(),r=[e?a[0]+t:t,a[1]];n.push([a,r]),a=r,s=null;break}case`V`:{let t=l(),r=[a[0],e?a[1]+t:t];n.push([a,r]),a=r,s=null;break}case`C`:{let e=f(l(),l()),t=f(l(),l()),r=f(l(),l());n.push([a,e,t,r]),s=t,a=r;break}case`S`:{let e=s&&/[CS]/i.test(c)?[2*a[0]-s[0],2*a[1]-s[1]]:a,t=f(l(),l()),r=f(l(),l());n.push([a,e,t,r]),s=t,a=r;break}case`Q`:{let e=f(l(),l()),t=f(l(),l());n.push([a,e,t]),s=e,a=t;break}case`T`:{let e=s&&/[QT]/i.test(c)?[2*a[0]-s[0],2*a[1]-s[1]]:a,t=f(l(),l());n.push([a,e,t]),s=e,a=t;break}case`A`:{let e=l(),t=l(),r=l()*Math.PI/180,i=l()!==0,o=l()!==0,c=f(l(),l());n.push(...Tl(a,e,t,r,i,o,c)),a=c,s=null;break}case`Z`:Math.hypot(a[0]-o[0],a[1]-o[1])>1e-9&&n.push([a,o]),a=o,s=null;break;default:r++}c=d,d===`Z`&&u()&&(i=`L`)}return n}function Dl(e){let t=e.getAttribute(`width`)??``,n=(e.getAttribute(`viewBox`)??``).split(/[\s,]+/).map(Number),r=/mm$/.test(t)?parseFloat(t):/cm$/.test(t)?parseFloat(t)*10:/in$/.test(t)?parseFloat(t)*25.4:null;return r&&n.length===4&&n[2]>0?r/n[2]:r?1:25.4/96}function Ol(e){let t=new DOMParser().parseFromString(e,`image/svg+xml`).documentElement,n=Dl(t),r=[n,0,0,-n,0,0],i=[],a=(e,t)=>{let n=xl(t,wl(e.getAttribute(`transform`))),r=e.tagName.toLowerCase().replace(/^.*:/,``),o=t=>parseFloat(e.getAttribute(t)??`0`)||0,s=[];if(r===`path`)s.push(...El(e.getAttribute(`d`)??``));else if(r===`line`)s.push([[o(`x1`),o(`y1`)],[o(`x2`),o(`y2`)]]);else if(r===`rect`){let[e,t,n,r]=[o(`x`),o(`y`),o(`width`),o(`height`)];s.push([[e,t],[e+n,t]],[[e+n,t],[e+n,t+r]],[[e+n,t+r],[e,t+r]],[[e,t+r],[e,t]])}else if(r===`polyline`||r===`polygon`){let t=(e.getAttribute(`points`)??``).split(/[\s,]+/).filter(Boolean).map(Number),n=[];for(let e=0;e+1<t.length;e+=2)n.push([t[e],t[e+1]]);for(let e=0;e<n.length-1;e++)s.push([n[e],n[e+1]]);r===`polygon`&&n.length>2&&s.push([n[n.length-1],n[0]])}else if(r===`circle`||r===`ellipse`){let e=o(`cx`),t=o(`cy`),n=o(r===`circle`?`r`:`rx`),i=o(r===`circle`?`r`:`ry`);s.push(...Tl([e+n,t],n,i,0,!1,!0,[e-n,t]),...Tl([e-n,t],n,i,0,!1,!0,[e+n,t]))}for(let e of s){let t=e.map(e=>Sl(n,e));t.length===2?Math.hypot(t[1][0]-t[0][0],t[1][1]-t[0][1])>1e-9&&i.push({id:P(),t:`line`,a:t[0],b:t[1]}):i.push({id:P(),t:`bezier`,pts:t})}for(let t of Array.from(e.children))[`defs`,`clippath`,`mask`,`style`,`title`].includes(t.tagName.toLowerCase())||a(t,n)};return a(t,r),i}function kl(e,t){let n=e.filter(e=>e.t!==`xline`&&e.t!==`point`),r=0,i=1,a=0,o=1;for(let e of n)for(let t of ri(e,.5))t[0]<r&&(r=t[0]),t[0]>i&&(i=t[0]),t[1]<a&&(a=t[1]),t[1]>o&&(o=t[1]);let s=i-r,c=o-a,l=e=>`${(e[0]-r).toFixed(4)},${(o-e[1]).toFixed(4)}`,u=n.map(e=>{let n=Mt(Tt(e.style,t));return e.t===`line`?`<line x1="${(e.a[0]-r).toFixed(4)}" y1="${(o-e.a[1]).toFixed(4)}" x2="${(e.b[0]-r).toFixed(4)}" y2="${(o-e.b[1]).toFixed(4)}"${n}/>`:e.t===`circle`?`<circle cx="${(e.c[0]-r).toFixed(4)}" cy="${(o-e.c[1]).toFixed(4)}" r="${e.r.toFixed(4)}"${n}/>`:`<polyline points="${ri(e,2).map(l).join(` `)}"${n}/>`}).join(`
  `);return`<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${s.toFixed(3)}mm" height="${c.toFixed(3)}mm" viewBox="0 0 ${s.toFixed(4)} ${c.toFixed(4)}" fill="none" stroke="black" stroke-width="0.2">\n  ${u}\n</svg>\n`}var Al=`NUKCAD`;function jl(e,t){let n=[`0`,`SECTION`,`2`,`HEADER`,`9`,`$ACADVER`,`1`,`AC1009`,`9`,`$INSUNITS`,`70`,`4`,`9`,`$MEASUREMENT`,`70`,`1`,`0`,`ENDSEC`],r=e=>Tt(e.style,t),i=e.filter(e=>e.t!==`xline`),a=new Map;for(let e of i){let t=r(e);t.type&&a.set(yt(t.type,t.weight),[t.type,t.type===`continuous`?void 0:t.weight])}if(i.some(e=>!Ge(r(e)))){a.set(`CONTINUOUS`,[`continuous`,void 0]),n.push(`0`,`SECTION`,`2`,`TABLES`),n.push(`0`,`TABLE`,`2`,`LTYPE`,`70`,String(a.size));for(let[e,t]of a.values())n.push(...St(e,t));n.push(`0`,`ENDTAB`),n.push(`0`,`TABLE`,`2`,`APPID`,`70`,`2`,`0`,`APPID`,`2`,`ACAD`,`70`,`0`,`0`,`APPID`,`2`,Al,`70`,`0`,`0`,`ENDTAB`),n.push(`0`,`ENDSEC`)}n.push(`0`,`SECTION`,`2`,`ENTITIES`);let o=(...e)=>n.push(...e.map(String)),s=(e,t)=>{let n=r(t);o(`0`,e,`8`,`0`),n.type&&o(`6`,yt(n.type,n.weight)),n.color&&o(`62`,qt(n.color))},c=e=>{let t=r(e);(t.weight!=null||t.color)&&(o(`1001`,Al),t.weight!=null&&o(`1070`,Math.round(t.weight*100)),t.color&&o(`1000`,t.color))};for(let e of i){if(e.t===`point`)s(`POINT`,e),o(`10`,e.p[0],`20`,e.p[1],`30`,0);else if(e.t===`line`)s(`LINE`,e),o(`10`,e.a[0],`20`,e.a[1],`30`,0,`11`,e.b[0],`21`,e.b[1],`31`,0);else if(e.t===`circle`)s(`CIRCLE`,e),o(`10`,e.c[0],`20`,e.c[1],`30`,0,`40`,e.r);else if(e.t===`arc`){let t=e.a0*180/Math.PI;s(`ARC`,e),o(`10`,e.c[0],`20`,e.c[1],`30`,0,`40`,e.r,`50`,t,`51`,t+jr(e.a0,e.a1)*180/Math.PI)}else{s(`POLYLINE`,e),o(`66`,1,`70`,0),c(e);for(let t of ri(e,2))o(`0`,`VERTEX`,`8`,`0`,`10`,t[0],`20`,t[1],`30`,0);o(`0`,`SEQEND`);continue}c(e)}return o(`0`,`ENDSEC`,`0`,`EOF`),n.join(`
`)}var Ml=n(Le(),1);function Nl(e,t){let n=new Set(e),r=e.filter(e=>e.startsWith(t)).length+1;for(;n.has(`${t} ${r}`);)r++;return`${t} ${r}`}var Pl={type:`change`},Fl={type:`start`},Il={type:`end`},Ll=new Qe,Rl=new l,zl=Math.cos(70*Ln.DEG2RAD),Bl=new V,Vl=2*Math.PI,Hl={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ul=1e-6,Wl=class extends $e{constructor(e,t=null){super(e,t),this.state=Hl.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Xt.ROTATE,MIDDLE:Xt.DOLLY,RIGHT:Xt.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new ee,this._lastTargetPosition=new V,this._quat=new ee().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lt,this._sphericalDelta=new lt,this._scale=1,this._panOffset=new V,this._rotateStart=new W,this._rotateEnd=new W,this._rotateDelta=new W,this._panStart=new W,this._panEnd=new W,this._panDelta=new W,this._dollyStart=new W,this._dollyEnd=new W,this._dollyDelta=new W,this._dollyDirection=new V,this._mouse=new W,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kl.bind(this),this._onPointerDown=Gl.bind(this),this._onPointerUp=ql.bind(this),this._onContextMenu=eu.bind(this),this._onMouseWheel=Xl.bind(this),this._onKeyDown=Zl.bind(this),this._onTouchStart=Ql.bind(this),this._onTouchMove=$l.bind(this),this._onMouseDown=Jl.bind(this),this._onMouseMove=Yl.bind(this),this._interceptControlDown=tu.bind(this),this._interceptControlUp=nu.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Hl.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pl),this.update(),this.state=Hl.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Bl.copy(t).sub(this.target),Bl.applyQuaternion(this._quat),this._spherical.setFromVector3(Bl),this.autoRotate&&this.state===Hl.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Vl:n>Math.PI&&(n-=Vl),r<-Math.PI?r+=Vl:r>Math.PI&&(r-=Vl),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Bl.setFromSpherical(this._spherical),Bl.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bl),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Bl.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new V(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new V(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Bl.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Ll.origin.copy(this.object.position),Ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ll.direction))<zl?this.object.lookAt(this.target):(Rl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ll.intersectPlane(Rl,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ul||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ul||this._lastTargetPosition.distanceToSquared(this.target)>Ul?(this.dispatchEvent(Pl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Vl/60/60*this.autoRotateSpeed:Vl/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bl.setFromMatrixColumn(t,0),Bl.multiplyScalar(-e),this._panOffset.add(Bl)}_panUp(e,t){this.screenSpacePanning===!0?Bl.setFromMatrixColumn(t,1):(Bl.setFromMatrixColumn(t,0),Bl.crossVectors(this.object.up,Bl)),Bl.multiplyScalar(e),this._panOffset.add(Bl)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Bl.copy(r).sub(this.target);let i=Bl.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vl*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vl*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new W,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Gl(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Kl(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function ql(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Il),this.state=Hl.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Jl(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Hl.DOLLY;break;case Xt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Hl.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Hl.ROTATE}break;case Xt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Hl.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Hl.PAN}break;default:this.state=Hl.NONE}this.state!==Hl.NONE&&this.dispatchEvent(Fl)}function Yl(e){switch(this.state){case Hl.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Hl.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Hl.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Xl(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Hl.NONE&&(e.preventDefault(),this.dispatchEvent(Fl),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Il))}function Zl(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ql(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Hl.TOUCH_ROTATE;break;case Vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Hl.TOUCH_PAN;break;default:this.state=Hl.NONE}break;case 2:switch(this.touches.TWO){case Vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Hl.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Hl.TOUCH_DOLLY_ROTATE;break;default:this.state=Hl.NONE}break;default:this.state=Hl.NONE}this.state!==Hl.NONE&&this.dispatchEvent(Fl)}function $l(e){switch(this._trackPointer(e),this.state){case Hl.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Hl.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Hl.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Hl.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Hl.NONE}}function eu(e){this.enabled!==!1&&e.preventDefault()}function tu(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function nu(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}X.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new W},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},Ei.line={uniforms:rr.merge([X.common,X.fog,X.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var ru=class extends N{constructor(e){super({type:`LineMaterial`,uniforms:rr.clone(Ei.line.uniforms),vertexShader:Ei.line.vertexShader,fragmentShader:Ei.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},iu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},au=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ou=new Me(-1,1,1,-1,0,1),su=new class extends U{constructor(){super(),this.setAttribute(`position`,new Or([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Or([0,2,0,0,2,0],2))}},cu=class{constructor(e){this._mesh=new H(su,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ou)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},lu=class extends au{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof N?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rr.clone(e.uniforms),this.material=new N({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new cu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},uu=class extends au{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},du=class extends au{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},fu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new W);this._width=n.width,this._height=n.height,t=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:se}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lu(iu),this.copyPass.material.blending=0,this.timer=new vt}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}uu!==void 0&&(r instanceof uu?n=!0:r instanceof du&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new W);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},pu=class e extends au{constructor(e,t,n,r){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=r===void 0?[]:r,this.visibleEdgeColor=new G(1,1,1),this.hiddenEdgeColor=new G(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e===void 0?new W(256,256):new W(e.x,e.y);let i=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new En(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name=`OutlinePass.mask`,this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new lr,this.depthMaterial.side=2,this.depthMaterial.depthPacking=pt,this.depthMaterial.blending=0,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=2,this.prepareMaskMaterial.fragmentShader=s(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new En(this.resolution.x,this.resolution.y,{type:se}),this.renderTargetDepthBuffer.texture.name=`OutlinePass.depth`,this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new En(i,a,{type:se,depthBuffer:!1}),this.renderTargetMaskDownSampleBuffer.texture.name=`OutlinePass.depthDownSample`,this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new En(i,a,{type:se,depthBuffer:!1}),this.renderTargetBlurBuffer1.texture.name=`OutlinePass.blur1`,this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new En(Math.round(i/2),Math.round(a/2),{type:se,depthBuffer:!1}),this.renderTargetBlurBuffer2.texture.name=`OutlinePass.blur2`,this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new En(i,a,{type:se,depthBuffer:!1}),this.renderTargetEdgeBuffer1.texture.name=`OutlinePass.edge1`,this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new En(Math.round(i/2),Math.round(a/2),{type:se,depthBuffer:!1}),this.renderTargetEdgeBuffer2.texture.name=`OutlinePass.edge2`,this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1,this.separableBlurMaterial1=this._getSeparableBlurMaterial(4),this.separableBlurMaterial1.uniforms.texSize.value.set(i,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(4),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(i/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=4,this.overlayMaterial=this._getOverlayMaterial();let o=iu;this.copyUniforms=rr.clone(o.uniforms),this.materialCopy=new N({uniforms:this.copyUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new G,this.oldClearAlpha=1,this._fsQuad=new cu(null),this.tempPulseColor1=new G,this.tempPulseColor2=new G,this.textureMatrix=new rn;function s(e,t){let n=t.isPerspectiveCamera?`perspective`:`orthographic`;return e.replace(/DEPTH_TO_VIEW_Z/g,n+`DepthToViewZ`)}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),r=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,r),this.renderTargetBlurBuffer1.setSize(n,r),this.renderTargetEdgeBuffer1.setSize(n,r),this.separableBlurMaterial1.uniforms.texSize.value.set(n,r),n=Math.round(n/2),r=Math.round(r/2),this.renderTargetBlurBuffer2.setSize(n,r),this.renderTargetEdgeBuffer2.setSize(n,r),this.separableBlurMaterial2.uniforms.texSize.value.set(n,r)}render(t,n,r,i,a){if(this.selectedObjects.length>0){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let n=t.autoClear;t.autoClear=!1,a&&t.state.buffers.stencil.setTest(!1),t.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);let i=this.renderScene.background,o=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,t.setRenderTarget(this.renderTargetDepthBuffer),t.clear(),t.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,t.setRenderTarget(this.renderTargetMaskBuffer),t.clear(),t.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=i,this.renderScene.overrideMaterial=o,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,t.setRenderTarget(this.renderTargetMaskDownSampleBuffer),t.clear(),this._fsQuad.render(t),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){let e=1.25/2+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(e),this.tempPulseColor2.multiplyScalar(e)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,t.setRenderTarget(this.renderTargetEdgeBuffer1),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=e.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,t.setRenderTarget(this.renderTargetBlurBuffer1),t.clear(),this._fsQuad.render(t),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetEdgeBuffer1),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetBlurBuffer2),t.clear(),this._fsQuad.render(t),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetEdgeBuffer2),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,a&&t.state.buffers.stencil.setTest(!0),t.setRenderTarget(r),this._fsQuad.render(t),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=n}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=r.texture,t.setRenderTarget(null),this._fsQuad.render(t))}_updateSelectionCache(){let e=this._selectionCache;function t(t){t.isMesh&&e.add(t)}e.clear();for(let e=0;e<this.selectedObjects.length;e++)this.selectedObjects[e].traverse(t)}_changeVisibilityOfSelectedObjects(e){let t=this._visibilityCache;for(let n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}_changeVisibilityOfNonSelectedObjects(e){let t=this._visibilityCache,n=this._selectionCache;function r(r){if(r.isPoints||r.isLine||r.isLine2)e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e);else if((r.isMesh||r.isSprite)&&!n.has(r)){let n=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,n)}}this.renderScene.traverse(r)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new N({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new W(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new N({uniforms:{maskTexture:{value:null},texSize:{value:new W(.5,.5)},visibleEdgeColor:{value:new V(1,1,1)},hiddenEdgeColor:{value:new V(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(e){return new N({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new W(.5,.5)},direction:{value:new W(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new N({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:2,depthTest:!1,depthWrite:!1,transparent:!0})}};pu.BlurDirectionX=new W(1,0),pu.BlurDirectionY=new W(0,1);var mu={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},hu=class extends au{constructor(){super(),this.isOutputPass=!0,this.uniforms=rr.clone(mu.uniforms),this.material=new vr({name:mu.name,uniforms:this.uniforms,vertexShader:mu.vertexShader,fragmentShader:mu.fragmentShader}),this._fsQuad=new cu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ft.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},gu=class extends au{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new G}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},_u=new Wt,vu=new V,yu=class extends Ct{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new Or([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new Or([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new bt(t,6,1);return this.setAttribute(`instanceStart`,new s(n,3,0)),this.setAttribute(`instanceEnd`,new s(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new bt(t,6,1);return this.setAttribute(`instanceColorStart`,new s(n,3,0)),this.setAttribute(`instanceColorEnd`,new s(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new nn(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),_u.setFromBufferAttribute(t),this.boundingBox.union(_u))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mt),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)vu.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(vu)),vu.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(vu));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}},bu=new en,xu=new V,Su=new V,Cu=new en,wu=new en,Tu=new en,Eu=new V,Du=new rn,Ou=new kn,ku=new V,Au=new Wt,ju=new mt,Mu=new en,Nu,Pu;function Fu(e,t,n){return Mu.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Mu.multiplyScalar(1/Mu.w),Mu.x=Pu/n.width,Mu.y=Pu/n.height,Mu.applyMatrix4(e.projectionMatrixInverse),Mu.multiplyScalar(1/Mu.w),Math.abs(Math.max(Mu.x,Mu.y))}function Iu(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){Ou.start.fromBufferAttribute(i,r),Ou.end.fromBufferAttribute(a,r),Ou.applyMatrix4(n);let o=new V,s=new V;Nu.distanceSqToSegment(Ou.start,Ou.end,s,o),s.distanceTo(o)<Pu*.5&&t.push({point:s,pointOnLine:o,distance:Nu.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function Lu(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;Nu.at(1,Tu),Tu.w=1,Tu.applyMatrix4(t.matrixWorldInverse),Tu.applyMatrix4(r),Tu.multiplyScalar(1/Tu.w),Tu.x*=i.x/2,Tu.y*=i.y/2,Tu.z=0,Eu.copy(Tu),Du.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(Cu.fromBufferAttribute(s,t),wu.fromBufferAttribute(c,t),Cu.w=1,wu.w=1,Cu.applyMatrix4(Du),wu.applyMatrix4(Du),Cu.z>u&&wu.z>u)continue;if(Cu.z>u){let e=Cu.z-wu.z,t=(Cu.z-u)/e;Cu.lerp(wu,t)}else if(wu.z>u){let e=wu.z-Cu.z,t=(wu.z-u)/e;wu.lerp(Cu,t)}Cu.applyMatrix4(r),wu.applyMatrix4(r),Cu.multiplyScalar(1/Cu.w),wu.multiplyScalar(1/wu.w),Cu.x*=i.x/2,Cu.y*=i.y/2,wu.x*=i.x/2,wu.y*=i.y/2,Ou.start.copy(Cu),Ou.start.z=0,Ou.end.copy(wu),Ou.end.z=0;let o=Ou.closestPointToPointParameter(Eu,!0);Ou.at(o,ku);let l=Ln.lerp(Cu.z,wu.z,o),d=l>=-1&&l<=1,f=Eu.distanceTo(ku)<Pu*.5;if(d&&f){Ou.start.fromBufferAttribute(s,t),Ou.end.fromBufferAttribute(c,t),Ou.start.applyMatrix4(a),Ou.end.applyMatrix4(a);let r=new V,i=new V;Nu.distanceSqToSegment(Ou.start,Ou.end,i,r),n.push({point:i,pointOnLine:r,distance:Nu.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var Ru=class extends H{constructor(e=new yu,t=new ru({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)xu.fromBufferAttribute(t,e),Su.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+xu.distanceTo(Su);let i=new bt(r,2,1);return e.setAttribute(`instanceDistanceStart`,new s(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new s(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;if(r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;Nu=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;Pu=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),ju.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?Pu*.5:Fu(r,Math.max(r.near,ju.distanceToPoint(Nu.origin)),s.resolution),ju.radius+=c,Nu.intersectsSphere(ju)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Au.copy(o.boundingBox).applyMatrix4(a);let l;l=n?Pu*.5:Fu(r,Math.max(r.near,Au.distanceToPoint(Nu.origin)),s.resolution),Au.expandByScalar(l),Nu.intersectsBox(Au)!==!1&&(n?Iu(this,t):Lu(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(bu),this.material.uniforms.resolution.value.set(bu.z,bu.w))}},zu={plastic:{roughness:.6,metalness:0,opacity:1},glossy:{roughness:.22,metalness:0,opacity:1},metal:{roughness:.42,metalness:.85,opacity:1},polished:{roughness:.12,metalness:1,opacity:1},wood:{roughness:.8,metalness:0,opacity:1},glass:{roughness:.05,metalness:0,opacity:.35},rubber:{roughness:.95,metalness:0,opacity:1}};function Bu(e,t,n,r,i=!1){let a=zu[t]??zu.plastic;e.color.set(n),e.roughness=a.roughness,e.metalness=a.metalness;let o=r?Math.min(a.opacity,.18):i?Math.min(a.opacity,.32):a.opacity;e.transparent=o<1,e.opacity=o,e.depthWrite=o>=1}function Vu(e){let t=new qi(e),n=new ne,r=new de(10,32,16),i=new Dt({side:1,vertexColors:!0}),a=[],o=r.attributes.position;for(let e=0;e<o.count;e++){let t=(o.getY(e)/10+1)/2,n=new G().lerpColors(new G(`#8a8f96`),new G(`#ffffff`),t);a.push(n.r,n.g,n.b)}r.setAttribute(`color`,new Or(a,3)),n.add(new H(r,i));let s=t.fromScene(n,.02).texture;return t.dispose(),s}var Hu=5e3,Uu=100,Wu=48;function Gu(e,t=0){let n=Math.log(1+e/100)/-Math.log(.95)/(Uu*.01);return t===1?n*Uu/Wu:n}function Ku(e,t){return e/Math.max(t,1e-9)*100}function qu(e,t){return e*100/Math.max(t,1e-9)}function Ju(e,t,n){return e/qu(t,n)}function Yu(e,t,n){return qu(e,t)/(2*Math.tan(Ln.degToRad(n)/2))}function Xu(e){return 5*(Hu/5)**Math.min(1,Math.max(0,e))}function Zu(e){return Math.log(Math.min(Hu,Math.max(5,e))/5)/Math.log(Hu/5)}function Qu(e){return e<9.95?e.toFixed(1):String(Math.round(e))}var $u=Ln.degToRad(89.5),ed=new V(0,0,1);function td(e){let t=e.length()||1;return Math.asin(Math.min(1,Math.max(-1,-e.z/t)))}function nd(e,t,n=$u){let r=e+t;return t>0?Math.min(r,Math.max(e,n)):t<0?Math.max(r,Math.min(e,-n)):e}function rd(e,t,n,r,i=$u){let a=new ee().setFromAxisAngle(ed,n),o=e.position.clone().sub(t).applyQuaternion(a).add(t),s=e.target.clone().sub(t).applyQuaternion(a).add(t),c=e.up.clone().applyQuaternion(a),l=s.clone().sub(o);if(l.lengthSq()<1e-18)return{position:o,target:s,up:c};l.normalize();let u=l.clone().cross(ed);u.lengthSq()<1e-8&&u.copy(l).cross(c).setZ(0),u.lengthSq()<1e-12&&u.set(1,0,0),u.normalize();let d=td(l),f=nd(d,r,i)-d,p=new ee().setFromAxisAngle(u,-f);o.sub(t).applyQuaternion(p).add(t),s.sub(t).applyQuaternion(p).add(t),c.applyQuaternion(p);let m=s.clone().sub(o).normalize();return Math.abs(m.z)<=Math.sin(i)+1e-9?c.copy(ed):(c.addScaledVector(m,-c.dot(m)),c.lengthSq()<1e-12&&c.copy(u).cross(m),c.normalize()),{position:o,target:s,up:c}}var id=14,ad=10;function od(e,t,n){return{left:e===`tl`&&!t?30:0,right:e===`tr`&&!n?30:0}}function sd(e,t,n,r={left:0,right:0},i=112){return{x:e[1]===`r`?t-i-id-r.right:id+r.left,y:e[0]===`t`?ad:n-i-ad,s:i}}function cd(e,t,n,r){return`${t<r/2?`t`:`b`}${e<n/2?`l`:`r`}`}var ld=10;function ud(e,t,n,r,i,a){for(;i>r;){let o=t[e[r]*3+n],s=t[e[r+i>>1]*3+n],c=t[e[i]*3+n],l=o<s?s<c?s:o<c?c:o:o<c?o:s<c?c:s,u=r,d=i;for(;u<=d;){for(;t[e[u]*3+n]<l;)u++;for(;t[e[d]*3+n]>l;)d--;if(u<=d){let t=e[u];e[u]=e[d],e[d]=t,u++,d--}}if(a<=d)i=d;else if(a>=u)r=u;else return}}function dd(e,t,n){let r=new Uint32Array(e);for(let t=0;t<e;t++)r[t]=t;if(!e)return{box:new Float32Array,meta:new Uint32Array,order:r,eps:0};let i=Math.ceil(e/5)*2+1,a=new Float32Array(i*6),o=new Uint32Array(i*2),s=0,c=new Float64Array(6),l=(e,u)=>{if(s>=i){i*=2;let e=new Float32Array(i*6);e.set(a),a=e;let t=new Uint32Array(i*2);t.set(o),o=t}let d=s++,f=u-e;if(f<=ld){c.fill(1/0,0,3),c.fill(-1/0,3,6);for(let t=e;t<u;t++)n(r[t],c);for(let e=0;e<6;e++)a[d*6+e]=c[e];return o[d*2]=e,o[d*2+1]=f,d}let p=1/0,m=1/0,h=1/0,g=-1/0,_=-1/0,v=-1/0;for(let n=e;n<u;n++){let e=r[n]*3,i=t[e],a=t[e+1],o=t[e+2];i<p&&(p=i),i>g&&(g=i),a<m&&(m=a),a>_&&(_=a),o<h&&(h=o),o>v&&(v=o)}let y=g-p,b=_-m,x=v-h,S=y>=b&&y>=x?0:b>=x?1:2,C=e+u>>1;ud(r,t,S,e,u-1,C),l(e,C);let w=l(C,u);o[d*2]=w,o[d*2+1]=0;let T=d+1;for(let e=0;e<3;e++)a[d*6+e]=Math.min(a[T*6+e],a[w*6+e]),a[d*6+3+e]=Math.max(a[T*6+3+e],a[w*6+3+e]);return d};l(0,e);let u=Math.max(a[3]-a[0],a[4]-a[1],a[5]-a[2],0);return{box:a.slice(0,s*6),meta:o.slice(0,s*2),order:r,eps:u*1e-6+1e-9}}function fd(e,t){let n=Math.floor(t.length/3),r=new Float32Array(n*3);for(let i=0;i<n;i++){let n=t[i*3]*3,a=t[i*3+1]*3,o=t[i*3+2]*3;r[i*3]=(e[n]+e[a]+e[o])/3,r[i*3+1]=(e[n+1]+e[a+1]+e[o+1])/3,r[i*3+2]=(e[n+2]+e[a+2]+e[o+2])/3}return dd(n,r,(n,r)=>{for(let i=0;i<3;i++){let a=t[n*3+i]*3;for(let t=0;t<3;t++){let n=e[a+t];n<r[t]&&(r[t]=n),n>r[3+t]&&(r[3+t]=n)}}})}function pd(e){let t=Math.floor(e.length/6),n=new Float32Array(t*3);for(let r=0;r<t;r++)for(let t=0;t<3;t++)n[r*3+t]=(e[r*6+t]+e[r*6+3+t])/2;return dd(t,n,(t,n)=>{for(let r=0;r<2;r++)for(let i=0;i<3;i++){let a=e[t*6+r*3+i];a<n[i]&&(n[i]=a),a>n[3+i]&&(n[3+i]=a)}})}function md(e,t,n,r,i,a,o){let s=t*6,{x:c,y:l,z:u}=n.origin,d,f;r>=0?(d=(e[s]-o-c)*r,f=(e[s+3]+o-c)*r):(d=(e[s+3]+o-c)*r,f=(e[s]-o-c)*r);let p,m;return i>=0?(p=(e[s+1]-o-l)*i,m=(e[s+4]+o-l)*i):(p=(e[s+4]+o-l)*i,m=(e[s+1]-o-l)*i),d>m||p>f||((p>d||d!==d)&&(d=p),(m<f||f!==f)&&(f=m),a>=0?(p=(e[s+2]-o-u)*a,m=(e[s+5]+o-u)*a):(p=(e[s+5]+o-u)*a,m=(e[s+2]-o-u)*a),d>m||p>f)||((p>d||d!==d)&&(d=p),(m<f||f!==f)&&(f=m),f<0)?1/0:d>0?d:0}function hd(e,t,n,r,i){let{box:a,meta:o,order:s}=e;if(!o.length)return;let c=1/t.direction.x,l=1/t.direction.y,u=1/t.direction.z,d=e.eps+n,f=r,p=[0],m=[md(a,0,t,c,l,u,d)];for(;p.length;){let e=p.pop(),n=m.pop();if(n===1/0||n>f)continue;let r=o[e*2+1];if(r){let t=o[e*2];for(let e=t;e<t+r;e++)f=i(s[e],f);continue}let h=e+1,g=o[e*2],_=md(a,h,t,c,l,u,d),v=md(a,g,t,c,l,u,d),y=_<=v?h:g,b=y===h?g:h,x=Math.min(_,v),S=Math.max(_,v);S<1/0&&S<=f&&(p.push(b),m.push(S)),x<1/0&&x<=f&&(p.push(y),m.push(x))}}var gd=new V,_d=new V,vd=new V,yd=new V,bd=new V;function xd(e,t,n,r,i=0){let a=-1,o=new V;return hd(e,r,0,1/0,(e,s)=>{let c=n[e*3]*3,l=n[e*3+1]*3,u=n[e*3+2]*3;if(gd.set(t[c],t[c+1],t[c+2]),_d.set(t[l],t[l+1],t[l+2]),vd.set(t[u],t[u+1],t[u+2]),!(i===1?r.intersectTriangle(vd,_d,gd,!0,yd):r.intersectTriangle(gd,_d,vd,i===0,yd)))return s;let d=r.origin.distanceTo(yd);return d<s||d===s&&e<a?(a=e,o.copy(yd),d):s}),a<0?null:{index:a,distance:r.origin.distanceTo(o),point:o}}function Sd(e,t,n,r,i=1/0){let a=-1,o=1/0,s=new V,c=r*r;return hd(e,n,r,i,(e,r)=>{let l=e*6;if(gd.set(t[l],t[l+1],t[l+2]),_d.set(t[l+3],t[l+4],t[l+5]),n.distanceSqToSegment(gd,_d,bd,yd)>c)return r;let u=n.origin.distanceTo(bd);return u>i?r:u<o||u===o&&e<a?(a=e,o=u,s.copy(yd),u):r}),a<0?null:{index:a,distance:o,point:s}}var Cd=new WeakMap;function wd(e){let t=Cd.get(e);return t||Cd.set(e,t={}),t.tris??=fd(e.positions,e.indices)}function Td(e){let t=Cd.get(e);return t||Cd.set(e,t={}),t.segs??=pd(e.edges)}var Ed=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Dd=e=>Math.hypot(e[0],e[1],e[2]);function Od(e,t){let n=Dd(t.n);if(!(n>0)||!Number.isFinite(t.a))return null;let r=[t.n[0]/n,t.n[1]/n,t.n[2]/n],i=Math.max(1,Math.sqrt(Math.max(0,t.a))),a=null,o=1/0;for(let n of e){let e=Dd(n.n)||1,s=Ed(n.n,r)/e;if(s<(n.planar?.95:.7))continue;let c=[n.c[0]-t.c[0],n.c[1]-t.c[1],n.c[2]-t.c[2]],l=Dd(c)/i;if(l>1)continue;let u=n.planar?2*Math.abs(Ed(c,r))/i:0,d=Math.abs(n.a-t.a)/Math.max(n.a,t.a,1e-9),f=l+(1-s)*4+u+d;f<o&&(o=f,a=n.id)}return a}function kd(e,t){let n=new Map;for(let r of t??[]){let t=Od(e,r.face);t!=null&&n.set(t,r.color)}return n}function Ad(e,t,n,r){let i=t.find(e=>e.id===n);if(!i)return e;let a=e??[],o=a.filter(e=>Od(t,e.face)!==n);if(r==null&&o.length===a.length||r!=null&&o.length===a.length-1&&a.some(e=>e.color===r&&Od(t,e.face)===n))return e;let s=r==null?o:[...o,{face:{c:[...i.c],n:[...i.n],a:i.a},color:r}];return s.length?s:void 0}var jd=`facePaint`;function Md(e){let t=e.userData[jd];t&&(t.obj&&(e.remove(t.obj),t.obj.traverse(e=>{let t=e;if(t.isMesh){t.geometry.dispose();for(let e of Array.isArray(t.material)?t.material:[t.material])e.dispose()}})),delete e.userData[jd])}function Nd(e,t,n,r,i,a){try{let o=e.userData[jd],s=`${r.material}|${i}|${a}`;if(!n||!r.faceColors?.length)return Md(e);if(o&&o.data===n&&o.paints===r.faceColors&&o.look===s){o.obj&&(o.obj.visible=t.visible);return}Md(e);let c={data:n,paints:r.faceColors,look:s,obj:null};e.userData[jd]=c;let l=kd(n.faces,r.faceColors);if(!l.size)return;let u=new Map;for(let e=0;e<n.faceIds.length;e++){let t=l.get(n.faceIds[e]);if(!t)continue;let r=u.get(t);r||u.set(t,r=[]),r.push(n.indices[e*3],n.indices[e*3+1],n.indices[e*3+2])}let d=new B,f=new U;f.setAttribute(`position`,new Rn(n.positions,3)),f.setAttribute(`normal`,new Rn(n.normals,3));let p=[],m=[];for(let[e,t]of u){f.addGroup(p.length,t.length,m.length);for(let e of t)p.push(e);let n=new Ze({envMapIntensity:.6});Bu(n,r.material??`plastic`,e,i,a),m.push(n)}f.setIndex(p);let h=new H(f,m);h.renderOrder=-1,h.raycast=()=>{},h.onBeforeRender=()=>{let e=t.material;for(let t of m)t.clippingPlanes=e.clippingPlanes,t.side!==e.side&&(t.side=e.side,t.needsUpdate=!0),t.emissive.copy(e.emissive),t.emissiveIntensity=e.emissiveIntensity},d.add(h),d.visible=t.visible,e.add(d),c.obj=d}catch(e){console.error(`[facePaint] draw failed`,e)}}var Pd=6,Fd=/if \( mod\( vLineDistance \+ dashOffset, dashSize \+ gapSize \) > dashSize \) discard;[^\n]*/,Id=`{
  float nkT = mod( vLineDistance + dashOffset, nkPeriod );
  float nkAcc = 0.0;
  for ( int i = 0; i < ${Pd}; i ++ ) {
    nkAcc += nkPattern[ i ];
    if ( nkT < nkAcc ) {
      if ( mod( float( i ), 2.0 ) > 0.5 ) discard;
      break;
    }
  }
}`;function Ld(e){return!Fd.test(e)||!e.includes(`uniform float dashOffset;`)?null:e.replace(`uniform float dashOffset;`,`uniform float dashOffset;\nuniform float nkPattern[ ${Pd} ];\nuniform float nkPeriod;`).replace(Fd,Id)}var Rd=e=>`nkPeriod`in e.uniforms;function zd(e,t,n,r){let i=new ru({color:new G(e).getHex(),linewidth:t});if(i.resolution.copy(r),n.length>=2){let e=new Float32Array(Pd);n.slice(0,Pd).forEach((t,n)=>e[n]=t),i.dashed=!0,i.dashSize=n[0],i.gapSize=n[1],i.uniforms.nkPattern={value:e},i.uniforms.nkPeriod={value:e.reduce((e,t)=>e+t,0)},i.onBeforeCompile=e=>{e.fragmentShader=Ld(e.fragmentShader)??e.fragmentShader},i.customProgramCacheKey=()=>`nk-line-pattern`}return i}function Bd(e){let t=[];for(let n of e)for(let e=0;e<n.length-1;e++)t.push(n[e][0],n[e][1],0,n[e+1][0],n[e+1][1],0);return t}function Vd(e,t,n,r){let i=[],a=new Map;for(let r of e){let e=Tt(r.style,t);if(Ge(e)){i.push(...n(r));continue}let o=qn(e.weight),s=e.type===`continuous`?void 0:e.type,c=`${e.color??``}|${o}|${s??``}`,l=a.get(c);l||a.set(c,l={color:e.color,width:o,type:s,lines:[]}),l.lines.push(...n(r))}let o=new B;for(let e of a.values()){let t=Bd(e.lines);if(!t.length)continue;let n=zd(e.color??`#000000`,e.width,An(e.type,e.width),r),i=new Ru(new yu().setPositions(t),n);n.dashed&&i.computeLineDistances(),i.userData.color=e.color,o.add(i)}return{plain:i,group:o}}function Hd(e,t,n,r,i,a){for(let o of e.children){let e=o,s=e.userData.color;e.material.color.set(n??(s?ve(s,r):t)),e.material.depthTest=i,e.renderOrder=a}}function Ud(e,t,n,r,i){let a=new Map;for(let r of e){let e=Tt(r.style,t);if(Ge(e))continue;let i=qn(e.weight)+3;a.set(i,[...a.get(i)??[],...n(r)])}let o=new B;for(let[e,t]of a){let n=Bd(t);if(!n.length)continue;let a=zd(r,e,[],i);a.transparent=!0,a.opacity=.75,a.depthTest=!1,a.depthWrite=!1;let s=new Ru(new yu().setPositions(n),a);s.renderOrder=5,o.add(s)}return o}function Wd(e,t){e.traverse(e=>{let n=e.material;n instanceof ru&&(t.delete(n),n.dispose()),e.geometry?.dispose()}),e.removeFromParent()}function Gd(e){let t=[];return e.traverse(e=>{let n=e.material;n instanceof ru&&t.push(n)}),t}var Kd=[`#2e9d57`,`#1f6fd1`,`#c2185b`,`#7b4fd6`,`#00897b`,`#8d5524`,`#6f7d0f`,`#0097a7`],qd=`#f07b1d`,Jd=`#d6eef7`,Yd=`#8fd2ea`,Xd=`#5bbde0`;function Zd(e,t){if(t.kind!==`site`)return qd;let n=e.filter(e=>e.kind===`site`).findIndex(e=>e.id===t.id);return Kd[Math.max(0,n)%Kd.length]}function Qd(e){let t=dt(e);return[Math.round(t[0]/10)*10,Math.round(t[1]/10)*10]}function $d(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)t=Math.min(t,a[0]),n=Math.min(n,a[1]),r=Math.max(r,a[0]),i=Math.max(i,a[1]);return e.length?[t,n,r,i]:[0,0,0,0]}function ef(e,t,n=60){let[r,i,a,o]=$d(e),s=Math.max(a-r,o-i),c=t>0&&Number.isFinite(t)?t:1e3;for(let e of[1,2,5,10,20,50,100,200,500,1e3])if(s/(c*e)<=n)return c*e;return c*1e3}function tf(e,t,n){return n>0?[t[0]+Math.round((e[0]-t[0])/n)*n,t[1]+Math.round((e[1]-t[1])/n)*n]:e}function nf(e,t,n){let r=1-t,i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length];o[t]>n!=s[t]>n&&i.push(o[r]+(n-o[t])*(s[r]-o[r])/(s[t]-o[t]))}i.sort((e,t)=>e-t);let a=[];for(let e=0;e+1<i.length;e+=2)i[e+1]>i[e]&&a.push([i[e],i[e+1]]);return a}function rf(e,t,n,r=5){let i={minor:[],major:[]};if(e.length<3||!(n>0))return i;let a=Math.max(1,Math.round(r)),[o,s,c,l]=$d(e);if((c-o)/n>2e3||(l-s)/n>2e3)return i;for(let r of[0,1]){let u=r===0?o:s,d=r===0?c:l;for(let o=Math.ceil((u-t[r])/n);o<=Math.floor((d-t[r])/n);o++){let s=t[r]+o*n,c=o%a===0?i.major:i.minor;for(let[t,n]of nf(e,r,s))c.push(r===0?[[s,t],[s,n]]:[[t,s],[n,s]])}}return i}var af=`#cbc4ab`,of=`#3a8bd6`,sf=`#4b3a27`,cf=`#6a5a49`,lf=[[.12,`#86664a`],[.1,`#a8834f`],[.14,`#c2a273`],[.08,`#93604a`],[.12,`#cbb489`],[.16,`#8b7a64`],[.28,`#776d63`]],uf=new V(-1,1,Math.SQRT2).normalize(),df={polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:2};function ff(e,t,n,r,i,a,o){let s=Math.min(t-1,Math.max(0,(a+r/2)/r*(t-1))),c=Math.min(n-1,Math.max(0,(o+i/2)/i*(n-1))),l=Math.min(t-2,Math.floor(s)),u=Math.min(n-2,Math.floor(c)),d=s-l,f=c-u,p=u*t+l,m=e[p],h=e[p+1],g=e[p+t+1],_=e[p+t];return d>=f?m+(h-m)*d+(g-h)*f:m+(g-_)*d+(_-m)*f}var pf=e=>Math.min(3e3,Math.max(300,e*.04));function mf(e,t,n,r,i,a,o){let s=[];for(let e=0;e<t-1;e++)s.push(e);for(let e=0;e<n-1;e++)s.push(e*t+t-1);for(let e=t-1;e>0;e--)s.push((n-1)*t+e);for(let e=n-1;e>0;e--)s.push(e*t);let c=e=>-r/2+e%t*r/(t-1),l=e=>-i/2+Math.floor(e/t)*i/(n-1),u=pf(o-a),d=Math.max(1,o-a),f=[],p=[],m=[],h=[],g=[],_=(e,t,n,r)=>(f.push(e,t,n),p.push(r,r,r),m.push(.5,(n-a)/d),f.length/3-1),v=Math.hypot(uf.x,uf.y);for(let t=0;t<s.length;t++){let n=s[t],r=s[(t+1)%s.length],i=c(n),o=l(n),d=c(r),f=l(r),p=Math.hypot(d-i,f-o)||1,m=.8+.2*((f-o)/p*(uf.x/v)+-(d-i)/p*(uf.y/v)),y=e[n],b=e[r],x=Math.max(a,y-u),S=Math.max(a,b-u),C=_(i,o,x,m),w=_(d,f,S,m),T=_(d,f,b,m),E=_(i,o,y,m);h.push(C,w,T,C,T,E);let D=_(i,o,a,m),O=_(d,f,a,m),k=_(d,f,S,m),A=_(i,o,x,m);g.push(D,O,k,D,k,A)}let y=_(-r/2,-i/2,a,.85),b=_(-r/2,i/2,a,.85),x=_(r/2,i/2,a,.85),S=_(r/2,-i/2,a,.85),C=[...h,...g,y,b,x,y,x,S],w=new U;return w.setAttribute(`position`,new Or(f,3)),w.setAttribute(`color`,new Or(p,3)),w.setAttribute(`uv`,new Or(m,2)),w.setIndex(C),w.addGroup(0,h.length,0),w.addGroup(h.length,g.length,1),w.addGroup(h.length+g.length,6,2),w.computeBoundingSphere(),w}function hf(){let e=document.createElement(`canvas`);e.width=2,e.height=1024;let t=e.getContext(`2d`),n=0;for(let[r,i]of lf){let a=Math.round(r*e.height);t.fillStyle=i,t.fillRect(0,n,e.width,a+1),n+=a}let r=new tn(e);return r.colorSpace=Ae,r}function gf(e,t){e.traverse(e=>{let n=e;n.geometry?.dispose();let r=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(let e of r){e instanceof ru&&t?.delete(e);for(let t of Object.values(e))t instanceof _e&&t.dispose();e.dispose()}}),e.clear()}function _f(e,t){let n=t<.999;e.transparent!==n&&(e.transparent=n,e.needsUpdate=!0),e.opacity=n?t:1,e.depthWrite=!n}var vf=class{changed;anisotropy;root=new B;geo=null;mesh=null;block=null;depthPass=[];depthMat=null;strata=null;overlay=null;lines=new B;contours=new B;water=new B;gridKey=``;heights=null;blockKey=[];image=``;opacity=1;overlayKey=[];linesKey=[];contourKey=[];contourLook=``;waterKey=``;box=null;disposed=!1;constructor(e,t){this.changed=e,this.anisotropy=t,this.root.add(this.lines,this.contours,this.water)}bounds(){return this.mesh?this.box:null}update(e,t){let n=e?.terrain,r=e&&n?He(e):null;if(this.waterPlane(e,!!r),!e||!n||!r){this.mesh&&this.clear(t.fat);return}let{nx:i,ny:a}=n,o=`${i}:${a}:${e.w}:${e.h}`;o!==this.gridKey&&(this.clear(t.fat),this.gridKey=o,this.build(i,a)),r!==this.heights&&(this.heights=r,this.shape(e,r,i,a)),this.soilBlock(e,r,i,a),this.photo(t.image),this.see(t.opacity),this.paintAreas(e,t.picked,t.editing??null),this.outline(e,r,t),this.contourLines(e,r,t)}build(e,t){let n=new U,r=e*t;n.setAttribute(`position`,new Rn(new Float32Array(r*3),3)),n.setAttribute(`color`,new Rn(new Float32Array(r*3),3));let i=new Float32Array(r*2);for(let n=0;n<t;n++)for(let r=0;r<e;r++){let a=n*e+r;i[a*2]=r/(e-1),i[a*2+1]=n/(t-1)}n.setAttribute(`uv`,new Rn(i,2));let a=new Uint32Array((e-1)*(t-1)*6),o=0;for(let n=0;n+1<t;n++)for(let t=0;t+1<e;t++){let r=n*e+t;a.set([r,r+1,r+e+1,r,r+e+1,r+e],o),o+=6}n.setIndex(new Rn(a,1)),this.geo=n;let s=new Dt({color:af,vertexColors:!0,...df});this.mesh=new H(n,s),this.mesh.renderOrder=-1,this.mesh.raycast=()=>{},this.root.add(this.mesh),this.depthMat=new Dt({colorWrite:!1,...df});let c=new H(n,this.depthMat);c.renderOrder=10,c.raycast=()=>{},c.visible=!1,this.depthPass=[c],this.root.add(c),this.opacity=1}shape(e,t,n,r){let i=this.geo,a=i.getAttribute(`position`),o=i.getAttribute(`color`),s=a.array,c=o.array,l=e.w/(n-1),u=e.h/(r-1),d=new V;for(let i=0;i<r;i++)for(let a=0;a<n;a++){let o=i*n+a;s[o*3]=-e.w/2+a*l,s[o*3+1]=-e.h/2+i*u,s[o*3+2]=t[o];let f=(t[i*n+Math.min(n-1,a+1)]-t[i*n+Math.max(0,a-1)])/(l*(Math.min(n-1,a+1)-Math.max(0,a-1))),p=(t[Math.min(r-1,i+1)*n+a]-t[Math.max(0,i-1)*n+a])/(u*(Math.min(r-1,i+1)-Math.max(0,i-1)));d.set(-f,-p,1).normalize();let m=Math.min(1.15,Math.max(.45,.4+.6*d.dot(uf)/uf.z));c[o*3]=c[o*3+1]=c[o*3+2]=m}a.needsUpdate=!0,o.needsUpdate=!0,i.computeBoundingSphere(),i.computeBoundingBox()}soilBlock(e,t,n,r){let i=hn(e)??Ee(t)[0]-1e4,a=[t,i];if(a.every((e,t)=>e===this.blockKey[t])&&this.block)return;this.blockKey=a;let o=Ee(t)[1],s=mf(t,n,r,e.w,e.h,i,o);if(this.block)this.block.geometry.dispose(),this.block.geometry=s,this.depthPass[1].geometry=s;else{this.strata??=hf();let e=[new Dt({color:sf,vertexColors:!0,...df}),new Dt({map:this.strata,vertexColors:!0,...df}),new Dt({color:cf,vertexColors:!0,...df})];for(let t of e)_f(t,this.opacity);this.block=new H(s,e),this.block.renderOrder=-1,this.block.raycast=()=>{},this.root.add(this.block);let t=new H(s,this.depthMat);t.renderOrder=10,t.raycast=()=>{},t.visible=this.depthPass[0].visible,this.depthPass[1]=t,this.root.add(t)}this.block.visible=this.mesh.visible,this.box=new Wt(new V(-e.w/2,-e.h/2,i),new V(e.w/2,e.h/2,o))}see(e){let t=Math.min(1,Math.max(0,e));if(t===this.opacity&&this.mesh?.material.opacity===(t<.999?t:1)||(this.opacity=t,!this.mesh))return;let n=[this.mesh.material,...this.block?.material??[]];for(let e of n)_f(e,t);let r=t>.001;this.mesh.visible=r,this.block&&(this.block.visible=r);for(let e of this.depthPass)e.visible=r&&t<.999}photo(e){if(e===this.image||!this.mesh)return;this.image=e;let t=this.mesh.material;if(!e){t.map?.dispose(),t.map=null,t.color.set(af),t.needsUpdate=!0;return}t.map||t.color.set(af);let n=this.mesh;new xt().load(e,r=>{if(this.disposed||this.mesh!==n||this.image!==e)return r.dispose();r.colorSpace=Ae,r.anisotropy=this.anisotropy;let i=t.map;t.map=r,i?.dispose(),t.color.set(`#ffffff`),t.needsUpdate=!0,this.changed()},void 0,()=>console.error(`[viewport] land picture could not be read`))}paintAreas(e,t,n){let r=[e.areas,t,e.w,e.h,this.geo,n];if(r.every((e,t)=>e===this.overlayKey[t]))return;this.overlayKey=r,this.overlay&&=(this.overlay.material.map?.dispose(),this.overlay.material.dispose(),this.root.remove(this.overlay),null);let i=e.areas.filter(e=>e.points.length>=3);if(!i.length||!this.geo)return;let a=1024/Math.max(e.w,e.h),o=Math.max(64,Math.round(e.w*a)),s=Math.max(64,Math.round(e.h*a)),c=document.createElement(`canvas`);c.width=o,c.height=s;let l=c.getContext(`2d`);if(!l)return;let u=r=>{let i=r.kind===`site`,a=r.id===t;l.beginPath(),r.points.forEach((t,n)=>{let r=(t[0]+e.w/2)/e.w*o,i=(e.h/2-t[1])/e.h*s;n?l.lineTo(r,i):l.moveTo(r,i)}),l.closePath();let c=r.id===n;l.fillStyle=c?Jd:Zd(e.areas,r),l.globalAlpha=c?1:a?.34:i?.14:.22,l.fill()};for(let e of i)e.kind===`site`&&u(e);for(let e of i)e.kind!==`site`&&u(e);let d=new tn(c);d.colorSpace=Ae,d.anisotropy=this.anisotropy;let f=new Dt({map:d,vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4});this.overlay=new H(this.geo,f),this.overlay.renderOrder=1.5,this.overlay.raycast=()=>{},this.root.add(this.overlay)}outline(e,t,n){let r=[e.areas,n.picked,t,n.editing??null];if(r.every((e,t)=>e===this.linesKey[t]))return;this.linesKey=r,gf(this.lines,n.fat);let i=e.terrain,a=Math.min(e.w/(i.nx-1),e.h/(i.ny-1))/2,o=Math.max(80,a*.03),s=(n,r)=>ff(t,i.nx,i.ny,e.w,e.h,n,r)+o,c=Math.max(e.w,e.h)/70;for(let t of e.areas){if(t.points.length<3)continue;let r=t.kind===`site`,i=t.id===n.picked,o=[];t.points.forEach((e,n)=>{let r=t.points[(n+1)%t.points.length],i=Math.max(1,Math.ceil(Math.hypot(r[0]-e[0],r[1]-e[1])/a));for(let t=0;t<i;t++){let n=e[0]+(r[0]-e[0])*t/i,a=e[1]+(r[1]-e[1])*t/i,c=e[0]+(r[0]-e[0])*(t+1)/i,l=e[1]+(r[1]-e[1])*(t+1)/i;o.push(n,a,s(n,a),c,l,s(c,l))}});let l=t.id===n.editing,u=Zd(e.areas,t),d=new ru({color:new G(i&&!r?`#ff7a00`:u).getHex(),linewidth:r?l?5:i?4:3:i?3.5:2,transparent:!0,opacity:.95,depthWrite:!1,dashed:r&&!l,dashSize:c,gapSize:c*.6});d.resolution.set(n.width,n.height),n.fat.add(d);let f=new Ru(new yu().setPositions(o),d);r&&!l&&f.computeLineDistances(),f.renderOrder=3,f.raycast=()=>{},this.lines.add(f)}}contourLines(e,t,n){let r=e.terrain,i=0;if(n.contours!==!1){let[e,r]=Ee(t);i=(n.contours||Sr(r-e))*1e3}let a=[t,i,r.base],o=`${n.contourColor}:${n.contourOpacity}`;if(a.every((e,t)=>e===this.contourKey[t])){if(o!==this.contourLook){this.contourLook=o;for(let e of this.contours.children){let t=e.material;t.color.set(n.contourColor),t.opacity=t.userData.opacity*n.contourOpacity,e.visible=n.contourOpacity>.001}}return}if(this.contourKey=a,this.contourLook=o,gf(this.contours,n.fat),!i)return;let s=Math.min(e.w/(r.nx-1),e.h/(r.ny-1)),c=_r(t,r.nx,r.ny,e.w,e.h,i,r.base,Math.max(40,s*.01)),l=(e,t,r)=>{if(!e.length)return;let i=new ru({color:new G(n.contourColor).getHex(),linewidth:t,transparent:!0,opacity:r*n.contourOpacity,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4});i.userData.opacity=r,i.resolution.set(n.width,n.height),n.fat.add(i);let a=new Ru(new yu().setPositions(e),i);a.renderOrder=2,a.raycast=()=>{},a.visible=n.contourOpacity>.001,this.contours.add(a)};l(c.minor,1,.6),l(c.major,2.2,.85)}waterPlane(e,t){let n=e?.water,r=!!n&&(t||n.z>0),i=r&&e?Et(e):[],a=r&&i?`${n.z}:${e.w}:${e.h}:${i.map(e=>e.join(`;`)).join(`|`)}`:r?`${n.z}:${e.w}:${e.h}:all`:``;if(a===this.waterKey||(this.waterKey=a,gf(this.water),!e||!n||!r||i&&!i.length))return;let o=new Dt({color:of,transparent:!0,opacity:.5,depthWrite:!1,side:2}),s=i?new Je(i.map(e=>new we(e.map(e=>new W(e[0],e[1]))))):new dn(e.w,e.h),c=new H(s,o);c.position.z=n.z,c.renderOrder=2.5,c.raycast=()=>{},this.water.add(c)}clear(e){if(gf(this.lines,e),gf(this.contours,e),this.overlay&&=(this.overlay.material.map?.dispose(),this.overlay.material.dispose(),this.root.remove(this.overlay),null),this.mesh&&=(this.mesh.material.map?.dispose(),this.mesh.material.dispose(),this.root.remove(this.mesh),null),this.block){for(let e of this.block.material)e.dispose();this.block.geometry.dispose(),this.root.remove(this.block),this.block=null}for(let e of this.depthPass)this.root.remove(e);this.depthPass=[],this.depthMat?.dispose(),this.depthMat=null,this.geo?.dispose(),this.geo=null,this.gridKey=``,this.heights=null,this.blockKey=[],this.image=``,this.overlayKey=[],this.linesKey=[],this.contourKey=[],this.contourLook=``,this.box=null}dispose(e){this.disposed=!0,this.clear(e),this.strata?.dispose(),this.strata=null,gf(this.water),this.waterKey=``,this.root.removeFromParent()}};function yf(e,t,n,r,i=[0,0,1]){let a=0,o=[0,0,0],s=[0,0,0],c=[],l=t=>[e[t*3],e[t*3+1],e[t*3+2]];for(let e=0;e<n.length;e++){if(!r.has(n[e]))continue;let i=l(t[e*3]),u=l(t[e*3+1]),d=l(t[e*3+2]),f=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],p=[d[0]-i[0],d[1]-i[1],d[2]-i[2]],m=[f[1]*p[2]-f[2]*p[1],f[2]*p[0]-f[0]*p[2],f[0]*p[1]-f[1]*p[0]],h=Math.hypot(...m)/2;if(!(h>0))continue;let g=[(i[0]+u[0]+d[0])/3,(i[1]+u[1]+d[1])/3,(i[2]+u[2]+d[2])/3];for(let e=0;e<3;e++)o[e]+=g[e]*h,s[e]+=m[e]/2;a+=h,c.push({c:g,n:[m[0]/(2*h),m[1]/(2*h),m[2]/(2*h)],a:h})}if(!c.length)return null;let u=[o[0]/a,o[1]/a,o[2]/a],d,f=Math.hypot(...s);if(f>a*.2)d=[s[0]/f,s[1]/f,s[2]/f];else{let e=c[0],t=-1/0;for(let n of c){let r=n.n[0]*i[0]+n.n[1]*i[1]+n.n[2]*i[2];r>t&&(t=r,e=n)}d=e.n}let p=0;for(let e=0;e<n.length;e++)if(r.has(n[e]))for(let n=0;n<3;n++){let r=l(t[e*3+n]);p=Math.max(p,Math.hypot(r[0]-u[0],r[1]-u[1],r[2]-u[2]))}return{center:u,normal:d,radius:p}}var bf=`#ff8a1f`,xf=`#8a6d3b`;function Sf(e){let t=e.terrain,n=t?He(e):null;if(!t||!n){let t=Math.max(.005,Math.max(e.w,e.h)*1e-5)*3.5;return{at:()=>t,step:1/0}}let r=Math.min(e.w/(t.nx-1),e.h/(t.ny-1))/2,i=Math.max(80,r*.03);return{at:(r,a)=>ff(n,t.nx,t.ny,e.w,e.h,r,a)+i,step:r}}function Cf(e,t){let n=[];for(let[r,i]of e){let e=t.step===1/0?1:Math.max(1,Math.min(4e3,Math.ceil(Math.hypot(i[0]-r[0],i[1]-r[1])/t.step)));for(let a=0;a<e;a++){let o=r[0]+(i[0]-r[0])*a/e,s=r[1]+(i[1]-r[1])*a/e,c=r[0]+(i[0]-r[0])*(a+1)/e,l=r[1]+(i[1]-r[1])*(a+1)/e;n.push(o,s,t.at(o,s),c,l,t.at(c,l))}}return n}var wf=e=>e.flatMap(e=>e.slice(1).map((t,n)=>[e[n],t]));function Tf(e,t){e.traverse(e=>{let n=e;n.geometry?.dispose();let r=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(let e of r)e instanceof ru&&t.delete(e),e.dispose()}),e.clear()}function Ef(e,t,n,r,i={}){let a=new ru({color:new G(t).getHex(),linewidth:n,transparent:!0,depthWrite:!1,...i});a.resolution.set(r.width,r.height),r.fat.add(a);let o=new Ru(new yu().setPositions(e),a);return o.raycast=()=>{},o}var Df=class{root=new B;gridG=new B;draftG=new B;gridKey=[];constructor(){this.root.add(this.gridG,this.draftG)}grid(e,t,n,r,i){let a=e&&t?e.areas.find(e=>e.id===t&&e.kind===`site`&&e.points.length>=3):void 0,o=e?.terrain?He(e):null,s=[a?.points,o,n,r,e?.w,e?.h];if(s.every((e,t)=>e===this.gridKey[t])||(this.gridKey=s,Tf(this.gridG,i.fat),!e||!a))return;let c=Sf(e),l=Qd(a.points),u=ef(a.points,n),d=Math.max(1,Math.round(r)),f=rf(a.points,l,u,d),p=Cf(f.minor,c);if(p.length){let e=new U;e.setAttribute(`position`,new Or(p,3));let t=new Nn(e,new Kn({color:Yd,transparent:!0,opacity:.7,depthWrite:!1}));t.renderOrder=4,t.raycast=()=>{},this.gridG.add(t)}let m=Cf(f.major,c);if(m.length){let e=Ef(m,Xd,1.6,i,{opacity:.9});e.renderOrder=4,this.gridG.add(e)}let h=u*Math.min(d,2),g=Ef(Cf([[l,[l[0]+h,l[1]]]],c),`#d9534f`,3,i),_=Ef(Cf([[l,[l[0],l[1]+h]]],c),`#3c9a49`,3,i);g.renderOrder=_.renderOrder=5,this.gridG.add(g,_)}draft(e,t,n,r,i){if(Tf(this.draftG,i.fat),!e||!t.length&&!n.length)return;let a=Sf(e),o=Cf(wf(t),a);if(o.length){let e=Ef(o,bf,3.5,i,{depthTest:!1});e.renderOrder=20,this.draftG.add(e)}let s=Cf(wf(n),a);if(s.length){let e=Math.max(1,r*7),t=Ef(s,xf,2,i,{depthTest:!1,dashed:!0,dashSize:e,gapSize:e*.7});t.computeLineDistances(),t.renderOrder=20,this.draftG.add(t)}}dispose(e){Tf(this.gridG,e),Tf(this.draftG,e),this.gridKey=[],this.root.removeFromParent()}};function Of(e){return e.getRootNode()}function kf(e,t){let n=e;n.dispose(),t&&(n._interceptControlDown&&t.removeEventListener(`keydown`,n._interceptControlDown,{capture:!0}),n._interceptControlUp&&t.removeEventListener(`keyup`,n._interceptControlUp,{capture:!0}))}var Af={uPxA:{value:0},uPxB:{value:0}};function jf(e,t){let n=Math.max(1,t);e instanceof Me?(Af.uPxA.value=(e.top-e.bottom)/e.zoom/n,Af.uPxB.value=0):e instanceof _n&&(Af.uPxA.value=0,Af.uPxB.value=2*Math.tan(Ln.degToRad(e.fov)/2)/e.zoom/n)}function Mf(e){let t=new Kn({color:e,transparent:!0}),n={uMode:{value:1},uMinA:{value:k.minAlpha}};return t.userData.edge=n,t.onBeforeCompile=e=>{e.uniforms.uPxA=Af.uPxA,e.uniforms.uPxB=Af.uPxB,e.uniforms.uMode=n.uMode,e.uniforms.uMinA=n.uMinA,e.uniforms.uFrom={value:k.fromPx},e.uniforms.uTo={value:k.toPx},e.uniforms.uSmooth={value:k.smoothAlpha},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec2 edgeLook;
uniform float uPxA;
uniform float uPxB;
uniform float uMode;
uniform float uMinA;
uniform float uFrom;
uniform float uTo;
uniform float uSmooth;
varying float vEdgeA;`).replace(`#include <project_vertex>`,`#include <project_vertex>
        vEdgeA = 1.0;
        if (edgeLook.x != 0.0) {
          bool smoothEdge = edgeLook.x < 0.0;
          float spacing = (uMode > 0.5 && !smoothEdge) ? edgeLook.y : abs(edgeLook.x);
          float px = max(uPxA + uPxB * max(-mvPosition.z, 0.0), 1e-9);
          vEdgeA = mix(uMinA, 1.0, smoothstep(uFrom, uTo, spacing / px));
          if (smoothEdge && uMode > 0.5) vEdgeA *= uSmooth;
        }`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vEdgeA;`).replace(`#include <alphamap_fragment>`,`#include <alphamap_fragment>
diffuseColor.a *= vEdgeA;`)},t}function Nf(e,t){let n=e.userData.edge;n&&(n.uMode.value=+(t===`sharp`))}function Pf(e){return si(e.entities)??[[-20,-20],[20,20]]}var Ff=.35,If={ground:`#4a8fe0`,face:`#3c9a49`,work:`#f07b1d`},Lf={selection:`#ff7a00`,selectionEdge:`#c45a00`,hover:`#ffa040`,primary:`#1e6fff`,secondary:`#e0483e`,sketch:`#1d5fbf`,sketchActive:`#0d3f8f`,sketchSel:`#ff7a00`,sketchDim:`#2b7a3d`,region:`#4a8fe0`,regionPicked:`#ff9a3c`,preview:`#ff8a1f`,edge:`#1f2328`},Rf=Ln.degToRad;function zf(e,t){let n=e.length/3*2;return new Rn(t&&t.length===n?t:new Float32Array(n),2)}function Bf(e){return new rn().compose(new V(...e.position),new ee().setFromEuler(new he(Rf(e.rotation[0]),Rf(e.rotation[1]),Rf(e.rotation[2]),`XYZ`)),new V(1,1,1))}function Vf(e,t=!1){e.traverse(e=>{let n=e;n.geometry?.dispose();let r=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(let e of r){if(t)for(let t of Object.values(e))t instanceof _e&&t.dispose();e.dispose()}})}function Hf(e,t=0){let n=0;for(let t of e)n+=Math.max(0,t.length-1);let r=new Float32Array(n*6),i=0;for(let n of e)for(let e=0;e<n.length-1;e++)r[i++]=n[e][0],r[i++]=n[e][1],r[i++]=t,r[i++]=n[e+1][0],r[i++]=n[e+1][1],r[i++]=t;return r}function Uf(e,t){let n=e.geometry.getAttribute(`position`);if(n&&n.array.length===t.length){if(!t.length)return;let r=!0;for(let e=0;e<t.length;e++)if(n.array[e]!==Math.fround(t[e])){r=!1;break}if(r)return;n.array.set(t),n.needsUpdate=!0,e.geometry.computeBoundingSphere();return}e.geometry.dispose();let r=new U;r.setAttribute(`position`,new Rn(t instanceof Float32Array?t:new Float32Array(t),3)),e.geometry=r}var Wf=0,Gf=new WeakMap;function Kf(e){let t=Gf.get(e);return t??Gf.set(e,t=++Wf),t}function qf(e,t){let n=[];for(let r=0;r<e.faceIds.length;r++)t.has(e.faceIds[r])&&n.push(e.indices[r*3],e.indices[r*3+1],e.indices[r*3+2]);let r=new U;return r.setAttribute(`position`,new Rn(e.positions,3)),r.setAttribute(`normal`,new Rn(e.normals,3)),r.setIndex(n),r}function Jf(e,t){if(!t)return Array.from(e.edges);let n=[];for(let r=0;r<e.edgeIds.length;r++)if(t.has(e.edgeIds[r]))for(let t=0;t<6;t++)n.push(e.edges[r*6+t]);return n}var Yf=new WeakMap;function Xf(e,t){let n=Yf.get(e);n||Yf.set(e,n=new Map);let r=n.get(t);return r||n.set(t,r=Zf(e,t)),r}function Zf(e,t){let n=t=>[e.positions[t*3],e.positions[t*3+1],e.positions[t*3+2]],r=new Map,i=e=>{let t=n(e).map(e=>Math.round(e*1e4)).join(`,`);return r.has(t)||r.set(t,e),r.get(t)},a=new Map;for(let n=0;n<e.faceIds.length;n++){if(e.faceIds[n]!==t)continue;let r=[i(e.indices[n*3]),i(e.indices[n*3+1]),i(e.indices[n*3+2])];for(let e=0;e<3;e++){let t=r[e],n=r[(e+1)%3],i=t<n?`${t},${n}`:`${n},${t}`,o=a.get(i);o?o.n++:a.set(i,{a:t,b:n,n:1})}}let o=[];for(let e of a.values())e.n===1&&o.push(...n(e.a),...n(e.b));return o}var Qf=null;function $f(){if(Qf)return Qf;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.55,`rgba(255,255,255,1)`),n.addColorStop(.7,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),Qf=new tn(e),Qf}var ep={glow:`#ff7a00`,glowSoft:`#ffb15c`,faceSel:`#ffb35c`,faceHover:`#ffd9a8`,vertex:`#e040fb`,vertexHover:`#ea80fc`};function tp(e,t){if(e.t!==`point`)return[ri(e)];let[n,r]=e.p;return[[[n-t,r-t],[n+t,r+t]],[[n-t,r+t],[n+t,r-t]]]}function np(e,t=0){let n=new U;return n.setAttribute(`position`,new Rn(Hf(e,t),3)),n}var rp={iso:new V(1,-1,1).normalize(),top:new V(0,0,1),bottom:new V(0,0,-1),front:new V(0,-1,0),back:new V(0,1,0),right:new V(1,0,0),left:new V(-1,0,0)};function ip(e){return Math.abs(e.z)>.999?new V(0,1,0):new V(0,0,1)}var ap={px:{ko:`오른쪽`,en:`RIGHT`},nx:{ko:`왼쪽`,en:`LEFT`},py:{ko:`뒤`,en:`BACK`},ny:{ko:`정면`,en:`FRONT`},pz:{ko:`위`,en:`TOP`},nz:{ko:`아래`,en:`BOTTOM`}},op=[`px`,`nx`,`pz`,`nz`,`ny`,`py`];function sp(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`);n.fillStyle=`#f4f5f7`,n.fillRect(0,0,128,128),n.strokeStyle=`#9aa1ab`,n.lineWidth=4,n.strokeRect(2,2,124,124),n.fillStyle=`#3a4049`,n.font=`600 ${e.length>3?24:30}px "Malgun Gothic", "Noto Sans KR", sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,64,66);let r=new tn(t);return r.colorSpace=Ae,r}var cp=[{key:`n`,x:0,y:1},{key:`e`,x:1,y:0},{key:`s`,x:0,y:-1},{key:`w`,x:-1,y:0}];function lp(e,t){let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`);r.fillStyle=`rgba(244, 245, 247, 0.92)`,r.beginPath(),r.arc(32,32,26,0,Math.PI*2),r.fill(),r.strokeStyle=`#9aa1ab`,r.lineWidth=2,r.stroke(),r.fillStyle=t?`#d9534f`:`#3a4049`,r.font=`700 30px "Malgun Gothic", "Noto Sans KR", sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,32,34);let i=new tn(n);return i.colorSpace=Ae,i}var up=class{host;lang;renderer;scene=new ne;persp;ortho;camera;controls;keyRoot=null;bodiesRoot=new B;sketchRoot=new B;previewRoot=new B;ghostRoot=new B;gizmo=new B;bodyViews=new Map;sketchViews=new Map;labels;grid=new B;gridKey=``;dark=!1;frame=0;outlineSel=[];outlineHover=[];composer=null;renderPass=null;passSel=null;passHover=null;disposed=!1;empty=new U;geo=new Map;coarseGeometry(e){let t=this.geo.get(e.share??e);if(!t||!e.lod)return null;if(t.coarse===void 0){let n=e.lod,r=new U;r.setAttribute(`position`,new Rn(n.positions,3)),r.setAttribute(`normal`,new Rn(n.normals,3)),r.setIndex(new Rn(n.indices,1)),r.boundingSphere=t.faces.boundingSphere?.clone()??null,r.boundingBox=t.faces.boundingBox?.clone()??null;let i=new U;i.setAttribute(`position`,new Rn(n.edges,3)),i.setAttribute(`edgeLook`,zf(n.edges,n.edgeLook)),i.boundingSphere=t.faces.boundingSphere?.clone()??null,t.coarse={faces:r,edges:i}}return t.coarse}takeGeometry(e){let t=this.geo.get(e.share??e);if(!t){let n=new U;n.setAttribute(`position`,new Rn(e.positions,3)),n.setAttribute(`normal`,new Rn(e.normals,3)),n.setIndex(new Rn(e.indices,1)),n.computeBoundingSphere(),n.computeBoundingBox();let r=new U;r.setAttribute(`position`,new Rn(e.edges,3)),r.setAttribute(`edgeLook`,zf(e.edges,e.edgeLook)),r.computeBoundingSphere(),t={faces:n,edges:r,users:0},this.geo.set(e.share??e,t)}return t.users++,t}dropGeometry(e){let t=e&&this.geo.get(e.share??e);!t||--t.users>0||(t.faces.dispose(),t.edges.dispose(),t.coarse?.faces.dispose(),t.coarse?.edges.dispose(),this.geo.delete(e.share??e))}renderOutlined(e,t){if(!this.composer){let n=this.renderer.getPixelRatio(),r=new En(e*n,t*n,{samples:4,type:se});this.composer=new fu(this.renderer,r),this.renderPass=new gu(this.scene,this.camera);let i=(n,r,i,a)=>{let o=new pu(new W(e,t),this.scene,this.camera);return o.visibleEdgeColor.set(n),o.hiddenEdgeColor.set(n).multiplyScalar(.35),o.edgeStrength=r,o.edgeGlow=i,o.edgeThickness=a,o};this.passHover=i(ep.glowSoft,2,0,1),this.passSel=i(ep.glow,3,0,1),this.composer.addPass(this.renderPass),this.composer.addPass(this.passHover),this.composer.addPass(this.passSel),this.composer.addPass(new hu)}this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t),this.renderPass.camera=this.camera,this.passSel.renderCamera=this.camera,this.passHover.renderCamera=this.camera,this.passSel.selectedObjects=this.outlineSel,this.passHover.selectedObjects=this.outlineHover,this.passSel.enabled=this.outlineSel.length>0,this.passHover.enabled=this.outlineHover.length>0,this.composer.render()}baseHeight;cubeScene=new ne;cubeCamera=new Me(-1,1,1,-1,.1,10);cubeMesh;cubeHover;compass=[];labelNodes=new Map;labelData=new Map;labelShown=new Map;tween=null;cubeSpot={corner:`tr`,room:{left:0,right:0},size:112};wheelZoom=20;onWheelCapture=e=>{this.controls.zoomSpeed=e.ctrlKey?1:Gu(this.wheelZoom,e.deltaMode)};onPointerCapture=()=>{this.controls.zoomSpeed=1};onRender=null;pickClip=null;groundObjects(){return[this.grid,this.siteRoot,this.ground?.root,this.land?.root].filter(e=>!!e)}constructor(e,t,n){this.host=e,this.lang=n,this.renderer=new Vs({antialias:!0,powerPreference:`high-performance`,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.autoClear=!1,e.appendChild(this.renderer.domElement),this.labels=document.createElement(`div`),this.labels.className=`labels`,e.appendChild(this.labels),b.DEFAULT_UP.set(0,0,1),this.scene.background=new G(`#eceef1`),this.scene.environment=Vu(this.renderer),this.baseHeight=t,this.persp=new _n(35,1,t/2e3,t*200),this.ortho=new Me(-1,1,1,-1,-t*100,t*100);for(let e of[this.persp,this.ortho])e.up.set(0,0,1);this.camera=this.ortho,this.scene.add(new be(`#ffffff`,`#a4a9b0`,1.4));let r=new L(`#ffffff`,1.4);r.position.set(.5,-.8,1.2),this.scene.add(r);let i=new L(`#ffffff`,.45);i.position.set(-.7,.6,.4),this.scene.add(i),this.scene.add(this.grid,this.bodiesRoot,this.sketchRoot,this.ghostRoot,this.previewRoot,this.gizmo),this.controls=new Wl(this.camera,this.renderer.domElement),this.keyRoot=Of(this.renderer.domElement),this.controls.mouseButtons={LEFT:null,MIDDLE:Xt.PAN,RIGHT:null},this.controls.zoomToCursor=!0,this.controls.screenSpacePanning=!0,this.controls.addEventListener(`change`,()=>this.render()),e.addEventListener(`wheel`,this.onWheelCapture,{capture:!0,passive:!0}),e.addEventListener(`pointerdown`,this.onPointerCapture,!0),this.applyZoomLimits();let a=op.map(e=>new Dt({map:sp(ap[e][n])}));this.cubeMesh=new H(new Qt(1,1,1),a),this.cubeMesh.geometry.rotateX(Math.PI/2),this.cubeScene.add(this.cubeMesh);let o=new Nn(new j(this.cubeMesh.geometry),new Kn({color:`#7d848e`}));this.cubeScene.add(o),this.cubeHover=new H(new Qt(.34,.34,.34),new Dt({color:`#5aa0ff`,transparent:!0,opacity:.5,depthTest:!1})),this.cubeHover.visible=!1,this.cubeScene.add(this.cubeHover);let s=new B,c=(e,t)=>{let n=new U().setFromPoints([new V(-.5,-.5,-.5),new V(-.5+e[0]*1.25,-.5+e[1]*1.25,-.5+e[2]*1.25)]);s.add(new tr(n,new Kn({color:t})))};c([1,0,0],`#d9534f`),c([0,1,0],`#3c9a49`),c([0,0,1],`#2f6fd6`),this.cubeScene.add(s);let l=new At(new U().setFromPoints(Array.from({length:72},(e,t)=>new V(Math.cos(t/72*Math.PI*2)*.72,Math.sin(t/72*Math.PI*2)*.72,-.5))),new Kn({color:`#9aa1ab`}));this.cubeScene.add(l);for(let e of cp){let t=new ae(new ye({map:lp(Xn(n,`cube.${e.key}`),e.key===`n`)}));t.position.set(e.x*.8,e.y*.8,-.5),t.scale.set(.24,.24,1),this.cubeScene.add(t),this.compass.push(t)}this.cubeCamera.up.set(0,0,1),this.setView(`iso`,!1)}setLang(e){if(e===this.lang)return;this.lang=e;let t=this.cubeMesh.material;op.forEach((n,r)=>{t[r].map?.dispose(),t[r].map=sp(ap[n][e]),t[r].needsUpdate=!0}),cp.forEach((t,n)=>{let r=this.compass[n]?.material;r&&(r.map?.dispose(),r.map=lp(Xn(e,`cube.${t.key}`),t.key===`n`),r.needsUpdate=!0)}),this.render()}resize(){this.applySize(),this.render()}applySize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.renderer.setSize(e,t),this.persp.aspect=e/t,this.persp.updateProjectionMatrix();let n=this.baseHeight/2;this.ortho.left=-n*e/t,this.ortho.right=n*e/t,this.ortho.top=n,this.ortho.bottom=-n,this.ortho.updateProjectionMatrix();for(let n of this.fatMaterials)n.resolution.set(e,t)}visibleHeight(){return this.camera===this.ortho?this.baseHeight/this.ortho.zoom:2*this.persp.position.distanceTo(this.controls.target)*Math.tan(Rf(this.persp.fov)/2)}canvasSize(){return new W(this.host.clientWidth||1,this.host.clientHeight||1)}pixel(e){let t=this.host.clientHeight||1;return this.camera===this.ortho?this.baseHeight/this.ortho.zoom/t:2*this.persp.position.distanceTo(e??this.controls.target)*Math.tan(Rf(this.persp.fov)/2)/t}setProjection(e){let t=this.controls.target.clone(),n=this.camera.position.clone().sub(t).normalize(),r=this.visibleHeight();if(e===`ortho`&&this.camera!==this.ortho)this.ortho.position.copy(t).addScaledVector(n,this.baseHeight*2),this.ortho.up.copy(this.persp.up),this.ortho.zoom=this.baseHeight/r,this.ortho.updateProjectionMatrix(),this.camera=this.ortho;else if(e===`persp`&&this.camera!==this.persp){let e=r/(2*Math.tan(Rf(this.persp.fov)/2));this.persp.position.copy(t).addScaledVector(n,e),this.persp.up.copy(this.ortho.up),this.camera=this.persp}this.applyZoomLimits(),this.controls.object=this.camera,this.controls.update(),this.render()}setControlSpeed(e,t){this.wheelZoom=Math.min(50,Math.max(5,e||20)),this.controls.rotateSpeed=t,this.controls.panSpeed=1}plateSize(){let e=this.gridArgs;return e?Math.max(e.w,e.h):this.baseHeight/1.4}zoomPercent(){return Ku(this.plateSize(),this.visibleHeight())}setZoomPercent(e){if(!Number.isFinite(e))return;let t=Math.min(Hu,Math.max(5,e));if(this.tween=null,this.camera===this.ortho)this.ortho.zoom=Ju(this.baseHeight,this.plateSize(),t),this.ortho.updateProjectionMatrix();else{let e=this.persp.position.clone().sub(this.controls.target).normalize();this.persp.position.copy(this.controls.target).addScaledVector(e,Yu(this.plateSize(),t,this.persp.fov))}this.controls.update(),this.render()}zoomStep(e){this.setZoomPercent(this.zoomPercent()*(1+this.wheelZoom/100)**e)}applyZoomLimits(){let e=this.plateSize(),t=this.controls;t.minZoom=Ju(this.baseHeight,e,5),t.maxZoom=Ju(this.baseHeight,e,Hu);let n=this.camera===this.persp;t.minDistance=n?Yu(e,Hu,this.persp.fov):0,t.maxDistance=n?Yu(e,5,this.persp.fov):1/0,this.fxRange&&([t.minDistance,t.maxDistance]=this.fxRange)}look(e,t,n,r=!0,i){let a=Math.max(n,this.baseHeight*.02),o=i??ip(e),s,c=this.ortho.zoom;if(this.camera===this.ortho){s=t.clone().addScaledVector(e,this.baseHeight*2);let n=this.host.clientWidth||1,r=this.host.clientHeight||1,i=Math.max(2*a*1.15,2*a*1.15*r/n);c=Math.min(this.controls.maxZoom,Math.max(this.controls.minZoom,this.baseHeight/i))}else{let n=Math.min(this.controls.maxDistance,Math.max(this.controls.minDistance,a*1.2/Math.sin(Rf(this.persp.fov)/2)));s=t.clone().addScaledVector(e,n)}if(!r){this.camera.position.copy(s),this.camera.up.copy(o),this.controls.target.copy(t),this.camera===this.ortho&&(this.ortho.zoom=c,this.ortho.updateProjectionMatrix()),this.controls.update(),this.render();return}this.tween={from:this.camera.position.clone(),to:s,tFrom:this.controls.target.clone(),tTo:t.clone(),upFrom:this.camera.up.clone(),upTo:o,zFrom:this.ortho.zoom,zTo:c,start:performance.now()},this.render()}turnTo(e,t=!0){let n=this.controls.target.clone(),r=this.camera===this.ortho?this.baseHeight*2:Math.max(.001,this.camera.position.distanceTo(n)),i=n.clone().addScaledVector(e,r),a=ip(e);if(!t){this.camera.position.copy(i),this.camera.up.copy(a),this.controls.update(),this.render();return}let o=this.ortho.zoom;this.tween={from:this.camera.position.clone(),to:i,tFrom:n.clone(),tTo:n,upFrom:this.camera.up.clone(),upTo:a,zFrom:o,zTo:o,start:performance.now()},this.render()}sceneSphere(e){let t=new Wt;for(let[n,r]of this.bodyViews)r.group.visible&&(!e||e.has(n))&&t.expandByObject(r.group);for(let[n,r]of this.sketchViews)r.group.visible&&(!e||e.has(n))&&t.expandByObject(r.lines);return t.isEmpty()?null:t.getBoundingSphere(new mt)}setView(e,t=!0,n){let r=this.gridArgs,i=this.sceneSphere(n)??(n?null:this.groundSphere())??new mt(new V(0,0,0),r?Math.hypot(r.w,r.h)/2:this.baseHeight/4);if(e===`fit`||e===`fitSel`){let e=this.camera.position.clone().sub(this.controls.target).normalize();this.look(e,i.center,i.radius,t,this.camera.up.clone());return}let a=rp[e];a&&this.look(a.clone(),i.center,i.radius,t)}lookAtPlane(e,t){let n=Bf(e),r=new V(0,0,1).transformDirection(n),i=new V(0,1,0).transformDirection(n),a=new V(...e.position);this.look(r,a,t,!0,i)}lookAtFaces(e,t){let n=this.bodyViews.get(e),r=n?.data;if(!n||!r)return!1;n.group.updateMatrixWorld();let i=n.group.matrixWorld,a=i.clone().invert(),o=this.camera.position.clone().sub(this.controls.target).normalize().transformDirection(a),s=yf(r.positions,r.indices,r.faceIds,new Set(t),[o.x,o.y,o.z]);if(!s)return!1;let c=new V(...s.normal).transformDirection(i),l=new V(...s.center).applyMatrix4(i);return this.look(c,l,s.radius*new V().setFromMatrixScale(i).x,!0),!0}orbitBy(e,t){let n=this.controls.target,r=this.camera.position.clone().sub(n),i=new lt().setFromVector3(new V(r.x,r.z,-r.y));i.theta-=e*.01,i.phi=Math.max(.01,Math.min(Math.PI-.01,i.phi-t*.01));let a=new V().setFromSpherical(i);this.camera.position.copy(n).add(new V(a.x,-a.z,a.y)),this.camera.up.set(0,0,1),this.controls.update(),this.render()}orbitAbout(e,t,n){this.tween=null;let r=2*Math.PI*this.controls.rotateSpeed/(this.host.clientHeight||1),i=rd({position:this.camera.position,target:this.controls.target,up:this.camera.up},e,-t*r,n*r);this.camera.position.copy(i.position),this.controls.target.copy(i.target),this.camera.up.copy(i.up),this.controls.update(),this.render()}showPivot(e){this.setLabel(`nav:pivot`,e,``,`pivot-mark`),this.render()}partCentre(e,t,n,r=[]){let i=this.bodyViews.get(e),a=i?.data;if(!i||!a)return null;let o=new Set(n),s=new Wt,c=new V,l=(e,t)=>s.expandByPoint(c.set(e[t],e[t+1],e[t+2]));if(t===`face`){for(let e=0;e<a.faceIds.length;e++)if(o.has(a.faceIds[e]))for(let t=0;t<3;t++)l(a.positions,a.indices[e*3+t]*3)}else if(t===`edge`)for(let e=0;e<a.edgeIds.length;e++)o.has(a.edgeIds[e])&&(l(a.edges,e*6),l(a.edges,e*6+3));else for(let e of n)r[e]&&l(r[e],0);return s.isEmpty()?null:(i.group.updateMatrixWorld(),s.getCenter(new V).applyMatrix4(i.group.matrixWorld))}panBy(e,t){let n=this.pixel();this.camera.updateMatrixWorld();let r=new V().setFromMatrixColumn(this.camera.matrixWorld,0),i=new V().setFromMatrixColumn(this.camera.matrixWorld,1),a=r.multiplyScalar(-e*n).addScaledVector(i,t*n);this.camera.position.add(a),this.controls.target.add(a),this.controls.update(),this.render()}gridArgs=null;setGrid(e,t,n,r,i,a=5,o=!1,s=1,c=``,l=0){this.gridArgs={w:e,h:t,cell:n,major:Math.max(1,Math.round(a)),auto:o,ground:!i,unit:s,unitLabel:c},this.applyZoomLimits(),this.buildGrid(),this.grid.visible=r,i?this.grid.matrix.copy(Bf(i)):this.grid.matrix.makeTranslation(0,0,l),this.grid.matrixAutoUpdate=!1,this.grid.matrixWorldNeedsUpdate=!0}autoCell(){let e=this.pixel(),t=[1,5,10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4],n=this.gridArgs,r=Math.max(e*18,Math.max(n.w,n.h)/400);return t.find(e=>e>=r)??t[t.length-1]}setTheme(e){e!==this.dark&&(this.dark=e,this.scene.background.set(e?`#3d3d3d`:`#eceef1`),Lf.sketch=e?`#6fa8ff`:`#1d5fbf`,Lf.sketchActive=e?`#a9ccff`:`#0d3f8f`,Lf.sketchDim=e?`#5cc27a`:`#2b7a3d`,this.gridKey=``,this.buildGrid(),this.render())}buildGrid(){let e=this.gridArgs;if(!e)return;let{w:t,h:n,major:r,ground:i}=e,a=e.auto?this.autoCell():e.cell,o=`${t}:${n}:${a}:${r}:${i}:${e.unit}:${this.dark}`;if(o===this.gridKey)return;this.gridKey=o;for(let e of[...this.grid.children])this.grid.remove(e),e.traverse(e=>{e.geometry?.dispose();let t=e.material;t?.map?.dispose(),t?.dispose?.()});let s=[],c=[],l={x:[],y:[]},u=Math.ceil(-t/2/a-1e-9),d=Math.floor(t/2/a+1e-9),f=Math.ceil(-n/2/a-1e-9),p=Math.floor(n/2/a+1e-9);for(let e=u;e<=d;e++){let t=e*a,i=e%r===0;(i?c:s).push(t,-n/2,0,t,n/2,0),i&&l.x.push(t)}for(let e=f;e<=p;e++){let n=e*a,i=e%r===0;(i?c:s).push(-t/2,n,0,t/2,n,0),i&&l.y.push(n)}let m=(e,t,n)=>{let r=new U;return r.setAttribute(`position`,new Or(e,3)),new Nn(r,new Kn({color:t,transparent:!0,opacity:n,depthWrite:!1}))},h=this.dark;if(this.grid.add(m(s,h?`#6e767c`:`#8fd2ea`,h?.35:.22),m(c,h?`#8e9aa2`:`#5bbde0`,h?.55:.45)),this.grid.add(m([-t/2,-n/2,0,t/2,-n/2,0,t/2,-n/2,0,t/2,n/2,0,t/2,n/2,0,-t/2,n/2,0,-t/2,n/2,0,-t/2,-n/2,0],h?`#7fb2cc`:`#45b0d8`,.75)),!i)return;let g=new H(new dn(t,n),new Dt({color:h?`#4a4f54`:`#d6eef7`,transparent:!0,opacity:.55,depthWrite:!1,side:2}));g.position.z=-Math.max(.01,Math.max(t,n)*2e-5),g.renderOrder=-2,g.visible=!this.plateHidden,g.name=`gridPlate`,this.grid.add(g);let _=a*r,v=Math.max(a*.35,_*.06),y=new H(new Pe(v*.65,v,40),new Dt({color:`#7d848e`,transparent:!0,opacity:.85,depthWrite:!1,side:2}));y.position.z=.02,this.grid.add(y),this.grid.add(m([0,0,.02,_,0,.02],`#d9534f`,.9)),this.grid.add(m([0,0,.02,0,_,.02],`#3c9a49`,.9));let b=_*.16,x=t=>`${+(t/e.unit).toFixed(3)}`,S=Math.max(1,Math.ceil(Math.max(l.x.length,l.y.length)/30));if(l.x.forEach((e,t)=>{if(t%S)return;let r=this.textPlane(x(e),b);r.position.set(e,-n/2-b*.9,0),this.grid.add(r)}),l.y.forEach((e,r)=>{if(r%S||Math.abs(e+n/2)<b)return;let i=this.textPlane(x(e),b,`left`);i.position.set(t/2+b*.5,e,0),this.grid.add(i)}),e.unitLabel){let r=this.textPlane(e.unitLabel,b,`left`);r.position.set(t/2+b*.5,-n/2-b*.9,0),this.grid.add(r)}}textPlane(e,t,n=`center`){let r=document.createElement(`canvas`),i=r.getContext(`2d`);i.font=`500 48px "Malgun Gothic", "Noto Sans KR", sans-serif`,r.width=Math.ceil(i.measureText(e).width)+8,r.height=64,i.font=`500 48px "Malgun Gothic", "Noto Sans KR", sans-serif`,i.fillStyle=`#2f9fcb`,i.textBaseline=`middle`,i.fillText(e,4,r.height/2);let a=new tn(r);a.colorSpace=Ae,a.anisotropy=4;let o=t*r.width/r.height,s=new dn(o,t);s.translate(n===`left`?o/2:n===`right`?-o/2:0,0,.03);let c=new H(s,new Dt({map:a,transparent:!0,depthWrite:!1,side:2}));return c.renderOrder=1,c}originPlanes=new B;originKey=``;setOriginPlanes(e,t){let n=`${e.xy}${e.yz}${e.xz}${t}`;if(n===this.originKey)return;this.originKey=n,this.originPlanes.parent||this.scene.add(this.originPlanes);for(let e of[...this.originPlanes.children])this.originPlanes.remove(e),e.traverse(e=>{e.geometry?.dispose(),e.material?.dispose?.()});let r=(e,n,r)=>{if(!e)return;let i=new B,a=new H(new dn(t,t),new Dt({color:n,transparent:!0,opacity:.07,side:2,depthWrite:!1})),o=new Nn(new j(new dn(t,t)),new Kn({color:n,transparent:!0,opacity:.6}));i.add(a,o),i.rotation.copy(r),i.renderOrder=-1,this.originPlanes.add(i)};r(e.xy,If.ground,new he(0,0,0)),r(e.yz,`#d9534f`,new he(0,Math.PI/2,0)),r(e.xz,`#3c9a49`,new he(Math.PI/2,0,0)),this.render()}workPlanes=new B;workKey=``;setWorkPlanes(e){let t=JSON.stringify(e.map(e=>[e.id,e.name,e.size,e.matrix.elements,e.selected,e.hover]));if(t!==this.workKey){this.workKey=t,this.workPlanes.parent||this.scene.add(this.workPlanes);for(let e of[...this.workPlanes.children])this.workPlanes.remove(e),e.traverse(e=>{e.geometry?.dispose(),e.material?.dispose?.()});this.clearLabels(`wp:`);for(let t of e){let e=t.selected?`#2f6fd6`:`#e08a2c`,n=new B,r=new H(new dn(t.size,t.size),new Dt({color:e,transparent:!0,opacity:t.hover||t.selected?.16:.08,side:2,depthWrite:!1})),i=new Nn(new j(new dn(t.size,t.size)),new Kn({color:e}));n.add(r,i),n.matrixAutoUpdate=!1,n.matrix.copy(t.matrix),n.renderOrder=-1,this.workPlanes.add(n);let a=new V(-t.size/2,t.size/2,0).applyMatrix4(t.matrix);this.setLabel(`wp:${t.id}`,a,t.name,`ann`)}this.render()}}syncBodies(e,t,n,r,i,a,o){let s=new Set;this.edgeMode=r;for(let c of e.bodies){s.add(c.id);let l=this.bodyViews.get(c.id);if(!l){let e=new H(this.empty,new Ze({polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,envMapIntensity:.6}));e.userData.itemId=c.id;let t=new Nn(this.empty,Mf(Lf.edge));t.userData.itemId=c.id;let n=new B,r=new ke(new U,new Re({color:Lf.edge,size:6,sizeAttenuation:!1}));r.raycast=()=>{},n.add(e,t,r),n.userData.itemId=c.id,this.bodiesRoot.add(n),l={group:n,mesh:e,edges:t,dots:r,data:null,hl:null,overlayKey:``},this.bodyViews.set(c.id,l)}let u=t[M(e,c).id]??null;if(u!==l.data){let e=l.data;if(l.data=u,l.overlayKey=``,u){let e=this.takeGeometry(u);l.mesh.geometry=e.faces,l.edges.geometry=e.edges,l.full={faces:e.faces,edges:e.edges},l.dots.geometry.dispose(),l.dots.geometry=new U().setAttribute(`position`,new Or((u.points??[]).slice(0,u.dots??void 0).flat(),3))}else l.mesh.geometry=this.empty,l.edges.geometry=this.empty,l.full=void 0;l.lod=0,this.dropGeometry(e)}let d=n===`xray`||n===`xrayEdges`;Bu(l.mesh.material,c.material??`plastic`,c.color,i,d);let f=!!o?.has(c.id);f&&(l.mesh.material.transparent=!0,l.mesh.material.opacity=Math.min(l.mesh.material.opacity,.15),l.mesh.material.depthWrite=!1);let p=f?.25:1;l.edges.material.opacity!==p&&(l.edges.material.opacity=p),l.edgeColor=Fe(c.color),Nf(l.edges.material,l.allEdges||r===`all`?`all`:`sharp`),l.mesh.visible=n!==`wire`,l.edges.visible=(n===`shadedEdges`||n===`wire`||n===`xrayEdges`)&&(r!==`off`||n!==`shadedEdges`),l.want={mesh:l.mesh.visible,edges:l.edges.visible,paint:!!c.faceColors?.length},l.group.visible=c.visible&&!!u&&!a.has(c.id),Nd(l.group,l.mesh,u,c,i,d),l.group.matrix.copy(Bf(c)),l.group.matrixAutoUpdate=!1,l.group.matrixWorldNeedsUpdate=!0,this.applyBodyLod(l,l.lod??0,l.edgesOn??!0)}for(let[e,t]of this.bodyViews)s.has(e)||(this.bodiesRoot.remove(t.group),this.dropHighlight(t),Md(t.group),t.box&&t.group.remove(t.box),t.mesh.material.dispose(),t.edges.material.dispose(),t.dots.geometry.dispose(),t.dots.material.dispose(),this.dropGeometry(t.data),this.bodyViews.delete(e))}dropHighlight(e){e.hl&&=(e.group.remove(e.hl),e.hl.traverse(e=>{let t=e.material;t instanceof ru&&this.fatMaterials.delete(t)}),Vf(e.hl),null)}fatMaterials=new Set;glowLines(e,t,n,r,i){let a=new B;if(!e.length)return a;let o=this.host.clientWidth||1,s=this.host.clientHeight||1;for(let[c,l]of[[r,i],[n,1]]){let n=new yu;n.setPositions(e);let r=new ru({color:new G(t).getHex(),linewidth:c,transparent:!0,opacity:l,depthWrite:!1});r.resolution.set(o,s),this.fatMaterials.add(r);let i=new Ru(n,r);i.renderOrder=6,a.add(i)}return a}syncBodyHighlights(e,t,n,r){let i=new Set(t.primary??[]),a=new Set(t.secondary??[]);this.outlineSel=[],this.outlineHover=[];for(let[t,r]of this.bodyViews)r.group.visible&&(e.has(t)?this.outlineSel.push(r.mesh):n?.bodyId===t&&this.outlineHover.push(r.mesh));let o=new Set([...t.faces??[],...t.edges??[],...t.vertices??[]].map(e=>e.bodyId));for(let[t,r]of this.bodyViews){let s=e.has(t)||i.has(t)||a.has(t)||n?.bodyId===t||o.has(t);s!==!!r.pinned&&(r.pinned=s,s&&this.applyBodyLod(r,0,!0))}for(let[s,c]of this.bodyViews){let l=i.has(s)?Lf.primary:a.has(s)?Lf.secondary:e.has(s)?Lf.selection:null,u=n?.bodyId===s&&n.faceId==null&&n.edgeId==null&&n.vertex==null;c.mesh.material.emissive.set(l??(u?Lf.hover:`#000000`));let d=e.has(s)&&!i.has(s)&&!a.has(s);c.mesh.material.emissiveIntensity=d?this.outlineOn?0:Ff:l?.3:u?.05:0,c.edges.material.color.set(d||!l?c.edgeColor??Lf.edge:a.has(s)?`#9b1d14`:Lf.selectionEdge);let f=e.has(s)||i.has(s)||a.has(s)||o.has(s);f!==!!c.allEdges&&(c.allEdges=f,Nf(c.edges.material,f||this.edgeMode===`all`?`all`:`sharp`)),a.has(s)&&(c.mesh.material.transparent=!0,c.mesh.material.opacity=.45,c.mesh.material.depthWrite=!1);let p=new Set((t.faces??[]).filter(e=>e.bodyId===s).flatMap(e=>e.ids)),m=new Set((t.edges??[]).filter(e=>e.bodyId===s).flatMap(e=>e.ids)),h=new Set((t.vertices??[]).filter(e=>e.bodyId===s).flatMap(e=>e.ids)),g=n?.bodyId===s&&n.faceId!=null?n.faceId:null,_=n?.bodyId===s&&n.edgeId!=null?n.edgeId:null,v=n?.bodyId===s&&n.vertex!=null?n.vertex:null,y=`${[...p].join(`,`)}|${[...m].join(`,`)}|${[...h].join(`,`)}|${g}|${_}|${v}|${this.host.clientWidth}x${this.host.clientHeight}`;if(y===c.overlayKey||!c.data)continue;c.overlayKey=y,this.dropHighlight(c);let b=c.data,x=new B,S=(e,t,n)=>new H(qf(b,e),new Dt({color:t,transparent:!0,opacity:n,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,depthWrite:!1}));p.size&&(x.add(S(p,ep.faceSel,.6)),x.add(this.glowLines([...p].flatMap(e=>Xf(b,e)),ep.glow,2.5,9,.35))),g!=null&&!p.has(g)&&(x.add(S(new Set([g]),ep.faceHover,.45)),x.add(this.glowLines(Xf(b,g),ep.glowSoft,2,8,.3))),m.size&&x.add(this.glowLines(Jf(b,m),ep.glow,3.5,11,.4)),_!=null&&!m.has(_)&&x.add(this.glowLines(Jf(b,new Set([_])),ep.glowSoft,3,10,.35));let C=r?.(s)??[],w=(e,t,n)=>{let r=e.map(e=>C[e]).filter(Boolean);if(!r.length)return null;let i=new U;i.setAttribute(`position`,new Or(r.flat(),3));let a=new ke(i,new Re({color:t,size:n*2.4,sizeAttenuation:!1,map:$f(),transparent:!0,opacity:.35,depthTest:!1})),o=new ke(i.clone(),new Re({color:t,size:n,sizeAttenuation:!1,map:$f(),transparent:!0,depthTest:!1}));a.renderOrder=7,o.renderOrder=8;let s=new B;return s.add(a,o),s},T=w([...h],ep.vertex,11);if(T&&x.add(T),v!=null&&!h.has(v)){let e=w([v],ep.vertexHover,10);e&&x.add(e)}x.children.length&&(c.hl=x,c.group.add(x))}}syncSketches(e,t,n,r,i,a,o,s,c,l,u){let d=new Set,f=this.pixel()*9;for(let p of e.sketches){d.add(p.id);let e=this.sketchViews.get(p.id);if(!e){let t=new B,n=new Nn(new U,new Kn({color:Lf.sketch,depthTest:!0}));n.userData.itemId=p.id;let r=new Nn(new U,new Kn({color:Lf.sketchSel,depthTest:!1}));r.renderOrder=6;let i=new Nn(new U,new Kn({color:Lf.sketchDim,depthTest:!1}));i.renderOrder=6;let a=new B,o=new H(new dn(1,1),new Dt({transparent:!0,opacity:.06,side:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));o.renderOrder=1,t.add(o,a,n,r,i),this.sketchRoot.add(t),e={group:t,fill:o,lines:n,overlay:r,regions:a,dims:i,key:null,overlayKey:``,regionKey:null},this.sketchViews.set(p.id,e)}let m=f*.45,h=e.mark==null||Math.abs(e.mark-m)>m*.3;if(e.key!==p.entities||e.styleKey!==p.lineStyle||h&&p.entities.some(e=>e.t===`point`)){e.key=p.entities,e.styleKey=p.lineStyle,e.mark=m,e.styled&&Wd(e.styled,this.fatMaterials);let t=Vd(p.entities,p.lineStyle,e=>tp(e,m),this.canvasSize());e.styled=t.group;for(let e of Gd(t.group))this.fatMaterials.add(e);e.lines.add(t.group),e.lines.geometry.dispose(),e.lines.geometry=np(t.plain),e.overlayKey=``}let g=n.has(p.id),_=t===p.id;{e.boundsCache?.entities!==p.entities&&(e.boundsCache={entities:p.entities,box:Pf(p)});let t=e.boundsCache.box,n=Math.max((t[1][0]-t[0][0])*.15,(t[1][1]-t[0][1])*.15,this.pixel()*40);e.fill.scale.set(t[1][0]-t[0][0]+n*2,t[1][1]-t[0][1]+n*2,1),e.fill.position.set((t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2,0),e.fill.material.color.set(p.plane?If.work:p.host?If.face:If.ground),e.fill.material.opacity=_?.16:g?.12:.05}e.lines.material.color.set(g&&!_?Lf.selection:_?Lf.sketchActive:Lf.sketch),e.lines.material.depthTest=!_,e.lines.renderOrder=_?4:0,e.styled&&Hd(e.styled,_?Lf.sketchActive:Lf.sketch,g&&!_?Lf.selection:null,this.dark,!_,_?4:0);let v=new Set([...r].filter(e=>p.entities.some(t=>t.id===e))),y=i?.sketchId===p.id?i.entityId:null,b=`${[...v].join(`,`)}|${y}|${p.entities.length}`;if(b!==e.overlayKey){e.overlayKey=b,e.overlay.geometry.dispose();let t=p.entities.filter(e=>v.has(e.id)||e.id===y);e.overlay.geometry=np(t.flatMap(t=>tp(t,e.mark??m))),e.overlay.material.color.set(v.size?Lf.sketchSel:Lf.hover),e.overlayFat&&Wd(e.overlayFat,this.fatMaterials),e.overlayFat=Ud(t,p.lineStyle,t=>tp(t,e.mark??m),v.size?Lf.sketchSel:Lf.hover,this.canvasSize());for(let t of Gd(e.overlayFat))this.fatMaterials.add(t);e.group.add(e.overlayFat)}let x=e.dimCache;if(!x||x.dims!==p.dims||x.entities!==p.entities||x.arrow!==f){let t=[],n=[];for(let e of p.dims){let r=bi(e,p.entities,l,f);r&&(t.push(...r.lines),n.push({id:e.id,at:r.label,text:r.text}))}e.dims.geometry.dispose(),e.dims.geometry=np(t),x=e.dimCache={dims:p.dims,entities:p.entities,arrow:f,labels:n}}let S=Bf(p),C=p.visible&&!u.has(p.id);for(let e of x.labels)this.setLabel(`dim:${p.id}:${e.id}`,new V(e.at[0],e.at[1],0).applyMatrix4(S),e.text,`dim${e.text.includes(`
`)?` arc`:``} ${r.has(e.id)?`sel`:``}`,C);let w=a[p.id]?.data,T=o.has(p.id)&&w,E=T?`${w.length}:${s.filter(e=>e.sketchId===p.id).map(e=>e.index).join(`,`)}:${c?.sketchId===p.id?c.index:-1}:${a[p.id]?`y`:`n`}`:null;if(E!==e.regionKey||T&&e.regions.userData.data!==w){e.regionKey=E,e.regions.userData.data=w;for(let t of e.regions.children)t.geometry.dispose(),t.material.dispose();e.regions.clear(),T&&w.forEach((t,n)=>{let r=s.some(e=>e.sketchId===p.id&&e.index===n),i=c?.sketchId===p.id&&c.index===n,a=new Float32Array(t.tris.length/2*3);for(let e=0;e<t.tris.length/2;e++)a[e*3]=t.tris[e*2],a[e*3+1]=t.tris[e*2+1];let o=new U;o.setAttribute(`position`,new Rn(a,3));let l=new H(o,new Dt({color:r?Lf.regionPicked:i?Lf.hover:Lf.region,transparent:!0,opacity:r?.55:i?.45:.16,side:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));l.renderOrder=3,e.regions.add(l)})}e.want=p.visible&&!u.has(p.id),e.pinned=_||g||v.size>0||y!=null,e.pinned&&(e.lodHidden=e.dimsHidden=!1),e.group.visible=e.want&&!e.lodHidden,e.dims.visible=!e.dimsHidden,e.group.matrix.copy(S),e.group.matrixAutoUpdate=!1,e.group.matrixWorldNeedsUpdate=!0}for(let[e,t]of this.sketchViews)d.has(e)||(this.sketchRoot.remove(t.group),t.styled&&Wd(t.styled,this.fatMaterials),t.overlayFat&&Wd(t.overlayFat,this.fatMaterials),Vf(t.group),this.sketchViews.delete(e));for(let t of[...this.labelData.keys()]){if(!t.startsWith(`dim:`))continue;let[,n,r]=t.split(`:`),i=e.sketches.find(e=>e.id===n);(!i||!i.dims.some(e=>e.id===r))&&this.setLabel(t,null)}}prevLines=null;prevGuides=null;prevMesh=null;setPreview(e,t,n,r,i,a){let o=e?Bf(e):null;if(o&&t.length?(this.prevLines||(this.prevLines=new Nn(new U,new Kn({color:Lf.preview,depthTest:!1})),this.prevLines.renderOrder=8,this.prevLines.matrixAutoUpdate=!1,this.previewRoot.add(this.prevLines)),Uf(this.prevLines,Hf(t)),this.prevLines.matrix.copy(o),this.prevLines.matrixWorldNeedsUpdate=!0,this.prevLines.visible=!0):this.prevLines&&(this.prevLines.visible=!1),o&&n.length){this.prevGuides||(this.prevGuides=new Nn(new U,new cn({color:`#8a6d3b`,depthTest:!1})),this.prevGuides.renderOrder=8,this.prevGuides.matrixAutoUpdate=!1,this.previewRoot.add(this.prevGuides));let e=this.prevGuides,t=Hf(n),r=e.geometry.getAttribute(`position`);(!r||r.array.length!==t.length||t.some((e,t)=>r.array[t]!==e))&&(e.geometry.dispose(),e.geometry=new U().setAttribute(`position`,new Rn(t,3)),e.computeLineDistances()),e.material.dashSize=this.pixel()*6,e.material.gapSize=this.pixel()*4,e.matrix.copy(o),e.matrixWorldNeedsUpdate=!0,e.visible=!0}else this.prevGuides&&(this.prevGuides.visible=!1);let s=this.prevMesh;if(r){if(!s){let e=new H(this.empty,new Ze({transparent:!0,opacity:.55,depthWrite:!1,roughness:.5})),t=new Nn(this.empty,new Kn),n=new B;n.add(e,t),n.matrixAutoUpdate=!1,this.previewRoot.add(n),s=this.prevMesh={data:null,group:n,mesh:e,edges:t}}if(s.data!==r){let e=this.takeGeometry(r);s.mesh.geometry=e.faces,s.edges.geometry=e.edges,this.dropGeometry(s.data),s.data=r}s.mesh.material.color.set(a),s.edges.material.color.set(a),s.group.matrix.copy(Bf(i??{position:[0,0,0],rotation:[0,0,0]})),s.group.matrixWorldNeedsUpdate=!0,s.group.visible=!0}else s&&(s.group.visible=!1,s.mesh.geometry=this.empty,s.edges.geometry=this.empty,this.dropGeometry(s.data),s.data=null);this.render()}ghostKey=``;ghostData=[];setGhosts(e){let t=e.map(e=>`${Kf(e.data)}:${e.placement.position.join(`,`)}:${e.placement.rotation.join(`,`)}:${e.color}`).join(`|`);if(t===this.ghostKey)return;this.ghostKey=t;for(let e of[...this.ghostRoot.children])this.ghostRoot.remove(e),e.material.dispose();let n=this.ghostData;this.ghostData=[];for(let t of e){let e=this.takeGeometry(t.data);this.ghostData.push(t.data);let n=new H(e.faces,new Ze({color:t.color,transparent:!0,opacity:.4,depthWrite:!1}));n.matrixAutoUpdate=!1,n.matrix.copy(Bf(t.placement)),this.ghostRoot.add(n)}for(let e of n)this.dropGeometry(e);this.render()}markerGroup=new B;setSnapMarkers(e,t){this.markerGroup.parent||this.scene.add(this.markerGroup);for(let e of[...this.markerGroup.children])this.markerGroup.remove(e),e.geometry.dispose(),e.material.dispose();let n=(e,t,n)=>{if(!e.length)return;let r=new U;r.setAttribute(`position`,new Or(e.flat(),3));let i=new ke(r,new Re({size:t,sizeAttenuation:!1,color:n,depthTest:!1}));i.renderOrder=30,this.markerGroup.add(i)},r=e.filter(e=>e.kind===`vertex`).map(e=>e.p),i=e.filter(e=>e.kind!==`vertex`).map(e=>e.p);n([...r,...i],10,`#3a4049`),n(r,7,`#ffffff`),n(i,7,`#f2c230`),t&&(n([t],14,`#3a4049`),n([t],11,ep.vertex)),this.render()}handleGroup=new B;handleTex=new Map;handleTexture(e){let t=this.handleTex.get(e);if(!t){let n=document.createElement(`canvas`);n.width=n.height=32;let r=n.getContext(`2d`);r.fillStyle=`#3a4049`,r.fillRect(4,4,24,24),r.fillStyle=e,r.fillRect(7,7,18,18),t=new tn(n),t.colorSpace=Ae,this.handleTex.set(e,t)}return t}setHandles(e){this.handleGroup.parent||this.scene.add(this.handleGroup);for(let e of[...this.handleGroup.children])this.handleGroup.remove(e),e.material.dispose();let t=this.camera.position;for(let n of e){let e=new V(...n.p),r=this.pixel(e),i=this.camera===this.ortho?new V().subVectors(t,this.controls.target).normalize():new V().subVectors(t,e).normalize(),a=e.clone().addScaledVector(i,r*4),o=r*(n.uniform?13:12),s=this.handleTexture(n.uniform?`#ffffff`:`#f2c230`),c=new ae(new ye({map:s,depthTest:!1,transparent:!0,opacity:.3})),l=new ae(new ye({map:s,depthTest:!0,transparent:!0}));for(let e of[c,l])e.position.copy(a),e.scale.set(o,o,1),e.userData.handleId=n.id;c.renderOrder=30,l.renderOrder=31,this.handleGroup.add(c,l)}this.render()}pickHandle(e,t){if(!this.handleGroup.children.length)return null;let n=this.ray(e,t);return n.camera=this.camera,n.intersectObjects(this.handleGroup.children,!1)[0]?.object.userData.handleId??null}annotationLines=null;setAnnotationLines(e,t=`#2b5d9a`){this.annotationLines||(this.annotationLines=new Nn(new U,new Kn({color:t,depthTest:!1})),this.annotationLines.renderOrder=9,this.scene.add(this.annotationLines)),this.annotationLines.material.color.set(t),Uf(this.annotationLines,e),this.annotationLines.visible=e.length>0}overlayFills=null;setOverlayFills(e,t=`#ff8a1f`){if(!e.length&&!this.overlayFills)return;this.overlayFills||(this.overlayFills=new H(new U,new Dt({color:t,transparent:!0,opacity:.2,side:2,depthWrite:!1})),this.overlayFills.renderOrder=8,this.scene.add(this.overlayFills)),this.overlayFills.material.color.set(t),this.overlayFills.geometry.dispose();let n=new U;n.setAttribute(`position`,new Or(e,3)),this.overlayFills.geometry=n,this.overlayFills.visible=e.length>0}warnFills=null;setWarnFills(e){if(!e.length&&!this.warnFills)return;this.warnFills||(this.warnFills=new B,this.warnFills.renderOrder=10,this.scene.add(this.warnFills));for(let e of[...this.warnFills.children])this.warnFills.remove(e),Vf(e);let t=[],n=[];for(let{pts:r,z:i}of e){if(r.length<3)continue;let e=r.map(e=>new W(e[0],e[1]));for(let[n,a,o]of Dr.triangulateShape(e,[]))for(let e of[n,a,o])t.push(r[e][0],r[e][1],i);r.forEach((e,t)=>{let a=r[(t+1)%r.length];n.push(e[0],e[1],i,a[0],a[1],i)})}if(t.length){let e=new U;e.setAttribute(`position`,new Or(t,3));let n=new H(e,new Dt({color:`#e0483e`,transparent:!0,opacity:.45,side:2,depthTest:!1,depthWrite:!1}));n.renderOrder=10,this.warnFills.add(n)}if(n.length){let e=new U;e.setAttribute(`position`,new Or(n,3));let t=new Nn(e,new Kn({color:`#b3261e`,depthTest:!1}));t.renderOrder=11,this.warnFills.add(t)}this.warnFills.visible=e.length>0}toScreen(e){let t=new V(...e).project(this.camera);return[(t.x+1)/2*this.host.clientWidth,(1-t.y)/2*this.host.clientHeight]}dimGroup=new B;setDimInfo(e,t){this.dimGroup.parent||this.scene.add(this.dimGroup);for(let e of[...this.dimGroup.children])this.dimGroup.remove(e),Vf(e);if(!e||e.isEmpty())return this.clearLabels(`info:`),this.render();let{min:n,max:r}=e,i=Math.max(this.pixel(e.getCenter(new V))*28,1e-6),a=[],o=(e,t)=>a.push(e.x,e.y,e.z,t.x,t.y,t.z),s=(e,t)=>{let n=t.clone().multiplyScalar(i*.25);o(e.clone().sub(n),e.clone().add(n))},c=new V(n.x,n.y-i,n.z),l=new V(r.x,n.y-i,n.z),u=new V(r.x+i,n.y,n.z),d=new V(r.x+i,r.y,n.z),f=new V(r.x+i*.7,n.y-i*.7,n.z),p=new V(r.x+i*.7,n.y-i*.7,r.z);o(c,l),o(u,d),o(f,p),o(new V(n.x,n.y,n.z),c),o(new V(r.x,n.y,n.z),l),o(new V(r.x,n.y,n.z),u),o(new V(r.x,r.y,n.z),d);for(let e of[c,l])s(e,new V(0,1,0));for(let e of[u,d])s(e,new V(1,0,0));for(let e of[f,p])s(e,new V(1,-1,0).normalize());let m=new U;m.setAttribute(`position`,new Or(a,3));let h=new Nn(m,new Kn({color:`#3a4049`,depthTest:!1}));h.renderOrder=7,this.dimGroup.add(h);let g=e.getSize(new V);this.setLabel(`info:x`,c.clone().lerp(l,.5),t(g.x),`vl-info`),this.setLabel(`info:y`,u.clone().lerp(d,.5),t(g.y),`vl-info`),this.setLabel(`info:z`,f.clone().lerp(p,.5),t(g.z),`vl-info`),this.render()}setLabel(e,t,n=``,r=``,i=!0){if(!t||!i){this.labelData.delete(e);let t=this.labelNodes.get(e);t&&(t.remove(),this.labelNodes.delete(e),this.labelShown.delete(e));return}this.labelData.set(e,{world:t,text:n,cls:r})}clearLabels(e,t){for(let n of[...this.labelData.keys()])n.startsWith(e)&&!t?.has(n)&&this.setLabel(n,null)}placeLabels(){let e=this.host.clientWidth,t=this.host.clientHeight,n=new V;for(let[r,i]of this.labelData){let a=this.labelNodes.get(r),o=this.labelShown.get(r);(!a||!o)&&(a=document.createElement(`div`),this.labels.appendChild(a),this.labelNodes.set(r,a),o={cls:``,text:``,on:!0,x:NaN,y:NaN},this.labelShown.set(r,o)),n.copy(i.world).project(this.camera);let s=n.z<1&&n.z>-1&&!(this.dimsOff.size&&r.startsWith(`dim:`)&&this.dimsOff.has(r.split(`:`)[1]));s!==o.on&&(a.style.display=s?``:`none`,o.on=s);let c=`vlabel ${i.cls}`;if(c!==o.cls&&(a.className=o.cls=c),i.text!==o.text&&(a.textContent=o.text=i.text),!s)continue;let l=Math.round((n.x+1)/2*e*10)/10,u=Math.round((1-n.y)/2*t*10)/10;(l!==o.x||u!==o.y)&&(a.style.transform=`translate(${l}px, ${u}px) translate(-50%, -50%)`,o.x=l,o.y=u)}}ndc(e,t){let n=this.renderer.domElement.getBoundingClientRect();return new W((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1)}ray(e,t){let n=new _;return n.setFromCamera(this.ndc(e,t),this.camera),n}pickBody(e,t,n=7){let r=this.ray(e,t).ray;if(this.pickClip&&this.pickClip.distanceToPoint(r.origin)<0){let e=r.distanceToPlane(this.pickClip);if(e===null)return null;r.origin.addScaledVector(r.direction,e)}let i=new Qe,a=new rn,o=new mt,s=(e,t,n)=>(t.boundingSphere||t.computeBoundingSphere(),e.group.updateMatrixWorld(),o.copy(t.boundingSphere).applyMatrix4(e.group.matrixWorld),o.radius+=n,r.intersectsSphere(o)?i.copy(r).applyMatrix4(a.copy(e.group.matrixWorld).invert()):null),c=null;for(let[e,t]of this.bodyViews){if(!t.group.visible||!(t.want?.mesh??t.mesh.visible)||!t.data||!t.full)continue;let n=s(t,t.full.faces,0);if(!n)continue;let i=xd(wd(t.data),t.data.positions,t.data.indices,n,t.mesh.material.side);if(!i)continue;let a=i.point.applyMatrix4(t.group.matrixWorld),o=r.origin.distanceTo(a);(!c||o<c.distance)&&(c={id:e,v:t,tri:i.index,distance:o,point:a})}let l=this.pixel(c?.point),u=l*n,d=null;if(u>0){let e=c?c.distance+l*4:1/0;for(let[t,n]of this.bodyViews){if(!n.group.visible||!n.data||!n.full)continue;let r=s(n,n.full.edges,u);if(!r)continue;let i=Sd(Td(n.data),n.data.edges,r,u,e);i&&(!d||i.distance<d.distance)&&(d={id:t,v:n,seg:i.index,distance:i.distance,point:i.point.applyMatrix4(n.group.matrixWorld)})}}if(d){let e=d.v.data;return{itemId:d.id,point:d.point,edgeId:e.edgeIds[d.seg],faceId:c?.id===d.id?e.faceIds[c.tri]:void 0}}if(!c)return null;let f=c.v.data,p=f.positions,m=e=>{let t=f.indices[c.tri*3+e]*3;return new V(p[t],p[t+1],p[t+2])},h=We.getNormal(m(0),m(1),m(2),new V).transformDirection(c.v.group.matrixWorld);return{itemId:c.id,point:c.point,faceId:f.faceIds[c.tri],normal:h}}planePoint(e,t,n){let r=this.ray(e,t),i=Bf(n),a=new V(0,0,1).transformDirection(i),o=new l().setFromNormalAndCoplanarPoint(a,new V(...n.position)),s=new V;if(!r.ray.intersectPlane(o,s))return null;let c=s.clone().applyMatrix4(i.clone().invert());return{world:s,local:[c.x,c.y]}}cubeRect(){return sd(this.cubeSpot.corner,this.host.clientWidth,this.host.clientHeight,this.cubeSpot.room,this.cubeSpot.size)}setCubeSpot(e,t,n=112){let r=this.cubeSpot;(r.corner!==e||r.room.left!==t.left||r.room.right!==t.right||r.size!==n)&&(this.cubeSpot={corner:e,room:{...t},size:n},this.cubeHover.visible=!1,this.render())}inCube(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=this.cubeRect(),i=e-n.left-r.x,a=t-n.top-r.y;return i>=0&&a>=0&&i<=r.s&&a<=r.s}hideCubeHover(){this.cubeHover.visible&&(this.cubeHover.visible=!1,this.render())}pickCube(e,t,n=!1){let r=this.renderer.domElement.getBoundingClientRect(),i=this.cubeRect(),a=e-r.left-i.x,o=t-r.top-i.y;if(a<0||o<0||a>i.s||o>i.s)return this.cubeHover.visible&&(this.cubeHover.visible=!1,this.render()),null;let s=new _;s.setFromCamera(new W(a/i.s*2-1,-(o/i.s)*2+1),this.cubeCamera);let c=s.intersectObject(this.cubeMesh,!1)[0];if(!c)return this.cubeHover.visible=!1,this.render(),null;let l=c.point,u=e=>e>.5-.17?1:e<-.5+.17?-1:0,d=new V(u(l.x),u(l.y),u(l.z));return this.cubeHover.visible=!0,this.cubeHover.position.set(d.x*.42,d.y*.42,d.z*.42),this.cubeHover.scale.set(d.x?.5:1.9,d.y?.5:1.9,d.z?.5:1.9),this.render(),n?d:d.lengthSq()?d.normalize():null}quality=new u(me(`web`,`auto`));edgeMode=`sharp`;outlineOn=!0;unitBox=new Qt(1,1,1);lastCam={m:new rn,zoom:0,cam:null};lodSphere=new mt;lodPoint=new V;dimsOff=new Set;setDrawQuality(e,t){this.quality.auto.setProfile(me(e,t)),this.render()}cameraMoved(){let e=this.camera;e.updateMatrixWorld();let t=this.lastCam,n=e===this.ortho?this.ortho.zoom:1,r=t.cam!==e||t.zoom!==n||!t.m.equals(e.matrixWorld);return t.cam=e,t.zoom=n,t.m.copy(e.matrixWorld),r}applyBodyLod(e,t,n){e.lod=t,e.edgesOn=n;let r=e.want;if(!r||!e.full||!e.data)return;(e.pinned||r.paint)&&(t=0,n=!0),t===2&&!r.mesh&&(t=1);let i=t===1?this.coarseGeometry(e.data):null;if(e.mesh.geometry=i?i.faces:e.full.faces,e.edges.geometry=i?i.edges:e.full.edges,e.mesh.visible=r.mesh&&t<=1,e.edges.visible=r.edges&&t<=1&&n,e.dots.visible=t===0,t===2){if(e.box||(e.box=new H(this.unitBox,e.mesh.material),e.box.raycast=()=>{},e.group.add(e.box)),e.box.userData.data!==e.data){let[t,n]=e.data.bbox;e.box.position.set((t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2),e.box.scale.set(Math.max(.001,n[0]-t[0]),Math.max(.001,n[1]-t[1]),Math.max(.001,n[2]-t[2])),e.box.userData.data=e.data}e.box.visible=!0}else e.box&&(e.box.visible=!1)}updateLod(e){let t=this.quality.profile,n={full:0,coarse:0,box:0,hidden:0},r=this.lodSphere;for(let i of this.bodyViews.values()){let a=i.full?.faces.boundingSphere;if(!i.group.visible||!a)continue;r.copy(a).applyMatrix4(i.group.matrix);let o=2*r.radius/this.pixel(r.center),s=i.pinned||i.want?.paint,c=s?0:Ve(o,t,e,i.lod??0),l=s||je(o,t,e,i.edgesOn??!0);(c!==i.lod||l!==i.edgesOn)&&this.applyBodyLod(i,c,l),n[c===0?`full`:c===1?`coarse`:c===2?`box`:`hidden`]++}ir.lod=n,this.dimsOff.clear();for(let[n,r]of this.sketchViews){let i=r.boundsCache?.box;if(!r.want||!i)continue;let a=!1,o=!1;if(!r.pinned){let n=this.lodPoint.set((i[0][0]+i[1][0])/2,(i[0][1]+i[1][1])/2,0).applyMatrix4(r.group.matrix),s=Math.max(i[1][0]-i[0][0],i[1][1]-i[0][1])/this.pixel(n);a=t.sketchPx>0&&s<t.sketchPx*e*(r.lodHidden?1.2:1),o=a||t.dimPx>0&&s<t.dimPx*e*(r.dimsHidden?1.2:1)}a!==!!r.lodHidden&&(r.lodHidden=a,r.group.visible=!a),o!==!!r.dimsHidden&&(r.dimsHidden=o,r.dims.visible=!o),o&&this.dimsOff.add(n)}}setOutline(e){if(e!==this.outlineOn){this.outlineOn=e;for(let t of this.outlineSel){let n=t.material;(n.emissiveIntensity===0||n.emissiveIntensity===Ff)&&(n.emissiveIntensity=e?0:Ff)}}}applyQuality(e){let t=this.renderer,n=this.quality.frame(performance.now(),this.cameraMoved());if(n.sample!=null&&ir.frameMs.push(n.sample),this.fxScene)return{moving:!1};let r=e?0:n.level;ir.level=r;let i=pn[r],a=re(window.devicePixelRatio,this.quality.profile,i);return t.getPixelRatio()!==a&&t.setPixelRatio(a),this.setOutline(i.outline),t.shadowMap.autoUpdate=e||!n.moving,this.updateLod(i.lodScale),{moving:!e&&n.moving}}render(){this.frame||this.disposed||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.draw()}))}draw(e=!1){if(this.disposed)return;let t=this.renderer.getSize(new W);if(this.host.clientWidth&&this.host.clientHeight&&(t.x!==this.host.clientWidth||t.y!==this.host.clientHeight)&&this.applySize(),this.tween){let e=Math.min(1,(performance.now()-this.tween.start)/260),t=e<.5?2*e*e:1-(-2*e+2)**2/2;this.camera.position.lerpVectors(this.tween.from,this.tween.to,t),this.controls.target.lerpVectors(this.tween.tFrom,this.tween.tTo,t),this.camera.up.lerpVectors(this.tween.upFrom,this.tween.upTo,t).normalize(),this.camera===this.ortho&&(this.ortho.zoom=this.tween.zFrom+(this.tween.zTo-this.tween.zFrom)*t,this.ortho.updateProjectionMatrix()),this.camera.lookAt(this.controls.target),e>=1?(this.tween=null,this.controls.update()):this.render()}this.gizmo.visible&&this.gizmo.scale.setScalar(this.pixel(this.gizmo.position)*135);let n=1/this.pixel();for(let e of this.fatMaterials)Rd(e)&&(e.dashScale=n);this.gridArgs?.auto&&this.buildGrid(),this.fitDepthRange();let r=this.applyQuality(e),i=this.host.clientWidth,a=this.host.clientHeight;jf(this.camera,a*this.renderer.getPixelRatio()),this.renderer.setViewport(0,0,i,a),this.renderer.setScissorTest(!1),this.renderer.clear(),this.fxScene?this.renderer.render(this.fxScene,this.camera):this.outlineOn&&(this.outlineSel.length||this.outlineHover.length)?this.renderOutlined(i,a):this.renderer.render(this.scene,this.camera);let o=this.cubeRect(),s=this.camera.position.clone().sub(this.controls.target).normalize();this.cubeCamera.position.copy(s.multiplyScalar(3)),this.cubeCamera.up.copy(this.camera.up),this.cubeCamera.lookAt(0,0,0),this.cubeCamera.left=-.95,this.cubeCamera.right=.95,this.cubeCamera.top=.95,this.cubeCamera.bottom=-.95,this.cubeCamera.updateProjectionMatrix(),this.renderer.setScissorTest(!0),this.renderer.setScissor(o.x,a-o.y-o.s,o.s,o.s),this.renderer.setViewport(o.x,a-o.y-o.s,o.s,o.s),this.renderer.clearDepth(),this.renderer.render(this.cubeScene,this.cubeCamera),this.renderer.setScissorTest(!1),this.placeLabels(),this.onRender?.(),r.moving&&this.render()}screenshot(){this.draw(!0);let e=this.renderer.domElement,t=document.createElement(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);if(!n)return e.toDataURL(`image/png`);n.drawImage(e,0,0);let r=e.getBoundingClientRect(),i=e.width/(r.width||1);for(let[e,t]of this.labelNodes){if(!this.labelShown.get(e)?.on||!t.textContent)continue;let a=t.getBoundingClientRect();if(!a.width||!a.height)continue;let o=getComputedStyle(t),s=(a.left-r.left)*i,c=(a.top-r.top)*i,l=a.width*i,u=a.height*i;n.beginPath(),typeof n.roundRect==`function`?n.roundRect(s,c,l,u,(parseFloat(o.borderTopLeftRadius)||0)*i):n.rect(s,c,l,u),n.fillStyle=o.backgroundColor,n.fill();let d=parseFloat(o.borderTopWidth)||0;d>0&&o.borderTopStyle!==`none`&&(n.lineWidth=d*i,n.strokeStyle=o.borderTopColor,n.stroke()),n.fillStyle=o.color,n.font=`${o.fontStyle} ${o.fontWeight} ${(parseFloat(o.fontSize)||12)*i}px ${o.fontFamily}`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(t.textContent,s+l/2,c+u/2)}return this.siteCredit?.textContent&&this.siteCredit.style.display!==`none`&&(n.font=`${11*i}px sans-serif`,n.textAlign=`left`,n.textBaseline=`bottom`,n.fillStyle=`rgba(255, 255, 255, 0.75)`,n.fillRect(4*i,t.height-17*i,n.measureText(this.siteCredit.textContent).width+8*i,16*i),n.fillStyle=`#222`,n.fillText(this.siteCredit.textContent,8*i,t.height-3*i)),t.toDataURL(`image/png`)}dispose(){if(!this.disposed){this.disposed=!0,cancelAnimationFrame(this.frame),this.frame=0,this.onRender=null,this.host.removeEventListener(`wheel`,this.onWheelCapture,{capture:!0}),this.host.removeEventListener(`pointerdown`,this.onPointerCapture,!0),kf(this.controls,this.keyRoot),this.ground?.dispose(this.fatMaterials),this.ground=null,this.land?.dispose(this.fatMaterials),this.land=null;for(let e of[this.scene,this.cubeScene])Vf(e,!0);for(let e of this.geo.values())e.faces.dispose(),e.edges.dispose(),e.coarse?.faces.dispose(),e.coarse?.edges.dispose();this.geo.clear(),this.unitBox.dispose(),this.empty.dispose(),this.scene.environment?.dispose();for(let e of this.handleTex.values())e.dispose();if(this.handleTex.clear(),Qf?.dispose(),Qf=null,this.composer){for(let e of this.composer.passes)e.dispose();this.composer.dispose(),this.composer=null}this.fatMaterials.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove(),this.labelNodes.clear(),this.labelShown.clear(),this.labelData.clear(),this.bodyViews.clear(),this.sketchViews.clear()}}siteRoot=null;sitePic=``;sitePicSize=``;siteAreas=null;siteCredit=null;setSite(e,t=null,n=null,r=1){this.siteRoot||(this.siteRoot=new B,this.siteRoot.add(new B,new B),this.scene.add(this.siteRoot));let[i,a]=this.siteRoot.children,o=e?Math.max(.005,Math.max(e.w,e.h)*1e-5):0,s=e?.image??``,c=e?`${e.w}:${e.h}`:``;if((s!==this.sitePic||c!==this.sitePicSize)&&(this.sitePic=s,this.sitePicSize=c,Vf(i,!0),i.clear(),e&&s)){let t=new Dt({transparent:!0,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});t.visible=!1;let n=new H(new dn(e.w,e.h),t);n.position.z=-o,n.renderOrder=-1,i.add(n),new xt().load(s,e=>{if(this.disposed||n.parent!==i)return e.dispose();e.colorSpace=Ae,e.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t.map=e,t.visible=!0,t.needsUpdate=!0,this.render()},void 0,()=>console.error(`[viewport] land picture could not be read`))}let l=i.children[0]?.material;l&&(l.opacity=r);let u=e?.areas??null,d=`${t}:${o}:${n}`;if(u!==this.siteAreas||a.userData.key!==d){this.siteAreas=u,a.userData.key=d,a.traverse(e=>{let t=e.material;t instanceof ru&&this.fatMaterials.delete(t)}),Vf(a),a.clear();let r=this.host.clientWidth||1,i=this.host.clientHeight||1,s=e?Math.max(e.w,e.h)/70:1;for(let e of u??[]){if(e.points.length<3)continue;let c=e.kind===`site`,l=e.id===t,d=e.id===n,f=Zd(u??[],e),p=o*(c?2:3),m=new H(new Je(new we(e.points.map(e=>new W(e[0],e[1])))),new Dt({color:d?Jd:f,transparent:!0,opacity:d?.95:l?.34:c?.12:.2,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}));m.position.z=p,m.renderOrder=d?1:2;let h=[];e.points.forEach((t,n)=>{let r=e.points[(n+1)%e.points.length];h.push(t[0],t[1],p,r[0],r[1],p)});let g=new ru({color:new G(l&&!c?`#ff7a00`:f).getHex(),linewidth:c?d?5:l?4:3:l?3.5:2,transparent:!0,opacity:.95,depthWrite:!1,dashed:c&&!d,dashSize:s,gapSize:s*.6,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-6});g.resolution.set(r,i),this.fatMaterials.add(g);let _=new Ru(new yu().setPositions(h),g);c&&!d&&_.computeLineDistances(),_.renderOrder=3,a.add(m,_)}}let f=[e?.image?e.credit??``:``,e?.terrain?.credit??``].filter(Boolean).join(` · `);f&&!this.siteCredit&&(this.siteCredit=document.createElement(`div`),this.siteCredit.className=`site-credit`,this.labels.appendChild(this.siteCredit)),this.siteCredit&&(this.siteCredit.textContent!==f&&(this.siteCredit.textContent=f),this.siteCredit.style.display=f?``:`none`)}ground=null;setGround(e,t,n,r=null,i={image:e?.image??``,opacity:1,contourOpacity:1,contourColor:`#6d5233`}){this.ground||(this.ground=new vf(()=>this.render(),Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.scene.add(this.ground.root));let a=!!e?.terrain;if(this.siteRoot)for(let e of this.siteRoot.children)e.visible=!a;this.plateHidden=a;for(let e of this.grid.children)e instanceof H&&e.renderOrder===-2&&(e.visible=!a);this.ground.update(e,{picked:t,contours:n,editing:r,fat:this.fatMaterials,width:this.host.clientWidth||1,height:this.host.clientHeight||1,...i})}plateHidden=!1;fitDepthRange(){if(this.fxScene)return;let e=this.ground?.bounds(),t=e?e.getBoundingSphere(new mt):null;if(this.camera===this.persp){let e=t?this.persp.position.distanceTo(t.center)+t.radius*1.5:0,n=Math.max(this.baseHeight*200,e),r=Math.max(this.baseHeight/2e3,this.persp.position.distanceTo(this.controls.target)/5e3);(n!==this.persp.far||r!==this.persp.near)&&(this.persp.far=n,this.persp.near=r,this.persp.updateProjectionMatrix())}else{let e=t?this.ortho.position.distanceTo(t.center)+t.radius*1.5:0,n=Math.max(this.baseHeight*100,e);n!==this.ortho.far&&(this.ortho.near=-n,this.ortho.far=n,this.ortho.updateProjectionMatrix())}}land=null;landView(){return this.land||(this.land=new Df,this.scene.add(this.land.root)),this.land}setLandGrid(e,t,n,r){this.landView().grid(e,t,n,r,this.fatOptions())}setLandDraft(e,t,n){this.landView().draft(e,t,n,this.pixel(),this.fatOptions())}fatOptions(){return{fat:this.fatMaterials,width:this.host.clientWidth||1,height:this.host.clientHeight||1}}frameAt(e,t){let n=this.camera.position.clone().sub(this.controls.target).normalize();this.look(n,e,t,!0,this.camera.up.clone())}groundSphere(){return this.ground?.bounds()?.getBoundingSphere(new mt)??null}fxScene=null;fxRange=null;setFx(e,t=null){this.fxScene=e,this.fxRange=e?t:null,this.applyZoomLimits(),this.render()}},dp=(e,t,n)=>Math.min(n,Math.max(t,e)),fp=(e,t,n)=>dp(Math.round(e),t,n);function pp(e){let t=sr[e];return[t.steps[0]*t.mmPerUnit,t.gridSize*10]}var mp=[.01,100],hp=[3,64];function gp(e,t,n,r){if(t===`n`)return hp;let[i,a]=pp(r);return e===`torus`&&t===`r`?[i,Math.max(i,n.R-i)]:e===`torus`&&t===`R`?[Math.min(a,n.r+i),a]:[i,a]}function _p(e,t,n,r){let i=Object.keys(r),a={...r};if(!t.length)return{ok:!1,key:null,range:null};for(let e=0;e<Math.min(t.length,i.length);e++){let r=Zt(t[e],n);if(r==null)return{ok:!1,key:null,range:null};a[i[e]]=i[e]===`n`?r:Ut(r,n)}for(let t of i){let[r,i]=gp(e,t,a,n),o=a[t];if(!(o>=r-1e-9&&o<=i+1e-9)||t===`n`&&!Number.isInteger(o))return{ok:!1,key:t,range:[r,i]}}return{ok:!0,params:a}}function vp(e,t){let n=new Set,r=[];for(let i of t){let t=z(e,i);if(!t)continue;let a=M(e,t).id;n.has(a)||(n.add(a),r.push(i))}return r}function yp(e,t){let n=sr[t],r=n.steps[n.defaultStepIndex]*n.mmPerUnit,[i,a]=pp(t);return e.map(e=>dp(Math.ceil(((e>1e-6?e*1.25:n.defaultSize*1.5)-1e-9)/r)*r,i,a))}function bp(e,t,n){let r=t===`YZ`?0:t===`XZ`?1:2,i=[0,0,0];if(i[r]=1,n===`origin`)return{origin:[0,0,0],normal:i};let a=[(e.min[0]+e.max[0])/2,(e.min[1]+e.max[1])/2,(e.min[2]+e.max[2])/2];return n===`side`&&(a[r]=e.max[r]),{origin:a,normal:i}}function xp(e){let t=sr[e].defaultSize;return{diameter:t/4,cbDiameter:t*.45,cbDepth:t*.15,csDiameter:t/2}}function Sp(e,t,n,r){return e===`cbore`&&!(n>t)?`cbore`:e===`csink`&&!(r>t)?`csink`:null}var Cp=[`w`,`d`,`h`];function wp(e,t){let n=jt(e.preset);return n?t.map((t,r)=>{let i=e.params[Cp[r]],a=n.ranges[Cp[r]];return!(i>0)||!a||!Number.isFinite(t)?t:Math.min(a[1]/i,Math.max(a[0]/i,t))}):t}function Tp(e,t,n){let[r,i]=e;return[0,1,2].map(e=>{let a=i[e]-r[e];return(n[e]<0?r[e]:n[e]>0?i[e]-a*t[e]:(r[e]+i[e])/2-a*t[e]/2)-r[e]*t[e]})}function Ep(e,t,n,r,i=!1){let a={...e.params};Cp.forEach((e,t)=>{Number.isFinite(a[e])&&Number.isFinite(n[t])&&(a[e]=a[e]*n[t])});let o=nr(e.preset,a),s=Cp.map(t=>e.params[t]>0&&o[t]>0?o[t]/e.params[t]:1);return s.every(e=>Math.abs(e-1)<1e-9)?null:{params:o,shift:Tp(t,s,i?[r[0],0,r[2]]:r)}}var Q=Qr(),Dp=()=>K().touchTool(),Op=()=>pp(K().mode??`print`),kp=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Ap=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],jp=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Mp=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Np=e=>Math.hypot(e[0],e[1],e[2]);function Pp({onApply:e,canApply:t}){return(0,Q.jsxs)(`div`,{className:`tactions`,children:[(0,Q.jsx)(`button`,{className:`primary`,disabled:!t,onClick:e,children:q(`btn.apply`)}),(0,Q.jsx)(`button`,{onClick:()=>K().setTool(null),children:q(`btn.close`)})]})}function Fp(e){return e?z(K().doc,e)??null:null}function Ip(e,t){let n=new V(...t).applyMatrix4(Gn(e.position,e.rotation).invert());return[n.x,n.y,n.z]}function Lp(e,t){let n=Np(t);if(!n)return[0,0,0];let r=new V(...t).transformDirection(Gn(e.position,e.rotation).invert()).multiplyScalar(n);return[r.x,r.y,r.z]}var Rp=class{bodyId=null;refresh(){let e=Fp(this.bodyId),t=this.step();K().setPreview(e&&t?[...M(K().doc,e).features,t]:null),Dp()}previewPlacement(){let e=Fp(this.bodyId);return e&&this.step()?{position:e.position,rotation:e.rotation}:null}previewColor(){return Fp(this.bodyId)?.color??`#999`}hidden(){return this.bodyId&&this.step()?[this.bodyId]:[]}confirmable(){return!!this.step()&&!Lt.getState().status.__preview__?.error}apply(){let e=this.step();if(!e||!this.bodyId)return;if(Lt.getState().status.__preview__?.error)return K().toast(q(`msg.fixErrorFirst`),`error`);let t=K();t.commit(x(t.doc,this.bodyId,{...e,id:P()}),[this.bodyId]),this.done()}done(){K().setTool(null)}enter(){this.apply()}dispose(){K().setPreview(null)}undoPoint(){return this.cancel?.()??!1}},zp={flat:!0},Bp=`#e5484d`;function Vp(){let e=Lt(e=>e.status[$n]?.error);return e?(0,Q.jsx)(`p`,{className:`hint warn tweak-refused`,children:q(Wn(e))}):null}var Hp=class extends Rp{id=`tweak`;target=null;d=[0,0,0];dragBase=null;constructor(){super();let e=K().sub;if(e){if(this.bodyId=e.bodyId,e.kind===`vertex`){let t=ei(e.bodyId,e.ids[0]);t&&(this.target={kind:`vertex`,bodyId:e.bodyId,at:t})}else this.target=e.kind===`face`?{kind:`face`,bodyId:e.bodyId,faceId:e.ids[0]}:{kind:`edge`,bodyId:e.bodyId,edgeId:e.ids[0]};Si()}}wants(){return[`point`,`edge`,`face`]}prompt(){return this.target?q(`p.tweakDrag`):q(`p.tweakPick`)}click(e){if(!e.hit&&!e.snap3d)return this.target&&Np(this.d)>1e-9&&this.apply(),ui();if(e.hit?.kind!==`body`&&!e.snap3d)return;let t=e.snap3d?.bodyId??e.hit.itemId;if(e.snap3d?.kind===`vertex`)this.target={kind:`vertex`,bodyId:t,at:e.snap3d.point};else if(e.hit?.edgeId!=null)this.target={kind:`edge`,bodyId:t,edgeId:e.hit.edgeId};else if(e.hit?.faceId!=null)this.target={kind:`face`,bodyId:t,faceId:e.hit.faceId};else return;this.bodyId=t,this.d=[0,0,0],this.refresh()}anchor(){let e=this.target;if(!e)return null;if(e.kind===`vertex`)return e.at;if(e.kind===`edge`){let t=hi(e.bodyId,e.edgeId);return t?jp(kp(t.worldA,t.worldB),.5):null}return J(e.bodyId,e.faceId)?.worldCenter??null}curvedFace(){let e=this.target;return e?.kind===`face`&&!J(e.bodyId,e.faceId)?.planar}gizmoAt(){let e=this.anchor();return e?kp(e,this.d):null}onGizmo(e,t){this.dragBase||=this.d;let n=kp(this.dragBase,e),r=this.target;if(r?.kind===`face`&&this.curvedFace()){let e=J(r.bodyId,r.faceId).worldNormal;n=jp(e,Mp(n,e))}this.d=n,t&&(this.dragBase=null),this.refresh()}archEdit(){let e=this.step(),t=Fp(this.bodyId);if(!e||e.kind!==`tweak`||!t)return null;let n=M(K().doc,t);if(n.features.length!==1)return null;let r=n.features[0],i=r.kind===`roof`?Un(r,e.moves):r.kind===`wall`?$t(r,e.moves):null;if(!i)return null;let a=r.kind===`wall`&&`height`in i&&i.height!==r.height&&n.topLevel?{topLevel:void 0,topOffset:void 0}:void 0;return{bodyId:n.id,featureId:r.id,patch:i,features:[{...r,...i}],body:a}}refresh(){let e=this.archEdit();if(!e)return super.refresh();K().setPreview(e.features),Dp()}apply(){let e=this.archEdit();if(!e)return super.apply();let t=K();if(Lt.getState().status.__preview__?.error)return t.toast(q(`msg.fixErrorFirst`),`error`);let n=kt(t.doc,e.bodyId,e.featureId,e.patch);e.body&&(n={...n,bodies:n.bodies.map(t=>t.id===e.bodyId?(({topLevel:e,topOffset:t,...n})=>n)(t):t)}),t.commit(n,[this.bodyId]),this.done()}step(){let e=this.target,t=Fp(this.bodyId);if(!e||!t||Np(this.d)<1e-9)return null;let n=Lp(t,this.d);if(e.kind===`face`){let t=J(e.bodyId,e.faceId);return t?t.planar?{id:`preview`,kind:`tweak`,moves:[{t:`face`,face:t.sig,d:n}],enabled:!0}:{id:`preview`,kind:`offsetFace`,face:t.sig,distance:Mp(this.d,t.worldNormal),enabled:!0}:null}let r=zp.flat?{flat:!0}:{};if(e.kind===`edge`){let i=hi(e.bodyId,e.edgeId);return i?{id:`preview`,kind:`tweak`,moves:[{t:`edge`,a:Ip(t,i.worldA),b:Ip(t,i.worldB),d:n,...r}],enabled:!0}:null}let i=Ip(t,e.at);return{id:`preview`,kind:`tweak`,moves:[{t:`vertex`,from:i,to:kp(i,n),...r}],enabled:!0}}refused(){return!!this.step()&&!!Lt.getState().status.__preview__?.error}previewColor(){return this.refused()?Bp:super.previewColor()}input(e){let t=K().mode??`print`,n=Pt(e.trim()).map(e=>Zt(e,t)??NaN);if(!n.length||n.some(e=>!Number.isFinite(e)))return!1;let r=sr[K().mode??`print`].mmPerUnit;if(n.length===1&&this.target?.kind===`face`){let e=J(this.target.bodyId,this.target.faceId).worldNormal;this.d=jp(e,n[0]*r)}else this.d=[(n[0]??0)*r,(n[1]??0)*r,(n[2]??0)*r];return this.refresh(),!0}cancel(){if(Np(this.d)>1e-9)this.d=[0,0,0];else if(this.target)this.target=null;else return!1;return this.refresh(),!0}highlights(){let e=this.target;return e?e.kind===`face`?{faces:[{bodyId:e.bodyId,ids:[e.faceId]}]}:e.kind===`edge`?{edges:[{bodyId:e.bodyId,ids:[e.edgeId]}]}:{}:{}}overlay3d(){if(this.target?.kind!==`vertex`)return null;let e=kp(this.target.at,this.d);return this.refused()?{segments:[...this.target.at,...e],labels:[{p:e,text:`✕`}]}:{segments:[],labels:[{p:e,text:`●`}]}}panel(){let e=this.target,t=e?.kind===`face`?J(e.bodyId,e.faceId)?.worldNormal:null,[,n]=Op();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.tweakPick`),q(`step.tweakMove`)],current:+!!e}),(0,Q.jsxs)(`p`,{className:`hint`,children:[q(`tweak.target`),`: `,(0,Q.jsx)(`b`,{children:e?q(`tweak.${e.kind}`):`—`})]}),(0,Q.jsx)(`div`,{className:`trow`,children:(0,Q.jsx)(`span`,{className:`tlabel`,children:q(`tweakflat.choice`)})}),(0,Q.jsx)(Fr,{value:zp.flat?`flat`:`bend`,options:[[`flat`,q(`tweakflat.flat`)],[`bend`,q(`tweakflat.bend`)]],onChange:e=>{zp.flat=e===`flat`,this.refresh()}}),(0,Q.jsx)(`p`,{className:`hint`,children:q(e?.kind===`face`?`tweakflat.hint.face`:zp.flat?`tweakflat.hint.flat`:`tweakflat.hint.bend`)}),(()=>{let e=this.archEdit();return e&&(0,Q.jsx)(`p`,{className:`hint`,children:q(e.features[0].kind===`roof`?`archedit.tweakRoof`:`archedit.tweakWall`)})})(),e&&(0,Q.jsxs)(Q.Fragment,{children:[t&&(0,Q.jsx)(yi,{label:q(`tweak.alongNormal`),value:Mp(this.d,t),length:!0,min:-n,max:n,onChange:e=>(this.d=jp(t,dp(e,-n,n)),this.refresh())}),!this.curvedFace()&&(0,Q.jsx)(`div`,{className:`tgrid`,children:[`X`,`Y`,`Z`].map((e,t)=>(0,Q.jsx)(yi,{label:`Δ${e}`,value:this.d[t],length:!0,min:-n,max:n,onChange:e=>(this.d=this.d.map((r,i)=>i===t?dp(e,-n,n):r),this.refresh())},e))})]}),this.step()&&(0,Q.jsx)(Vp,{}),(0,Q.jsx)(Up,{has:!!this.step(),onApply:()=>this.apply()})]})}};function Up({has:e,onApply:t}){let n=Lt(e=>e.status[$n]?.error);return(0,Q.jsx)(Pp,{canApply:e&&!n,onApply:t})}function Wp(e){let t=new V(...e).normalize(),n=new V(0,0,1).cross(t);return n.lengthSq()<1e-9&&(n=new V(1,0,0)),n.normalize(),{u:n,v:t.clone().cross(n).normalize()}}function Gp(e,t){let n=K(),r=z(n.doc,e),i=r&&n.meshes[M(n.doc,r).id];if(!i)return[];let a=[];for(let e=0;e<i.faceIds.length;e++)if(i.faceIds[e]===t)for(let t=0;t<3;t++){let n=i.indices[e*3+t];a.push([i.positions[n*3],i.positions[n*3+1],i.positions[n*3+2]])}return a}function Kp(e,t){let n=J(e,t);if(!n)return null;let{u:r,v:i}=Wp(n.sig.n),a=Gp(e,t).map(e=>new V(...e));if(!a.length)return null;let o=a.map(e=>e.dot(r)),s=a.map(e=>e.dot(i)),c=new V(...n.sig.c),l=Math.min(...o),u=Math.min(...s),d=(e,t)=>{let n=c.clone().addScaledVector(r,l+e-c.dot(r)).addScaledVector(i,u+t-c.dot(i));return[n.x,n.y,n.z]};return{info:n,w:Math.max(...o)-l,h:Math.max(...s)-u,at:d}}var qp=class extends Rp{id=`addPoint`;target=null;how=`click`;du=0;dv=0;constructor(){super();let e=K().sub;if(e?.kind===`face`&&J(e.bodyId,e.ids[0])?.planar)this.bodyId=e.bodyId,this.target={kind:`face`,faceId:e.ids[0],click:J(e.bodyId,e.ids[0]).worldCenter};else if(e?.kind===`edge`){let t=hi(e.bodyId,e.ids[0]);t&&(this.bodyId=e.bodyId,this.target={kind:`edge`,edgeId:e.ids[0],click:jp(kp(t.worldA,t.worldB),.5)})}this.target&&(Si(),xi(this,()=>this.refresh()))}hover=null;wants(){return[`edge`,`face`]}move(e){let t=this.how===`click`&&e.hit?.kind===`body`?e.hit.point:null;t===this.hover||t&&this.hover&&Np(Ap(t,this.hover))<e.pixel*.5||(this.hover=t,Dp())}prompt(){return this.target?q(`p.addPointWhere`):q(`p.addPointPick`)}cancel(){return this.target?(this.target=null,this.refresh(),!0):!1}click(e){if(e.hit?.kind===`body`){if(this.bodyId=e.hit.itemId,e.hit.edgeId!=null)this.target={kind:`edge`,edgeId:e.hit.edgeId,click:e.hit.point};else if(e.hit.faceId!=null)this.target={kind:`face`,faceId:e.hit.faceId,click:e.hit.point};else return;this.curved()&&(this.how===`dist`||this.target.kind===`face`&&this.how===`center`)&&(this.how=`click`),this.how===`dist`?this.refresh():this.apply()}}curved(){let e=this.target;return!e||!this.bodyId?!1:e.kind===`face`?!J(this.bodyId,e.faceId)?.planar:!hi(this.bodyId,e.edgeId)?.straight}point(){let e=this.target,t=Fp(this.bodyId);if(!e||!t)return null;if(e.kind===`face`){let n=Kp(t.id,e.faceId);return n?this.how===`center`?n.at(n.w/2,n.h/2):this.how===`dist`?n.at(this.du,this.dv):Ip(t,e.click):null}let n=hi(t.id,e.edgeId);if(!n)return null;let r=Ip(t,n.worldA),i=Ip(t,n.worldB),a=Np(Ap(i,r))||1,o=this.how===`center`?.5:this.how===`dist`?Math.max(0,Math.min(1,this.du/a)):Math.max(0,Math.min(1,Mp(Ap(Ip(t,e.click),r),Ap(i,r))/(a*a)));return kp(r,jp(Ap(i,r),o))}step(){let e=this.target,t=Fp(this.bodyId);if(e&&t&&this.curved()){let n=e.kind===`edge`?hi(t.id,e.edgeId):null;return{id:`preview`,kind:`splitFaces`,faces:[],tool:{kind:`points`,points:[n&&this.how===`center`?n.sig.m:Ip(t,e.click)]},enabled:!0}}let n=this.point();if(!e||!t||!n)return null;if(e.kind===`face`)return{id:`preview`,kind:`tweak`,keepSplit:!0,moves:[{t:`pointFace`,face:J(t.id,e.faceId).sig,p:n,d:[0,0,0]}],enabled:!0};let r=hi(t.id,e.edgeId);return{id:`preview`,kind:`tweak`,keepSplit:!0,moves:[{t:`pointEdge`,a:Ip(t,r.worldA),b:Ip(t,r.worldB),p:n,d:[0,0,0]}],enabled:!0}}overlay3d(){let e=Fp(this.bodyId),t=this.target;if(e&&t&&this.curved()){let n=t.kind===`edge`?hi(e.id,t.edgeId):null;return{segments:[],labels:[{p:n&&this.how===`center`?er(e,n.sig.m):t.click,text:`●`}]}}let n=this.point();return e&&n?{segments:[],labels:[{p:er(e,n),text:`●`}]}:this.hover?{segments:[],labels:[{p:this.hover,text:`●`}]}:null}highlights(){let e=this.target;return!e||!this.bodyId?{}:e.kind===`face`?{faces:[{bodyId:this.bodyId,ids:[e.faceId]}]}:{edges:[{bodyId:this.bodyId,ids:[e.edgeId]}]}}panel(){let e=this.target,t=e?.kind===`face`&&this.bodyId?Kp(this.bodyId,e.faceId):null,n=e?.kind===`edge`&&this.bodyId?hi(this.bodyId,e.edgeId):null;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.pointTarget`),q(`step.pointWhere`)],current:+!!e}),e&&(0,Q.jsx)(Fr,{value:this.how,options:this.curved()?e.kind===`face`?[[`click`,q(`tweak.atClick`)]]:[[`click`,q(`tweak.atClick`)],[`center`,q(`tweak.mid`)]]:[[`click`,q(`tweak.atClick`)],[`center`,e.kind===`face`?q(`tweak.center`):q(`tweak.mid`)],[`dist`,q(`tweak.byDistance`)]],onChange:e=>(this.how=e,this.refresh())}),this.how===`dist`&&t&&!this.curved()&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`p`,{className:`hint`,children:q(`tweak.faceSize`,{w:gi(t.w),h:gi(t.h)})}),(0,Q.jsxs)(`div`,{className:`tgrid two`,children:[(0,Q.jsx)(yi,{label:q(`tweak.fromLeft`),value:this.du,length:!0,min:0,max:t.w,onChange:e=>(this.du=dp(e,0,t.w),this.refresh())}),(0,Q.jsx)(yi,{label:q(`tweak.fromBottom`),value:this.dv,length:!0,min:0,max:t.h,onChange:e=>(this.dv=dp(e,0,t.h),this.refresh())})]})]}),this.how===`dist`&&n&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`p`,{className:`hint`,children:q(`tweak.edgeLen`,{l:gi(n.length)})}),(0,Q.jsx)(yi,{label:q(`tweak.fromStart`),value:this.du,length:!0,min:0,max:n.length,onChange:e=>(this.du=dp(e,0,n.length),this.refresh())})]}),(0,Q.jsx)(Pp,{canApply:!!this.step(),onApply:()=>this.apply()})]})}},Jp=class{id=`faceView`;wants(){return[`face`]}prompt(){return q(`p.faceView`)}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;let t=K();t.setSub({bodyId:e.hit.itemId,kind:`face`,ids:[e.hit.faceId]}),t.requestView(`face`),t.setTool(null)}},Yp=class extends Rp{id=`addLine`;faceId=null;a=null;b=null;na=null;nb=null;cursor=null;px=0;constructor(){super();let e=K().sub;e?.kind===`face`&&(this.bodyId=e.bodyId,this.faceId=e.ids[0],Si())}wants(){return[`point`,`face`]}prompt(){return this.faceId==null?q(`p.addLineFace`):this.a?this.b?q(`p.confirm`):q(`p.addLineB`):q(`p.addLineA`)}cancel(){if(this.b)this.b=null;else if(this.a)this.a=null;else if(this.faceId!=null)this.faceId=null;else return!1;return this.refresh(),!0}click(e){let t=e.snap3d?.point??(e.hit?.kind===`body`?e.hit.point:null);if(!t)return;if(this.px=e.pixel,this.cursor=null,this.faceId==null)return e.hit?.kind!==`body`||e.hit.faceId==null?void 0:(this.bodyId=e.hit.itemId,this.faceId=e.hit.faceId,Dp());let n=e.hit?.normal??(this.bodyId?J(this.bodyId,this.faceId)?.worldNormal??null:null);!this.a||this.b?(this.a=t,this.na=n,this.b=null):(this.b=t,this.nb=n),this.refresh()}lineFrame(e=this.a,t=this.b){let n=Fp(this.bodyId);if(!n||this.faceId==null||!e)return null;let r=J(n.id,this.faceId);if(!r)return null;let i=_t(r.sig.c,r.sig.n),a;if(!r.planar){let o=kp(this.na??r.worldNormal,this.nb??r.worldNormal),s=Ip(n,e),c=Ap(Ip(n,kp(e,o)),s);if(Np(c)<1e-9)return null;i=_t(s,jp(c,1/Np(c))),a=.6*(t?Np(Ap(t,e)):0)+.5}let o=Ip(i,Ip(n,e)),s=t?Ip(i,Ip(n,t)):null;return{bd:n,f:r,frame:i,depth:a,A:o,B:s}}ends(){let e=this.lineFrame(this.a,this.b??this.cursor);if(!e||!this.a)return null;let t=t=>er(e.bd,er(e.frame,[t[0],t[1],0])),n=Math.max(this.px*2,1e-4);return e.f.planar?{a:t(e.A),b:e.B?t(e.B):null,movedA:Math.abs(e.A[2])>n,movedB:!!e.B&&Math.abs(e.B[2])>n}:{a:this.a,b:this.b??this.cursor,movedA:!1,movedB:!1}}step(){if(!this.a||!this.b)return null;let e=this.lineFrame();if(!e||!e.B)return null;let{bd:t,f:n,frame:r,depth:i,A:a,B:o}=e,s=o[0]-a[0],c=o[1]-a[1],l=Math.hypot(s,c);if(l<1e-6)return null;let u=n.planar?Gp(t.id,this.faceId).reduce((e,t)=>Math.max(e,Np(Ap(t,n.sig.c))),0):0,d=n.planar?2*u+l:l*.02+.01,f=[a[0]-s/l*d,a[1]-c/l*d],p=[o[0]+s/l*d,o[1]+c/l*d];return{id:`preview`,kind:`splitFaces`,faces:[n.sig],tool:{kind:`sketch`,entities:[{id:`l`,t:`line`,a:f,b:p}],frame:r,depth:i},enabled:!0}}overlay3d(){let e=this.ends();if(!e)return null;let t=e.b?[...e.a,...e.b]:[],n=[{p:e.a,text:`●`}];e.b&&this.b&&n.push({p:e.b,text:`●`});let r=(e,r,i)=>{i&&e&&r&&(t.push(...e,...r),n.push({p:e,text:`●`},{p:r,text:q(`plane3.projected`)}))};return r(this.a,e.a,e.movedA),r(this.b??this.cursor,e.b,e.movedB),{segments:t,labels:n}}move(e){this.px=e.pixel,this.cursor=this.faceId!=null&&this.a&&!this.b?e.snap3d?.point??(e.hit?.kind===`body`?e.hit.point:null):null,Dp()}highlights(){return this.bodyId&&this.faceId!=null?{faces:[{bodyId:this.bodyId,ids:[this.faceId]}]}:{}}panel(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.face`),q(`step.lineA`),q(`step.lineB`)],current:this.faceId==null?0:this.a?2:1}),(0,Q.jsx)(Pp,{canApply:!!this.step(),onApply:()=>this.apply()})]})}},Xp=class extends Rp{id=`splitFace`;faces=[];stage=0;toolSketch=null;toolBody=null;source=`pick`;drawFace=null;pts=[];closed=!1;cursor=null;geo=null;stopKeys=Xr(this);constructor(){super();let e=K().sub;e?.kind===`face`&&e.ids.length&&(this.bodyId=e.bodyId,this.faces=[...e.ids],this.stage=1,Si())}wants(){return this.stage===0?[`face`]:this.source===`draw`?[`point`]:[`entity`,`region`,`item`]}prompt(){return this.stage===0?q(`p.splitFaceFaces`):this.source===`pick`?q(`p.splitFaceTool`):this.drawOn()?this.closed?q(`p.confirm`):this.pts.length?q(`p.splitFaceDrawB`):q(`p.splitFaceDrawA`):q(`p.splitFaceNeedFlat`)}setSource(e){this.source=e,this.faces.length&&(this.stage=1),this.cursor=null,this.refresh()}undoPoint(){if(this.stage!==1||this.source!==`draw`)return!1;if(this.closed)this.closed=!1;else if(this.pts.length)this.pts.pop();else return!1;return this.pts.length||(this.drawFace=null),this.refresh(),!0}dispose(){this.stopKeys(),super.dispose()}drawOn(){let e=Fp(this.bodyId);if(!e)return null;let t=this.drawFace??this.faces.find(t=>J(e.id,t)?.planar)??null,n=t==null?null:J(e.id,t);if(t==null||!n?.planar)return null;let r=_t(n.sig.c,n.sig.n);return{b:e,fid:t,f:n,frame:r,world:I(e,r)}}geometry(e){let t=K().meshes[M(K().doc,e.b).id];if(this.geo&&this.geo.mesh===t&&this.geo.fid===e.fid)return this.geo;let n=fi(e.b.id,e.fid).map(([t,n])=>[pi(e.world,t),pi(e.world,n)]),r=Hr(e.b.id,e.world),i=[1/0,1/0],a=[-1/0,-1/0];for(let e of n)for(let t of e)i=[Math.min(i[0],t[0]),Math.min(i[1],t[1])],a=[Math.max(a[0],t[0]),Math.max(a[1],t[1])];let o=n.length?Ur(i,a):0;return this.geo={mesh:t,fid:e.fid,outline:n,edges:r.length?r:n.map(([e,t],n)=>({id:`o${n}`,t:`line`,a:e,b:t})),over:Math.max(o*.002,.01)},this.geo}drawPoint(e){let t=this.drawOn();return t?Vr(e,t.world,this.geometry(t).edges,this.pts[this.pts.length-1]??null)?.pt??null:null}addPoint(e,t){this.closed&&=(this.pts=[],!1);let n=this.pts.length;if(n>=3&&Ur(e,this.pts[0])<=t)this.closed=!0;else if(n&&Ur(e,this.pts[n-1])<=t)return;else this.pts.push(e);this.refresh()}move(e){this.stage===1&&this.source===`draw`&&(this.cursor=this.closed?null:this.drawPoint(e),Dp())}input(e){if(this.stage!==1||this.source!==`draw`)return!1;let t=e.trim().toLowerCase();if(t===`u`||t===`undo`)return this.undoPoint(),!0;let n=this.pts[this.pts.length-1],r=n&&!this.closed?oi(e,n,this.cursor):null;return r?(this.addPoint(r,0),!0):!1}click(e){if(this.stage===0){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;this.bodyId&&this.bodyId!==e.hit.itemId&&(this.faces=[]),this.bodyId=e.hit.itemId;let t=this.faces.indexOf(e.hit.faceId);return t>=0?this.faces.splice(t,1):this.faces.push(e.hit.faceId),this.drawFace=null,this.pts=[],this.closed=!1,Dp()}if(this.source===`draw`){let t=e.hit?.kind===`body`&&e.hit.itemId===this.bodyId?e.hit.faceId:void 0;(!this.pts.length||this.closed)&&t!=null&&this.faces.includes(t)&&J(this.bodyId,t)?.planar&&(t!==this.drawFace&&(this.pts=[]),this.drawFace=t);let n=this.drawPoint(e);n&&this.addPoint(n,Math.max(e.pixel*8,1e-6));return}let t=e.entity?.sketchId??e.region?.sketchId??null;t?(this.toolSketch=t,this.toolBody=null):e.hit?.kind===`body`&&e.hit.itemId!==this.bodyId&&(this.toolBody=e.hit.itemId,this.toolSketch=null),this.refresh()}enter(){if(this.stage===0&&this.faces.length)return this.stage=1,Dp();this.apply()}confirmable(){return this.stage===0?this.faces.length>0:super.confirmable()}step(){let e=Fp(this.bodyId);if(!e||!this.faces.length||this.stage===0)return null;if(this.source===`draw`){let t=this.drawOn();if(!t||this.pts.length<2)return null;let n=this.geometry(t),r=this.closed?this.pts:Ci(this.pts,n.outline,n.over);return{id:`preview`,kind:`splitFaces`,faces:this.faces.map(t=>J(e.id,t)).flatMap(e=>e?.planar&&Wr(t.f.sig,e.sig,n.over)?[e.sig]:[]),tool:{kind:`sketch`,entities:Rr(r,this.closed),frame:t.frame},enabled:!0}}let t=this.faces.map(t=>J(e.id,t)?.sig).filter(Boolean);if(this.toolSketch){let n=ct(K().doc,this.toolSketch);return n?{id:`preview`,kind:`splitFaces`,faces:t,tool:{kind:`sketch`,entities:n.entities,frame:Ue(e,n)},enabled:!0}:null}if(this.toolBody){let n=Fp(this.toolBody);if(!n)return null;let r=Ue(e,n);return{id:`preview`,kind:`splitFaces`,faces:t,tool:{kind:`body`,features:M(K().doc,n).features,...r},enabled:!0}}return null}overlay3d(){let e=this.stage===1&&this.source===`draw`?this.drawOn():null;if(!e)return null;let t=t=>Mr(e.world,t),n=this.cursor&&!this.closed?[...this.pts,this.cursor]:this.closed?[...this.pts,this.pts[0]]:this.pts,r=[];for(let e=0;e+1<n.length;e++)r.push(...t(n[e]),...t(n[e+1]));return{segments:r,labels:this.pts.map(e=>({p:t(e),text:`●`}))}}preview(){let e=this.pts[this.pts.length-1];return this.stage===1&&this.source===`draw`&&e&&this.cursor?{label:gi(Ur(e,this.cursor))}:null}highlights(){let e=this.source===`pick`;return{faces:this.bodyId?[{bodyId:this.bodyId,ids:this.faces}]:[],secondary:e&&this.toolBody?[this.toolBody]:[],entities:e&&this.toolSketch?[{sketchId:this.toolSketch,ids:ct(K().doc,this.toolSketch)?.entities.map(e=>e.id)??[]}]:[]}}panel(){let e=this.source===`draw`;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.splitFaces`),q(e?`step.splitDraw`:`step.splitTool`)],current:this.stage}),(0,Q.jsx)(Jr,{label:q(`step.splitFaces`),color:Lf.primary,active:this.stage===0,onActivate:()=>(this.stage=0,Dp()),names:this.faces.map((e,t)=>({id:String(e),name:`${q(`m.kind.face`)} ${t+1}`})),onRemove:e=>(this.faces=this.faces.filter(t=>String(t)!==e),this.drawFace=null,this.pts=[],this.closed=!1,this.refresh())}),(0,Q.jsx)(Fr,{value:this.source,options:[[`pick`,q(`split.pick`)],[`draw`,q(`split.draw`)]],onChange:e=>this.setSource(e)}),e?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`p`,{className:`hint`,children:q(`hint.splitFaceDraw`)}),(0,Q.jsx)(Ir,{n:this.pts.length,onUndo:()=>this.undoPoint()})]}):(0,Q.jsx)(Jr,{label:q(`step.splitTool`),color:Lf.secondary,active:this.stage===1,onActivate:()=>this.faces.length&&(this.stage=1,Dp()),names:this.toolSketch?[{id:this.toolSketch,name:ni(this.toolSketch)}]:this.toolBody?[{id:this.toolBody,name:ni(this.toolBody)}]:[],onRemove:()=>(this.toolSketch=this.toolBody=null,this.refresh())}),(0,Q.jsx)(Pp,{canApply:!!this.step(),onApply:()=>this.apply()})]})}},Zp=[[1,0,0],[0,1,0],[0,0,1]],Qp=class extends Rp{id=`smartScale`;factors=[1,1,1];anchor=[0,0,0];keepRatio=!1;constructor(){super();let e=K().selection.find(e=>z(K().doc,e));e&&(this.bodyId=e)}wants(){return[`item`]}prompt(){return this.bodyId?q(`p.smartDrag`):q(`p.pickItems`)}click(e){if(!e.hit)return this.factors.some(e=>Math.abs(e-1)>1e-9)&&this.apply(),ui();e.hit.kind===`body`&&(this.bodyId=e.hit.itemId,this.factors=[1,1,1],this.refresh())}cancel(){return!this.factors.every(e=>Math.abs(e-1)<1e-9)&&(this.factors=[1,1,1],this.refresh(),!0)}mesh(){let e=Fp(this.bodyId);return e?K().meshes[M(K().doc,e).id]??null:null}stretchable(){let e=Fp(this.bodyId)?this.mesh():null;return!!e&&!e.isMesh}handles(){let e=Fp(this.bodyId),t=this.mesh();if(!e||!t||K().tool!==this)return[];let[n,r]=t.bbox,i=[(n[0]+r[0])/2,(n[1]+r[1])/2,(n[2]+r[2])/2],a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],o=[];if(this.stretchable())for(let t=0;t<3;t++)for(let n of[-1,1]){let r=[...i];r[t]=i[t]+n*a[t]*this.factors[t]/2+this.shift(t,a),o.push({id:`f${t}${n}`,p:er(e,r),dir:Ce(e,jp(Zp[t],n))})}for(let t of[-1,1])for(let n of[-1,1])for(let r of[-1,1]){let s=[0,1,2].map(e=>i[e]+[t,n,r][e]*a[e]*this.factors[e]/2+this.shift(e,a));o.push({id:`c${t}${n}${r}`,p:er(e,s),dir:Ce(e,[t*a[0],n*a[1],r*a[2]].map(e=>e/Math.hypot(...a))),uniform:!0})}return o}overlay3d(e){let t=Fp(this.bodyId),n=this.mesh();if(!t||!n||K().tool!==this)return null;let[r,i]=n.bbox,a=[i[0]-r[0],i[1]-r[1],i[2]-r[2]],o=[(r[0]+i[0])/2,(r[1]+i[1])/2,(r[2]+i[2])/2],s=(e,n,r)=>er(t,[0,1,2].map(t=>o[t]+[e,n,r][t]*a[t]*this.factors[t]/2+this.shift(t,a))),c=[],l=(e,t)=>c.push(...e,...t);for(let e of[-1,1])for(let t of[-1,1])l(s(-1,e,t),s(1,e,t)),l(s(e,-1,t),s(e,1,t)),l(s(e,t,-1),s(e,t,1));let u=e*22,d=(e,t,n)=>[(e[0]+t[0])/2+n[0]*u,(e[1]+t[1])/2+n[1]*u,(e[2]+t[2])/2+n[2]*u],f=[0,1,2].map(e=>a[e]*this.factors[e]);return{segments:c,labels:[{p:d(s(-1,-1,-1),s(1,-1,-1),Ce(t,[0,-1,0])),text:gi(f[0])},{p:d(s(1,-1,-1),s(1,1,-1),Ce(t,[1,0,0])),text:gi(f[1])},{p:d(s(1,-1,-1),s(1,-1,1),Ce(t,[1,-1,0].map(e=>e*Math.SQRT1_2))),text:gi(f[2])}]}}presetOnly(){let e=Fp(this.bodyId),t=e?M(K().doc,e).features:[];return t.length===1&&t[0].kind===`preset`?t[0]:null}refresh(){let e=Fp(this.bodyId),t=this.presetOnly(),n=this.mesh();if(!e||!t||!n)return super.refresh();this.factors=wp(t,this.factors),e.host&&(this.anchor=[this.anchor[0],0,this.anchor[2]]);let r=Ep(t,n.bbox,this.factors,this.anchor,!!e.host);K().setPreview(r?[{...t,params:r.params}]:null),Dp()}previewPlacement(){let e=Fp(this.bodyId),t=this.presetOnly(),n=this.mesh();if(!e||!t||!n)return super.previewPlacement();let r=Ep(t,n.bbox,this.factors,this.anchor,!!e.host);return r?{position:kp(e.position,Ce(e,r.shift)),rotation:e.rotation}:null}shift(e,t){return-this.anchor[e]*t[e]*(this.factors[e]-1)/2}dragHandle(e,t,n){let r=this.mesh();if(!r)return;let i=[r.bbox[1][0]-r.bbox[0][0],r.bbox[1][1]-r.bbox[0][1],r.bbox[1][2]-r.bbox[0][2]];if(e.startsWith(`f`)){let n=Number(e[1]),r=e.endsWith(`-1`)?-1:1,a=Math.max(.01,1+t/Math.max(1e-9,i[n]));this.anchor=[0,0,0],this.anchor[n]=-r,this.factors=this.keepRatio?[a,a,a]:[0,1,2].map(e=>e===n?a:1)}else{let n=e.slice(1).match(/-?1/g).map(Number),r=Math.hypot(...i),a=Math.max(.01,1+t/Math.max(1e-9,r));this.anchor=n.map(e=>-e),this.factors=[a,a,a]}this.refresh(),n&&Dp()}step(){let e=Fp(this.bodyId),t=this.mesh();if(!e||!t||this.factors.every(e=>Math.abs(e-1)<1e-9))return null;let[n,r]=t.bbox,i=[0,1,2].map(e=>this.anchor[e]<0?n[e]:this.anchor[e]>0?r[e]:(n[e]+r[e])/2);return this.factors.every(e=>Math.abs(e-this.factors[0])<1e-9)&&!this.stretchable()?{id:`preview`,kind:`scale`,factor:this.factors[0],origin:i,enabled:!0}:{id:`preview`,kind:`scale3`,factors:this.factors,origin:i,enabled:!0}}apply(){let e=Fp(this.bodyId),t=this.mesh();if(!e||!t)return;let n=M(K().doc,e),r=n.features[0],i=K();if(n.features.length===1&&r.kind===`primitive`){let[n,a,o]=this.factors,s={...r.params},c=(e,t)=>s[e]=s[e]*t;if(r.shape===`box`||r.shape===`wedge`)c(`x`,n),c(`y`,a),c(`z`,o);else if([`cylinder`,`cone`,`prism`,`pyramid`].includes(r.shape)&&Math.abs(n-a)<1e-9)c(`r`,n),c(`h`,o);else if(n===a&&a===o)for(let e of Object.keys(s))e!==`n`&&c(e,n);else return super.apply();let[l,u]=t.bbox,d=[0,1,2].map(e=>{let t=this.factors[e],n=u[e]-l[e];return(this.anchor[e]<0?l[e]:this.anchor[e]>0?u[e]-n*t:(l[e]+u[e])/2-n*t/2)-l[e]*t}),f=Ce(e,d),p=Mn(i.doc,e.id,r.id,s);return p=Gt(p,e.id,kp(e.position,f),e.rotation),i.commit(p,[e.id]),K().setTool(null)}if(n.features.length===1&&r.kind===`preset`){let n=Ep(r,t.bbox,this.factors,this.anchor,!!e.host);if(!n)return K().setTool(null);let a=kt(i.doc,e.id,r.id,{params:n.params});return a=Gt(a,e.id,kp(e.position,Ce(e,n.shift)),e.rotation),i.commit(a,[e.id]),K().setTool(null)}super.apply()}panel(){let e=this.mesh(),t=e?[0,1,2].map(t=>(e.bbox[1][t]-e.bbox[0][t])*this.factors[t]):null,[n,r]=Op(),[i,a]=mp,o=this.factors.every(e=>Math.abs(e-this.factors[0])<1e-9);return(0,Q.jsxs)(Q.Fragment,{children:[t&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(yi,{label:q(`opt.factor`),value:o?this.factors[0]:1,min:i,max:a,step:.1,onChange:e=>{let t=dp(e,i,a);this.anchor=[0,0,0],this.factors=[t,t,t],this.refresh()}}),(0,Q.jsx)(`div`,{className:`tgrid`,children:[`X`,`Y`,`Z`].map((o,s)=>(0,Q.jsx)(yi,{label:`${q(`opt.sizeTo`)} ${o}`,value:t[s],length:!0,min:n,max:r,onChange:t=>{let o=e.bbox[1][s]-e.bbox[0][s],c=dp(dp(t,n,r)/Math.max(1e-9,o),i,a);this.anchor=[0,0,0],this.factors=this.keepRatio||!this.stretchable()?[c,c,c]:this.factors.map((e,t)=>t===s?c:e),this.refresh()}},o))})]}),(0,Q.jsx)(Ar,{label:q(`opt.keepRatio`),value:this.keepRatio||!this.stretchable(),onChange:e=>(this.keepRatio=e,Dp())}),(0,Q.jsx)(Pp,{canApply:!!this.step(),onApply:()=>this.apply()})]})}},$=()=>K().touchTool(),$p={position:[0,0,0],rotation:[0,0,0]},em=()=>sr[K().mode??`print`].defaultSize,tm=()=>pp(K().mode??`print`);function nm(e,t=!0){let n=K().mode??`print`,r=e=>String(Number((t?an(e,n):e).toFixed(3)));K().toast(q(`msg.valueRange`,{lo:r(e[0]),hi:r(e[1])}),`error`)}function rm({onApply:e,canApply:t}){return(0,Q.jsxs)(`div`,{className:`tactions`,children:[e&&(0,Q.jsx)(`button`,{className:`primary`,disabled:!t,onClick:e,children:q(`btn.apply`)}),(0,Q.jsx)(`button`,{onClick:()=>K().setTool(null),children:q(`btn.close`)})]})}var im={box:[`x`,`y`,`z`],cylinder:[`r`,`h`],sphere:[`r`],cone:[`r`,`h`],torus:[`R`,`r`],wedge:[`x`,`y`,`z`],prism:[`r`,`h`,`n`],pyramid:[`r`,`h`,`n`],hemisphere:[`r`]},am=class{shape;id;params;at=null;features;constructor(e){this.shape=e,this.id=`place:${e}`,this.params=mr[e](em()),this.features=this.makeFeatures(),ti(),xi(this,()=>K().setPreview(this.features))}makeFeatures(){return[{id:`preview`,kind:`primitive`,shape:this.shape,params:{...this.params},enabled:!0}]}wants(){return[`plane`,`face`]}prompt(){return q(`p.place`)}placementFor(e){let t=K().snapStep(),n=K().mode??`print`;if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=J(e.hit.itemId,e.hit.faceId);if(t?.planar)return _t(e.hit.point,t.worldNormal)}return e.plane?{position:[Tn(e.plane[0],n,t),Tn(e.plane[1],n,t),Pn(K())],rotation:[0,0,0]}:null}move(e){this.at=this.placementFor(e),$()}click(e){let t=this.placementFor(e);t&&this.place(t)}place(e){let t=K(),n=t.addPrimitive(this.shape,{...this.params},e.position);e.rotation.some(e=>e!==0)&&t.setPlacements([{id:n,position:e.position,rotation:e.rotation}],{replaceTop:!0}),t.setTool(null)}input(e){let t=Pt(e.trim());if(!t.length||!t.every(e=>/^[-+.\d(=]/.test(e)))return!1;let n=_p(this.shape,t,K().mode??`print`,this.params);return n.ok?(this.params=n.params,this.features=this.makeFeatures(),K().setPreview(this.features),$(),!0):(n.range?nm(n.range,n.key!==`n`):K().toast(q(`msg.badNumber`),`error`),!0)}enter(){this.place(this.at??{position:[0,0,Pn(K())],rotation:[0,0,0]})}previewPlacement(){return this.at}previewColor(){return`#7aa7d9`}dispose(){K().setPreview(null)}panel(){let e={x:q(`param.x`),y:q(`param.y`),z:q(`param.z`),r:q(`param.r`),h:q(`param.h`),R:q(`param.R`),n:q(`param.n`)};return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsx)(`div`,{className:`tgrid`,children:im[this.shape].map(t=>{let[n,r]=gp(this.shape,t,this.params,K().mode??`print`);return(0,Q.jsx)(yi,{label:this.shape===`torus`&&t===`r`?q(`param.r2`):e[t],value:this.params[t],length:t!==`n`,min:n,max:r,step:t===`n`?1:void 0,onChange:e=>{this.params[t]=t===`n`?fp(e,n,r):dp(e,n,r),this.features=this.makeFeatures(),K().setPreview(this.features),$()}},t)})})})}};function om(e){let t=K(),n=z(t.doc,e);return{name:n.name,color:n.color,features:M(t.doc,n).features,position:n.position,rotation:n.rotation}}async function sm(e,t){let n=qr([e]),r=qr([t]);if(!n||!r)return!1;let i=.01;for(let e=0;e<3;e++)if(r.min[e]-n.max[e]>i||n.min[e]-r.max[e]>i)return!1;try{let n=await K().job({type:`distance`,a:{kind:`body`,item:om(e)},b:{kind:`body`,item:om(t)}});return n.type===`distance`&&n.distance<=i}catch{return!0}}var cm=class{op;id;target=null;tools=[];stage=0;keepTools=!1;checking=new Set;auto=!1;constructor(e){this.op=e,this.id=e;let t=K().selection.filter(e=>z(K().doc,e));if(t.length){this.target=t[0],this.stage=1,this.auto=e!==`subtract`&&t.length>=2;for(let e of t.slice(1))this.addTool(e)}K().setSelection([])}addTool(e){this.tools=[...this.tools,e],this.checking.add(e);let t=this.op===`union`?[this.target,...this.tools.filter(t=>t!==e)]:[this.target];(async()=>{let n=!1;for(let r of t)if(await sm(r,e)){n=!0;break}if(this.checking.delete(e),n||(this.tools=this.tools.filter(t=>t!==e),this.auto=!1,K().toast(q(`msg.notTouching`,{name:ni(e)}),`error`)),this.auto&&!this.checking.size&&K().tool===this)return this.auto=!1,this.apply();$()})()}prune(){let e=K().doc;this.target&&!z(e,this.target)&&(this.target=null,this.stage=0),this.tools=this.tools.filter(t=>z(e,t))}swap(){if(!this.target||!this.tools.length)return;let[e,...t]=this.tools,n=this.target;this.target=e,this.tools=[];for(let e of[n,...t])this.addTool(e);$()}wants(){return[`item`]}prompt(){return this.stage===0?q(`p.${this.op}Target`):q(`p.${this.op}Tools`)}click(e){let t=e.hit?.kind===`body`?e.hit.itemId:null;t&&(this.stage===0?(this.target=t,this.tools=this.tools.filter(e=>e!==t),this.stage=1):t===this.target?this.stage=0:this.tools.includes(t)?this.tools=this.tools.filter(e=>e!==t):this.addTool(t),$())}highlights(){return this.prune(),{primary:this.target?[this.target]:[],secondary:this.tools}}canApply(){return this.prune(),!!this.target&&this.tools.length>0&&this.checking.size===0}confirmable(){return this.canApply()}apply(){if(!this.canApply())return;let e=K();e.commit(fn(e.doc,this.target,this.tools,this.op,this.keepTools),[this.target]),e.setTool(null)}enter(){this.stage===0&&this.target?this.stage=1:this.apply(),$()}undoPoint(){return this.cancel()}cancel(){if(this.auto=!1,this.tools.length)this.tools=this.tools.slice(0,-1);else if(this.target)this.target=null,this.stage=0;else return!1;return $(),!0}panel(){this.prune();let e=this.op===`subtract`?q(`role.keep`):q(`role.target`),t=this.op===`subtract`?q(`role.cutters`):q(`role.others`);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[e,t],current:this.stage}),(0,Q.jsx)(Jr,{label:e,color:Lf.primary,active:this.stage===0,onActivate:()=>(this.stage=0,$()),names:this.target?[{id:this.target,name:ni(this.target)}]:[],onRemove:()=>(this.target=null,this.stage=0,$())}),(0,Q.jsx)(Jr,{label:t,color:Lf.secondary,active:this.stage===1,onActivate:()=>this.target&&(this.stage=1,$()),names:this.tools.map(e=>({id:e,name:ni(e)})),onRemove:e=>(this.tools=this.tools.filter(t=>t!==e),$())}),this.op===`subtract`&&(0,Q.jsx)(`button`,{className:`small`,disabled:!this.target||!this.tools.length||this.checking.size>0,onClick:()=>this.swap(),children:q(`opt.swapRoles`)}),(0,Q.jsx)(Kr,{open:this.keepTools,children:(0,Q.jsx)(Ar,{label:q(`opt.keepTools`),value:this.keepTools,onChange:e=>(this.keepTools=e,$())})}),(0,Q.jsx)(rm,{canApply:this.canApply(),onApply:()=>this.apply()})]})}};function lm(){let e=K(),t=e.doc,n=[];for(let r of e.selection){let i=z(t,r);if(!i)continue;let a=M(t,i),o=e.meshes[a.id]?.solids??1;if(o<2)continue;let s=a.features;for(let e=1;e<o;e++){let r=D(t,s[0],i,`${i.name} (${e+1})`);t=Er(r.doc,r.id,()=>[...s,{id:P(),kind:`pickSolid`,index:e,enabled:!0}]),n.push(r.id)}t=sn(t,i.id),t=x(t,i.id,{id:P(),kind:`pickSolid`,index:0,enabled:!0})}if(!n.length)return e.toast(q(`msg.nothingToSeparate`));e.commit(t,[...e.selection,...n])}function um(e){let t=ct(K().doc,e);return t?{position:t.position,rotation:t.rotation}:null}function dm(e){let t=ct(K().doc,e.sketchId),n=K().regions[e.sketchId]?.data[e.index];return!t||!n?null:er(t,[n.center[0],n.center[1],0])}function fm(e,t,n,r,i){let a=K();if(n===`new`||!r||!z(a.doc,r)){a.addBodyFrom(e,t,i);return}let o=z(a.doc,r),s=On(o,{...t,name:i,color:`#999999`},[e]);a.commit(x(a.doc,r,{id:P(),kind:`boolean`,op:n,tools:[s],enabled:!0}),[r])}var pm={new:`#7aa7d9`,union:`#46a35a`,subtract:`#e0483e`,intersect:`#c9a227`};function mm({tool:e}){let t=Lt(e=>e.doc.bodies);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fr,{value:e.op,options:[[`new`,q(`op.new`)],[`union`,q(`op.union`)],[`subtract`,q(`op.subtract`)],[`intersect`,q(`op.intersect`)]],onChange:t=>{e.op=t,e.refresh()}}),e.op!==`new`&&(0,Q.jsxs)(`label`,{className:`tselect`,children:[(0,Q.jsx)(`span`,{children:q(`role.target`)}),(0,Q.jsxs)(`select`,{value:e.target??``,onChange:t=>{e.target=t.target.value||null,e.refresh()},children:[(0,Q.jsx)(`option`,{value:``,children:`—`}),t.map(e=>(0,Q.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]})]})}var hm=class{regions=[];op=`new`;target=null;stage=0;features=null;stopWaiting=null;wants(){return[`region`]}pickRegion(e,t=!0){return e.region?this.addRegion(e.region,e.shift,t):(e.entity&&K().toast(q(`msg.noClosedRegion`)),!1)}addRegion(e,t,n=!0){n&&this.regions.length&&this.regions[0].sketchId!==e.sketchId&&!t&&(this.regions=[]);let r=this.regions.findIndex(t=>t.sketchId===e.sketchId&&t.index===e.index);if(r>=0)this.regions.splice(r,1);else if(n&&this.regions.length&&this.regions[0].sketchId!==e.sketchId)return!1;else this.regions.push({...e});if(this.regions.length===1){let t=ct(K().doc,e.sketchId)?.host??null;t&&z(K().doc,t)&&(this.target=t,this.op=`union`)}return!0}pickOnlyRegion(e){let t=K(),n=t.activeSketch??(t.selection.length===1&&ie(t.doc,t.selection[0])?t.selection[0]:null);if(!n)return;t.ensureRegions(n);let r=()=>{let t=K(),r=ct(t.doc,n);if(t.tool!==this||this.regions.length||!r)return!0;let i=t.regions[n];if(!i||i.entities!==wt(r)||!i.data.length)return!1;if(i.data.length>1)return!0;let a=i.data[0].tris;return this.addRegion({sketchId:n,index:0,local:[(a[0]+a[2]+a[4])/3,(a[1]+a[3]+a[5])/3]},!1),e(),!0};xi(this,()=>{if(r())return;let e=Lt.subscribe((t,n)=>{(t.regions!==n.regions||t.tool!==n.tool)&&r()&&(e(),this.stopWaiting=null)});this.stopWaiting=e})}prune(){let e=K().doc;this.regions=this.regions.filter(t=>ct(e,t.sketchId)),this.target&&!z(e,this.target)&&(this.target=null)}profile(){if(!this.regions.length)return null;let e=ct(K().doc,this.regions[0].sketchId);return e?{entities:wt(e),picks:this.regions.map(e=>e.local),frame:$p}:null}refresh(){this.prune();let e=this.build();this.features=e?[e]:null,K().setPreview(this.features),$()}undoPoint(){return this.cancel()}cancel(){return this.regions.length?(this.regions.pop(),this.regions.length||(this.stage=0),this.refresh(),!0):!1}highlights(){return{regions:this.regions.map(e=>({sketchId:e.sketchId,index:e.index})),primary:this.op!==`new`&&this.target?[this.target]:[]}}previewPlacement(){return this.features?this.placement():null}confirmable(){return!!this.features&&!Lt.getState().status.__preview__?.error}previewColor(){return pm[this.op]}apply(){let e=this.build(),t=this.placement();if(e&&t){if(Lt.getState().status.__preview__?.error){K().toast(q(`msg.fixErrorFirst`),`error`);return}fm({...e,id:P()},t,this.op,this.target,this.name()),K().setTool(null),ti()}}dispose(){this.stopWaiting?.(),K().setPreview(null)}},gm=class extends hm{id=`extrude`;distance=em()/2;symmetric=!1;constructor(){super(),this.pickOnlyRegion(()=>(this.stage=1,this.refresh()))}wants(){return[`region`,`face`]}prompt(){return this.regions.length?q(`p.distance`):q(`p.extrudePick`)}click(e){if(!e.region&&e.hit?.kind===`body`&&e.hit.faceId!=null){if(this.regions.length)return this.target=e.hit.itemId,this.op===`new`&&(this.op=this.distance<0?`subtract`:`union`),this.refresh();let t=new jm;K().setTool(t),t.click(e);return}this.pickRegion(e)&&(this.stage=+!!this.regions.length,this.refresh())}build(){let e=this.profile();return e?{id:`preview`,kind:`extrude`,profile:e,distance:this.distance,symmetric:this.symmetric,enabled:!0}:null}placement(){return this.regions.length?um(this.regions[0].sketchId):null}name(){return Nl(K().doc.bodies.map(e=>e.name),q(`item.extrude`))}axis(){if(!this.regions.length)return null;let e=this.placement(),t=dm(this.regions[0]);return!e||!t?null:{origin:t,dir:Ce(e,[0,0,1]),value:this.distance}}setAxis(e){let[,t]=tm(),n=dp(e,-t,t);Math.abs(n)<1e-6||(this.distance=n,this.target&&this.op!==`new`&&this.op!==`intersect`&&(this.op=n<0?`subtract`:`union`),this.refresh())}input(e){let t=di(e);return t==null||t===0?!1:(this.setAxis(t),!0)}enter(){this.apply()}panel(){let[,e]=tm();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.profile`),q(`step.distance`)],current:this.stage}),(0,Q.jsx)(yi,{label:q(`opt.distance`),value:this.distance,length:!0,min:-e,max:e,onChange:e=>Math.abs(e)<1e-6?K().toast(q(`msg.notZero`),`error`):this.setAxis(e)}),(0,Q.jsxs)(`div`,{className:`trow`,children:[(0,Q.jsx)(Ar,{label:q(`opt.symmetric`),value:this.symmetric,onChange:e=>(this.symmetric=e,this.refresh())}),(0,Q.jsx)(`button`,{className:`small`,onClick:()=>this.setAxis(-this.distance),children:q(`opt.flip`)})]}),(0,Q.jsx)(mm,{tool:this}),(0,Q.jsx)(rm,{canApply:!!this.features,onApply:()=>this.apply()})]})}},_m=class extends hm{id=`revolve`;axisLine=null;axisEntity=null;angle=360;constructor(){super(),this.pickOnlyRegion(()=>(this.stage=1,this.refresh()))}wants(){return this.stage===0?[`region`]:[`entity`,`region`]}prompt(){return this.stage===0?q(`p.revolvePick`):this.axisLine?q(`p.angle`):q(`p.revolveAxis`)}click(e){if(this.stage===0||e.region&&!e.entity)this.pickRegion(e)&&(this.stage=1);else if(e.entity&&this.regions.length&&e.entity.sketchId===this.regions[0].sketchId){let t=ct(K().doc,e.entity.sketchId)?.entities.find(t=>t.id===e.entity.entityId);if(t?.t===`line`)this.axisLine=[t.a,t.b];else if(t?.t===`xline`)this.axisLine=[t.p,[t.p[0]+t.d[0],t.p[1]+t.d[1]]];else return K().toast(q(`msg.axisLineOnly`),`error`);this.axisEntity=t.id}this.refresh()}cancel(){return this.axisLine?(this.axisLine=null,this.axisEntity=null,this.refresh(),!0):super.cancel()}build(){let e=this.profile();return!e||!this.axisLine?null:{id:`preview`,kind:`revolve`,profile:e,axis:this.axisLine,angle:this.angle,enabled:!0}}placement(){return this.regions.length?um(this.regions[0].sketchId):null}name(){return Nl(K().doc.bodies.map(e=>e.name),q(`item.revolve`))}input(e){let t=ai(e)??NaN;return!Number.isFinite(t)||t===0?!1:(this.angle=Math.max(-360,Math.min(360,t)),this.refresh(),!0)}enter(){this.apply()}highlights(){let e=super.highlights();return this.axisEntity&&this.regions.length?{...e,entities:[{sketchId:this.regions[0].sketchId,ids:[this.axisEntity]}]}:e}panel(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.profile`),q(`step.axis`),q(`step.angle`)],current:this.regions.length?this.axisLine?2:1:0}),(0,Q.jsxs)(`div`,{className:`trow`,children:[(0,Q.jsx)(`button`,{className:`small`,onClick:()=>(this.axisLine=[[0,0],[1,0]],this.axisEntity=null,this.refresh()),children:q(`opt.axisX`)}),(0,Q.jsx)(`button`,{className:`small`,onClick:()=>(this.axisLine=[[0,0],[0,1]],this.axisEntity=null,this.refresh()),children:q(`opt.axisY`)})]}),(0,Q.jsx)(yi,{label:q(`opt.angle`),value:this.angle,suffix:(0,Q.jsx)(`em`,{children:`°`}),min:-360,max:360,step:15,onChange:e=>Math.abs(e)<1e-6?K().toast(q(`msg.notZero`),`error`):(this.angle=dp(e,-360,360),this.refresh())}),(0,Q.jsx)(mm,{tool:this}),(0,Q.jsx)(rm,{canApply:!!this.features,onApply:()=>this.apply()})]})}};function vm(e,t){let n=e.find(e=>e.id===t);if(!n)return[];if(Gr(n))return[n];let r=[n],i=new Set([n.id]),a=t=>{for(;;){let n=Br(t?r[r.length-1]:r[0]);if(!n.length)return;let a=e.find(e=>!i.has(e.id)&&Br(e).some(e=>n.some(t=>kr(e,t,1e-6))));if(!a)return;i.add(a.id),t?r.push(a):r.unshift(a)}};return a(!0),a(!1),r}async function ym(e,t){let n=z(K().doc,e),r=t.map(t=>hi(e,t)?.sig).filter(Boolean);if(!n||!r.length)return null;try{let e=await K().job({type:`edgesBrep`,key:M(K().doc,n).id,edges:r});return e.type===`edgesBrep`?e.data:null}catch{return null}}function bm(e,t,n){let r=e?.bodyId===t?[...e.ids]:[],i=r.indexOf(n);return i>=0?r.splice(i,1):r.push(n),r}function xm(e,t){let n=t??e.entities.find(e=>e.t!==`point`&&e.t!==`xline`)?.id,r=n?vm(e.entities,n):[];return r.length?{sketchId:e.id,ids:r.map(e=>e.id),chain:r}:null}var Sm=class extends hm{id=`sweep`;pathIds=null;pathEdges=null;pathBrep=null;frenet=!1;anchorMode=`center`;anchorPoint=null;pickingAnchor=!1;constructor(){super();let e=K().sub;if(e?.kind===`edge`&&e.ids.length){let{bodyId:t,ids:n}=e;Si(),xi(this,()=>void this.pickEdges(t,[...n]))}this.pickOnlyRegion(()=>(this.stage=1,this.refresh()))}wants(){return this.pickingAnchor?[`region`,`entity`]:this.stage===0?[`region`]:[`entity`,`edge`,`region`]}prompt(){return this.pickingAnchor?q(`p.sweepAnchor`):this.stage===0?q(`p.sweepProfile`):q(`p.sweepPath`)}profileCenter(){if(!this.regions.length)return null;let e=K().regions[this.regions[0].sketchId]?.data??[],t=0,n=0,r=0;for(let i of this.regions){let a=e[i.index];a&&(t+=a.area,n+=a.center[0]*a.area,r+=a.center[1]*a.area)}return t>0?[n/t,r/t]:this.regions[0].local}anchor(){if(this.anchorMode===`center`)return this.profileCenter()??void 0;if(this.anchorMode===`point`)return this.anchorPoint??void 0}path(){let e=this.placement();if(!e)return null;if(this.pathIds){let t=ct(K().doc,this.pathIds.sketchId);return t?{kind:`sketch`,entities:this.pathIds.chain,frame:Ue(e,t)}:null}let t=this.pathEdges?z(K().doc,this.pathEdges.bodyId):null;return t&&this.pathBrep?{kind:`brep`,data:this.pathBrep,frame:Ue(e,t)}:null}async pickEdges(e,t){this.pathEdges=t.length?{bodyId:e,ids:t}:null,this.pathIds=null,this.pathBrep=null,this.refresh();let n=await ym(e,t);K().tool===this&&this.pathEdges?.ids===t&&(this.pathBrep=n,this.refresh())}click(e){if(this.pickingAnchor){let t=this.regions[0]?.sketchId,n=e.entity?.sketchId===t?e.entity.local:e.region?.sketchId===t?e.region.local:null;n&&(this.anchorPoint=n,this.pickingAnchor=!1,this.refresh());return}if(this.stage===0){this.pickRegion(e)&&(this.stage=1),this.refresh();return}let t=e.entity?ct(K().doc,e.entity.sketchId):void 0;e.entity&&t?(this.pathIds=xm(t,e.entity.entityId),this.pathEdges=null,this.pathBrep=null,this.refresh()):e.hit?.kind===`body`&&e.hit.edgeId!=null?this.pickEdges(e.hit.itemId,bm(this.pathEdges,e.hit.itemId,e.hit.edgeId)):e.region&&this.pickRegion(e)&&this.refresh()}build(){let e=this.profile(),t=this.path();return!e||!t?null:{id:`preview`,kind:`sweep`,profile:e,path:t,frenet:this.frenet,anchor:this.anchor(),enabled:!0}}cancel(){return this.pickingAnchor?(this.pickingAnchor=!1,$(),!0):this.stage===1&&(this.pathIds||this.pathEdges)?(this.pathIds=null,this.pathEdges=null,this.pathBrep=null,this.refresh(),!0):super.cancel()}placement(){return this.regions.length?um(this.regions[0].sketchId):null}name(){return Nl(K().doc.bodies.map(e=>e.name),q(`item.sweep`))}enter(){this.stage===0&&this.regions.length?this.stage=1:this.apply(),$()}highlights(){return{...super.highlights(),entities:this.pathIds?[{sketchId:this.pathIds.sketchId,ids:this.pathIds.ids}]:[],edges:this.pathEdges?[this.pathEdges]:[]}}panel(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.profile`),q(`step.path`)],current:this.stage}),(0,Q.jsx)(`p`,{className:`hint`,children:q(`opt.sweepAnchor`)}),(0,Q.jsx)(Fr,{value:this.anchorMode,options:[[`center`,q(`opt.anchorCenter`)],[`point`,q(`opt.anchorPoint`)],[`keep`,q(`opt.anchorKeep`)]],onChange:e=>{this.anchorMode=e,this.pickingAnchor=e===`point`,this.refresh()}}),this.anchorMode===`point`&&(this.pickingAnchor?null:(0,Q.jsx)(`button`,{onClick:()=>(this.pickingAnchor=!0,$()),children:q(`opt.anchorPicked`)})),(0,Q.jsx)(Ar,{label:q(`opt.frenet`),value:this.frenet,onChange:e=>(this.frenet=e,this.refresh())}),(0,Q.jsx)(mm,{tool:this}),(0,Q.jsx)(rm,{canApply:!!this.features,onApply:()=>this.apply()})]})}},Cm=class extends hm{id=`pipe`;pathIds=null;pathEdges=null;pathBrep=null;r=em()/10;inner=0;constructor(){super();let e=K(),t=e.sub,n=e.selection.length===1?ct(e.doc,e.selection[0]):void 0;if(t?.kind===`edge`&&t.ids.length){let{bodyId:e,ids:n}=t;Si(),xi(this,()=>void this.pickEdges(e,[...n]))}else n&&(this.pathIds=xm(n),this.pathIds&&xi(this,()=>this.refresh()))}wants(){return[`entity`,`edge`]}prompt(){return q(`p.pipePath`)}async pickEdges(e,t){this.pathEdges=t.length?{bodyId:e,ids:t}:null,this.pathIds=null,this.pathBrep=null,this.refresh();let n=await ym(e,t);K().tool===this&&this.pathEdges?.ids===t&&(this.pathBrep=n,this.refresh())}click(e){let t=e.entity?ct(K().doc,e.entity.sketchId):void 0;if(e.entity&&t)return this.pathIds=xm(t,e.entity.entityId),this.pathEdges=null,this.pathBrep=null,this.refresh();e.hit?.kind===`body`&&e.hit.edgeId!=null&&this.pickEdges(e.hit.itemId,bm(this.pathEdges,e.hit.itemId,e.hit.edgeId))}path(){if(this.pathIds){let e=ct(K().doc,this.pathIds.sketchId);return e?{ref:{kind:`sketch`,entities:this.pathIds.chain,frame:$p},source:{position:e.position,rotation:e.rotation}}:null}let e=this.pathEdges?z(K().doc,this.pathEdges.bodyId):null;return e&&this.pathBrep?{ref:{kind:`brep`,data:this.pathBrep,frame:$p},source:{position:e.position,rotation:e.rotation}}:null}build(){let e=this.path();return!e||!(this.r>0)?null:{id:`preview`,kind:`pipe`,path:e.ref,r:this.r,inner:this.inner>0?this.inner:void 0,enabled:!0}}placement(){return this.path()?.source??null}name(){return Nl(K().doc.bodies.map(e=>e.name),q(`item.pipe`))}enter(){this.apply()}cancel(){return!this.pathIds&&!this.pathEdges?!1:(this.pathIds=null,this.pathEdges=null,this.pathBrep=null,this.refresh(),!0)}highlights(){return{regions:[],entities:this.pathIds?[{sketchId:this.pathIds.sketchId,ids:this.pathIds.ids}]:[],edges:this.pathEdges?[this.pathEdges]:[],primary:this.op!==`new`&&this.target?[this.target]:[]}}panel(){let[e,t]=tm();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(yi,{label:q(`opt.pipeDiameter`),value:this.r*2,length:!0,min:e,max:t,onChange:n=>(this.r=dp(n,e,t)/2,this.inner=Math.max(0,Math.min(this.inner,this.r-e/2)),this.refresh())}),(0,Q.jsx)(yi,{label:q(`opt.pipeInner`),value:this.inner*2,length:!0,min:0,max:Math.max(0,this.r*2-e),onChange:t=>(this.inner=dp(t,0,Math.max(0,this.r*2-e))/2,this.refresh())}),(0,Q.jsx)(mm,{tool:this}),(0,Q.jsx)(rm,{canApply:!!this.features,onApply:()=>this.apply()})]})}},wm=class extends hm{id=`loft`;ruled=!1;prompt(){return this.regions.length<2?q(`p.loftPick`,{n:this.regions.length+1}):q(`p.loftMore`)}click(e){if(!e.region)return;let t=e.region,n=this.regions.findIndex(e=>e.sketchId===t.sketchId);n>=0?this.regions.splice(n,1):this.regions.push({...t}),this.refresh()}build(){if(this.prune(),this.regions.length<2)return null;let e=um(this.regions[0].sketchId);return e?{id:`preview`,kind:`loft`,sections:this.regions.map(t=>{let n=ct(K().doc,t.sketchId);return{entities:wt(n),picks:[t.local],frame:Ue(e,n)}}),ruled:this.ruled,enabled:!0}:null}placement(){return this.regions.length?um(this.regions[0].sketchId):null}name(){return Nl(K().doc.bodies.map(e=>e.name),q(`item.loft`))}enter(){this.apply()}panel(){return this.prune(),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.sections`),q(`step.apply`)],current:this.regions.length<2?0:1}),(0,Q.jsx)(`ol`,{className:`tlist`,children:this.regions.map((e,t)=>(0,Q.jsx)(`li`,{children:ni(e.sketchId)},t))}),(0,Q.jsx)(Ar,{label:q(`opt.ruled`),value:this.ruled,onChange:e=>(this.ruled=e,this.refresh())}),(0,Q.jsx)(mm,{tool:this}),(0,Q.jsx)(rm,{canApply:!!this.features,onApply:()=>this.apply()})]})}},Tm=class{bodyId=null;body(){return this.bodyId?z(K().doc,this.bodyId)??null:null}refresh(){let e=this.body(),t=this.step();K().setPreview(e&&t?[...M(K().doc,e).features,t]:null),$()}previewPlacement(){let e=this.body();return e&&this.step()?{position:e.position,rotation:e.rotation}:null}previewColor(){return this.body()?.color??`#999`}hidden(){return this.bodyId&&this.step()?[this.bodyId]:[]}confirmable(){return!!this.step()&&!Lt.getState().status.__preview__?.error}apply(){let e=this.step();if(!e||!this.body())return;if(Lt.getState().status.__preview__?.error){K().toast(q(`msg.fixErrorFirst`),`error`);return}let t=K();t.commit(x(t.doc,this.bodyId,{...e,id:P()}),[this.bodyId]),this.done()}done(){K().setTool(null)}undoPoint(){return this.cancel?.()??!1}enter(){this.apply()}dispose(){K().setPreview(null)}},Em=class extends Tm{id=`hole`;faceId=null;at=null;n=null;how=`click`;du=0;dv=0;diameter;depth=0;kind=`simple`;cbDiameter;cbDepth;csDiameter;constructor(){super();let e=xp(K().mode??`print`);this.diameter=e.diameter,this.cbDiameter=e.cbDiameter,this.cbDepth=e.cbDepth,this.csDiameter=e.csDiameter;let t=K().sub,n=t?.kind===`face`?J(t.bodyId,t.ids[0]):null;t&&n?.planar&&(this.bodyId=t.bodyId,this.faceId=t.ids[0],this.at=n.sig.c,this.n=n.sig.n,this.how=`center`,Si(),xi(this,()=>this.refresh()))}wants(){return[`face`,`point`]}prompt(){return this.at?q(`p.holeSet`):q(`p.holePoint`)}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;let t=z(K().doc,e.hit.itemId);if(!t)return;let n=e.snap3d?.bodyId===t.id?e.snap3d.point:e.hit.point,r=e.hit.normal??J(t.id,e.hit.faceId)?.worldNormal;if(!r)return;let i=Gn(t.position,t.rotation).invert(),a=new V(...n).applyMatrix4(i),o=new V(...r).transformDirection(i).normalize();this.bodyId=t.id,this.faceId=e.hit.faceId,this.at=[a.x,a.y,a.z],this.n=[o.x,o.y,o.z],this.flat()||(this.how=`click`),this.refresh()}flat(){return!!this.bodyId&&this.faceId!=null&&!!J(this.bodyId,this.faceId)?.planar}point(){if(this.how===`click`||!this.bodyId||this.faceId==null)return this.at;let e=Kp(this.bodyId,this.faceId);return e?this.how===`center`?e.at(e.w/2,e.h/2):e.at(this.du,this.dv):this.at}step(){let e=this.point();return!e||!this.n||!this.body()||!(this.diameter>0)?null:{id:`preview`,kind:`hole`,p:e,n:this.n,diameter:this.diameter,depth:Math.max(0,this.depth),counterbore:this.kind===`cbore`?{diameter:this.cbDiameter,depth:this.cbDepth}:void 0,countersink:this.kind===`csink`?{diameter:this.csDiameter}:void 0,enabled:!0}}problem(){return Sp(this.kind,this.diameter,this.cbDiameter,this.csDiameter)}confirmable(){return super.confirmable()&&!this.problem()}apply(){let e=this.problem();if(e)return K().toast(q(e===`cbore`?`msg.cboreSmall`:`msg.csinkSmall`),`error`);super.apply()}clearPick(){this.bodyId=null,this.faceId=null,this.at=null,this.n=null,this.refresh()}cancel(){return this.at?(this.clearPick(),!0):!1}highlights(){return{primary:this.bodyId?[this.bodyId]:[]}}panel(){let[e,t]=tm(),n=(e,n)=>r=>(this[e]=dp(r,n,t),this.refresh()),r=this.flat()?Kp(this.bodyId,this.faceId):null,i=this.problem();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.point`),q(`step.size`)],current:+!!this.at}),this.at&&(0,Q.jsx)(Fr,{value:this.how,options:r?[[`click`,q(`tweak.atClick`)],[`center`,q(`tweak.center`)],[`dist`,q(`tweak.byDistance`)]]:[[`click`,q(`tweak.atClick`)]],onChange:e=>(this.how=e,this.refresh())}),this.how===`dist`&&r&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`p`,{className:`hint`,children:q(`tweak.faceSize`,{w:gi(r.w),h:gi(r.h)})}),(0,Q.jsxs)(`div`,{className:`tgrid two`,children:[(0,Q.jsx)(yi,{label:q(`tweak.fromLeft`),value:this.du,length:!0,min:0,max:r.w,onChange:e=>(this.du=dp(e,0,r.w),this.refresh())}),(0,Q.jsx)(yi,{label:q(`tweak.fromBottom`),value:this.dv,length:!0,min:0,max:r.h,onChange:e=>(this.dv=dp(e,0,r.h),this.refresh())})]})]}),(0,Q.jsx)(yi,{label:q(`opt.diameter`),value:this.diameter,length:!0,min:e,max:t,onChange:n(`diameter`,e)}),(0,Q.jsx)(yi,{label:q(`opt.holeDepth`),value:this.depth,length:!0,min:0,max:t,onChange:n(`depth`,0)}),(0,Q.jsx)(`p`,{className:`hint`,children:q(`hint.holeDepth`)}),(0,Q.jsxs)(Kr,{open:this.kind!==`simple`,children:[(0,Q.jsx)(Fr,{value:this.kind,options:[[`simple`,q(`opt.holeSimple`)],[`cbore`,q(`opt.holeCbore`)],[`csink`,q(`opt.holeCsink`)]],onChange:e=>(this.kind=e,this.refresh())}),this.kind===`cbore`&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(yi,{label:q(`opt.cbDiameter`),value:this.cbDiameter,length:!0,min:e,max:t,onChange:n(`cbDiameter`,e)}),(0,Q.jsx)(yi,{label:q(`opt.cbDepth`),value:this.cbDepth,length:!0,min:e,max:t,onChange:n(`cbDepth`,e)})]}),this.kind===`csink`&&(0,Q.jsx)(yi,{label:q(`opt.csDiameter`),value:this.csDiameter,length:!0,min:e,max:t,onChange:n(`csDiameter`,e)})]}),i&&(0,Q.jsx)(`p`,{className:`hint`,children:q(i===`cbore`?`msg.cboreSmall`:`msg.csinkSmall`)}),(0,Q.jsx)(rm,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}};function Dm(e){let t=K(),n=z(t.doc,e),r=n?t.meshes[M(t.doc,n).id]:null;return!!r&&!r.isMesh&&r.solids===0}var Om=class extends Tm{id=`thicken`;thickness=em()/10;side=`out`;constructor(){super();let e=K().selection.find(e=>Dm(e));e&&(this.bodyId=e,queueMicrotask(()=>this.refresh()))}wants(){return[`item`]}prompt(){return this.bodyId?q(`p.distance`):q(`p.thickenPick`)}click(e){if(e.hit?.kind===`body`){if(!Dm(e.hit.itemId))return K().toast(q(`err.not-sheet`),`error`);this.bodyId=e.hit.itemId,this.refresh()}}step(){return this.bodyId&&this.thickness>0?{id:`preview`,kind:`thicken`,thickness:this.thickness,side:this.side,enabled:!0}:null}highlights(){return{primary:this.bodyId?[this.bodyId]:[]}}cancel(){return this.bodyId?(this.bodyId=null,this.refresh(),!0):!1}apply(){let e=this.step();if(!e||!this.body())return;if(Lt.getState().status.__preview__?.error)return K().toast(q(`msg.fixErrorFirst`),`error`);let t=K();t.commit(Am(x(t.doc,this.bodyId,{...e,id:P()}),this.bodyId),[this.bodyId]),t.setTool(null)}panel(){let[e,t]=tm();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fr,{value:this.side,options:[[`out`,q(`opt.thickOut`)],[`in`,q(`opt.thickIn`)],[`both`,q(`opt.thickBoth`)]],onChange:e=>(this.side=e,this.refresh())}),(0,Q.jsx)(yi,{label:q(`opt.thickness`),value:this.thickness,length:!0,min:e,max:t,onChange:n=>(this.thickness=dp(n,e,t),this.refresh())}),(0,Q.jsx)(rm,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}};function km(){let e=K(),t=e.selection.filter(e=>Dm(e));if(!t.length)return e.toast(q(`msg.pickSheets`),`error`);e.commit(Am(De(e.doc,t[0],t.slice(1)),t[0]),[t[0]])}function Am(e,t){let n=` (${q(`item.sheet`)})`;return{...e,bodies:e.bodies.map(e=>e.id===t&&e.name.endsWith(n)?{...e,name:e.name.slice(0,-n.length)}:e)}}var jm=class extends Tm{id=`presspull`;face=null;faceId=null;distance=em()/4;constructor(){super();let e=K().sub,t=e?.kind===`face`?J(e.bodyId,e.ids[0]):null;e&&t?.planar&&(this.bodyId=e.bodyId,this.face=t.sig,this.faceId=e.ids[0],Si(),xi(this,()=>this.refresh()))}wants(){return[`face`]}prompt(){return this.face?q(`p.distance`):q(`p.pickFace`)}at=null;click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;let t=J(e.hit.itemId,e.hit.faceId);t&&(this.bodyId=e.hit.itemId,this.face=t.sig,this.faceId=e.hit.faceId,this.at=t.planar||!e.hit.normal?null:{p:e.hit.point,n:e.hit.normal},this.refresh())}step(){return this.face?{id:`preview`,kind:`presspull`,face:this.face,distance:this.distance,enabled:!0}:null}archEdit(){let e=this.body();if(!e||!this.face||this.face.n[2]<.99)return null;let t=M(K().doc,e),n=t.features[0];if(t.features.length!==1||n?.kind!==`wall`||t.topLevel)return null;let r=$t(n,[{t:`face`,face:this.face,d:[0,0,this.distance]}]);return r?{bodyId:t.id,featureId:n.id,patch:r,features:[{...n,...r}]}:null}refresh(){let e=this.archEdit();if(!e)return super.refresh();K().setPreview(e.features),$()}apply(){let e=this.archEdit();if(!e)return super.apply();let t=K();if(Lt.getState().status.__preview__?.error)return t.toast(q(`msg.fixErrorFirst`),`error`);t.commit(kt(t.doc,e.bodyId,e.featureId,e.patch),[this.bodyId]),this.done()}axis(){if(!this.bodyId||this.faceId==null)return null;if(this.at)return{origin:this.at.p,dir:this.at.n,value:this.distance};let e=J(this.bodyId,this.faceId);return e?{origin:e.worldCenter,dir:e.worldNormal,value:this.distance}:null}setAxis(e){let[,t]=tm(),n=dp(e,-t,t);Math.abs(n)<1e-6||(this.distance=n,this.refresh())}input(e){let t=di(e);return t==null||t===0?!1:(this.setAxis(t),!0)}cancel(){return this.face?(this.bodyId=null,this.face=null,this.faceId=null,this.at=null,this.refresh(),!0):!1}highlights(){return this.bodyId&&this.faceId!=null?{faces:[{bodyId:this.bodyId,ids:[this.faceId]}]}:{}}panel(){let[,e]=tm();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.face`),q(`step.distance`)],current:+!!this.face}),(0,Q.jsx)(yi,{label:q(`opt.distance`),value:this.distance,length:!0,min:-e,max:e,onChange:e=>Math.abs(e)<1e-6?K().toast(q(`msg.notZero`),`error`):this.setAxis(e)}),(0,Q.jsx)(rm,{canApply:!!this.face,onApply:()=>this.apply()})]})}},Mm=class extends Tm{id;edges=[];size;constructor(e){super(),this.id=e,this.size=K().mode===`arch`?100:1;let t=K().sub;if(t?.kind===`edge`)this.bodyId=t.bodyId,this.edges=[...t.ids],Si(),xi(this,()=>this.refresh());else{let e=K().selection;e.length===1&&z(K().doc,e[0])&&(this.bodyId=e[0])}}allEdgeIds(){let e=this.body();return(e?K().meshes[M(K().doc,e).id]:null)?.edgeInfo.map(e=>e.id)??[]}pickAllEdges(){let e=this.allEdgeIds();this.edges=this.edges.length===e.length?[]:e,this.refresh()}cancel(){return this.edges.length?(this.edges.pop(),this.refresh(),!0):!1}wants(){return[`edge`]}prompt(){return this.edges.length?q(`p.moreEdges`):q(`p.pickEdges`)}click(e){if(e.hit?.kind!==`body`||e.hit.edgeId==null)return;this.bodyId!==e.hit.itemId&&(this.bodyId=e.hit.itemId,this.edges=[]);let t=this.edges.indexOf(e.hit.edgeId);t>=0?this.edges.splice(t,1):this.edges.push(e.hit.edgeId),this.refresh()}step(){if(!this.bodyId||!this.edges.length)return null;let e=this.edges.map(e=>hi(this.bodyId,e)?.sig).filter(Boolean);return{id:`preview`,kind:this.id,edges:e,size:this.size,enabled:!0}}input(e){let t=di(e);if(t==null)return!1;let n=tm();return t<n[0]||t>n[1]?(nm(n),!0):(this.size=t,this.refresh(),!0)}highlights(){return this.bodyId?{edges:[{bodyId:this.bodyId,ids:this.edges}]}:{}}panel(){let[e,t]=tm();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.edges`),q(`step.size`)],current:+!!this.edges.length}),(0,Q.jsx)(yi,{label:this.id===`fillet`?q(`opt.radius`):q(`opt.distance`),value:this.size,length:!0,min:e,max:t,onChange:n=>(this.size=dp(n,e,t),this.refresh())}),(0,Q.jsx)(`p`,{className:`hint`,children:q(`hint.edges`,{n:this.edges.length})}),(()=>{let e=this.allEdgeIds().length;if(!e)return null;let t=this.edges.length===e;return(0,Q.jsx)(`button`,{className:`small`,"data-tip":q(`ac.allEdgesTip`),onClick:()=>this.pickAllEdges(),children:t?q(`ac.noEdges`):q(`ac.allEdges`,{n:e})})})(),(0,Q.jsx)(rm,{canApply:this.edges.length>0,onApply:()=>this.apply()})]})}},Nm=class extends Tm{id=`shell`;faces=[];thickness;constructor(){super(),this.thickness=K().mode===`arch`?200:1.5;let e=K().sub;e?.kind===`face`&&(this.bodyId=e.bodyId,this.faces=[...e.ids],Si(),xi(this,()=>this.refresh()))}cancel(){return this.faces.length?(this.faces.pop(),this.refresh(),!0):!1}wants(){return[`face`]}prompt(){return q(`p.shellFaces`)}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;this.bodyId!==e.hit.itemId&&(this.bodyId=e.hit.itemId,this.faces=[]);let t=this.faces.indexOf(e.hit.faceId);t>=0?this.faces.splice(t,1):this.faces.push(e.hit.faceId),this.refresh()}step(){return!this.bodyId||!this.faces.length?null:{id:`preview`,kind:`shell`,faces:this.faces.map(e=>J(this.bodyId,e)?.sig).filter(Boolean),thickness:this.thickness,enabled:!0}}input(e){let t=di(e);if(t==null)return!1;let n=tm();return t<n[0]||t>n[1]?(nm(n),!0):(this.thickness=t,this.refresh(),!0)}highlights(){return this.bodyId?{faces:[{bodyId:this.bodyId,ids:this.faces}]}:{}}panel(){let[e,t]=tm();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.openFaces`),q(`step.thickness`)],current:+!!this.faces.length}),(0,Q.jsx)(yi,{label:q(`opt.thickness`),value:this.thickness,length:!0,min:e,max:t,onChange:n=>(this.thickness=dp(n,e,t),this.refresh())}),(0,Q.jsx)(rm,{canApply:this.faces.length>0,onApply:()=>this.apply()})]})}},Pm=class{id=`split`;bodyId=null;plane=`XY`;offset=0;face=null;sketchId=null;source=`pick`;how=`line`;along=`XY`;pts=[];ref=null;cursor=null;stopKeys=Xr(this);constructor(){let e=K().selection.find(e=>z(K().doc,e));e&&(this.bodyId=e);let t=K().selection.find(e=>ie(K().doc,e));t&&(this.sketchId=t,this.plane=`sketch`),xi(this,()=>this.refresh())}step(){let e=K(),t=this.bodyId?z(e.doc,this.bodyId):null;if(!t)return null;if(this.source===`pick`&&this.plane===`sketch`){let n=this.sketchId?ct(e.doc,this.sketchId):null;return n?{id:`preview`,kind:`split`,origin:[0,0,0],normal:[0,0,1],sketch:{entities:n.entities,frame:Ue(t,n)},enabled:!0}:null}let n=this.worldPlane();if(!n)return null;let r=Gn(t.position,t.rotation).invert(),i=new V(...n.origin).applyMatrix4(r),a=new V(...n.normal).transformDirection(r);return{id:`preview`,kind:`split`,origin:[i.x,i.y,i.z],normal:[a.x,a.y,a.z],enabled:!0}}refresh(){let e=K(),t=this.bodyId?z(e.doc,this.bodyId):null,n=this.step();if(e.meshes.__preview__){let t={...e.meshes};delete t[$n],e.set({meshes:t})}e.setPreview(t&&n?[...M(e.doc,t).features,n]:null),$()}result(){let e=Lt.getState(),t=e.status[$n]?.error,n=e.meshes[$n];return n&&!t&&n.solids>=2?{ok:!0}:t||n&&n.solids<2?{ok:!1,error:t??`split-miss`}:{ok:!1}}previewPlacement(){let e=this.bodyId?z(K().doc,this.bodyId):null;return e&&this.step()?{position:e.position,rotation:e.rotation}:null}previewColor(){return this.bodyId&&z(K().doc,this.bodyId)?.color||`#999`}hidden(){return this.bodyId&&this.step()&&K().meshes.__preview__?[this.bodyId]:[]}dispose(){this.stopKeys(),K().setPreview(null)}wants(){return this.bodyId&&this.source===`draw`?this.how===`line`&&!this.ref?[`point`,`face`]:[`point`]:this.bodyId&&this.plane===`sketch`?[`entity`,`item`]:this.bodyId?[`face`,`item`]:[`item`]}prompt(){return this.bodyId&&this.source===`draw`?this.worldPlane()?q(`p.confirm`):this.how===`point`?q(`p.splitDrawPoint`):this.how===`three`?q(`p.splitDraw3`,{n:this.pts.length+1}):this.pts.length?q(`p.splitDrawLineB`):q(`p.splitDrawLineA`):this.bodyId&&this.plane===`sketch`?q(`p.splitSketch`):this.bodyId?q(`p.splitPlane`):q(`p.splitBody`)}setSource(e){this.source=e,this.restartDrawing()}setHow(e){this.how=e,this.restartDrawing()}restartDrawing(){this.pts=[],this.ref=null,this.cursor=null,this.refresh()}undoPoint(){return this.source!==`draw`||!this.pts.length?!1:(this.pts.pop(),this.pts.length||(this.ref=null),this.refresh(),!0)}refFor(e){if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=J(e.hit.itemId,e.hit.faceId);if(t?.planar)return{plane:{origin:t.worldCenter,normal:t.worldNormal},bodyId:e.hit.itemId,faceId:e.hit.faceId};if(e.hit.normal)return{plane:{origin:e.hit.point,normal:e.hit.normal}}}let t=e.workPlane?ht(K().doc,e.workPlane.id):null;return t?{plane:{origin:t.position,normal:Bn(t)}}:{plane:{origin:[0,0,Pn(K())],normal:[0,0,1]}}}drawPoint(e,t){if(this.how===`line`){let n=this.ref??this.refFor(e);t&&(this.ref=n);let r=_t(n.plane.origin,n.plane.normal),i=n.bodyId?Hr(n.bodyId,r):[],a=Vr(e,r,i,this.pts[0]?pi(r,this.pts[0]):null,!n.bodyId);return a?Mr(r,a.pt):null}if(e.snap3d)return e.snap3d.point;if(e.hit?.kind===`body`)return e.hit.point;if(e.workPlane)return e.workPlane.point;let n={position:[0,0,Pn(K())],rotation:[0,0,0]},r=Vr(e,n,[],null);return r?Mr(n,r.pt):null}drawClick(e){this.worldPlane()&&(this.pts=[],this.ref=null);let t=this.drawPoint(e,!0);if(!t)return;let n=this.pts[this.pts.length-1];n&&Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])<1e-9||(this.pts.push(t),this.how===`three`&&this.pts.length===3&&!this.worldPlane()&&(this.pts.pop(),K().toast(q(`msg.splitInLine`),`error`)),this.cursor=null,this.refresh())}move(e){this.bodyId&&this.source===`draw`&&(this.cursor=this.worldPlane()?null:this.drawPoint(e,!1),$())}input(e){let t=e.trim().toLowerCase();return this.source!==`draw`||t!==`u`&&t!==`undo`?!1:(this.undoPoint(),!0)}click(e){if(this.bodyId&&this.source===`draw`)return this.drawClick(e);if(this.bodyId&&this.plane===`sketch`&&(e.entity||e.hit?.kind===`sketch`))return this.sketchId=e.entity?.sketchId??e.hit.itemId,this.refresh();if(this.bodyId&&e.workPlane&&!e.hit){let t=ht(K().doc,e.workPlane.id);return this.face={origin:t.position,normal:Bn(t)},this.plane=`face`,this.refresh()}if(e.hit?.kind===`body`){if(!this.bodyId)this.bodyId=e.hit.itemId;else if(e.hit.faceId!=null&&e.hit.itemId!==this.bodyId){let t=J(e.hit.itemId,e.hit.faceId);if(!t?.planar)return K().toast(q(`msg.flatFaceOnly`),`error`);this.face={origin:t.worldCenter,normal:t.worldNormal},this.plane=`face`}else e.hit.itemId!==this.bodyId&&(this.bodyId=e.hit.itemId);this.refresh()}}confirmable(){return this.result().ok}worldPlane(){if(!this.bodyId)return null;if(this.source===`draw`)return this.drawnPlane(this.pts);if(this.plane===`sketch`)return null;if(this.plane===`face`)return this.face;let e=qr([this.bodyId]);if(!e)return null;let t=ii(e),n=this.plane===`XY`?[0,0,1]:this.plane===`YZ`?[1,0,0]:[0,1,0];return{origin:[t[0]+n[0]*this.offset,t[1]+n[1]*this.offset,t[2]+n[2]*this.offset],normal:n}}drawnPlane(e){return this.how===`point`?e[0]?zr(this.along,e[0],this.offset):null:this.how===`three`?e.length>=3?Zr(e[0],e[1],e[2]):null:e.length>=2&&this.ref?Lr(e[0],e[1],this.ref.plane.normal):null}livePlane(){let e=this.worldPlane();return e||this.source!==`draw`||!this.cursor?e:this.drawnPlane([...this.pts,this.cursor])}overlay3d(){if(!this.bodyId)return null;let e=[],t=[],n=this.livePlane(),r=n?qr([this.bodyId]):null;if(n&&r){let i=Math.hypot(r.max[0]-r.min[0],r.max[1]-r.min[1],r.max[2]-r.min[2]),a=Yr(n,ii(r),i*.6+1);t=a.tris,e.push(...a.outline)}let i=[];if(this.source===`draw`){let t=this.cursor&&!this.worldPlane()?[...this.pts,this.cursor]:this.pts;if(this.how!==`point`)for(let n=0;n+1<t.length;n++)e.push(...t[n],...t[n+1]);this.how===`three`&&t.length===3&&e.push(...t[2],...t[0]);for(let e of this.pts)i.push({p:e,text:`●`})}return e.length||i.length?{segments:e,labels:i,fills:t}:null}apply(){let e=K(),t=this.bodyId?z(e.doc,this.bodyId):null,n=this.step();if(!t||!n)return;let r=this.result();if(!r.ok){r.error&&e.toast(q(Wn(r.error)),`error`);return}let i={...n,id:P()},a=sn(e.doc,t.id),o=[...z(a,t.id).features,i],s=D(a,o[0],t,`${t.name} (2)`);a=Er(s.doc,s.id,()=>[...o,{id:P(),kind:`pickSolid`,index:-1,enabled:!0}]),a=Er(a,t.id,()=>[...o,{id:P(),kind:`pickSolid`,index:0,enabled:!0}]),e.commit(a,[t.id,s.id]),e.setTool(null)}enter(){this.apply()}highlights(){let e=this.source===`draw`,t=e?this.ref:null;return{primary:this.bodyId?[this.bodyId]:[],secondary:!e&&this.plane===`sketch`&&this.sketchId?[this.sketchId]:[],faces:t?.bodyId&&t.faceId!=null?[{bodyId:t.bodyId,ids:[t.faceId]}]:[]}}panel(){return(0,Q.jsx)(Im,{tool:this})}},Fm={line:`hint.splitLine`,three:`hint.split3`,point:`hint.splitPoint`};function Im({tool:e}){Lt(e=>e.meshes[$n]),Lt(e=>e.status[$n]);let[,t]=tm(),n=e.result(),r=(0,Q.jsx)(yi,{label:q(`opt.offset`),value:e.offset,length:!0,min:-t,max:t,onChange:n=>(e.offset=dp(n,-t,t),e.refresh())});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.body`),q(`step.plane`)],current:+!!e.bodyId}),(0,Q.jsx)(Fr,{value:e.source,options:[[`pick`,q(`split.pick`)],[`draw`,q(`split.draw`)]],onChange:t=>e.setSource(t)}),e.source===`pick`?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fr,{value:e.plane,options:[[`XY`,q(`opt.planeXY`)],[`YZ`,q(`opt.planeYZ`)],[`XZ`,q(`opt.planeXZ`)],[`face`,q(`opt.planeFace`)],[`sketch`,q(`opt.planeSketch`)]],onChange:t=>(e.plane=t,e.refresh())}),e.plane!==`face`&&e.plane!==`sketch`&&r,e.plane===`sketch`&&(0,Q.jsx)(`p`,{className:`hint`,children:e.sketchId?`${q(`opt.planeSketch`)}: ${ni(e.sketchId)}`:q(`p.splitSketch`)})]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Jr,{label:q(`step.body`),color:Lf.primary,active:!e.bodyId,names:e.bodyId?[{id:e.bodyId,name:ni(e.bodyId)}]:[],onRemove:()=>(e.bodyId=null,e.restartDrawing())}),(0,Q.jsx)(Fr,{value:e.how,options:[[`line`,q(`split.byLine`)],[`three`,q(`split.by3`)],[`point`,q(`split.byPoint`)]],onChange:t=>e.setHow(t)}),e.how===`point`&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fr,{value:e.along,options:[[`XY`,q(`opt.planeXY`)],[`YZ`,q(`opt.planeYZ`)],[`XZ`,q(`opt.planeXZ`)]],onChange:t=>(e.along=t,e.refresh())}),r]}),(0,Q.jsx)(`p`,{className:`hint`,children:q(Fm[e.how])}),(0,Q.jsx)(Ir,{n:e.pts.length,onUndo:()=>e.undoPoint()})]}),e.step()&&n.error&&(0,Q.jsx)(`p`,{className:`hint`,children:q(Wn(n.error))}),(0,Q.jsx)(rm,{canApply:n.ok,onApply:()=>e.apply()})]})}var Lm=class{linked=!1;ids=K().selection.slice();wants(){return[`item`]}prompt(){return this.ids.length?q(`p.patternSet`):q(`p.pickItems`)}click(e){if(!e.hit)return;let t=e.hit.itemId,n=p(K().doc,[t]);this.ids=this.ids.includes(t)?this.ids.filter(e=>!n.includes(e)):[...this.ids,...n],this.picked(),$()}picked(){}undoPoint(){return this.cancel()}cancel(){return this.ids.length?(this.ids=this.ids.slice(0,-1),this.picked(),$(),!0):!1}confirmable(){return this.ids=this.ids.filter(e=>ue(K().doc,e)),this.ids.length>0}center(){let e=qr(this.ids);return e?ii(e):[0,0,0]}ghosts(){let e=this.center(),t=[];for(let n of this.ids){let r=ue(K().doc,n);if(r)for(let i of this.placementsFor(r,e))t.push({id:n,placement:i})}return t}highlights(){return{primary:this.ids}}apply(){let e=K(),t=e.doc,n=this.center(),r=[];for(let e of this.ids){let i=ue(t,e);if(!i)continue;let a=ni(e),o=ze(t,e,this.placementsFor(i,n),this.linked,e=>`${a} ${e+2}`);t=o.doc,r.push(...o.ids)}r.length&&(e.commit(t,[...this.ids,...r]),e.setTool(null))}enter(){this.apply()}},Rm=class extends Lm{id=`rectPattern`;count=[3,1,1];spacing=[em()*1.5,em()*1.5,em()*1.5];spacingSet=!1;constructor(){super(),this.picked()}picked(){let e=qr(this.ids);e&&!this.spacingSet&&(this.spacing=yp([e.max[0]-e.min[0],e.max[1]-e.min[1],e.max[2]-e.min[2]],K().mode??`print`))}confirmable(){return super.confirmable()&&this.count.some(e=>e>1)}placementsFor(e){let t=[];for(let n=0;n<this.count[0];n++)for(let r=0;r<this.count[1];r++)for(let i=0;i<this.count[2];i++)(n||r||i)&&t.push({position:[e.position[0]+n*this.spacing[0],e.position[1]+r*this.spacing[1],e.position[2]+i*this.spacing[2]],rotation:e.rotation});return t}panel(){let e=[`X`,`Y`,`Z`],[t,n]=tm();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`div`,{className:`tgrid`,children:[e.map((e,t)=>(0,Q.jsx)(yi,{label:`${q(`opt.count`)} ${e}`,value:this.count[t],min:1,max:100,step:1,onChange:e=>(this.count[t]=fp(e,1,100),$())},`c${e}`)),e.map((e,r)=>(0,Q.jsx)(yi,{label:`${q(`opt.spacing`)} ${e}`,value:this.spacing[r],length:!0,min:t,max:n,onChange:e=>(this.spacing[r]=dp(e,t,n),this.spacingSet=!0,$())},`s${e}`))]}),(0,Q.jsx)(Kr,{open:this.linked,children:(0,Q.jsx)(Ar,{label:q(`opt.linkedCopies`),value:this.linked,onChange:e=>(this.linked=e,$())})}),(0,Q.jsx)(rm,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}},zm=class extends Lm{id=`circPattern`;count=6;angle=360;rotAxis=2;centerAt=`origin`;pivot=null;picking=!1;wants(){return this.picking?[`point`]:[`item`]}prompt(){return this.picking?q(`p.centerPick`):super.prompt()}click(e){if(this.picking){let t=Ym(e);return t?(this.pivot=t,this.picking=!1,$()):void 0}super.click(e)}cancel(){return this.picking?(this.picking=!1,this.pivot||(this.centerAt=`origin`),$(),!0):super.cancel()}center(){return this.centerAt===`point`&&this.pivot?this.pivot:[0,0,0]}confirmable(){return!this.picking&&super.confirmable()}overlay3d(){return this.ids.length?{segments:[],labels:[{p:this.center(),text:`+`}]}:null}placementsFor(e,t){let n=t,r=[],i=Math.abs(Math.abs(this.angle)-360)<1e-9,a=this.angle/(i?this.count:Math.max(1,this.count-1)),o=new V(+(this.rotAxis===0),+(this.rotAxis===1),+(this.rotAxis===2));for(let t=1;t<this.count;t++){let i=new rn().makeRotationAxis(o,Ln.degToRad(a*t)),s=new rn().makeTranslation(n[0],n[1],n[2]),c=new rn().makeTranslation(-n[0],-n[1],-n[2]),l=s.multiply(i).multiply(c).multiply(Gn(e.position,e.rotation));r.push(te(l))}return r}panel(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`div`,{className:`tgrid two`,children:[(0,Q.jsx)(yi,{label:q(`opt.count`),value:this.count,min:2,max:360,step:1,onChange:e=>(this.count=fp(e,2,360),$())}),(0,Q.jsx)(yi,{label:q(`opt.totalAngle`),value:this.angle,suffix:(0,Q.jsx)(`em`,{children:`°`}),min:-360,max:360,step:15,onChange:e=>Math.abs(e)<1e-6?K().toast(q(`msg.notZero`),`error`):(this.angle=dp(e,-360,360),$())})]}),(0,Q.jsx)(`div`,{className:`tlabel`,children:q(`opt.patternCenter`)}),(0,Q.jsx)(Fr,{value:this.centerAt,options:[[`origin`,q(`opt.atOrigin`)],[`point`,q(`opt.originPoint`)]],onChange:e=>(this.centerAt=e,this.picking=e===`point`,$())}),(0,Q.jsxs)(Kr,{open:this.rotAxis!==2||this.linked,children:[(0,Q.jsx)(Fr,{value:String(this.rotAxis),options:[[`0`,q(`opt.axisXRot`)],[`1`,q(`opt.axisYRot`)],[`2`,q(`opt.axisZRot`)]],onChange:e=>(this.rotAxis=Number(e),$())}),(0,Q.jsx)(Ar,{label:q(`opt.linkedCopies`),value:this.linked,onChange:e=>(this.linked=e,$())})]}),(0,Q.jsx)(rm,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}},Bm=class{id=`workPlane`;mode=`offset`;from=null;second=null;distance=em()/2;constructor(){let e=K(),t=e.sub?.kind===`face`?J(e.sub.bodyId,e.sub.ids[0]):null,n=(e.doc.workPlanes??[]).find(t=>e.selection.includes(t.id));e.sub&&t?.planar?(this.from={c:t.worldCenter,n:t.worldNormal,size:this.sizeFor(e.sub.bodyId)},Si()):n&&(this.from={c:n.position,n:Bn(n),size:n.size})}wants(){return[`face`,`plane`]}undoPoint(){return this.cancel()}cancel(){if(this.second)this.second=null;else if(this.from)this.from=null;else return!1;return $(),!0}prompt(){return this.mode===`mid`?this.from?q(`p.wpSecond`):q(`p.wpFirst`):this.from?q(`p.distance`):q(`p.wpBase`)}sizeFor(e){let t=e?qr([e]):null;return t?Math.max(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2])*1.3:em()*3}click(e){let t=null;if(e.hit?.kind===`body`&&e.hit.faceId!=null){let n=J(e.hit.itemId,e.hit.faceId);if(!n?.planar)return K().toast(q(`msg.flatFaceOnly`),`error`);t={c:n.worldCenter,n:n.worldNormal,size:this.sizeFor(e.hit.itemId)}}else if(e.workPlane){let n=ht(K().doc,e.workPlane.id);t={c:n.position,n:Bn(n),size:n.size}}else!e.hit&&this.mode===`offset`&&(t={c:[0,0,0],n:[0,0,1],size:em()*3});if(t){if(this.mode===`mid`&&this.from){let e=t.n[0]*this.from.n[0]+t.n[1]*this.from.n[1]+t.n[2]*this.from.n[2];if(Math.abs(e)<.9999)return K().toast(q(`msg.parallelOnly`),`error`);this.second={c:t.c,n:t.n}}else this.from=t,this.second=null;$()}}result(){let e=this.from;return e?this.mode===`offset`?{c:[e.c[0]+e.n[0]*this.distance,e.c[1]+e.n[1]*this.distance,e.c[2]+e.n[2]*this.distance],n:e.n,size:e.size}:this.second?{c:[(e.c[0]+this.second.c[0])/2,(e.c[1]+this.second.c[1])/2,(e.c[2]+this.second.c[2])/2],n:e.n,size:e.size}:null:null}axis(){let e=this.from;return this.mode===`offset`&&e?{origin:e.c,dir:e.n,value:this.distance}:null}setAxis(e){let[,t]=tm();this.distance=dp(e,-t,t),$()}overlay3d(){let e=this.result();if(!e)return null;let t=_t(e.c,e.n),n=Gn(t.position,t.rotation),r=e.size/2,i=[[-r,-r],[r,-r],[r,r],[-r,r]].map(([e,t])=>new V(e,t,0).applyMatrix4(n)),a=[];for(let e=0;e<4;e++)a.push(i[e].x,i[e].y,i[e].z,i[(e+1)%4].x,i[(e+1)%4].y,i[(e+1)%4].z);return{segments:a,labels:[]}}confirmable(){return!!this.result()}apply(){let e=this.result();if(!e)return;let t=K(),n=vn(t.doc,_t(e.c,e.n),e.size,`${q(`item.workPlane`)} ${(t.doc.workPlanes?.length??0)+1}`);t.commit(n.doc,[n.id]),t.setTool(null)}enter(){this.apply()}panel(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fr,{value:this.mode,options:[[`offset`,q(`opt.wpOffset`)],[`mid`,q(`opt.wpMid`)]],onChange:e=>(this.mode=e,this.from=null,this.second=null,$())}),this.mode===`offset`&&(0,Q.jsx)(yi,{label:q(`opt.offset`),value:this.distance,length:!0,min:-tm()[1],max:tm()[1],onChange:e=>this.setAxis(e)}),(0,Q.jsx)(rm,{canApply:!!this.result(),onApply:()=>this.apply()})]})}},Vm=class{id=`sectionView`;plane=`XZ`;picked=null;offset=0;flip=!1;constructor(){let e=K(),t=e.sub?.kind===`face`?J(e.sub.bodyId,e.sub.ids[0]):null;t?.planar&&(this.plane=`pick`,this.picked={c:t.worldCenter,n:t.worldNormal},Si()),this.update()}wants(){return this.plane===`pick`?[`face`,`plane`]:[]}cancel(){return this.plane!==`pick`||!this.picked?!1:(this.picked=null,this.update(),!0)}prompt(){return this.plane===`pick`?q(`p.sectionPick`):q(`p.sectionSet`)}click(e){if(this.plane===`pick`){if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=J(e.hit.itemId,e.hit.faceId);if(!t?.planar)return K().toast(q(`msg.flatFaceOnly`),`error`);this.picked={c:t.worldCenter,n:t.worldNormal}}else if(e.workPlane){let t=ht(K().doc,e.workPlane.id);this.picked={c:t.position,n:Bn(t)}}else return;this.offset=0,this.update()}}basePlane(){if(this.plane===`pick`)return this.picked;let e=K().doc.bodies.filter(e=>e.visible).map(e=>e.id),t=qr(e);return{c:t?ii(t):[0,0,0],n:this.plane===`XY`?[0,0,1]:this.plane===`YZ`?[1,0,0]:[0,-1,0]}}update(){let e=this.basePlane();if(!e)return K().set({section:null});let t=this.flip?[-e.n[0],-e.n[1],-e.n[2]]:e.n;K().set({section:{c:[e.c[0]+e.n[0]*this.offset,e.c[1]+e.n[1]*this.offset,e.c[2]+e.n[2]*this.offset],n:t}}),$()}axis(){let e=this.basePlane();return e?{origin:e.c,dir:e.n,value:this.offset}:null}setAxis(e){let[,t]=tm();this.offset=dp(e,-t,t),this.update()}confirmable(){return!0}enter(){K().setTool(null)}panel(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fr,{value:this.plane,options:[[`XY`,q(`opt.planeXY`)],[`YZ`,q(`opt.planeYZ`)],[`XZ`,q(`opt.planeXZ`)],[`pick`,q(`opt.sectionPick`)]],onChange:e=>(this.plane=e,this.offset=0,this.update())}),(0,Q.jsx)(yi,{label:q(`opt.offset`),value:this.offset,length:!0,min:-tm()[1],max:tm()[1],onChange:e=>this.setAxis(e)}),(0,Q.jsx)(Ar,{label:q(`dv.flip`),value:this.flip,onChange:e=>(this.flip=e,this.update())}),(0,Q.jsxs)(`div`,{className:`tactions`,children:[(0,Q.jsx)(`button`,{className:`primary`,onClick:()=>K().setTool(null),children:q(`btn.apply`)}),(0,Q.jsx)(`button`,{onClick:()=>(K().set({section:null}),K().setTool(null)),children:q(`btn.sectionOff`)})]})]})}},Hm=class extends Lm{id=`pathPattern`;count=5;align=!0;pathIds=null;pts=[];wants(){return this.ids.length?[`entity`,`item`]:[`item`]}prompt(){return this.ids.length?this.pts.length?q(`p.patternSet`):q(`p.pathPick`):q(`p.pickItems`)}click(e){if(this.ids.length&&e.entity){let t=ct(K().doc,e.entity.sketchId),n=vm(t.entities,e.entity.entityId);this.pathIds={sketchId:t.id,ids:n.map(e=>e.id)};let r=[],i=null,a=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]);n.forEach((e,o)=>{let s=ri(e);if(s.length){if(i)a(s[s.length-1],i)<a(s[0],i)&&(s=[...s].reverse());else if(n[o+1]){let e=Br(n[o+1]),t=t=>Math.min(...e.map(e=>a(t,e)));t(s[0])<t(s[s.length-1])&&(s=[...s].reverse())}for(let e of s)(!i||a(e,i)>1e-9)&&r.push(er(t,[e[0],e[1],0]));i=s[s.length-1]}});let o=this.center(),s=e=>Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2]);r.length>1&&s(r[r.length-1])<s(r[0])&&r.reverse(),this.pts=r,$();return}super.click(e)}at(e){let t=this.pts.map(e=>new V(...e)),n=0;for(let r=0;r+1<t.length;r++){let i=t[r].distanceTo(t[r+1]);if(n+i>=e||r+2===t.length){let a=i>0?Math.min(1,Math.max(0,(e-n)/i)):0;return{p:t[r].clone().lerp(t[r+1],a),t:t[r+1].clone().sub(t[r]).normalize()}}n+=i}return{p:t[0]??new V,t:new V(1,0,0)}}length(){let e=0;for(let t=0;t+1<this.pts.length;t++)e+=Math.hypot(this.pts[t+1][0]-this.pts[t][0],this.pts[t+1][1]-this.pts[t][1],this.pts[t+1][2]-this.pts[t][2]);return e}placementsFor(e){if(this.pts.length<2||this.count<2)return[];let t=this.length(),n=this.pts[0],r=this.pts[this.pts.length-1],i=t/(Math.hypot(r[0]-n[0],r[1]-n[1],r[2]-n[2])<1e-6?this.count:this.count-1),a=this.at(0),o=[];for(let t=1;t<this.count;t++){let n=this.at(i*t),r=this.align?new rn().makeRotationFromQuaternion(new ee().setFromUnitVectors(a.t,n.t)):new rn,s=new rn().makeTranslation(n.p.x,n.p.y,n.p.z).multiply(r).multiply(new rn().makeTranslation(-a.p.x,-a.p.y,-a.p.z)).multiply(Gn(e.position,e.rotation));o.push(te(s))}return o}highlights(){return{primary:this.ids,entities:this.pathIds?[this.pathIds]:[]}}confirmable(){return super.confirmable()&&this.pts.length>1}cancel(){return this.pts.length?(this.pts=[],this.pathIds=null,$(),!0):super.cancel()}panel(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pr,{steps:[q(`step.items`),q(`step.path`)],current:+!!this.ids.length}),(0,Q.jsx)(yi,{label:q(`opt.count`),value:this.count,min:2,max:500,step:1,onChange:e=>(this.count=fp(e,2,500),$())}),(0,Q.jsx)(Ar,{label:q(`opt.alignPath`),value:this.align,onChange:e=>(this.align=e,$())}),(0,Q.jsx)(Ar,{label:q(`opt.linkedCopies`),value:this.linked,onChange:e=>(this.linked=e,$())}),(0,Q.jsx)(rm,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}};function Um(e,t){let n=Gn(e.position,e.rotation).invert(),r=new V(...t.origin).applyMatrix4(n),i=new V(...t.normal).transformDirection(n);return{id:P(),kind:`mirror`,origin:[r.x,r.y,r.z],normal:[i.x,i.y,i.z],enabled:!0}}var Wm=class{id=`mirror`;titleKey(){return`cmd.mirror3d`}ids=K().selection.filter(e=>z(K().doc,e));skipped=K().selection.some(e=>!z(K().doc,e)&&ie(K().doc,e));plane=`YZ`;at=`side`;face=null;keep=!0;constructor(){xi(this,()=>this.refresh())}wants(){return this.plane===`face`?[`face`]:[`item`]}prompt(){return this.plane===`face`&&!this.face?q(`p.pickFace`):this.ids.length?q(`p.mirrorReady`):q(`p.pickItems`)}click(e){if(this.plane===`face`){if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=J(e.hit.itemId,e.hit.faceId);if(!t?.planar)return K().toast(q(`msg.flatFaceOnly`),`error`);this.face={origin:t.worldCenter,normal:t.worldNormal}}}else if(e.hit?.kind===`body`){let t=e.hit.itemId;this.ids=this.ids.includes(t)?this.ids.filter(e=>e!==t):[...this.ids,t]}else if(e.hit)return K().toast(q(`msg.mirrorSolidsOnly`),`error`);this.refresh()}undoPoint(){return this.cancel()}cancel(){if(this.plane===`face`&&this.face)this.face=null;else if(this.ids.length)this.ids=this.ids.slice(0,-1);else return!1;return this.refresh(),!0}bodies(){return this.ids.filter(e=>z(K().doc,e))}confirmable(){return this.bodies().length>0&&!!this.worldPlane()}worldPlane(){if(this.plane===`face`)return this.face;let e=qr(this.bodies());return e?bp(e,this.plane,this.at):null}refresh(){let e=K(),t=this.worldPlane(),[n,...r]=this.bodies().map(t=>z(e.doc,t));if(!t||!n)return e.setPreview(null),$();let i=[...M(e.doc,n).features,Um(n,t)],a=r.map(r=>On(n,{position:r.position,rotation:r.rotation,name:r.name,color:r.color},[...M(e.doc,r).features,Um(r,t)]));a.length&&i.push({id:P(),kind:`boolean`,op:`union`,tools:a,enabled:!0}),e.setPreview(i),$()}previewPlacement(){let e=this.bodies().map(e=>z(K().doc,e))[0];return e&&this.worldPlane()?{position:e.position,rotation:e.rotation}:null}previewColor(){return`#7aa7d9`}hidden(){return this.keep||!this.worldPlane()?[]:this.bodies()}dispose(){K().setPreview(null)}apply(){let e=this.worldPlane();if(!e)return;let t=K(),n=t.doc,r=[];for(let t of this.bodies()){let i=z(n,t);if(!i)continue;let a=t;if(this.keep){let e=qe(n,[t],!1,[0,0,0],e=>`${e} ${q(`copySuffix`)}`);n=e.doc,a=e.ids[0]}else n=sn(n,t);n=x(n,a,Um(i,e)),r.push(a)}r.length&&(t.commit(n,r),t.setTool(null))}enter(){this.apply()}highlights(){return{primary:this.bodies()}}panel(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fr,{value:this.plane,options:[[`YZ`,q(`opt.planeYZ`)],[`XZ`,q(`opt.planeXZ`)],[`XY`,q(`opt.planeXY`)],[`face`,q(`opt.planeFace`)]],onChange:e=>(this.plane=e,this.refresh())}),this.plane!==`face`&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`div`,{className:`tlabel`,children:q(`opt.mirrorAt`)}),(0,Q.jsx)(Fr,{value:this.at,options:[[`side`,q(`opt.atSide`)],[`center`,q(`opt.atCenter`)],[`origin`,q(`opt.atOrigin`)]],onChange:e=>(this.at=e,this.refresh())})]}),(0,Q.jsx)(Ar,{label:q(`opt.keepSource`),value:this.keep,onChange:e=>(this.keep=e,$())}),this.skipped&&!this.bodies().length&&(0,Q.jsx)(`p`,{className:`hint`,children:q(`msg.mirrorSolidsOnly`)}),(0,Q.jsx)(rm,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}},Gm=class{id=`align`;ids=K().selection.slice();wants(){return[`item`]}prompt(){return this.ids.length<2?q(`p.alignPick`):q(`p.alignHow`)}click(e){if(!e.hit)return ui();let t=e.hit.itemId;this.ids=this.ids.includes(t)?this.ids.filter(e=>e!==t):[...this.ids,t],$()}cancel(){return this.ids.length?(this.ids=this.ids.slice(0,-1),$(),!0):!1}align(e,t){let n=K(),r=qr([this.ids[0]]);if(!r||this.ids.length<2)return;let i=t===`min`?r.min[e]:t===`max`?r.max[e]:(r.min[e]+r.max[e])/2,a=[];for(let r of this.ids.slice(1)){let o=qr([r]),s=ue(n.doc,r);if(!o||!s)continue;let c=t===`min`?o.min[e]:t===`max`?o.max[e]:(o.min[e]+o.max[e])/2,l=[...s.position];l[e]+=i-c,a.push({id:r,position:l,rotation:s.rotation})}n.setPlacements(a)}highlights(){return{primary:this.ids.slice(0,1),secondary:this.ids.slice(1)}}panel(){let e={X:[q(`opt.alignLeft`),q(`opt.align.mid`),q(`opt.alignRight`)],Y:[q(`opt.alignFront`),q(`opt.align.mid`),q(`opt.alignBack`)],Z:[q(`opt.alignBottom`),q(`opt.align.mid`),q(`opt.alignTop`)]};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`table`,{className:`talign`,children:(0,Q.jsx)(`tbody`,{children:[`X`,`Y`,`Z`].map((t,n)=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:t}),[`min`,`mid`,`max`].map((r,i)=>(0,Q.jsx)(`td`,{children:(0,Q.jsx)(`button`,{className:`small`,disabled:this.ids.length<2,onClick:()=>this.align(n,r),children:e[t][i]})},r))]},t))})}),(0,Q.jsx)(rm,{})]})}},Km=class{id=`faceSnap`;first=null;constructor(){let e=K().sub;e?.kind===`face`&&J(e.bodyId,e.ids[0])?.planar&&(this.first={bodyId:e.bodyId,faceId:e.ids[0]},Si())}wants(){return[`face`]}prompt(){return this.first?q(`p.snapTarget`):q(`p.snapSource`)}undoPoint(){return this.cancel()}cancel(){return this.first?(this.first=null,$(),!0):!1}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;if(!J(e.hit.itemId,e.hit.faceId)?.planar)return K().toast(q(`msg.flatFaceOnly`),`error`);if(!this.first){this.first={bodyId:e.hit.itemId,faceId:e.hit.faceId},$();return}if(e.hit.itemId===this.first.bodyId)return;let t=J(this.first.bodyId,this.first.faceId),n=J(e.hit.itemId,e.hit.faceId),r=K(),i=z(r.doc,this.first.bodyId);if(!t||!n||!i)return;let a=new V(...t.worldNormal),o=new V(...n.worldNormal).negate(),s=new ee().setFromUnitVectors(a,o),c=new V(...t.worldCenter),l=new rn().makeRotationFromQuaternion(s),u=new rn().makeTranslation(...n.worldCenter).multiply(l).multiply(new rn().makeTranslation(-c.x,-c.y,-c.z)).multiply(Gn(i.position,i.rotation)),d=te(u),f=p(r.doc,[i.id]),m=u.clone().multiply(Gn(i.position,i.rotation).invert()),h=f.map(e=>{if(e===i.id)return{id:e,...d};let t=ue(r.doc,e);return{id:e,...te(m.clone().multiply(Gn(t.position,t.rotation)))}});r.setPlacements(h),r.setTool(null)}highlights(){return this.first?{faces:[{bodyId:this.first.bodyId,ids:[this.first.faceId]}]}:{}}panel(){return(0,Q.jsx)(Pr,{steps:[q(`step.movingFace`),q(`step.targetFace`)],current:+!!this.first})}};function qm(){let e=K();return e.selection.length<=1&&e.selection.every(t=>z(e.doc,t))?new Qp:new Jm}var Jm=class{id=`scale`;factor=1;ids=K().selection.slice();wants(){return[`item`]}prompt(){return this.ids.length?q(`p.scaleFactor`):q(`p.pickItems`)}click(e){if(!e.hit)return ui();let t=e.hit.itemId;this.ids=this.ids.includes(t)?this.ids.filter(e=>e!==t):[...this.ids,t],$()}cancel(){return this.ids.length?(this.ids=this.ids.slice(0,-1),$(),!0):!1}undoPoint(){return this.cancel()}confirmable(){return this.ids.length>0&&this.factor>0&&this.factor!==1}input(e){let t=ai(e)??NaN;return t>0?t<mp[0]||t>mp[1]?(nm(mp,!1),!0):(this.factor=t,this.apply(),!0):!1}apply(){if(!(this.factor>0)||this.factor===1)return;let e=K(),t=e.doc,n=qr(this.ids),r=n?ii(n):[0,0,0],i=[],a=new Set(vp(t,this.ids));for(let e of this.ids){a.has(e)&&(t=x(t,e,{id:P(),kind:`scale`,factor:this.factor,enabled:!0})),ct(t,e)&&(t=Jn(t,e,e=>({...e,entities:e.entities.map(e=>li(e,_i([0,0],this.factor)))})));let n=ue(t,e);n&&i.push({id:e,position:[r[0]+(n.position[0]-r[0])*this.factor,r[1]+(n.position[1]-r[1])*this.factor,r[2]+(n.position[2]-r[2])*this.factor],rotation:n.rotation})}for(let e of i)t=Gt(t,e.id,e.position,e.rotation);e.commit(t),e.setTool(null)}enter(){this.apply()}highlights(){return{primary:this.ids}}panel(){let e=qr(this.ids),t=e?e.max.map((t,n)=>t-e.min[n]):null,[n,r]=tm(),[i,a]=mp;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(yi,{label:q(`opt.factor`),value:this.factor,min:i,max:a,step:.1,onChange:e=>(this.factor=dp(e,i,a),$())}),t&&(0,Q.jsx)(`div`,{className:`tgrid`,children:[`X`,`Y`,`Z`].map((e,o)=>(0,Q.jsx)(yi,{label:`${q(`opt.sizeTo`)} ${e}`,value:t[o]*this.factor,length:!0,min:n,max:r,onChange:e=>(this.factor=dp(e/Math.max(1e-9,t[o]),i,a),$())},e))}),(0,Q.jsx)(rm,{canApply:this.ids.length>0&&this.factor!==1,onApply:()=>this.apply()})]})}};function Ym(e){if(e.snap3d)return e.snap3d.point;if(e.hit)return e.hit.point;let t=e.snapped??e.plane;return t?[t[0],t[1],0]:null}function Xm(e){let t=K(),n=$r();if(!n)return t.toast(q(`msg.needSelection`));let r=[e[0]-n[0],e[1]-n[1],e[2]-n[2]];t.setPlacements(t.selection.map(e=>{let n=ue(t.doc,e);return n?{id:e,position:[n.position[0]+r[0],n.position[1]+r[1],n.position[2]+r[2]],rotation:n.rotation}:null}).filter(Boolean))}var Zm=class{id=`move`;gizmo=!0;step=`drag`;hover=null;wants(){return this.step===`drag`?[`item`]:[`point`]}prompt(){return this.step===`pivot`?q(`p.pivotPick`):this.step===`target`?q(`p.pivotTarget`):K().selection.length?q(`p.moveDrag`):q(`p.pickItems`)}setStep(e){this.step=e,this.hover=null,$()}move(e){this.step!==`drag`&&(this.hover=Ym(e),$())}click(e){if(this.step!==`drag`){let t=Ym(e);return t?(this.step===`pivot`?vi(t):Xm(t),this.setStep(`drag`)):void 0}if(e.hit)K().select(e.hit.itemId,e.shift||e.ctrl);else if(!e.shift)return ui();$()}cancel(){return this.step!==`drag`&&(this.setStep(`drag`),!0)}overlay3d(){if(this.step!==`target`||!this.hover)return null;let e=$r();if(!e)return null;let t=this.hover;return{segments:[...e,...t],labels:[{p:[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2],text:gi(Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]))}]}}panel(){return(0,Q.jsx)(Qm,{tool:this})}};function Qm({tool:e}){let t=Lt(e=>e.selection),n=Lt(e=>e.pivot);Lt(e=>e.doc),Lt(e=>e.toolTick);let r=(e,t)=>{let n=K(),r=$r()??[0,0,0],i=new rn().makeRotationFromEuler(new he(Ln.degToRad(t[0]),Ln.degToRad(t[1]),Ln.degToRad(t[2]),`XYZ`)),a=new rn().makeTranslation(r[0]+e[0],r[1]+e[1],r[2]+e[2]).multiply(i).multiply(new rn().makeTranslation(-r[0],-r[1],-r[2]));n.setPlacements(n.selection.map(e=>{let t=ue(n.doc,e);return t?{id:e,...te(a.clone().multiply(Gn(t.position,t.rotation)))}:null}).filter(Boolean))},[i,a]=(0,Ml.useState)(0),o=(e,t,n)=>{if(!t)return;let i=[0,0,0];i[e]=t,n?r([0,0,0],i):r(i,[0,0,0]),a(e=>e+1)},[,s]=tm();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`div`,{className:`tgrid`,children:[[`X`,`Y`,`Z`].map((e,t)=>(0,Q.jsx)(yi,{label:`${q(`opt.moveBy`)} ${e}`,value:0,length:!0,min:-s,max:s,onChange:e=>o(t,dp(e,-s,s),!1)},`m${e}${i}`)),[`X`,`Y`,`Z`].map((e,t)=>(0,Q.jsx)(yi,{label:`${q(`opt.rotateBy`)} ${e}`,value:0,suffix:(0,Q.jsx)(`em`,{children:`°`}),min:-360,max:360,onChange:e=>o(t,dp(e,-360,360),!0)},`r${e}${i}`))]}),(0,Q.jsxs)(Kr,{open:!!n||e.step!==`drag`,children:[(0,Q.jsx)(`div`,{className:`tlabel`,children:q(`opt.pivot`)}),(0,Q.jsxs)(`div`,{className:`tbtns`,children:[(0,Q.jsx)(`button`,{className:`small${e.step===`pivot`?` on`:``}`,disabled:!t.length,onClick:()=>e.setStep(e.step===`pivot`?`drag`:`pivot`),children:q(`opt.pivotSet`)}),(0,Q.jsx)(`button`,{className:`small${e.step===`target`?` on`:``}`,disabled:!t.length,onClick:()=>e.setStep(e.step===`target`?`drag`:`target`),children:q(`opt.pivotToPoint`)}),(0,Q.jsx)(`button`,{className:`small`,disabled:!t.length,onClick:()=>ah(n&&t.includes(n.bodyId)?`pivot`:`bottom`),children:q(`opt.pivotToOrigin`)}),(0,Q.jsx)(`button`,{className:`small`,disabled:!n,onClick:()=>K().set({pivot:null}),children:q(`opt.pivotReset`)})]})]}),(0,Q.jsx)(`p`,{className:`hint`,children:q(`status.objects`,{n:t.length})})]})}function $m(){let e=K(),t=e.sub;if(!t?.ids.length)return e.toast(q(`msg.needSelection`));let n=null;if(t.kind===`vertex`)n=ei(t.bodyId,t.ids[0]);else if(t.kind===`face`)n=J(t.bodyId,t.ids[0])?.worldCenter??null;else{let e=hi(t.bodyId,t.ids[0]);e&&(n=[(e.worldA[0]+e.worldB[0])/2,(e.worldA[1]+e.worldB[1])/2,(e.worldA[2]+e.worldB[2])/2])}n&&(e.selection.includes(t.bodyId)||e.setSelection([t.bodyId]),vi(n),e.setTool(new Zm))}function eh(e,t){let n=K(),r=J(e,t);if(!r||!r.planar)return!1;let i=new ee().setFromUnitVectors(new V(...r.worldNormal),new V(0,0,-1)),a=new V(...r.worldCenter),o=new rn().makeTranslation(a.x,a.y,0).multiply(new rn().makeRotationFromQuaternion(i)).multiply(new rn().makeTranslation(-a.x,-a.y,-a.z)),s=n.selection.includes(e)?n.selection:[e];return n.setPlacements(s.map(e=>{let t=ue(n.doc,e);return t?{id:e,...te(o.clone().multiply(Gn(t.position,t.rotation)))}:null}).filter(Boolean)),!0}var th=class{id=`dropFace`;hover=null;wants(){return[`face`]}prompt(){return q(`p.dropFace`)}move(e){this.hover=e.hit?.kind===`body`&&e.hit.faceId!=null?{bodyId:e.hit.itemId,faceId:e.hit.faceId}:null,$()}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;if(!J(e.hit.itemId,e.hit.faceId)?.planar)return K().toast(q(`msg.flatFaceOnly`),`error`);if(!eh(e.hit.itemId,e.hit.faceId))return;let t=K();t.selection.includes(e.hit.itemId)||t.select(e.hit.itemId),t.setTool(null)}enter(){K().setTool(null)}highlights(){return{primary:K().selection,faces:this.hover?[{bodyId:this.hover.bodyId,ids:[this.hover.faceId]}]:[]}}panel(){return(0,Q.jsx)(rm,{})}};function nh(){let e=K();if(e.sub?.kind===`face`&&e.sub.ids.length&&eh(e.sub.bodyId,e.sub.ids[0])){e.set({sub:null});return}let t=[];for(let n of e.selection){let r=qr([n]),i=ue(e.doc,n);r&&i&&t.push({id:n,position:[i.position[0],i.position[1],i.position[2]-r.min[2]],rotation:i.rotation})}if(!t.length)return e.toast(q(`msg.needSelection`));e.setPlacements(t)}function rh(){let e=K(),t=qr(e.selection);if(!t)return e.toast(q(`msg.needSelection`));let n=ii(t);e.setPlacements(e.selection.map(t=>{let r=ue(e.doc,t);return r?{id:t,position:[r.position[0]-n[0],r.position[1]-n[1],r.position[2]],rotation:r.rotation}:null}).filter(Boolean))}function ih(e){let t=K();if(e===`pivot`)return t.pivot&&t.selection.includes(t.pivot.bodyId)?$r():null;let n=qr(t.selection);if(!n)return null;let r=ii(n);return e===`bottom`?[r[0],r[1],n.min[2]]:r}function ah(e){let t=K(),n=ih(e);if(!n)return t.toast(q(`msg.needSelection`));t.setPlacements(oh([-n[0],-n[1],-n[2]]))}function oh(e){let t=K();return t.selection.map(n=>{let r=ue(t.doc,n);return r?{id:n,position:[r.position[0]+e[0],r.position[1]+e[1],r.position[2]+e[2]],rotation:r.rotation}:null}).filter(Boolean)}var sh=class{id=`toOrigin`;ref;hover=null;constructor(){let e=K();this.ref=e.pivot&&e.selection.includes(e.pivot.bodyId)?`pivot`:`bottom`}wants(){return K().selection.length&&this.ref===`point`?[`point`]:[`item`]}prompt(){return K().selection.length?this.ref===`point`?q(`p.originPoint`):q(`p.originEnter`):q(`p.pickItems`)}from(){return this.ref===`point`?this.hover:ih(this.ref)}go(e){let t=K();if(!e)return t.toast(q(`msg.needSelection`));t.setPlacements(oh([-e[0],-e[1],-e[2]])),t.setTool(null)}move(e){this.ref===`point`&&K().selection.length&&(this.hover=Ym(e),$())}click(e){let t=K();if(!t.selection.length||this.ref!==`point`)return e.hit?(t.select(e.hit.itemId,e.shift||e.ctrl),$()):ui();let n=Ym(e);n&&this.go(n)}enter(){this.ref!==`point`&&this.go(this.from())}confirmable(){return this.ref!==`point`&&!!this.from()}ghosts(){let e=this.from();return e?oh([-e[0],-e[1],-e[2]]).map(e=>({id:e.id,placement:{position:e.position,rotation:e.rotation}})):[]}overlay3d(){let e=this.from();return e?{segments:[...e,0,0,0],labels:[{p:[e[0]/2,e[1]/2,e[2]/2],text:gi(Math.hypot(e[0],e[1],e[2]))}]}:null}panel(){let e=K(),t=!!e.pivot&&e.selection.includes(e.pivot.bodyId),n=[[`bottom`,q(`opt.originBottom`)],[`center`,q(`opt.originCenter`)],...t?[[`pivot`,q(`opt.pivot`)]]:[],[`point`,q(`opt.originPoint`)]];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fr,{value:this.ref,options:n,onChange:e=>(this.ref=e,this.hover=null,$())}),(0,Q.jsx)(rm,{canApply:this.ref!==`point`&&!!this.from(),onApply:()=>this.go(this.from())})]})}};function ch(e,t){let n=K(),r=$r();if(!r)return;let i=new V(+(e===0),+(e===1),+(e===2)),a=new rn().makeTranslation(r[0],r[1],r[2]).multiply(new rn().makeRotationAxis(i,Ln.degToRad(t))).multiply(new rn().makeTranslation(-r[0],-r[1],-r[2]));n.setPlacements(n.selection.map(e=>{let t=ue(n.doc,e);return t?{id:e,...te(a.clone().multiply(Gn(t.position,t.rotation)))}:null}).filter(Boolean))}function lh(e,t,n=0){let r=K(),i=r.mode??`print`,a=r.snapStep()??sr[i].steps[sr[i].defaultStepIndex];r.setPlacements(r.selection.map(i=>{let o=ue(r.doc,i);return o?{id:i,position:[o.position[0]+e*a,o.position[1]+t*a,o.position[2]+n*a],rotation:o.rotation}:null}).filter(Boolean))}var uh=e=>({id:P(),kind:`mesh`,data:fl(e),triangles:e.length/9,solid:!1,enabled:!0}),dh=(e,t)=>{if(t===1)return e;let n=new Float32Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r]*t;return n},fh=class{items;opts;id=`importPlace`;titleKey(){return`cmd.import`}at=null;constructor(e,t={}){this.items=e,this.opts=t,ti(),t.mesh?this.setUnit(t.mesh.unit):this.shown=t.preview??e[0].features,xi(this,()=>K().setPreview(this.shown))}shown=[];setUnit(e){let t=this.opts.mesh;t.unit=e,this.items=t.parts.map(t=>({name:t.name,origin:[t.origin[0]*e,t.origin[1]*e,t.origin[2]*e],features:[uh(dh(t.soup,e))]})),this.shown=[uh(dh(t.preview,e))],K().setPreview(this.shown),$()}sketchEntities(){let e=this.opts.sketch,t=rt.getState();return!e||this.items.length&&!t.import2d?[]:t.importDims?[...e.entities,...e.dims]:e.entities}overlay3d(){let e=this.sketchEntities();if(!this.at||!e.length)return null;let t=Gn(this.at.position,this.at.rotation),n=new V,r=[];for(let i of e){let e=ri(i);for(let i=0;i+1<e.length;i++)for(let a of[e[i],e[i+1]])n.set(a[0],a[1],0).applyMatrix4(t),r.push(n.x,n.y,n.z)}return{segments:r,labels:[]}}wants(){return[`plane`,`face`,`point`]}prompt(){return q(`p.importPlace`,{n:this.items.length})}modelBase(){let e=Lt.getState().meshes[$n];return e?[(e.bbox[0][0]+e.bbox[1][0])/2,(e.bbox[0][1]+e.bbox[1][1])/2,e.bbox[0][2]]:[0,0,0]}placementFor(e){let t=this.modelBase(),n=e=>{let n=Gn(e.position,e.rotation).multiply(new rn().makeTranslation(-t[0],-t[1],-t[2]));return te(n)};if(e.snap3d)return n({position:e.snap3d.point,rotation:[0,0,0]});if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=J(e.hit.itemId,e.hit.faceId);if(t?.planar)return n(_t(e.hit.point,t.worldNormal))}if(!e.plane)return null;let r=K().mode??`print`,i=K().snapStep();return n({position:[Tn(e.plane[0],r,i),Tn(e.plane[1],r,i),0],rotation:[0,0,0]})}move(e){this.at=this.placementFor(e),$()}click(e){let t=this.placementFor(e);if(!t)return;let n=K(),r=n.doc,a=[],o=this.sketchEntities(),s=this.items.length+ +!!o.length>1?P():void 0,c=Gn(t.position,t.rotation);for(let e of this.items){let t=e.origin??[0,0,0],n=te(c.clone().multiply(new rn().makeTranslation(t[0],t[1],t[2]))),i=D(r,{...e.features[0],id:P()},n,e.name);r=i.doc,a.push(i.id)}if(o.length&&this.opts.sketch){let e=Ne(r,t,this.opts.sketch.name,o);r=e.doc,a.push(e.id)}s&&(r=i(r,a,s)),n.commit(r,a),n.setTool(null)}previewPlacement(){return this.at}previewColor(){return`#7aa7d9`}dispose(){K().setPreview(null)}panel(){let e=this.opts.sketch,t=this.opts.mesh;if(t){let e=e=>gi(e*t.unit,!1);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`p`,{className:`hint`,children:q(`imp.unit`)}),(0,Q.jsx)(Fr,{value:String(t.unit),options:[[`1`,`mm`],[`10`,`cm`],[`25.4`,`inch`],[`1000`,`m`]],onChange:e=>this.setUnit(Number(e))}),(0,Q.jsx)(`p`,{className:`hint`,children:q(`imp.size`,{x:e(t.size[0]),y:e(t.size[1]),z:e(t.size[2]),n:t.parts.length})})]})}return e?(0,Q.jsx)(mi,{lines:e.entities.length,dims:e.dims.length,solids:this.items.length}):null}},ph=.8,mh=[100,200,500,1e3],hh=40,gh=e=>[Math.max(1,e[0]-10),Math.max(1,e[1]-10)];function _h(e,t,n){let[r,i]=gh(n);return e<=r+1e-9&&t<=i+1e-9||t<=r+1e-9&&e<=i+1e-9}function vh(e,t){let[n,r]=gh(t),i=Math.max(e[0],1e-6),a=Math.max(e[1],1e-6);return Math.max(Math.min(n/i,r/a),Math.min(n/a,r/i))}function yh(e,t){return mh.find(n=>_h(e[0]/n,e[1]/n,t))??`fit`}function bh(e,t){let n=Math.min(t[0],t[1],t[2]);switch(e?.kind){case`wall`:case`slab`:case`roof`:n=Math.min(n,e.thickness);break;case`railing`:n=Math.min(n,hh);break;case`preset`:e.params.frame>0&&(n=Math.min(n,e.params.frame))}return n}function xh(e,t){return e.filter(e=>e.t*t<ph).map(e=>({name:e.name,mm:e.t*t})).sort((e,t)=>e.mm-t.mm)}function Sh(e,t){let n=e.slice(0);if(n.byteLength<84)return n;let r=new DataView(n),i=Math.min(r.getUint32(80,!0),Math.floor((n.byteLength-84)/50));for(let e=0;e<i;e++){let n=84+e*50+12;for(let e=0;e<9;e++)r.setFloat32(n+e*4,r.getFloat32(n+e*4,!0)*t,!0)}return n}function Ch(e,t){let n=new TextDecoder().decode(e).replace(/^v[ \t]+(\S+)[ \t]+(\S+)[ \t]+(\S+)/gm,(e,n,r,i)=>`v ${[n,r,i].map(e=>String(Math.round(Number(e)*t*1e6)/1e6)).join(` `)}`);return new TextEncoder().encode(n).buffer}function wh(e,t){return e.map(e=>({...e,pos:e.pos.map(e=>e*t)}))}var Th=()=>Lt.getState();function Eh(){let e=Th(),t=e.selection.filter(t=>z(e.doc,t)),n=new Set(t.length?t:e.doc.bodies.map(e=>e.id)),r=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0],a=[],o=new V;for(let t of e.doc.bodies){if(!n.has(t.id)||!t.visible)continue;let s=M(e.doc,t),c=e.meshes[s.id];if(!c)continue;let l=Gn(t.position,t.rotation);for(let e of[c.bbox[0][0],c.bbox[1][0]])for(let t of[c.bbox[0][1],c.bbox[1][1]])for(let n of[c.bbox[0][2],c.bbox[1][2]])o.set(e,t,n).applyMatrix4(l),r[0]=Math.min(r[0],o.x),r[1]=Math.min(r[1],o.y),r[2]=Math.min(r[2],o.z),i[0]=Math.max(i[0],o.x),i[1]=Math.max(i[1],o.y),i[2]=Math.max(i[2],o.z);let u=[c.bbox[1][0]-c.bbox[0][0],c.bbox[1][1]-c.bbox[0][1],c.bbox[1][2]-c.bbox[0][2]];a.push({name:t.name,t:bh(s.features[0],u)})}let s=a.length?[i[0]-r[0],i[1]-r[1],i[2]-r[2]]:[0,0,0];return{n:a.length,size:s,parts:a}}var Dh=()=>{let e=rt.getState().printGrid;return[e.w,e.h]},Oh=class{format;run;id=`archPrint`;choice=null;constructor(e,t){this.format=e,this.run=t}wants(){return[]}titleKey(){return this.format===`stl`?`cmd.exportStl`:this.format===`obj`?`cmd.exportObj`:`cmd.export3mf`}prompt(){return Th().t(`ap.prompt`)}confirmable(){return Eh().n>0}enter(){this.go()}factor(e){let t=this.choice??yh(e,Dh());return t===`fit`?vh(e,Dh()):1/t}go(){let e=Th(),t=Eh();if(!t.n)return e.toast(e.t(`msg.nothingToExport`),`error`);let n=this.factor(t.size);e.setTool(null),this.run(n)}panel(){let e=Th(),t=e.t,n=Eh(),r=Dh(),i=this.choice??yh(n.size,r),a=this.factor(n.size),o=n.size.map(e=>e*a),s=e=>String(+e.toFixed(1)),c=xh(n.parts,a),l=c.slice(0,4).map(e=>`${e.name} (${+e.mm.toFixed(2)} mm)`).join(`, `),u=c.length>4?` ${t(`ap.more`,{n:c.length-4})}`:``;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fr,{value:String(i),options:[...mh.map(e=>[String(e),`1:${e}`]),[`fit`,t(`ap.fit`)]],onChange:t=>{this.choice=t===`fit`?`fit`:Number(t),e.touchTool()}}),(0,Q.jsx)(Nr,{rows:[[t(`ap.scale`),`1:${Math.round(1/a)}`],[t(`ap.size`),`${s(o[0])} × ${s(o[1])} × ${s(o[2])} mm`],[t(`ap.plate`),`${r[0]} × ${r[1]} mm`]]}),n.n>0&&!_h(o[0],o[1],r)&&(0,Q.jsx)(`p`,{className:`hint`,style:{color:`var(--danger)`},children:t(`ap.tooBig`)}),c.length>0&&(0,Q.jsx)(`p`,{className:`hint`,style:{color:`var(--danger)`},children:t(`ap.thin`,{min:.8,list:l+u})}),(0,Q.jsxs)(`div`,{className:`tactions`,children:[(0,Q.jsx)(`button`,{onClick:()=>e.setTool(null),children:t(`btn.cancel`)}),(0,Q.jsx)(`button`,{className:`primary`,disabled:!n.n,onClick:()=>this.go(),children:t(`ap.export`,{fmt:this.format.toUpperCase()})})]})]})}};function kh(e,t){let n=Th();n.set({drawingOpen:!1}),n.setTool(new Oh(e,t))}var Ah=()=>typeof window<`u`&&`__TAURI_INTERNALS__`in window,jh=e=>Array.isArray(e)&&e.length>=2&&Number.isFinite(e[0])&&Number.isFinite(e[1]);function Mh(e){if(!Array.isArray(e))return null;let t=e.filter(jh).map(e=>[e[0],e[1]]);return t.length>=3?t:null}function Nh(e){if(!Array.isArray(e))return null;let t=e.map(Mh).filter(e=>!!e);return t.length?t:null}function Ph(e){if(typeof e!=`object`||!e)return[];let{type:t,coordinates:n}=e;if(t===`Polygon`){let e=Nh(n);return e?[e]:[]}return t===`MultiPolygon`&&Array.isArray(n)?n.map(Nh).filter(e=>!!e):[]}function Fh(e){return e.includes(`전용주거`)?`#f4ec9c`:e.includes(`준주거`)?`#f6cf8c`:e.includes(`주거`)?`#fbe08a`:e.includes(`상업`)?`#f3b3c2`:e.includes(`공업`)?`#d6c3ec`:e.includes(`녹지`)?`#cfe5b4`:e.includes(`관리`)?`#e3ebc4`:e.includes(`농림`)?`#d5e9bd`:e.includes(`자연환경`)?`#b8dbc2`:`#efece3`}function Ih(e){let t=/[^\d\s\-산]+$/.exec(e.trim());return t?t[0]:``}function Lh(e){return e===`도`?`#fbfbf8`:e===`천`||e===`구`||e===`유`?`#cfe4f2`:null}function Rh(e,t,n,r){return[(e[0]-t.x0)/(t.x1-t.x0)*n,(t.y1-e[1])/(t.y1-t.y0)*r]}function zh(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t/2}function Bh(e){let t=null,n=0;for(let r of e){let e=Math.abs(zh(r[0]));e>n&&(n=e,t=r[0])}if(!t||n<=0)return null;let r=0,i=0,a=0,[o,s]=t[0];for(let e=0;e<t.length;e++){let[n,c]=t[e],[l,u]=t[(e+1)%t.length],d=n-o,f=c-s,p=l-o,m=u-s,h=d*m-p*f;a+=h,r+=(d+p)*h,i+=(f+m)*h}return a?[o+r/(3*a),s+i/(3*a)]:null}function Vh(e,t,n=4096){let r=Math.min(4,n/Math.max(e,t,1));return{width:Math.max(1,Math.round(e*r)),height:Math.max(1,Math.round(t*r)),perMetre:r}}var Hh=6378137,Uh=Math.PI*Hh,Wh=85.05112878,Gh=Math.PI/180;function Kh(e,t){let n=Math.max(-85.05112878,Math.min(Wh,t));return[e*Gh*Hh,Math.log(Math.tan(Math.PI/4+n*Gh/2))*Hh]}function qh(e,t){return{lon:e/Hh/Gh,lat:(2*Math.atan(Math.exp(t/Hh))-Math.PI/2)/Gh}}function Jh(e){return 1/Math.cos(Math.max(-85.05112878,Math.min(Wh,e))*Gh)}var Yh=e=>2*Uh/(256*2**e),Xh=(e,t)=>Yh(e)/Jh(t);function Zh(e,t,n){let r=Yh(n);return[(e+Uh)/r,(Uh-t)/r]}function Qh(e,t,n){let r=Yh(n);return[e*r-Uh,Uh-t*r]}function $h(e){let t=Jh(qh(e.cx,e.cy).lat),n=e.w*t/2,r=e.h*t/2;return{x0:e.cx-n,y0:e.cy-r,x1:e.cx+n,y1:e.cy+r}}function eg(e,t,n,r){let i=(e+n)/2,a=(t+r)/2,o=Jh(qh(i,a).lat);return{cx:i,cy:a,w:Math.abs(n-e)/o,h:Math.abs(r-t)/o}}function tg(e,t,n,r={}){let{minZoom:i=6,maxZoom:a=19,maxPx:o=4096,finest:s=.2}=r;for(let r=a;r>=i;r--){let i=Xh(r,n);if(!(i<s*.999)&&Math.max(e,t)/i<=o)return r}return i}function ng(e,t){let n=$h(e),[r,i]=Zh(n.x0,n.y1,t),[a,o]=Zh(n.x1,n.y0,t),s=Math.max(1,Math.round(a-r)),c=Math.max(1,Math.round(o-i)),l=2**t,u=Math.round(-r),d=Math.round(-i),f=[],p=Math.max(0,Math.floor(-u/256)),m=Math.max(0,Math.floor(-d/256)),h=Math.min(l-1,Math.floor((s-u-1e-6)/256)),g=Math.min(l-1,Math.floor((c-d-1e-6)/256));for(let e=m;e<=g;e++)for(let t=p;t<=h;t++)f.push({x:t,y:e,dx:t*256+u,dy:e*256+d});return{z:t,width:s,height:c,tiles:f}}function rg(e,t){let n=Kh(e.lon,e.lat),r=Kh(t.lon,t.lat),i=Jh(t.lat);return[(n[0]-r[0])/i*1e3,(n[1]-r[1])/i*1e3]}function ig(e,t){let n=Kh(t.lon,t.lat),r=Jh(t.lat);return qh(n[0]+e[0]/1e3*r,n[1]+e[1]/1e3*r)}function ag(e,t){return rg(e,t)}var og=`© 국토교통부 브이월드 (V-World)`,sg={min:6,max:19},cg=e=>e.trim()||`14049E46-DDD9-4F99-86FC-A0562E2C9424`;function lg(e,t,n,r,i=`Satellite`){return`https://api.vworld.kr/req/wmts/1.0.0/${encodeURIComponent(e)}/${i}/${t}/${r}/${n}.${i===`Satellite`?`jpeg`:`png`}`}function ug(e){let t=/<ExceptionText>\s*(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?\s*<\/ExceptionText>/.exec(e);if(t)return t[1].trim();let n=/"text"\s*:\s*"([^"]*)"/.exec(e);return n?n[1]:``}async function dg(e,t=9e3){let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let t=await fetch(lg(e,7,109,49),{mode:`cors`,signal:n.signal,cache:`no-store`}),r=t.headers.get(`content-type`)??``;return t.ok&&r.startsWith(`image/`)?{ok:!0}:{ok:!1,why:`refused`,text:ug(await t.text())||`HTTP ${t.status}`}}catch{return{ok:!1,why:`offline`}}finally{clearTimeout(r)}}var fg=!1,pg=0;async function mg(e){if(!fg)try{return await(await fetch(e,{mode:`cors`})).json()}catch{fg=!0}return new Promise((t,n)=>{let r=`__nukcadVworld${++pg}`,i=window,a=document.createElement(`script`),o=()=>{clearTimeout(s),delete i[r],a.remove()},s=setTimeout(()=>{o(),n(Error(`offline`))},1e4);i[r]=e=>{o(),t(e)},a.onerror=()=>{o(),n(Error(`offline`))},a.src=`${e}&callback=${r}`,document.head.appendChild(a)})}var hg=[{data:`LT_C_ADSIDO_INFO`,code:`ctprvn_cd`,name:`ctp_kor_nm`},{data:`LT_C_ADSIGG_INFO`,code:`sig_cd`,name:`sig_kor_nm`},{data:`LT_C_ADEMD_INFO`,code:`emd_cd`,name:`emd_kor_nm`},{data:`LT_C_ADRI_INFO`,code:`li_cd`,name:`li_kor_nm`}];function gg(e,t,n,r,i){let a=hg[t];return`https://api.vworld.kr/req/data?service=data&request=GetFeature&version=2.0&format=json&errorformat=json&crs=EPSG:4326&page=1&size=${i}&geometry=${r}&attribute=${!r}&data=${a.data}&attrFilter=${encodeURIComponent(`${a.code}:${n}`)}&key=${encodeURIComponent(e)}`}async function _g(e){let t=(await mg(e))?.response;if(t?.status===`NOT_FOUND`)return null;if(t?.status!==`OK`)throw Error(t?.error?.text||t?.status||`ERROR`);return t.result?.featureCollection??null}async function vg(e,t,n=``){let r=hg[t],i=await _g(gg(e,t,`like:${n||`%`}`,!1,1e3)),a=[];for(let e of i?.features??[]){let t=e.properties?.[r.code],i=e.properties?.[r.name];t&&i&&t.startsWith(n)&&a.push({code:t,name:i})}return a.sort((e,t)=>e.name.localeCompare(t.name,`ko`))}async function yg(e,t){let n=(await mg(`https://api.vworld.kr/req/search?service=search&request=search&version=2.0&crs=EPSG:4326&size=5&page=1&format=json&errorformat=json&type=district&category=L1&query=${encodeURIComponent(t)}&key=${encodeURIComponent(e)}`))?.response;if(n?.status===`NOT_FOUND`)return null;if(n?.status!==`OK`)throw Error(n?.error?.text||n?.status||`ERROR`);let r=n.result?.items?.find(e=>e.title===t)??n.result?.items?.[0],i=Number(r?.point?.x),a=Number(r?.point?.y);return Number.isFinite(i)&&Number.isFinite(a)?{lon:i,lat:a}:null}async function bg(e,t,n){let r=(await _g(gg(e,t,`=:${n}`,!0,1)))?.bbox;return!r||r.length<4||!r.every(Number.isFinite)||r[2]<=r[0]||r[3]<=r[1]?null:[r[0],r[1],r[2],r[3]]}async function xg(e,t){let n=`https://api.vworld.kr/req/search?service=search&request=search&version=2.0&crs=EPSG:4326&size=10&page=1&format=json&errorformat=json&key=${encodeURIComponent(e)}&query=${encodeURIComponent(t)}`,r=await Promise.allSettled([`&type=place`,`&type=address&category=road`,`&type=address&category=parcel`].map(e=>mg(n+e))),i=[],a=``,o=!1;if(r.forEach((e,t)=>{if(e.status!==`fulfilled`)return;o=!0;let n=e.value,r=n?.response??n;r?.status===`ERROR`&&(a=r.error?.text??`ERROR`);for(let e of r?.result?.items??[]){let n=Number(e.point?.x),r=Number(e.point?.y);if(!Number.isFinite(n)||!Number.isFinite(r))continue;let a=e.address?.road??``,o=e.address?.parcel??``,s=t===0?e.title??a:t===1?a:o;if(!s)continue;let c=t===0?a||o:t===1?o:``;i.some(e=>e.title===s&&Math.abs(e.lon-n)<1e-5&&Math.abs(e.lat-r)<1e-5)||i.push({title:s,sub:c,lon:n,lat:r})}}),!o)throw Error(`offline`);if(!i.length&&a)throw Error(a);return i.slice(0,10)}var Sg=class{key;onLoad;limit;map=new Map;tick=0;failures=0;loaded=0;constructor(e,t,n=600){this.key=e,this.onLoad=t,this.limit=n}get(e,t,n,r=!0){let i=`${e}/${t}/${n}`,a=this.map.get(i);if(a)return a.used=++this.tick,a.state===`ok`?a.img:null;if(!r)return null;let o=new Image;o.crossOrigin=`anonymous`,o.decoding=`async`;let s={img:o,state:`loading`,used:++this.tick};return o.onload=()=>{s.state=`ok`,this.failures=0,this.loaded++,this.onLoad()},o.onerror=()=>{s.state=`error`,this.failures++,this.onLoad()},o.src=lg(this.key,e,t,n),this.map.set(i,s),this.trim(),null}trim(){if(this.map.size<=this.limit)return;let e=[...this.map.entries()].sort((e,t)=>e[1].used-t[1].used).slice(0,this.map.size-this.limit);for(let[t,n]of e)n.img.onload=n.img.onerror=null,n.img.src=``,this.map.delete(t)}dispose(){for(let e of this.map.values())e.img.onload=e.img.onerror=null;this.map.clear()}};function Cg(e){return new Promise((t,n)=>{let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>t(r),r.onerror=()=>n(Error(`tile`)),r.src=e})}async function wg(e,t,n,r,i=`Satellite`){let a=qh(t.cx,t.cy).lat,o=ng(t,tg(t.w,t.h,a,{minZoom:sg.min,maxZoom:sg.max})),s=document.createElement(`canvas`);s.width=o.width,s.height=o.height;let c=s.getContext(`2d`);if(!c)return{ok:!1,why:`tiles`,failed:o.tiles.length};c.fillStyle=`#808080`,c.fillRect(0,0,o.width,o.height);let l=0,u=0;n(0,o.tiles.length);let d=[...o.tiles];if(await Promise.all(Array.from({length:6},async()=>{for(let t=d.shift();t;t=d.shift()){if(r())return;let a=null;for(let n=0;n<2&&!a;n++)a=await Cg(lg(e,o.z,t.x,t.y,i)).catch(()=>null);a?c.drawImage(a,t.dx,t.dy,256,256):u++,n(++l,o.tiles.length)}})),r())return{ok:!1,why:`cancelled`};if(u)return{ok:!1,why:`tiles`,failed:u};try{return{ok:!0,image:s.toDataURL(`image/jpeg`,.85),width:o.width,height:o.height}}catch{return{ok:!1,why:`tainted`}}}function Tg(e){return new Promise((t,n)=>{let r=URL.createObjectURL(e),i=new Image;i.onload=()=>{URL.revokeObjectURL(r);let e=Math.min(1,4096/Math.max(i.naturalWidth,i.naturalHeight)),a=Math.max(1,Math.round(i.naturalWidth*e)),o=Math.max(1,Math.round(i.naturalHeight*e)),s=document.createElement(`canvas`);s.width=a,s.height=o;let c=s.getContext(`2d`);if(!c)return n(Error(`canvas`));c.drawImage(i,0,0,a,o);try{t({image:s.toDataURL(`image/jpeg`,.88),width:a,height:o})}catch(e){n(e)}},i.onerror=()=>{URL.revokeObjectURL(r),n(Error(`picture`))},i.src=r})}var Eg=`nukcad.terrainView`,Dg=[`aerial`,`base`,`cadastral`],Og=(e,t=100)=>typeof e==`number`&&Number.isFinite(e)?Math.min(100,Math.max(0,Math.round(e))):t;function kg(e){let t=typeof e==`object`&&e?e:{};return{contours:t.contours===!0,interval:[0,1,2,5,10,20].includes(t.interval)?t.interval:0,contourOpacity:Og(t.contourOpacity),opacity:Og(t.opacity),picture:Dg.includes(t.picture)?t.picture:`aerial`}}function Ag(){try{return kg(JSON.parse(localStorage.getItem(Eg)??`{}`))}catch{return kg({})}}var jg=Zn(e=>({...Ag(),hover:null,pictureTick:0,set:t=>e(t)}));jg.subscribe((e,t)=>{if(e.contours!==t.contours||e.interval!==t.interval||e.contourOpacity!==t.contourOpacity||e.opacity!==t.opacity||e.picture!==t.picture)try{localStorage.setItem(Eg,JSON.stringify({contours:e.contours,interval:e.interval,contourOpacity:e.contourOpacity,opacity:e.opacity,picture:e.picture}))}catch{}});function Mg(e,t,n){if(!e?.terrain)return Ng(null);let r=Xe(e,t,n);Ng(r?{z:r[2],sea:e.terrain.base+r[2]}:null)}function Ng(e){let t=jg.getState().hover;(e||t)&&(e&&t&&Math.abs(e.z-t.z)<10&&Math.abs(e.sea-t.sea)<10||jg.setState({hover:e}))}var Pg=new Map,Fg=6,Ig=(e,t)=>`${t}:${e.lat.toFixed(7)}:${e.lon.toFixed(7)}:${e.w}:${e.h}`;function Lg(e){let[t,n]=Kh(e.lon,e.lat);return{cx:t,cy:n,w:e.w/1e3,h:e.h/1e3}}function Rg(e,t){let n=e?.image??``;if(!e||t===`aerial`)return{image:n,state:`ok`};if(e.lat==null||e.lon==null)return{image:n,state:`nogeo`};let r=Ig(e,t),i=In(e,t);if(i)return Pg.get(r)?.state!==`ok`&&Pg.set(r,{state:`ok`,image:i}),{image:i,state:`ok`};let a=Pg.get(r);return a||(a={state:`loading`},Pg.set(r,a),Bg(e,t,r)),a.state===`ok`?{image:a.image,state:`ok`}:{image:n,state:a.state,why:a.state===`error`?a.why:void 0}}function zg(e,t){if(!e||e.lat==null||e.lon==null||t===`aerial`)return;let n=Ig(e,t);Pg.get(n)?.state===`error`&&Pg.delete(n),jg.getState().set({pictureTick:jg.getState().pictureTick+1})}async function Bg(e,t,n){let r=cg(rt.getState().vworldKey),i;if(!r)i={state:`error`,why:`nokey`};else try{i={state:`ok`,image:t===`base`?await Hg(r,e):await qg(r,e)}}catch(e){i={state:`error`,why:e.message||`error`}}Pg.delete(n),Pg.set(n,i);for(let e of[...Pg.keys()])Pg.size>Fg&&Pg.get(e)?.state!==`loading`&&Pg.delete(e);if(i.state===`ok`&&Ah()){let e=Lt.getState(),r=e.doc.site;e.mode&&r&&r.lat!=null&&r.lon!=null&&Ig(r,t)===n&&In(r,t)!==i.image&&e.set({file:{...e.file,dirty:!0}})}jg.getState().set({pictureTick:jg.getState().pictureTick+1})}function Vg(e){let t=e.site;if(!Ah()||!t||!Yt(t))return e;let n={};for(let e of Vt){let r=Pg.get(Ig(t,e));r?.state===`ok`&&(n[e]=r.image)}let r=Cn(t,n);return r===t?e:{...e,site:r}}async function Hg(e,t){let n=await wg(e,Lg(t),()=>{},()=>!1,`Base`);if(!n.ok)throw Error(n.why);return n.image}var Ug=[`LT_C_UQ111`,`LT_C_UQ112`,`LT_C_UQ113`,`LT_C_UQ114`],Wg=`LP_PA_CBND_BUBUN`,Gg=12;async function Kg(e,t,n,r){let i=[],a=`BOX(${n.x0.toFixed(2)},${n.y0.toFixed(2)},${n.x1.toFixed(2)},${n.y1.toFixed(2)})`;for(let n=1;n<=r;n++){let r=(await mg(`https://api.vworld.kr/req/data?service=data&request=GetFeature&version=2.0&format=json&errorformat=json&crs=EPSG:900913&size=1000&page=${n}&geometry=true&attribute=true&data=${t}&geomFilter=${encodeURIComponent(a)}&key=${encodeURIComponent(e)}`))?.response;if(r?.status===`NOT_FOUND`)break;if(r?.status!==`OK`)throw Error(r?.error?.text||r?.status||`ERROR`);if(i.push(...r.result?.featureCollection?.features??[]),n>=Number(r.page?.total??1))break}return i}async function qg(e,t){let n=$h(Lg(t)),[r,i]=await Promise.all([Promise.all(Ug.map(t=>Kg(e,t,n,1).catch(()=>[]))).then(e=>e.flat()),Kg(e,Wg,n,Gg)]),{width:a,height:o,perMetre:s}=Vh(t.w/1e3,t.h/1e3),c=document.createElement(`canvas`);c.width=a,c.height=o;let l=c.getContext(`2d`);if(!l)throw Error(`canvas`);let u=e=>{l.beginPath();for(let t of e)for(let e of t)e.forEach((e,t)=>{let[r,i]=Rh(e,n,a,o);t?l.lineTo(r,i):l.moveTo(r,i)}),l.closePath()};l.fillStyle=`#f3f1ea`,l.fillRect(0,0,a,o);for(let e of r)u(Ph(e.geometry)),l.fillStyle=Fh(e.properties?.uname??``),l.fill(`evenodd`);let d=i.map(e=>({polys:Ph(e.geometry),jibun:e.properties?.jibun??``})).filter(e=>e.polys.length);for(let e of d){let t=Lh(Ih(e.jibun));t&&(u(e.polys),l.fillStyle=t,l.fill(`evenodd`))}l.strokeStyle=`rgba(176, 58, 46, 0.85)`,l.lineWidth=Math.max(1,s*.25),l.lineJoin=`round`;for(let e of d)u(e.polys),l.stroke();let f=Math.round(Math.min(16,Math.max(9,s*2.5)));l.font=`${f}px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif`,l.textAlign=`center`,l.textBaseline=`middle`,l.fillStyle=`#5a2a1f`;for(let e of d){let t=Bh(e.polys);if(!t||!e.jibun)continue;let[r,i]=Rh(t,n,a,o),s=e.polys[0][0].map(e=>Rh(e,n,a,o)),c=Math.max(...s.map(e=>e[0]))-Math.min(...s.map(e=>e[0]));Math.max(...s.map(e=>e[1]))-Math.min(...s.map(e=>e[1]))<f*1.4||c<l.measureText(e.jibun).width+4||l.fillText(e.jibun,r,i)}return c.toDataURL(`image/png`)}var Jg={web:{keep:3,days:7,mb:30,libDays:7},desktop:{keep:10,days:30,mb:200,libDays:0}},Yg={web:{keep:[1,10],days:[1,30],mb:[5,100],libDays:[1,90]},desktop:{keep:[1,50],days:[1,365],mb:[20,2e3],libDays:[0,0]}},Xg={web:300,desktop:5e3},Zg=.8,Qg=18e5,$g=864e5;function e_(e,t){let n=typeof e==`object`&&e?e:{},r=Jg[t],i=Yg[t],a=e=>{let t=n[e];return typeof t!=`number`||!Number.isFinite(t)?r[e]:Math.min(i[e][1],Math.max(i[e][0],Math.round(t)))};return{keep:a(`keep`),days:a(`days`),mb:a(`mb`),libDays:a(`libDays`)}}function t_(e,t,n,r=new Set){if(!(t>0))return[];let i=[];for(let a of e)r.has(a.id)||n-Math.max(Number.isFinite(a.time)?a.time:0,Number.isFinite(a.used)?a.used:0)>t*$g&&i.push(a.id);return i}function n_(e,t,n,r=new Set,i=!1){let a=e.filter(e=>r.has(e.id)),o=a.length,s=a.reduce((e,t)=>e+Math.max(0,t.bytes),0),c=t.mb*1024*1024,l=[],u=e.filter(e=>!r.has(e.id)).sort((e,t)=>t.time-e.time);for(let e of u){let r=!(n-e.time<=t.days*$g),a=Math.max(0,e.bytes);if(i||r||o>=t.keep||s+a>c){l.push(e.id);continue}o++,s+=a}return l}function r_(e){return!Number.isFinite(e)||e<=0?`0 KB`:e<1048576?`${Math.max(1,Math.round(e/1024))} KB`:e<1073741824?`${(e/1048576).toFixed(+(e<10485760))} MB`:`${(e/1073741824).toFixed(1)} GB`}var i_=`nukcad.storage.v1`,a_=()=>typeof window<`u`&&`__TAURI_INTERNALS__`in window?`desktop`:`web`;function o_(){try{return e_(JSON.parse(localStorage.getItem(i_)??`{}`),a_())}catch{return e_({},a_())}}var s_=Zn((e,t)=>({...typeof localStorage>`u`?e_({},`web`):o_(),set:n=>{let r=e_({keep:t().keep,days:t().days,mb:t().mb,libDays:t().libDays,...n},a_());e(r);try{localStorage.setItem(i_,JSON.stringify(r))}catch{}}})),c_=()=>{let e=s_.getState();return{keep:e.keep,days:e.days,mb:e.mb,libDays:e.libDays}},l_=e({IMPORT_EXTS:()=>S_,PROJECT_EXTS:()=>x_,autosaveCopies:()=>Y_,clearAutosave:()=>tv,dwgToDxf:()=>E_,exportFile:()=>I_,importData:()=>M_,importFile:()=>j_,listAutosaves:()=>Q_,newFile:()=>__,openFile:()=>w_,openKind:()=>C_,pruneAutosaves:()=>X_,recoverAutosave:()=>nv,removeAutosave:()=>ev,saveAs:()=>p_,saveFile:()=>v_,stampName:()=>g_,startAutosave:()=>iv,writeAutosave:()=>q_}),u_=()=>Lt.getState(),d_=()=>window;function f_(e,t,n){let r=URL.createObjectURL(new Blob([e],{type:n})),i=document.createElement(`a`);i.href=r,i.download=t,i.click(),setTimeout(()=>URL.revokeObjectURL(r),5e3)}async function p_(e,t,n,r,i){let a=d_().showSaveFilePicker;if(a)try{let o=await a({suggestedName:t,types:[{description:i,accept:{[n]:[r]}}]}),s=await o.createWritable();return await s.write(e),await s.close(),{status:`picked`,handle:o}}catch(e){if(e.name===`AbortError`)return{status:`cancelled`}}return f_(e,t,n),{status:`downloaded`}}async function m_(e){let t=d_().showOpenFilePicker;if(t)try{let[n]=await t({multiple:!1,types:[{description:`NukCAD`,accept:{"application/octet-stream":e}}]}),r=await n.getFile();return{name:r.name,data:await r.arrayBuffer(),handle:n}}catch(e){if(e.name===`AbortError`)return null}return new Promise(t=>{let n=document.createElement(`input`);n.type=`file`,n.accept=e.join(`,`),n.onchange=async()=>{let e=n.files?.[0];t(e?{name:e.name,data:await e.arrayBuffer(),handle:null}:null)},n.click()})}var h_=e=>e.replace(/\.[^.]+$/,``);function g_(e){let t=new Date,n=e=>String(e).padStart(2,`0`),r=`${t.getFullYear()}${n(t.getMonth()+1)}${n(t.getDate())}_${n(t.getHours())}${n(t.getMinutes())}${n(t.getSeconds())}`;return`${e===`3d`?`3D_Object`:`Image`}_${r}`}async function __(){let e=u_();Dn()&&e.setMode(e.mode)}async function v_(e){let t=u_();if(!t.mode)return;let n=t.doc,r=vl(t.mode,Vg(n));if(!e&&t.file.handle)try{let e=await t.file.handle.createWritable();await e.write(r),await e.close(),y_(t.file.name,t.file.handle,n);return}catch{}let i=`${t.file.name||g_(`3d`)}.nkx`,a=await p_(r,i,`application/json`,`.nkx`,`NukCAD`);if(a.status===`cancelled`)return;let o=a.status===`picked`?a.handle:null;y_(o?h_(o.name):t.file.name||h_(i),o??t.file.handle,n)}function y_(e,t,n){let r=u_();r.set({file:{name:e,handle:t,dirty:r.doc!==n}}),r.toast(r.t(`msg.saved`,{name:e})),tv()}function b_(e){let t=u_();e.newer?t.toast(t.t(`msg.fileNewer`),`error`):e.report.unknownSteps&&t.toast(t.t(`msg.unknownSteps`,{n:e.report.unknownSteps}),`error`),e.report.dropped&&t.toast(t.t(`msg.fileRepaired`,{n:e.report.dropped}),`error`)}var x_=[`.nkx`,`.nukcad`,`.json`],S_=[`.svg`,`.dxf`,`.dwg`,`.dws`,`.123dx`,`.step`,`.stp`,`.stl`,`.obj`,`.3mf`,`.blend`,`.f3d`];function C_(e){let t=`.${e.toLowerCase().split(`.`).pop()??``}`;return x_.includes(t)?`project`:`import`}async function w_(){let e=u_();if(!Dn())return;let t=await m_([...x_,...S_]);if(t){if(C_(t.name)===`import`){u_().setMode(u_().mode??`print`),u_().set({file:{...u_().file,name:h_(t.name),handle:null}}),await M_(t.name,t.data);return}try{let n=yl(new TextDecoder().decode(t.data));e.loadDoc(n.doc,n.mode,{name:h_(t.name),handle:t.handle}),b_(n)}catch{e.toast(e.t(`msg.openFailed`),`error`)}}}var T_=()=>typeof window<`u`&&`__TAURI_INTERNALS__`in window;async function E_(e){if(!T_())return`missing`;try{let{invoke:t}=await zt(async()=>{let{invoke:e}=await import(`./core-BrXq0wPV.js`);return{invoke:e}},[],import.meta.url);return await t(`dwg_to_dxf`,{data:Array.from(new Uint8Array(e))})}catch(e){return String(e).includes(`oda-missing`)?`missing`:`failed`}}var D_=e=>e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);async function O_(e,t,n){let r=u_();r.toast(r.t(`imp.reading`));let i=await r.job({type:`importCad`,source:e});if(i.type!==`importCad`)throw Error(`empty`);if(!i.parts.length){if(n&&(n.entities.length||n.dims.length)){r.toast(r.t(`imp.solidsFailed`),`error`),r.setTool(new ci(n.entities,n.name,n.dims));return}throw Error(`empty`)}let a=i.failed+Object.values(i.unsupported).reduce((e,t)=>e+t,0);a&&r.toast(r.t(`imp.partial`,{n:a}),`error`);let o=i.parts.map((e,n)=>({name:`${i.parts.length>1?`${t} ${n+1}`:t}${e.sheet?` (${r.t(`item.sheet`)})`:``}`,origin:e.origin,features:[e.brep?{id:P(),kind:`brep`,data:e.brep,enabled:!0}:{id:P(),kind:`mesh`,data:fl(e.soup),triangles:e.soup.length/9,solid:!1,enabled:!0}]})),s=[{id:P(),kind:`mesh`,data:fl(i.preview),triangles:i.preview.length/9,solid:!1,enabled:!0}];r.setTool(new fh(o,{preview:s,sketch:n}))}function k_(e,t,n){let r=u_(),i=e.reduce((e,t)=>e+t.soup.length/9,0);if(!i)throw Error(`empty`);if(i>15e5)return r.toast(r.t(`msg.meshTooLarge`),`error`);let a=new Float32Array(i*9),o=0,s=e.map((n,r)=>{a.set(n.soup,o),o+=n.soup.length;let[i,s]=pl(n.soup),c=[(i[0]+s[0])/2,(i[1]+s[1])/2,i[2]],l=n.soup.slice();for(let e=0;e<l.length;e+=3)for(let t=0;t<3;t++)l[e+t]-=c[t];return{name:e.length>1?n.name||`${t} ${r+1}`:t,soup:l,origin:c}}),[c,l]=pl(a),u=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],d=Math.max(...u)||1,f=1;(n||d<1||d>1e4)&&(f=[1,10,25.4,1e3].reduce((e,t)=>Math.abs(Math.log(d*t/50))<Math.abs(Math.log(d*e/50))?t:e,1)),r.toast(r.t(`msg.meshImported`,{n:i})),r.setTool(new fh([],{mesh:{parts:s,preview:a,size:u,unit:f}}))}async function A_(e,t){let n=u_(),r=sl(e),i=$c(r.skipped),a=[i.text&&n.t(`imp.skip.text`,{n:i.text}),i.hatch&&n.t(`imp.skip.hatch`,{n:i.hatch}),i.point&&n.t(`imp.skip.point`,{n:i.point}),i.other&&n.t(`imp.skip.other`,{n:i.other,types:i.otherTypes.slice(0,4).join(`, `)+(i.otherTypes.length>4?`…`:``)})].filter(Boolean);if(a.length&&n.toast(n.t(`imp.dxfSkipped`,{list:a.join(`, `)}),`error`),r.solids.length){await O_({format:`acis`,blobs:r.solids.map(e=>({data:typeof e.data==`string`?e.data:D_(e.data),xf:e.xf,unit:e.unit}))},t,{entities:r.entities,dims:r.dims,name:t});return}if(!r.entities.length&&!r.dims.length)throw Error(`empty`);n.setTool(new ci(r.entities,t,r.dims))}async function j_(){let e=await m_([...S_,`.nkx`,`.nukcad`]);e&&await M_(e.name,e.data)}async function M_(e,n){let r=u_(),i={name:e,data:n},a=i.name.toLowerCase().split(`.`).pop()??``,o={f3d:`imp.f3d`};if(o[a]){r.set({notice:{title:r.t(`imp.cannotTitle`,{ext:a.toUpperCase()}),text:r.t(o[a])}});return}if(a===`dwg`||a===`dws`){r.toast(r.t(`imp.converting`));let e=await E_(i.data);if(e===`missing`||e===`failed`){r.set({notice:{title:r.t(`imp.cannotTitle`,{ext:a.toUpperCase()}),text:r.t(e===`missing`?T_()?`imp.dwgOda`:`imp.dwg`:`imp.dwgFailed`)}});return}try{await A_(new TextDecoder().decode(e),h_(i.name))}catch{r.toast(r.t(`msg.importFailed`),`error`)}return}try{if(a===`stl`)k_([{name:h_(i.name),soup:cl(i.data)}],h_(i.name),!1);else if(a===`obj`)k_(ll(i.data),h_(i.name),!0);else if(a===`3mf`)k_(await dl(i.data),h_(i.name),!1);else if(a===`blend`){let e=hl(await ml(i.data));e.modifiers&&r.toast(r.t(`imp.blendModifiers`,{n:e.modifiers})),k_(e.parts,h_(i.name),!0)}else if(a===`dxf`)await A_(new TextDecoder().decode(i.data),h_(i.name));else if(a===`svg`){let e=Ol(new TextDecoder().decode(i.data));if(!e.length)throw Error(`empty`);r.setTool(new ci(e,h_(i.name)))}else if(a===`step`||a===`stp`)await O_({format:`step`,data:i.data},h_(i.name));else if(a===`123dx`){let e=await t(i.data);if(!e.length)throw Error(`empty`);await O_({format:`acis`,blobs:e.map(e=>({data:D_(e),xf:null}))},h_(i.name))}else{let e=yl(new TextDecoder().decode(i.data)),t=bl(r.doc,e.doc);r.commit(t.doc,t.ids),b_(e)}}catch{r.toast(r.t(`msg.importFailed`),`error`)}}async function N_(e){let t=u_(),n=t.doc.bodies.filter(t=>e.includes(t.id)&&t.visible),r=await t.exportItems(e,`mesh`);if(!r)return null;let i=new Uint32Array(r.data),a=new Float32Array(r.data),o=i[0],s=1+o*2,c=[],l=0;for(let e=0;e<o;e++){let t=i[1+e*2],o=i[2+e*2],u=r.names[e]??`body${e+1}`;for(;l<n.length&&n[l].name!==u;)l++;c.push({name:u,color:n[l++]?.color,pos:a.slice(s,s+t),idx:i.slice(s+t,s+t+o)}),s+=t+o}return c}function P_(e){let t=u_(),n=[],r=new V;for(let i of t.doc.bodies){if(!e.includes(i.id)||!i.visible)continue;let a=t.meshes[M(t.doc,i).id];if(!a)continue;let o=Gn(i.position,i.rotation),s=new Float32Array(a.positions.length);for(let e=0;e<s.length;e+=3)r.set(a.positions[e],a.positions[e+1],a.positions[e+2]).applyMatrix4(o),s[e]=r.x,s[e+1]=r.y,s[e+2]=r.z;n.push({name:i.name,color:i.color,pos:s,idx:a.indices})}return n}function F_(e,t){if(e.status===`cancelled`)return;let n=u_(),r=n.doc.bodies.filter(e=>e.visible),i=r.filter(e=>t.includes(e.id)).length;n.toast(i<r.length?n.t(`msg.exportedSel`,{n:i,total:r.length}):n.t(`msg.exported`,{n:i}))}async function I_(e,t){let n=u_();if(n.mode===`arch`&&t==null&&(e===`stl`||e===`obj`||e===`3mf`))return kh(e,t=>void I_(e,t));let r=t??1;if(e===`dxf3d`||e===`3mf`){let t=n.selection.filter(e=>z(n.doc,e)),i=t.length?t:n.doc.bodies.map(e=>e.id),a=n.doc.bodies.some(e=>i.includes(e.id)&&M(n.doc,e).features.some(e=>e.kind===`part`))?await N_(i):P_(i);if(!a)return;let o=r===1?a:wh(a,r);if(!o.length)return n.toast(n.t(`msg.nothingToExport`),`error`);let s=n.file.name||g_(`3d`);F_(e===`dxf3d`?await p_(Hc(o),`${s}_3D.dxf`,`application/dxf`,`.dxf`,`AutoCAD DXF`):await p_(Uc(o),`${s}.3mf`,`model/3mf`,`.3mf`,`3MF`),i);return}if(e===`svg`||e===`dxf`){let t=n.file.name||g_(`image`),r=n.activeSketch??n.selection.find(e=>ie(n.doc,e)),i=r?ct(n.doc,r):null;if(!i)return n.toast(n.t(`msg.pickSketch`),`error`);await p_(e===`svg`?kl(i.entities,i.lineStyle):jl(i.entities,i.lineStyle),`${t}.${e}`,e===`svg`?`image/svg+xml`:`application/dxf`,`.${e}`,e.toUpperCase());return}let i=n.file.name||g_(`3d`),a=n.selection.filter(e=>z(n.doc,e)),o=a.length?a:n.doc.bodies.map(e=>e.id),s=await n.exportItems(o,e);if(!s)return;let c=r===1||e===`step`?s.data:e===`stl`?Sh(s.data,r):Ch(s.data,r),l=e===`stl`?`model/stl`:e===`step`?`model/step`:`model/obj`;F_(await p_(c,`${i}.${e===`step`?`step`:e}`,l,`.${e===`step`?`step`:e}`,e.toUpperCase()),o)}var L_=`nukcad-autosave`,R_=`nukcad.autosave.v1`,z_=`legacy`,B_=null;function V_(){return B_??=new Promise((e,t)=>{let n=indexedDB.open(L_,1);n.onupgradeneeded=()=>{n.result.createObjectStore(`meta`,{keyPath:`id`}),n.result.createObjectStore(`docs`)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)}).catch(e=>{throw B_=null,e}),B_}var H_=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=e.onabort=()=>n(e.error??Error(`autosave`))}),U_=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),W_=P(),G_=null,K_=!1;async function q_(){let e=u_();if(!e.mode||!e.file.dirty||!e.doc.bodies.length&&!e.doc.sketches.length&&!e.doc.site)return!1;if(e.doc===G_)return!0;let t=e.doc,n=W_;try{let r=vl(e.mode,Vg(t)),i=(await V_()).transaction([`meta`,`docs`],`readwrite`);i.objectStore(`docs`).put(r,n),i.objectStore(`meta`).put({id:n,time:Date.now(),name:e.file.name,bytes:r.length}),await H_(i),n===W_&&(G_=t),K_=!1}catch{return K_||e.toast(e.t(`msg.autosaveFailed`),`error`),K_=!0,!1}return await J_(),!0}async function J_(){await X_(c_())}async function Y_(){let e=[];try{let t=await V_(),n=await U_(t.transaction(`meta`).objectStore(`meta`).getAll());for(let r of n){let n=typeof r.bytes==`number`?r.bytes:-1;if(n<0){let e=await U_(t.transaction(`docs`).objectStore(`docs`).get(r.id));n=typeof e==`string`?e.length:0}e.push({...r,bytes:n})}}catch{}try{let t=localStorage.getItem(R_),n=t?Z_():null;t&&n&&e.push({id:z_,time:n.time,name:n.name,bytes:t.length})}catch{}return e}async function X_(e,t=!1){let n=await Y_(),r=new Set(n_(n,e,Date.now(),new Set([W_]),t));if(!r.size)return{removed:0,bytes:0};let i=0;for(let e of n)r.has(e.id)&&(i+=e.bytes);try{r.has(z_)&&localStorage.removeItem(R_)}catch{}try{let e=(await V_()).transaction([`meta`,`docs`],`readwrite`);for(let t of r)t!==z_&&(e.objectStore(`meta`).delete(t),e.objectStore(`docs`).delete(t));await H_(e)}catch{}return{removed:r.size,bytes:i}}function Z_(){try{let e=localStorage.getItem(R_);if(!e)return null;let t=JSON.parse(e);return{time:Number(t.time)||0,name:typeof t.name==`string`?t.name:``,file:t.file}}catch{return null}}async function Q_(){let e=[];try{e=await U_((await V_()).transaction(`meta`).objectStore(`meta`).getAll())}catch{}let t=Z_();return t&&e.push({id:z_,time:t.time,name:t.name}),e.sort((e,t)=>t.time-e.time)}async function $_(e){try{if(e===z_){let e=Z_();return e?yl(JSON.stringify(e.file)):null}let t=await U_((await V_()).transaction(`docs`).objectStore(`docs`).get(e));return typeof t==`string`?yl(t):null}catch{return null}}async function ev(e){try{if(e===z_)return localStorage.removeItem(R_);let t=(await V_()).transaction([`meta`,`docs`],`readwrite`);t.objectStore(`meta`).delete(e),t.objectStore(`docs`).delete(e),await H_(t)}catch{}}async function tv(){G_=null,await ev(W_)}async function nv(e){let t=u_(),n=await $_(e.id);return n?(t.loadDoc(n.doc,n.mode,{name:e.name,dirty:!0}),b_(n),e.id===z_?(await q_(),G_&&await ev(z_)):W_=e.id,!0):(t.toast(t.t(`msg.openFailed`),`error`),!1)}var rv=null;function iv(){let e=()=>{rv&&clearInterval(rv);let e=rt.getState().autosaveMinutes;rv=e>0?setInterval(()=>void q_(),e*6e4):null};e(),rt.subscribe((t,n)=>{t.autosaveMinutes!==n.autosaveMinutes&&e()}),Lt.subscribe((e,t)=>{e.past!==t.past&&!e.past.length&&!e.future.length&&(W_=P(),G_=null)}),window.addEventListener(`beforeunload`,e=>{q_();let t=u_();(t.file.dirty||Object.values(t.parked).some(e=>e?.file.dirty))&&e.preventDefault()})}export{ag as $,$d as $t,jg as A,tc as An,nh as At,xg as B,Qp as Bt,Zg as C,Ws as Cn,Pm as Ct,zg as D,Lc as Dn,Bm as Dt,Rg as E,qs as En,sh as Et,sg as F,qm as Ft,Xh as G,pp as Gt,cg as H,Hp as Ht,dg as I,lm as It,tg as J,Lf as Jt,Yh as K,_p as Kt,yg as L,Yp as Lt,wg as M,Nc as Mn,lh as Mt,Tg as N,ac as Nn,$m as Nt,Mg as O,Fc as On,km as Ot,og as P,ch as Pt,Jh as Q,Qd as Qt,bg as R,qp as Rt,Yg as S,ic as Sn,Nm as St,t_ as T,Ks as Tn,Om as Tt,ig as U,mp as Ut,lg as V,Xp as Vt,qh as W,dp as Wt,$h as X,Bf as Xt,Qh as Y,up as Yt,eg as Z,Zd as Zt,a_ as _,Gs as _n,am as _t,j_ as a,od as an,cm as at,Qg as b,Pc as bn,_m as bt,w_ as c,Xu as cn,Mm as ct,ev as d,ml as dn,Em as dt,tf as en,ng as et,p_ as f,dl as fn,wm as ft,q_ as g,sl as gn,Cm as gt,iv as h,fl as hn,Hm as ht,l_ as i,sd as in,Gm as it,Sg as j,ec as jn,Dm as jt,Og as k,Rc as kn,rh as kt,X_ as l,yl as ln,gm as lt,g_ as m,cl as mn,Zm as mt,E_ as n,Hu as nn,Kh as nt,Q_ as o,Qu as on,zm as ot,v_ as p,ll as pn,Wm as pt,Zh as q,gp as qt,I_ as r,cd as rn,Ah as rt,__ as s,Zu as sn,th as st,Y_ as t,Ad as tn,rg as tt,nv as u,hl as un,Km as ut,c_ as v,oc as vn,jm as vt,r_ as w,Tc as wn,Sm as wt,Xg as x,sc as xn,Vm as xt,s_ as y,hc as yn,Rm as yt,vg as z,Jp as zt};