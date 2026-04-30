import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";
const WHATSAPP_URL = "https://wa.me/5551996691757";

export const metadata: Metadata = {
  title: "Caixas de Passagem · Central do Concreto",
  description: "Caixas de inspeção e sifão pra infraestrutura urbana e residencial.",
  alternates: { canonical: `${SITE_URL}/produtos/caixas-de-passagem` },
};

export default function CaixasDePassagemPage() {
  return (
    <>
      <section className="bg-cc-green py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Caixas de Passagem
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Caixas de inspeção e sifão pra infraestrutura urbana e residencial.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Eyebrow className="mb-4 justify-center">Em breve</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-medium text-cc-green mb-4">
            Página completa em construção
          </h2>
          <p className="text-base text-cc-gray-600 leading-relaxed mb-8">
            Estamos preparando a ficha técnica completa de caixas de passagem. Enquanto isso · pra
            orçamento ou dúvida · fala direto pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium transition-colors shadow-lg"
          >
            Falar no WhatsApp · (51) 99669-1757
          </a>
        </div>
      </section>
    </>
  );
}
