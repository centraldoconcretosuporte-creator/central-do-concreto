import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/revestimentos-externos/mosaico-3d";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const SITE_URL = "https://centraldoconcretoentrega.com.br";

const PAGE_TITLE =
  "Revestimento Mosaico 3D Cimentício · Peças Cúbicas em Relevo · Central do Concreto";
const PAGE_DESCRIPTION =
  "Revestimento Mosaico 3D cimentício em peças cúbicas com relevo tridimensional · malha visual densa para fachadas modernas · acabamento natural e efeito Cortein · fabricação local em Ivoti-RS.";
const HERO_IMG =
  "/cluster-revestimentos-externos/revestimentos-mosaico-3d-cimenticio-ivoti.webp";
const HERO_ALT =
  "Fachada residencial com revestimento Mosaico 3D em concreto cimentício · peças cúbicas em relevo formando malha visual densa · Central do Concreto Ivoti RS";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Revestimento Mosaico 3D Cimentício · Peças Cúbicas em Relevo",
    description:
      "Revestimento Mosaico 3D cimentício · peças cúbicas em relevo · malha visual densa · Ivoti-RS.",
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
    title:
      "Revestimento Mosaico 3D Cimentício · Peças Cúbicas em Relevo",
    description:
      "Revestimento Mosaico 3D cimentício · peças cúbicas em relevo · malha visual densa · Ivoti-RS.",
    images: [`${SITE_URL}${HERO_IMG}`],
  },
};

type Variante = {
  nome: string;
  bio: string;
  foto: string;
  alt: string;
};

const variantes: Variante[] = [
  {
    nome: "Natural",
    bio: "Cinza concreto puro · base neutra",
    foto: "/cluster-revestimentos-externos/revestimentos-mosaico-3d-cimenticio-ivoti.webp",
    alt: "Mosaico 3D acabamento natural · peças cúbicas em concreto cinza puro · Central do Concreto Ivoti RS",
  },
  {
    nome: "Cortein",
    bio: "Tom oxidado quente · painel marcante",
    foto: "/cluster-revestimentos-externos/revestimentos-mosaico-3d-cortein-cimenticio-ivoti.webp",
    alt: "Mosaico 3D com efeito Cortein · peças cúbicas em tom oxidado quente · Central do Concreto Ivoti RS",
  },
];

const faqs = [
  {
    q: "Mosaico 3D pode ser usado em parede interna ou só em externa?",
    a: "O Mosaico 3D da Central é fabricado pra externa · traço de concreto resistente a UV e variação térmica. Tecnicamente pode ser usado em parede interna se o cliente preferir, mas a Central recomenda outros revestimentos para interno por uma razão de proporção · o peso e a espessura do Mosaico 3D são dimensionados pra alvenaria externa, em parede interna fica superdimensionado.",
  },
  {
    q: "O efeito Cortein do Mosaico 3D dura quanto tempo e como funciona o prazo?",
    a: "O Cortein é tratamento pigmentado aplicado em fábrica nas peças que pedem o efeito de ferro envelhecido · não é tinta superficial que descasca, é pigmento incorporado na camada de acabamento durante o processo de fabricação. A durabilidade segue a do próprio revestimento cimentício · décadas sem manutenção. A Central tem estoque de Cortein para metragens pequenas e médias · volumes maiores entram em produção, prazo a consultar conforme a metragem.",
  },
  {
    q: "Quantas peças de Mosaico 3D cabem em 1 m²?",
    a: "O Mosaico 3D vem em placas modulares · o consumo por m² depende da dimensão da placa específica produzida pela Central no lote. Pra metragens precisas, a equipe da Central faz o levantamento e o cálculo de consumo antes do orçamento · basta enviar a fachada desenhada ou foto com medidas pelo WhatsApp.",
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
          name: "Mosaico 3D",
          item: "https://centraldoconcretoentrega.com.br/revestimentos-externos/mosaico-3d",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Mosaico 3D pode ser usado em parede interna ou só em externa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Mosaico 3D da Central é fabricado pra externa · traço de concreto resistente a UV e variação térmica. Tecnicamente pode ser usado em parede interna se o cliente preferir, mas a Central recomenda outros revestimentos para interno por uma razão de proporção · o peso e a espessura do Mosaico 3D são dimensionados pra alvenaria externa, em parede interna fica superdimensionado.",
          },
        },
        {
          "@type": "Question",
          name: "O efeito Cortein do Mosaico 3D dura quanto tempo e como funciona o prazo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Cortein é tratamento pigmentado aplicado em fábrica nas peças que pedem o efeito de ferro envelhecido · não é tinta superficial que descasca, é pigmento incorporado na camada de acabamento durante o processo de fabricação. A durabilidade segue a do próprio revestimento cimentício · décadas sem manutenção. A Central tem estoque de Cortein para metragens pequenas e médias · volumes maiores entram em produção, prazo a consultar conforme a metragem.",
          },
        },
        {
          "@type": "Question",
          name: "Quantas peças de Mosaico 3D cabem em 1 m²?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Mosaico 3D vem em placas modulares · o consumo por m² depende da dimensão da placa específica produzida pela Central no lote. Pra metragens precisas, a equipe da Central faz o levantamento e o cálculo de consumo antes do orçamento · basta enviar a fachada desenhada ou foto com medidas pelo WhatsApp.",
          },
        },
      ],
    },
  ],
};

