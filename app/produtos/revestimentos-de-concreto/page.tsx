import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://centraldoconcretoentrega.com.br";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const PAGE_URL = `${SITE_URL}/produtos/revestimentos-de-concreto`;
const PAGE_TITLE = "Revestimentos de Concreto em Ivoti-RS · Central do Concreto";
const PAGE_DESCRIPTION =
  "Placas e mosaicos de concreto pré-moldado em Ivoti-RS. Ripado, mosaico 3D e revestimento personalizado.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "pt_BR",
    siteName: "Central do Concreto",
  },
};

export default function RevestimentosDeConcretoPage() {
  return (
    <>
      <section className="bg-cc-black py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Revestimentos de Concreto
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Placas e mosaicos de concreto pré-moldado · ripado, mosaico 3D e modelos personalizados.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Eyebrow className="mb-4 justify-center">Em breve</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-medium text-cc-black mb-4">
            Página completa em construção
          </h2>
          <p className="text-base text-cc-gray-600 leading-relaxed mb-8">
            Fabricamos revestimentos de concreto pré-moldado em Ivoti-RS, com formatos variados como
            placas ripadas, mosaico 3D e modelos personalizados. Estrutura reforçada e durabilidade
            superior à madeira ou cerâmica em áreas externas. Ficha técnica completa em breve · já
            está no catálogo · pra orçamento ou dúvida fala direto pelo WhatsApp.
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
