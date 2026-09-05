import { useEffect, useState } from "react";

import telaQrcode from "@/assets/tela-qrcode.jpg";
import telaCardapio from "@/assets/tela-cardapio.jpg";
import telaAgenda from "@/assets/tela-agenda.jpg";

const screens = [
  { src: telaQrcode, alt: "Cliente apontando a câmera para o QR Code na mesa", caption: "Aponte a câmera…" },
  { src: telaCardapio, alt: "Cardápio digital aberto no celular", caption: "Cardápio na tela" },
  { src: telaAgenda, alt: "Agendamento online aberto no celular", caption: "Agenda aberta 24h" },
];

export function HeroPhone() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % screens.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="hero-phone">
        <div className="hero-phone-screen">
          {screens.map((s, idx) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={576}
              height={1152}
              loading={idx === 0 ? "eager" : "lazy"}
              className="hero-phone-img"
              style={{ opacity: idx === i ? 1 : 0 }}
            />
          ))}
          <span className="hero-scanline" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-6 text-xs tracking-[0.22em] text-muted-foreground uppercase">
        {screens[i]!.caption}
      </p>
    </div>
  );
}

export default HeroPhone;
