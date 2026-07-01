import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/produtos/pavs";
const WHATSAPP_URL = "https://wa.me/5551996691757";

const PAGE_TITLE = "Piso Intertravado de Concreto · Paver e Bloquete · Ivoti";
const PAGE_DESCRIPTION =
  "Piso intertravado de concreto — o paver, ou bloquete — em Ivoti e região, entrega em até 120 km. Peças 6 e 8 cm com laudo de 45 MPa. Orçamento no WhatsApp.";

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

type Formato = {
  nome: string;
  desc: string;
  foto: string;
  alt: string;
};

// Placeholder: cada card reusa uma foto de paver que JÁ existe em public/.
// {/* TROCAR: fotos dedicadas por formato quando André montar o banco */}
const formatos: Formato[] = [
  {
    nome: "Retangular (Holland)",
    desc: "O clássico de calçada e garagem.",
    foto: "/produtos/pavs/hero.webp",
    alt: "Paver retangular Holland de concreto para calçada e garagem · piso intertravado · Central do Concreto Ivoti RS",
  },
  {
    nome: "Sextavado",
    desc: "O tradicional de praça e passeio.",
    foto: "/produtos/pavs.webp",
    alt: "Paver sextavado de concreto para praça e passeio · piso intertravado · Central do Concreto Ivoti RS",
  },
  {
    nome: "Paviess (Unistein) 16 faces",
    desc: "Alto travamento, uso viário e industrial.",
    foto: "/produtos/pavs/hero.webp",
    alt: "Paver paviess Unistein de 16 faces em concreto para uso viário e industrial · piso intertravado · Central do Concreto Ivoti RS",
  },
  {
    nome: "Pisograma",
    desc: "Vazado, recebe grama, permeável.",
    foto: "/produtos/pavs.webp",
    alt: "Pisograma de concreto vazado permeável que recebe grama para estacionamento e área verde · piso intertravado · Central do Concreto Ivoti RS",
  },
  {
    nome: "Drenante",
    desc: "Corpo poroso, escoa a chuva.",
    foto: "/produtos/pavs/hero.webp",
    alt: "Paver drenante de concreto poroso que escoa a chuva · piso intertravado permeável · Central do Concreto Ivoti RS",
  },
];

