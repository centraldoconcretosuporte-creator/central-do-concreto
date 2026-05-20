import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/tubo-de-concreto/classes-de-carga";
const WHATSAPP_URL = "https://wa.me/5551996691757";

const PAGE_TITLE =
  "Classes de carga do tubo de concreto: PA1, PA2, PA3 e PA4 explicadas | Central do Concreto";
const PAGE_DESCRIPTION =
  "Entenda as classes de resistência do tubo de concreto pela NBR 8890 (PS1, PS2, PA1, PA2, PA3, PA4): qual usar em cada obra e quanta carga cada uma suporta.";

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
    q: "O que significa PA em tubo de concreto?",
    a: "A sigla PA significa tubo Pluvial Armado, conforme a NBR 8890. O P indica que o tubo é para água pluvial (drenagem). O A indica presença de armadura de aço — pode ser barras, telas soldadas ou fibras. O número que segue (1, 2, 3 ou 4) indica a classe de resistência crescente: PA1 é a classe básica armada; PA4 é a mais resistente.",
  },
  {
    q: "Qual a diferença entre PA1 e PA2?",
    a: "Ambos são tubos pluviais armados; o PA2 suporta mais carga que o PA1. Em um tubo DN 300, por exemplo, o PA1 resiste a 12 kN/m de fissura e o PA2 a 18 kN/m — 50% a mais de capacidade. Na prática, o PA1 atende rua residencial leve; o PA2 cobre avenida urbana com tráfego regular de ônibus e caminhão.",
  },
  {
    q: "PA3 e PA4 servem para drenagem residencial?",
    a: "Servem, mas é superdimensionamento. PA3 e PA4 são fabricados para rodovia federal, zona industrial, áreas portuárias e aeroporto. Para drenagem residencial em lote ou rua de bairro, PA1 ou PA2 atende com folga. Especificar classe acima da necessária encarece a obra sem ganho técnico — e o orçamento de uma classe acima costuma ser 30 a 50% mais caro.",
  },
  {
    q: "Posso pedir tubo CA-1 ou CA-2 ainda hoje?",
    a: "Pode pedir; o fabricante entrega a classe equivalente atual. CA-1, CA-2, CA-3 e CA-4 são siglas anteriores a 2003, quando a NBR 8890 entrou em vigor e renomeou para PA1, PA2, PA3 e PA4. Para evitar mal-entendido na nota e no recebimento da obra, vale atualizar o memorial e especificar pela nomenclatura atual.",
  },
  {
    q: "Como o fabricante calcula a classe do tubo?",
    a: "O cálculo soma três cargas verticais sobre o tubo: o peso de terra acima dele (cargas permanentes), a sobrecarga acidental do trânsito que passa em cima (cargas móveis) e eventuais cargas extras de obra. Essa soma é dividida por um fator de equivalência definido na NBR 8890, e o resultado mostra qual classe (carga mínima de fissura) o tubo precisa atender. A ABTC distribui um software gratuito para o cálculo, e o projeto hidráulico em geral já indica a classe pronta.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
          name: "Classes de carga",
          item: CANONICAL_URL,
        },
      ],
    },
  ],
};

