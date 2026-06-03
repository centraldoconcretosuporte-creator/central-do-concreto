import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/revestimentos-externos/placa-cimenticia";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const SITE_URL = "https://centraldoconcretoentrega.com.br";

const PAGE_TITLE =
  "Revestimento Placa Cimentícia · Acabamento Liso Contemporâneo · Central do Concreto";
const PAGE_DESCRIPTION =
  "Revestimento Placa Cimentícia em concreto pré-moldado · acabamento liso de grande formato para fachadas modernas · base limpa que combina com madeira, vidro e elementos contrastantes · fabricação local em Ivoti-RS.";
const HERO_IMG =
  "/cluster-revestimentos-externos/revestimentos-placa-cimenticia-ivoti.webp";
const HERO_ALT =
  "Fachada residencial com revestimento Placa Cimentícia em concreto · acabamento liso de grande formato como base contemporânea · Central do Concreto Ivoti RS";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Revestimento Placa Cimentícia · Acabamento Liso Contemporâneo",
    description:
      "Revestimento Placa Cimentícia · placa lisa de grande formato · base limpa pra fachadas modernas · Ivoti-RS.",
    url: CANONICAL_URL,
    type: "article",
    locale: "pt_BR",
    siteName: "Central do Concreto",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 1200,
        alt: HERO_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revestimento Placa Cimentícia · Acabamento Liso Contemporâneo",
    description:
      "Revestimento Placa Cimentícia · placa lisa de grande formato · base limpa pra fachadas modernas · Ivoti-RS.",
    images: [`${SITE_URL}${HERO_IMG}`],
  },
};

const faqs = [
  {
    q: "Por que escolher Placa Cimentícia se posso fazer reboco liso pintado mais barato?",
    a: "A diferença entre Placa Cimentícia e reboco pintado está em três pontos · durabilidade (placa não desbota nem trinca por ciclo térmico, reboco pintado precisa repintura a cada 4-8 anos), planicidade (placa é fabricada em fôrma plana, reboco aplicado in loco varia conforme o pedreiro), e cor sólida (placa tem pigmento do miolo, reboco é só superficial). Em obra de longo prazo, a placa sai mais barata por m² no acumulado.",
  },
  {
    q: "Placa Cimentícia funciona em fachada de altura grande sem juntas aparentes?",
    a: "A Placa Cimentícia tem juntas (a junta entre placa e placa é parte do produto) · não é placa monolítica. A diferença é que pelo formato grande, as juntas ficam discretas, espaçadas, e podem ser tratadas em tom próximo da placa pra reduzir visibilidade. Em fachadas de pé direito duplo (até 7m), a aplicação fica visualmente limpa · acima disso vale conversar com a equipe técnica sobre dilatação.",
  },
  {
    q: "Posso aplicar Placa Cimentícia em fachada que já tem reboco antigo?",
    a: "Sim, desde que o reboco existente esteja firme, sem trincas estruturais nem soltura. A regularização da superfície antes da aplicação é o ponto crítico · a placa precisa de base plana pra ficar alinhada. A equipe da Central pode indicar instalador parceiro que avalia a alvenaria existente antes do orçamento.",
  },
];

const cidades = [
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
          name: "Revestimentos Externos",
          item: "https://centraldoconcretoentrega.com.br/revestimentos-externos",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Placa Cimentícia",
          item: "https://centraldoconcretoentrega.com.br/revestimentos-externos/placa-cimenticia",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Por que escolher Placa Cimentícia se posso fazer reboco liso pintado mais barato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A diferença entre Placa Cimentícia e reboco pintado está em três pontos · durabilidade (placa não desbota nem trinca por ciclo térmico, reboco pintado precisa repintura a cada 4-8 anos), planicidade (placa é fabricada em fôrma plana, reboco aplicado in loco varia conforme o pedreiro), e cor sólida (placa tem pigmento do miolo, reboco é só superficial). Em obra de longo prazo, a placa sai mais barata por m² no acumulado.",
          },
        },
        {
          "@type": "Question",
          name: "Placa Cimentícia funciona em fachada de altura grande sem juntas aparentes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Placa Cimentícia tem juntas (a junta entre placa e placa é parte do produto) · não é placa monolítica. A diferença é que pelo formato grande, as juntas ficam discretas, espaçadas, e podem ser tratadas em tom próximo da placa pra reduzir visibilidade. Em fachadas de pé direito duplo (até 7m), a aplicação fica visualmente limpa · acima disso vale conversar com a equipe técnica sobre dilatação.",
          },
        },
        {
          "@type": "Question",
          name: "Posso aplicar Placa Cimentícia em fachada que já tem reboco antigo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, desde que o reboco existente esteja firme, sem trincas estruturais nem soltura. A regularização da superfície antes da aplicação é o ponto crítico · a placa precisa de base plana pra ficar alinhada. A equipe da Central pode indicar instalador parceiro que avalia a alvenaria existente antes do orçamento.",
          },
        },
      ],
    },
  ],
};

