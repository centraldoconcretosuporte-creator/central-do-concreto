import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/revestimentos-externos/moledo";
const WHATSAPP_URL = "https://wa.me/5551996691757";
const SITE_URL = "https://centraldoconcretoentrega.com.br";

const PAGE_TITLE =
  "Revestimento Moledo Cimentício · 17 Medidas Irregulares · Central do Concreto";
const PAGE_DESCRIPTION =
  "Revestimento Moledo cimentício em formatos irregulares · 17 medidas misturadas pra efeito de pedra natural assentada · variantes Areia, Marfim e Natural · fabricação local em Ivoti-RS com entrega no raio de 120 km.";
const HERO_IMG =
  "/cluster-revestimentos-externos/revestimentos-moledo-natural-cimenticio-ivoti.webp";
const HERO_ALT =
  "Revestimento Moledo em concreto cimentício acabamento natural · formatos irregulares · Central do Concreto Ivoti RS";

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
    nome: "Areia",
    bio: "Bege claro com tom dourado · variante mais quente",
    foto: "/cluster-revestimentos-externos/revestimentos-moledo-areia-cimenticio-ivoti.webp",
    alt: "Variante Areia do Moledo cimentício · bege claro com tom dourado suave · Central do Concreto Ivoti RS",
  },
  {
    nome: "Marfim",
    bio: "Creme neutro · expande fachadas pequenas",
    foto: "/cluster-revestimentos-externos/revestimentos-moledo-marfim-cimenticio-ivoti.webp",
    alt: "Variante Marfim do Moledo cimentício · creme neutro luminoso · Central do Concreto Ivoti RS",
  },
  {
    nome: "Natural",
    bio: "Cinza concreto cru · base versátil",
    foto: "/cluster-revestimentos-externos/revestimentos-moledo-natural-cimenticio-ivoti.webp",
    alt: "Variante Natural do Moledo cimentício · cinza concreto cru · Central do Concreto Ivoti RS",
  },
];

const faqs = [
  {
    q: "Por que o Moledo tem 17 medidas diferentes no mesmo palete?",
    a: "A variação de 17 medidas é o que faz o Moledo parecer pedra natural assentada na fachada. Sem essa variação, qualquer revestimento de placa termina mostrando padrão repetido depois de poucos m². Com 17 medidas misturadas, a parede fica visualmente única · o pedreiro pega a próxima peça do palete sem precisar pensar em ordem, e o resultado é aleatório de verdade.",
  },
  {
    q: "O pedreiro precisa de treinamento especial pra instalar Moledo?",
    a: "Não. Moledo se instala com argamassa colante AC-III e movimento simples de assentamento por carreira · qualquer pedreiro com experiência em revestimento cerâmico ou pedra dá conta. A única diferença é não tentar criar padrão · a regra é pegar a próxima peça do palete sem escolher. A Central pode indicar instaladores parceiros que já conhecem o produto na sua cidade.",
  },
  {
    q: "Moledo Areia, Marfim e Natural envelhecem de cores diferentes com o tempo?",
    a: "Não. As três variantes (Areia, Marfim, Natural) mantêm a cor original ao longo dos anos porque o pigmento é sólido no miolo da peça, não pintura superficial. O que muda visualmente com o tempo é o leve assentamento de pó urbano nas peças · em ambiente com muita poluição, o tom pode ficar levemente mais escuro, recuperável com lavagem simples. Em ambiente residencial limpo, as três cores se mantêm idênticas.",
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
          name: "Moledo",
          item: "https://centraldoconcretoentrega.com.br/revestimentos-externos/moledo",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Por que o Moledo tem 17 medidas diferentes no mesmo palete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A variação de 17 medidas é o que faz o Moledo parecer pedra natural assentada na fachada. Sem essa variação, qualquer revestimento de placa termina mostrando padrão repetido depois de poucos m². Com 17 medidas misturadas, a parede fica visualmente única · o pedreiro pega a próxima peça do palete sem precisar pensar em ordem, e o resultado é aleatório de verdade.",
          },
        },
        {
          "@type": "Question",
          name: "O pedreiro precisa de treinamento especial pra instalar Moledo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. Moledo se instala com argamassa colante AC-III e movimento simples de assentamento por carreira · qualquer pedreiro com experiência em revestimento cerâmico ou pedra dá conta. A única diferença é não tentar criar padrão · a regra é pegar a próxima peça do palete sem escolher. A Central pode indicar instaladores parceiros que já conhecem o produto na sua cidade.",
          },
        },
        {
          "@type": "Question",
          name: "Moledo Areia, Marfim e Natural envelhecem de cores diferentes com o tempo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. As três variantes (Areia, Marfim, Natural) mantêm a cor original ao longo dos anos porque o pigmento é sólido no miolo da peça, não pintura superficial. O que muda visualmente com o tempo é o leve assentamento de pó urbano nas peças · em ambiente com muita poluição, o tom pode ficar levemente mais escuro, recuperável com lavagem simples. Em ambiente residencial limpo, as três cores se mantêm idênticas.",
          },
        },
      ],
    },
  ],
};

