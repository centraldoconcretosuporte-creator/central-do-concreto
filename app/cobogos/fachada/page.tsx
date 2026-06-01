import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://centraldoconcretoentrega.com.br";
const CANONICAL_URL = `${SITE_URL}/cobogos/fachada`;
const WHATSAPP_URL = "https://wa.me/5551996691757";
const PAGE_TITLE =
  "Cobogó para Fachada: 5 Modelos Resistentes a Sol, Chuva e UV | Central do Concreto";
const PAGE_DESCRIPTION =
  "Cobogó para fachada em concreto pré-moldado · 5 modelos da Central recomendados pra resistência externa, sombra projetada e estilo industrial ou moderno. Entrega no raio de 120 km a partir de Ivoti-RS.";
const OG_IMAGE = `${SITE_URL}/cluster-cobogos/cobogo-fenestra-concreto-ivoti-02.webp`;

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
    slug: "eclipse",
    nome: "Eclipse",
    bio: "Círculo central com 4 pétalas curvas · presença imponente em muro alto.",
    descricao:
      "Cobogó Eclipse na fachada cria parede de círculos entrelaçados que dá presença e altura à residência. Modelo com 4 pétalas curvas vazadas em torno de círculo central · gera sombra projetada em padrão floral nas horas de sol baixo. Recomendado pra fachadas residenciais de impacto.",
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
    bio: "Arco duplo vazado em fita · destaque visual quando pintado.",
    descricao:
      "Cobogó Fenestra na fachada vira destaque visual quando pintado em cores fortes como bordô, terra ou preto. Vazado em arco duplo simétrico tipo fita · padrão orgânico que quebra a monotonia da fachada lisa. Ideal pra projetos autorais.",
    cardFoto: "/cluster-cobogos/cobogo-fenestra-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Fenestra em concreto pré-moldado · módulo individual quadrado com vazado em formato de arco duplo simétrico tipo fita, vista isolada sobre tapete de grama sintética · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-fenestra-concreto-ivoti-02.webp",
    anchorAlt:
      "Cobogó modelo Fenestra em concreto pré-moldado · muro construído com módulos Fenestra em série pintados em tom bordô vermelho, padrão de arcos duplos formando textura visual orgânica, ambiente externo com vegetação · Central do Concreto Ivoti RS",
  },
  {
    slug: "antichuva",
    nome: "Antichuva",
    bio: "16 furos quadrados com superfícies inclinadas · barra entrada de água.",
    descricao:
      "Cobogó Antichuva é o modelo certo pra fachada exposta a chuva direta. 16 furos quadrados em malha 4×4 com superfícies inclinadas no lado externo que impedem entrada de água. Indicado pra fachadas voltadas pra ventos predominantes.",
    cardFoto: "/cluster-cobogos/cobogo-antichuva-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Antichuva em concreto pré-moldado · módulo individual com 16 quadrados vazados em arranjo 4 por 4, padrão regular tipo grelha, vista isolada sobre tapete de grama sintética com flor branca decorativa · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-antichuva-concreto-ivoti-02.webp",
    anchorAlt:
      "Cobogó modelo Antichuva em concreto pré-moldado · muro construído com módulos Antichuva em série, padrão de pequenos quadrados vazados em malha regular, ambiente externo com sombras suaves e vegetação ao fundo · Central do Concreto Ivoti RS",
  },
  {
    slug: "ao-quadrado",
    nome: "Ao Quadrado",
    bio: "4 quadrados vazados 2×2 · geometria minimalista contemporânea.",
    descricao:
      "Cobogó Ao Quadrado é a escolha minimalista pra fachada contemporânea. Quatro quadrados vazados em arranjo 2×2 · geometria limpa que combina com arquitetura moderna sóbria. Visual ainda mais forte quando pintado em grafite escuro.",
    cardFoto: "/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Ao Quadrado em concreto pré-moldado · módulo individual com 4 quadrados vazados em arranjo 2 por 2, geometria minimalista, vista isolada sobre tapete de grama sintética com flor branca decorativa · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-02.webp",
    anchorAlt:
      "Cobogó modelo Ao Quadrado em concreto pré-moldado · muro alto construído com módulos Ao Quadrado em série pintados em tom grafite escuro, padrão de pequenos quadrados vazados em malha densa, ambiente residencial externo com jardim de folhagens · Central do Concreto Ivoti RS",
  },
  {
    slug: "citadino-dupla-face",
    nome: "Citadino Dupla Face",
    bio: "Triângulos vazados em ritmo geométrico contínuo · acabamento dos dois lados.",
    descricao:
      "Cobogó Citadino Dupla Face na fachada cria ritmo geométrico contínuo de triângulos vazados. Acabamento idêntico nos dois lados · ideal quando os dois lados da fachada ficam expostos (frente da rua + área externa interna).",
    cardFoto: "/cluster-cobogos/cobogo-citadino-dupla-face-concreto-ivoti.webp",
    cardAlt:
      "Cobogó modelo Citadino Dupla Face em concreto pré-moldado · muro construído com módulos triangulares vazados em série, ritmo geométrico contínuo, acabamento branco · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-citadino-dupla-face-concreto-ivoti.webp",
    anchorAlt:
      "Cobogó modelo Citadino Dupla Face em concreto pré-moldado · muro construído com módulos triangulares vazados em série, ritmo geométrico contínuo, acabamento branco · Central do Concreto Ivoti RS",
  },
];

