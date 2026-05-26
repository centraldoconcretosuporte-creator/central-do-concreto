import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/tubo-de-concreto/tubo-dreno";
const WHATSAPP_URL = "https://wa.me/5551996691757";

const PAGE_TITLE =
  "Tubo dreno de concreto: tipos, aplicações e quando escolher | Central do Concreto";
const PAGE_DESCRIPTION =
  "Tubo dreno de concreto perfurado para drenagem de muro de arrimo, talude e lençol freático. Ø20 ao Ø60 cm. A Central entrega em Ivoti e região.";

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
    q: "O tubo dreno de concreto precisa de manta geotêxtil?",
    a: "Sim. A manta geotêxtil (também conhecida como Bidim) é essencial para o sistema funcionar a longo prazo. Sem ela, os finos do solo entram pelas perfurações e entopem o tubo em poucos meses. A manta deixa a água passar e barra a terra.",
  },
  {
    q: "Qual a diferença entre tubo dreno de concreto e tubo dreno de PVC?",
    a: "Tubo dreno de PVC, na maior parte do mercado, é tubo dreno de PEAD — polietileno de alta densidade, o tubo corrugado preto vendido em rolo. A diferença para o concreto é de escala: PEAD é flexível e leve, em diâmetros de 50 a 230 mm; concreto é rígido e estrutural, em diâmetros de 200 a 600 mm. PEAD para obra residencial e agrícola; concreto para obra pesada.",
  },
  {
    q: "Existe NBR específica para tubo dreno de concreto?",
    a: "Não. A NBR 8890 cobre tubos de concreto de seção circular para água pluvial e esgoto — tubos fechados, não perfurados. As normas que se aplicam ao tubo dreno de concreto são as do concreto em si: NBR 12655 e NBR 12654. O desempenho em drenagem depende do projeto da vala e da instalação correta.",
  },
  {
    q: "Por que o tubo dreno se chama manilha?",
    a: "Manilha é o nome popular do tubo de concreto na construção civil brasileira, especialmente em obras de drenagem e galeria. Manilha furada ou manilha perfurada é o termo regional para o tubo dreno. Em catálogo técnico o produto aparece como tubo dreno ou tubo perfurado.",
  },
  {
    q: "Quanto tempo dura um tubo dreno de concreto instalado corretamente?",
    a: "A vida útil esperada de um tubo dreno de concreto instalado conforme as boas práticas — com cama de brita, manta geotêxtil e inclinação adequada — é de 30 anos ou mais. O concreto não corrói por contato com água ou solo, e a estrutura suporta o peso do solo acima sem deformação ao longo do tempo.",
  },
];

const howToSteps = [
  {
    name: "Abrir a vala com inclinação de 1 a 2%",
    text: "A vala precisa descer suavemente em direção ao ponto de escoamento. A largura segue o diâmetro do tubo mais cerca de 20 cm de folga em cada lado para a brita.",
  },
  {
    name: "Criar a cama de brita no fundo",
    text: "Camada de 10 a 15 cm de brita 1 ou brita 2 no fundo da vala, que uniformiza a superfície e inicia o envelopamento drenante.",
  },
  {
    name: "Posicionar o tubo dreno",
    text: "O tubo entra com a perfuração voltada para os lados ou para baixo, nunca para cima. As perfurações precisam ficar onde a água do solo está.",
  },
  {
    name: "Envolver com manta geotêxtil",
    text: "A manta envolve o conjunto tubo mais brita por completo, formando uma luva que filtra. Ela impede que os finos do solo entrem nas perfurações e entupam o tubo, sem barrar a passagem da água.",
  },
  {
    name: "Cobrir com brita e compactar",
    text: "Sobre o tubo já envolvido, mais 20 a 30 cm de brita. Em seguida, fechamento da vala com o solo escavado e compactação em camadas de até 20 cm, com grau mínimo de 95% em relação à energia normal.",
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
          name: "Tubo dreno",
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
    {
      "@type": "HowTo",
      "@id": `${CANONICAL_URL}#howto`,
      name: "Como instalar um tubo dreno de concreto",
      description:
        "Instalação de tubo dreno de concreto em cinco passos, da abertura da vala à compactação final.",
      supply: [
        { "@type": "HowToSupply", name: "Tubo dreno de concreto" },
        { "@type": "HowToSupply", name: "Brita 1 ou brita 2" },
        { "@type": "HowToSupply", name: "Manta geotêxtil" },
      ],
      step: howToSteps.map((s) => ({
        "@type": "HowToStep",
        name: s.name,
        text: s.text,
      })),
    },
  ],
};

