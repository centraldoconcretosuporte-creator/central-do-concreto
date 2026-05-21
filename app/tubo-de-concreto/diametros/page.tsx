import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/tubo-de-concreto/diametros";
const WHATSAPP_URL = "https://wa.me/5551996691757";

const PAGE_TITLE =
  "Diâmetros do tubo de concreto: do Ø20 ao Ø150 cm e como escolher | Central do Concreto";
const PAGE_DESCRIPTION =
  "Tabela NBR 8890 completa, equivalência mm e cm, faixa de diâmetros e como escolher o certo. Do Ø20 ao Ø150 cm, pronta entrega em Ivoti e região.";

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
    q: "Qual a diferença entre DN e diâmetro externo?",
    a: "DN é o diâmetro interno do tubo — onde a água passa. O diâmetro externo inclui a parede de concreto, que tem entre 30 e 100 mm de espessura. Um tubo DN 400 (Ø40 cm interno) pode ter cerca de Ø48 cm externo.",
  },
  {
    q: "Como saber qual classe (PA1, PA2, PA3 ou PA4) eu preciso?",
    a: "A classe depende da carga sobre o tubo: profundidade da vala, peso do aterro e tipo de tráfego acima. PA1 atende tráfego leve e residencial. PA2 cobre o urbano comum. PA3 e PA4 cobrem rodovia e indústria. Em projetos com engenheiro, ele especifica. Em obras menores, a Central orienta.",
  },
  {
    q: "Por que cada fabricante tem uma faixa diferente de diâmetros?",
    a: "Porque o equipamento de fabricação tem limite. Cada fábrica investe em fôrmas e prensas para uma faixa específica. A Central trabalha do Ø20 ao Ø150 cm — faixa que cobre a quase totalidade das obras de drenagem.",
  },
  {
    q: "Vocês têm tubo de Ø60 simples ou só armado?",
    a: "Tubos até DN 600 (Ø60 cm) podem ser fabricados em concreto simples (PS1 ou PS2) ou armado (PA1 a PA4), conforme a aplicação. A partir de DN 600 a NBR 8890 obriga reforço estrutural — fica sempre armado.",
  },
  {
    q: "A Central entrega para minha cidade?",
    a: "A Central entrega em Ivoti e região, num raio de cerca de 50 km. Cidades atendidas: Novo Hamburgo, Estância Velha, Dois Irmãos, Lindolfo Collor, Presidente Lucena, Bom Princípio, São José do Hortêncio, Campo Bom, Sapiranga, Morro Reuter, Picada Café, Santa Maria do Herval, Nova Petrópolis, Gramado e Canela. Frete sob orçamento conforme distância e volume.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
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
          name: "Diâmetros e medidas",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
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

export default function DiametrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-cc-green py-16 md:py-24">
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
            <span className="text-white font-medium">Diâmetros e medidas</span>
          </nav>

          {/* FOTO_HERO_S4 — foto noturna central-concreto-produto-887.jpg */}

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
            Diâmetros do tubo de concreto
          </h1>

          <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              A Central do Concreto entrega tubos de concreto do Ø20 ao Ø150 cm em
              pronta entrega, atendendo desde drenagem residencial até galeria
              pluvial de grande porte. Esta página reúne a tabela completa da{" "}
              <Link
                href="/tubo-de-concreto"
                className="underline decoration-cc-coral underline-offset-4 hover:text-white"
              >
                NBR 8890
              </Link>
              , a equivalência entre milímetros e centímetros e o critério para
              escolher o diâmetro certo para sua obra.
            </p>
            <p>
              Para orçamento, fale com a equipe pelo WhatsApp{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cc-coral underline-offset-4 hover:text-white"
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
          {/* H2 1 — Quais são os diâmetros disponíveis de tubo de concreto? */}
          <section aria-labelledby="diametros-disponiveis">
            <h2
              id="diametros-disponiveis"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Quais são os diâmetros disponíveis de tubo de concreto?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Tubos de concreto são fabricados em diâmetros nominais que vão de
                DN 200 (Ø20 cm) a DN 2000 (Ø200 cm), conforme a NBR 8890. A
                Central trabalha do Ø20 ao Ø150 cm em pronta entrega.
              </p>
              <p>
                A norma brasileira ABNT NBR 8890 define a faixa padrão de
                diâmetros nominais para tubos de concreto: DN 200, 300, 400, 500,
                600, 700, 800, 900, 1000, 1100, 1200, 1500, 1750 e 2000 mm. Cada
                fabricante atua dentro de uma janela própria — não há fábrica que
                cubra a faixa inteira. A Central do Concreto entrega do Ø20 ao
                Ø150 cm, faixa que cobre desde drenagem residencial e calçada até
                galeria pluvial de médio e grande porte.
              </p>
              <p>
                Tubos abaixo de DN 600 podem ser fabricados sem armação —
                concreto simples, com nomenclatura PS1 ou PS2 conforme a
                resistência. A partir de DN 600 a NBR 8890 obriga reforço
                estrutural: o tubo fica armado, com barras de aço, telas, fibras
                ou combinação. Esse é um dos critérios que separa o tubo simples
                do armado.
              </p>
            </div>
          </section>

          {/* H2 2 — DN, milímetro ou centímetro — entendendo a notação */}
          <section aria-labelledby="notacao-dn">
            <h2
              id="notacao-dn"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              DN, milímetro ou centímetro — entendendo a notação
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                DN (Diâmetro Nominal) é o diâmetro interno do tubo, onde a água
                passa, sempre especificado em milímetros. No balcão, o mesmo tubo
                é chamado em centímetros: DN 400 é o &ldquo;tubo de 40&rdquo;.
              </p>
              <p>
                A norma técnica fala em milímetros. O cliente do balcão pede em
                centímetros. As duas linguagens se referem ao mesmo número — só
                a unidade muda. Quando você pede &ldquo;manilha de 40&rdquo;, o
                fornecedor entende DN 400 mm. Quando o engenheiro especifica DN
                600, o pedreiro entende &ldquo;tubo de 60&rdquo;.
              </p>
              <p>
                Outra confusão comum: o diâmetro nominal é interno. O diâmetro
                externo é maior — inclui a espessura da parede de concreto, que
                varia de 30 a 100 mm conforme o diâmetro e a classe. Quem mede
                pela boca da bolsa do tubo encontra um número maior que o DN.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <caption className="sr-only">
                  Equivalência entre centímetro, diâmetro nominal e milímetro
                </caption>
                <thead className="bg-cc-green text-white">
                  <tr>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Diâmetro em cm
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Diâmetro Nominal (DN)
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Diâmetro em mm
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø20 cm
                    </th>
                    <td className="px-4 py-3">DN 200</td>
                    <td className="px-4 py-3">200 mm</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø30 cm
                    </th>
                    <td className="px-4 py-3">DN 300</td>
                    <td className="px-4 py-3">300 mm</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø40 cm
                    </th>
                    <td className="px-4 py-3">DN 400</td>
                    <td className="px-4 py-3">400 mm</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø50 cm
                    </th>
                    <td className="px-4 py-3">DN 500</td>
                    <td className="px-4 py-3">500 mm</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø60 cm
                    </th>
                    <td className="px-4 py-3">DN 600</td>
                    <td className="px-4 py-3">600 mm</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø80 cm
                    </th>
                    <td className="px-4 py-3">DN 800</td>
                    <td className="px-4 py-3">800 mm</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø100 cm
                    </th>
                    <td className="px-4 py-3">DN 1000</td>
                    <td className="px-4 py-3">1000 mm</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø120 cm
                    </th>
                    <td className="px-4 py-3">DN 1200</td>
                    <td className="px-4 py-3">1200 mm</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø150 cm
                    </th>
                    <td className="px-4 py-3">DN 1500</td>
                    <td className="px-4 py-3">1500 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* H2 3 — Tabela NBR 8890 — diâmetro, classe e carga */}
          <section aria-labelledby="tabela-nbr-8890">
            <h2
              id="tabela-nbr-8890"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Tabela NBR 8890 — diâmetro, classe e carga
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A NBR 8890 cruza diâmetro nominal e classe de resistência para
                definir a carga mínima isenta de fissura de cada tubo armado, em
                kN/m. A carga de ruptura é 1,5 vez esse valor.
              </p>
              <p>
                Esta é a tabela completa de tubos armados para água pluvial —
                PA1 a PA4 — definida pela ABNT{" "}
                <Link
                  href="/tubo-de-concreto/classes-de-carga"
                  className="text-cc-coral underline underline-offset-4 hover:text-cc-green"
                >
                  NBR 8890
                </Link>
                . Quanto maior o número da classe, maior a carga que o tubo
                aguenta antes de fissurar.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <caption className="sr-only">
                  Carga mínima isenta de fissura para tubos armados de água
                  pluvial, em kN/m — NBR 8890
                </caption>
                <thead className="bg-cc-green text-white">
                  <tr>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Diâmetro Nominal
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      PA1
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      PA2
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      PA3
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      PA4
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 300 (Ø30 cm)
                    </th>
                    <td className="px-4 py-3">12</td>
                    <td className="px-4 py-3">18</td>
                    <td className="px-4 py-3">27</td>
                    <td className="px-4 py-3">36</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 400 (Ø40 cm)
                    </th>
                    <td className="px-4 py-3">16</td>
                    <td className="px-4 py-3">24</td>
                    <td className="px-4 py-3">36</td>
                    <td className="px-4 py-3">48</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 500 (Ø50 cm)
                    </th>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3">45</td>
                    <td className="px-4 py-3">60</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 600 (Ø60 cm)
                    </th>
                    <td className="px-4 py-3">24</td>
                    <td className="px-4 py-3">36</td>
                    <td className="px-4 py-3">54</td>
                    <td className="px-4 py-3">72</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 700 (Ø70 cm)
                    </th>
                    <td className="px-4 py-3">28</td>
                    <td className="px-4 py-3">42</td>
                    <td className="px-4 py-3">63</td>
                    <td className="px-4 py-3">84</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 800 (Ø80 cm)
                    </th>
                    <td className="px-4 py-3">32</td>
                    <td className="px-4 py-3">48</td>
                    <td className="px-4 py-3">72</td>
                    <td className="px-4 py-3">96</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 900 (Ø90 cm)
                    </th>
                    <td className="px-4 py-3">36</td>
                    <td className="px-4 py-3">54</td>
                    <td className="px-4 py-3">81</td>
                    <td className="px-4 py-3">108</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 1000 (Ø100 cm)
                    </th>
                    <td className="px-4 py-3">40</td>
                    <td className="px-4 py-3">60</td>
                    <td className="px-4 py-3">90</td>
                    <td className="px-4 py-3">120</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 1100 (Ø110 cm)
                    </th>
                    <td className="px-4 py-3">44</td>
                    <td className="px-4 py-3">66</td>
                    <td className="px-4 py-3">99</td>
                    <td className="px-4 py-3">132</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 1200 (Ø120 cm)
                    </th>
                    <td className="px-4 py-3">48</td>
                    <td className="px-4 py-3">72</td>
                    <td className="px-4 py-3">108</td>
                    <td className="px-4 py-3">144</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 1500 (Ø150 cm)
                    </th>
                    <td className="px-4 py-3">60</td>
                    <td className="px-4 py-3">90</td>
                    <td className="px-4 py-3">135</td>
                    <td className="px-4 py-3">180</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 1750 (Ø175 cm)
                    </th>
                    <td className="px-4 py-3">70</td>
                    <td className="px-4 py-3">105</td>
                    <td className="px-4 py-3">158</td>
                    <td className="px-4 py-3">210</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      DN 2000 (Ø200 cm)
                    </th>
                    <td className="px-4 py-3">80</td>
                    <td className="px-4 py-3">120</td>
                    <td className="px-4 py-3">180</td>
                    <td className="px-4 py-3">240</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A carga é expressa em kN/m — kilonewton por metro de tubo. Para
                conversão em ordem de grandeza prática, 10 kN/m equivalem a cerca
                de 1 tonelada por metro linear. Tubos PA1 e PA2 cobrem o uso
                urbano comum. PA3 e PA4 sustentam cargas pesadas — rodovia,
                indústria, drenagem profunda.
              </p>
              <p>
                Acima de PA4 existe a Classe Especial: dimensionada caso a caso
                para obras de carga extrema, geralmente aeroportos e obras
                especiais. A Central trabalha sob consulta.
              </p>
            </div>
          </section>

          {/* H2 4 — Como escolher o diâmetro certo para a sua obra? */}
          <section aria-labelledby="como-escolher">
            <h2
              id="como-escolher"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Como escolher o diâmetro certo para a sua obra?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O diâmetro depende do volume de água que passa pelo tubo e do
                tipo de obra. Como regra prática, Ø20 a Ø30 cm cobrem drenagem
                residencial; Ø40 a Ø50 cm atendem bueiro urbano; Ø60 a Ø80 cm
                servem galeria de bairro; Ø100 a Ø150 cm são para galeria
                principal e travessia.
              </p>
              <p>
                A escolha do diâmetro segue dois critérios: a vazão de projeto
                (quanta água por segundo passa pelo tubo) e o tipo de obra (qual
                a aplicação final). Em projetos com engenheiro responsável, a
                vazão é calculada pelo método racional ou hidrodinâmico e o
                diâmetro decorre desse cálculo. Em obras menores, a regra prática
                orienta.
              </p>
            </div>

            <dl className="mt-6 space-y-5 text-base text-cc-gray-700 leading-relaxed">
              <div>
                <dt className="font-semibold text-cc-green">Ø20 e Ø30 cm</dt>
                <dd className="mt-1">
                  Drenagem residencial, calçada, jardim, ligação de poço de
                  inspeção pequeno.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-cc-green">Ø40 e Ø50 cm</dt>
                <dd className="mt-1">
                  Bueiro de via urbana, drenagem de pátio, ligação predial,
                  drenagem de muro de arrimo.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-cc-green">Ø60 e Ø80 cm</dt>
                <dd className="mt-1">
                  Galeria de bairro, travessia de rua, drenagem de loteamento,
                  sistema viário urbano.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-cc-green">
                  Ø100, Ø120 e Ø150 cm
                </dt>
                <dd className="mt-1">
                  Galeria pluvial principal, travessia de córrego, drenagem de
                  rodovia, obra de drenagem ferroviária.
                </dd>
              </div>
            </dl>

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Esta é uma regra prática, não um cálculo de engenharia. Obras
                com vazão calculada em projeto seguem a especificação do
                engenheiro responsável. Para{" "}
                <Link
                  href="/tubo-de-concreto/tubo-dreno"
                  className="text-cc-coral underline underline-offset-4 hover:text-cc-green"
                >
                  drenagem profunda de talude ou muro de arrimo
                </Link>{" "}
                o diâmetro segue a mesma lógica, mas o tubo é perfurado. Em caso
                de dúvida, a equipe da Central orienta a partir do tipo de obra.
              </p>
            </div>
          </section>

          {/* H2 5 — Comprimento útil de cada diâmetro */}
          <section aria-labelledby="comprimento-util">
            <h2
              id="comprimento-util"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Comprimento útil de cada diâmetro
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Os tubos de concreto da Central têm comprimento útil padrão de
                1,00 m em todos os diâmetros, do Ø20 ao Ø150 cm. A NBR 8890
                admite variação de até 20 mm para menos e 50 mm para mais sobre
                a dimensão declarada.
              </p>
              <p>
                Saber o comprimento útil é essencial para calcular quantos tubos
                uma obra precisa. Sem esse dado, é impossível fazer orçamento de
                quantidade de peças sem ligar para perguntar.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <caption className="sr-only">
                  Comprimento útil padrão dos tubos de concreto da Central
                </caption>
                <thead className="bg-cc-green text-white">
                  <tr>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Faixa de diâmetro
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Comprimento útil padrão
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Todos os diâmetros (Ø20 a Ø150 cm)
                    </th>
                    <td className="px-4 py-3">1,00 m</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Cálculo simples: divida o comprimento da vala pelo comprimento
                útil. Para uma vala de 30 m, são 30 tubos — independente do
                diâmetro escolhido. Esse padrão uniforme facilita o orçamento: o
                número de peças não muda quando o cliente troca de diâmetro.
              </p>
            </div>
          </section>

          {/* H2 6 — Diâmetros disponíveis na Central do Concreto */}
          <section aria-labelledby="diametros-central">
            <h2
              id="diametros-central"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Diâmetros disponíveis na Central do Concreto
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A Central entrega do Ø20 ao Ø150 cm em pronta entrega — todos os
                diâmetros padronizados pela NBR 8890 dentro dessa faixa, em
                concreto simples ou armado, com encaixe ponta-bolsa ou
                macho-fêmea.
              </p>

              {/* FOTO_PRODUTO_S4 — foto diurna tubos_pb.jpg */}

              <p>
                Os tubos da Central atendem desde drenagem residencial até obras
                de drenagem urbana de médio e grande porte em Ivoti e região,
                num raio de cerca de 50 km — Novo Hamburgo, Estância Velha, Dois
                Irmãos, Lindolfo Collor, Presidente Lucena, Bom Princípio, São
                José do Hortêncio, Campo Bom, Sapiranga, Morro Reuter, Picada
                Café, Santa Maria do Herval, Nova Petrópolis, Gramado e Canela.
                A entrega é feita com caminhão próprio da Central.
              </p>
              <p>
                A Central também instala — pode-se pedir orçamento de
                fornecimento ou de fornecimento mais instalação. Para decidir
                entre concreto simples e armado, veja as{" "}
                <Link
                  href="/tubo-de-concreto/classes-de-carga"
                  className="text-cc-coral underline underline-offset-4 hover:text-cc-green"
                >
                  classes de carga PA1 a PA4
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-cc-cream" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2
            id="faq-title"
            className="text-2xl md:text-3xl font-bold text-cc-green mb-10 text-center leading-tight"
          >
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-cc-gray-200 rounded-lg px-5 py-4"
              >
                <summary className="text-base font-semibold text-cc-green cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>
                    <h3 className="inline">{f.q}</h3>
                  </span>
                  <span
                    className="text-cc-coral text-xl group-open:rotate-45 transition-transform shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-base text-cc-gray-700 leading-relaxed mt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO_S4 — marcador para vídeo no template do projeto (escopo futuro) */}

      {/* CTA FINAL */}
      <section className="bg-cc-green py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Peça seu orçamento
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            Tubos de concreto do Ø20 ao Ø150 cm, pronta entrega em Ivoti e
            região. Atendimento pelo WhatsApp da Central.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Falar no WhatsApp · (51) 99669-1757
          </a>
        </div>
      </section>
    </>
  );
}