const faqs = [
  {
    q: "Cobogó de concreto resiste a sol direto e chuva forte em fachada externa?",
    a: "Sim. Cobogó de concreto pré-moldado da Central é fabricado em traço específico pra exposição externa contínua · resiste a sol direto, UV, chuva forte, variação térmica e umidade sem perda estrutural. Não trinca por ciclo de absorção e secagem como o cerâmico esmaltado.",
  },
  {
    q: "Que altura máxima posso fazer numa fachada de cobogó?",
    a: "A altura máxima depende do modelo, da fundação e da estrutura de apoio. Em fachadas residenciais, muros de cobogó com pilar pré-moldado e fundação corrida adequada chegam confortavelmente a 3 metros. Acima disso, a Central avalia caso a caso considerando vento da região e estrutura complementar.",
  },
  {
    q: "Cobogó para fachada precisa de revestimento extra ou pode ficar exposto?",
    a: "Cobogó de concreto natural pode ficar exposto sem revestimento extra · o próprio acabamento do concreto pré-moldado é o final. Quem prefere cor pode pedir o cobogó pintado em fábrica, que já vem com proteção da tinta · sem precisar pintar depois.",
  },
  {
    q: "Quais modelos de cobogó da Central servem pra fachada externa?",
    a: "Todos os 14 modelos da Central servem pra fachada externa porque são todos em concreto pré-moldado · mas cinco se destacam pelo equilíbrio entre estética, resistência e durabilidade: Eclipse, Fenestra, Antichuva, Ao Quadrado e Citadino Dupla Face.",
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
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cobogós",
          item: `${SITE_URL}/cobogos`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cobogó para fachada",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "ItemList",
      name: "5 modelos de cobogó da Central recomendados para fachada",
      itemListElement: modelos.map((m, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Thing",
          name: `Cobogó ${m.nome}`,
          description: m.bio,
          image: `${SITE_URL}${m.cardFoto}`,
        },
      })),
    },
  ],
};

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
        url: OG_IMAGE,
        width: 1200,
        height: 1200,
        alt: "Cobogó Fenestra de concreto pintado em muro de fachada bordô · Central do Concreto Ivoti RS",
      },
    ],
  },
};

