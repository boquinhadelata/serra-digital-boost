import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  QrCode,
  CalendarDays,
  Globe,
  MessageCircle,
  ArrowRight,
  Menu,
  X,
  Check,
  Quote,
  Phone,
  MapPin,
  Clock,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5554999496681";
const PHONE = "(54) 99949-6681";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Agiliza Serra — Modernize seu Negócio na Serra Gaúcha" },
      {
        name: "description",
        content:
          "Cardápios digitais por QR Code, sistemas de agendamento automático e websites de alta conversão para comerciantes de Gramado, Canela e região. Chame no WhatsApp.",
      },
      { name: "author", content: "Agiliza Serra" },
      {
        property: "og:title",
        content: "Agiliza Serra — Modernize seu Negócio na Serra Gaúcha",
      },
      {
        property: "og:description",
        content:
          "Soluções digitais sob medida para restaurantes, clínicas e comércios da Serra Gaúcha. Aumente suas vendas com tecnologia moderna.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsAppButton({
  className = "",
  children,
  size = "md",
}: {
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "px-3 py-2 text-sm gap-1.5",
    md: "px-5 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 emerald-gradient ${sizes[size]} ${className}`}
    >
      <MessageCircle className="shrink-0" size={size === "lg" ? 22 : size === "md" ? 20 : 18} />
      {children || "Chamar no WhatsApp"}
    </a>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-graphite text-gold">
            <Sparkles size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-graphite">
            Agiliza Serra
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-soft transition-colors hover:text-graphite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton size="sm" />
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-graphite md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-soft transition-colors hover:bg-muted hover:text-graphite"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2">
              <WhatsAppButton size="md" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="absolute inset-0 grain-bg opacity-40" />
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-graphite">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              Para Gramado, Canela e Região
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-graphite sm:text-5xl lg:text-6xl text-balance">
              Modernize seu Negócio na{" "}
              <span className="text-emerald">Serra Gaúcha</span> e Venda Mais
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-soft sm:text-xl text-balance">
              Cardápios Digitais por QR Code, Sistemas de Agendamento Automático para Clínicas e
              Sites de Alta Conversão. Tecnologia sob medida para o comércio local.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg" />
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-graphite/20 px-6 py-4 text-sm font-semibold text-graphite transition-colors hover:bg-graphite hover:text-primary-foreground"
              >
                Ver soluções
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-soft">
              <span className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-emerald" />
                Atendimento local
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-emerald" />
                Suporte rápido
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-emerald" />
                Resultados mensuráveis
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl border border-border/60 bg-card p-8 shadow-2xl shadow-graphite/5">
              <div className="absolute -top-6 -right-6 rounded-2xl bg-graphite p-4 text-gold shadow-xl">
                <TrendingUp size={32} />
              </div>
              <div className="grid gap-6">
                <div className="flex items-center gap-4 rounded-2xl bg-muted p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                    <QrCode size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-graphite">Cardápio Digital</p>
                    <p className="text-sm text-slate-soft">QR Code em cada mesa</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-muted p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                    <CalendarDays size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-graphite">Agendamento Online</p>
                    <p className="text-sm text-slate-soft">24 horas por dia, 7 dias por semana</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-muted p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-graphite">Website Profissional</p>
                    <p className="text-sm text-slate-soft">Otimizado para Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const painSolutions = [
  {
    segment: "Restaurantes & Bares",
    pain: "Atendimento lento e garçons sobrecarregados",
    solution: "Cardápio Digital por QR Code rápido e sem filas",
    icon: QrCode,
  },
  {
    segment: "Clínicas & Estética",
    pain: "WhatsApp lotado de mensagens e faltas na agenda",
    solution: "Sistema de Agendamento Online 24/7 com confirmação automática",
    icon: CalendarDays,
  },
  {
    segment: "Comércios em Geral",
    pain: "Falta de presença digital profissional",
    solution: "Websites modernos e rápidos otimizados para o Google",
    icon: Globe,
  },
];

function PainSolutions() {
  return (
    <section id="solucoes" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald">
            Dor x Solução
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-graphite sm:text-4xl text-balance">
            Resolvemos os desafios reais do comércio local
          </h2>
          <p className="mt-4 text-lg text-slate-soft text-balance">
            Entendemos a realidade de Gramado, Canela e região. Cada solução é pensada para gerar
            mais agilidade, menos desperdício e mais vendas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painSolutions.map((item) => (
            <div
              key={item.segment}
              className="group relative rounded-3xl bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-graphite/5"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors group-hover:bg-graphite group-hover:text-gold">
                <item.icon size={28} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald">
                {item.segment}
              </p>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-soft/70">
                    Problema
                  </p>
                  <p className="mt-1 text-base text-graphite">{item.pain}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                  <p className="text-base font-medium text-graphite">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Cardápios Digitais com QR Code",
    description:
      "Substitua cardápios de papel por uma versão digital, rápida e sempre atualizada. O cliente escaneia e pede sem esperar.",
    icon: QrCode,
  },
  {
    title: "Sistemas de Agendamento Online",
    description:
      "Permita que pacientes e clientes marquem horários a qualquer momento. Confirmações automáticas e lembretes reduzem faltas.",
    icon: CalendarDays,
  },
  {
    title: "Websites & Landing Pages",
    description:
      "Sites modernos, rápidos e otimizados para Google. Convertam visitantes em clientes com uma presença digital profissional.",
    icon: Globe,
  },
  {
    title: "Automação de Atendimento WhatsApp",
    description:
      "Respostas automáticas, fluxos de atendimento e organização de conversas para nunca mais perder uma venda no WhatsApp.",
    icon: MessageCircle,
  },
];

function Services() {
  return (
    <section id="servicos" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald">
            Nossos Serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-graphite sm:text-4xl text-balance">
            Tecnologia pronta para impulsionar seu negócio
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg"
            >
              <div className="mb-5 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                <service.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-graphite">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Ana Luiza",
    business: "Restaurante em Gramado",
    text: "Depois do cardápio digital por QR Code, o atendimento ficou muito mais rápido. Os garçons conseguem atender mais mesas e a satisfação dos clientes aumentou.",
  },
  {
    name: "Carlos Eduardo",
    business: "Clínica de Estética em Canela",
    text: "O sistema de agendamento online mudou nossa rotina. As faltas caíram e o WhatsApp deixou de ser um caos. Suporte sempre rápido.",
  },
  {
    name: "Fernanda Rocha",
    business: "Loja de Artesanato",
    text: "Nosso site novo ficou lindo e já aparece no Google. Recebemos mais visitas e mensagens de clientes que antes nem sabiam que existíamos.",
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="bg-graphite py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Prova Social
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            O que dizem os comerciantes da região
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <Quote className="text-gold/60" size={32} />
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                {t.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold font-bold text-graphite">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">{t.name}</p>
                  <p className="text-sm text-primary-foreground/70">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-emerald py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
          Pronto para modernizar seu negócio na Serra Gaúcha?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 text-balance">
          Fale conosco pelo WhatsApp e descubra a melhor solução digital para o seu comércio.
        </p>
        <div className="mt-8">
          <WhatsAppButton
            size="lg"
            className="bg-white text-emerald hover:bg-white/95 hover:text-emerald"
          >
            Falar no WhatsApp Agora
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-graphite py-14 text-primary-foreground sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-graphite">
                <Sparkles size={18} strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-bold text-primary-foreground">
                Agiliza Serra
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Soluções digitais sob medida para comerciantes da Serra Gaúcha. Modernize, agilize e
              venda mais.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={16} className="text-gold" />
                {PHONE}
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MessageCircle size={16} className="text-gold" />
                WhatsApp: {PHONE}
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={16} className="text-gold" />
                Gramado, Canela e Região — RS
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Clock size={16} className="text-gold" />
                Atendimento de segunda a sexta
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground">
              Links Rápidos
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Início
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Agiliza Serra. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-white shadow-lg shadow-emerald/30 transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PainSolutions />
      <Services />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
