import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import WhatsAppLink from "@/components/WhatsAppLink";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/tubo-de-concreto/gramado";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const WHATSAPP_CTA_MESSAGE = "Olá, quero orçar tubo de concreto para obra em Gramado.";
const WHATSAPP_CTA_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_CTA_MESSAGE)}`;

const PAGE_TITLE = "Tubo de concreto em Gramado para construtoras | Central do Concreto";
const PAGE_DESCRIPTION =
  "Tubo de concreto simples e armado do Ø20 ao Ø150 cm, PA1 a PA4, com entrega em Gramado programada pelo cronograma da obra. Orçamento pelo memorial.";

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

const linha = [
  { item: "Diâmetro", valor: "Ø20 ao Ø150 cm (DN 200 a DN 1500)" },
  { item: "Tipo", valor: "Simples ou armado · nos diâmetros grandes, a NBR 8890 exige armado" },
  { item: "Classe", valor: "PA1 e PA2 em estoque · PA3 e PA4 sob consulta" },
  { item: "Encaixe", valor: "Ponta e bolsa (PB) ou macho e fêmea (MF), conforme o diâmetro" },
  { item: "Junta", valor: "Rígida, vedada com argamassa" },
  { item: "Comprimento útil", valor: "1,00 m em todos os diâmetros" },
  { item: "Norma", valor: "ABNT NBR 8890:2020" },
];

const faqs = [
  {
    q: "A Central do Concreto entrega tubo de concreto em Gramado?",
    a: "Sim. Gramado está entre as cidades atendidas, com entrega em caminhão próprio e frete calculado pelo endereço da obra.",
  },
  {
    q: "A entrega acompanha o cronograma da obra?",
    a: "Sim. A Central programa a entrega pelo cronograma da obra. Basta mandar o memorial com a data prevista do primeiro trecho.",
  },
  {
    q: "PA3 e PA4 têm pronta entrega?",
    a: "Não. Saem sob consulta, dependendo do volume e do prazo. Em estoque ficam PA1 e PA2.",
  },
  {
    q: "A Central trabalha com junta elástica?",
    a: "Não. A linha inteira sai com junta rígida, vedada com argamassa, que é a da drenagem pluvial. Para esgoto sanitário com junta elástica, a Central orienta o caminho na conversa.",
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
          name: "Gramado",
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

export default function TuboGramadoPage() {
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
            <span className="text-white font-medium">Gramado</span>
          </nav>

          <Image
            src="/images/tubo-de-concreto/tubos-concreto-em-pe-galpao-producao-pre-moldados.webp"
            alt="Tubos de concreto em pé no piso de um galpão de produção de pré-moldados, com gaiolas de armadura e blocos de concreto ao fundo"
            width={1600}
            height={1200}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="w-full h-auto rounded-lg mb-6"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
            Tubo de concreto para obras em Gramado
          </h1>

          <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              A Central do Concreto entrega tubo de concreto simples e armado em Gramado, do Ø20
              ao Ø150 cm, nas classes PA1 a PA4 e com encaixe ponta e bolsa ou macho e fêmea
              conforme o diâmetro.
            </p>
            <p>
              Para orçar, mande o memorial da obra pelo WhatsApp{" "}
              <WhatsAppLink
                href={WHATSAPP_URL}
                source="tubo-gramado-hero"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cc-orange underline-offset-4 hover:text-white"
              >
                (51) 99669-1757
              </WhatsAppLink>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <article className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 space-y-14">
          {/* Contexto — chuva e solo de Gramado (pedido 85) */}
          <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
            <p>
              Em Gramado, drenagem é projeto, não acabamento. A média anual de chuva é de cerca de
              2.055 mm, na climatologia de 30 anos da Climatempo, e janeiro (222 mm) e outubro
              (221 mm) puxam o acumulado. O relevo vai de 500 a 900 m de altitude, sobre
              cambissolo, de profundidade variável e drenagem irregular, segundo a Embrapa Solos.
              Em setembro de 2023 a estação de Canela mediu 433,6 mm, contra média de 170 a 190 mm,
              no mês das rachaduras e dos deslizamentos na região.
            </p>
          </div>

          {/* H2 1 — O que a Central fornece para obra em Gramado? */}
          <section aria-labelledby="linha-gramado">
            <h2
              id="linha-gramado"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O que a Central fornece para obra em Gramado?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Em Gramado vale a linha inteira de tubo de concreto da Central, a mesma das outras
                cidades da região: tubo simples e armado, do Ø20 ao Ø150 cm, fabricado conforme a
                ABNT NBR 8890:2020. A tabela resume o que entra no orçamento.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <caption className="sr-only">
                  Linha de tubo de concreto da Central do Concreto para obras em Gramado
                </caption>
                <thead className="bg-cc-black text-white">
                  <tr>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Especificação
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      O que a Central fornece
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  {linha.map((l, i) => (
                    <tr
                      key={l.item}
                      className={`border-t border-cc-gray-200${i % 2 === 1 ? " bg-cc-gray-100/40" : ""}`}
                    >
                      <th scope="row" className="px-4 py-3 font-medium text-left">
                        {l.item}
                      </th>
                      <td className="px-4 py-3">{l.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Muro de arrimo e talude levam o{" "}
                <Link
                  href="/tubo-de-concreto/tubo-dreno"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  tubo dreno perfurado
                </Link>
                , do Ø20 ao Ø60 cm. O critério de cada classe está em{" "}
                <Link
                  href="/tubo-de-concreto/classes-de-carga"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  classes de carga
                </Link>
                , a tabela de carga por diâmetro em{" "}
                <Link
                  href="/tubo-de-concreto/diametros"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  diâmetros
                </Link>{" "}
                e a diferença entre PB e MF em{" "}
                <Link
                  href="/tubo-de-concreto/tipos-de-encaixe"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  tipos de encaixe
                </Link>
                .
              </p>
              <p>
                Em Gramado a construtora não pede tubo solto: pede o sistema junto — tubo, calha de
                drenagem (canaleta) e{" "}
                <Link
                  href="/produtos/caixas-de-passagem"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  caixa de passagem
                </Link>
                . No memorial, vale listar a rede inteira, não só os trechos de tubo.
              </p>
            </div>
          </section>

          {/* H2 2 — Como orçar pelo memorial da obra? */}
          <section aria-labelledby="memorial">
            <h2
              id="memorial"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Como orçar pelo memorial da obra?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Cada trecho do memorial vira uma linha do orçamento: diâmetro, classe, encaixe,
                junta e metragem. Uma linha como PA2 DN 600 PB JR, com os metros do trecho, já basta
                para orçar aquele trecho.
              </p>
              <p>
                A contagem de peças é a própria metragem, porque todo tubo tem 1,00 m útil em
                qualquer diâmetro.
              </p>
              <p>
                A resposta traz a ficha técnica do tubo, com os valores de carga do diâmetro e da
                classe pedidos.
              </p>
            </div>
          </section>

          {/* H2 3 — Como é a entrega em Gramado? */}
          <section aria-labelledby="entrega-gramado">
            <h2
              id="entrega-gramado"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Como é a entrega em Gramado?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A entrega em Gramado sai em caminhão próprio, programada pelo cronograma da obra. O
                frete é calculado pelo endereço de entrega.
              </p>
              <p>
                Gramado faz parte das{" "}
                <Link
                  href="/entregas"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  cidades atendidas
                </Link>{" "}
                pela Central, dentro do raio de cerca de 120 km a partir de Ivoti. Não há pedido
                mínimo, seja uma peça avulsa ou a rede inteira.
              </p>
            </div>

            {/* CTA — ski ramp: fecha a seção de entrega */}
            <div className="mt-10 text-center">
              <p className="text-base md:text-lg text-cc-gray-700 mb-6 leading-relaxed">
                Com a data prevista do primeiro trecho, a Central programa a entrega em Gramado.
              </p>
              <WhatsAppLink
                href={WHATSAPP_CTA_URL}
                source="tubo-gramado-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
              >
                Programar a entrega
              </WhatsAppLink>
            </div>
          </section>

          {/* H2 4 — A Central instala o tubo na obra? */}
          <section aria-labelledby="instalacao">
            <h2
              id="instalacao"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              A Central instala o tubo na obra?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Não. O fornecimento da Central termina com o tubo entregue na obra, e o
                assentamento é da equipe da construtora. Quando falta equipe para a rede, a Central
                indica uma empreiteira parceira da região.
              </p>
              <p>
                Para quem vai executar, a equipe técnica repassa as boas práticas de assentamento
                na vala: nivelamento, alinhamento, vedação da junta e declividade.
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
            Perguntas frequentes sobre tubo de concreto em Gramado
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
                <p className="text-base text-cc-gray-700 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cc-black py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Orçamento de tubo de concreto para obra em Gramado
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            Pelo WhatsApp, com o memorial ou as medidas da rede, a Central responde com o
            orçamento, a ficha técnica do tubo e o frete até a obra.
          </p>
          <WhatsAppLink
            href={WHATSAPP_URL}
            source="tubo-gramado-final"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Falar no WhatsApp · (51) 99669-1757
          </WhatsAppLink>
          <p className="mt-6 text-sm text-white/80">
            Endereço: Av. Bom Jardim, 149 — Loja 02 — Vista Alegre, Ivoti-RS
            <br />
            Atendimento: Ivoti e cidades em raio de 120 km
          </p>
        </div>
      </section>
    </>
  );
}