export default function Mosaico3DPage() {
  const ctaMessage = "Olá, quero falar sobre o revestimento Mosaico 3D.";
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
              Mosaico 3D
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
            Revestimento Mosaico 3D
            <span className="block text-2xl md:text-3xl font-medium mt-3 text-cc-orange">
              Peças cúbicas em relevo · malha visual densa
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Mosaico 3D é o revestimento cimentício da Central que cria malha
            tridimensional contínua na parede · peças cúbicas em concreto
            pré-moldado com pequenas saliências e recuos formando textura visual
            densa e fina. Aplicado em painel pontual ou parede inteira, funciona
            como base discreta com profundidade real · ideal para fachadas
            modernas que pedem riqueza de textura sem desenho gráfico marcado.
            Disponível em acabamento natural e com efeito Cortein (também chamado
            Oxi).
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
            Falar pelo WhatsApp sobre Mosaico 3D
          </a>
          <p className="mt-8 text-sm md:text-base text-white/90 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>✓ Peças cúbicas 3D</span>
            <span>✓ Natural + Cortein</span>
            <span>✓ Instaladores parceiros</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia do revestimento Mosaico 3D</Eyebrow>
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
                  O que é Mosaico 3D
                </a>
              </li>
              <li>
                <a href="#variantes" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Variantes do Mosaico 3D
                </a>
              </li>
              <li>
                <a href="#onde-aplicar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Onde aplicar Mosaico 3D
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Mosaico 3D comparado com Diamante 3D
                </a>
              </li>
              <li>
                <a href="#como-instalar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Como instalar Mosaico 3D
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
          O que é Mosaico 3D?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Mosaico 3D é placa cimentícia com cubos em relevo formando malha visual
          densa na fachada. Cada placa tem dezenas de cubos com leves saliências e
          recuos que criam profundidade real na superfície. A textura é fina o
          suficiente pra ler bem de perto (no jardim ou na entrada) e densa o
          suficiente pra ler como pano contínuo a distância (no muro ou na fachada
          inteira).
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A diferença do Mosaico 3D pra outros revestimentos com textura está na
          uniformidade do relevo · ao invés de simular pedra rachada (Rock Face,
          Moledo) ou criar desenho geométrico forte (Diamante 3D), o Mosaico 3D
          entrega textura neutra com profundidade que funciona como base pra outros
          elementos do projeto (madeira, vidro, aço).
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

        <h2 id="variantes" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Variantes do Mosaico 3D
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Mosaico 3D vem em dois acabamentos · natural (cinza concreto puro) e com
          efeito Cortein (tom oxidado quente). O natural mantém o foco na textura
          tridimensional · funciona como base neutra que combina com qualquer
          elemento do projeto. O Cortein adiciona contraste de tom · cria painel
          mais marcante visualmente, com cor quente que se destaca de elementos
          cinzas vizinhos.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          A diferença entre as duas variantes vai além da cor · com Cortein, os
          cubos do mosaico ganham contraste tonal entre faces que pegam mais ou
          menos pigmento, o que intensifica a leitura tridimensional. Em natural, a
          leitura 3D vem só da luz e sombra física · sem reforço tonal.
        </p>

        {/* GRADE 2 VARIANTES */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          {variantes.map((v) => (
            <div
              key={v.nome}
              className="block border border-cc-gray-200 rounded-lg overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-cc-gray-50">
                <Image
                  src={v.foto}
                  alt={v.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1">{v.nome}</h3>
                <p className="text-sm text-cc-gray-600 leading-snug">{v.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 id="onde-aplicar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Onde aplicar Mosaico 3D?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Mosaico 3D rende em duas situações principais · fachada moderna
          minimalista que pede base de textura sem desenho forte, e painel pontual
          em ambiente externo com leitura próxima (jardim, varanda, entrada
          coberta). Pela textura densa e fina, funciona bem em qualquer escala de
          painel · de 1 m² em pilar isolado até fachada inteira de 50 m².
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Em muro divisório, Mosaico 3D natural cria base sóbria que se integra ao
          paisagismo · ao contrário do Diamante 3D ou Rock Face, não compete
          visualmente com plantas, pedras e elementos vivos. Em painel da garagem
          ou entrada, o Cortein funciona melhor porque destaca o painel como zona
          arquitetônica.
        </p>

        <h2 id="comparativo" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Mosaico 3D comparado com Diamante 3D
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Mosaico 3D e{" "}
          <Link
            href="/revestimentos-externos/diamante-3d"
            className="text-cc-orange underline hover:no-underline"
          >
            Diamante 3D
          </Link>{" "}
          são os dois revestimentos cimentícios tridimensionais da Central ·
          diferem na intensidade do desenho e na distância de leitura ideal.
          Diamante 3D tem facetas grandes que formam diamantes claros visíveis de
          longe · Mosaico 3D tem cubos pequenos que criam malha visual densa lida
          melhor de perto.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A escolha entre os dois depende da função visual do painel. Mosaico 3D
          funciona como base · textura rica sem competir com outros elementos.
          Diamante 3D funciona como acento · ponto focal arquitetônico forte. Em
          projeto que pede os dois (base de Mosaico 3D na fachada + acento de
          Diamante 3D no painel da garagem), o contraste de escala torna cada um
          mais legível.
        </p>

        <h2 id="como-instalar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Como instalar Mosaico 3D
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Instalação de Mosaico 3D envolve regularização da alvenaria, argamassa
          colante AC-III, posicionamento por carreira e rejunte específico. A
          Central trabalha com instaladores parceiros que conhecem o produto e
          podemos indicar a partir da sua cidade.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A instalação é separada do fornecimento. Quem prefere comprar só as peças
          e contratar instalador próprio também tem essa opção · o produto vem
          paletizado pronto pra aplicação.
        </p>

        <h2 id="entrega-orcamento" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Entrega e orçamento
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          A Central entrega Mosaico 3D em 16 cidades dentro do raio de 120 km a
          partir de Ivoti com caminhão próprio e descarga no local. Para orçamento,
          toque na sua cidade abaixo · cada link abre uma mensagem WhatsApp pronta
          sobre o modelo Mosaico 3D.
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
                  `Quero falar sobre Mosaico 3D cimentício com entrega em ${cidade}.`,
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
            Perguntas frequentes sobre Mosaico 3D
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
            Pronto pra orçar seu Mosaico 3D?
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Peças cúbicas em relevo tridimensional · acabamento natural ou efeito
            Cortein · base de textura pra fachadas modernas · instaladores
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
              href="/revestimentos-externos/diamante-3d"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Diamante 3D
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
