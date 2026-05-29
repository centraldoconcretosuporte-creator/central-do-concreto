import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/tubo-de-concreto/tipos-de-encaixe";
const WHATSAPP_URL = "https://wa.me/5551996691757";

const PAGE_TITLE = "Tubo de concreto: ponta e bolsa ou macho e fêmea? | Central do Concreto";
const PAGE_DESCRIPTION =
  "Ponta e bolsa (PB) ou macho e fêmea (MF)? Veja a diferença entre os encaixes do tubo de concreto pela NBR 8890 e qual usar em drenagem pluvial.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    locale: "pt_BR",
    siteName: "Central do Concreto",
  },
};

const faqs = [
  {
    q: "Qual a diferença entre encaixe PB e MF?",
    a: "O PB tem bolsa alargada com concreto adicional no encaixe. O MF tem entalhe a meia espessura da parede do tubo. Em peso, o MF é mais leve por não ter bolsa, o que favorece logística e velocidade de assentamento. Os dois são vedados com junta rígida nas linhas da Central.",
  },
  {
    q: "Posso usar tubo macho e fêmea em qualquer diâmetro?",
    a: "Sim · na faixa que a Central produz, 7 diâmetros do DN 200 ao DN 1000. Em diâmetros maiores que isso (DN 1200 e DN 1500), a oferta da Central é estrutural armado PA-1 ou PA-2, fora da linha simples.",
  },
  {
    q: "O tubo de concreto é o mesmo que manilha?",
    a: "Sim · manilha é o nome popular do tubo de concreto · termo do balcão usado em drenagem residencial e calçada. Na norma (NBR 8890) e no mercado técnico, o nome correto é tubo de concreto · a Central atende pelos dois.",
  },
  {
    q: "Os tubos da Central seguem a NBR 8890?",
    a: "Sim · toda a linha de drenagem pluvial da Central é fabricada conforme a ABNT NBR 8890:2020, que normatiza dimensões, classes de resistência e ensaios de aceitação dos tubos de concreto.",
  },
  {
    q: "O tubo ponta e bolsa é mais resistente que o macho e fêmea?",
    a: "O encaixe do PB é mais resistente que o do MF · a bolsa ganha concreto adicional, o entalhe do MF reduz parede. Mas a resistência total do tubo depende da classe (PA-1 ou PA-2 nas linhas armadas da Central, pela NBR 8890), não só do encaixe. Pra escolher a classe certa, ver a página de classes de carga.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://centraldoconcretoentrega.com.br/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tubo de concreto",
          item: "https://centraldoconcretoentrega.com.br/tubo-de-concreto",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tipos de encaixe",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

export default function TiposDeEncaixePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-cc-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/85"
          >
            <Link href="/" className="hover:text-white">
              Início
            </Link>
            <span aria-hidden="true">›</span>
            <Link href="/tubo-de-concreto" className="hover:text-white">
              Tubo de concreto
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white font-medium">Tipos de encaixe</span>
          </nav>

          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
            <Image
              src="/images/tubo-de-concreto/tubos-concreto-deposito-camionete-marca-central-concreto-035-central-concreto-ivoti.webp"
              alt="Pilha de tubos de concreto ponta e bolsa e macho e fêmea no depósito da Central do Concreto · Ivoti RS"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
            Tipos de encaixe de tubo de concreto
          </h1>

          <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              Ponta e bolsa (PB) e macho e fêmea (MF) são os encaixes do tubo de concreto pela NBR
              8890. Na Central, MF cobre DN 200 a 1000 (7 diâmetros), PB vem em DN 200, 500 e 600, e
              o estrutural armado (PA-1 e PA-2) vai de DN 200 a 1500 — todos com junta rígida.
            </p>
            <p>
              A escolha entre PB e MF considera diâmetro disponível, peso e logística do transporte
              e o tipo de obra de drenagem pluvial.
            </p>
            <p>
              Orçamento e prazo de entrega pelo WhatsApp{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cc-orange underline-offset-4 hover:text-white"
              >
                (51) 99669-1757
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <article className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 space-y-14">
          {/* H2 1 — O que é o encaixe ponta e bolsa (PB)? */}
          <section aria-labelledby="encaixe-pb">
            <h2
              id="encaixe-pb"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O que é o encaixe ponta e bolsa (PB)?
            </h2>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
              <Image
                src="/images/tubo-de-concreto/tubos-concreto-fileira-frontal-decrescente-bairro-residencial-030-central-concreto-ivoti.webp"
                alt="Fileira de tubos de concreto ponta e bolsa em ordem decrescente de diâmetro em bairro residencial · Central do Concreto · Ivoti RS"
                width={1600}
                height={1200}
                className="w-full h-full object-cover object-[center_40%]"
              />
            </div>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O encaixe ponta e bolsa tem uma ponta lisa em uma extremidade do tubo e uma bolsa
                alargada na outra. A ponta de um tubo entra na bolsa do seguinte e a junta é vedada
                com argamassa.
              </p>
              <p>
                A bolsa carrega mais concreto que o resto do tubo. É aí que o PB se diferencia do
                macho e fêmea · enquanto o MF reduz parede no encaixe, o PB acrescenta. A junta fica
                mais robusta, e a NBR 8890 libera a fabricação a partir de DN 200.
              </p>
              <p>
                O PB cobre toda a faixa que a Central produz · do DN 200 ao DN 1500 · em tubo
                simples (PS-1) ou armado (PA-1 e PA-2), com junta rígida em todas as opções. São
                mais de 20 modelos no catálogo · no balcão, também é chamado de manilha.
              </p>
              <div className="text-center">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                    "Olá! Quero saber qual encaixe de tubo de concreto serve pra minha obra.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
                >
                  Descobrir o encaixe certo · WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* H2 2 — O que é o encaixe macho e fêmea (MF)? */}
          <section aria-labelledby="encaixe-mf">
            <h2
              id="encaixe-mf"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O que é o encaixe macho e fêmea (MF)?
            </h2>
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-6">
              <Image
                src="/images/tubo-de-concreto/tubos-concreto-pre-entrega-estoque-008-central-concreto-ivoti.webp"
                alt="Tubos de concreto com encaixe macho e fêmea prontos para entrega no estoque · Central do Concreto · Ivoti RS"
                width={1600}
                height={1200}
                className="w-full h-full object-cover object-[center_35%]"
              />
            </div>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O encaixe macho e fêmea tem uma ponta saliente em uma extremidade do tubo (o macho)
                e um entalhe rebaixado na outra (a fêmea). A ponta entra no entalhe e a junta é
                vedada com argamassa.
              </p>
              <p>
                O entalhe é feito a meia espessura da parede do tubo. É aí que o MF se diferencia do
                PB · enquanto o PB acrescenta concreto na bolsa, o MF reduz parede no encaixe. Por
                não ter bolsa, o tubo MF é mais leve, o que favorece logística e velocidade de
                assentamento.
              </p>
              <p>
                Na Central, o MF cobre 7 diâmetros · do DN 200 ao DN 1000 · é a maior gama entre os
                encaixes da fábrica, com junta rígida em todas as opções. Aparece com mais
                frequência em drenagem pluvial urbana, galeria de bairro e travessias. Em dúvida
                sobre qual modelo serve · consulta técnica gratuita pelo WhatsApp{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  (51) 99669-1757
                </a>
                .
              </p>
            </div>
          </section>

          {/* H2 3 — Ponta e bolsa ou macho e fêmea: qual a diferença? */}
          <section aria-labelledby="pb-vs-mf">
            <h2
              id="pb-vs-mf"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Ponta e bolsa ou macho e fêmea: qual a diferença?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <Image
                src="/images/tubo-de-concreto/tubo-dn400-pa1.webp"
                alt="Ficha técnica · tubo de concreto DN 400 PA-1 ponta e bolsa · norma ABNT NBR 8890:2020"
                width={2100}
                height={1600}
                className="w-full h-auto rounded-lg border border-zinc-200"
              />
              <Image
                src="/images/tubo-de-concreto/tubo-dn600-pa1-mf.webp"
                alt="Ficha técnica · tubo de concreto DN 600 PA-1 macho e fêmea · norma ABNT NBR 8890:2020"
                width={2100}
                height={1600}
                className="w-full h-auto rounded-lg border border-zinc-200"
              />
            </div>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A diferença entre PB e MF está na espessura do encaixe e no peso do tubo. O PB
                ganha concreto na bolsa para uma junta mais robusta. O MF reduz parede no entalhe e
                fica mais leve.
              </p>
            </div>
            {/* SVG_PB_MF: corte longitudinal lado a lado, PB à esquerda mostrando aumento de espessura na bolsa, MF à direita mostrando entalhe a meia espessura, legenda apontando cada parte */}

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-cc-black text-white">
                  <tr>
                    <th className="text-left font-semibold px-4 py-3">Critério</th>
                    <th className="text-left font-semibold px-4 py-3">PB</th>
                    <th className="text-left font-semibold px-4 py-3">MF</th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Geometria do encaixe</td>
                    <td className="px-4 py-3">Bolsa alargada, concreto adicional</td>
                    <td className="px-4 py-3">Entalhe a meia espessura</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <td className="px-4 py-3 font-medium">Peso do tubo</td>
                    <td className="px-4 py-3">Maior (carrega a bolsa)</td>
                    <td className="px-4 py-3">Menor (sem bolsa)</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Junta</td>
                    <td className="px-4 py-3">Rígida (argamassa)</td>
                    <td className="px-4 py-3">Rígida (argamassa)</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <td className="px-4 py-3 font-medium">Diâmetros na Central</td>
                    <td className="px-4 py-3">DN 200 a 1500 (simples e armado)</td>
                    <td className="px-4 py-3">DN 200 a 1000 (7 modelos)</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Aplicação típica em pluvial</td>
                    <td className="px-4 py-3">Residencial e linha estrutural pesada</td>
                    <td className="px-4 py-3">Drenagem urbana e galeria pluvial</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Em dúvida na hora da escolha · consulta técnica gratuita pelo WhatsApp{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  (51) 99669-1757
                </a>
                .
              </p>
            </div>
          </section>

          {/* H2 4 — Junta rígida ou junta elástica: o que muda? */}
          <section aria-labelledby="junta-rigida-elastica">
            <h2
              id="junta-rigida-elastica"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Por que junta rígida é o padrão na drenagem pluvial
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A junta rígida é o padrão na drenagem pluvial porque une custo baixo, execução
                simples e décadas de uso em redes urbanas. Veda com argamassa de cimento aplicada
                depois da montagem · é o sistema usado em toda a linha de drenagem da Central · do
                loteamento à galeria.
              </p>
              <p>
                Para drenagem pluvial, redes viárias, galerias, bueiros, travessias e pontilhões, a
                junta rígida atende com tranquilidade. É o sistema fornecido pela Central em todas
                as linhas · tubo simples (PS-1 e PS-2), estrutural armado (PA-1 e PA-2), do DN 200
                ao DN 1500.
              </p>
            </div>
          </section>

          {/* H2 5 — Qual encaixe usar em cada tipo de obra? */}
          <section aria-labelledby="encaixe-por-obra">
            <h2
              id="encaixe-por-obra"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Qual encaixe usar em cada tipo de obra?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <Image
                src="/images/tubo-de-concreto/escavadeira-aplicando-tubos-concreto-obra-drenagem-real-048-central-concreto-ivoti.webp"
                alt="Escavadeira Yanmar aplicando tubo de concreto em obra de drenagem pluvial · Central do Concreto · Ivoti RS"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/images/tubo-de-concreto/tubos-concreto-encaixados-caixa-passagem-drenagem-pluvial-011-central-concreto-ivoti.webp"
                alt="Tubos de concreto encaixados em caixa de passagem em obra de drenagem pluvial · Central do Concreto · Ivoti RS"
                width={817}
                height={613}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Pra cada tipo de obra de drenagem pluvial, há um encaixe que combina melhor · a
                regra prática considera diâmetro, peso do tubo e logística do transporte até a obra.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-cc-black text-white">
                  <tr>
                    <th className="text-left font-semibold px-4 py-3">Tipo de obra</th>
                    <th className="text-left font-semibold px-4 py-3">Encaixe sugerido</th>
                    <th className="text-left font-semibold px-4 py-3">Diâmetro típico</th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Drenagem residencial e calçada</td>
                    <td className="px-4 py-3">MF (mais leve)</td>
                    <td className="px-4 py-3">DN 200 a 400</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <td className="px-4 py-3 font-medium">
                      Bueiro de via urbana e drenagem comercial
                    </td>
                    <td className="px-4 py-3">MF ou PB</td>
                    <td className="px-4 py-3">DN 500 a 600</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Galeria de bairro e travessia</td>
                    <td className="px-4 py-3">MF ou PB</td>
                    <td className="px-4 py-3">DN 600 a 1000</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <td className="px-4 py-3 font-medium">Galeria principal e drenagem pesada</td>
                    <td className="px-4 py-3">PA-1 ou PA-2 (estrutural armado)</td>
                    <td className="px-4 py-3">DN 600 a 1500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-sm italic text-cc-gray-700">
              Em todos os casos · junta rígida vedada com argamassa.
            </p>

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Quando MF e PB são opções, o MF costuma ganhar na logística · sem a bolsa o tubo é
                mais leve, o transporte rende mais por carga e o assentamento na vala fica mais
                rápido. Pra ver casos típicos por tipo de obra, a página de{" "}
                <Link
                  href="/tubo-de-concreto/aplicacoes"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  aplicações do tubo de concreto
                </Link>{" "}
                detalha cada situação.
              </p>
            </div>

            {/* CTA S1 — ski ramp: fecha a seção de escolha de encaixe */}
            <div className="mt-10 text-center">
              <p className="text-base md:text-lg text-cc-gray-700 mb-6 leading-relaxed">
                Mande o diâmetro e o tipo da obra · a Central indica o encaixe certo e o
                orçamento.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
              >
                Confirmar o encaixe da sua obra no WhatsApp
              </a>
            </div>
          </section>

          {/* H2 6 — Tipos de encaixe disponíveis na Central do Concreto */}
          <section aria-labelledby="encaixes-central">
            <h2
              id="encaixes-central"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Tipos de encaixe disponíveis na Central do Concreto
            </h2>
            <Image
              src="/images/tubo-de-concreto/diametros-variados-tubo-concreto-pronta-entrega-showroom-noturno-018-central-concreto-ivoti.webp"
              alt="Tubos de concreto em diâmetros variados expostos em showroom noturno destacando a pronta entrega · Central do Concreto · Ivoti RS"
              width={1920}
              height={1440}
              className="w-full h-auto rounded-lg mb-6"
            />
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A Central fornece mais de 25 medidas e modelos de tubo de concreto, todos com junta
                rígida · tubo macho e fêmea (DN 200 a 1000), tubo ponta e bolsa (DN 200, 500 e 600)
                e tubo estrutural armado PA-1 e PA-2 (DN 200 a 1500).
              </p>
              <p>
                Os tubos são fabricados em Ivoti conforme a NBR 8890 e ficam em pronta entrega no
                estoque. Frota própria atendendo Ivoti, Novo Hamburgo, Estância Velha, Dois Irmãos e
                demais cidades num raio de 50 km da serra gaúcha.
              </p>
              <p>
                Pra obra com especificação técnica (diâmetro,{" "}
                <Link
                  href="/tubo-de-concreto/classes-de-carga"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  classe
                </Link>
                , encaixe), manda a ficha pelo WhatsApp{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  (51) 99669-1757
                </a>{" "}
                · orçamento volta com base no projeto. Dúvida sobre medida ou modelo · consulta
                técnica gratuita pelo mesmo número.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-cc-gray-100 cc-faq" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2
            id="faq-title"
            className="text-2xl md:text-3xl font-bold text-cc-black mb-10 text-center leading-tight"
          >
            Perguntas frequentes sobre encaixes
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-cc-gray-200 rounded-lg px-5 py-4"
              >
                <summary className="text-base font-semibold text-cc-black cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>
                    <h3 className="inline">{f.q}</h3>
                  </span>
                  <span
                    className="text-cc-orange text-xl group-open:rotate-45 transition-transform shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-base text-cc-gray-700 leading-relaxed mt-3">
                  {f.q === "O tubo ponta e bolsa é mais resistente que o macho e fêmea?" ? (
                    <>
                      O encaixe do PB é mais resistente que o do MF · a bolsa ganha concreto
                      adicional, o entalhe do MF reduz parede. Mas a resistência total do tubo
                      depende da classe (PA-1 ou PA-2 nas linhas armadas da Central, pela NBR
                      8890), não só do encaixe. Pra escolher a classe certa, ver a página de{" "}
                      <Link
                        href="/tubo-de-concreto/classes-de-carga"
                        className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                      >
                        classes de carga
                      </Link>
                      .
                    </>
                  ) : (
                    f.a
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO_S1: vídeo curto da Central mostrando encaixe real de PB em obra, narração por IA, padrão do projeto (logo no topo, WhatsApp queimado a partir de 15s, trecho de entrega em 60-70%) */}

      {/* CTA FINAL */}
      <section className="bg-cc-black py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Mande foto ou medidas pelo WhatsApp · orçamento na hora ou em até 1 dia útil
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            Manda foto da obra ou as medidas (diâmetro, classe, quantidade) · fala direto com o
            André e ele te retorna com orçamento na hora ou em até 1 dia útil. Sem intermediário,
            sem formulário.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Falar no WhatsApp · (51) 99669-1757
          </a>
          <p className="mt-6 text-sm text-white/80">
            Endereço: Av. Bom Jardim, 149 — Loja 02 — Vista Alegre, Ivoti-RS
            <br />
            Atendimento: Ivoti e cidades em raio de 50 km
          </p>
        </div>
      </section>
    </>
  );
}
