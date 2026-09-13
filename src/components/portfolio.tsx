import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { WordsReveal } from "@/components/motion-kit";

import projMadruga from "@/assets/proj-madruga.jpg";
import projMadrugaMob from "@/assets/proj-madruga-mob.jpg";

type Projeto = {
  cliente: string;
  ramo: string;
  cidade: string;
  tipo: string;
  ano: string;
  desafio: string;
  entrega: string;
  destaques: string[];
  url: string;
  dominio: string;
  shot: string;
  shotMob: string;
};

/**
 * Para somar um projeto, acrescente um item aqui e capture os prints para
 * src/assets. Com mais de um, a seção passa a empilhar os estudos de caso.
 */
const projetos: Projeto[] = [
  {
    cliente: "Madruga Delivery",
    ramo: "Hamburgueria",
    cidade: "Uberlândia, MG",
    tipo: "Cardápio digital com pedido no WhatsApp",
    ano: "2026",
    desafio:
      "O cardápio existia só como três artes de imagem, mandadas uma a uma no WhatsApp. Cada pedido virava uma conversa de ida e volta para montar item por item e somar o total na mão.",
    entrega:
      "Uma página com o cardápio inteiro e uma comanda que soma sozinha. O cliente toca nos itens e o pedido chega escrito no WhatsApp da loja, com quantidades e total prontos.",
    destaques: [
      "O pedido chega pronto, sem ninguém digitar nada",
      "Avisa sozinho se está aberto e quando reabre",
      "Abre em 56 KB, rápido até no 4G",
      "Reajuste de preço muda um número só",
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
    <article className="paper gold-glow grid gap-10 rounded-3xl p-6 md:p-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
      {/* prints: o celular encosta na quina do desktop */}
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
          {/* como texto corrido, pra no celular o ano não cair sozinho numa linha */}
          <p className="eyebrow">
            {p.tipo} <span className="text-muted-foreground">· {p.ano}</span>
          </p>

          <h3 className="mt-4 font-display text-2xl leading-tight sm:text-3xl">{p.cliente}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {p.ramo} · {p.cidade}
          </p>

          <dl className="mt-7 space-y-5">
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                O problema
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desafio}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                O que entregamos
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.entrega}</dd>
            </div>
          </dl>

          <ul className="mt-7 space-y-2">
            {p.destaques.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {d}
              </li>
            ))}
          </ul>

          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase"
          >
            Ver o site no ar <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
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
            text="Trabalho nosso, no ar, funcionando"
            className="mt-5 font-display text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.15]"
          />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Não é imagem de exemplo: é site publicado, com endereço para você abrir e conferir.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {projetos.map((p, i) => (
            <Caso key={p.cliente} p={p} indice={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
