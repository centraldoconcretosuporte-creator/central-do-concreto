import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import WhatsAppLink from "@/components/WhatsAppLink";

const SITE_URL = "https://centraldoconcretoentrega.com.br";
const CANONICAL_URL = `${SITE_URL}/cobogos/muro`;
const WHATSAPP_URL = "https://wa.me/5551996691757";
const PAGE_TITLE = "Muro de Cobogó de Concreto: Modelos e Como Escolher";
const PAGE_DESCRIPTION =
  "Guia de muro de cobogó de concreto: modelos, medidas, privacidade e como escolher o seu. Peças pré-moldadas com fornecimento e entrega em Ivoti-RS.";
const OG_IMAGE = `${SITE_URL}/cluster-cobogos/cobogo-antichuva-concreto-ivoti-02.webp`;

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
    slug: "urbano",
    nome: "Urbano",
    bio: "Diagonal triangular vazada · arranjo de canto duplo · pegada contemporânea pra muros residenciais.",
    descricao:
      "Cobogó Urbano no muro cria diagonal contínua de triângulos vazados · ideal pra muros residenciais e comerciais com pegada contemporânea. Geometria simples que combina com fachada moderna · ótimo aliado pra projetos arquitetônicos minimalistas. Visual ganha presença em muros de 2 metros ou mais.",
    cardFoto: "/cluster-cobogos/cobogo-urbano-concreto-ivoti-01.webp",
    cardAlt:
      "Cobogó modelo Urbano em concreto pré-moldado · muro de canto duplo com módulos quadrados subdivididos por diagonal, vazado triangular, ambiente externo com vegetação · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-urbano-concreto-ivoti-01.webp",
    anchorAlt:
      "Cobogó modelo Urbano em concreto pré-moldado · muro de canto duplo com módulos quadrados subdivididos por diagonal, vazado triangular, ambiente externo com vegetação · Central do Concreto Ivoti RS",
  },
  {
    slug: "citadino-dupla-face",
    nome: "Citadino Dupla Face",
    bio: "Ritmo geométrico de triângulos · acabamento dos dois lados · ideal entre vizinhos.",
    descricao:
      "Cobogó Citadino Dupla Face no muro entrega ritmo geométrico contínuo de triângulos vazados · indicado pra muros entre vizinhos ou divisões onde os dois lados ficam visíveis. Acabamento idêntico nos dois lados elimina o trade-off estético comum em outros modelos.",
    cardFoto: "/cluster-cobogos/cobogo-citadino-dupla-face-concreto-ivoti.webp",
    cardAlt:
      "Cobogó modelo Citadino Dupla Face em concreto pré-moldado · muro construído com módulos triangulares vazados em série, ritmo geométrico contínuo, acabamento branco · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-citadino-dupla-face-concreto-ivoti.webp",
    anchorAlt:
      "Cobogó modelo Citadino Dupla Face em concreto pré-moldado · muro construído com módulos triangulares vazados em série, ritmo geométrico contínuo, acabamento branco · Central do Concreto Ivoti RS",
  },
  {
    slug: "trancado",
    nome: "Trançado",
    bio: "Padrão tipo grelha · barras horizontais e verticais entrelaçadas · industrial leve.",
    descricao:
      "Cobogó Trançado no muro cria textura visual de grelha entrelaçada · ótimo pra muros decorativos onde o padrão linear se conecta com fachadas ortogonais. Acabamento branco realça a geometria · serve bem em projetos contemporâneos com referência industrial leve.",
    cardFoto: "/cluster-cobogos/cobogo-trancado-concreto-ivoti.webp",
    cardAlt:
      "Cobogó modelo Trançado em concreto pré-moldado · barras horizontais e verticais entrelaçadas formando padrão tipo grelha, vazados internos retangulares, acabamento branco · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-trancado-concreto-ivoti.webp",
    anchorAlt:
      "Cobogó modelo Trançado em concreto pré-moldado · barras horizontais e verticais entrelaçadas formando padrão tipo grelha, vazados internos retangulares, acabamento branco · Central do Concreto Ivoti RS",
  },
  {
    slug: "antichuva",
    nome: "Antichuva",
    bio: "16 furos quadrados em malha 4×4 com superfícies inclinadas · técnico pra muros expostos a chuva direta.",
    descricao:
      "Cobogó Antichuva no muro é a escolha técnica pra muros expostos a chuva direta e vento forte · 16 furos quadrados com superfícies inclinadas impedem entrada de água sem comprometer a ventilação. Padrão regular tipo grelha cria visual ordenado · combina com qualquer estilo arquitetônico.",
    cardFoto: "/cluster-cobogos/cobogo-antichuva-concreto-ivoti-02.webp",
    cardAlt:
      "Cobogó modelo Antichuva em concreto pré-moldado · muro construído com módulos Antichuva em série, padrão de pequenos quadrados vazados em malha regular, ambiente externo com sombras suaves e vegetação ao fundo · Central do Concreto Ivoti RS",
    anchorFoto: "/cluster-cobogos/cobogo-antichuva-concreto-ivoti-02.webp",
    anchorAlt:
      "Cobogó modelo Antichuva em concreto pré-moldado · muro construído com módulos Antichuva em série, padrão de pequenos quadrados vazados em malha regular, ambiente externo com sombras suaves e vegetação ao fundo · Central do Concreto Ivoti RS",
  },
  {
    slug: "ao-quadrado",
    nome: "Ao Quadrado",
    bio: "Malha fechada de furos quadrados · desenho sóbrio e geométrico · a maior privacidade da linha em muro.",
    descricao:
      "Furos quadrados pequenos em malha apertada — o desenho mais fechado do catálogo, ideal quando privacidade é prioridade. A grade regular passa sobriedade e combina com fachada contemporânea; em grafite, vira um muro de forte presença sem abrir mão da ventilação. Onde outros modelos deixam ver o outro lado, o Ao Quadrado fecha a visão e mantém o ar passando.",
    cardFoto: "/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-02.webp",
    cardAlt:
      "Muro de cobogó Ao Quadrado em grafite, malha fechada de furos quadrados — Ivoti-RS",
    anchorFoto: "/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-02.webp",
    anchorAlt:
      "Muro de cobogó Ao Quadrado em grafite, malha fechada de furos quadrados — Ivoti-RS",
  },
  {
    slug: "eclipse",
    nome: "Eclipse",
    bio: "Anéis circulares entrelaçados · geometria orgânica que quebra a rigidez · muito ar e luz no muro.",
    descricao:
      "Círculos que se cruzam formam um padrão orgânico — o contraponto às linhas retas dos outros modelos. Rende um muro leve, com bastante passagem de luz e ar, e um ar retrô-moderno que valoriza a fachada residencial. É o desenho que estampa a página do cluster: funciona tão bem em muro que virou a imagem principal dos cobogós da Central.",
    cardFoto: "/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp",
    cardAlt:
      "Muro de cobogó Eclipse com círculos entrelaçados em fachada residencial — Ivoti-RS",
    anchorFoto: "/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp",
    anchorAlt:
      "Muro de cobogó Eclipse com círculos entrelaçados em fachada residencial — Ivoti-RS",
  },
  {
    slug: "fenestra",
    nome: "Fenestra",
    bio: "Arcos duplos em sequência · o mais decorativo da linha · muro que assume o papel de fachada.",
    descricao:
      "Arcos duplos repetidos dão ao Fenestra um desenho de janela clássica em versão vazada — o modelo mais decorativo da linha. Ele pede protagonismo: em muro pintado, como o bordô, deixa de ser divisa e vira o ponto forte da fachada. Bom pra quem quer que o muro seja parte do projeto, não só um limite.",
    cardFoto: "/cluster-cobogos/cobogo-fenestra-concreto-ivoti-02.webp",
    cardAlt:
      "Muro de cobogó Fenestra pintado em bordô, arcos duplos — Ivoti-RS",
    anchorFoto: "/cluster-cobogos/cobogo-fenestra-concreto-ivoti-02.webp",
    anchorAlt:
      "Muro de cobogó Fenestra pintado em bordô, arcos duplos — Ivoti-RS",
  },
  {
    slug: "taco-chines",
    nome: "Taco Chinês",
    bio: "Barras alternadas em treliça · textura ritmada e leve · referência oriental discreta no muro.",
    descricao:
      "Barras que se alternam formam uma treliça ritmada, inspirada nos painéis vazados orientais. O resultado é um muro leve, de textura marcada e boa ventilação, que fica ainda mais vivo quando pintado — como no branco e amarelo. Encaixa em projeto que quer movimento sem o peso de uma malha fechada.",
    cardFoto: "/cluster-cobogos/cobogo-taco-chines-concreto-ivoti-02.webp",
    cardAlt:
      "Muro de cobogó Taco Chinês em branco e amarelo, barras alternadas — Ivoti-RS",
    anchorFoto: "/cluster-cobogos/cobogo-taco-chines-concreto-ivoti-02.webp",
    anchorAlt:
      "Muro de cobogó Taco Chinês em branco e amarelo, barras alternadas — Ivoti-RS",
  },
];

