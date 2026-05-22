import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/tubo-de-concreto/tipos-de-encaixe";
const WHATSAPP_URL = "https://wa.me/5551996691757";

const PAGE_TITLE = "Tubo de concreto: ponta e bolsa ou macho e fêmea? | Central do Concreto";
const PAGE_DESCRIPTION =
  "Ponta e bolsa (PB) ou macho e fêmea (MF)? Veja a diferença entre os encaixes do tubo de concreto, com quando usar cada um pela NBR 8890.";

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
    a: "O PB tem bolsa alargada com aumento de concreto na espessura do encaixe; o MF tem entalhe a meia espessura. Pela NBR 8890, o PB é permitido a partir de DN 200 e o MF apenas a partir de DN 500. Só o PB aceita junta elástica na prática.",
  },
  {
    q: "Posso usar tubo macho e fêmea em qualquer diâmetro?",
    a: "Não. A NBR 8890 só permite a fabricação de tubos com encaixe macho e fêmea em diâmetros DN 500 ou maiores. Abaixo disso, o entalhe a meia espessura deixaria a parede do encaixe frágil demais. Para diâmetros menores, a única opção é o ponta e bolsa.",
  },
  {
    q: "Qual encaixe é obrigatório para esgoto sanitário?",
    a: "Tubos para esgoto sanitário precisam obrigatoriamente ser do tipo ponta e bolsa com junta elástica e cimento resistente a sulfatos (cimento RS), conforme a NBR 8890. O encaixe macho e fêmea não é permitido para esgoto, porque não acomoda junta elástica em condições de vedação confiável.",
  },
  {
    q: "Preciso de junta elástica em rede de água pluvial?",
    a: "Não é obrigatório. Em rede pluvial sem risco de contaminação por esgoto, a junta rígida atende. A junta elástica é obrigatória só em esgoto sanitário e em redes pluviais com contaminação comprovada por esgoto sanitário ou efluente industrial.",
  },
  {
    q: "O tubo ponta e bolsa é mais resistente que o macho e fêmea?",
    a: "O encaixe do PB é mais resistente que o do MF, porque acrescenta espessura de concreto na bolsa em vez de reduzir. Mas a resistência total do tubo depende da classe (PA1, PA2, PA3 ou PA4 pela NBR 8890), não só do encaixe. Veja a página de classes de carga para escolher a classe certa.",
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

          <Image
            src="/images/tubo-de-concreto/tubo-concreto-encaixe-mf-diametros.webp"
            alt="Tubos de concreto com encaixe macho e fêmea em diâmetros variados na Central do Concreto"
            width={1600}
            height={900}
            priority
          />

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
            Tipos de encaixe de tubo de concreto
          </h1>

          <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              O tubo de concreto tem dois tipos de encaixe normalizados pela NBR 8890: ponta e
              bolsa (PB) e macho e fêmea (MF). Cada um tem geometria, uso e limitações próprias —
              e a escolha entre eles muda conforme o diâmetro da peça, o que vai ser transportado e
              o nível de estanqueidade exigido pela obra.
            </p>
            <p>
              Esta página explica como cada encaixe funciona, quando cada um pode ser usado e qual
              é a regra prática de escolha — incluindo a obrigatoriedade do PB com junta elástica
              para esgoto sanitário e o limite de DN 500 que o MF precisa respeitar.
            </p>
            <p>
              A Central do Concreto fornece toda a linha de tubo PB com junta rígida ou elástica e
              tubo MF sob consulta. Para orçamento, fale com a equipe pelo WhatsApp{" "}
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
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O encaixe ponta e bolsa é o formato mais comum do tubo de concreto: uma
                extremidade é a ponta, lisa e com diâmetro menor, e a outra é a bolsa, alargada,
                com aumento de espessura de concreto. A ponta de um tubo se encaixa dentro da
                bolsa do próximo, formando a junta.
              </p>
              <p>
                Esse aumento de espessura na bolsa é a principal vantagem técnica do PB. Em vez de
                reduzir a parede no encaixe — como acontece no macho e fêmea —, o PB acrescenta
                concreto, tornando a região da junta mais resistente. Por isso, a NBR 8890 permite
                a fabricação de tubos PB a partir de DN 200, cobrindo toda a linha de drenagem
                residencial e urbana.
              </p>
              <p>
                No mercado de pré-moldados, o tubo de concreto também é chamado de manilha. O
                encaixe ponta e bolsa aceita tanto junta rígida — vedada com argamassa — quanto
                junta elástica — vedada com anel de borracha. É o único encaixe permitido para
                esgoto sanitário, e o formato padrão da linha de{" "}
                <Link
                  href="/tubo-de-concreto"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  tubo de concreto
                </Link>{" "}
                da Central.
              </p>
            </div>
            <Image
              src="/images/tubo-de-concreto/tubo-concreto-ponta-bolsa.webp"
              alt="Tubo de concreto com encaixe ponta e bolsa pronto para drenagem"
              width={1600}
              height={1200}
            />
          </section>

          {/* H2 2 — O que é o encaixe macho e fêmea (MF)? */}
          <section aria-labelledby="encaixe-mf">
            <h2
              id="encaixe-mf"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O que é o encaixe macho e fêmea (MF)?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O encaixe macho e fêmea tem uma extremidade saliente — o macho — que se encaixa em
                uma extremidade recortada — a fêmea. Diferente do ponta e bolsa, o MF não aumenta
                a espessura de concreto no encaixe: o entalhe é feito a meia espessura da parede
                do tubo.
              </p>
              <p>
                Por essa redução de parede na região do encaixe, a NBR 8890 permite a fabricação
                de tubos MF apenas a partir de DN 500. Em diâmetros menores, a parede do encaixe
                ficaria frágil demais — abaixo de DN 500, o único encaixe permitido é o PB.
              </p>
              <p>
                O MF é mais comum em galerias pluviais grandes, bueiros e travessias, onde os
                diâmetros costumam passar de 1 metro. Aceita junta rígida, vedada com argamassa,
                ou junta elástica conforme a necessidade de estanqueidade — embora a combinação MF
                com junta elástica não seja prática usual.
              </p>
            </div>
            <Image
              src="/images/tubo-de-concreto/tubo-concreto-macho-femea.webp"
              alt="Tubo de concreto com encaixe macho e fêmea para junta elástica"
              width={1600}
              height={1200}
            />
          </section>

          {/* H2 3 — Ponta e bolsa ou macho e fêmea: qual a diferença? */}
          <section aria-labelledby="pb-vs-mf">
            <h2
              id="pb-vs-mf"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Ponta e bolsa ou macho e fêmea: qual a diferença?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A diferença está em três pontos: o formato do encaixe, a espessura da parede no
                encaixe e o diâmetro mínimo permitido. O PB ganha espessura na bolsa e é permitido
                a partir de DN 200. O MF perde espessura no entalhe e só é permitido a partir de
                DN 500.
              </p>
            </div>
            {/* SVG_PB_MF: corte longitudinal lado a lado, PB à esquerda mostrando aumento de espessura na bolsa, MF à direita mostrando entalhe a meia espessura, legenda apontando cada parte */}

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-cc-black text-white">
                  <tr>
                    <th className="text-left font-semibold px-4 py-3">Critério</th>
                    <th className="text-left font-semibold px-4 py-3">Ponta e bolsa (PB)</th>
                    <th className="text-left font-semibold px-4 py-3">Macho e fêmea (MF)</th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Diâmetro mínimo (NBR 8890)</td>
                    <td className="px-4 py-3">DN 200</td>
                    <td className="px-4 py-3">DN 500</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <td className="px-4 py-3 font-medium">Parede no encaixe</td>
                    <td className="px-4 py-3">Aumento de concreto na bolsa</td>
                    <td className="px-4 py-3">Redução a meia espessura</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Junta rígida</td>
                    <td className="px-4 py-3">Compatível</td>
                    <td className="px-4 py-3">Compatível</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <td className="px-4 py-3 font-medium">Junta elástica</td>
                    <td className="px-4 py-3">Compatível (anel de borracha)</td>
                    <td className="px-4 py-3">Não compatível na prática</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Uso em esgoto sanitário</td>
                    <td className="px-4 py-3">Permitido</td>
                    <td className="px-4 py-3">Não permitido</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <td className="px-4 py-3 font-medium">Uso típico</td>
                    <td className="px-4 py-3">Toda a linha de drenagem</td>
                    <td className="px-4 py-3">Diâmetros grandes (DN ≥ 500)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* H2 4 — Junta rígida ou junta elástica: o que muda? */}
          <section aria-labelledby="junta-rigida-elastica">
            <h2
              id="junta-rigida-elastica"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Junta rígida ou junta elástica: o que muda?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A junta rígida (JR) é feita com argamassa de cimento e areia aplicada no encaixe
                depois da montagem dos tubos. A junta elástica (JE) usa um anel de borracha
                colocado na região do encaixe, vedando por compressão — é o sistema mais estanque
                e o único permitido para esgoto sanitário.
              </p>
              <p>
                A NBR 8890 só permite junta elástica em tubos com encaixe ponta e bolsa. O motivo
                é construtivo: a bolsa do PB acomoda o anel de borracha em uma sede própria,
                garantindo compressão estável ao longo do tempo. No encaixe macho e fêmea não há
                como instalar o anel em condições de vedação confiável — por isso, o MF trabalha,
                na prática, sempre com junta rígida.
              </p>
              <p>
                Para redes de drenagem de água pluvial limpa, a junta rígida basta. Em qualquer
                rede onde haja risco de contaminação por esgoto, movimentação significativa do
                solo ou exigência específica de estanqueidade, a junta elástica é a escolha
                técnica correta — e, para esgoto, é obrigatória, com tubo PB e cimento resistente
                a sulfatos (cimento RS).
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
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O encaixe correto depende de três fatores: o diâmetro do tubo, o que ele vai
                transportar e o nível de estanqueidade exigido — combinação que muda conforme as{" "}
                <Link
                  href="/tubo-de-concreto/aplicacoes"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  aplicações do tubo de concreto
                </Link>{" "}
                na obra. Tubos de até DN 500 só podem ser PB. Tubos para esgoto sanitário precisam
                obrigatoriamente de PB com junta elástica. Tubos para drenagem pluvial em diâmetros
                DN 500 ou maiores podem ser PB ou MF, conforme o projeto.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-cc-black text-white">
                  <tr>
                    <th className="text-left font-semibold px-4 py-3">Tipo de obra</th>
                    <th className="text-left font-semibold px-4 py-3">Encaixe</th>
                    <th className="text-left font-semibold px-4 py-3">Junta</th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Drenagem residencial (DN 200–400)</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">Rígida</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <td className="px-4 py-3 font-medium">Drenagem urbana, ruas e avenidas</td>
                    <td className="px-4 py-3">PB ou MF (se DN ≥ 500)</td>
                    <td className="px-4 py-3">Rígida</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">Esgoto sanitário</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">Elástica (obrigatória)</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <td className="px-4 py-3 font-medium">
                      Galeria pluvial e bueiro grande (DN ≥ 1000)
                    </td>
                    <td className="px-4 py-3">PB ou MF</td>
                    <td className="px-4 py-3">Rígida</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <td className="px-4 py-3 font-medium">
                      Rede pluvial com contaminação por esgoto
                    </td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">Elástica</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Quando os dois encaixes são permitidos, a escolha costuma considerar logística e
                custo. Tubos PB têm peso e volume maiores que o MF de mesmo diâmetro, pela bolsa.
                Para a maioria dos projetos com{" "}
                <Link
                  href="/tubo-de-concreto/classes-de-carga"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  classe de resistência
                </Link>{" "}
                bem definida, o PB é a escolha padrão.
              </p>
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
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A Central do Concreto fornece tubos com encaixe ponta e bolsa em toda a linha de
                drenagem — do DN 20 ao DN 150 cm — com junta rígida ou junta elástica, conforme a
                exigência da obra. Tubos com encaixe macho e fêmea são fornecidos sob consulta, a
                partir de DN 500.
              </p>
              <p>
                Além do fornecimento, a Central instala o tubo: preparo da vala, alinhamento dos
                tubos, vedação da junta e conferência do nivelamento. O atendimento cobre Ivoti e
                região, num raio de cerca de 50 km, com entrega programada.
              </p>
              <p>
                Para obras maiores ou com especificação técnica detalhada — diâmetro, classe,
                encaixe, tipo de junta —, o orçamento sai pelo WhatsApp{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  (51) 99669-1757
                </a>{" "}
                com base na ficha do projeto.
              </p>
            </div>
            <Image
              src="/images/tubo-de-concreto/tubo-concreto-deposito-encaixes.webp"
              alt="Depósito de tubos de concreto com diferentes encaixes na Central do Concreto, Ivoti RS"
              width={1600}
              height={1200}
            />
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
                      O encaixe do PB é mais resistente que o do MF, porque acrescenta espessura
                      de concreto na bolsa em vez de reduzir. Mas a resistência total do tubo
                      depende da classe (PA1, PA2, PA3 ou PA4 pela NBR 8890), não só do encaixe.
                      Veja a página de{" "}
                      <Link
                        href="/tubo-de-concreto/classes-de-carga"
                        className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                      >
                        classes de carga
                      </Link>{" "}
                      para escolher a classe certa.
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
            Peça seu orçamento de tubos na Central
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            A Central do Concreto atende obras em Ivoti e região com toda a linha de tubo de
            concreto — PB do DN 20 ao DN 150, MF sob consulta — em classes PA1 e PA2, com junta
            rígida ou elástica. Fale pelo WhatsApp para receber orçamento, prazo de entrega e, se
            a obra precisar, agendar a instalação.
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
