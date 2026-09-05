import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Menu,
  MessageCircle,
  QrCode,
  Quote,
  Scissors,
  ServerCog,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { StarfieldBackground } from "@/components/starfield-background";
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
import mockupHospedagem from "@/assets/mockup-hospedagem.jpg";

const WHATSAPP =
  "https://wa.me/5554999496681?text=Ol%C3%A1!%20Quero%20modernizar%20meu%20neg%C3%B3cio%20com%20a%20Agiliza%20Serra.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agiliza Serra · Modernize seu negócio na Serra Gaúcha" },
      {
        name: "description",
        content:
          "Cardápios digitais em QR Code, agendamento online, sites de alto padrão e hospedagem para negócios de Gramado, Canela e região. Entrega em até 48h.",
      },
      { property: "og:title", content: "Agiliza Serra · Modernize seu negócio na Serra Gaúcha" },
      {
        property: "og:description",
        content:
          "Cardápio digital, agendamento online e sites profissionais sob medida. Fale no WhatsApp e receba sua proposta hoje.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const steps = [
  {
    n: "01",
    title: "Alinhamento",
    text: "Conversa rápida no WhatsApp para entender seu negócio, seu público e o que você precisa vender mais.",
  },
  {
    n: "02",
    title: "Design",
    text: "Criamos a identidade da sua página com fotos, cores e textos que combinam com a sua marca.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    text: "Montagem, testes em celular e computador e ajustes finos de velocidade e busca no Google.",
  },
  {
    n: "04",
    title: "Entrega em 48h",
    text: "Seu projeto no ar em até 48 horas, com treinamento simples e suporte direto pelo WhatsApp.",
  },
];

const services = [
  {
    icon: QrCode,
    title: "Cardápio Digital QR Code",
    text: "Seu cardápio na mesa em um QR Code: fotos dos pratos, preços sempre atualizados e nenhuma impressão nova a cada mudança.",
    price: "A partir de R$ 680",
    extra: "+ R$ 80/mês",
    image: mockupCardapio,
    points: ["Atualização instantânea", "Fotos que dão fome", "Sem aplicativo para o cliente"],
  },
  {
    icon: Calendar,
    title: "Agendamento Online",
    text: "Sua agenda aberta 24 horas. O cliente marca sozinho, recebe confirmação automática e você reduz faltas.",
    price: "A partir de R$ 980",
    extra: "+ R$ 158/mês",
    image: mockupAgendamento,
    points: ["Confirmação automática", "Agenda 24h", "Menos faltas"],
  },
  {
    icon: Globe,
    title: "Websites de Alto Padrão",
    text: "Site exclusivo, rápido e feito para converter visitante em cliente, com estrutura pronta para aparecer no Google.",
    price: "A partir de R$ 790",
    extra: "Projeto completo",
    image: mockupWebsite,
    points: ["Design sob medida", "Carregamento rápido", "Otimizado para Google"],
  },
  {
    icon: ServerCog,
    title: "Manutenção & Hospedagem",
    text: "Seu site sempre no ar, seguro, com backup, atualizações e alterações de conteúdo sempre que precisar.",
    price: "A partir de R$ 180/mês",
    extra: "Suporte incluso",
    image: mockupHospedagem,
    points: ["Backup e segurança", "Alterações inclusas", "Suporte no WhatsApp"],
  },
];

const audiences = [
  {
    icon: Quote,
    title: "Restaurantes e cafés",
    text: "Cardápio digital sempre atualizado, sem custo de reimpressão a cada troca de preço.",
  },
  {
    icon: Stethoscope,
    title: "Clínicas e consultórios",
    text: "Agenda organizada, confirmações automáticas e muito menos horários vazios.",
  },
  {
    icon: Scissors,
    title: "Salões e barbearias",
    text: "Clientes marcando sozinhos pelo celular, a qualquer hora, sem travar seu atendimento.",
  },
  {
    icon: Building2,
    title: "Comércios da região",
    text: "Uma vitrine digital profissional que passa confiança para o turista e para o morador.",
  },
  {
    icon: UserRound,
    title: "Profissionais autônomos",
    text: "Presença digital de gente grande, com preço que cabe no orçamento de quem está começando.",
  },
];

