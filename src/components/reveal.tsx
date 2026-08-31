import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "blur";

const offsets: Record<Direction, { x?: number; y?: number; scale?: number; filter?: string }> = {
  up: { y: 42 },
  left: { x: -48 },
  right: { x: 48 },
  scale: { scale: 0.94, y: 20 },
  blur: { y: 26, filter: "blur(14px)" },
};

/** Revela o conteúdo suavemente quando entra na viewport. */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  variant?: Direction;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const from = offsets[variant];

  const variants: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, ...from },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

/** Card de vidro com inclinação 3D e reflexo que segue o cursor. */
export function TiltCard({
  children,
  className = "",
  intensity = 7,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-py * intensity).toFixed(2)}deg) rotateY(${(px * intensity).toFixed(2)}deg) translateY(-6px)`;
    el.style.setProperty("--spot-x", `${((px + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--spot-y", `${((py + 0.5) * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative transition-[transform,box-shadow] duration-500 ease-out hover:shadow-[0_40px_80px_-40px_oklch(0.68_0.19_255_/_0.55)] ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--spot-x,50%) var(--spot-y,50%), oklch(1 0 0 / 0.12), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
