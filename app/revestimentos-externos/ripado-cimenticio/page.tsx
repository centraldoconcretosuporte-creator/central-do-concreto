import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/revestimentos-externos/ripado-cimenticio";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const SITE_URL = "https://centraldoconcretoentrega.com.br";

const PAGE_TITLE =
  "Revestimento Ripado Cimentício · Ripas Verticais sem Manutenção · Central do Concreto";
const PAGE_DESCRIPTION =
  "Revestimento Ripado Cimentício em concreto pré-moldado · ripas paralelas verticais que substituem ripado de madeira tratada sem custo de manutenção · fabricação local em Ivoti-RS com entrega no raio de 120 km.";
const HERO_IMG =
  "/cluster-revestimentos-externos/revestimentos-ripado-cimenticio-ivoti.webp";
const HERO_ALT =
  "Fachada residencial com revestimento Ripado Cimentício em concreto · ripas paralelas verticais substituindo ripado de madeira tratada · Central do Concreto Ivoti RS";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Revestimento Ripado Cimentício · Ripas Verticais sem Manutenção",
    description:
      "Revestimento Ripado Cimentício · ripas paralelas verticais em concreto · substitui ripado de madeira · Ivoti-RS.",
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
    title: "Revestimento Ripado Cimentício · Ripas Verticais sem Manutenção",
    description:
      "Revestimento Ripado Cimentício · ripas paralelas verticais em concreto · substitui ripado de madeira · Ivoti-RS.",
    images: [`${SITE_URL}${HERO_IMG}`],
  },
};

const faqs = [
  {
    q: "Qual a diferença real entre Ripado Cimentício e ripado de madeira tratada na obra?",
    a: "Três diferenças práticas · custo de manutenção (madeira tratada precisa de óleo ou stain a cada 2 anos pra não desbotar, o cimentício não precisa), durabilidade em ambiente úmido (madeira pode trincar por ciclo de umidade, o cimentício não), e custo total de propriedade em 10 anos (a madeira parece mais barata na obra mas o custo acumulado de manutenção iguala ou supera o do cimentício). A estética é equivalente, especialmente com Cortein simulando madeira envelhecida.",
  },
  {
    q: "Ripado Cimentício pode ser usado horizontal ao invés de vertical?",
    a: "Tecnicamente pode, instalando a peça girada 90°. Mas a aplicação ideal é vertical · é como o desenho da peça foi pensado, e é como o efeito visual funciona melhor. Em horizontal, as ripas viram linhas que rompem a leitura da parede como pano contínuo · em vertical, as ripas se integram visualmente e elevam o pé direito. Em casos específicos de projeto (rodapé arquitetônico, painel deitado em escada), a Central pode orientar instalação horizontal sem problema técnico.",
  },
  {
    q: "Quanto pesa o Ripado Cimentício por m² em comparação com ripado de madeira?",
    a: "O Ripado Cimentício é mais pesado por m² que o ripado de madeira tratada · concreto pesa mais que madeira tropical. Em obra nova ou reforma com alvenaria nova, isso não é problema · a estrutura é dimensionada pro peso. Em fachada com alvenaria antiga, vale consultar engenheiro · em geral, o cimentício funciona em qualquer alvenaria construída nos últimos 30 anos sem ajuste estrutural adicional.",
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
          name: "Ripado Cimentício",
          item: "https://centraldoconcretoentrega.com.br/revestimentos-externos/ripado-cimenticio",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qual a diferença real entre Ripado Cimentício e ripado de madeira tratada na obra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Três diferenças práticas · custo de manutenção (madeira tratada precisa de óleo ou stain a cada 2 anos pra não desbotar, o cimentício não precisa), durabilidade em ambiente úmido (madeira pode trincar por ciclo de umidade, o cimentício não), e custo total de propriedade em 10 anos (a madeira parece mais barata na obra mas o custo acumulado de manutenção iguala ou supera o do cimentício). A estética é equivalente, especialmente com Cortein simulando madeira envelhecida.",
          },
        },
        {
          "@type": "Question",
          name: "Ripado Cimentício pode ser usado horizontal ao invés de vertical?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tecnicamente pode, instalando a peça girada 90°. Mas a aplicação ideal é vertical · é como o desenho da peça foi pensado, e é como o efeito visual funciona melhor. Em horizontal, as ripas viram linhas que rompem a leitura da parede como pano contínuo · em vertical, as ripas se integram visualmente e elevam o pé direito. Em casos específicos de projeto (rodapé arquitetônico, painel deitado em escada), a Central pode orientar instalação horizontal sem problema técnico.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto pesa o Ripado Cimentício por m² em comparação com ripado de madeira?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Ripado Cimentício é mais pesado por m² que o ripado de madeira tratada · concreto pesa mais que madeira tropical. Em obra nova ou reforma com alvenaria nova, isso não é problema · a estrutura é dimensionada pro peso. Em fachada com alvenaria antiga, vale consultar engenheiro · em geral, o cimentício funciona em qualquer alvenaria construída nos últimos 30 anos sem ajuste estrutural adicional.",
          },
        },
      ],
    },
  ],
};