const faqs = [
  {
    q: "Muro de cobogó é seguro? Dá pra escalar pelo vazado?",
    a: "Muro de cobogó é tão seguro quanto muro fechado de concreto · o vazado é desenhado pra deixar passar luz e ar, não pra apoiar peso. Os furos típicos têm 8 a 15 cm · espaço pequeno demais pra alguém escalar ou apoiar braço com firmeza. Quem quer reforço extra combina cobogó na parte alta + base sólida nos primeiros 80 cm.",
  },
  {
    q: "Posso fazer muro de cobogó sozinho ou precisa de pedreiro?",
    a: "Muro de cobogó pode ser feito por pedreiro autônomo desde que ele entenda de prumo, fundação e argamassa específica · ou pela equipe da Central, que faz instalação completa em obras dentro do raio de 120 km. A Central também fornece a argamassa correta junto com as peças, evitando trinca por traço errado.",
  },
  {
    q: "Quanto tempo dura um muro de cobogó exposto à intempérie?",
    a: "Cobogó de concreto pré-moldado da Central tem durabilidade de décadas quando bem assentado e bem rejuntado. O concreto não sofre como cerâmico (que trinca) nem como gesso (que desfaz). Manutenção restrita a lavagem ocasional · não precisa de pintura periódica se for natural.",
  },
  {
    q: "Cobogó precisa de pilar de sustentação? Quantos por metro?",
    a: "Sim. Muro de cobogó precisa de pilar pré-moldado ou de concreto armado a cada 2 a 3 metros de extensão, dependendo da altura e do modelo. A Central calcula o número exato de pilares no orçamento, considerando vento da região e estrutura desejada.",
  },
  {
    q: "Cobogó deixa passar barulho? Serve pra dividir terreno entre vizinhos?",
    a: "Cobogó deixa passar barulho parcialmente · não é parede acústica. Pra divisão entre vizinhos onde isolamento sonoro importa, a recomendação é cobogó na parte alta (acima de 1,5m) + muro sólido nos primeiros 80 cm · combina visual leve com corte do ruído mais baixo do vizinho.",
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
          name: "Muro de cobogó",
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
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${CANONICAL_URL}#itemlist`,
      name: "8 modelos de cobogó da Central recomendados para muro",
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
        alt: "Cobogó modelo Antichuva em concreto pré-moldado · muro construído com módulos Antichuva em série, padrão de pequenos quadrados vazados em malha regular, ambiente externo com sombras suaves e vegetação ao fundo · Central do Concreto Ivoti RS",
      },
    ],
  },
};

