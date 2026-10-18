"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Orbe líquido en WebGL (sin dependencias): pliegues de luz en la paleta de marca
 * que fluyen lentamente y siguen al cursor. Pausa fuera de pantalla, respeta
 * prefers-reduced-motion y cae a un orbe en CSS si no hay WebGL.
 */
const FRAG = `precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPointer;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float noise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x), mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x), mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y),
    f.z);
}
float fbm(vec3 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    s += a * noise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    a *= 0.5;
  }
  return s;
}
vec3 palette(float x) {
  vec3 plum = vec3(0.16, 0.08, 0.26);
  vec3 rose = vec3(0.86, 0.22, 0.40);
  vec3 brand = vec3(0.984, 0.431, 0.102);
  vec3 peach = vec3(1.0, 0.725, 0.561);
  vec3 cream = vec3(1.0, 0.965, 0.93);
  x = clamp(x, 0.0, 1.0);
  vec3 c = mix(plum, rose, smoothstep(0.0, 0.2, x));
  c = mix(c, brand, smoothstep(0.14, 0.34, x));
  c = mix(c, peach, smoothstep(0.7, 0.9, x));
  c = mix(c, cream, smoothstep(0.9, 1.06, x));
  return c;
}
mat3 rotY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0, -s, 0, 1, 0, s, 0, c); }
mat3 rotX(float a) { float c = cos(a), s = sin(a); return mat3(1, 0, 0, 0, c, s, 0, -s, c); }

void main() {
  float m = min(uRes.x, uRes.y);
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / m;
  float t = uTime;

  vec2 c = uPointer * 0.025;
  vec2 d = uv - c;
  float r = length(d);
  float ang = atan(d.y, d.x);
  float R = 0.33 + 0.007 * sin(ang * 3.0 + t * 0.9) + 0.004 * sin(ang * 5.0 - t * 0.7) + 0.004 * sin(ang * 2.0 + t * 1.3);

  vec4 outc = vec4(0.0);

  // halo exterior
  float out_ = max(r - R, 0.0);
  vec3 haloCol = mix(vec3(0.984, 0.431, 0.102), vec3(0.86, 0.22, 0.40), smoothstep(-0.4, 0.4, d.x - d.y));
  float halo = 0.42 * exp(-out_ * 11.0) * (1.0 - smoothstep(0.34, 0.49, r));
  outc = vec4(haloCol * halo, halo);

  if (r < R + 0.01) {
    float z = sqrt(max(R * R - r * r, 0.0));
    vec3 n = normalize(vec3(d, z));
    vec3 p = rotX(0.35 + uPointer.y * 0.25) * rotY(t * 0.14 + uPointer.x * 0.35) * n * 1.3;

    vec3 q = vec3(fbm(p * 0.7 + vec3(0.0, 0.0, t * 0.10)), fbm(p * 0.7 + vec3(5.2, 1.3, 2.8) - t * 0.08), 0.0);
    float f = fbm(p * 0.6 + 1.6 * vec3(q.xy, 0.0));
    // pliegues sedosos: bandas que fluyen deformadas por el ruido
    float w = p.y * 3.0 + p.x * 1.2 + f * 9.0 - t * 0.45;
    float bands = 0.5 + 0.5 * sin(w);
    float fine = 0.5 + 0.5 * sin(w * 2.0 + 1.3);
    float v = mix(0.1, 0.96, bands);
    v += 0.06 * fine * bands;
    v += 0.08 * n.y;
    vec3 base = palette(v);

    vec3 L = normalize(vec3(-0.45, 0.55, 0.75));
    float diff = max(dot(n, L), 0.0);
    float spec = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 48.0);
    float soft = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 6.0);
    float fres = pow(1.0 - n.z, 2.6);

    vec3 col = base * (0.42 + 0.72 * diff);
    // sombra interior inferior en tono ciruela
    col = mix(col, vec3(0.30, 0.09, 0.24), 0.30 * smoothstep(0.1, -0.9, dot(n, L)));
    // borde iridiscente
    vec3 iri = mix(vec3(1.0, 0.62, 0.42), vec3(0.62, 0.48, 1.0), 0.5 + 0.5 * sin(ang * 1.0 + t * 0.4));
    col += iri * fres * 0.75;
    col += vec3(1.0, 0.95, 0.9) * (spec * 0.9 + soft * 0.12);

    float a = smoothstep(R, R - 1.6 / m, r);
    outc = outc * (1.0 - a) + vec4(col * a, a);
  }

  gl_FragColor = outc;
}
`

const VERT = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}"

export function LiquidOrb({ className, pointer }: { className?: string; pointer?: React.RefObject<{ x: number; y: number }> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: "low-power" })
    if (!gl || gl.isContextLost()) return

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
    }
    const vs = compile(gl.VERTEX_SHADER, VERT)
    const fs = compile(gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return
    const prog = gl.createProgram()!
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.bindAttribLocation(prog, 0, "a")
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "uRes")
    const uTime = gl.getUniformLocation(prog, "uTime")
    const uPointer = gl.getUniformLocation(prog, "uPointer")

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const w = Math.max(1, Math.round(width * dpr))
      const h = Math.max(1, Math.round(height * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
      gl.uniform2f(uRes, w, h)
    }
    resize()
    const ro = new ResizeObserver(() => {
      resize()
      if (!running) draw(performance.now())
    })
    ro.observe(canvas)

    let raf = 0
    let running = false
    let visible = true
    const start = performance.now() - 12000
    const sm = { x: 0, y: 0 }

    const draw = (now: number) => {
      const p = pointer?.current
      if (p && !reduced) {
        sm.x += (p.x - sm.x) * 0.05
        sm.y += (p.y - sm.y) * 0.05
      }
      gl.uniform1f(uTime, reduced ? 12 : (now - start) / 1000)
      gl.uniform2f(uPointer, sm.x, -sm.y)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    const loop = (now: number) => {
      draw(now)
      raf = requestAnimationFrame(loop)
    }
    const play = () => {
      if (running || reduced || !visible || document.hidden) return
      running = true
      raf = requestAnimationFrame(loop)
    }
    const pause = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    draw(performance.now())
    setReady(true)
    play()

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible) play()
      else pause()
    })
    io.observe(canvas)
    const onVis = () => (document.hidden ? pause() : play())
    document.addEventListener("visibilitychange", onVis)

    return () => {
      pause()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVis)
      // No forzamos loseContext(): en StrictMode el efecto se monta dos veces
      // sobre el mismo canvas y el contexto perdido no se recupera.
      gl.deleteBuffer(buf)
      gl.deleteProgram(prog)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    }
  }, [pointer])

  return (
    <div className={cn("relative", className)}>
      {/* Fallback CSS (visible hasta que WebGL pinta, o siempre si no hay WebGL) */}
      <div
        className={cn(
          "absolute inset-[17%] rounded-full transition-opacity duration-700",
          "bg-[radial-gradient(circle_at_34%_28%,#fff6ee_0%,#ffb98f_18%,#fb6e1a_48%,#c8325f_78%,#3b1440_100%)]",
          "shadow-[0_0_80px_10px_rgb(251_110_26/0.35)]",
          ready ? "opacity-0" : "opacity-100",
        )}
      />
      <canvas ref={canvasRef} className={cn("absolute inset-0 h-full w-full transition-opacity duration-1000", ready ? "opacity-100" : "opacity-0")} />
    </div>
  )
}
