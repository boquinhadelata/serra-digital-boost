# Abertura com celular e fundo de constelação

Deixar a primeira tela igual à estrutura do site de referência: texto de um lado, celular do outro e um fundo animado de constelação (estrelas ligadas por linhas que reagem ao mouse).

## O que muda na primeira tela

- Layout em duas colunas: à esquerda a etiqueta "Serra Gaúcha · Gramado · Canela", o título "Modernize seu negócio na Serra Gaúcha e venda mais", o texto de apoio, os dois botões e a linha com o telefone. À direita, um celular.
- No celular, a tela troca sozinha em ciclo entre três momentos (QR Code na mesa → cardápio aberto → agenda online), com uma linha de luz dourada passando por cima, como no site de referência. Abaixo do celular, uma legenda curta que acompanha cada momento ("Aponte a câmera…", "Cardápio na tela", "Agenda aberta 24h").
- O celular fica levemente inclinado, com brilho dourado ao redor, e endireita quando o visitante passa o mouse.
- No celular pequeno, o aparelho aparece abaixo do texto, centralizado.

## Fundo animado

- O fundo de estrelas atual vira uma constelação: pontos claros e dourados que se movem devagar e se ligam por linhas finas quando ficam próximos; perto do cursor as ligações acendem.
- Um véu escuro em degradê do lado esquerdo mantém o texto sempre legível.
- Quem tem redução de movimento ativada vê o fundo parado e o celular sem troca automática de telas.

## Detalhes técnicos

- `src/components/starfield-background.tsx` passa a desenhar também as linhas entre pontos próximos e a reagir ao ponteiro (`pointermove`/`pointerleave`, passivos), mantendo canvas puro, `pointer-events: none` e limite de partículas por área.
- Novo componente `src/components/hero-phone.tsx`: moldura do celular em CSS, três imagens em crossfade com `setInterval`, faixa de varredura animada e legenda sincronizada; respeita `prefers-reduced-motion`.
- `Hero` em `src/routes/index.tsx` vira grade `lg:grid-cols-[1.05fr_0.95fr]`, alinhada à esquerda; o mockup de notebook sai da abertura e passa a ilustrar o card de Websites, que já usa a mesma imagem.
- Telas do celular: geradas em `src/assets` (QR na mesa, cardápio aberto, agenda), reaproveitando o estilo dourado/escuro atual.
- Classes novas (`.hero-scrim`, moldura e varredura) em `src/styles.css`, com bloco de `prefers-reduced-motion`.