export default function CobogoMuroPage() {
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
            Muro de cobogó
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
        <Image
          src="/cluster-cobogos/cobogo-antichuva-concreto-ivoti-02.webp"
          alt="Cobogó modelo Antichuva em concreto pré-moldado · muro construído com módulos Antichuva em série, padrão de pequenos quadrados vazados em malha regular, ambiente externo com sombras suaves e vegetação ao fundo · Central do Concreto Ivoti RS"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative container mx-auto px-4 py-16 max-w-3xl text-white">
          <p className="text-cc-orange font-semibold mb-3 uppercase tracking-wide text-sm">
            Cobogós · Muro
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Muro de Cobogó: Privacidade com Ventilação Natural em Concreto Pré-Moldado
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/95">
            Da diagonal triangular do Urbano à malha técnica do Antichuva · oito modelos da Central que erguem muros em concreto pré-moldado com privacidade, ventilação e entrega no raio de 120 km a partir de Ivoti.
          </p>
          <WhatsAppLink
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(
              "Olá, quero falar sobre muro de cobogó."
            )}`}
            source="muro-hero"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Falar sobre muro de cobogó
          </WhatsAppLink>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Caminhão próprio
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Raio 120 km · 16 cidades
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Consulte instalação na sua cidade
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow>Guia · Muro de cobogó</Eyebrow>

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
              <a href="#por-que-muro-cobogo" className="hover:text-cc-orange">
                Por que muro de cobogó em vez de muro fechado →
              </a>
            </li>
            <li>
              <a href="#4-modelos-muro" className="hover:text-cc-orange">
                Os 8 modelos de cobogó pra muro →
              </a>
            </li>
            <li>
              <a href="#privacidade-do-muro" className="hover:text-cc-orange">
                Quanta privacidade o muro de cobogó dá →
              </a>
            </li>
            <li>
              <a
                href="#altura-maxima-muro"
                className="hover:text-cc-orange"
              >
                Que altura máxima posso fazer →
              </a>
            </li>
            <li>
              <a href="#custo-por-m2" className="hover:text-cc-orange">
                Quanto custa o m² de muro de cobogó →
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
          id="por-que-muro-cobogo"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Por que escolher muro de cobogó em vez de muro fechado?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Muro de cobogó vence muro fechado em três pontos: ventilação natural sem perder privacidade, estética mais leve e custo competitivo de mão de obra · sem comprometer segurança porque é parede de concreto pré-moldado.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Diferente do muro convencional de bloco cerâmico ou tijolo maciço, o cobogó deixa o ar passar e a luz entrar sem abrir o terreno. Quem está dentro vê o reflexo difuso da paisagem · quem está fora vê uma textura geométrica contínua, não o quintal. A barreira visual é real a partir de 1,5 metro de distância e o vento atravessa, evitando a sensação de confinamento que um muro fechado cria.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Em fachada moderna ou minimalista, o cobogó também resolve estética · o muro deixa de ser apenas um divisor de propriedade e vira elemento de composição. Cor neutra do concreto natural combina com qualquer paleta de fachada · pintura em fábrica permite contraste planejado.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Segurança é igual ou melhor que muro de bloco · a peça de concreto pré-moldado é maciça, não escala, e a fundação é a mesma de qualquer muro residencial. O custo de mão de obra cai porque cada peça já vem pronta · o pedreiro só assenta + rejunta · sem chapisco, sem reboco, sem pintura externa.
        </p>
        <div className="my-8 aspect-[4/3] overflow-hidden rounded-lg relative">
          <Image
            src="/cluster-cobogos/cobogo-urbano-concreto-ivoti-01.webp"
            alt="Cobogó modelo Urbano em concreto pré-moldado · muro de canto duplo com módulos quadrados subdivididos por diagonal, vazado triangular, ambiente externo com vegetação · Central do Concreto Ivoti RS"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* H2 2 · 5 modelos */}
        <h2
          id="4-modelos-muro"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Quais modelos da Central funcionam melhor em muro?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Oito modelos da Central cobrem os cenários de muro, do mais fechado ao mais decorativo. Qual escolher depende de três variáveis: o estilo da fachada, a exposição à chuva direta e quanta privacidade você quer nos dois lados.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Pra privacidade máxima, o Ao Quadrado é o mais fechado. Pra muro exposto a chuva e vento, o Antichuva é a escolha técnica. Entre vizinhos, o Citadino Dupla Face resolve os dois lados. Pra um muro que vira fachada, vá de Fenestra (arcos duplos) ou Eclipse (círculos). E pra textura mais leve, o Urbano contemporâneo, o Trançado industrial ou o Taco Chinês de pegada oriental.
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
          id="privacidade-do-muro"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Quanto de privacidade o muro de cobogó realmente dá?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Muro de cobogó dá privacidade alta a partir de 1,5 metro de distância · o olho humano não consegue focar através do vazado quando o observador está afastado, mesmo com furos de 8 a 15 cm de largura.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A geometria do vazado importa mais do que o tamanho do furo · padrão diagonal ou trançado quebra a linha de visão direta · padrão regular tipo grelha (Antichuva, Ao Quadrado) entrega leitura visual mais ordenada mas com privacidade equivalente. A diferença prática entre os modelos é estética, não funcional.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Pra quem quer reforço de privacidade em proximidade (varanda colada no muro do vizinho, calçada estreita, banheiro virado pra rua), a recomendação é combinar cobogó na parte alta com base sólida nos primeiros 80 centímetros · o cobogó cuida do que importa na altura do olhar de quem passa.
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

        {/* H2 4 */}
        <h2
          id="altura-maxima-muro"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Que altura máxima posso fazer no muro de cobogó?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Muro de cobogó pode chegar a 3 metros em obra residencial padrão · acima disso depende de pilar pré-moldado a cada 2 a 3 metros, fundação corrida adequada e cálculo de vento da região.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A altura limite vem da combinação peso da peça + estrutura de pilar + fundação. Cada cobogó pesa entre 12 e 22 quilos · uma fileira contínua de 10 metros lineares carrega 3 a 4 toneladas distribuídas. Pilar pré-moldado intermediário a cada 2-3 metros resolve o esforço lateral.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Em obras na Serra Gaúcha o vento de sul exige atenção especial · muros expostos sem proteção de vegetação ou edificação anterior devem reduzir vão entre pilares pra 2 metros, mesmo em altura modesta. A Central calcula o número exato de pilares no orçamento, considerando localização da obra e altura final desejada.
        </p>

        {/* H2 5 */}
        <h2
          id="custo-por-m2"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Quanto custa o m² de muro de cobogó?
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O custo do m² de muro de cobogó depende de três variáveis: o modelo escolhido, o acabamento (concreto natural ou pintado em fábrica) e se o cliente contrata a instalação ou só compra as peças.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O preço da peça oscila com o modelo · modelos com mais detalhe geométrico (Citadino Dupla Face, Trançado, Fenestra) custam mais que peças de geometria simples (Ao Quadrado, Antichuva). Cobogó pintado em fábrica agrega valor por mão de obra de aplicação + tinta resistente a UV · faixa típica adiciona 15% a 25% sobre a peça natural.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A Central monta o orçamento personalizado considerando o modelo escolhido, a quantidade de m², acabamento, se inclui pilar pré-moldado, se inclui argamassa específica e se contrata instalação. Mande as medidas do muro pelo WhatsApp · orçamento na hora ou em até 1 dia útil.
        </p>
        <div className="my-8 aspect-[4/3] overflow-hidden rounded-lg relative">
          <Image
            src="/cluster-cobogos/cobogo-trancado-concreto-ivoti.webp"
            alt="Cobogó modelo Trançado em concreto pré-moldado · barras horizontais e verticais entrelaçadas formando padrão tipo grelha, vazados internos retangulares, acabamento branco · Central do Concreto Ivoti RS"
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
          Entrega + instalação de muro de cobogó · 16 cidades · raio 120 km
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A Central entrega cobogó pra muro em 16 cidades dentro do raio de 120 km a partir de Ivoti, com caminhão próprio · e instala com equipe própria quando o cliente contrata o serviço.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O raio cobre Ivoti, Dois Irmãos, Estância Velha, Bom Princípio, Lindolfo Collor, São José do Hortêncio, Presidente Lucena, Novo Hamburgo, Campo Bom, Sapiranga, Picada Café, Morro Reuter, Santa Maria do Herval, Nova Petrópolis, Canela e Gramado · 16 cidades atendidas com frota própria, sem terceirizar o frete.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A equipe de instalação cuida de tudo entre a base e o último cobogó · fundação corrida, alinhamento de pilar pré-moldado, assentamento com argamassa específica, rejunte e limpeza final. Detalhe completo do processo está em{" "}
          <Link
            href="/cobogos/instalacao"
            className="text-cc-orange underline hover:no-underline"
          >
            /cobogos/instalacao
          </Link>{" "}
          · detalhes da entrega em{" "}
          <Link
            href="/cobogos/entrega"
            className="text-cc-orange underline hover:no-underline"
          >
            /cobogos/entrega
          </Link>
          .
        </p>
      </article>

      {/* 5 ANCHOR SECTIONS */}
      <section className="bg-cc-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-cc-gray-700 mb-12 text-center">
            Os 8 modelos da Central pra muro
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
                  <WhatsAppLink
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                      `Olá, quero falar sobre cobogó modelo ${m.nome} pra muro.`
                    )}`}
                    source={`muro-modelo-${m.slug}`}
                    className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-5 py-2.5 rounded-md transition-colors"
                  >
                    Falar sobre {m.nome} pra muro
                  </WhatsAppLink>
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
            Entrega de cobogó pra muro · 16 cidades
          </h2>
          <p className="text-white/80 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            Raio de 120 km a partir de Ivoti-RS · caminhão próprio · descarga ao lado do canteiro de obra.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cidades.map((c) => (
              <WhatsAppLink
                key={c}
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  `Olá! Quero falar sobre muro de cobogó com entrega em ${c}.`
                )}`}
                source={`muro-cidade-${c}`}
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
              </WhatsAppLink>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-cc-gray-700 mb-8">
          Perguntas frequentes · muro de cobogó
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
            Vamos definir o cobogó do seu muro?
          </h2>
          <p className="text-white/80 mb-8 text-lg leading-relaxed">
            Mande foto do local, tamanho aproximado do muro e cidade · respondemos com modelos sugeridos, preço unitário e prazo de entrega.
          </p>
          <WhatsAppLink
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(
              "Olá, quero falar sobre muro de cobogó."
            )}`}
            source="muro-final"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg"
          >
            Falar agora pelo WhatsApp
          </WhatsAppLink>
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
              Tubos de concreto pra drenagem →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
