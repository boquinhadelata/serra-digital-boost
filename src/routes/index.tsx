import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Gauge,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Menu,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";

import { Reveal, TiltCard } from "@/components/reveal";
import mockupWebsite from "@/assets/mockup-website.jpg";
import mockupCardapio from "@/assets/mockup-cardapio.jpg";
import mockupAgendamento from "@/assets/mockup-agendamento.jpg";

const WHATSAPP = "https://wa.me/5554999496681?text=Ol%C3%A1!%20Quero%20um%20projeto%20digital%20exclusivo%20com%20a%20Agiliza%20Serra.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agiliza Serra — Experiências Digitais de Alto Padrão" },
      {
        name: "description",
        content:
          "Sites profissionais de alto padrão, cardápios digitais interativos e sistemas de agendamento inteligente sob medida para negócios da Serra Gaúcha.",
      },
      { property: "og:title", content: "Agiliza Serra — Experiências Digitais de Alto Padrão" },
      {
        property: "og:description",
        content:
          "Design exclusivo, velocidade ultrarrápida e foco em conversão. Solicite seu projeto digital exclusivo.",
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
    icon: Globe,
    title: "Websites Profissionais de Alto Padrão",
    text: "Layouts exclusivos, animações fluídas, carregamento ultrarrápido e arquitetura pensada para conversão.",
    image: mockupWebsite,
    points: ["Design sob medida", "Animações fluídas", "SEO técnico"],
  },
  {
    icon: UtensilsCrossed,
    title: "Cardápios Digitais Interativos",
    text: "Soluções modernas e ágeis para gastronomia, com navegação intuitiva e um visual verdadeiramente apetitoso.",
    image: mockupCardapio,
    points: ["Acesso por QR Code", "Atualização instantânea", "Fotos em destaque"],
  },
  {
    icon: Calendar,
    title: "Sistemas de Agendamento Online",
    text: "Automação para clínicas, barbearias, salões e autônomos que querem organização e receita no piloto automático.",
    image: mockupAgendamento,
    points: ["Confirmações automáticas", "Agenda 24h", "Menos faltas"],
  },
];

const differentials = [
  {
    icon: Sparkles,
    title: "Design Exclusivo",
    text: "Zero templates genéricos. Cada projeto nasce de uma direção visual própria.",
  },
  {
    icon: Gauge,
    title: "Velocidade Ultrarrápida",
    text: "Performance obsessiva: páginas leves que carregam em instantes.",
  },
  {
    icon: Search,
    title: "Foco em Conversão e SEO",
    text: "Estrutura semântica, copy estratégica e caminhos claros até o contato.",
  },
  {
    icon: Smartphone,
    title: "Pronto para Mobile",
    text: "Experiência impecável em celular, tablet e desktop, sem concessões.",
  },
];

