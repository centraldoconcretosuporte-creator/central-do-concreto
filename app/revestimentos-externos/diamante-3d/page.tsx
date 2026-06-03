import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/revestimentos-externos/diamante-3d";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const SITE_URL = "https://centraldoconcretoentrega.com.br";

const PAGE_TITLE =
  "Revestimento Diamante 3D Cimentício · Facetas em Alto Relevo · Central do Concreto";
const PAGE_DESCRIPTION =
  "Revestimento Diamante 3D cimentício em concreto pré-moldado · facetas diagonais formando padrão de diamantes em alto relevo · ponto focal arquitetônico de grande impacto visual · fabricação local em Ivoti-RS.";
const HERO_IMG =
  "/cluster-revestimentos-externos/revestimentos-diamante-3d-cimenticio-ivoti.webp";
const HERO_ALT =
  "Muro residencial com revestimento Diamante 3D em concreto cimentício · facetas diagonais formando padrão de diamantes em alto relevo · Central do Concreto Ivoti RS";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Revestimento Diamante 3D Cimentício · Facetas em Alto Relevo",
    description:
      "Revestimento Diamante 3D cimentício · facetas diagonais em alto relevo · ponto focal arquitetônico · Ivoti-RS.",
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
      "Revestimento Diamante 3D Cimentício · Facetas em Alto Relevo",
    description:
      "Revestimento Diamante 3D cimentício · facetas diagonais em alto relevo · ponto focal arquitetônico · Ivoti-RS.",
    images: [`${SITE_URL}${HERO_IMG}`],
  },
};

const faqs = [
  {
    q: "Diamante 3D pesa mais que outros revestimentos cimentícios?",
    a: "Sim, o Diamante 3D é mais pesado por m² que Rock Face ou Moledo pela espessura adicional do relevo. Em construção nova ou reforma com alvenaria nova, isso não é problema · a estrutura já é dimensionada pro peso. Em reforma sobre alvenaria existente, vale consultar engenheiro · em alvenarias antigas a Central recomenda usar Diamante 3D em painéis pontuais ao invés de fachada inteira.",
  },
  {
    q: "Como o Diamante 3D se comporta com chuva e sujeira acumulada?",
    a: "O relevo do Diamante 3D acumula menos sujeira que revestimentos com textura fina (Rock Face, Moledo) porque a água da chuva escorre pelas facetas inclinadas e leva o pó embora. Em ambiente urbano com muita poeira, recomenda-se lavagem com água e sabão neutro 1x por ano nos painéis em altura média · facetas em altura acima de 3m geralmente se mantêm limpas sem manutenção.",
  },
  {
    q: "Posso iluminar o painel de Diamante 3D pra destacar o relevo à noite?",
    a: "Sim, e essa é uma das aplicações mais efetivas. Iluminação rasante (luminária no piso voltada pra cima ou no teto voltada pra baixo, com feixe fechado e ângulo de incidência baixo) intensifica o relevo do Diamante 3D criando sombras profundas que valorizam o painel como escultura arquitetônica. Vale conversar com seu projetista de iluminação pra definir potência e ângulo conforme a parede.",
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
          name: "Diamante 3D",
          item: "https://centraldoconcretoentrega.com.br/revestimentos-externos/diamante-3d",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Diamante 3D pesa mais que outros revestimentos cimentícios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, o Diamante 3D é mais pesado por m² que Rock Face ou Moledo pela espessura adicional do relevo. Em construção nova ou reforma com alvenaria nova, isso não é problema · a estrutura já é dimensionada pro peso. Em reforma sobre alvenaria existente, vale consultar engenheiro · em alvenarias antigas a Central recomenda usar Diamante 3D em painéis pontuais ao invés de fachada inteira.",
          },
        },
        {
          "@type": "Question",
          name: "Como o Diamante 3D se comporta com chuva e sujeira acumulada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O relevo do Diamante 3D acumula menos sujeira que revestimentos com textura fina (Rock Face, Moledo) porque a água da chuva escorre pelas facetas inclinadas e leva o pó embora. Em ambiente urbano com muita poeira, recomenda-se lavagem com água e sabão neutro 1x por ano nos painéis em altura média · facetas em altura acima de 3m geralmente se mantêm limpas sem manutenção.",
          },
        },
        {
          "@type": "Question",
          name: "Posso iluminar o painel de Diamante 3D pra destacar o relevo à noite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, e essa é uma das aplicações mais efetivas. Iluminação rasante (luminária no piso voltada pra cima ou no teto voltada pra baixo, com feixe fechado e ângulo de incidência baixo) intensifica o relevo do Diamante 3D criando sombras profundas que valorizam o painel como escultura arquitetônica. Vale conversar com seu projetista de iluminação pra definir potência e ângulo conforme a parede.",
          },
        },
      ],
    },
  ],
};

