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
      <section className="relative w-full min-h-[560px] md:min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src="/home/fachada-noturna-showroom-cc-iluminacao-azul-051-central-concreto-ivoti.jpg"
          alt="Vista lateral noturna do showroom da Central do Concreto em Ivoti, com pátio iluminado pelo luar e tubos de concreto em exposição"
          fill
          priority
          sizes="100vw"
          className="object-cover [object-position:50%_70%]"
        />
        <div className="absolute inset-0 bg-cc-black/35" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Tubo de concreto
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tubo de concreto para drenagem de águas pluviais, bueiros e galerias. A Central do Concreto fornece e entrega em Ivoti, Serra Gaúcha e Vale dos Sinos.
          </p>
          <div className="flex justify-center mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Orçamento agilizado pelo WhatsApp
            </a>
          </div>
          <p className="text-sm text-white/85">
            ✓ Pronta entrega · ✓ Caminhão próprio · ✓ Ivoti e 15 cidades no RS
          </p>
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
            <figure className="my-6 text-center">
              <img
                src="/images/tubo-de-concreto/tubo-dn400-pa1.svg"
                alt="Ficha técnica tubo de concreto DN400 PA-1 — corte longitudinal e vista frontal com especificações NBR 8890"
                className="w-full max-w-2xl mx-auto"
                width={800}
                height={600}
              />
              <figcaption className="text-sm text-cc-gray-500 mt-2">
                Ficha técnica · Tubo DN400 PA-1 conforme NBR 8890
              </figcaption>
            </figure>
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
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo de concreto tem dois tipos de encaixe: ponta e bolsa (PB) e macho e fêmea
                (C2). O encaixe é o sistema que une uma peça à seguinte ao longo da linha de
                drenagem.
              </p>
              <p>
                No ponta e bolsa, uma extremidade do tubo é alargada — a bolsa — e recebe a ponta
                do tubo seguinte. No macho e fêmea, as bordas têm um ressalto que se acopla,
                resultando em junta mais alinhada entre as peças.
              </p>
              <p>
                Para drenagem pluvial comum, o ponta e bolsa resolve. Quando a obra exige maior
                precisão de alinhamento ou vedação, o macho e fêmea é o indicado.
              </p>
            </div>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/5' }}>
              <Image
                src="/images/tubo-de-concreto/tubos-concreto-fileira-lateral-perspectiva-diametros-variados-029-central-concreto-ivoti.webp"
                alt="Fileira de tubos de concreto em perspectiva lateral mostrando diâmetros variados — Central do Concreto Ivoti"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-cc-black mb-4 text-center">Qual tipo de encaixe você precisa?</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white hover:bg-green-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.117 1.527 5.845L.057 23.998l6.304-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.359-.214-3.742.981 1.001-3.648-.234-.374A9.818 9.818 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
                </svg>
                Quer saber qual encaixe usar? Fale pelo WhatsApp
              </a>
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
                Os tubos de concreto estão disponíveis do Ø20 ao Ø150 cm, sempre medidos pelo
                diâmetro interno da peça. O diâmetro certo depende do volume de água que a linha
                precisa escoar.
              </p>
              <p>
                Diâmetros menores, como o Ø20 e o Ø30, atendem drenagem de pouca vazão, em
                ligações simples e áreas pequenas. Diâmetros médios, na faixa do Ø40 ao Ø60, são
                os mais usados na drenagem pluvial de ruas e loteamentos. Os diâmetros maiores, do
                Ø80 ao Ø150, ficam para galerias e redes que recolhem grande volume de água.
              </p>
              <p>
                Dimensionar abaixo do necessário faz a rede transbordar nas chuvas fortes; acima
                do necessário, encarece a obra sem motivo.
              </p>
              <p>
                A página{" "}
                <Link
                  href="/tubo-de-concreto/diametros"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  Diâmetros e medidas do tubo de concreto
                </Link>{" "}
                traz a tabela completa e mostra como calcular o diâmetro pela vazão.
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-cc-black mb-4">Precisa definir o diâmetro certo para sua obra?</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white hover:bg-green-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.117 1.527 5.845L.057 23.998l6.304-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.359-.214-3.742.981 1.001-3.648-.234-.374A9.818 9.818 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
                </svg>
                Falar com a equipe pelo WhatsApp
              </a>
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
                raio de cerca de 120 km. O catálogo do Ø20 ao Ø150 fica em pronta entrega
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

      {/* CITY PILLS — seção dark */}
      <section className="bg-cc-black py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-lg font-semibold mb-8">
            Toque na sua cidade pra falar pelo WhatsApp:
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Ivoti",
              "Dois Irmãos",
              "Estância Velha",
              "Bom Princípio",
              "Lindolfo Collor",
              "São José do Hortêncio",
              "Presidente Lucena",
              "Novo Hamburgo",
              "Campo Bom",
              "Sapiranga",
              "Picada Café",
              "Morro Reuter",
              "Santa Maria do Herval",
              "Nova Petrópolis",
              "Canela",
              "Gramado",
            ].map((cidade) => (
              <a
                key={cidade}
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  `Olá! Quero falar sobre tubos de concreto com entrega em ${cidade}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-cc-gray-300 rounded-full px-4 py-1.5 text-sm text-white hover:border-cc-orange hover:text-cc-orange transition-colors"
              >
                {cidade}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-2">
            <Image
              src="/images/tubo-de-concreto/escavadeira-aplicando-tubos-concreto-obra-drenagem-real-048-central-concreto-ivoti.webp"
              alt="Escavadeira aplicando tubos de concreto em obra de drenagem pluvial — Central do Concreto Ivoti"
              width={1600}
              height={900}
              className="w-full rounded-2xl object-cover aspect-video"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA MID-PAGE */}
      <div className="bg-cc-black px-6 py-12 text-center">
        <div className="mx-auto max-w-xl">
          <p className="text-xl font-semibold text-white mb-2">
            Qual diâmetro você precisa?
          </p>
          <p className="text-white/70 text-sm mb-8">
            Fale com a equipe — orçamento rápido pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir orçamento pelo WhatsApp
          </a>
        </div>
      </div>

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
            Atendimento: Ivoti e cidades em raio de 120 km
          </p>
        </div>
      </section>
    </>
  );
}