export default function RipadoCimenticioPage() {
  const ctaMessage = "Olá, quero falar sobre o revestimento Ripado Cimentício.";
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
              Ripado Cimentício
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
            Revestimento Ripado Cimentício
            <span className="block text-2xl md:text-3xl font-medium mt-3 text-cc-orange">
              Ripas verticais em concreto · sem manutenção como madeira
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Ripado Cimentício é o revestimento que substitui ripado de madeira
            tratada na fachada e no muro · ripas paralelas verticais em concreto
            pré-moldado com o mesmo efeito visual da madeira ripada, sem o custo
            periódico de tratamento, sem trinca por umidade, sem manutenção ano
            após ano. Fabricado em Ivoti em acabamento natural e Cortein (também
            chamado Oxi) sob encomenda.
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
            Falar pelo WhatsApp sobre Ripado Cimentício
          </a>
          <p className="mt-8 text-sm md:text-base text-white/90 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>✓ Ripas verticais paralelas</span>
            <span>✓ Sem manutenção</span>
            <span>✓ Instaladores parceiros</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia do revestimento Ripado Cimentício</Eyebrow>
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
                  O que é Ripado Cimentício
                </a>
              </li>
              <li>
                <a href="#acabamento" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Acabamento do Ripado Cimentício
                </a>
              </li>
              <li>
                <a href="#onde-aplicar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Onde aplicar Ripado Cimentício
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Ripado Cimentício comparado com Placa Cimentícia
                </a>
              </li>
              <li>
                <a href="#como-instalar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Como instalar Ripado Cimentício
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
          O que é Ripado Cimentício?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Ripado Cimentício é placa de concreto com ripas paralelas verticais que
          substitui ripado de madeira na fachada. Cada placa tem várias ripas
          espaçadas formando padrão de listras verticais que se conectam
          visualmente quando aplicadas em série. O efeito final replica o visual
          do ripado de madeira tratada (Cumaru, Itaúba, Garapeira) sem os custos
          de manutenção que a madeira exige.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A vantagem do cimentício sobre a madeira está em três pontos ·
          durabilidade (concreto não trinca por umidade, não tem inseto
          xilófago, não precisa de tratamento anual), cor estável (a madeira
          escurece com o tempo, o cimentício mantém o tom), e consistência
          dimensional (cada placa de cimentício é igual à anterior, na madeira
          cada ripa varia).
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
          Acabamento do Ripado Cimentício
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Ripado Cimentício é fabricado em acabamento natural (cinza concreto
          puro) e com efeito Cortein sob encomenda · sem variantes cromáticas
          adicionais. O Cortein no Ripado funciona particularmente bem porque o
          tom de ferro envelhecido aproxima o visual ao do Cumaru envelhecido
          (madeira ipê de tom dourado avermelhado), criando alternativa em
          concreto pra esse efeito sem o custo da madeira nobre.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Em projeto contemporâneo, o Ripado natural dialoga com fachadas claras
          e elementos metálicos. Em projeto que pede pegada mais quente (área
          externa de lazer, painel da varanda gourmet), o Cortein cria atmosfera
          próxima da madeira tropical sem precisar manter a madeira viva.
        </p>

        <h2 id="onde-aplicar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Onde aplicar Ripado Cimentício?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Ripado Cimentício funciona em três cenários típicos · painel pontual em
          fachada que pede destaque vertical (entrada principal, painel da
          varanda, fechamento de pilar), muro divisório que recebe paisagismo na
          base, e fachada de área de lazer externa onde antes se usava madeira
          tratada (área da piscina, varanda gourmet, painel de churrasqueira
          externa).
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A direção vertical das ripas eleva visualmente o pé direito · funciona
          bem em pé direito médio (até 4m) onde o efeito ascendente valoriza o
          ambiente. Em painel muito largo (&gt;4m de largura), vale pensar em
          paginação com separação entre módulos pra evitar leitura monótona. A
          combinação com plantas de folhagem grande (bananeira, costela-de-adão)
          cria contraste forte de orgânico vivo + vertical seco.
        </p>

        <h2 id="comparativo" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Ripado Cimentício comparado com Placa Cimentícia
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Ripado Cimentício e{" "}
          <Link
            href="/revestimentos-externos/placa-cimenticia"
            className="text-cc-orange underline hover:no-underline"
          >
            Placa Cimentícia
          </Link>{" "}
          são os dois revestimentos minimalistas da Central · diferem na direção
          visual. Placa Cimentícia é estática, contínua, sem direção · base limpa
          pra outros elementos do projeto. Ripado Cimentício é direcional,
          vertical · cria movimento ascendente na parede.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A escolha entre os dois depende do tipo de movimento desejado · Placa
          pra base que ancora a composição, Ripado pra acento que eleva o
          ambiente. Em projeto que usa os dois, a base costuma ser Placa
          Cimentícia natural e o Ripado entra em painéis pontuais onde se quer
          destaque vertical · entrada principal, painel da varanda, fechamento da
          escada externa.
        </p>

        <h2 id="como-instalar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Como instalar Ripado Cimentício
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Instalação de Ripado Cimentício envolve regularização da alvenaria,
          argamassa colante AC-III, posicionamento por carreira com atenção ao
          alinhamento vertical das ripas, e rejunte específico. A Central trabalha
          com instaladores parceiros que conhecem o produto e podemos indicar a
          partir da sua cidade.
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
          A Central entrega Ripado Cimentício em 16 cidades dentro do raio de 120
          km a partir de Ivoti com caminhão próprio e descarga no local. Para
          orçamento, toque na sua cidade abaixo · cada link abre uma mensagem
          WhatsApp pronta sobre o modelo Ripado Cimentício.
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
                  `Quero falar sobre Ripado Cimentício com entrega em ${cidade}.`,
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
            Perguntas frequentes sobre Ripado Cimentício
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
            Pronto pra orçar seu Ripado Cimentício?
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Ripas verticais paralelas em concreto · acabamento natural ou Cortein
            sob encomenda · substituição direta do ripado de madeira sem
            manutenção · instaladores parceiros indicados · entrega no raio de 120
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
              href="/revestimentos-externos/placa-cimenticia"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Placa Cimentícia
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
