import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/revestimentos-externos";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const SITE_URL = "https://centraldoconcretoentrega.com.br";

const PAGE_TITLE =
  "Revestimentos Externos Cimentícios: 6 Modelos, Aplicações e Entrega | Central do Concreto";
const PAGE_DESCRIPTION =
  "Revestimento externo manufaturado em concreto em 6 modelos cimentícios — Rock Face, Moledo, Diamante 3D, Mosaico 3D, Placa e Ripado — com instaladores parceiros e entrega no raio de 120 km a partir de Ivoti-RS.";

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
        url: `${SITE_URL}/cluster-revestimentos-externos/revestimentos-externos-hero-fachada-ivoti.webp`,
        width: 1200,
        height: 1200,
        alt: "Fachada residencial com revestimento cimentício manufaturado em concreto · Central do Concreto Ivoti RS",
      },
    ],
  },
};

type Modelo = {
  slug: string;
  nome: string;
  bio: string;
  descricao: string;
  foto: string;
  cardAlt: string;
  blocoAlt: string;
};

const modelos: Modelo[] = [
  {
    slug: "rock-face",
    nome: "Rock Face",
    bio: "Placa 30×10 cm em variantes natural e marfim",
    descricao:
      "Placa horizontal 30×10 cm com textura de pedra natural fendida. Disponível em variantes Natural (cinza concreto) e Marfim (creme claro). Aplicação tradicional em fachadas residenciais que pedem textura visual rica sem perder modularidade. Disponível também com efeito Cortein.",
    foto: "/cluster-revestimentos-externos/revestimentos-rock-face-natural-cimenticio-ivoti.webp",
    cardAlt:
      "Revestimento Rock Face cimentício · Placa 30×10 cm em variantes natural e marfim · Central do Concreto Ivoti RS",
    blocoAlt:
      "Revestimento Rock Face em concreto cimentício · placa 30×10 cm acabamento natural · Central do Concreto Ivoti RS",
  },
  {
    slug: "moledo",
    nome: "Moledo",
    bio: "Formatos irregulares · 17 medidas pra efeito natural",
    descricao:
      "Formatos irregulares em 17 medidas misturadas pra efeito de pedra natural assentada. Quebra a modularidade do Rock Face · ideal para fachadas que pedem textura orgânica e movimento visual. Variantes Areia, Marfim e Natural.",
    foto: "/cluster-revestimentos-externos/revestimentos-moledo-natural-cimenticio-ivoti.webp",
    cardAlt:
      "Revestimento Moledo cimentício · Formatos irregulares · 17 medidas pra efeito natural · Central do Concreto Ivoti RS",
    blocoAlt:
      "Revestimento Moledo em concreto cimentício · formatos irregulares acabamento natural · Central do Concreto Ivoti RS",
  },
  {
    slug: "diamante-3d",
    nome: "Diamante 3D",
    bio: "Facetas diagonais formando padrão de diamantes em alto relevo",
    descricao:
      "Peças quadradas com 4 facetas diagonais que formam padrão de diamantes em alto relevo · efeito tridimensional intenso pela alternância de luz e sombra entre as facetas. Indicado para muros e fachadas que pedem ponto focal visual de grande impacto · funciona em painéis pontuais (entrada, área social) ou parede inteira. Acabamento natural cinza · disponível também com efeito Cortein.",
    foto: "/cluster-revestimentos-externos/revestimentos-diamante-3d-cimenticio-ivoti.webp",
    cardAlt:
      "Revestimento Diamante 3D cimentício · facetas diagonais formando padrão de diamantes em alto relevo · Central do Concreto Ivoti RS",
    blocoAlt:
      "Muro residencial com revestimento Diamante 3D em concreto cimentício · facetas diagonais em alto relevo · Central do Concreto Ivoti RS",
  },
  {
    slug: "mosaico-3d",
    nome: "Mosaico 3D",
    bio: "Peças cúbicas em relevo tridimensional",
    descricao:
      "Peças cúbicas em relevo tridimensional formando malha visual densa. Indicado pra fachadas minimalistas que pedem ponto focal de textura · funciona em painéis pontuais (entrada, área social) ou parede inteira. Versão também disponível com efeito Cortein.",
    foto: "/cluster-revestimentos-externos/revestimentos-mosaico-3d-cimenticio-ivoti.webp",
    cardAlt:
      "Revestimento Mosaico 3D cimentício · Peças cúbicas em relevo tridimensional · Central do Concreto Ivoti RS",
    blocoAlt:
      "Revestimento Mosaico 3D em concreto cimentício · peças cúbicas em relevo tridimensional · Central do Concreto Ivoti RS",
  },
  {
    slug: "placa",
    nome: "Placa Cimentícia",
    bio: "Placa lisa de grande formato pra acabamento contemporâneo",
    descricao:
      "Placa lisa de grande formato pra acabamento contemporâneo sem desenho gráfico. Funciona como base limpa em fachadas modernas · combina com revestimentos de madeira ou pedra natural em composições híbridas.",
    foto: "/cluster-revestimentos-externos/revestimentos-placa-cimenticia-ivoti.webp",
    cardAlt:
      "Revestimento Placa Cimentícia cimentício · Placa lisa de grande formato pra acabamento contemporâneo · Central do Concreto Ivoti RS",
    blocoAlt:
      "Revestimento Placa Cimentícia em concreto · placa lisa grande formato · Central do Concreto Ivoti RS",
  },
  {
    slug: "ripado",
    nome: "Ripado Cimentício",
    bio: "Ripas paralelas verticais pra efeito vertical",
    descricao:
      "Ripas paralelas verticais em concreto cimentício · efeito visual de madeira ripada sem manutenção. Substitui ripado de madeira tratada em fachadas e muros · combina com arquitetura contemporânea com pegada natural sem o custo de manutenção da madeira.",
    foto: "/cluster-revestimentos-externos/revestimentos-ripado-cimenticio-ivoti.webp",
    cardAlt:
      "Revestimento Ripado Cimentício cimentício · Ripas paralelas verticais pra efeito vertical · Central do Concreto Ivoti RS",
    blocoAlt:
      "Revestimento Ripado Cimentício em concreto · ripas paralelas verticais · Central do Concreto Ivoti RS",
  },
];

