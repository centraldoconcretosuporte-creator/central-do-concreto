import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL = "https://centraldoconcretoentrega.com.br/cobogos";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const SITE_URL = "https://centraldoconcretoentrega.com.br";

const PAGE_TITLE =
  "Cobogós de Concreto: 14 Modelos, Instalação e Entrega | Central do Concreto";
const PAGE_DESCRIPTION =
  "Cobogó de concreto pré-moldado em 14 modelos, natural ou pintado, com instalação por equipe própria e entrega no raio de 120 km a partir de Ivoti-RS. Central do Concreto, fabricação local.";

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
        url: `${SITE_URL}/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp`,
        width: 1200,
        height: 1200,
        alt: "Muro alto residencial em cobogó modelo Eclipse de concreto pré-moldado · Central do Concreto Ivoti RS",
      },
    ],
  },
};

type Modelo = {
  slug: string;
  nome: string;
  bio: string;
  descricao: string;
  cardFoto: string;
  cardAlt: string;
  anchorFoto: string;
  anchorAlt: string;
};

const modelos: Modelo[] = [
  {
    slug: "antichuva",
    nome: "Antichuva",
    bio: "16 quadrados em malha 4×4 · superfície inclinada que barra chuva.",
    descricao:
      "Dezesseis furos quadrados em arranjo 4×4 com superfícies inclinadas no lado externo que impedem a entrada de chuva. Indicado para varandas, galpões e fachadas em áreas batidas de vento e água.",
    cardFoto: "/cluster-cobogos/cobogo-antichuva-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Antichuva em concreto pré-moldado · módulo individual com 16 quadrados vazados em arranjo 4 por 4, padrão regular tipo grelha · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-antichuva-concreto-ivoti-02.webp",
    anchorAlt:
      "Cobogó modelo Antichuva em concreto pré-moldado · muro construído com módulos Antichuva em série, padrão de pequenos quadrados vazados em malha regular, ambiente externo com sombras suaves e vegetação ao fundo · Central do Concreto Ivoti RS",
  },
  {
    slug: "ao-quadrado",
    nome: "Ao Quadrado",
    bio: "Quatro quadrados vazados em arranjo 2×2 · geometria minimalista.",
    descricao:
      "Quatro quadrados vazados em arranjo 2×2 · geometria limpa e contemporânea. Combina com fachadas modernas e ambientes que pedem desenho sóbrio. Disponível em concreto natural ou pintado.",
    cardFoto: "/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Ao Quadrado em concreto pré-moldado · módulo individual com 4 quadrados vazados em arranjo 2 por 2, geometria minimalista · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-02.webp",
    anchorAlt:
      "Cobogó modelo Ao Quadrado em concreto pré-moldado · muro alto construído com módulos Ao Quadrado em série pintados em tom grafite escuro, padrão de pequenos quadrados vazados em malha densa, ambiente residencial externo com jardim de folhagens · Central do Concreto Ivoti RS",
  },
  {
    slug: "arabe",
    nome: "Árabe",
    bio: "Inspirado em muxarabis · octógonos diagonais e losangos com cruzes.",
    descricao:
      "Inspirado nos muxarabis árabes · 4 quadrantes geométricos com dois octógonos diagonais e dois losangos inscrevendo cruzes. Visual decorativo intricado · ideal para ambientes com personalidade autoral.",
    cardFoto: "/cluster-cobogos/cobogo-arabe-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Árabe em concreto pré-moldado · módulo quadrado com 4 quadrantes geométricos alternados, dois octógonos diagonais e dois losangos com cruzes inscritas · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-arabe-concreto-ivoti-01.webp",
    anchorAlt:
      "Cobogó modelo Árabe em concreto pré-moldado · acabamento concreto natural sobre tapete de grama sintética com flor branca decorativa · Central do Concreto Ivoti RS",
  },
  {
    slug: "citadino-com-base-floreira",
    nome: "Citadino com Base Floreira",
    bio: "Triângulo vazado com base fechada para receber substrato e plantas.",
    descricao:
      "Triângulo vazado inscrito em quadrado · base inferior fechada projetada para receber substrato e plantas. Une cobogó e floreira no mesmo módulo · feito sob medida para paisagismo vertical.",
    cardFoto:
      "/cluster-cobogos/cobogo-citadino-com-base-floreira-concreto-ivoti.webp",
    cardAlt:
      "Cobogó modelo Citadino com Base para Floreira em concreto pré-moldado · triângulo vazado inscrito em quadrado, base inferior fechada para receber substrato e plantas, acabamento concreto natural sobre fundo de folhagem verde · Central do Concreto Ivoti RS",
    anchorFoto:
      "/cluster-cobogos/cobogo-citadino-com-base-floreira-concreto-ivoti.webp",
    anchorAlt:
      "Cobogó modelo Citadino com Base para Floreira em concreto pré-moldado · base inferior fechada projetada para receber substrato e plantas, acabamento concreto natural · Central do Concreto Ivoti RS",
  },
  {
    slug: "citadino-dupla-face",
    nome: "Citadino Dupla Face",
    bio: "Triangular vazado com face dupla · acabamento idêntico nos dois lados.",
    descricao:
      "Módulos triangulares vazados em série formando ritmo contínuo. Face dupla com acabamento idêntico nos dois lados · ideal para divisória interna ou muro entre vizinhos onde os dois lados ficam expostos.",
    cardFoto:
      "/cluster-cobogos/cobogo-citadino-dupla-face-concreto-ivoti.webp",
    cardAlt:
      "Cobogó modelo Citadino Dupla Face em concreto pré-moldado · muro construído com módulos triangulares vazados em série, ritmo geométrico contínuo, acabamento branco · Central do Concreto Ivoti RS",
    anchorFoto:
      "/cluster-cobogos/cobogo-citadino-dupla-face-concreto-ivoti.webp",
    anchorAlt:
      "Cobogó modelo Citadino Dupla Face em concreto pré-moldado · muro construído com módulos triangulares vazados em série, ritmo geométrico contínuo · Central do Concreto Ivoti RS",
  },
  {
    slug: "eclipse",
    nome: "Eclipse",
    bio: "Círculo central com quatro pétalas curvas · padrão simétrico tipo bússola.",
    descricao:
      "Círculo central inscrito e quatro pétalas curvas vazadas formando padrão simétrico. Quando montado em série, gera textura de círculos entrelaçados que dá presença a muros altos e fachadas residenciais.",
    cardFoto: "/cluster-cobogos/cobogo-eclipse-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Eclipse em concreto pré-moldado · módulo individual quadrado com círculo central inscrito e quatro pétalas curvas vazadas formando padrão simétrico tipo bússola, vista isolada sobre fundo de brita escura · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp",
    anchorAlt:
      "Cobogó modelo Eclipse em concreto pré-moldado · muro alto construído com módulos Eclipse em série, padrão de círculos entrelaçados formando textura visual contínua, ambiente residencial externo com calçada de petit pavé · Central do Concreto Ivoti RS",
  },
  {
    slug: "fenestra",
    nome: "Fenestra",
    bio: "Vazado em arco duplo tipo fita · visual orgânico.",
    descricao:
      "Vazado em formato de arco duplo simétrico tipo fita. Em série, cria textura visual orgânica que se destaca quando pintado em cores fortes como bordô ou terra. Modelo decorativo de alto impacto.",
    cardFoto: "/cluster-cobogos/cobogo-fenestra-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Fenestra em concreto pré-moldado · módulo individual quadrado com vazado em formato de arco duplo simétrico tipo fita, vista isolada sobre tapete de grama sintética · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-fenestra-concreto-ivoti-02.webp",
    anchorAlt:
      "Cobogó modelo Fenestra em concreto pré-moldado · muro construído com módulos Fenestra em série pintados em tom bordô vermelho, padrão de arcos duplos formando textura visual orgânica, ambiente externo com vegetação · Central do Concreto Ivoti RS",
  },
  {
    slug: "horizon-dupla-face",
    nome: "Horizon Dupla Face",
    bio: "Rasgo horizontal único na parte superior · miolo recuado.",
    descricao:
      "Rasgo horizontal único na parte superior · miolo recuado · face dupla. Visual minimalista que filtra luz e ventilação por uma linha contínua. Indicado para cercas baixas e divisórias horizontais.",
    cardFoto:
      "/cluster-cobogos/cobogo-horizon-dupla-face-concreto-ivoti.webp",
    cardAlt:
      "Cobogó modelo Horizon Dupla Face em concreto pré-moldado · rasgo horizontal único na parte superior, miolo recuado, face dupla, fundo de grama sintética · Central do Concreto Ivoti RS",
    anchorFoto:
      "/cluster-cobogos/cobogo-horizon-dupla-face-concreto-ivoti.webp",
    anchorAlt:
      "Cobogó modelo Horizon Dupla Face em concreto pré-moldado · rasgo horizontal único na parte superior, miolo recuado, face dupla · Central do Concreto Ivoti RS",
  },
  {
    slug: "16-furos-3d",
    nome: "16 Furos 3D",
    bio: "16 furos quadrados em malha 4×4 · paredes em profundidade tipo caixa.",
    descricao:
      "Dezesseis furos quadrados em arranjo 4×4 com paredes em profundidade que criam efeito tridimensional. Versão evoluída do tradicional 16 furos · ganha relevo e sombra interna.",
    cardFoto: "/cluster-cobogos/cobogo-16-furos-3d-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo 16 Furos 3D em concreto pré-moldado · módulo individual com 16 furos quadrados em arranjo 4 por 4, paredes em profundidade tipo caixa criando efeito tridimensional, vista isolada sobre tapete de grama sintética com flor branca decorativa · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-16-furos-3d-concreto-ivoti-01.webp",
    anchorAlt:
      "Cobogó modelo 16 Furos 3D em concreto pré-moldado · paredes em profundidade tipo caixa criando efeito tridimensional · Central do Concreto Ivoti RS",
  },
  {
    slug: "petrius-dupla-face",
    nome: "Pétrius Dupla Face",
    bio: "Triângulo vazado em formato envelope · face dupla.",
    descricao:
      "Triângulo vazado em formato envelope · face dupla. Acabamento limpo dos dois lados · ideal para divisórias internas onde os dois ambientes ficam expostos ao mesmo desenho.",
    cardFoto:
      "/cluster-cobogos/cobogo-petrius-dupla-face-concreto-ivoti.webp",
    cardAlt:
      "Cobogó modelo Pétrius Dupla Face em concreto pré-moldado · módulo quadrado com triângulo vazado em formato envelope, face dupla, vista isolada sobre tapete de grama sintética com flor branca decorativa · Central do Concreto Ivoti RS",
    anchorFoto:
      "/cluster-cobogos/cobogo-petrius-dupla-face-concreto-ivoti.webp",
    anchorAlt:
      "Cobogó modelo Pétrius Dupla Face em concreto pré-moldado · módulo com triângulo vazado em formato envelope, face dupla · Central do Concreto Ivoti RS",
  },
  {
    slug: "poente",
    nome: "Poente",
    bio: "Geometria em L espelhado formando espiral interna.",
    descricao:
      "Geometria em L espelhado que forma espiral interna. Quando pintado em laranja ou tons quentes, ganha presença vibrante. Visual contemporâneo · indicado para detalhes arquitetônicos com foco decorativo.",
    cardFoto: "/cluster-cobogos/cobogo-poente-concreto-ivoti.webp",
    cardAlt:
      "Cobogó modelo Poente em concreto pré-moldado · geometria em L espelhado formando espiral interna, acabamento laranja sobre base cinza · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-poente-concreto-ivoti.webp",
    anchorAlt:
      "Cobogó modelo Poente em concreto pré-moldado · geometria em L espelhado formando espiral interna, acabamento laranja sobre base cinza · Central do Concreto Ivoti RS",
  },
  {
    slug: "taco-chines",
    nome: "Taco Chinês",
    bio: "Barras paralelas em quadrantes alternados · padrão geométrico.",
    descricao:
      "Barras horizontais e verticais alternadas em quadrantes · padrão geométrico tradicional. Em série, gera textura visual rica que combina com ambientes externos iluminados.",
    cardFoto: "/cluster-cobogos/cobogo-taco-chines-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Taco Chinês em concreto pré-moldado · módulo individual quadrado com padrão geométrico de barras paralelas em quadrantes alternados, vista isolada sobre tapete de grama sintética · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-taco-chines-concreto-ivoti-02.webp",
    anchorAlt:
      "Cobogó modelo Taco Chinês em concreto pré-moldado · muro construído com módulos Taco Chinês em série, padrão de barras horizontais e verticais alternadas, ambiente externo iluminado · Central do Concreto Ivoti RS",
  },
  {
    slug: "trancado",
    nome: "Trançado",
    bio: "Barras horizontais e verticais entrelaçadas tipo grelha.",
    descricao:
      "Barras horizontais e verticais entrelaçadas formando padrão de grelha com vazados retangulares internos. Modelo clássico e versátil · combina com fachadas tradicionais ou modernas.",
    cardFoto: "/cluster-cobogos/cobogo-trancado-concreto-ivoti.webp",
    cardAlt:
      "Cobogó modelo Trançado em concreto pré-moldado · barras horizontais e verticais entrelaçadas formando padrão tipo grelha, vazados internos retangulares, acabamento branco · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-trancado-concreto-ivoti.webp",
    anchorAlt:
      "Cobogó modelo Trançado em concreto pré-moldado · barras horizontais e verticais entrelaçadas formando padrão tipo grelha · Central do Concreto Ivoti RS",
  },
  {
    slug: "urbano",
    nome: "Urbano",
    bio: "Módulo quadrado com diagonal triangular vazada · estilo industrial.",
    descricao:
      "Módulo quadrado subdividido por diagonal com vazado triangular. Visual industrial e contemporâneo · indicado para cercas baixas, muros divisórios e fachadas com pegada minimalista.",
    cardFoto: "/cluster-cobogos/cobogo-urbano-concreto-ivoti-02.webp",
    cardAlt:
      "Cobogó modelo Urbano em concreto pré-moldado · módulo individual quadrado com diagonal triangular vazada, vista isolada sobre tapete de grama sintética com flor branca decorativa · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-urbano-concreto-ivoti-01.webp",
    anchorAlt:
      "Cobogó modelo Urbano em concreto pré-moldado · muro de canto duplo com módulos quadrados subdivididos por diagonal, vazado triangular, ambiente externo com vegetação · Central do Concreto Ivoti RS",
  },
];