export default function ClassesDeCargaPage() {
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
            <span className="text-white font-medium">Classes de carga</span>
          </nav>

          {/* FOTO_TOPO_S2: foto real de tubos armados (PA) no estoque ou em obra da Central, com armadura aparente ou peças empilhadas em primeiro plano */}

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
            Classes de resistência do tubo de concreto
          </h1>

          <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              A classe de resistência do tubo de concreto é o segundo parâmetro mais importante de
              um pedido, logo depois do diâmetro: define quanta carga, em kN por metro, o tubo
              aguenta sem fissurar. A NBR 8890 classifica os tubos pluviais em seis categorias —
              PS1 e PS2 simples; PA1, PA2, PA3 e PA4 armados — e cada uma cobre um tipo
              característico de obra.
            </p>
            <p>
              Esta página explica como a NBR 8890 nomeia e organiza as classes, quando usar tubo
              simples ou armado, qual a diferença entre PA1, PA2, PA3 e PA4, qual a carga mínima de
              fissura por diâmetro e como escolher a classe certa para a sua obra — incluindo a
              equivalência com a nomenclatura antiga CA-1, CA-2, CA-3 e CA-4.
            </p>
            <p>
              A Central do Concreto trabalha as classes PA1 e PA2 em estoque, em toda a linha de
              drenagem; classes superiores e tubos de esgoto saem sob consulta. Para orçamento,
              fale com a equipe pelo WhatsApp{" "}
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
          {/* H2 1 — O que é a classe de resistência de um tubo de concreto? */}
          <section aria-labelledby="o-que-e-classe">
            <h2
              id="o-que-e-classe"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              O que é a classe de resistência de um tubo de concreto?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A classe de resistência é a quantidade de carga, em kN por metro de tubo, que o
                tubo aguenta sem fissurar nem romper. Define se o tubo serve para uma calçada
                residencial ou para o leito de uma rodovia federal — e é o segundo parâmetro mais
                importante de um pedido, logo depois do diâmetro.
              </p>
              <p>
                Toda rede de drenagem trabalha sob carga: o peso da terra acima do tubo (carga
                permanente) e o peso do que passa em cima — carros, ônibus, caminhões, trens
                (cargas móveis ou acidentais). Um tubo dimensionado para tráfego residencial não
                aguenta um caminhão de obra; um tubo dimensionado para rodovia em uma calçada de
                loteamento é dinheiro jogado fora.
              </p>
              <p>
                A classe é o resumo numérico dessa resistência: quanto maior o número, maior a
                carga que o tubo suporta antes de fissurar. A norma técnica que define as classes
                do{" "}
                <Link
                  href="/tubo-de-concreto"
                  className="text-cc-coral underline underline-offset-4 hover:text-cc-green"
                >
                  tubo de concreto
                </Link>{" "}
                no Brasil é a NBR 8890.
              </p>
            </div>
          </section>

          {/* H2 2 — Como a NBR 8890 classifica os tubos? */}
          <section aria-labelledby="nbr-8890-classifica">
            <h2
              id="nbr-8890-classifica"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Como a NBR 8890 classifica os tubos?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A NBR 8890 nomeia cada classe com uma sigla de duas letras seguida de um número. A
                primeira letra indica o uso, a segunda indica o tipo construtivo, e o número
                indica a resistência crescente.
              </p>
              <p>
                A primeira letra é <strong>P</strong> para água pluvial (drenagem) ou{" "}
                <strong>E</strong> para esgoto sanitário. A segunda letra é <strong>S</strong>{" "}
                para tubo simples (sem armadura de aço) ou <strong>A</strong> para tubo armado
                (com barras, telas ou fibras de aço). O número que segue indica o nível de
                resistência: 1 é o mais leve, 4 é o mais pesado. Importante: o número não
                significa quantidade de armaduras — é só o rank de resistência.
              </p>
              <p>
                A norma define seis classes para pluvial — PS1 e PS2 simples, mais PA1, PA2, PA3 e
                PA4 armadas — e quatro classes para esgoto — ES simples e EA2, EA3, EA4 armadas.
                Assim, um tubo PA2 é um tubo pluvial, armado, na segunda classe de resistência das
                armadas.
              </p>
            </div>
          </section>

          {/* H2 3 — Tubo simples ou tubo armado: quando usar cada um? */}
          <section aria-labelledby="simples-ou-armado">
            <h2
              id="simples-ou-armado"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Tubo simples ou tubo armado: quando usar cada um?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Tubo simples é tubo feito só de concreto, sem armadura de aço. Atende diâmetros de
                DN 200 a DN 600, em obras de carga leve — drenagem residencial, lotes, áreas
                verdes, calçadas. Tubo armado tem reforço de aço (barras, telas soldadas ou
                fibras) e cobre DN 300 a DN 2000, com cargas que vão de tráfego urbano até zona
                industrial pesada.
              </p>
              <p>
                Acima de DN 600, a NBR 8890 obriga o uso de tubo armado, independente da carga
                acima da rede — é um requisito de segurança do produto, não uma escolha de
                projeto. Abaixo disso, a opção entre simples e armado depende exclusivamente do
                que vai passar sobre a tubulação.
              </p>
              <p>
                Na prática, PS1 e PS2 cobrem drenagem em lote, área verde e ruas sem trânsito. PA1
                a PA4 cobrem ruas e avenidas urbanas, rodovias estaduais, rodovias federais e
                zonas industriais. Em diâmetros DN 200 a DN 400 sem tráfego de veículo pesado, o
                tubo simples PS1 ou PS2 atende; do DN 500 em diante, ou em qualquer diâmetro com
                tráfego significativo acima, vai armado.
              </p>
            </div>
          </section>

          {/* H2 4 — Qual a diferença entre PA1, PA2, PA3 e PA4? */}
          <section aria-labelledby="pa1-pa2-pa3-pa4">
            <h2
              id="pa1-pa2-pa3-pa4"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Qual a diferença entre PA1, PA2, PA3 e PA4?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Todas as quatro são tubos armados para água pluvial; mudam apenas na quantidade de
                carga que suportam, em ordem crescente. Cada classe tem um tipo de tráfego
                característico acima da rede.
              </p>
              <p>
                PA1 cobre cargas leves: drenagem em loteamentos residenciais, áreas verdes,
                calçadas e ruas sem fluxo de veículo pesado. PA2 é o padrão urbano: avenidas e
                ruas residenciais com tráfego de carros, ônibus regular e caminhão de coleta. PA3
                cobre tráfego pesado: rodovias estaduais, vias arteriais e ruas com fluxo intenso
                de caminhão. PA4 é a classe industrial: rodovias federais, zonas portuárias,
                pátios de fábrica e pistas de aeroporto.
              </p>
            </div>

            {/* ESQUEMA_TRAFEGO_S2: SVG visual mostrando 4 cenários lado a lado — casa residencial (PA1), avenida urbana com ônibus (PA2), rodovia com caminhão (PA3), zona industrial/porto (PA4) — com a sigla da classe destacada em cada cenário */}

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A regra prática: na dúvida, suba uma classe. A diferença de preço entre PA1 e PA2
                é pequena perto do custo de substituir uma rede subdimensionada que rompeu sob
                carga.
              </p>
            </div>
          </section>

          {/* H2 5 — Qual a tabela de diâmetro, classe e carga? */}
          <section aria-labelledby="tabela-diametro-classe-carga">
            <h2
              id="tabela-diametro-classe-carga"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Qual a tabela de diâmetro, classe e carga?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A NBR 8890 define a carga mínima de fissura, em kN por metro, para cada combinação
                de diâmetro nominal e classe. Quanto maior o DN ou a classe, maior a carga que o
                tubo aguenta sem trincar.
              </p>
              <p>Para um tubo DN 300, a carga mínima de fissura por classe armada é:</p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-cc-green text-white">
                  <tr>
                    <th className="text-left font-semibold px-4 py-3">Classe</th>
                    <th className="text-left font-semibold px-4 py-3">
                      Carga mínima de fissura (DN 300)
                    </th>
                    <th className="text-left font-semibold px-4 py-3">Uso típico</th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">PA1</td>
                    <td className="px-4 py-3">12 kN/m</td>
                    <td className="px-4 py-3">Tráfego leve residencial</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <td className="px-4 py-3 font-medium">PA2</td>
                    <td className="px-4 py-3">18 kN/m</td>
                    <td className="px-4 py-3">Avenida urbana</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">PA3</td>
                    <td className="px-4 py-3">27 kN/m</td>
                    <td className="px-4 py-3">Rodovia e tráfego pesado</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-cream/40">
                    <td className="px-4 py-3 font-medium">PA4</td>
                    <td className="px-4 py-3">36 kN/m</td>
                    <td className="px-4 py-3">Zona industrial e rodovia federal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* TABELA_NBR_COMPLETA_S2: a tabela completa diâmetro × classe × carga (DN 300, 400, 500, 600, 800, 1000, 1200, 1500, 2000) entra com base na ficha técnica da Central — assim o site passa a ter a tabela como HTML semântico, citável pela IA, em vez de imagem como ABTC e concorrentes */}

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Os valores crescem proporcionalmente com o diâmetro: um tubo DN 600 da mesma
                classe aguenta cerca do dobro da carga por metro de um DN 300; um DN 1000, mais
                que o triplo. As Tabelas A.4 e A.5 da NBR 8890 trazem a relação completa. A
                Central fornece a ficha técnica do tubo com os valores exatos no orçamento,
                conforme o{" "}
                <Link
                  href="/tubo-de-concreto/diametros"
                  className="text-cc-coral underline underline-offset-4 hover:text-cc-green"
                >
                  diâmetro escolhido
                </Link>
                .
              </p>
            </div>
          </section>

          {/* H2 6 — Você procurou por CA-1, CA-2 ou CA-3? */}
          <section aria-labelledby="ca-1-ca-2-ca-3">
            <h2
              id="ca-1-ca-2-ca-3"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Você procurou por CA-1, CA-2 ou CA-3?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Essas siglas existem em projetos antigos, mas foram substituídas há mais de 20
                anos. CA-1, CA-2, CA-3 e CA-4 eram a nomenclatura usada antes de 2003, quando a
                NBR 8890 entrou em vigor e renomeou os tubos armados pluviais para PA1, PA2, PA3 e
                PA4. Quem cita CA hoje normalmente está consultando memorial descritivo, planilha
                ou projeto da época pré-norma.
              </p>
              <p>
                A equivalência aproximada é direta: CA-1 corresponde a PA1, CA-2 a PA2, CA-3 a PA3
                e CA-4 a PA4. Os critérios técnicos de carga mudaram um pouco entre as duas
                normas, então a equivalência não é matemática perfeita — mas serve de orientação
                para entender qual classe atual o projeto original pedia.
              </p>
              <p>
                Pode pedir CA-1 ou CA-2 hoje em um orçamento, sim. O fabricante atende pela classe
                equivalente atual da NBR 8890. Mas para evitar dúvida na nota e no recebimento da
                obra, especificar pela nomenclatura nova é o caminho limpo. Atualizar o memorial
                descritivo de uma obra antiga é trabalho de uma hora e elimina ruído por décadas.
              </p>
            </div>
          </section>

          {/* H2 7 — Como escolher a classe certa para a sua obra? */}
          <section aria-labelledby="escolher-classe-certa">
            <h2
              id="escolher-classe-certa"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Como escolher a classe certa para a sua obra?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A classe certa depende de três variáveis: o tipo de tráfego que vai passar acima
                do tubo, a profundidade de cobertura (quanto peso de terra fica em cima) e o tipo
                de solo da vala. As três entram no cálculo de carga vertical resultante, que é
                comparado com a carga mínima de fissura da classe.
              </p>
              <p>
                Para guiar a decisão sem o cálculo formal: drenagem em lote residencial, calçada
                ou área verde pede PS1 ou PS2 (tubos simples). Drenagem em rua residencial com
                tráfego de carro e ônibus pede PA1 ou PA2. Drenagem em avenida com tráfego médio
                diário pede PA2 ou PA3. Drenagem em rodovia, rodovia federal ou zona industrial
                pesada pede PA3 ou PA4.
              </p>
              <p>
                A classe não é a única decisão técnica do tubo. Junto com ela vem o{" "}
                <Link
                  href="/tubo-de-concreto/tipos-de-encaixe"
                  className="text-cc-coral underline underline-offset-4 hover:text-cc-green"
                >
                  tipo de encaixe
                </Link>{" "}
                — ponta e bolsa ou macho e fêmea — que define a estanqueidade da junta, e o tipo
                de junta (rígida ou elástica). A classe trata da carga; o encaixe trata da
                vedação.
              </p>
            </div>
          </section>

          {/* H2 8 — Classes de carga disponíveis na Central do Concreto */}
          <section aria-labelledby="classes-central">
            <h2
              id="classes-central"
              className="text-2xl md:text-3xl font-bold text-cc-green mb-5 leading-tight"
            >
              Classes de carga disponíveis na Central do Concreto
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A Central do Concreto trabalha as classes PA1 e PA2 em estoque, em toda a linha de
                drenagem — do DN 20 ao DN 150 cm. Classes superiores (PA3 e PA4) e tubos para
                esgoto sanitário (EA2, EA3, EA4) são fornecidos sob consulta, conforme o volume e
                o prazo da obra.
              </p>
              <p>
                Além do fornecimento, a Central instala: nivelamento da vala, alinhamento dos
                tubos, vedação da junta e conferência da declividade. O atendimento cobre Ivoti e
                região, num raio de cerca de 50 km, com entrega programada conforme o cronograma
                da obra.
              </p>
              <p>
                Para projetos com classe definida em memorial — PA2 DN 600 PB JR, por exemplo —, o
                orçamento sai direto pelo WhatsApp{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cc-coral underline underline-offset-4 hover:text-cc-green"
                >
                  (51) 99669-1757
                </a>
                . Para obras sem memorial, a equipe técnica da Central ajuda a especificar a
                classe com base no tipo de via e na profundidade da rede.
              </p>
            </div>
            {/* FOTO_ESTOQUE_S2: foto real do estoque da Central com tubos armados (PA1 e PA2) em primeiro plano, com a marcação da classe visível na peça quando possível */}
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
            Perguntas frequentes sobre classes de carga
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
                <p className="text-base text-cc-gray-700 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO_S2: vídeo curto da Central explicando as classes em obra — quadro mostrando a marcação PA1 ou PA2 no próprio tubo, narração por IA, padrão do projeto (logo no topo, WhatsApp queimado a partir de 15s, trecho de entrega em 60–70%) */}

      {/* CTA FINAL */}
      <section className="bg-cc-green py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Peça seu orçamento de tubos na Central
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            A Central do Concreto atende obras em Ivoti e região com tubo de concreto em classes
            PA1 e PA2 em estoque, além de PA3, PA4 e a linha de esgoto sanitário (EA) sob consulta
            — do DN 20 ao DN 150 cm. Fale pelo WhatsApp para receber orçamento, prazo de entrega
            e, se a obra precisar, agendar a instalação. Se o seu projeto traz a especificação no
            padrão PA2 DN 600 PB JR, o orçamento sai imediato.
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