export default function PlacaCimenticiaPage() {
  const ctaMessage = "Olá, quero falar sobre o revestimento Placa Cimentícia.";
  const ctaUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(ctaMessage)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BREADCRUMB VISUAL */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-cc-gray-200">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-cc-gray-600">
            <li>
              <Link href="/" className="hover:text-cc-orange transition-colors">
                Início
              </Link>
            </li>
            <li aria-hidden="true" className="text-cc-gray-400">
              ›
            </li>
            <li>
              <Link
                href="/revestimentos-externos"
                className="hover:text-cc-orange transition-colors"
              >
                Revestimentos Externos
              </Link>
            </li>
            <li aria-hidden="true" className="text-cc-gray-400">
              ›
            </li>
            <li className="text-cc-gray-900 font-medium" aria-current="page">
              Placa Cimentícia
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center justify-center">
        <Image
          src={HERO_IMG}
          alt={HERO_ALT}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Revestimento Placa Cimentícia
            <span className="block text-2xl md:text-3xl font-medium mt-3 text-cc-orange">
              Acabamento liso · base contemporânea pra fachadas modernas
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Placa Cimentícia é o revestimento cimentício mais minimalista da
            Central · placa lisa de grande formato em concreto pré-moldado, sem
            textura, sem desenho. Funciona como base limpa pra fachadas modernas
            que pedem volumes sólidos sem ruído visual · permite que outros
            elementos do projeto (madeira, vidro, aço, paisagismo) sejam o
            protagonista. Fabricado em Ivoti em acabamento natural e Cortein
            (também chamado Oxi) sob encomenda.
          </p>
          <a
            href={ctaUrl}
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
            Falar pelo WhatsApp sobre Placa Cimentícia
          </a>
          <p className="mt-8 text-sm md:text-base text-white/90 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>✓ Placa lisa grande formato</span>
            <span>✓ Acabamento contemporâneo</span>
            <span>✓ Instaladores parceiros</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia do revestimento Placa Cimentícia</Eyebrow>
        <aside
          aria-label="Índice deste guia"
          className="mb-12 p-6 bg-cc-gray-50 rounded-lg border border-cc-gray-200"
        >
          <p className="text-sm font-semibold text-cc-gray-700 mb-3 uppercase tracking-wide">
            Neste guia
          </p>
          <nav>
            <ol className="space-y-2 text-base text-cc-gray-700">
              <li>
                <a href="#o-que-e" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  O que é Placa Cimentícia
                </a>
              </li>
              <li>
                <a href="#acabamento" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Acabamento da Placa Cimentícia
                </a>
              </li>
              <li>
                <a href="#onde-aplicar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Onde aplicar Placa Cimentícia
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Placa Cimentícia comparada com Ripado Cimentício
                </a>
              </li>
              <li>
                <a href="#como-instalar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Como instalar Placa Cimentícia
                </a>
              </li>
              <li>
                <a href="#entrega-orcamento" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Entrega e orçamento
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <h2 id="o-que-e" className="text-3xl md:text-4xl font-bold mt-4 mb-6 scroll-mt-24">
          O que é Placa Cimentícia?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Placa Cimentícia é placa lisa em concreto pré-moldado de grande
          formato, sem textura e sem desenho. O acabamento é o concreto na sua
          expressão mais limpa · cor sólida, superfície plana, geometria reta ·
          formato grande pra reduzir ao mínimo as juntas visíveis na parede.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A função da Placa Cimentícia é arquitetônica · ela não tenta competir
          visualmente com nada. Em projetos modernos que pedem volumes sólidos
          sem ruído (a casa como bloco, o muro como plano contínuo, o painel como
          superfície neutra), a Placa Cimentícia entrega exatamente isso · base
          limpa que valoriza o que vier por cima ou ao lado.
        </p>

        <div className="my-12 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={HERO_IMG}
            alt={HERO_ALT}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <h2 id="acabamento" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Acabamento da Placa Cimentícia
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          A Placa Cimentícia é fabricada em acabamento natural (cinza concreto
          puro) e com efeito Cortein sob encomenda · sem outras variantes
          cromáticas. A escolha do acabamento depende exclusivamente do papel do
          painel no projeto · natural mantém a placa neutra como base, Cortein
          transforma a placa em ponto focal de cor quente.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Em fachada residencial contemporânea, o uso mais comum é Placa
          Cimentícia natural como base + elementos contrastantes em outros
          materiais (revestimento de madeira em volume específico, esquadrias
          pretas, paisagismo). Em painel de entrada ou muro frontal pontual, o
          Cortein funciona bem porque a placa lisa potencializa a cor sólida.
        </p>

        <h2 id="onde-aplicar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Onde aplicar Placa Cimentícia?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Placa Cimentícia é o revestimento ideal pra três aplicações · fachada
          contemporânea grande tratada como pano único, muro frontal limpo sem
          detalhe textural, e composições híbridas em que a placa é a base e
          outros materiais (madeira, pedra natural, vidro) são os protagonistas.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Em fachada moderna, funciona melhor a partir de 8 m² contínuos · pano
          menor que isso perde o efeito de placa grande e parece junta dupla de
          reboco. Em muro, dialoga bem com paisagismo orgânico (gramado,
          vegetação alta) porque a parede sólida valoriza o que está vivo. Em
          composição híbrida, deixa madeira tratada e pedra natural respirarem ·
          cada material aparece com força porque a placa não compete.
        </p>

        <h2 id="comparativo" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Placa Cimentícia comparada com Ripado Cimentício
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Placa Cimentícia e{" "}
          <Link
            href="/revestimentos-externos/ripado-cimenticio"
            className="text-cc-orange underline hover:no-underline"
          >
            Ripado Cimentício
          </Link>{" "}
          são os dois revestimentos minimalistas da Central · diferem na direção
          visual e no tipo de movimento que criam. Placa Cimentícia é estática e
          horizontal · superfície contínua sem direção marcada. Ripado Cimentício
          tem ritmo vertical com ripas paralelas · cria movimento ascendente na
          parede.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A escolha entre os dois depende do efeito desejado · Placa Cimentícia
          traz peso e calma (boa pra ancorar fachada, ler como volume sólido),
          Ripado Cimentício traz leveza e direção (eleva visualmente o pé direito,
          dialoga com elementos verticais). Em projeto que usa os dois, a base
          costuma ser Placa e o acento é Ripado em painéis pontuais.
        </p>

        <h2 id="como-instalar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Como instalar Placa Cimentícia
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Instalação de Placa Cimentícia envolve regularização da alvenaria,
          argamassa colante AC-III, posicionamento por carreira e rejunte
          específico. A Central trabalha com instaladores parceiros que conhecem o
          produto e podemos indicar a partir da sua cidade.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A instalação é separada do fornecimento. Quem prefere comprar só as
          peças e contratar instalador próprio também tem essa opção · o produto
          vem paletizado pronto pra aplicação.
        </p>

        <h2 id="entrega-orcamento" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Entrega e orçamento
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          A Central entrega Placa Cimentícia em 16 cidades dentro do raio de 120
          km a partir de Ivoti com caminhão próprio e descarga no local. Para
          orçamento, toque na sua cidade abaixo · cada link abre uma mensagem
          WhatsApp pronta sobre o modelo Placa Cimentícia.
        </p>
      </article>

      {/* CITY PILLS — seção dark */}
      <section className="bg-cc-black py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-lg font-semibold mb-8">
            Toque na sua cidade pra falar pelo WhatsApp:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {cidades.map((cidade) => (
              <a
                key={cidade}
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  `Quero falar sobre Placa Cimentícia com entrega em ${cidade}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-cc-gray-300 rounded-full px-4 py-1.5 text-sm text-white hover:bg-cc-whatsapp hover:border-cc-whatsapp hover:text-white transition-colors"
              >
                {cidade}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-center text-cc-gray-400 text-sm">
            Caminhão próprio · raio de 120 km a partir de Ivoti-RS
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-10">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold">
            Perguntas frequentes sobre Placa Cimentícia
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border border-cc-gray-200 rounded-lg p-4 hover:border-cc-orange transition-colors"
            >
              <summary className="cursor-pointer list-none flex justify-between items-start gap-4">
                <h3 className="inline text-lg font-semibold">{f.q}</h3>
                <span className="text-cc-orange text-2xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-cc-gray-700">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cc-black py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto pra orçar sua Placa Cimentícia?
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Placa lisa de grande formato · acabamento natural ou Cortein sob
            encomenda · base limpa pra fachadas contemporâneas · instaladores
            parceiros indicados · entrega no raio de 120 km. Toque abaixo e fale
            pelo WhatsApp com a Central.
          </p>
          <a
            href={ctaUrl}
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
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* CROSS-LINK · EXPLORE MAIS */}
      <section className="bg-white border-t border-cc-gray-200 py-10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-sm font-semibold text-cc-gray-600 mb-4 uppercase tracking-wide">
            Explore mais da Central
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-base">
            <Link
              href="/revestimentos-externos"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Revestimentos Externos
            </Link>
            <Link
              href="/revestimentos-externos/ripado-cimenticio"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Ripado Cimentício
            </Link>
            <Link
              href="/cobogos"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Cobogós
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