const faqs = [
  {
    q: "Cobogó de concreto pode ficar exposto a chuva e sol direto?",
    a: "Sim. O cobogó de concreto da Central é pré-moldado em traço específico para exposição externa contínua e resiste a chuva, UV, variação térmica e umidade sem perda estrutural. Diferente do cerâmico esmaltado, ele não trinca por ciclo de absorção e secagem porque o concreto não absorve umidade na mesma proporção.",
  },
  {
    q: "A Central instala o cobogó ou só fornece a peça?",
    a: "A Central instala com equipe própria, do alinhamento da fundação à última carreira. O serviço de instalação é separado do fornecimento e contratado conforme o tamanho da obra. Quem prefere apenas as peças também pode comprar só o material.",
  },
  {
    q: "Qual a diferença entre cobogó natural e pintado?",
    a: "O cobogó natural mantém o acabamento cinza original do concreto, com visual cru e contemporâneo. O cobogó pintado é tratado em fábrica nas cores escolhidas pelo cliente, com proteção extra e estética alinhada ao projeto. Os 14 modelos da Central estão disponíveis nas duas opções.",
  },
  {
    q: "Quantas peças cabem em 1 m² de muro?",
    a: "Depende do modelo. Cobogós da Central variam entre 30×30 cm e 40×40 cm e em geral 6 a 11 peças cobrem cada metro quadrado. A equipe da Central calcula o consumo exato com base no modelo escolhido e na metragem da obra antes do orçamento.",
  },
  {
    q: "A Central entrega cobogós fora de Ivoti?",
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
          name: "Cobogós",
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
      "@type": "ItemList",
      "@id": `${CANONICAL_URL}#modelos`,
      name: "Modelos de cobogó de concreto da Central",
      numberOfItems: 14,
      itemListOrder: "ItemListOrderUnordered",
      itemListElement: modelos.map((m, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Product",
          name: `Cobogó ${m.nome}`,
          description: m.descricao,
          image: `${SITE_URL}${m.cardFoto}`,
          url: `${CANONICAL_URL}#modelo-${m.slug}`,
          brand: {
            "@type": "Brand",
            name: "Central do Concreto",
          },
          category: "Cobogó de concreto pré-moldado",
        },
      })),
    },
  ],
};

