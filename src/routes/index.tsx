import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Menu,
  MessageCircle,
  UtensilsCrossed,
  X,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import {
  Magnetic,
  Parallax,
  ScrollProgress,
  StudioCursor,
  VelocityMarquee,
  WordsReveal,
} from "@/components/motion-kit";
import mockupWebsite from "@/assets/mockup-website.jpg";
import mockupCardapio from "@/assets/mockup-cardapio.jpg";
import mockupAgendamento from "@/assets/mockup-agendamento.jpg";

const WHATSAPP =
  "https://wa.me/5554999496681?text=Ol%C3%A1!%20Quero%20um%20projeto%20digital%20exclusivo%20com%20a%20Agiliza%20Serra.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agiliza Serra — Estúdio Digital da Serra Gaúcha" },
      {
        name: "description",
        content:
          "Sites de alto padrão, cardápios digitais interativos e agendamento online sob medida para negócios de Gramado, Canela e região.",
      },
      { property: "og:title", content: "Agiliza Serra — Estúdio Digital da Serra Gaúcha" },
      {
        property: "og:description",
        content:
          "Design exclusivo, velocidade ultrarrápida e foco em conversão. Solicite seu projeto exclusivo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    n: "01",
    icon: Globe,
    title: "Websites de alto padrão",
    text: "Layouts exclusivos, animações fluídas, carregamento ultrarrápido e arquitetura pensada para conversão.",
    image: mockupWebsite,
    points: ["Design sob medida", "Animações fluídas", "SEO técnico"],
  },
  {
    n: "02",
    icon: UtensilsCrossed,
    title: "Cardápios digitais interativos",
    text: "Soluções modernas e ágeis para gastronomia, com navegação intuitiva e um visual verdadeiramente apetitoso.",
    image: mockupCardapio,
    points: ["Acesso por QR Code", "Atualização instantânea", "Fotos em destaque"],
  },
  {
    n: "03",
    icon: Calendar,
    title: "Agendamento online",
    text: "Automação para clínicas, barbearias, salões e autônomos que querem organização e receita no piloto automático.",
    image: mockupAgendamento,
    points: ["Confirmações automáticas", "Agenda 24h", "Menos faltas"],
  },
];

const differentials = [
  { k: "Design exclusivo", v: "Zero templates genéricos. Cada projeto nasce de uma direção visual própria." },
  { k: "Velocidade ultrarrápida", v: "Performance obsessiva: páginas leves que carregam em instantes." },
  { k: "Conversão e SEO", v: "Estrutura semântica, copy estratégica e caminhos claros até o contato." },
  { k: "Pronto para mobile", v: "Experiência impecável em celular, tablet e desktop, sem concessões." },
];

const steps = [
  { title: "Alinhamento & estratégia", text: "Entendemos o negócio, o público e os objetivos comerciais." },
  { title: "Design & animações", text: "Direção visual exclusiva com protótipo navegável e movimento." },
  { title: "Desenvolvimento & testes", text: "Código performático, responsivo e validado em todos os dispositivos." },
  { title: "Entrega & lançamento", text: "Publicação, ajustes finais e acompanhamento pós-lançamento." },
];