const testimonials = [
  {
    quote:
      "Trocamos o cardápio de papel pelo QR Code e nunca mais paramos para reimprimir. Os clientes elogiam as fotos toda semana.",
    name: "Marina Bertoldi",
    role: "Cantina Bertoldi · Gramado",
  },
  {
    quote:
      "A agenda online organizou a clínica inteira. As faltas caíram muito e a recepção ficou livre para atender melhor.",
    name: "Dr. Rafael Cardoso",
    role: "Clínica Vita · Canela",
  },
  {
    quote:
      "O site ficou lindo e rápido. Em duas semanas começamos a receber pedidos de orçamento direto pelo WhatsApp.",
    name: "Tiago Menezes",
    role: "Menezes Móveis · Nova Petrópolis",
  },
];

const marquee = [
  "Cardápio digital",
  "Agendamento online",
  "Sites de alto padrão",
  "Hospedagem e suporte",
  "Entrega em 48h",
  "Serra Gaúcha",
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/40 font-display text-sm text-accent">
            AS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm tracking-[0.22em] text-foreground uppercase">
              Agiliza Serra
            </span>
            <span className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              Estúdio Digital
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
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
            className="hidden rounded-full border border-accent/40 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-accent uppercase transition-colors duration-300 hover:bg-accent hover:text-accent-foreground sm:inline-flex"
          >
            Falar no WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background px-6 pb-6 md:hidden"
        >
          <div className="flex flex-col gap-4 pt-4">
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
              className="rounded-full bg-accent px-5 py-3 text-center text-xs font-semibold tracking-[0.14em] text-accent-foreground uppercase"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative px-4 pt-36 pb-24 text-center sm:px-8 sm:pt-48">
      <div className="mx-auto max-w-4xl">
        <Reveal variant="up">
          <span className="pill">Serra Gaúcha · Gramado · Canela</span>
        </Reveal>

        <WordsReveal
          as="h1"
          text="Modernize seu negócio na Serra Gaúcha e venda mais."
          className="mt-8 font-display text-[clamp(2.2rem,6.4vw,4.6rem)] leading-[1.08] tracking-[0.01em]"
        />

        <Reveal variant="up" delay={160}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cardápios digitais em QR Code, agendamento online e sites profissionais de alto padrão —
            criados sob medida para restaurantes, clínicas e comércios da região, com entrega em até
            48 horas.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
              >
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-xs font-semibold tracking-[0.16em] uppercase transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Ver soluções ↓
              </a>
            </Magnetic>
          </div>

          <p className="mt-8 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            (54) 99949-6681 · Atendimento em toda a Serra Gaúcha · Entrega em até 48h
          </p>
        </Reveal>

        <Reveal variant="scale" delay={240}>
          <Parallax distance={40} className="mt-16">
            <div className="animate-soft-float paper overflow-hidden rounded-3xl p-3 shadow-[0_60px_120px_-60px_oklch(0.72_0.11_80_/_0.5)]">
              <img
                src={mockupWebsite}
                alt="Exemplo de site de alto padrão criado pela Agiliza Serra"
                className="w-full rounded-2xl object-cover"
                loading="eager"
              />
              <div className="flex items-center justify-between px-3 py-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  Projeto no ar
                </span>
                <span>agilizaserranet.com</span>
              </div>
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="border-y border-border/60 py-5">
      <VelocityMarquee
        items={marquee}
        className="eyebrow text-[0.68rem] text-muted-foreground"
      />
    </div>
  );
}

