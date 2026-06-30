import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/artefatos-de-cimento";
const WHATSAPP_URL = "https://wa.me/5551996691757";

const PAGE_TITLE = "Artefatos de Cimento em Ivoti-RS | Central do Concreto";
const PAGE_DESCRIPTION =
  "Artefato de cimento é o nome popular do pré-moldado de concreto: tubo, cobogó, muro, bloco, poste e mais, fabricados em Ivoti-RS com entrega em 120 km.";

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
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

type Card = {
  nome: string;
  href: string;
  desc: string;
  foto: string;
  alt: string;
};

// Cada card reusa uma imagem que JÁ existe na página/produto correspondente.
// {/* TROCAR: fotos dedicadas do banco artefatos-de-cimento quando André montar */}
const cards: Card[] = [
  {
    nome: "Tubo de concreto",
    href: "/tubo-de-concreto",
    desc: "Cano / manilha de cimento pra drenagem",
    foto: "/home/produtos/tubos.webp",
    alt: "Tubo de concreto · artefato de cimento pra drenagem · Central do Concreto Ivoti RS",
  },
  {
    nome: "Cobogó",
    href: "/cobogos",
    desc: "Elemento vazado pra muro que ventila",
    foto: "/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp",
    alt: "Cobogó de concreto · elemento vazado pra muro que ventila · Central do Concreto Ivoti RS",
  },
  {
    nome: "Muro e gradil",
    href: "/produtos/muros-e-gradis",
    desc: "Muro de placa e pilar pra fechar terreno",
    foto: "/home/produtos/muros.webp",
    alt: "Muro de placa e pilar de concreto pra fechar terreno · Central do Concreto Ivoti RS",
  },
  {
    nome: "Bloco",
    href: "/produtos/blocos",
    desc: "Bloco pra alvenaria estrutural e vedação",
    foto: "/produtos/blocos/hero.webp",
    alt: "Bloco de concreto pra alvenaria estrutural e vedação · Central do Concreto Ivoti RS",
  },
  {
    nome: "Poste e meio-fio",
    href: "/produtos/postes-e-meio-fio",
    desc: "Poste e guia pra infraestrutura",
    foto: "/produtos/postes/hero.webp",
    alt: "Poste e meio-fio de concreto pra infraestrutura · Central do Concreto Ivoti RS",
  },
  {
    nome: "PAVS",
    href: "/produtos/pavs",
    desc: "Piso intertravado pra calçada e pátio",
    foto: "/produtos/pavs/hero.webp",
    alt: "Piso intertravado PAVS pra calçada e pátio · Central do Concreto Ivoti RS",
  },
  {
    nome: "Piso atérmico",
    href: "/produtos/piso-atermico",
    desc: "Placa antiderrapante pra borda de piscina",
    foto: "/home/produtos/piso-atermico.webp",
    alt: "Piso atérmico antiderrapante pra borda de piscina · Central do Concreto Ivoti RS",
  },
  {
    nome: "Revestimentos",
    href: "/revestimentos-externos",
    desc: "Placas cimentícias pra fachada",
    foto: "/cluster-revestimentos-externos/revestimentos-externos-hero-fachada-ivoti.webp",
    alt: "Revestimentos cimentícios pra fachada · Central do Concreto Ivoti RS",
  },
  {
    nome: "Fossa e filtro",
    href: "/produtos/fossa-e-filtro",
    desc: "Saneamento pra imóvel sem esgoto",
    foto: "/home/produtos/fossa.webp",
    alt: "Fossa séptica e filtro de concreto pra imóvel sem esgoto · Central do Concreto Ivoti RS",
  },
  {
    nome: "Caixa de passagem",
    href: "/produtos/caixas-de-passagem",
    desc: "Caixa de inspeção pra rede",
    foto: "/produtos/caixas/hero.webp",
    alt: "Caixa de passagem de concreto pra inspeção de rede · Central do Concreto Ivoti RS",
  },
];