const marquee = [
  "Design exclusivo",
  "Animações fluídas",
  "Alta performance",
  "SEO técnico",
  "Mobile first",
  "Foco em conversão",
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8"
    >
      <div className="mx-auto flex max-w-[1400px] items-start justify-between gap-4">
        <div className="flex flex-col items-start gap-3">
          <a href="#topo" className="font-display text-3xl leading-none tracking-tight sm:text-4xl">
            Agiliza<span className="italic">Serra</span>
          </a>
          <nav className="hidden flex-col items-start gap-2 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="pill bg-card/70 backdrop-blur transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-accent px-6 py-3 text-xs font-semibold tracking-[0.14em] text-accent-foreground uppercase transition-transform duration-300 hover:scale-[1.05] sm:inline-flex"
          >
            Solicitar projeto
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-[1400px] rounded-3xl border border-border bg-card p-5 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-3 text-center text-xs font-semibold tracking-[0.14em] uppercase"
            >
              Solicitar projeto
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative px-4 pt-40 pb-20 sm:px-8 sm:pt-52 lg:pb-28">
      <div className="mx-auto max-w-[1400px]">
        <WordsReveal
          as="h1"
          text="Criamos experiências digitais fora do comum"
          italicFrom={3}
          className="font-display text-[clamp(2.6rem,9vw,8rem)] leading-[0.92] tracking-tight"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <Reveal variant="up" delay={140}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Sites profissionais de alto padrão, cardápios digitais interativos e sistemas de
              agendamento inteligente sob medida — para negócios da Serra Gaúcha que querem parecer
              (e vender) como grandes marcas.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs font-semibold tracking-[0.14em] text-background uppercase transition-colors duration-500 hover:bg-accent hover:text-accent-foreground"
                >
                  Solicitar projeto exclusivo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#solucoes"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  Ver soluções
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal variant="scale" delay={220}>
            <Parallax distance={54} className="relative">
              <div className="animate-soft-float overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-[0_40px_90px_-50px_oklch(0.2_0.008_90_/_0.5)]">
                <img
                  src={mockupWebsite}
                  alt="Prévia de um website de alto padrão desenvolvido pela Agiliza Serra"
                  className="w-full rounded-[1.4rem] object-cover"
                  loading="eager"
                />
                <div className="flex items-center justify-between px-3 py-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                    Projeto ao vivo
                  </span>
                  <span>agilizaserranet.com</span>
                </div>
              </div>
              <div className="animate-slow-spin absolute -top-8 -left-8 hidden h-24 w-24 place-items-center rounded-full bg-accent text-[9px] font-semibold tracking-[0.2em] text-accent-foreground uppercase lg:grid">
                Serra · Gaúcha ·
              </div>
            </Parallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="border-y border-border py-5">
      <VelocityMarquee
        items={marquee}
        className="text-xs tracking-[0.3em] text-muted-foreground uppercase"
      />
    </div>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal variant="up" className="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
      <WordsReveal
        as="h2"
        text={title}
        className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight"
      />
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">{eyebrow}</p>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="solucoes" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead eyebrow="O que entregamos" title="Três soluções, um só padrão de acabamento" />

        <div className="mt-4">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 120}>
              <article className="row-sweep group grid gap-6 border-b border-border py-10 md:grid-cols-[auto_1.1fr_1fr] md:items-center md:gap-10">
                <span className="font-display text-3xl text-muted-foreground transition-colors duration-500 group-hover:text-accent">
                  {s.n}
                </span>
                <div>
                  <h3 className="flex items-center gap-3 font-display text-3xl leading-tight transition-transform duration-700 ease-out group-hover:translate-x-2 sm:text-4xl">
                    <s.icon className="h-6 w-6 shrink-0 transition-transform duration-700 group-hover:rotate-12 group-hover:text-accent" />
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <Parallax distance={26} className="overflow-hidden rounded-[1.75rem] border border-border bg-card">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-56 w-full scale-105 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.14]"
                  />
                </Parallax>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead eyebrow="Por que a Agiliza Serra" title="Padrão de estúdio, resultado de negócio" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => (
            <Reveal key={d.k} variant="blur" delay={i * 110}>
              <div className="group h-full bg-card p-8 transition-colors duration-500 hover:bg-accent">
                <span className="font-display text-2xl text-muted-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-foreground inline-block">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl leading-tight">{d.k}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead eyebrow="Processo" title="Do primeiro alinhamento ao lançamento" />
        <div className="mt-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} variant="left" delay={i * 110}>
              <div className="row-sweep group flex flex-col gap-3 border-b border-border py-8 md:flex-row md:items-baseline md:gap-12">
                <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase md:w-24">
                  Passo 0{i + 1}
                </span>
                <h3 className="font-display text-2xl transition-[transform,color] duration-700 ease-out group-hover:translate-x-3 group-hover:text-accent sm:text-3xl md:w-[38%]">
                  {s.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    solucao: "Website de alto padrão",
    whatsapp: "",
  });

  const message = `Olá! Sou ${form.nome || "..."}${form.empresa ? ` da ${form.empresa}` : ""}. Tenho interesse em: ${form.solucao}. Meu WhatsApp: ${form.whatsapp || "..."}`;
  const link = `https://wa.me/5554999496681?text=${encodeURIComponent(message)}`;

  const field =
    "w-full rounded-full border border-background/25 bg-transparent px-5 py-3.5 text-sm text-background placeholder:text-background/45 focus:border-accent focus:outline-none transition-colors";

  return (
    <section id="contato" className="px-4 py-16 sm:px-8 sm:py-24">
      <Reveal variant="scale" className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-8 text-background sm:p-14">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <WordsReveal
                as="h2"
                text="Pronto para elevar o nível da sua presença digital?"
                className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight"
              />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
                Conte o que você precisa. Respondemos rápido, com uma proposta clara e um plano de
                execução sob medida.
              </p>
              <Magnetic className="mt-8">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-xs font-semibold tracking-[0.14em] text-accent-foreground uppercase transition-colors duration-500 hover:bg-background hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar com especialista
                </a>
              </Magnetic>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(link, "_blank", "noopener");
              }}
              className="space-y-4"
            >
              <input
                aria-label="Nome"
                required
                className={field}
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
              <input
                aria-label="Empresa"
                className={field}
                placeholder="Empresa"
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              />
              <select
                aria-label="Solução desejada"
                className={`${field} appearance-none`}
                value={form.solucao}
                onChange={(e) => setForm({ ...form, solucao: e.target.value })}
              >
                <option className="text-foreground">Website de alto padrão</option>
                <option className="text-foreground">Cardápio digital interativo</option>
                <option className="text-foreground">Sistema de agendamento online</option>
                <option className="text-foreground">Outro projeto</option>
              </select>
              <input
                aria-label="WhatsApp"
                required
                className={field}
                placeholder="(54) 99999-9999"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              />
              <button
                type="submit"
                className="w-full rounded-full bg-background px-7 py-4 text-xs font-semibold tracking-[0.14em] text-foreground uppercase transition-transform duration-300 hover:scale-[1.02]"
              >
                Enviar e continuar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pt-16 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
          <div>
            <span className="font-display text-3xl">
              Agiliza<span className="italic">Serra</span>
            </span>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Estúdio digital da Serra Gaúcha: soluções de alta performance e apelo visual
              exclusivo.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Navegação</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Contato</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm link-underline"
            >
              <MessageCircle className="h-4 w-4" />
              (54) 99949-6681
            </a>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rede social da Agiliza Serra"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Agiliza Serra. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="canvas-bg" aria-hidden="true" />
      <ScrollProgress />
      <StudioCursor />

      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Differentials />
        <Process />
        <Contact />
      </main>
      <Footer />

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="animate-halo fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_18px_40px_-18px_oklch(0.2_0.008_90_/_0.6)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