const faqs = [
  {
    q: "Piso intertravado precisa de cimento ou concreto para assentar?",
    a: "Não · as peças se travam sobre uma camada de areia, sem argamassa. O cimento está dentro da peça, no concreto vibroprensado, não no assentamento — por isso o piso pode ser removido e reaproveitado.",
  },
  {
    q: "Qual a diferença entre o paver de 6 cm e o de 8 cm?",
    a: "A espessura define o tráfego · 6 cm para pedestres e veículos leves, 8 cm para veículos pesados e uso intenso. Para garagem de carro de passeio, o 6 cm resolve; onde passa caminhão, use 8 cm.",
  },
  {
    q: "Qual a resistência do piso intertravado?",
    a: "As peças seguem a NBR 9781 e têm 45 MPa em laudo, acima do mínimo de 35 MPa da norma. Essa resistência garante que o pavimento aguenta a carga prevista sem fissurar.",
  },
  {
    q: "A Central entrega o paver na minha cidade?",
    a: "Sim · a entrega é com caminhão próprio, em até 120 km de Ivoti, atendendo 23 cidades da região. Você informa a cidade e a metragem, e a Central confirma o prazo.",
  },
  {
    q: "Bloquete e paver são a mesma coisa que piso intertravado?",
    a: "Sim · bloquete e paver são os nomes populares das peças que formam o piso intertravado de concreto. Muda o nome, não o produto.",
  },
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
          name: "Produtos",
          item: "https://centraldoconcretoentrega.com.br/produtos",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Piso Intertravado",
          item: "https://centraldoconcretoentrega.com.br/produtos/pavs",
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

export default function PavsPage() {
  const ctaMessage = "Olá, quero orçar piso intertravado (paver).";
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
              <Link href="/produtos" className="hover:text-cc-orange transition-colors">
                Produtos
              </Link>
            </li>
            <li aria-hidden="true" className="text-cc-gray-400">
              ›
            </li>
            <li className="text-cc-gray-900 font-medium" aria-current="page">
              Piso Intertravado
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center justify-center">
        {/* TROCAR: foto dedicada de piso intertravado assentado */}
        <Image
          src="/produtos/pavs/hero.webp"
          alt="Piso intertravado de concreto — paver assentado sobre areia — para calçada, garagem e pátio · Central do Concreto Ivoti RS"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-cc-orange mb-4">
            Pavimentação intertravada
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Piso intertravado de concreto
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            O piso intertravado de concreto — o paver, ou bloquete, que muita
            gente procura — é o pavimento que a Central do Concreto fabrica e
            entrega em até 120 km de Ivoti. São peças pré-moldadas que se travam
            entre si sobre uma camada de areia, sem argamassa, distribuindo a
            carga por todo o conjunto. Servem para calçada, garagem, pátio e área
            externa · aguentam do pedestre ao caminhão, conforme a espessura.
            Aqui você vê o que é, os formatos, as espessuras 6 e 8 cm e como pedir
            o seu.
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
            <span>✓ Espessuras 6 e 8 cm</span>
            <span>✓ Laudo de resistência</span>
            <span>✓ Caminhão próprio</span>
            <span>✓ Entrega 120 km</span>
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow className="mb-4">Guia do piso intertravado</Eyebrow>
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
                  O que é piso intertravado de concreto?
                </a>
              </li>
              <li>
                <a href="#espessura" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  6 cm ou 8 cm · qual espessura escolher?
                </a>
              </li>
              <li>
                <a href="#formatos" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Quais os formatos de paver disponíveis?
                </a>
              </li>
              <li>
                <a href="#onde-usar" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Onde usar o piso intertravado?
                </a>
              </li>
              <li>
                <a href="#por-que-central" className="hover:text-cc-orange underline-offset-4 hover:underline transition-colors">
                  Por que comprar da Central do Concreto?
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <h2 id="o-que-e" className="text-3xl md:text-4xl font-bold mt-4 mb-6 scroll-mt-24">
          O que é piso intertravado de concreto?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          Piso intertravado de concreto é um pavimento de peças pré-moldadas que
          se travam entre si sobre areia, sem argamassa no assentamento. É o mesmo
          produto que o paver e o bloquete — nomes populares da mesma peça. O
          travamento vem do atrito lateral e da contenção nas bordas: quando um
          bloco recebe carga, os vizinhos seguram, e o peso se distribui por todo
          o conjunto. Por isso o pavimento aguenta do pedestre ao caminhão, sem
          fissurar, e substitui bem o velho paralelepípedo. As peças são de
          concreto vibroprensado — feito com cimento e agregados dosados em
          fábrica — o que garante forma exata e resistência de norma. Como não há
          argamassa, o piso pode ser removido e as peças reaproveitadas, o que
          facilita qualquer manutenção sob a pavimentação.
        </p>

        <h2 id="espessura" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          6 cm ou 8 cm · qual espessura escolher?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          A espessura define o tráfego: 6 cm para pedestres e veículos leves, 8 cm
          para veículos pesados e uso intenso. O paver de 6 cm resolve calçada,
          quintal e garagem de carro de passeio · é a escolha mais comum na obra
          residencial. O de 8 cm entra onde passa caminhão, ônibus ou há carga
          constante: pátio, entrada de galpão, estacionamento e área industrial.
          Os dois seguem a NBR 9781, norma das peças de concreto para
          pavimentação, que exige resistência mínima de 35 MPa e espessura de no
          mínimo 60 mm. As peças da Central têm 45 MPa de resistência em laudo —
          acima do mínimo de 35 MPa que a norma exige. Na dúvida entre uma e
          outra, a regra é simples: se
          caminhão pisa, vá de 8 cm. A Central fornece as duas espessuras e ajuda
          a dimensionar pelo uso da sua área.
        </p>

        <h2 id="formatos" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Quais os formatos de paver disponíveis?
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          O formato muda o visual e o assentamento: retangular, sextavado, paviess
          de 16 faces, pisograma vazado e drenante. O retangular — modelo holland
          — é o clássico, assentado em espinha de peixe ou fileira, e o mais
          pedido para calçada e garagem. O sextavado é o tradicional de praça e
          passeio, de encaixe simples. O paviess, também chamado unistein, tem 16
          faces e alto travamento · indicado para pátio industrial, via e área de
          grande movimento. O pisograma é vazado: recebe grama no meio e deixa a
          água infiltrar, ótimo para estacionamento e área verde. O drenante tem
          corpo poroso e permeabilidade quase total, para quem precisa escoar
          chuva. Todos saem da mesma fábrica, em cores variadas. Veja abaixo o
          formato que combina com a sua obra e peça pelo WhatsApp.
        </p>

        {/* GRADE FORMATOS · 5 cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {formatos.map((f) => (
            <div
              key={f.nome}
              className="block border border-cc-gray-200 rounded-lg overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-cc-gray-50">
                {/* TROCAR */}
                <Image
                  src={f.foto}
                  alt={f.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1">{f.nome}</h3>
                <p className="text-sm text-cc-gray-600 leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 id="onde-usar" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Onde usar o piso intertravado?
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          O intertravado serve de calçada residencial a pátio industrial — a mesma
          peça pavimenta o quintal e aguenta o caminhão. Em casa, é calçada,
          entrada, garagem, área da churrasqueira e caminho de jardim. Em
          condomínio e comércio, vira estacionamento, acesso e passeio. Na
          indústria e no poder público, cobre pátio de manobra, via interna e
          praça. Quem procura uma calçada de cimento nova costuma acabar no
          intertravado: encaixa sem concretar tudo, fica pronto para uso no mesmo
          dia e pode ser removido para manutenção, sem quebrar. Como é claro e
          permeável, esquenta menos que o asfalto e ajuda a escoar a chuva. Em
          Ivoti e nas cidades da região, a Central entrega o volume certo direto
          na obra, com caminhão próprio. Basta dizer a metragem e o uso da área.
        </p>

        <h2 id="por-que-central" className="text-3xl md:text-4xl font-bold mt-12 mb-6 scroll-mt-24">
          Por que comprar da Central do Concreto?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          A Central fabrica as peças e entrega direto na obra em até 120 km de
          Ivoti, com caminhão próprio e laudo de resistência. Não é revenda: o
          paver sai da nossa produção em concreto vibroprensado, com controle de
          forma e de resistência. Isso significa peça no esquadro, cor uniforme e o
          laudo que a obra precisa para comprovar a norma. A entrega própria cobre
          23 cidades da região e coloca o material no ponto certo do canteiro, sem
          depender de frete de terceiros. Atendemos da calçada de uma casa ao
          pátio de uma empresa, nas espessuras 6 e 8 cm e nos formatos que sua
          obra pedir. O orçamento é rápido: você manda a metragem, o uso e a
          cidade, e a Central responde com o volume, o prazo e o valor pelo
          WhatsApp.
        </p>
      </article>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 py-16 max-w-3xl scroll-mt-24">
        <div className="text-center mb-10">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold">
            Perguntas frequentes sobre piso intertravado
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
            Peça seu orçamento de piso intertravado no WhatsApp.
          </h2>
          <p className="text-lg text-white/95 mb-8 leading-relaxed">
            Paver e bloquete de concreto nas espessuras 6 e 8 cm · laudo de
            resistência · fábrica própria em Ivoti · caminhão próprio no raio de
            120 km. Mande a metragem, o uso e a cidade que a Central responde com
            volume, prazo e valor.
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
            Falar no WhatsApp · (51) 99669-1757
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
              href="/produtos/postes-e-meio-fio"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Poste e meio-fio
            </Link>
            <Link
              href="/produtos/muros-e-gradis"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Muros e gradis
            </Link>
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
              href="/produtos"
              className="text-cc-gray-700 hover:text-cc-orange underline-offset-4 hover:underline transition-colors"
            >
              Todos os produtos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
