import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/revestimentos-externos/rock-face";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const SITE_URL = "https://centraldoconcretoentrega.com.br";

const PAGE_TITLE =
  "Revestimento Rock Face Cimentício · Placa 30×10 cm em 4 cores · Central do Concreto";
const PAGE_DESCRIPTION =
  "Revestimento Rock Face cimentício em placa pré-moldada 30×10 cm · variantes Natural, Marfim, Areia e Grafite com opção de efeito Cortein · fabricação local em Ivoti-RS com entrega no raio de 120 km.";
const HERO_IMG =
  "/cluster-revestimentos-externos/revestimentos-rock-face-natural-cimenticio-ivoti.webp";
const HERO_ALT =
  "Revestimento Rock Face em concreto cimentício acabamento natural · placa 30×10 cm · Central do Concreto Ivoti RS";

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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
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
    bio: "Cinza concreto puro · base versátil",
    foto: "/cluster-revestimentos-externos/revestimentos-rock-face-natural-cimenticio-ivoti.webp",
    alt: "Variante Natural do Rock Face cimentício · cinza concreto puro · Central do Concreto Ivoti RS",
  },
  {
    nome: "Marfim",
    bio: "Creme claro · suaviza fachadas grandes",
    foto: "/cluster-revestimentos-externos/revestimentos-rock-face-marfim-cimenticio-ivoti.webp",
    alt: "Variante Marfim do Rock Face cimentício · creme claro · Central do Concreto Ivoti RS",
  },
  {
    nome: "Grafite",
    bio: "Cinza escuro · pegada urbana moderna",
    foto: "/cluster-revestimentos-externos/revestimentos-rock-face-grafite-cimenticio-ivoti.webp",
    alt: "Variante Grafite do Rock Face cimentício · cinza escuro profundo · Central do Concreto Ivoti RS",
  },
  {
    nome: "Natural com Cortein",
    bio: "Cinza + tons quentes de ferro envelhecido",
    foto: "/cluster-revestimentos-externos/revestimentos-rock-face-cortein-cimenticio-ivoti.webp",
    alt: "Variante Natural com efeito Cortein do Rock Face cimentício · tons de ferro envelhecido · Central do Concreto Ivoti RS",
  },
  {
    nome: "Areia com Cortein",
    bio: "Bege quente · contraste decorativo",
    foto: "/cluster-revestimentos-externos/revestimentos-rock-face-areia-cortein-cimenticio-ivoti.webp",
    alt: "Variante Areia com efeito Cortein do Rock Face cimentício · bege quente com tons oxidados · Central do Concreto Ivoti RS",
  },
  {
    nome: "Grafite com Cortein",
    bio: "Cinza escuro + tons oxidados",
    foto: "/cluster-revestimentos-externos/revestimentos-rock-face-grafite-cortein-cimenticio-ivoti.webp",
    alt: "Variante Grafite com efeito Cortein do Rock Face cimentício · cinza escuro com tons oxidados · Central do Concreto Ivoti RS",
  },
];