const faqs = [
  {
    q: "O revestimento cimentício pode ficar exposto a chuva e sol direto?",
    a: "Sim. O revestimento cimentício da Central é fabricado em traço específico para exposição externa contínua e resiste a chuva, UV, variação térmica e umidade sem perda estrutural. A cor é sólida desde a fabricação · sem desbote pela exposição ao sol como acontece com pintura sobre reboco.",
  },
  {
    q: "A Central instala o revestimento ou só fornece a peça?",
    a: "A Central trabalha com instaladores parceiros que conhecem o produto · podemos indicar a partir da sua cidade. O serviço de instalação é separado do fornecimento. Quem prefere apenas as peças e contrata instalador próprio também tem essa opção · o produto vem paletizado pronto pra aplicação.",
  },
  {
    q: "Qual a diferença entre revestimento natural e com efeito Cortein?",
    a: "O revestimento natural mantém o acabamento cinza original do concreto, com visual cru e contemporâneo. O efeito Cortein simula ferro oxidado/envelhecido com tons quentes de laranja e marrom · é tratamento aplicado em fábrica nas peças que pedem visual mais marcante. Os 6 modelos da Central podem ser pedidos nas duas opções.",
  },
  {
    q: "Quantas peças cabem em 1 m² de fachada?",
    a: "Depende do modelo. Rock Face (placa 30×10 cm) usa aproximadamente 33 peças por m². Moledo varia conforme o mix de medidas. Mosaico 3D, Placa e Ripado têm consumos próprios. A equipe da Central calcula o consumo exato com base no modelo escolhido e na metragem da obra antes do orçamento.",
  },
  {
    q: "A Central entrega revestimentos fora de Ivoti?",
    a: "Sim. A Central entrega em 16 cidades no raio de 120 km a partir de Ivoti com caminhão próprio, de Dois Irmãos a Gramado, passando por Novo Hamburgo, Sapiranga, Campo Bom, Canela e outras cidades da serra gaúcha. Toque na sua cidade no final desta página para orçar pelo WhatsApp.",
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
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O revestimento cimentício pode ficar exposto a chuva e sol direto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O revestimento cimentício da Central é fabricado em traço específico para exposição externa contínua e resiste a chuva, UV, variação térmica e umidade sem perda estrutural. A cor é sólida desde a fabricação · sem desbote pela exposição ao sol como acontece com pintura sobre reboco.",
          },
        },
        {
          "@type": "Question",
          name: "A Central instala o revestimento ou só fornece a peça?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Central trabalha com instaladores parceiros que conhecem o produto · podemos indicar a partir da sua cidade. O serviço de instalação é separado do fornecimento. Quem prefere apenas as peças e contrata instalador próprio também tem essa opção · o produto vem paletizado pronto pra aplicação.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a diferença entre revestimento natural e com efeito Cortein?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O revestimento natural mantém o acabamento cinza original do concreto, com visual cru e contemporâneo. O efeito Cortein simula ferro oxidado/envelhecido com tons quentes de laranja e marrom · é tratamento aplicado em fábrica nas peças que pedem visual mais marcante. Os 6 modelos da Central podem ser pedidos nas duas opções.",
          },
        },
        {
          "@type": "Question",
          name: "Quantas peças cabem em 1 m² de fachada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende do modelo. Rock Face (placa 30×10 cm) usa aproximadamente 33 peças por m². Moledo varia conforme o mix de medidas. Mosaico 3D, Placa e Ripado têm consumos próprios. A equipe da Central calcula o consumo exato com base no modelo escolhido e na metragem da obra antes do orçamento.",
          },
        },
        {
          "@type": "Question",
          name: "A Central entrega revestimentos fora de Ivoti?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A Central entrega em 16 cidades no raio de 120 km a partir de Ivoti com caminhão próprio, de Dois Irmãos a Gramado, passando por Novo Hamburgo, Sapiranga, Campo Bom, Canela e outras cidades da serra gaúcha. Toque na sua cidade no final desta página para orçar pelo WhatsApp.",
          },
        },
      ],
    },
  ],
};

