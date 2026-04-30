import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";

export const metadata: Metadata = {
  title: "Contato · Central do Concreto · WhatsApp e endereço",
  description:
    "Fale com a Central do Concreto. WhatsApp, endereço da fábrica em Ivoti-RS e horário de atendimento.",
  alternates: { canonical: `${SITE_URL}/contato` },
};

export default function ContatoPage() {
  return (
    <>
      <section className="relative w-full min-h-[280px] md:min-h-[360px] flex items-center justify-center overflow-hidden">
        <Image
          src="/contato/hero.webp"
          alt="Loja física da Central do Concreto"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-green/75" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            Fale com a Central
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            WhatsApp · endereço · horário de atendimento
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://wa.me/5551996691757"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cc-cream border border-cc-gray-200 hover:border-cc-green rounded-xl p-6 transition-colors"
            >
              <Eyebrow className="mb-3">WhatsApp</Eyebrow>
              <p className="text-2xl font-medium text-cc-green mb-2 group-hover:text-cc-whatsapp transition-colors">
                (51) 99669-1757
              </p>
              <p className="text-sm text-cc-gray-600">Resposta rápida · clique pra abrir conversa</p>
            </a>

            <div className="bg-cc-cream border border-cc-gray-200 rounded-xl p-6">
              <Eyebrow className="mb-3">Endereço</Eyebrow>
              <p className="text-base font-medium text-cc-green leading-relaxed mb-2">
                Av. Bom Jardim, 149 · Loja 04
                <br />
                Vista Alegre · Ivoti-RS
                <br />
                CEP 93900-000
              </p>
              <a
                href="https://maps.google.com/?q=Av.+Bom+Jardim,+149,+Ivoti-RS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cc-coral hover:underline"
              >
                Abrir no Google Maps →
              </a>
            </div>

            <div className="bg-cc-cream border border-cc-gray-200 rounded-xl p-6">
              <Eyebrow className="mb-3">Horário</Eyebrow>
              <p className="text-base text-cc-green leading-relaxed">
                Segunda a Sexta · 8h às 18h
                <br />
                Sábado · 8h às 12h
                <br />
                Domingo · fechado
              </p>
            </div>

            <a
              href="https://instagram.com/centraldoconcretors"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cc-cream border border-cc-gray-200 hover:border-cc-green rounded-xl p-6 transition-colors"
            >
              <Eyebrow className="mb-3">Instagram</Eyebrow>
              <p className="text-2xl font-medium text-cc-green mb-2 group-hover:text-cc-coral transition-colors">
                @centraldoconcretors
              </p>
              <p className="text-sm text-cc-gray-600">Veja obras prontas e novidades</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cc-gray-100">
        <div className="aspect-[16/7] md:aspect-[16/5] w-full">
          <iframe
            src="https://www.google.com/maps?q=Av.+Bom+Jardim,+149,+Ivoti-RS&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Central do Concreto"
          />
        </div>
      </section>
    </>
  );
}