const steps = [
  { icon: MessageCircle, title: "Alinhamento & Estratégia", text: "Entendemos o negócio, o público e os objetivos comerciais." },
  { icon: Palette, title: "Design & Animações", text: "Direção visual exclusiva com protótipo navegável e movimento." },
  { icon: CheckCircle2, title: "Desenvolvimento & Testes", text: "Código performático, responsivo e validado em todos os dispositivos." },
  { icon: Rocket, title: "Entrega & Lançamento", text: "Publicação, ajustes finais e acompanhamento pós-lançamento." },
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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-2xl glass px-4 py-3 sm:px-6">
        <a href="#topo" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Agiliza <span className="gradient-text">Serra</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine hidden rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
          >
            Solicitar Projeto
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl glass p-4 md:hidden"
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
              className="rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Solicitar Projeto
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden px-4 pt-36 pb-24 sm:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal variant="blur">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Studio digital · Serra Gaúcha
            </span>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <h1 className="mt-7 font-display text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
              Transformamos negócios com{" "}
              <span className="gradient-text">experiências digitais fora do comum.</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sites profissionais de alto padrão, cardápios digitais interativos e sistemas de
              agendamento inteligente sob medida.
            </p>
          </Reveal>

          <Reveal variant="up" delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_50px_-20px_oklch(0.68_0.19_255_/_0.9)] transition-transform duration-300 hover:scale-[1.04]"
              >
                Solicitar Projeto Exclusivo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3.5 text-sm font-semibold transition-colors hover:text-primary"
              >
                Ver Soluções
              </a>
            </div>
          </Reveal>

          <Reveal variant="up" delay={480}>
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { k: "100%", v: "Projetos sob medida" },
                { k: "48h", v: "Entrega inicial ágil" },
                { k: "24/7", v: "Operação automática" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="font-display text-2xl font-semibold text-foreground">{s.k}</p>
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={200}>
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-primary/25 via-accent/20 to-transparent blur-3xl" />
            <TiltCard className="animate-soft-float overflow-hidden rounded-3xl glass p-3">
              <img
                src={mockupWebsite}
                alt="Prévia de um website de alto padrão desenvolvido pela Agiliza Serra"
                className="w-full rounded-2xl object-cover"
                loading="eager"
              />
              <div className="flex items-center justify-between px-3 py-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald" />
                  Projeto ao vivo
                </span>
                <span>agilizaserra.com.br</span>
              </div>
            </TiltCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="marquee-mask border-y border-border/60 py-4">
      <div className="marquee gap-10 text-xs tracking-[0.3em] text-muted-foreground uppercase">
        {[...marquee, ...marquee].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            {item}
            <span className="h-1 w-1 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal variant="up" className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium tracking-[0.3em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

function Services() {
  return (
    <section id="solucoes" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="O que entregamos"
          title="Três pilares para colocar seu negócio em outro nível"
          text="Cada solução é desenhada do zero, com identidade própria e tecnologia de ponta."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 140}>
              <TiltCard className="h-full overflow-hidden rounded-3xl glass">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-emerald" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Por que a Agiliza Serra"
          title="Padrão de estúdio, resultado de negócio"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => (
            <Reveal key={d.title} variant="blur" delay={i * 120}>
              <div className="h-full rounded-3xl glass p-6 transition-transform duration-500 hover:-translate-y-1.5">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-secondary/60">
                  <d.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
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
    <section id="processo" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Processo" title="Do primeiro alinhamento ao lançamento" />
        <div className="relative mt-14">
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} variant="up" delay={i * 140}>
                <div className="relative">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent font-display text-sm font-bold text-primary-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 flex items-center gap-2 font-display text-base font-semibold">
                    <s.icon className="h-4 w-4 text-emerald" />
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ nome: "", empresa: "", solucao: "Website de alto padrão", whatsapp: "" });

  const message = `Olá! Sou ${form.nome || "..."}${form.empresa ? ` da ${form.empresa}` : ""}. Tenho interesse em: ${form.solucao}. Meu WhatsApp: ${form.whatsapp || "..."}`;
  const link = `https://wa.me/5554999496681?text=${encodeURIComponent(message)}`;

  const field =
    "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40 focus:outline-none transition-colors";

  return (
    <section id="contato" className="px-4 py-24 sm:py-28">
      <Reveal variant="scale" className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-border p-8 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-accent/15 to-emerald/15" />
          <div className="absolute inset-0 -z-10 grid-lines opacity-40" aria-hidden="true" />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
                Pronto para elevar o nível da sua presença digital?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Conte o que você precisa. Respondemos rápido, com uma proposta clara e um plano de
                execução sob medida.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald to-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
              >
                <MessageCircle className="h-4 w-4" />
                Falar com Especialista
              </a>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(link, "_blank", "noopener");
              }}
              className="space-y-4 rounded-3xl glass p-6"
            >
              <div>
                <label className="mb-1.5 block text-xs tracking-wide text-muted-foreground uppercase" htmlFor="nome">
                  Nome
                </label>
                <input id="nome" required className={field} placeholder="Seu nome" value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs tracking-wide text-muted-foreground uppercase" htmlFor="empresa">
                  Empresa
                </label>
                <input id="empresa" className={field} placeholder="Nome da empresa" value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs tracking-wide text-muted-foreground uppercase" htmlFor="solucao">
                  Solução desejada
                </label>
                <select id="solucao" className={field} value={form.solucao}
                  onChange={(e) => setForm({ ...form, solucao: e.target.value })}>
                  <option>Website de alto padrão</option>
                  <option>Cardápio digital interativo</option>
                  <option>Sistema de agendamento online</option>
                  <option>Outro projeto</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs tracking-wide text-muted-foreground uppercase" htmlFor="whatsapp">
                  WhatsApp
                </label>
                <input id="whatsapp" required className={field} placeholder="(54) 99999-9999" value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} />
              </div>
              <button
                type="submit"
                className="btn-shine w-full rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
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
    <footer className="border-t border-border px-4 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <span className="font-display text-lg font-semibold">
            Agiliza <span className="gradient-text">Serra</span>
          </span>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Soluções digitais de alta performance e apelo visual exclusivo para negócios da Serra
            Gaúcha.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Links rápidos</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Contato</p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
          >
            <MessageCircle className="h-4 w-4 text-emerald" />
            (54) 99949-6681
          </a>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rede social da Agiliza Serra"
                className="grid h-10 w-10 place-items-center rounded-xl glass transition-transform duration-300 hover:-translate-y-1 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Agiliza Serra. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen">
      <BokehBackground />

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
        className="animate-halo fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald to-primary shadow-[0_18px_40px_-15px_oklch(0.75_0.16_165_/_0.8)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>
    </div>
  );
}