const faqs = [
  {
    q: "Artefato de cimento e pré-moldado de concreto é a mesma coisa?",
    a: 'Sim · é o mesmo produto com dois nomes. "Cimento" é como a maioria chama na obra; "pré-moldado de concreto" é o nome técnico de fábrica. A peça é feita de concreto — cimento misturado com areia, brita e água — então é mais resistente que cimento puro. Pode pedir pelos dois nomes que a Central entende.',
  },
  {
    q: "Onde comprar artefato de cimento em Ivoti-RS?",
    a: "Na fábrica da Central do Concreto, na Av. Bom Jardim 149, em Ivoti. A peça sai direto da fôrma, sem intermediário de revenda. O atendimento é com quem produz, pelo WhatsApp ou na fábrica, e a entrega é com caminhão próprio no raio de 120 km.",
  },
  {
    q: "A Central entrega artefato de cimento na obra?",
    a: "Sim · com caminhão próprio, num raio de 120 km a partir de Ivoti. A entrega é agendada, com carga protegida e descarga combinada no endereço. O frete é calculado pela distância. Pra obras no limite do raio, confirme prazo e valor pelo WhatsApp.",
  },
  {
    q: "Dá pra encomendar artefato de cimento sob medida?",
    a: "Sim · medidas e traços fora de catálogo são feitos sob encomenda. Tubo de diâmetro específico, lote grande pra obra ou peça especial: mande a especificação pelo WhatsApp que a Central retorna com prazo de fabricação e orçamento.",
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
          name: "Artefatos de Cimento",
          item: "https://centraldoconcretoentrega.com.br/artefatos-de-cimento",
        },
      ],
    },
    {
      "@type": "FAQPage",
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

export default function ArtefatosDeCimentoPage() {
  const ctaMessage = "Olá, quero falar sobre artefatos de cimento.";
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
            <li className="text-cc-gray-900 font-medium" aria-current="page">
              Artefatos de Cimento
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center justify-center">
        {/* TROCAR: foto dedicada do banco artefatos-de-cimento */}
        <Image
          src="/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp"
          alt="Artefatos de cimento pré-moldados em concreto da fábrica em Ivoti · Central do Concreto Ivoti RS"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-cc-orange mb-4">
            FÁBRICA · ARTEFATOS DE CIMENTO
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tubo, cobogó, muro, bloco e poste · artefatos de cimento da fábrica
            em Ivoti
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Artefato de cimento é o nome popular do pré-moldado de concreto · a
            mesma peça que sai da fôrma em Ivoti, mais forte que cimento puro. A
            Central do Concreto fabrica a linha completa: tubo e caixa pra
            drenagem, cobogó pra muro vazado, muro de placa e pilar, bloco pra
            alvenaria, poste e meio-fio, piso atérmico e fossa séptica. Tudo
            saindo direto da forma, com entrega em 120 km e caminhão próprio.
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
            <span>✓ Linha completa</span>
            <span>✓ Fábrica própria em Ivoti</span>
            <span>✓ Caminhão próprio</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia dos artefatos de cimento</Eyebrow>
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
                  O que é artefato de cimento
                </a>
              </li>
              <li>
                <a href="#resistente" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Por que é resistente
                </a>
              </li>
              <li>
                <a href="#linha" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  A linha completa da fábrica
                </a>
              </li>
              <li>
                <a href="#fabrica" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Comprar direto da fábrica
                </a>
              </li>
              <li>
                <a href="#entrega" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Entrega · 16 cidades no raio de 120 km
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Perguntas frequentes
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <h2 id="o-que-e" className="text-3xl md:text-4xl font-bold mt-4 mb-6 scroll-mt-24">
          Artefato de cimento é a mesma coisa que de concreto?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Sim · artefato de cimento e artefato de concreto são a mesma peça, só
          com nomes diferentes no dia a dia da obra. Na linguagem técnica,
          cimento é o pó aglomerante e concreto é a mistura de cimento com areia,
          brita e água — é dessa mistura que a peça é feita. Por isso o nome
          correto de fábrica é pré-moldado de concreto. Mas na obra, no balcão e
          na busca do Google, a maioria chama de &quot;artefato de cimento&quot; —
          e está falando exatamente do mesmo produto. Pra quem compra, o nome não
          muda nada: o que importa é a resistência da peça, o acabamento e a
          entrega na obra. Aqui na Central, pode pedir pelos dois nomes que a
          gente entende.
        </p>

        <h2 id="resistente" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Por que o artefato de cimento da Central é resistente?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          O artefato de cimento da Central é resistente porque é concreto de
          fábrica · cimento, areia e brita na dosagem certa pra cada peça. A
          força vem do traço controlado e da cura na fôrma, não de improviso no
          canteiro. Cada família tem o traço certo pro seu uso: o tubo que recebe
          carga de rua leva dosagem mais reforçada que o cobogó decorativo de
          parede. Uma peça misturada na mão, sem proporção e sem cura adequada,
          racha e perde resistência com o tempo. A peça que sai da nossa fôrma é
          dimensionada, vibrada e curada pra aguentar carga, umidade e o tempo na
          Serra Gaúcha. Por isso comprar o artefato pronto de fábrica entrega uma
          durabilidade que a mistura feita na obra não garante.
        </p>

        <h2 id="linha" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Quais artefatos de cimento a Central fabrica?
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          A Central fabrica a linha completa de artefato de cimento · drenagem,
          vedação, fechamento, piso e saneamento, tudo pré-moldado em Ivoti. Pra
          drenagem, tubo de concreto e caixa de passagem. Pra muro vazado que
          ventila, o cobogó. Pra fechar terreno, muro de placa e pilar com
          gradil. Pra levantar parede, bloco de concreto. Pra infraestrutura,
          poste e meio-fio. Pra calçada e pátio, o piso intertravado PAVS. Pra
          borda de piscina que não esquenta no sol, o piso atérmico. Pra fachada,
          os revestimentos cimentícios. E pra imóvel sem rede de esgoto, fossa
          séptica e filtro. Cada família tem sua própria página com medidas e
          modelos — toque no card abaixo pra abrir a que você procura.
        </p>

        {/* GRADE 10 CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block border border-cc-gray-200 rounded-lg overflow-hidden hover:border-cc-orange transition-colors"
            >
              <div className="relative aspect-square overflow-hidden bg-cc-gray-50">
                <Image
                  src={c.foto}
                  alt={c.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1 group-hover:text-cc-orange transition-colors">
                  {c.nome}
                </h3>
                <p className="text-sm text-cc-gray-600 leading-snug">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <h2 id="fabrica" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Por que comprar artefato de cimento direto da fábrica?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          Comprar direto da fábrica corta o intermediário · você paga a peça, não
          a margem da revenda, e fala com quem produz. Na Central, o atendimento é
          com quem está na produção, não com um balconista que repassa pedido.
          Isso encurta a resposta sobre medida, prazo e traço. A peça sai da fôrma
          em Ivoti com traço controlado pra cada uso, e o caminhão é próprio — a
          entrega não depende de transportadora terceirizada. Pra medida fora de
          catálogo, como um tubo de diâmetro específico ou um lote grande pra
          obra, dá pra encomendar. Quem compra na revenda paga a peça mais a
          margem de quem só revende; quem compra na fábrica fala direto e ajusta o
          pedido na origem.
        </p>

        <h2 id="entrega" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Quem entrega artefato de cimento na Serra Gaúcha?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          A Central entrega artefato de cimento num raio de 120 km a partir de
          Ivoti · 16 cidades da Serra Gaúcha e Vale dos Sinos. A entrega é com
          caminhão próprio, agendada, com carga protegida e descarga combinada no
          endereço da obra. Atende Ivoti, Novo Hamburgo, São Leopoldo, Dois
          Irmãos, Estância Velha, Portão, Campo Bom, Sapiranga, Nova Hartz,
          Igrejinha, Três Coroas, Taquara, Parobé, Gramado, Canela e Nova
          Petrópolis, entre outras dentro do raio. O frete é calculado pela
          distância até a obra. Pra entregas no limite do raio ou fora dele, vale
          confirmar prazo e valor pelo WhatsApp. Toque no botão e mande o endereço
          da obra que a gente retorna com a logística.
        </p>
      </article>

      {/* CITY PILLS — entrega/cidades · seção dark */}
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
                  `Olá! Quero falar sobre artefatos de cimento com entrega em ${cidade}.`,
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
      <section id="faq" className="container mx-auto px-4 py-16 max-w-3xl scroll-mt-24">
        <div className="text-center mb-10">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold">
            Perguntas frequentes sobre artefato de cimento
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
            Pronto pra orçar seu artefato de cimento?
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Linha completa de pré-moldado · tubo, cobogó, muro, bloco, poste e
            mais · fábrica própria em Ivoti · caminhão próprio no raio de 120 km ·
            atendimento direto com quem produz. Toque abaixo e fale pelo WhatsApp
            com a Central.
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
              href="/cobogos"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Cobogós de concreto
            </Link>
            <Link
              href="/tubo-de-concreto"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Tubo de concreto
            </Link>
            <Link
              href="/revestimentos-externos"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Revestimentos externos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