function SectionHead({
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
      <p className="eyebrow">{eyebrow}</p>
      <WordsReveal
        as="h2"
        text={title}
        className="mt-5 font-display text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.15]"
      />
      {text && <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>}
    </Reveal>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="px-4 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          eyebrow="Como funciona"
          title="Do primeiro contato ao projeto no ar em 48 horas"
          text="Você conversa uma vez com a gente e cuidamos do resto: criação, testes, publicação e treinamento."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} variant="up" delay={i * 110}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
                <span className="font-display text-3xl text-accent">{s.n}</span>
                <h3 className="mt-6 font-display text-lg tracking-[0.08em] uppercase">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="px-4 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          eyebrow="O que fazemos"
          title="Tudo o que seu negócio precisa para vender online"
          text="Soluções prontas para usar, com preço transparente e suporte direto pelo WhatsApp."
        />

        <div className="mt-16 space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 90}>
              <article
                className={`paper gold-glow grid gap-8 overflow-hidden rounded-3xl p-6 md:grid-cols-2 md:items-center md:p-8 ${
                  i % 2 === 1 ? "md:[&>figure]:order-first" : ""
                }`}
              >
                <div>
                  <span className="inline-flex items-center gap-3 text-accent">
                    <s.icon className="h-6 w-6" />
                    <span className="eyebrow">0{i + 1}</span>
                  </span>
                  <h3 className="mt-5 font-display text-2xl leading-tight sm:text-3xl">{s.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <span className="font-display text-xl text-accent">{s.price}</span>
                    <span className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                      {s.extra}
                    </span>
                  </div>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase link-underline"
                  >
                    Quero este <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <figure className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-105 md:h-80"
                  />
                </figure>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section id="para-quem" className="px-4 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          eyebrow="Para quem é"
          title="Um estúdio, cinco jeitos de usar"
          text="Atendemos quem vive do dia a dia da Serra: gastronomia, saúde, beleza, comércio e serviços."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} variant="blur" delay={i * 90}>
              <div className="paper gold-glow h-full rounded-3xl p-8">
                <a.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-6 font-display text-lg tracking-[0.06em] uppercase">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="px-4 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead eyebrow="Depoimentos" title="Quem já modernizou o próprio negócio" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} variant="up" delay={i * 110}>
              <figure className="paper gold-glow flex h-full flex-col justify-between rounded-3xl p-8">
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-6 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="font-display text-sm tracking-[0.1em] uppercase">{t.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
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
    solucao: "Cardápio Digital QR Code",
    whatsapp: "",
  });

  const message = `Olá! Sou ${form.nome || "..."}${form.empresa ? ` da ${form.empresa}` : ""}. Tenho interesse em: ${form.solucao}. Meu WhatsApp: ${form.whatsapp || "..."}`;
  const link = `https://wa.me/5554999496681?text=${encodeURIComponent(message)}`;

  const field =
    "w-full rounded-full border border-border bg-background/60 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors";

  return (
    <section id="contato" className="px-4 py-20 sm:px-8 sm:py-28">
      <Reveal variant="scale" className="mx-auto max-w-[1100px]">
        <div className="paper relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
          <div className="pointer-events-none absolute -top-28 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Contato</p>
              <WordsReveal
                as="h2"
                text="Peça seu orçamento sem compromisso"
                className="mt-5 font-display text-[clamp(1.7rem,3.6vw,2.8rem)] leading-[1.15]"
              />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Conte o que você precisa. Respondemos rápido, com uma proposta clara e um prazo real
                de entrega.
              </p>
              <Magnetic className="mt-8">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
                >
                  <MessageCircle className="h-4 w-4" />
                  (54) 99949-6681
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
                <option className="bg-background">Cardápio Digital QR Code</option>
                <option className="bg-background">Agendamento Online</option>
                <option className="bg-background">Website de alto padrão</option>
                <option className="bg-background">Manutenção & Hospedagem</option>
                <option className="bg-background">Outro projeto</option>
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
                className="w-full rounded-full bg-accent px-7 py-4 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase transition-transform duration-300 hover:scale-[1.02]"
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
    <footer className="px-4 pt-12 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
          <div>
            <span className="font-display text-lg tracking-[0.22em] uppercase">Agiliza Serra</span>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Estúdio digital da Serra Gaúcha: cardápios digitais, agendamento online e sites de
              alto padrão para quem quer vender mais.
            </p>
          </div>
          <div>
            <p className="eyebrow">Navegação</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline text-muted-foreground hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contato</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-5 inline-flex items-center gap-2 text-sm"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors duration-300 hover:border-accent hover:text-accent"
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
      <StarfieldBackground />
      <ScrollProgress />
      <StudioCursor />

      <Header />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Services />
        <Audiences />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="animate-halo fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_18px_40px_-18px_oklch(0.72_0.11_80_/_0.8)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