export default function CobogosPage() {
  const ctaMessage = "Olá, quero falar sobre cobogós de concreto.";
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
              Cobogós
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center justify-center">
        <Image
          src="/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp"
          alt="Muro alto residencial em cobogó modelo Eclipse de concreto pré-moldado, padrão de círculos entrelaçados, fachada da Central do Concreto Ivoti RS"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Cobogós de Concreto
            <span className="block text-2xl md:text-3xl font-medium mt-3 text-cc-orange">
              14 modelos da fábrica em Ivoti
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Cobogó de concreto é elemento vazado pré-moldado que fecha o vão,
            deixa o ar passar e desenha sombra. A Central fabrica 14 modelos
            em Ivoti, fornece em concreto natural ou pintado, instala com
            equipe própria e entrega no raio de 120 km.
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
            <span>✓ 14 modelos</span>
            <span>✓ Natural ou pintado</span>
            <span>✓ Instalação inclusa</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia do cobogó de concreto</Eyebrow>
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
                  O que é cobogó de concreto
                </a>
              </li>
              <li>
                <a href="#concreto-vs-ceramico" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Concreto, cerâmico ou gesso
                </a>
              </li>
              <li>
                <a href="#para-que-serve" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Para que serve um cobogó hoje
                </a>
              </li>
              <li>
                <a href="#os-14-modelos" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Os 14 modelos da Central
                </a>
              </li>
              <li>
                <a href="#pintado-ou-natural" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Concreto natural ou pintado
                </a>
              </li>
              <li>
                <a href="#onde-aplicar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Onde aplicar cobogó
                </a>
              </li>
              <li>
                <a href="#como-instalar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Como a Central instala
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
          O que é cobogó de concreto?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Cobogó de concreto é elemento vazado pré-moldado que substitui parede
          sólida em fachadas, muros e divisórias deixando passar luz e ar. A peça
          nasceu em Recife em 1929 e leva no nome a junção dos sobrenomes Coimbra,
          Boeckmann e Góis · três engenheiros que patentearam a invenção. A função
          desde então é a mesma: vedar o vão sem cortar a brisa nem a luz.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A peça é fabricada com mistura de cimento, agregado e água em
          fôrma metálica, vibrada e curada até atingir resistência
          estrutural. Cada modelo tem desenho próprio que define a função
          principal: alguns priorizam ventilação, outros foco decorativo,
          outros barrar chuva ou criar sombra.
        </p>

        <div className="my-12 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/cluster-cobogos/cobogo-citadino-dupla-face-concreto-ivoti.webp"
            alt="Muro construído com cobogós Citadino Dupla Face em concreto pré-moldado, módulos triangulares vazados em série formando ritmo geométrico contínuo, acabamento branco · Central do Concreto Ivoti RS"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <h2 id="concreto-vs-ceramico" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Concreto, cerâmico ou gesso — qual ganha em fachada externa?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Cobogó de concreto vence cerâmico e gesso em fachada externa por três
          motivos: maior resistência mecânica, baixa absorção de umidade e
          durabilidade UV sem perda estrutural.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          O cobogó cerâmico esmaltado tem ótima estética interna mas trinca
          por ciclo de absorção e secagem quando exposto direto à chuva. O
          gesso só funciona em ambiente interno seco. O concreto é o único
          que aguenta sol, chuva, vento e variação térmica sem manutenção
          ano após ano.
        </p>

        <div className="my-12 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/cluster-cobogos/cobogo-urbano-concreto-ivoti-01.webp"
            alt="Muro de canto duplo construído com cobogós Urbano em concreto pré-moldado, módulos quadrados subdivididos por diagonal com vazado triangular, ambiente externo com vegetação · Central do Concreto Ivoti RS"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <h2 id="para-que-serve" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Para que serve um cobogó hoje?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Cobogó de concreto serve para três funções principais: ventilação
          cruzada constante, luz natural difusa e privacidade sem isolamento
          total. A peça cumpre papel de muro, divisória ou fachada deixando passar
          ar e luz sem precisar de janela ou abertura controlada.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Em arquitetura contemporânea, o cobogó voltou a ser peça-chave em
          projetos que buscam conforto térmico passivo, identidade visual
          marcante e referência cultural brasileira. Substitui muro fechado
          em terreno urbano, cria divisória que respira em área gourmet e
          desenha sombra projetada em ambientes externos.
        </p>

        <div className="my-12 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/cluster-cobogos/cobogo-fenestra-concreto-ivoti-02.webp"
            alt="Muro construído com cobogós Fenestra em concreto pré-moldado pintados em tom bordô vermelho, padrão de arcos duplos formando textura visual orgânica, ambiente externo com vegetação · Central do Concreto Ivoti RS"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <h2 id="os-14-modelos" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Quais são os 14 modelos da Central do Concreto?
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          A Central fabrica 14 modelos catalogados, do tradicional 16 Furos
          ao Antichuva para área coberta, passando pelo Árabe inspirado em
          muxarabis e pelo Eclipse de geometria circular. Toque em cada
          card para ver detalhe.
        </p>

        {/* GRADE 14 CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {modelos.map((m) => (
            <Link
              key={m.slug}
              href={`#modelo-${m.slug}`}
              className="group block border border-cc-gray-200 rounded-lg overflow-hidden hover:border-cc-orange transition-colors"
            >
              <div className="relative aspect-square overflow-hidden bg-cc-gray-50">
                <Image
                  src={m.cardFoto}
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

        <h2 id="pintado-ou-natural" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Concreto natural ou pintado — como escolher?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          Cobogó de concreto pode ser entregue em duas opções de acabamento:
          natural (cinza original da peça) ou pintado em fábrica nas cores
          escolhidas pelo cliente. A Central oferece os 14 modelos nas duas
          formas. A página dedicada{" "}
          <Link
            href="/cobogos/pintado-ou-natural"
            className="text-cc-orange underline hover:no-underline"
          >
            cobogó pintado ou natural
          </Link>{" "}
          traz o comparativo completo com paleta de cores e durabilidade.
        </p>

        <h2 id="onde-aplicar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Onde aplicar cobogó de concreto?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          As três aplicações mais frequentes são fachada, muro divisório e
          parede interna. Cada uma pede modelos diferentes — fachada precisa
          de resistência a sol direto, muro pede privacidade controlada,
          divisória interna foca estética. Veja as páginas dedicadas{" "}
          <Link
            href="/cobogos/fachada"
            className="text-cc-orange underline hover:no-underline"
          >
            cobogó para fachada
          </Link>{" "}
          e{" "}
          <Link
            href="/cobogos/muro"
            className="text-cc-orange underline hover:no-underline"
          >
            muro de cobogó
          </Link>{" "}
          para os modelos recomendados em cada caso.
        </p>

        <div className="my-12 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-02.webp"
            alt="Muro alto construído com cobogós Ao Quadrado em concreto pré-moldado pintados em tom grafite escuro, padrão de pequenos quadrados vazados em malha densa, ambiente residencial externo com jardim · Central do Concreto Ivoti RS"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <h2 id="como-instalar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Como a Central instala cobogós?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          Instalação de cobogó envolve fundação corrida, fio de prumo, argamassa
          específica e alinhamento por carreira. A Central instala com equipe
          própria · do projeto à entrega final · com argamassa de assentamento
          fornecida junto às peças. Veja o passo a passo técnico na página{" "}
          <Link
            href="/cobogos/instalacao"
            className="text-cc-orange underline hover:no-underline"
          >
            como instalar cobogó
          </Link>
          .
        </p>

        <div className="my-12 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/cluster-cobogos/cobogo-taco-chines-concreto-ivoti-02.webp"
            alt="Muro construído com cobogós Taco Chinês em concreto pré-moldado, padrão de barras horizontais e verticais alternadas, ambiente externo iluminado · Central do Concreto Ivoti RS"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <h2 id="entrega-120km" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Entrega — 16 cidades no raio de 120 km
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          A Central entrega cobogós em 16 cidades dentro do raio de 120 km a
          partir de Ivoti, com caminhão próprio e descarga no local. Toque
          na sua cidade no final desta página para falar pelo WhatsApp com
          mensagem pronta.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Detalhes de prazo, descarga e proteção da carga estão na página
          dedicada{" "}
          <Link
            href="/cobogos/entrega"
            className="text-cc-orange underline hover:no-underline"
          >
            entrega de cobogó
          </Link>
          .
        </p>
      </article>

      {/* 14 ANCHOR SECTIONS */}
      <section className="bg-cc-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Eyebrow className="mb-4">Catálogo completo</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Os 14 modelos em detalhe
          </h2>
          <div className="space-y-12">
            {modelos.map((m) => {
              const modeloMsg = `Olá, quero falar sobre o cobogó modelo ${m.nome}.`;
              const modeloUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(modeloMsg)}`;
              return (
                <div
                  key={m.slug}
                  id={`modelo-${m.slug}`}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-cc-gray-200 last:border-0 scroll-mt-24"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
                    <Image
                      src={m.anchorFoto}
                      alt={m.anchorAlt}
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
                  `Olá! Quero falar sobre cobogós com entrega em ${cidade}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-cc-gray-300 rounded-full px-4 py-1.5 text-sm text-white hover:border-cc-orange hover:text-cc-orange transition-colors"
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
            Perguntas frequentes sobre cobogós
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
            Pronto pra orçar seu cobogó?
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Fabricação local em Ivoti · 14 modelos disponíveis · natural ou
            pintado · instalação por equipe própria · entrega no raio de 120
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
              href="/tubo-de-concreto"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Tubos de Concreto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