export default function Diamante3DPage() {
  const ctaMessage = "Olá, quero falar sobre o revestimento Diamante 3D.";
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
              Diamante 3D
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
            Revestimento Diamante 3D
            <span className="block text-2xl md:text-3xl font-medium mt-3 text-cc-orange">
              Facetas diagonais em alto relevo · ponto focal arquitetônico
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Diamante 3D é o revestimento cimentício de maior impacto visual da
            Central · peças quadradas com 4 facetas diagonais que formam padrão
            de diamantes em alto relevo. Aplicado em muro ou fachada, o desenho
            cria alternância intensa de luz e sombra que muda conforme o ângulo
            do sol durante o dia · efeito vivo, escultórico, arquitetônico.
            Fabricado em Ivoti com efeito Cortein (também chamado Oxi) opcional.
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
            Falar pelo WhatsApp sobre Diamante 3D
          </a>
          <p className="mt-8 text-sm md:text-base text-white/90 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>✓ Facetas em alto relevo</span>
            <span>✓ Ponto focal arquitetônico</span>
            <span>✓ Instaladores parceiros</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia do revestimento Diamante 3D</Eyebrow>
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
                  O que é Diamante 3D
                </a>
              </li>
              <li>
                <a href="#acabamento" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Acabamento do Diamante 3D
                </a>
              </li>
              <li>
                <a href="#onde-aplicar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Onde aplicar Diamante 3D
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Diamante 3D comparado com Mosaico 3D
                </a>
              </li>
              <li>
                <a href="#como-instalar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Como instalar Diamante 3D
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
          O que é Diamante 3D?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Diamante 3D é placa cimentícia com 4 facetas diagonais que formam
          diamantes em alto relevo quando aplicada em série. As facetas
          inclinadas se encontram no centro de cada peça formando um relevo
          piramidal · em série na parede, conectam visualmente criando padrão
          contínuo de diamantes em alto relevo. A profundidade do relevo é o que
          distingue o Diamante 3D dos outros revestimentos cimentícios da Central
          · o efeito tridimensional vem do volume real da peça, não de tinta ou
          textura superficial.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          O resultado é uma fachada que muda de aparência ao longo do dia · de
          manhã as facetas voltadas pro nascente captam luz e ficam claras, à
          tarde a luz vira e o desenho inverte. Em noite com iluminação artificial
          direcionada, o relevo cria sombras profundas que destacam o painel como
          escultura arquitetônica.
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
          Acabamento do Diamante 3D
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Diamante 3D é fabricado em acabamento natural (cinza concreto puro) e em
          efeito Cortein sob encomenda. A escolha do acabamento depende do uso do
          painel · natural mantém o foco no relevo da peça (a luz e sombra fazem o
          trabalho visual), Cortein adiciona contraste de tom quente que destaca o
          painel como ponto focal arquitetônico.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Pela intensidade visual do desenho, Diamante 3D não pede mistura de
          cores na mesma parede · um único acabamento aplicado em painel contínuo.
          Mistura com outras peças (Rock Face, Moledo, Placa Cimentícia) em
          painéis adjacentes funciona quando há separação clara de zonas
          arquitetônicas.
        </p>

        <h2 id="onde-aplicar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Onde aplicar Diamante 3D?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Diamante 3D funciona melhor em painéis pontuais de fachada e em muros de
          divisa frontal · qualquer aplicação em que o painel é visto a uma
          distância média (2 a 5 metros) e tem espaço pra o desenho se desenvolver.
          Painel mínimo recomendado: 4 m² contínuos · abaixo disso o padrão de
          diamantes não se forma completo.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A aplicação mais comum é o muro frontal residencial (como o exemplo da
          foto de hero) · o pedestre passa pela calçada e vê o painel inteiro de
          vez. Outra aplicação forte é o painel da garagem ou da entrada principal
          · zonas que pedem destaque arquitetônico sem palavras. Não é indicado pra
          fachada inteira porque a intensidade visual cansa em grandes áreas ·
          funciona como acento, não como base.
        </p>

        <h2 id="comparativo" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Diamante 3D comparado com Mosaico 3D
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Diamante 3D e{" "}
          <Link
            href="/revestimentos-externos/mosaico-3d"
            className="text-cc-orange underline hover:no-underline"
          >
            Mosaico 3D
          </Link>{" "}
          são os dois revestimentos cimentícios da Central com efeito
          tridimensional real · diferem no formato do relevo e na escala do
          desenho. Diamante 3D tem facetas grandes que formam diamantes alongados
          visíveis a distância · Mosaico 3D tem peças cúbicas em malha densa que
          cria textura visual rica de perto.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          A escolha entre os dois depende da distância de leitura do painel. Pra
          muros de divisa e fachadas grandes, Diamante 3D rende mais porque o
          desenho se lê inteiro de longe. Pra painéis menores e zonas que serão
          vistas de perto (parede de jardim, painel da varanda), Mosaico 3D entrega
          mais profundidade na textura. Ambos disponíveis com efeito Cortein.
        </p>

        <h2 id="como-instalar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Como instalar Diamante 3D
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Instalação de Diamante 3D envolve regularização da alvenaria, argamassa
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
          Entrega e orçamento
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          A Central entrega Diamante 3D em 16 cidades dentro do raio de 120 km a
          partir de Ivoti com caminhão próprio e descarga no local. Para orçamento,
          toque na sua cidade abaixo · cada link abre uma mensagem WhatsApp pronta
          sobre o modelo Diamante 3D.
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
                  `Quero falar sobre Diamante 3D cimentício com entrega em ${cidade}.`,
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
            Perguntas frequentes sobre Diamante 3D
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
            Pronto pra orçar seu Diamante 3D?
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Facetas em alto relevo · acabamento natural ou efeito Cortein · ponto
            focal arquitetônico · instaladores parceiros indicados · entrega no
            raio de 120 km. Toque abaixo e fale pelo WhatsApp com a Central.
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
              href="/revestimentos-externos/mosaico-3d"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Mosaico 3D
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