export default function TuboDrenoPage() {
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
            <span className="text-white font-medium">Tubo dreno</span>
          </nav>

          <Image
            src="/cluster-drenagem/central-concreto-patio-tubo-dreno.webp"
            alt="Picape da Central do Concreto com pilha de tubos de concreto ao fundo no pátio em Ivoti — catálogo completo incluindo tubo dreno."
            width={1920}
            height={1440}
            priority
          />

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
            Tubo dreno de concreto
          </h1>

          <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              O tubo dreno de concreto é um tubo perfurado, projetado para captar a água que se
              infiltra no solo e conduzi-la para um ponto de escoamento. É a peça central da
              drenagem subterrânea em muro de arrimo, talude, galeria pluvial perfurada e pátio
              industrial — obras onde o diâmetro precisa ser grande e a vida útil acima de 30 anos
              é critério.
            </p>
            <p>
              Esta página explica o que é, para que serve, onde se usa, quando faz mais sentido
              que o PEAD, como se instala, em quais diâmetros a Central trabalha e como pedir o
              orçamento.
            </p>
            <p>
              A Central do Concreto fornece tubo dreno de concreto em Ivoti e região, do Ø20 ao
              Ø60 cm. Para orçamento, fale com a equipe pelo WhatsApp{" "}
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
          {/* H2 1 — O que é o tubo dreno de concreto? */}
          <section aria-labelledby="o-que-e-tubo-dreno">
            <h2
              id="o-que-e-tubo-dreno"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O que é o tubo dreno de concreto?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo dreno de concreto é um tubo perfurado, com furos circulares ao longo da
                parede, projetado para captar a água que se infiltra no solo e conduzi-la para um
                ponto de escoamento. Ele se diferencia do{" "}
                <Link
                  href="/tubo-de-concreto"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  tubo de concreto comum
                </Link>
                , que é fechado e transporta água já coletada por outras estruturas. Também é
                chamado de manilha furada, manilha perfurada ou manilha dreno.
              </p>
              <p>
                A perfuração permite que a água do lençol freático ou da chuva infiltrada entre na
                tubulação e seja drenada de forma controlada. O concreto traz duas qualidades que
                importam em obra pesada: a rigidez estrutural — o próprio tubo resiste ao peso do
                solo acima — e a durabilidade — vida útil de várias décadas, sem deformação por
                compressão lateral. É produzido nas mesmas formas e dimensões do tubo de concreto
                comum, em diâmetros que vão de Ø20 a Ø60 cm na linha padrão da Central do
                Concreto.
              </p>
            </div>
          </section>

          {/* H2 2 — Para que serve um tubo dreno? */}
          <section aria-labelledby="para-que-serve">
            <h2
              id="para-que-serve"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Para que serve um tubo dreno?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo dreno serve para retirar a água acumulada no solo, evitando que essa água
                gere pressão hidrostática contra estruturas e instabilidade no terreno. É a peça
                central de qualquer sistema de drenagem subterrânea.
              </p>
              <p>
                Em um muro de arrimo, por exemplo, a água que se infiltra no aterro atrás do muro
                fica empossada e empurra a estrutura para frente. Sem drenagem, o muro precisa ser
                dimensionado para resistir a essa carga adicional — ou, mais comumente, ele tomba.
                O tubo dreno instalado na base do muro intercepta essa água antes que ela exerça
                pressão, conduzindo-a para fora da estrutura. O mesmo princípio se aplica em
                taludes, fundações, pátios industriais e drenagem agrícola: a água que estaria
                saturando o solo passa a sair pelo tubo.
              </p>
            </div>
          </section>

          {/* H2 3 — Onde se usa o tubo dreno de concreto? */}
          <section aria-labelledby="onde-se-usa">
            <h2
              id="onde-se-usa"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Onde se usa o tubo dreno de concreto?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo dreno de concreto é usado em obras de drenagem subterrânea de médio e grande
                porte, onde o diâmetro maior e a resistência estrutural do concreto fazem mais
                sentido que o tubo de PEAD. Quatro{" "}
                <Link
                  href="/tubo-de-concreto/aplicacoes"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  aplicações do tubo de concreto
                </Link>{" "}
                concentram quase todo o uso da linha da Central.
              </p>
              <p>
                <strong>Muro de arrimo de médio e grande porte.</strong> Dreno corrido na base, ao
                longo de toda a extensão do muro, captando a água do aterro. Diâmetros típicos:
                Ø30 a Ø50 cm conforme a{" "}
                <Link
                  href="/tubo-de-concreto/classes-de-carga"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  classe de carga adequada
                </Link>{" "}
                à altura do muro.
              </p>
              <p>
                <strong>Drenagem profunda de talude.</strong> Tubo instalado no maciço,
                atravessando camadas de solo até atingir o lençol freático. Em obras maiores essa
                configuração é chamada de dreno horizontal profundo, ou DHP. Diâmetros típicos:
                Ø40 a Ø60 cm.
              </p>
              <p>
                <strong>Galeria pluvial perfurada.</strong> Tubo dreno como segmento de uma
                galeria de águas pluviais que também precisa absorver água do solo ao redor —
                comum em loteamentos com lençol freático alto. Diâmetros típicos: Ø50 a Ø60 cm.
              </p>
              <p>
                <strong>Drenagem de pátio industrial.</strong> Pátios extensos com risco de
                saturação do solo, especialmente em zonas com lençol freático superficial.
                Diâmetros típicos: Ø30 a Ø50 cm.
              </p>
            </div>
          </section>

          {/* H2 4 — Tubo dreno de concreto e tubo dreno de PEAD — quando escolher cada um? */}
          <section aria-labelledby="concreto-vs-pead">
            <h2
              id="concreto-vs-pead"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Tubo dreno de concreto e tubo dreno de PEAD — quando escolher cada um?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A escolha entre tubo dreno de concreto e tubo dreno de PEAD se resolve pelo porte
                da obra: PEAD em diâmetro pequeno para drenagem leve, concreto em diâmetro grande
                para drenagem estrutural. Os dois materiais não competem na maior parte das
                aplicações — eles cobrem universos diferentes de uso.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <caption className="sr-only">
                  Comparação técnica entre tubo dreno de concreto e tubo dreno de PEAD
                </caption>
                <thead className="bg-cc-black text-white">
                  <tr>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Característica
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Tubo dreno de concreto
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Tubo dreno de PEAD
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Diâmetro típico
                    </th>
                    <td className="px-4 py-3">Ø20 a Ø60 cm (200 a 600 mm)</td>
                    <td className="px-4 py-3">DN 50 a DN 230 (50 a 230 mm)</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Forma de venda
                    </th>
                    <td className="px-4 py-3">Tubo de 1 metro útil, peça por peça</td>
                    <td className="px-4 py-3">Rolo de 25 ou 50 metros</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Rigidez
                    </th>
                    <td className="px-4 py-3">Rígido — suporta o peso do solo</td>
                    <td className="px-4 py-3">Flexível — acompanha curvas e desníveis</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Vida útil esperada
                    </th>
                    <td className="px-4 py-3">30 anos ou mais, sem manutenção</td>
                    <td className="px-4 py-3">15 a 25 anos conforme exposição</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Peso por metro
                    </th>
                    <td className="px-4 py-3">Alto — exige equipamento para movimentar</td>
                    <td className="px-4 py-3">Baixo — instalação manual em rolo</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Norma aplicável
                    </th>
                    <td className="px-4 py-3">NBR 12655 e NBR 12654 (concreto)</td>
                    <td className="px-4 py-3">NBR 17515 e NBR 15073 (PEAD)</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Aplicação ideal
                    </th>
                    <td className="px-4 py-3">
                      Muro de arrimo, talude, galeria, pátio industrial
                    </td>
                    <td className="px-4 py-3">
                      Jardim, quadra esportiva, drenagem agrícola, residência
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A diferença entre os dois materiais não é de qualidade — é de escala e função. O
                tubo dreno de PEAD é uma solução boa para o que ele foi projetado: drenagem leve,
                em diâmetro pequeno, com a flexibilidade que permite acompanhar terrenos
                irregulares. O tubo dreno de concreto entra quando o diâmetro precisa ser grande,
                a obra é estrutural e a vida útil acima de 30 anos é critério.
              </p>
            </div>
          </section>

          {/* H2 5 — Como se instala um tubo dreno? */}
          <section aria-labelledby="como-se-instala">
            <h2
              id="como-se-instala"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Como se instala um tubo dreno?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A instalação de um tubo dreno segue cinco passos: abrir a vala com leve inclinação,
                criar uma cama de brita no fundo, posicionar o tubo, envolver com manta geotêxtil
                e cobrir com brita até a compactação final. A inclinação correta é o detalhe que
                faz o sistema funcionar — sem ela, a água se acumula dentro do tubo em vez de
                escorrer.
              </p>
            </div>

            <figure
              className="mt-8 max-w-3xl mx-auto"
              aria-labelledby="vala-title"
            >
              <svg
                width="100%"
                viewBox="0 0 680 420"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="vala-title vala-desc"
              >
                <title id="vala-title">
                  Corte transversal de uma vala de drenagem com tubo dreno de concreto
                </title>
                <desc id="vala-desc">
                  Diagrama mostrando, de baixo para cima, a cama de brita, o tubo dreno de concreto
                  envolvido pela manta geotêxtil, a brita de cobertura e o solo compactado. Setas
                  indicam o fluxo da água do solo entrando pelas perfurações do tubo.
                </desc>
                <defs>
                  <pattern id="brita" patternUnits="userSpaceOnUse" width="10" height="10">
                    <rect width="10" height="10" fill="#C9C5BC" />
                    <circle cx="2" cy="3" r="1.2" fill="#8E8A82" />
                    <circle cx="7" cy="6" r="1" fill="#8E8A82" />
                    <circle cx="4" cy="8" r="0.9" fill="#8E8A82" />
                    <circle cx="9" cy="1" r="0.8" fill="#8E8A82" />
                  </pattern>
                  <pattern id="solo" patternUnits="userSpaceOnUse" width="14" height="14">
                    <rect width="14" height="14" fill="#9C7E5F" />
                    <circle cx="3" cy="4" r="0.8" fill="#6E5642" />
                    <circle cx="10" cy="9" r="1" fill="#6E5642" />
                    <circle cx="6" cy="12" r="0.7" fill="#6E5642" />
                  </pattern>
                  <marker
                    id="arrow-water"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M2 1L8 5L2 9"
                      fill="none"
                      stroke="#185FA5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </marker>
                </defs>
                <path
                  d="M 0 60 L 0 420 L 680 420 L 680 60 L 480 60 L 480 320 L 200 320 L 200 60 Z"
                  fill="url(#solo)"
                  stroke="#6E5642"
                  strokeWidth="0.5"
                />
                <rect
                  x="200"
                  y="60"
                  width="280"
                  height="60"
                  fill="#A88863"
                  stroke="#6E5642"
                  strokeWidth="0.5"
                />
                <rect
                  x="200"
                  y="120"
                  width="280"
                  height="70"
                  fill="url(#brita)"
                  stroke="#8E8A82"
                  strokeWidth="0.5"
                />
                <path
                  d="M 210 130 L 210 280 Q 210 295 225 295 L 455 295 Q 470 295 470 280 L 470 130 Z"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                />
                <rect
                  x="212"
                  y="200"
                  width="256"
                  height="80"
                  fill="url(#brita)"
                  stroke="#8E8A82"
                  strokeWidth="0.5"
                />
                <circle cx="340" cy="240" r="44" fill="#5F5E5A" stroke="#3A3937" strokeWidth="1" />
                <circle
                  cx="340"
                  cy="240"
                  r="32"
                  fill="#1E1D1B"
                  stroke="#3A3937"
                  strokeWidth="0.5"
                />
                <circle cx="307" cy="240" r="2.5" fill="#1E1D1B" />
                <circle cx="373" cy="240" r="2.5" fill="#1E1D1B" />
                <circle cx="320" cy="270" r="2.5" fill="#1E1D1B" />
                <circle cx="360" cy="270" r="2.5" fill="#1E1D1B" />
                <circle cx="320" cy="210" r="2.5" fill="#1E1D1B" />
                <circle cx="360" cy="210" r="2.5" fill="#1E1D1B" />
                <line
                  x1="270"
                  y1="240"
                  x2="296"
                  y2="240"
                  stroke="#185FA5"
                  strokeWidth="1.5"
                  markerEnd="url(#arrow-water)"
                />
                <line
                  x1="410"
                  y1="240"
                  x2="384"
                  y2="240"
                  stroke="#185FA5"
                  strokeWidth="1.5"
                  markerEnd="url(#arrow-water)"
                />
                <line
                  x1="280"
                  y1="260"
                  x2="306"
                  y2="252"
                  stroke="#185FA5"
                  strokeWidth="1.5"
                  markerEnd="url(#arrow-water)"
                />
                <line
                  x1="210"
                  y1="293"
                  x2="470"
                  y2="297"
                  stroke="#3A3937"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
                <line
                  x1="240"
                  y1="90"
                  x2="540"
                  y2="90"
                  stroke="#1E1D1B"
                  strokeWidth="0.5"
                  strokeDasharray="3 3"
                />
                <text x="550" y="94" fontFamily="sans-serif" fontSize="13" fill="#1E1D1B">
                  Solo compactado
                </text>
                <line
                  x1="340"
                  y1="155"
                  x2="540"
                  y2="155"
                  stroke="#1E1D1B"
                  strokeWidth="0.5"
                  strokeDasharray="3 3"
                />
                <text x="550" y="159" fontFamily="sans-serif" fontSize="13" fill="#1E1D1B">
                  Brita de cobertura
                </text>
                <line
                  x1="475"
                  y1="200"
                  x2="540"
                  y2="200"
                  stroke="#1E1D1B"
                  strokeWidth="0.5"
                  strokeDasharray="3 3"
                />
                <text x="550" y="204" fontFamily="sans-serif" fontSize="13" fill="#1E1D1B">
                  Manta geotêxtil
                </text>
                <line
                  x1="384"
                  y1="240"
                  x2="540"
                  y2="240"
                  stroke="#1E1D1B"
                  strokeWidth="0.5"
                  strokeDasharray="3 3"
                />
                <text x="550" y="244" fontFamily="sans-serif" fontSize="13" fill="#1E1D1B">
                  Tubo dreno
                </text>
                <line
                  x1="220"
                  y1="280"
                  x2="540"
                  y2="295"
                  stroke="#1E1D1B"
                  strokeWidth="0.5"
                  strokeDasharray="3 3"
                />
                <text x="550" y="299" fontFamily="sans-serif" fontSize="13" fill="#1E1D1B">
                  Cama de brita
                </text>
                <line
                  x1="40"
                  y1="240"
                  x2="140"
                  y2="240"
                  stroke="#185FA5"
                  strokeWidth="1.5"
                  markerEnd="url(#arrow-water)"
                />
                <text x="40" y="225" fontFamily="sans-serif" fontSize="13" fill="#185FA5">
                  Água do solo
                </text>
                <text
                  x="280"
                  y="395"
                  fontFamily="sans-serif"
                  fontSize="12"
                  fill="#1E1D1B"
                  fontStyle="italic"
                >
                  Inclinação 1 a 2% no sentido do escoamento
                </text>
              </svg>
              <figcaption className="text-sm text-cc-gray-700 mt-2 text-center">
                Corte transversal de vala de drenagem com tubo dreno de concreto envolto em geotêxtil e brita.
              </figcaption>
            </figure>

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                <strong>Passo 1 · Abrir a vala com inclinação de 1 a 2%.</strong> A vala precisa
                descer suavemente em direção ao ponto de escoamento. A largura segue o diâmetro do
                tubo mais cerca de 20 cm de folga em cada lado para a brita.
              </p>
              <p>
                <strong>Passo 2 · Criar a cama de brita no fundo.</strong> Uma camada de 10 a 15 cm
                de brita 1 ou brita 2 no fundo da vala uniformiza a superfície e inicia o
                envelopamento drenante.
              </p>
              <p>
                <strong>Passo 3 · Posicionar o tubo dreno.</strong> O tubo entra com a perfuração
                voltada para os lados ou para baixo, nunca para cima. As perfurações precisam
                ficar onde a água do solo está, não onde está o ar. Em obras com vários trechos,
                os tubos se conectam pelo mesmo{" "}
                <Link
                  href="/tubo-de-concreto/tipos-de-encaixe"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  encaixe ponta e bolsa ou macho e fêmea
                </Link>{" "}
                usado nos tubos cheios.
              </p>
              <p>
                <strong>Passo 4 · Envolver com manta geotêxtil.</strong> A manta (conhecida pelo
                nome comercial Bidim) envolve o conjunto tubo mais brita por completo, formando
                uma &ldquo;luva&rdquo; que filtra. Ela impede que os finos do solo entrem nas
                perfurações e entupam o tubo, sem barrar a passagem da água.
              </p>
              <p>
                <strong>Passo 5 · Cobrir com brita e compactar.</strong> Sobre o tubo já
                envolvido, mais 20 a 30 cm de brita. Em seguida, fechamento da vala com o solo
                escavado e compactação em camadas de até 20 cm — a especificação técnica do
                DER-SP recomenda grau de compactação mínimo de 95% em relação à energia normal.
              </p>
            </div>
          </section>

          {/* H2 6 — Diâmetros do tubo dreno de concreto */}
          <section aria-labelledby="diametros-tubo-dreno">
            <h2
              id="diametros-tubo-dreno"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Diâmetros do tubo dreno de concreto
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A Central do Concreto trabalha tubo dreno de concreto em cinco diâmetros padrão:
                Ø20, Ø30, Ø40, Ø50 e Ø60 cm. Diâmetros maiores são fornecidos sob consulta.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <caption className="sr-only">
                  Diâmetros do tubo dreno de concreto disponíveis na Central e aplicação típica de
                  cada um
                </caption>
                <thead className="bg-cc-black text-white">
                  <tr>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Diâmetro nominal
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Aplicação típica
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø20 cm
                    </th>
                    <td className="px-4 py-3">
                      Drenagem residencial, muro de arrimo pequeno até 1,5 metro de altura
                    </td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø30 cm
                    </th>
                    <td className="px-4 py-3">
                      Muro de arrimo médio, drenagem de jardim de grande porte, pátio leve
                    </td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø40 cm
                    </th>
                    <td className="px-4 py-3">
                      Muro de arrimo de altura significativa, drenagem agrícola de grande escala
                    </td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø50 cm
                    </th>
                    <td className="px-4 py-3">
                      Talude profundo, galeria pluvial pequena, drenagem de pátio industrial
                    </td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Ø60 cm
                    </th>
                    <td className="px-4 py-3">
                      Drenagem horizontal profunda, galeria perfurada, pátio industrial extenso
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Cada tubo tem comprimento padrão de 1 metro útil. A quantidade total para uma obra
                depende da extensão da vala — a Central calcula no orçamento. Diâmetros acima de
                Ø60 cm são produzidos sob consulta, mesmo padrão que a Central já aplica para as
                classes de carga PA3 e PA4.
              </p>
            </div>
          </section>

          {/* H2 7 — Tubo dreno disponível na Central do Concreto */}
          <section aria-labelledby="tubo-dreno-central">
            <h2
              id="tubo-dreno-central"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Tubo dreno disponível na Central do Concreto
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A Central do Concreto fornece tubo dreno de concreto perfurado em Ivoti e região
                da Serra Gaúcha, num raio de cerca de 50 km da loja. As cidades atendidas incluem
                Novo Hamburgo, Estância Velha, Dois Irmãos, Lindolfo Collor, Presidente Lucena,
                Bom Princípio, São José do Hortêncio, Campo Bom, Sapiranga, Morro Reuter, Picada
                Café, Santa Maria do Herval, Nova Petrópolis, Gramado e Canela.
              </p>
              <p>
                A linha inclui os cinco diâmetros padrão — Ø20, Ø30, Ø40, Ø50 e Ø60 cm. O orçamento sai pelo WhatsApp{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  (51) 99669-1757
                </a>
                , normalmente no mesmo dia, com o frete já calculado conforme o endereço.
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
            Perguntas frequentes sobre tubo dreno
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

      {/* VIDEO_S3 — vídeo de instalação no template do projeto; entra quando houver obra para gravar */}

      {/* CTA FINAL */}
      <section className="bg-cc-black py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Peça seu orçamento</h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            A Central do Concreto entrega tubo dreno de concreto em Ivoti e nas cidades da Serra
            Gaúcha num raio de cerca de 50 km. O orçamento sai pelo WhatsApp, normalmente no mesmo
            dia, com a quantidade conferida pela metragem da obra e o frete calculado pelo endereço
            de entrega.
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