export default function CobogoFachadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-4 pt-6 pb-2 text-sm"
      >
        <ol className="flex flex-wrap items-center gap-2 text-cc-gray-600">
          <li>
            <Link href="/" className="hover:text-cc-orange">
              Início
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/cobogos" className="hover:text-cc-orange">
              Cobogós
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li
            className="text-cc-gray-700 font-medium"
            aria-current="page"
          >
            Cobogó para fachada
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
        <Image
          src="/cluster-cobogos/cobogo-fenestra-concreto-ivoti-02.webp"
          alt="Fachada de muro bordô com cobogó modelo Fenestra · padrão vazado em arco duplo simétrico · Central do Concreto Ivoti RS"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative container mx-auto px-4 py-16 max-w-3xl text-white">
          <p className="text-cc-orange font-semibold mb-3 uppercase tracking-wide text-sm">
            Cluster Cobogós · Fachada
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Cobogó para fachada · 5 modelos resistentes a sol, chuva e UV
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/95">
            Cobogó de concreto pré-moldado é a melhor escolha pra fachada externa por três razões: resistência mecânica, baixa absorção de umidade e durabilidade UV. A Central entrega 14 modelos no raio de 120 km a partir de Ivoti · cinco deles concentram a maior parte das fachadas residenciais.
          </p>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(
              "Olá, quero falar sobre cobogó para fachada."
            )}`}
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Falar sobre cobogó para fachada
          </a>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Caminhão próprio
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Raio 120 km · 16 cidades
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Pintura em fábrica
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow>Guia · Fachada de cobogó</Eyebrow>

        {/* TOC */}
        <aside
          aria-label="Índice deste guia"
          className="bg-cc-gray-50 border border-cc-gray-200 rounded-lg p-6 my-8"
        >
          <h2 className="text-base font-semibold text-cc-gray-700 mb-3 uppercase tracking-wide">
            Neste guia
          </h2>
          <ol className="space-y-2 text-cc-gray-700">
            <li>
              <a href="#por-que-fachada" className="hover:text-cc-orange">
                Por que cobogó é a melhor escolha pra fachada →
              </a>
            </li>
            <li>
              <a href="#5-modelos-fachada" className="hover:text-cc-orange">
                Os 5 modelos mais usados em fachada →
              </a>
            </li>
            <li>
              <a href="#sombra-e-luz" className="hover:text-cc-orange">
                Como o cobogó projeta sombra e luz →
              </a>
            </li>
            <li>
              <a
                href="#moderna-ou-tradicional"
                className="hover:text-cc-orange"
              >
                Fachada moderna ou tradicional · qual modelo →
              </a>
            </li>
            <li>
              <a href="#natural-ou-pintado" className="hover:text-cc-orange">
                Natural ou pintado na fachada externa →
              </a>
            </li>
            <li>
              <a href="#entrega-instalacao" className="hover:text-cc-orange">
                Entrega + instalação · 16 cidades →
              </a>
            </li>
          </ol>
        </aside>

        {/* H2 1 */}
        <h2
          id="por-que-fachada"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Por que cobogó de concreto é a melhor escolha pra fachada externa?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Cobogó de concreto vence cerâmico e gesso em fachada externa por três motivos: maior resistência mecânica, baixa absorção de umidade e durabilidade UV sem perda estrutural. Fachada de cobogó precisa aguentar décadas de sol direto, chuva forte e variação térmica · o concreto pré-moldado da Central é fabricado em traço próprio pra essa exposição contínua.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Cobogó cerâmico esmaltado trinca por ciclo térmico depois de 2 a 3 anos. Cobogó de gesso não serve pra fora · absorve umidade e desfaz. Cobogó de vidro reflete sol direto pro vizinho. Cobogó de concreto é o único material que combina resistência, durabilidade e estética sem trade-off forte.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Por isso a maior parte das fachadas autorais da Serra Gaúcha sai com cobogó de concreto · em residências, condomínios e comércio.
        </p>
        <div className="my-8 aspect-[4/3] overflow-hidden rounded-lg relative">
          <Image
            src="/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp"
            alt="Cobogó modelo Eclipse em concreto pré-moldado · muro alto construído com módulos Eclipse em série, padrão de círculos entrelaçados formando textura visual contínua, ambiente residencial externo com calçada de petit pavé · Central do Concreto Ivoti RS"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* H2 2 · 5 modelos */}
        <h2
          id="5-modelos-fachada"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Quais 5 modelos da Central são mais usados em fachada?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Cinco modelos da Central concentram a maior parte das fachadas de cobogó: Eclipse, Fenestra, Antichuva, Ao Quadrado e Citadino Dupla Face. Cada um cobre uma intenção visual diferente · presença imponente, decorativo de alto impacto, resistência a chuva direta, minimalismo contemporâneo, ritmo geométrico contínuo.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Clique em qualquer card pra ver foto da peça em fachada e descrição focada nessa aplicação.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {modelos.map((m) => (
            <Link
              key={m.slug}
              href={`#modelo-${m.slug}`}
              className="group block"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-cc-gray-50 mb-3 relative">
                <Image
                  src={m.cardFoto}
                  alt={m.cardAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-cc-gray-700 mb-1 group-hover:text-cc-orange transition-colors">
                {m.nome}
              </h3>
              <p className="text-sm text-cc-gray-600 leading-relaxed">
                {m.bio}
              </p>
            </Link>
          ))}
        </div>

        {/* H2 3 */}
        <h2
          id="sombra-e-luz"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Como o cobogó projeta sombra e desenha luz na fachada?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Cobogó para fachada projeta sombra controlada porque o vazado funciona como filtro solar · cada modelo cria um desenho diferente no piso e na parede conforme o ângulo do sol. O Eclipse projeta sombra de pétalas circulares · o Antichuva cria malha quadriculada que parece pixel · o Ao Quadrado desenha quadrados grandes e nítidos.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O efeito depende da hora do dia e da estação · em junho o sol baixo deita o desenho horizontal · em dezembro o sol alto encurta a sombra. Quem projeta a fachada pode escolher o modelo pensando no desenho que quer dentro da casa.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A varanda, o corredor ou o quarto que recebem a luz do cobogó ganham textura visual sem precisar de cortina · e ainda ventilam naturalmente nos dias quentes.
        </p>
        <div className="my-8 aspect-[4/3] overflow-hidden rounded-lg relative">
          <Image
            src="/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-02.webp"
            alt="Cobogó modelo Ao Quadrado em concreto pré-moldado · muro alto construído com módulos Ao Quadrado em série pintados em tom grafite escuro, padrão de pequenos quadrados vazados em malha densa, ambiente residencial externo com jardim de folhagens · Central do Concreto Ivoti RS"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* H2 4 */}
        <h2
          id="moderna-ou-tradicional"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Cobogó para fachada moderna ou tradicional · qual modelo combina?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A escolha do modelo de cobogó pra fachada depende do estilo arquitetônico · linhas retas e geometria minimalista combinam com fachada moderna; padrões intrincados e referências culturais combinam com fachada tradicional ou autoral. Fachada moderna pede Ao Quadrado ou Citadino Dupla Face · geometria limpa, linha contemporânea.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Fachada autoral ou tradicional pede Fenestra ou Eclipse · padrões mais ricos, presença visual forte. Antichuva é o coringa · serve a qualquer estilo onde resistência à chuva manda mais que estética.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Dúvida entre dois modelos? Mande foto da fachada pelo WhatsApp · respondemos com sugestão considerando exposição solar, vento predominante e estilo da residência.
        </p>
        <div className="my-8 aspect-[4/3] overflow-hidden rounded-lg relative">
          <Image
            src="/cluster-cobogos/cobogo-antichuva-concreto-ivoti-02.webp"
            alt="Cobogó modelo Antichuva em concreto pré-moldado · muro construído com módulos Antichuva em série, padrão de pequenos quadrados vazados em malha regular, ambiente externo com sombras suaves e vegetação ao fundo · Central do Concreto Ivoti RS"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* H2 5 */}
        <h2
          id="natural-ou-pintado"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Cobogó natural ou pintado na fachada externa?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Cobogó para fachada pode ser entregue em concreto natural (cinza original) ou pintado em fábrica nas cores escolhidas · a decisão define estética e necessidade de manutenção. Concreto natural envelhece sem trincar · ganha pátina e textura ao longo dos anos · não precisa de manutenção.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Cobogó pintado em fábrica chega com proteção da tinta · cores possíveis incluem grafite, branco, preto, bordô, terracota e verde · qualquer cor RAL ou Pantone mediante pedido.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Quem prioriza custo e zero manutenção escolhe natural. Quem prioriza identidade visual da casa escolhe pintado.{" "}
          <Link
            href="/cobogos/pintado-ou-natural"
            className="text-cc-orange underline hover:no-underline"
          >
            Detalhes em natural ou pintado →
          </Link>
        </p>
        <div className="my-8 aspect-[4/3] overflow-hidden rounded-lg relative">
          <Image
            src="/cluster-cobogos/cobogo-citadino-dupla-face-concreto-ivoti.webp"
            alt="Cobogó modelo Citadino Dupla Face em concreto pré-moldado · muro construído com módulos triangulares vazados em série, ritmo geométrico contínuo, acabamento branco · Central do Concreto Ivoti RS"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* H2 6 */}
        <h2
          id="entrega-instalacao"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Entrega + instalação de fachada de cobogó · 16 cidades · raio 120 km
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A Central entrega cobogó pra fachada em 16 cidades dentro do raio de 120 km a partir de Ivoti, com caminhão próprio · e instala com equipe própria quando o cliente contrata o serviço. Entrega descarrega ao lado do canteiro · prazo médio 2 a 5 dias após confirmação do pedido.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Instalação corre com equipe da Central e argamassa específica · prazo combinado conforme volume de muro.{" "}
          <Link
            href="/cobogos/instalacao"
            className="text-cc-orange underline hover:no-underline"
          >
            Detalhes em instalação →
          </Link>{" "}
          ·{" "}
          <Link
            href="/cobogos/entrega"
            className="text-cc-orange underline hover:no-underline"
          >
            Detalhes em entrega →
          </Link>
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Veja se sua cidade está no raio na lista abaixo · clique na cidade pra abrir conversa no WhatsApp com sua localização já preenchida.
        </p>
      </article>

      {/* 5 ANCHOR SECTIONS */}
      <section className="bg-cc-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-cc-gray-700 mb-12 text-center">
            Os 5 modelos da Central pra fachada
          </h2>
          <div className="space-y-16">
            {modelos.map((m) => (
              <div
                key={m.slug}
                id={`modelo-${m.slug}`}
                className="scroll-mt-24 grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg relative">
                  <Image
                    src={m.anchorFoto}
                    alt={m.anchorAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cc-gray-700 mb-3">
                    {m.nome}
                  </h3>
                  <p className="text-cc-gray-700 leading-relaxed mb-5">
                    {m.descricao}
                  </p>
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                      `Olá, quero falar sobre cobogó modelo ${m.nome} pra fachada.`
                    )}`}
                    className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-5 py-2.5 rounded-md transition-colors"
                  >
                    Falar sobre {m.nome}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITY PILLS */}
      <section className="bg-cc-black py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-center">
            Entrega de cobogó pra fachada · 16 cidades
          </h2>
          <p className="text-white/80 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            Raio de 120 km a partir de Ivoti-RS · caminhão próprio · descarga ao lado do canteiro de obra.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cidades.map((c) => (
              <a
                key={c}
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  `Olá! Quero falar sobre cobogó para fachada com entrega em ${c}.`
                )}`}
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-cc-whatsapp hover:border-cc-whatsapp hover:text-white px-4 py-2 rounded-full text-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {c}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-cc-gray-700 mb-8">
          Perguntas frequentes · fachada de cobogó
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border border-cc-gray-200 rounded-lg"
            >
              <summary className="cursor-pointer flex items-start justify-between gap-4 px-5 py-4 list-none">
                <h3 className="inline font-semibold text-cc-gray-700 leading-snug">
                  {f.q}
                </h3>
                <span className="text-cc-orange text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-cc-gray-700 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cc-black py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos definir o cobogó da sua fachada?
          </h2>
          <p className="text-white/80 mb-8 text-lg leading-relaxed">
            Mande foto da fachada, tamanho aproximado do muro e cidade · respondemos com modelos sugeridos, preço unitário e prazo de entrega.
          </p>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(
              "Olá, quero falar sobre cobogó para fachada."
            )}`}
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg"
          >
            Falar agora pelo WhatsApp
          </a>
        </div>
      </section>

      {/* CROSS-LINK */}
      <section className="bg-white py-12 border-t border-cc-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-sm uppercase tracking-wide text-cc-gray-600 mb-5 text-center font-semibold">
            Explore mais da Central
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <Link
              href="/produtos/muros-e-gradis"
              className="text-cc-gray-700 hover:text-cc-orange py-3 transition-colors"
            >
              Muros e gradis →
            </Link>
            <Link
              href="/produtos/pergolado-de-concreto"
              className="text-cc-gray-700 hover:text-cc-orange py-3 transition-colors"
            >
              Pergolado de concreto →
            </Link>
            <Link
              href="/tubo-de-concreto"
              className="text-cc-gray-700 hover:text-cc-orange py-3 transition-colors"
            >
              Tubos de drenagem →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
