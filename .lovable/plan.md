# Novo visual do site Agiliza Serra (base: arquivos enviados)

Reconstruir o site inteiro seguindo o estilo do material enviado (RelicVault): fundo escuro quase preto, céu de estrelas animado, tipografia serifada em maiúsculas com bastante espaçamento entre letras, detalhes em dourado e muito espaço em branco.

Todo o conteúdo continua o seu: Agiliza Serra, serviços, preços, depoimentos e o WhatsApp (54) 99949-6681.

## Identidade visual

- Fundo: grafite quase preto (#07090f), texto em bege claro (#EAE3D6).
- Destaque: dourado (#C89A3D), usado em bordas, links e botões.
- Títulos: fonte serifada elegante (Cinzel), em caixa alta e espaçada.
- Textos: fonte limpa (Inter).
- Cartões com vidro fosco, borda fina dourada e brilho suave no passar do mouse.

## Estrutura das páginas (mesma ordem da referência)

1. Topo fixo: marca "AGILIZA SERRA · Estúdio Digital", menu (Serviços, Para quem é, Como funciona, Planos) e botão "Falar no WhatsApp".
2. Abertura: céu estrelado animado, título grande em duas linhas ("Modernize seu negócio na Serra Gaúcha"), subtítulo, dois botões (WhatsApp e "Ver soluções") e uma linha de credibilidade.
3. Como funciona: quatro passos numerados 01–04 (Alinhamento, Design, Desenvolvimento, Entrega em até 48h).
4. O que fazemos: quatro blocos maiores com imagem — Cardápio Digital QR Code, Agendamento Online, Websites de alto padrão, Manutenção & Hospedagem, cada um com o preço "A partir de".
5. Para quem é: restaurantes, clínicas e salões, comércios, profissionais autônomos.
6. Depoimentos de clientes da região.
7. Bloco final de contato: chamada, formulário curto (nome, empresa, solução, WhatsApp) que abre a conversa no WhatsApp.
8. Rodapé com marca, navegação, contato e redes; botão flutuante de WhatsApp permanece.

## Animações

- Céu de estrelas em movimento lento no topo, leve e responsivo, desligado para quem prefere menos movimento.
- Entradas suaves por seção, título revelado palavra a palavra, brilho dourado no hover dos cartões e barra de progresso de rolagem.

## Detalhes técnicos

- Reescrever `src/styles.css` com os tokens do novo tema escuro/dourado e carregar Cinzel + Inter via `<link>` no `src/routes/__root.tsx`.
- Reescrever `src/routes/index.tsx` em componentes de seção, reaproveitando `Reveal`/`motion-kit` já existentes (adaptados ao tema escuro).
- Novo `src/components/starfield-background.tsx` em canvas puro (sem three.js, para manter o site leve), substituindo `bokeh-background.tsx`.
- Reaproveitar os mockups já existentes em `src/assets`; gerar novos apenas se algum card ficar sem imagem.
- Atualizar título, descrição e Open Graph da página inicial.