export default function RevestimentosExternosPage() {
  const ctaMessage =
    "Olá, quero falar sobre revestimentos externos cimentícios.";
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
            <li
              className="text-cc-gray-900 font-medium"
              aria-current="page"
            >
              Revestimentos Externos
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center justify-center">
        <Image
          src="/cluster-revestimentos-externos/revestimentos-externos-hero-fachada-ivoti.webp"
          alt="Fachada residencial com revestimento cimentício manufaturado em concreto · Central do Concreto Ivoti RS"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Revestimentos Externos
            <span className="block text-2xl md:text-3xl font-medium mt-3 text-cc-orange">
              6 modelos cimentícios da fábrica em Ivoti
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Revestimento externo cimentício é placa pré-moldada em concreto que
            veste fachadas e muros com textura, cor e relevo de pedra natural. A
            Central fabrica 6 modelos em Ivoti — Rock Face, Moledo, Diamante 3D,
            Mosaico 3D, Placa e Ripado — em acabamento natural ou com efeito Cortein,
            trabalha com instaladores parceiros e entrega no raio de 120 km.
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
          <p className="mt-8 text-sm md:text-base text-white/90 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>✓ 6 modelos</span>
            <span>✓ Manufaturado em concreto</span>
            <span>✓ Instaladores parceiros</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia do revestimento externo cimentício</Eyebrow>
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
                  O que é revestimento cimentício
                </a>
              </li>
              <li>
                <a href="#cimenticio-vs-natural" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Cimentício, pedra natural ou cerâmico
                </a>
              </li>
              <li>
                <a href="#para-que-serve" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Para que serve um revestimento externo
                </a>
              </li>
              <li>
                <a href="#os-5-modelos" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Os 6 modelos da Central
                </a>
              </li>
              <li>
                <a href="#natural-ou-cortein" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Concreto natural ou com efeito Cortein
                </a>
              </li>
              <li>
                <a href="#onde-aplicar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Onde aplicar revestimento cimentício
                </a>
              </li>
              <li>
                <a href="#como-instalar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Como instalar revestimento cimentício
                </a>
              </li>
              <li>
                <a href="#entrega-120km" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Entrega · 16 cidades no raio de 120 km
                </a>
              </li>
            </ol>
          </nav>
        </aside>
        <h2 id="o-que-e" className="text-3xl md:text-4xl font-bold mt-4 mb-6 scroll-mt-24">
          O que é revestimento cimentício?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Revestimento cimentício externo é placa pré-moldada em concreto que
          reveste fachadas e muros com textura, cor e relevo de pedra natural. A
          peça é fabricada com mistura de cimento, agregado e aditivo em fôrma
          específica, vibrada e curada até atingir resistência estrutural · cada
          modelo tem desenho próprio que define o efeito final (placas em formato
          pedra, formatos irregulares, mosaico tridimensional, ripas paralelas).
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Diferente do reboco pintado, o revestimento cimentício carrega textura
          tridimensional e cor sólida desde a fabricação, sem precisar de
          manutenção ano após ano. Diferente da pedra natural, vem em formato
          modular padronizado, fácil de instalar e com custo controlado.
        </p>

        <div className="my-12 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/cluster-revestimentos-externos/revestimentos-rock-face-natural-cimenticio-ivoti.webp"
            alt="Revestimento Rock Face cimentício aplicado em fachada · acabamento natural · Central do Concreto Ivoti RS"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <h2 id="cimenticio-vs-natural" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Cimentício, pedra natural ou cerâmico — qual ganha em fachada externa?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          O revestimento cimentício manufaturado vence pedra natural e cerâmico
          em fachada externa por três motivos: padronização dimensional, custo
          por m² controlado e variedade de acabamentos sem dependência de jazida.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A pedra natural varia muito em formato e peso · cada lote tem espessura
          e cor diferente, o que encarece a instalação e dificulta manutenção. O
          cerâmico esmaltado tem boa estética mas trinca por ciclo térmico quando
          exposto a sol direto e chuva prolongada. O cimentício é o único que
          combina padronização industrial, durabilidade UV e variedade de efeitos
          · do natural cinza ao Cortein simulando ferro envelhecido.
        </p>

        <div className="my-12 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/cluster-revestimentos-externos/revestimentos-moledo-natural-cimenticio-ivoti.webp"
            alt="Revestimento Moledo cimentício em fachada · formatos irregulares acabamento natural · Central do Concreto Ivoti RS"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <h2 id="para-que-serve" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Para que serve um revestimento externo cimentício?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Revestimento cimentício serve para três funções: dar textura e relevo à
          fachada, proteger a alvenaria de intempéries, e identificar visualmente
          o imóvel sem manutenção contínua. A peça cumpre papel decorativo e
          técnico no mesmo elemento construtivo.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Em projeto residencial, substitui pintura lisa em fachadas frontais,
          marca volumes específicos da casa (entrada, garagem, área social) ou
          veste muros divisórios trazendo identidade. Em projeto comercial,
          identifica fachadas de loja com pegada arquitetônica forte. Em ambos os
          casos, o revestimento sobe rápido (peça grande, junta simples) e
          dispensa repintura periódica.
        </p>

        <div className="my-12 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/cluster-revestimentos-externos/revestimentos-diamante-3d-cimenticio-ivoti.webp"
            alt="Muro residencial com revestimento Diamante 3D cimentício · facetas diagonais formando padrão em alto relevo · Central do Concreto Ivoti RS"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <h2 id="os-5-modelos" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Quais são os 6 modelos da Central do Concreto?
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          A Central fabrica 6 modelos catalogados em revestimento cimentício, do
          Rock Face (placas regulares 30×10 cm em variantes cromáticas) ao Moledo
          (formatos irregulares com 17 medidas misturadas), passando por Diamante
          3D, Mosaico 3D, Placa Cimentícia e Ripado Cimentício. Toque em cada card
          para ver detalhe.
        </p>

        {/* GRADE 6 CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {modelos.map((m) => (
            <Link
              key={m.slug}
              href={`#modelo-${m.slug}`}
              className="group block border border-cc-gray-200 rounded-lg overflow-hidden hover:border-cc-orange transition-colors"
            >
              <div className="relative aspect-square overflow-hidden bg-cc-gray-50">
                <Image
                  src={m.foto}
                  alt={m.cardAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1 group-hover:text-cc-orange transition-colors">
                  {m.nome}
                </h3>
                <p className="text-sm text-cc-gray-600 leading-snug">
                  {m.bio}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <h2 id="natural-ou-cortein" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Concreto natural ou com efeito Cortein — como escolher?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          Revestimento cimentício da Central pode ser entregue em dois
          acabamentos: natural (cinza original da peça) ou com efeito Cortein
          (simulando ferro oxidado/envelhecido com tons quentes de laranja e
          marrom). A Central oferece os 6 modelos nas duas opções. O comparativo
          completo entre cimentício manufaturado e pedra natural fica na página
          dedicada{" "}
          <a
            href="/revestimentos-externos/natural-ou-manufaturado"
            className="text-cc-orange underline hover:no-underline"
          >
            revestimento natural ou manufaturado
          </a>
          .
        </p>

        <h2 id="onde-aplicar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Onde aplicar revestimento cimentício?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Revestimento cimentício se aplica em fachada residencial e muro
          divisório externo. Cada aplicação pede modelos diferentes · fachada
          pede modelo que dialogue com a arquitetura do imóvel (Rock Face e
          Moledo para residencial contemporâneo, Mosaico 3D e Diamante 3D para
          fachada moderna), muro pede modelo de boa textura visual à distância
          (Ripado e Placa funcionam bem em muro alto).
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Em qualquer aplicação externa · fachada frontal, lateral, muro
          divisório, painel pontual · o revestimento cimentício entrega
          durabilidade real (sem desbote, sem trinca por umidade, sem manutenção
          periódica) e leitura visual rica que valoriza o imóvel ao longo de
          décadas.
        </p>

        <h2 id="como-instalar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Como instalar revestimento cimentício?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Instalação de revestimento cimentício envolve regularização da
          alvenaria, argamassa colante AC-III, posicionamento por carreira e
          rejunte específico. A Central trabalha com instaladores parceiros que
          conhecem o produto · podemos indicar a partir da sua cidade.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A instalação é separada do fornecimento. Quem prefere comprar só as
          peças e contratar instalador próprio também tem essa opção · o produto
          vem paletizado pronto pra aplicação.
        </p>

        <h2 id="entrega-120km" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Entrega — 16 cidades no raio de 120 km
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          A Central entrega revestimento cimentício em 16 cidades dentro do raio
          de 120 km a partir de Ivoti, com caminhão próprio e descarga no local.
          Toque na sua cidade no final desta página para falar pelo WhatsApp com
          mensagem pronta.
        </p>
      </article>

      {/* 6 ANCHOR SECTIONS */}
      <section className="bg-cc-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Eyebrow className="mb-4">Catálogo completo</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Os 6 modelos em detalhe
          </h2>
          <div className="space-y-12">
            {modelos.map((m) => {
              const modeloMsg = `Olá, quero falar sobre o revestimento ${m.nome}.`;
              const modeloUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(modeloMsg)}`;
              return (
                <div
                  key={m.slug}
                  id={`modelo-${m.slug}`}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-cc-gray-200 last:border-0 scroll-mt-24"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
                    <Image
                      src={m.foto}
                      alt={m.blocoAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {m.nome}
                    </h3>
                    <p className="text-base leading-relaxed mb-6 text-cc-gray-700">
                      {m.descricao}
                    </p>
                    <a
                      href={modeloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 self-start bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-6 py-3 rounded-full text-base font-semibold transition-colors"
                    >
                      Falar sobre {m.nome}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
                  `Olá! Quero falar sobre revestimentos externos cimentícios com entrega em ${cidade}.`,
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

      {/* ENTREGA ÁGIL */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
          <Image
            src="/cluster-revestimentos-externos/revestimentos-entrega-frota-propria-ivoti.webp"
            alt="Caminhão Central do Concreto entregando peças em obra residencial · Ivoti RS"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
        <p className="text-lg leading-relaxed text-cc-gray-700">
          Frota própria · sai da fábrica em Ivoti direto pra obra do cliente. Sem
          terceirização, com peças paletizadas e descarga no local. Prazo
          combinado conforme volume e cronograma da obra · sem intermediário
          entre fábrica e cliente.
        </p>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-10">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold">
            Perguntas frequentes sobre revestimento cimentício
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
            Pronto pra orçar seu revestimento cimentício?
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Fabricação local em Ivoti · 6 modelos disponíveis · natural ou efeito
            Cortein · instaladores parceiros indicados · entrega no raio de 120
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
              href="/produtos/muros-e-gradis"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Muros e Gradis
            </Link>
            <Link
              href="/produtos/pergolado-de-concreto"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Pergolados
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