const faqs = [
  {
    q: "Rock Face desbota com o tempo se ficar exposto ao sol?",
    a: "Não. A cor do Rock Face é sólida do miolo da peça · pigmento adicionado ao concreto fresco antes da prensagem, não é pintura aplicada na superfície. Isso significa que mesmo após anos de exposição UV a cor permanece, sem desbote nem descascamento. Aplica-se às quatro cores (Natural, Marfim, Areia, Grafite) e ao efeito Cortein.",
  },
  {
    q: "Quantas peças de Rock Face cabem em 1 m² de fachada?",
    a: "A placa Rock Face de 30×10 cm precisa de aproximadamente 33 peças por m², considerando junta de 3 mm entre placas. Para metragens precisas e cálculo de perda (recortes em quina, vão de janela, beiral), a equipe da Central faz o levantamento antes do orçamento · basta enviar a fachada desenhada ou foto com medidas pelo WhatsApp.",
  },
  {
    q: "Qual variante do Rock Face combina melhor com fachada moderna?",
    a: "Para fachada residencial contemporânea, Grafite (com ou sem Cortein) é a variante mais escolhida · cria base sóbria que combina com esquadrias pretas, madeira tratada e elementos metálicos. Marfim funciona melhor em fachadas grandes onde a cor clara expande visualmente o pé direito. Natural é a opção mais versátil · dialoga com qualquer estilo arquitetônico sem competir.",
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
          name: "Rock Face",
          item: "https://centraldoconcretoentrega.com.br/revestimentos-externos/rock-face",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Rock Face desbota com o tempo se ficar exposto ao sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. A cor do Rock Face é sólida do miolo da peça · pigmento adicionado ao concreto fresco antes da prensagem, não é pintura aplicada na superfície. Isso significa que mesmo após anos de exposição UV a cor permanece, sem desbote nem descascamento. Aplica-se às quatro cores (Natural, Marfim, Areia, Grafite) e ao efeito Cortein.",
          },
        },
        {
          "@type": "Question",
          name: "Quantas peças de Rock Face cabem em 1 m² de fachada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A placa Rock Face de 30×10 cm precisa de aproximadamente 33 peças por m², considerando junta de 3 mm entre placas. Para metragens precisas e cálculo de perda (recortes em quina, vão de janela, beiral), a equipe da Central faz o levantamento antes do orçamento · basta enviar a fachada desenhada ou foto com medidas pelo WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Qual variante do Rock Face combina melhor com fachada moderna?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para fachada residencial contemporânea, Grafite (com ou sem Cortein) é a variante mais escolhida · cria base sóbria que combina com esquadrias pretas, madeira tratada e elementos metálicos. Marfim funciona melhor em fachadas grandes onde a cor clara expande visualmente o pé direito. Natural é a opção mais versátil · dialoga com qualquer estilo arquitetônico sem competir.",
          },
        },
      ],
    },
  ],
};

