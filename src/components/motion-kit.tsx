import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------------------------------------------------------------
 * Cursor personalizado (estilo estúdio de design)
 * --------------------------------------------------------------- */
export function StudioCursor() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a, button, input, select, textarea, [data-cursor]")));
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [reduced, x, y]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="studio-cursor"
      style={{ x: sx, y: sy }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: active ? 2.6 : 1,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/* ---------------------------------------------------------------
 * Revelação de texto palavra por palavra (máscara deslizante)
 * --------------------------------------------------------------- */
export function WordsReveal({
  text,
  className = "",
  italicFrom,
  delay = 0,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  /** índice da primeira palavra que fica em itálico */
  italicFrom?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduced ? 0 : 0.07, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="mask-line">
          <motion.span
            className={`mask-word ${italicFrom !== undefined && i >= italicFrom ? "italic" : ""}`}
            variants={{
              hidden: reduced ? { opacity: 0 } : { y: "110%", opacity: 0, rotate: 4 },
              show: {
                y: "0%",
                opacity: 1,
                rotate: 0,
                transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* ---------------------------------------------------------------
 * Botão magnético — segue levemente o cursor
 * --------------------------------------------------------------- */
export function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

/* ---------------------------------------------------------------
 * Parallax vertical suave conforme o scroll
 * --------------------------------------------------------------- */
export function Parallax({
  children,
  distance = 70,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduced ? 0 : y }}>{children}</motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------
 * Faixa infinita que acelera e inverte conforme a velocidade do scroll
 * --------------------------------------------------------------- */
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export function VelocityMarquee({
  items,
  baseSpeed = 2.2,
  className = "",
}: {
  items: string[];
  baseSpeed?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-1500, 0, 1500], [-4, 1, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    baseX.set(baseX.get() + dir.current * baseSpeed * (delta / 1000) * Math.abs(f || 1));
  });

  const row = [...items, ...items, ...items, ...items];

  return (
    <div className={`marquee-mask ${className}`}>
      <motion.div className="flex w-max" style={{ x }}>
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8">
            <span className="whitespace-nowrap">{item}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------
 * Contador de scroll (barra de progresso no topo)
 * --------------------------------------------------------------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX: MotionValue<number> = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
