import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
  alpha: number;
  hue: number;
  blur: number;
  ox: number;
  oy: number;
};

const HUES = [28, 38, 45]; // laranja, âmbar, dourado

export function BokehBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;

    const build = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(46, Math.max(16, (width * height) / 26000)));
      particles = Array.from({ length: count }, () => {
        const depth = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: 10 + depth * 80,
          speed: 0.08 + (1 - depth) * 0.35,
          drift: 0.25 + Math.random() * 0.6,
          phase: Math.random() * Math.PI * 2,
          alpha: 0.3 + Math.random() * 0.4,
          hue: HUES[Math.floor(Math.random() * HUES.length)]!,
          blur: 4 + depth * 26,
          ox: 0,
          oy: 0,
        };
      });
    };

    const pointer = { x: -9999, y: -9999, active: false };
    const RADIUS = 260;
    const FORCE = 90;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        if (!reduced) {
          p.y -= p.speed;
          p.phase += 0.004;
          if (p.y + p.r < -20) {
            p.y = height + p.r + Math.random() * 60;
            p.x = Math.random() * width;
          }
        }
        const baseX = p.x + Math.sin(p.phase + t * 0.00012) * p.drift * 18;

        // Repulsão suave em relação ao cursor
        let tx = 0;
        let ty = 0;
        if (pointer.active && !reduced) {
          const dx = baseX - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < RADIUS) {
            const strength = (1 - dist / RADIUS) ** 2;
            const depthFactor = 0.4 + (1 - Math.min(p.r / 90, 1)) * 0.8;
            tx = (dx / dist) * FORCE * strength * depthFactor;
            ty = (dy / dist) * FORCE * strength * depthFactor;
          }
        }
        p.ox += (tx - p.ox) * 0.08;
        p.oy += (ty - p.oy) * 0.08;

        const x = baseX + p.ox;
        const y = p.y + p.oy;
        const pulse = reduced ? 1 : 0.85 + Math.sin(p.phase * 2) * 0.15;
        const a = p.alpha * pulse;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, p.r);
        grad.addColorStop(0, `hsla(${p.hue}, 100%, 62%, ${a})`);
        grad.addColorStop(0.45, `hsla(${p.hue}, 100%, 55%, ${a * 0.45})`);
        grad.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);

        ctx.filter = `blur(${p.blur}px)`;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    build();
    raf = requestAnimationFrame(draw);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 200);
    };
    window.addEventListener("resize", onResize);

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = e.pointerType !== "touch";
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
    };
  }, []);

  return (
    <div className="bokeh-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="bokeh-canvas" />
      <div className="bokeh-veil" />
    </div>
  );
}