export default function RockFacePage() {
  const ctaMessage = "Olá, quero falar sobre o revestimento Rock Face.";
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
              Rock Face
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
            Revestimento Rock Face
            <span className="block text-2xl md:text-3xl font-medium mt-3 text-cc-orange">
              Placa 30×10 cm em 4 cores · Central do Concreto Ivoti
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Rock Face é o revestimento cimentício mais clássico da Central · placa
            horizontal 30×10 cm com textura de pedra natural fendida, modular,
            fácil de instalar. Fabricado em Ivoti em quatro cores (Natural,
            Marfim, Areia, Grafite) com opção de efeito Cortein (também chamado
            Oxi) simulando ferro envelhecido. Entrega no raio de 120 km com
            caminhão próprio e instaladores parceiros indicados.
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
            Falar pelo WhatsApp sobre Rock Face
          </a>
          <p className="mt-8 text-sm md:text-base text-white/90 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>✓ Placa 30×10 cm</span>
            <span>✓ 4 cores · Cortein opcional</span>
            <span>✓ Instaladores parceiros</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia do revestimento Rock Face</Eyebrow>
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
                  O que é Rock Face
                </a>
              </li>
              <li>
                <a href="#variantes" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Variantes do Rock Face
                </a>
              </li>
              <li>
                <a href="#onde-aplicar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Onde aplicar Rock Face
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Rock Face comparado com Moledo
                </a>
              </li>
              <li>
                <a href="#como-instalar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Como instalar Rock Face
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
          O que é Rock Face?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Rock Face é placa cimentícia pré-moldada de 30×10 cm com superfície
          fendida que imita pedra natural quebrada. A peça é fabricada em concreto
          vibrado com agregado fino e curada em forma específica · cada placa tem
          textura tridimensional única no relevo da face exposta, replicando o
          padrão de pedra rachada à mão.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A modularidade do formato 30×10 cm permite assentamento em fileira
          horizontal contínua sem precisar de corte na obra, e a espessura
          controlada deixa o peso por m² no patamar do reboco · sem precisar de
          reforço estrutural na alvenaria. É o modelo de revestimento cimentício
          mais vendido da Central porque combina visual de pedra natural com custo
          e instalação de placa industrial.
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
          Variantes do Rock Face
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          A Central fabrica Rock Face em quatro cores · Natural (cinza concreto
          puro), Marfim (creme claro), Areia (bege quente) e Grafite (cinza
          escuro profundo) · todas com opção de efeito Cortein (também chamado
          Oxi) aplicado em fábrica simulando tom de ferro oxidado/envelhecido. A
          cor é sólida do miolo da peça · não é pintura sobre a superfície, o que
          elimina risco de desbote ou descascamento ao longo dos anos.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Cada cor combina com famílias diferentes de projeto · Natural é a
          escolha versátil que dialoga com qualquer estilo, Marfim suaviza
          fachadas grandes e cria sensação de amplitude, Areia traz tom quente que
          combina com madeira tratada e elementos naturais, Grafite ancora
          fachadas modernas com pegada urbana. O efeito Cortein é o coringa
          decorativo · sobre qualquer das quatro cores cria contraste de tons
          quentes que destaca a parede como ponto focal arquitetônico.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          A grade abaixo mostra as 6 variantes com estoque rápido · Areia pura e
          Marfim com Cortein são fabricadas sob consulta com prazo conforme
          metragem.
        </p>

        {/* GRADE 6 VARIANTES */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
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
          Onde aplicar Rock Face?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Rock Face é o revestimento cimentício mais usado em fachada residencial
          frontal e muro divisório alto. A modularidade da placa 30×10 cm e a
          textura de pedra fendida produzem uma malha visual rica mas não
          excessiva · funciona bem em fachadas inteiras sem cansar a vista nem
          competir com outros elementos arquitetônicos da casa.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Para fachada moderna minimalista, a variante Grafite (sólida ou com
          Cortein) cria base sóbria que combina com esquadrias pretas e madeira
          tratada. Para projeto residencial clássico, Natural e Marfim são as
          escolhas mais comuns. Em muro divisório de fundo, Rock Face funciona
          melhor que cobogó porque fecha 100% da visão e ainda sobe rápido por
          carreira.
        </p>

        <h2 id="comparativo" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Rock Face comparado com Moledo
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Rock Face e Moledo são os dois revestimentos cimentícios mais escolhidos
          para fachada residencial · diferem na modularidade. Rock Face é placa
          única 30×10 cm em série regular · Moledo é mix de 17 medidas que evita
          repetição visual.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          A escolha entre os dois depende da intenção arquitetônica · Rock Face
          entrega ritmo previsível e cabe bem em fachadas que dialogam com
          elementos modulares (esquadrias, brise, painel ripado). Moledo entrega
          aleatoriedade controlada e cabe melhor em fachadas que pedem textura
          orgânica de muro de pedra. Ambos podem ser pedidos em acabamento natural
          ou com efeito Cortein.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Para entender melhor a diferença entre cimentício manufaturado e pedra
          natural assentada, vale visitar a comparação completa em{" "}
          <Link
            href="/revestimentos-externos/natural-ou-manufaturado"
            className="text-cc-orange underline hover:no-underline"
          >
            revestimento natural ou manufaturado
          </Link>
          .
        </p>

        <h2 id="como-instalar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Como instalar Rock Face?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Instalação de Rock Face envolve regularização da alvenaria, argamassa
          colante AC-III, posicionamento por carreira e rejunte específico. A
          Central trabalha com instaladores parceiros que conhecem o produto e
          podemos indicar a partir da sua cidade.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A instalação é separada do fornecimento. Quem prefere comprar só as
          peças e contratar instalador próprio também tem essa opção · o produto
          vem paletizado pronto pra aplicação.
        </p>

        <h2 id="entrega-orcamento" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Entrega — 16 cidades no raio de 120 km
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          A Central entrega Rock Face em 16 cidades dentro do raio de 120 km a
          partir de Ivoti com caminhão próprio e descarga no local. Para
          orçamento, toque na sua cidade abaixo · cada link abre uma mensagem
          WhatsApp pronta sobre o modelo Rock Face.
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
                  `Quero falar sobre Rock Face cimentício com entrega em ${cidade}.`,
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
            Perguntas frequentes sobre Rock Face
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
            Pronto pra orçar seu Rock Face?
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Placa 30×10 cm em 4 cores · efeito Cortein (também chamado Oxi)
            opcional · instaladores parceiros indicados · entrega no raio de 120
            km. Toque abaixo e fale pelo WhatsApp com a Central.
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
              href="/revestimentos-externos/moledo"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Moledo
            </Link>
            <Link
              href="/produtos/muros-e-gradis"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Muros e Gradis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
