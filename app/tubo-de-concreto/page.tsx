import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL = "https://centraldoconcretoentrega.com.br/tubo-de-concreto";
const WHATSAPP_URL = "https://wa.me/5551996691757";

const PAGE_TITLE = "Tubo de Concreto: Tipos e Medidas | Central do Concreto";
const PAGE_DESCRIPTION =
  "Tubo de concreto para drenagem: encaixes, classes de carga, diâmetros do Ø20 ao Ø150 e aplicações. A Central do Concreto fornece e entrega em Ivoti e região.";

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
    q: "Tubo de concreto e manilha são a mesma coisa?",
    a: "Sim. Manilha é o nome popular do tubo de concreto usado em drenagem. Os dois termos se referem à mesma peça pré-moldada de concreto.",
  },
  {
    q: "Qual a diferença entre o tubo PA1 e o PA2?",
    a: "A diferença é a classe de carga. O PA1 atende locais sem trânsito de veículos, e o PA2, com parede reforçada, suporta ruas e acessos com passagem de carros e caminhões.",
  },
  {
    q: "Qual diâmetro de tubo de concreto usar na drenagem de uma rua?",
    a: "Depende da vazão de água, mas a faixa do Ø40 ao Ø60 cobre a maior parte das ruas e loteamentos. O cálculo correto considera a área a drenar e o volume de chuva esperado.",
  },
  {
    q: "Tubo de concreto e tubo dreno são iguais?",
    a: "Não. O tubo de concreto comum é fechado e transporta água, enquanto o tubo dreno é perfurado e capta a água de dentro do solo. Muitas obras usam os dois tipos juntos.",
  },
  {
    q: "A Central do Concreto instala o tubo de concreto?",
    a: "Não. A Central só fornece. Produzimos os tubos em Ivoti e entregamos com caminhão próprio no endereço da obra. A instalação fica com a equipe do cliente, ou com uma empreiteira parceira que a Central pode indicar.",
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

export default function TuboDeConcretoPage() {
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
            <span className="text-white font-medium">Tubo de concreto</span>
          </nav>

          <Image
            src="/images/tubo-de-concreto/tubo-concreto-estoque-ivoti.webp"
            alt="Estoque de tubos de concreto para pronta entrega na Central do Concreto em Ivoti, RS"
            width={960}
            height={1280}
            priority
          />

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
            Tubo de concreto
          </h1>

          <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              O tubo de concreto é a peça pré-moldada usada para conduzir água em sistemas de
              drenagem, também conhecido como manilha. Ele recolhe e transporta a água da chuva e
              do solo em ruas, loteamentos, estradas e obras, encaminhando o volume para bueiros,
              galerias e o destino final.
            </p>
            <p>
              Existe mais de um tipo de tubo de concreto, e a escolha certa depende de três
              fatores: o encaixe entre as peças, a classe de carga que o tubo aguenta e o diâmetro
              necessário para a vazão de água. Errar em qualquer um deles compromete a drenagem ou
              encarece a obra sem necessidade.
            </p>
            <p>
              Este guia explica cada um desses pontos e mostra onde o tubo de concreto é aplicado.
              A Central do Concreto fornece e entrega tubo de concreto em Ivoti e região. Se você
              já sabe o que precisa, fale com a equipe pelo WhatsApp{" "}
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
          {/* O que é */}
          <section aria-labelledby="o-que-e">
            <h2
              id="o-que-e"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O que é um tubo de concreto?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo de concreto é uma peça cilíndrica pré-moldada, feita de concreto, usada
                para canalizar água em obras de drenagem. Na construção, ele também é chamado de
                manilha de concreto — os dois nomes se referem à mesma peça.
              </p>
              <p>
                A função do tubo é criar um caminho fechado e resistente para a água escoar por
                baixo do solo. Em vez de a água da chuva correr solta e causar erosão, alagamento
                ou estrago no pavimento, ela entra na rede de tubos e é conduzida com segurança
                até o ponto de descarga.
              </p>
              <p>
                O concreto é o material padrão para isso porque resiste ao peso de terra e de
                veículos por cima, não se deforma com o tempo e suporta o contato constante com a
                água. Por esse motivo, o tubo de concreto é a base da drenagem pluvial em ruas,
                loteamentos, estradas e obras de pavimentação.
              </p>
            </div>
          </section>

          {/* Tipos de encaixe */}
          <section aria-labelledby="tipos-encaixe">
            <h2
              id="tipos-encaixe"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Quais são os tipos de encaixe do tubo de concreto?
            </h2>
            <Image
              src="/images/tubo-de-concreto/tubo-concreto-encaixe-detalhe.webp"
              alt="Detalhe do encaixe ponta e bolsa em tubo de concreto"
              width={1600}
              height={1200}
            />
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo de concreto tem dois tipos de encaixe principais: ponta e bolsa (PB) e
                macho e fêmea (C2). O encaixe é a forma como uma peça se conecta à seguinte ao
                longo da linha de drenagem.
              </p>
              <p>
                No encaixe ponta e bolsa, uma extremidade do tubo é mais larga, a bolsa, e recebe
                a ponta do tubo seguinte, encaixando uma peça na outra. No encaixe macho e fêmea,
                as bordas têm um ressalto que se acopla, deixando a junta mais alinhada entre os
                tubos.
              </p>
              <p>
                A escolha entre os dois afeta a vedação da linha, a facilidade de montagem e o
                tipo de obra. Para drenagem pluvial comum, o ponta e bolsa costuma resolver; obras
                que exigem juntas mais precisas tendem ao macho e fêmea.
              </p>
              <p>
                A página{" "}
                <Link
                  href="/tubo-de-concreto/tipos-de-encaixe"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  Tipos de encaixe do tubo de concreto
                </Link>{" "}
                detalha quando usar cada um.
              </p>
            </div>
          </section>

          {/* Classes de carga */}
          <section aria-labelledby="classes-carga">
            <h2
              id="classes-carga"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O que são as classes de carga PA1 e PA2?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                As classes de carga indicam quanto peso o tubo de concreto aguenta por cima sem
                trincar. As mais comuns são a PA1 e a PA2, e a diferença entre elas define onde o
                tubo pode ser instalado.
              </p>
              <p>
                A classe PA1 é indicada para locais com pouca ou nenhuma passagem de veículos,
                como áreas verdes, fundos de terreno e drenagem leve. A classe PA2, com parede
                mais reforçada, suporta a carga de ruas e acessos com trânsito de carros e
                caminhões.
              </p>
              <p>
                Instalar um tubo de classe insuficiente sob uma via é um erro caro: a peça pode
                romper com o tempo e obrigar a refazer a obra. Já usar um tubo mais reforçado do
                que o necessário eleva o custo sem ganho real.
              </p>
              <p>
                A página{" "}
                <Link
                  href="/tubo-de-concreto/classes-de-carga"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  Classes de carga do tubo de concreto
                </Link>{" "}
                explica cada classe e como escolher pela situação da obra.
              </p>
            </div>
          </section>

          {/* Tubo dreno */}
          <section aria-labelledby="tubo-dreno">
            <h2
              id="tubo-dreno"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O que é tubo dreno?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo dreno é um tubo de concreto perfurado, feito para captar a água que está
                dentro do solo, e não apenas a que corre pela superfície. As perfurações na parede
                deixam a água do terreno entrar no tubo.
              </p>
              <p>
                Ele é usado quando o problema é o lençol freático alto ou o acúmulo de água no
                subsolo, situações que causam umidade em fundações, encharcamento de terrenos e
                instabilidade em encostas e estradas. O tubo dreno recolhe essa água e a conduz
                para fora da área.
              </p>
              <p>
                É uma peça diferente do tubo de concreto comum: o tubo fechado transporta a água,
                enquanto o tubo dreno capta a água do solo. Em muitas obras, os dois trabalham
                juntos na mesma rede de drenagem.
              </p>
              <p>
                A página{" "}
                <Link
                  href="/tubo-de-concreto/tubo-dreno"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  Tubo dreno
                </Link>{" "}
                explica como funciona a drenagem de solo e quando ele é necessário.
              </p>
            </div>
          </section>

          {/* Diâmetros */}
          <section aria-labelledby="diametros">
            <h2
              id="diametros"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Quais diâmetros e medidas estão disponíveis?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo de concreto é produzido em vários diâmetros, do Ø20 ao Ø150 centímetros,
                medidos pelo diâmetro interno da peça. O diâmetro certo depende do volume de água
                que a linha precisa dar conta.
              </p>
              <p>
                Diâmetros menores, como o Ø20 e o Ø30, atendem drenagem de pouca vazão, em
                ligações simples e áreas pequenas. Diâmetros médios, na faixa do Ø40 ao Ø60, são
                os mais usados na drenagem pluvial de ruas e loteamentos. Os diâmetros maiores, do
                Ø80 ao Ø150, ficam para galerias e redes que recolhem grande volume de água.
              </p>
              <p>
                Dimensionar o diâmetro abaixo do necessário faz a rede transbordar nas chuvas
                fortes; acima do necessário, encarece a obra sem motivo.
              </p>
              <p>
                A página{" "}
                <Link
                  href="/tubo-de-concreto/diametros"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  Diâmetros e medidas do tubo de concreto
                </Link>{" "}
                traz a tabela de medidas e mostra como calcular o diâmetro pela vazão.
              </p>
            </div>
          </section>

          {/* Aplicações */}
          <section aria-labelledby="aplicacoes">
            <h2
              id="aplicacoes"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Onde o tubo de concreto é usado?
            </h2>
            <Image
              src="/images/tubo-de-concreto/tubo-concreto-aplicacao-drenagem.webp"
              alt="Tubo de concreto instalado em obra de drenagem pluvial"
              width={817}
              height={613}
            />
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo de concreto é usado em qualquer obra que precise retirar água do caminho de
                forma controlada. As aplicações mais comuns são a drenagem pluvial de ruas, os
                bueiros sob estradas e acessos, e as galerias de águas pluviais.
              </p>
              <p>
                Na drenagem pluvial, os tubos formam a rede que recolhe a água das bocas de lobo e
                a conduz até o destino. No bueiro, o tubo atravessa por baixo de uma estrada ou
                entrada, deixando a água passar de um lado ao outro sem cortar a via. Nas
                galerias, tubos de diâmetro maior conduzem o volume de água de bairros inteiros.
              </p>
              <p>
                Loteamentos, condomínios, estradas rurais e obras de pavimentação usam o tubo de
                concreto na mesma lógica.
              </p>
              <p>
                A página{" "}
                <Link
                  href="/tubo-de-concreto/aplicacoes"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  Aplicações do tubo de concreto
                </Link>{" "}
                detalha cada uso.
              </p>
            </div>
          </section>

          {/* Como escolher */}
          <section aria-labelledby="como-escolher">
            <h2
              id="como-escolher"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Como escolher o tubo de concreto certo?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Escolher o tubo de concreto certo é cruzar três decisões: o diâmetro, a classe de
                carga e o encaixe. As três juntas definem a peça correta para a obra.
              </p>
              <p>
                Comece pelo diâmetro, calculado pela vazão de água que a linha vai receber. Em
                seguida, defina a classe de carga pelo que vai passar por cima: PA1 para áreas sem
                trânsito, PA2 para ruas e acessos. Por fim, escolha o encaixe conforme o tipo de
                obra e a vedação necessária.
              </p>
              <p>
                Na dúvida, vale conversar com quem trabalha com tubo de concreto todos os dias. A
                Central do Concreto fornece e entrega drenagem, e a equipe ajuda a dimensionar a
                linha a partir dos dados da obra: a área a drenar, o tipo de via e o volume de
                água esperado. Isso evita o subdimensionamento, que causa alagamento, e também o
                gasto a mais com peça maior do que o necessário.
              </p>
            </div>
          </section>

          {/* Ivoti e região */}
          <section aria-labelledby="ivoti-regiao">
            <h2
              id="ivoti-regiao"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Tubo de concreto em Ivoti e região
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A Central do Concreto fornece e entrega tubo de concreto em Ivoti e região, num
                raio de cerca de 50 quilômetros. O catálogo do Ø20 ao Ø150 fica em pronta entrega
                no pátio.
              </p>
              <p>
                A entrega usa caminhão próprio, com a peça saindo direto do pátio para a obra,
                sem intermediário de frete. Para drenagem pluvial, bueiro, galeria ou tubo dreno,
                o ponto de partida é entender a obra.
              </p>
              <p>
                Fale com a equipe da Central do Concreto pelo WhatsApp{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  (51) 99669-1757
                </a>
                . Descreva a obra — o que precisa drenar, o tipo de via e a região — e a equipe
                orienta sobre encaixe, classe e diâmetro, e prepara o orçamento.
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
            Perguntas frequentes sobre tubo de concreto
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

      {/* VIDEO_PILAR: vídeo da página-pilar entra perto da publicação, em outra tarefa */}

      {/* CTA FINAL */}
      <section className="bg-cc-black py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Precisa de tubo de concreto para a sua obra?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            Conte sobre a obra pelo WhatsApp · a equipe da Central orienta sobre encaixe, classe e
            diâmetro e prepara o orçamento.
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