export default function MoledoPage() {
  const ctaMessage = "Olá, quero falar sobre o revestimento Moledo.";
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
              Moledo
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
            Revestimento Moledo
            <span className="block text-2xl md:text-3xl font-medium mt-3 text-cc-orange">
              17 medidas irregulares · efeito pedra natural assentada
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Moledo é o revestimento cimentício da Central que substitui a pedra
            natural assentada na fachada com 17 medidas diferentes misturadas no
            mesmo palete. Cada parede revestida com Moledo fica visualmente única
            · sem repetição de padrão, sem trama industrial. Fabricado em Ivoti em
            três cores naturais (Areia, Marfim, Natural) com opção de Cortein
            (também chamado Oxi) sob consulta.
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
            Falar pelo WhatsApp sobre Moledo
          </a>
          <p className="mt-8 text-sm md:text-base text-white/90 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>✓ 17 medidas irregulares</span>
            <span>✓ 3 cores naturais</span>
            <span>✓ Instaladores parceiros</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia do revestimento Moledo</Eyebrow>
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
                  O que é Moledo
                </a>
              </li>
              <li>
                <a href="#variantes" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Variantes do Moledo
                </a>
              </li>
              <li>
                <a href="#onde-aplicar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Onde aplicar Moledo
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Moledo comparado com Rock Face
                </a>
              </li>
              <li>
                <a href="#como-instalar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Como instalar Moledo
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
          O que é Moledo?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Moledo é revestimento cimentício pré-moldado em 17 medidas diferentes
          que vêm misturadas no mesmo palete pra serem assentadas de forma
          aleatória na parede. Cada peça é fabricada em concreto vibrado · a
          superfície tem relevo de pedra natural rachada, semelhante ao Rock Face,
          mas o jogo de medidas evita qualquer padrão regular visível.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          O resultado é uma fachada com textura orgânica que parece pedra natural
          assentada por pedreiro experiente · sem o custo, o peso e a complexidade
          logística da pedra natural real. A modularidade desaparece visualmente ·
          o que se vê é uma parede de pedras irregulares aplicadas livre.
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
          Variantes do Moledo
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Moledo tem três cores fabricadas em pigmento sólido · Areia (bege claro
          com tom dourado suave), Marfim (creme neutro próximo ao branco quente) e
          Natural (cinza concreto cru). As três variantes funcionam em fachada
          externa e muro · a escolha vai pelo diálogo com o restante do projeto.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Areia é a variante mais quente · combina com madeira tratada, esquadrias
          em tom natural, telhas cerâmicas tradicionais. Marfim é a mais luminosa
          · expande fachadas pequenas, dialoga bem com pedras claras (Madeira,
          Quartzo Branco) e funciona em projeto contemporâneo. Natural é a opção
          neutra · combina com tudo e dá pegada urbana ao imóvel. Efeito Cortein
          (também chamado Oxi) é fabricado sob consulta nas três cores · prazo
          conforme volume.
        </p>

        {/* GRADE 3 VARIANTES */}
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
          Onde aplicar Moledo?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Moledo entrega seu melhor visual em fachadas inteiras tratadas como pano
          único · um único lance contínuo de revestimento sem interrupção forte na
          composição. Pela aleatoriedade do mix de medidas, fachadas muito
          pequenas perdem a riqueza visual · funciona melhor a partir de 12 m²
          contínuos.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Em muro de divisa, Moledo cria efeito de muro de pedra rústico que
          valoriza o terreno sem precisar de muro de pedra real. Em painéis
          pontuais (parede da garagem, painel da entrada), funciona quando o
          painel é alto o suficiente pra mostrar a aleatoriedade do mix · em painel
          baixo, a variação fica truncada.
        </p>

        <h2 id="comparativo" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Moledo comparado com Rock Face
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Moledo e Rock Face cumprem a mesma função visual de simular pedra
          natural na fachada · diferem na previsibilidade do padrão. Rock Face
          entrega ritmo modular regular, Moledo entrega aleatoriedade controlada
          com 17 medidas.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          A escolha entre os dois depende da intenção do projeto · Rock Face
          dialoga com fachadas modulares e brises ritmados, Moledo dialoga com
          paisagismo orgânico e madeira natural. Em obras que misturam os dois
          (Rock Face na fachada frontal, Moledo no muro de fundo), o contraste
          sutil funciona porque a textura da pedra fendida é coerente entre eles,
          varia só o tamanho da peça.
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Pra comparativo mais completo entre cimentício e pedra natural assentada
          de verdade, ver{" "}
          <Link
            href="/revestimentos-externos/natural-ou-manufaturado"
            className="text-cc-orange underline hover:no-underline"
          >
            revestimento natural ou manufaturado
          </Link>
          .
        </p>

        <h2 id="como-instalar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Como instalar Moledo?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Instalação de Moledo envolve regularização da alvenaria, argamassa
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
          A Central entrega Moledo em 16 cidades dentro do raio de 120 km a partir
          de Ivoti com caminhão próprio e descarga no local. Para orçamento, toque
          na sua cidade abaixo · cada link abre uma mensagem WhatsApp pronta sobre
          o modelo Moledo.
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
                  `Quero falar sobre Moledo cimentício com entrega em ${cidade}.`,
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
            Perguntas frequentes sobre Moledo
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
            Pronto pra orçar seu Moledo?
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            17 medidas irregulares · 3 cores naturais · Cortein (também chamado
            Oxi) sob consulta · instaladores parceiros indicados · entrega no raio
            de 120 km. Toque abaixo e fale pelo WhatsApp com a Central.
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
              href="/revestimentos-externos/rock-face"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Rock Face
            </Link>
            <Link
              href="/produtos/pergolado-de-concreto"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Pergolados
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
