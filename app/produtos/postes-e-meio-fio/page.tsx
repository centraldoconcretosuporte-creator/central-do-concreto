import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import WhatsAppLink from "@/components/WhatsAppLink";

const SITE_URL = "https://centraldoconcretoentrega.com.br";
const WHATSAPP_URL = "https://wa.me/5551996691757";

export const metadata: Metadata = {
  title: "Postes de Concreto: Padrão RGE, Extensão Rural e Mourão | Central do Concreto",
  description:
    "Poste padrão RGE para entrada de energia, poste de extensão rural e mourão de concreto. Pronta entrega em Ivoti-RS com entrega na Serra, Vale dos Sinos e Litoral.",
  alternates: { canonical: `${SITE_URL}/produtos/postes-e-meio-fio` },
};

export default function PostesEMeioFioPage() {
  const ctaMessage = "Olá, quero orçar poste de concreto.";
  const ctaUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(ctaMessage)}`;

  return (
    <>
      <section className="bg-cc-black py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Postes e meio-fio de concreto
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Poste padrão RGE · extensão rural · mourão de concreto.
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-8">Linhas de poste</Eyebrow>

        <section id="poste-padrao-rge" className="scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Poste padrão RGE
          </h2>
          <p className="text-lg leading-relaxed mb-12">
            Poste de concreto para entrada de energia no padrão exigido pela
            concessionária. É a peça central de uma ligação nova, de um aumento
            de carga ou da regularização de um padrão reprovado na vistoria. A
            estrutura é dimensionada para receber a caixa de medição e sustentar
            a rede conforme a exigência da RGE. Antes de pedir, confirme com o
            eletricista qual padrão a sua instalação exige. Com essa definição em
            mãos, chame no WhatsApp — a Central verifica a disponibilidade e o
            prazo de entrega.
          </p>
        </section>

        <section id="extensao-rural" className="scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Extensão rural
          </h2>
          <p className="text-lg leading-relaxed mb-12">
            Poste de rede elétrica para área rural: leva a energia da rede até
            pontos afastados da via — galpão, aviário, sistema de irrigação, casa
            de moradia no interior do terreno. É a linha pensada para a
            propriedade que precisa vencer a distância entre a rede e o ponto de
            consumo. A entrega chega ao interior dos municípios da região.
          </p>
        </section>

        <section id="mourao-cerca" className="scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mourão de concreto para cerca
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Mourão de concreto para cerca rural e divisa de terreno. Não
            apodrece, não pega cupim e não pede a manutenção que o mourão de
            madeira cobra.{" "}
            <Link
              href="/mourao-de-concreto"
              className="text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Veja a página completa de mourão de concreto
            </Link>
            .
          </p>
        </section>
      </article>

      <section className="bg-cc-black py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Peça seu orçamento de poste no WhatsApp.
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Poste padrão RGE, extensão rural e mourão de concreto, com pronta
            entrega em Ivoti e entrega na Serra, no Vale dos Sinos e no Litoral.
            Diga o que a sua obra precisa e a cidade que a Central confirma
            disponibilidade e prazo.
          </p>
          <WhatsAppLink
            href={ctaUrl}
            source="postes-e-meio-fio-final"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar no WhatsApp · (51) 99669-1757
          </WhatsAppLink>
        </div>
      </section>
    </>
  );
}
