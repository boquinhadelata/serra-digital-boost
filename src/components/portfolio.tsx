import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { WordsReveal } from "@/components/motion-kit";

import projMadruga from "@/assets/proj-madruga.jpg";
import projMadrugaMob from "@/assets/proj-madruga-mob.jpg";

/**
 * Mensagem própria do portfólio: quando o lead chega com este texto, a gente
 * sabe que foi o trabalho publicado que converteu, e não o topo do site.
 */
const WHATSAPP_PORTFOLIO =
  "https://wa.me/5554997104475?text=" +
  encodeURIComponent(
    "Olá! Vi o site que vocês fizeram para o Madruga Delivery e quero um assim para o meu negócio.",
  );

type Troca = { antes: string; depois: string };

type Projeto = {
  cliente: string;
  ramo: string;
  cidade: string;
  tipo: string;
  ano: string;
  resumo: string;
  trocas: Troca[];
  numeros: { valor: string; rotulo: string }[];
  url: string;
  dominio: string;
  shot: string;
  shotMob: string;
};

/**
 * Para somar um projeto, acrescente um item aqui e capture os prints para
 * src/assets. Use só número que dê para comprovar — portfólio com dado
 * inventado desmonta na primeira pergunta do cliente.
 */
const projetos: Projeto[] = [
  {
    cliente: "Madruga Delivery",
    ramo: "Hamburgueria",
    cidade: "Uberlândia, MG",
    tipo: "Cardápio digital com pedido no WhatsApp",
    ano: "2026",
    resumo:
      "A hamburgueria vendia por WhatsApp mandando três imagens de cardápio, uma a uma. Cada pedido virava uma conversa de ida e volta para escolher item por item e somar o total na mão.",
    trocas: [
      { antes: "Três imagens soltas no WhatsApp", depois: "Um endereço que abre em um toque" },
      {
        antes: "Pedido montado na conversa, item por item",
        depois: "Pedido chega escrito, somado e conferido",
      },
      { antes: '"Tá aberto?" toda noite', depois: "O site responde sozinho pelo horário" },
      { antes: "Mudar preço = refazer a arte inteira", depois: "Mudar preço = trocar um número" },
    ],
    numeros: [
      { valor: "56 KB", rotulo: "a página inteira" },
      { valor: "0", rotulo: "app ou cadastro" },
      { valor: "1 min", rotulo: "para reajustar o cardápio" },
    ],
    url: "https://madrugadelivery.netlify.app",
    dominio: "madrugadelivery.netlify.app",
    shot: projMadruga,
    shotMob: projMadrugaMob,
  },
];

/** Moldura de navegador em volta do print, com a barra de endereço real. */
function Janela({ src, alt, dominio }: { src: string; alt: string; dominio: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_oklch(0_0_0_/_0.8)]">
      <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
        </span>
        <span className="truncate rounded-md bg-background/60 px-3 py-1 text-[11px] text-muted-foreground">
          {dominio}
        </span>
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1280}
        height={800}
        className="block w-full transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
      />
    </div>
  );
}

function Caso({ p, indice }: { p: Projeto; indice: number }) {
  return (
    <article className="paper gold-glow overflow-hidden rounded-3xl p-6 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <Reveal variant="scale" delay={indice * 90}>
          <div className="relative pb-14 sm:pb-0 sm:pl-14">
            <Janela src={p.shot} alt={`Site da ${p.cliente} no computador`} dominio={p.dominio} />
            <img
              src={p.shotMob}
              alt={`Site da ${p.cliente} no celular`}
              loading="lazy"
              width={440}
              height={952}
              className="absolute bottom-0 left-0 w-24 rounded-[1.1rem] border-4 border-secondary shadow-[0_24px_50px_-20px_oklch(0_0_0_/_0.9)] sm:w-28 lg:w-32"
            />
          </div>
        </Reveal>

        <Reveal variant="up" delay={indice * 90 + 120}>
          <div>
            <p className="eyebrow">
              {p.tipo} <span className="text-muted-foreground">· {p.ano}</span>
            </p>

            <h3 className="mt-4 font-display text-2xl leading-tight sm:text-3xl">{p.cliente}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {p.ramo} · {p.cidade}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.resumo}</p>

            {/* o que mudou na prática — é aqui que o próximo cliente se reconhece */}
            <ul className="mt-8 space-y-3">
              {p.trocas.map((t) => (
                <li
                  key={t.depois}
                  className="grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr] sm:gap-3"
                >
                  <span className="text-sm text-muted-foreground line-through decoration-border">
                    {t.antes}
                  </span>
                  <ArrowRight
                    className="hidden h-4 w-4 shrink-0 text-accent sm:block"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-foreground">{t.depois}</span>
                </li>
              ))}
            </ul>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase"
            >
              Abrir o site e conferir <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* números verificáveis: qualquer um pode abrir o site e checar */}
      <Reveal variant="up" delay={indice * 90 + 200}>
        <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {p.numeros.map((n) => (
            <div key={n.rotulo} className="bg-card px-6 py-6 text-center">
              <dt className="sr-only">{n.rotulo}</dt>
              <dd>
                <span className="block font-display text-3xl text-accent">{n.valor}</span>
                <span className="mt-1 block text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {n.rotulo}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </article>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Portfólio</p>
          <WordsReveal
            as="h2"
            text="O que muda quando o negócio sai do improviso"
            className="mt-5 font-display text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.15]"
          />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Site publicado, com endereço para você abrir e conferir agora. Veja o antes e o depois
            de quem já fez.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {projetos.map((p, i) => (
            <Caso key={p.cliente} p={p} indice={i} />
          ))}
        </div>

        {/* chamada de venda: a objeção já foi respondida, agora é a hora de pedir */}
        <Reveal variant="up" delay={140}>
          <div className="paper mt-10 flex flex-col items-center gap-6 rounded-3xl p-8 text-center md:flex-row md:justify-between md:p-10 md:text-left">
            <div>
              <p className="font-display text-xl leading-snug sm:text-2xl">
                Seu negócio ainda vende mandando print no WhatsApp?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                A gente monta o seu do mesmo jeito. Orçamento na hora, sem compromisso.
              </p>
            </div>
            <a
              href={WHATSAPP_PORTFOLIO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase transition-transform duration-300 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Quero um assim
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
