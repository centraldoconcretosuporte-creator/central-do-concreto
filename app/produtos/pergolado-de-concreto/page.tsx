import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";
const PAGE_URL = `${SITE_URL}/produtos/pergolado-de-concreto`;
const OG_IMAGE = "/og/pergolado-litoral.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pergolado de concreto pré-moldado pro Litoral Norte | Central do Concreto",
  description:
    "Pergolado de concreto pré-moldado direto da fábrica em Ivoti pro Litoral Norte e Médio. Estrutura reforçada, equipe própria de instalação e iluminação integrada.",
  openGraph: {
    title: "Pergolado de concreto pré-moldado pro Litoral Norte",
    description:
      "Direto da fábrica em Ivoti, com instalação por equipe própria. Atendemos Xangri-Lá, Capão da Canoa, Torres e todo o Litoral Norte e Médio.",
    type: "website",
    locale: "pt_BR",
    url: PAGE_URL,
    siteName: "Central do Concreto",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pergolado de concreto pré-moldado da Central do Concreto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pergolado de concreto pré-moldado pro Litoral Norte",
    description: "Direto da fábrica em Ivoti, com instalação por equipe própria.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const WHATSAPP_URL =
  "https://wa.me/5551996691757?text=Oi%20Andr%C3%A9%2C%20quero%20or%C3%A7amento%20de%20pergolado%20de%20concreto%20pra%20Litoral%20Norte.";

const WHATSAPP_COBERTURA_URL =
  "https://wa.me/5551996691757?text=Oi%2C%20quero%20consultar%20entrega%20de%20pergolado%20pra%20minha%20cidade";

const diferenciadores = [
  {
    title: "Estrutura reforçada",
    desc: "Concreto armado calculado pra cargas residenciais e comerciais. Resiste a vento de litoral, salinidade e peso de cobertura.",
  },
  {
    title: "Equipe técnica própria",
    desc: "Nossa equipe vai até a obra, monta a estrutura e entrega pronta. Sem terceirizar instalação.",
  },
  {
    title: "Iluminação e tomadas integradas",
    desc: "Espera de iluminação no teto e pontos de tomada externa pra área gourmet. Tudo embutido na estrutura.",
  },
];

const tipos = [
  {
    eyebrow: "Solarium",
    title: "Pergolado solarium",
    desc: "Pergolado pra área de piscina e banho de sol. Mais comum em casa de praia e condomínio fechado.",
    image: "/produtos/pergolado/tipos/solarium.webp",
    alt: "Pergolado de concreto solarium em casa de praia com piscina",
  },
  {
    eyebrow: "Área gourmet",
    title: "Pergolado área gourmet",
    desc: "Pra churrasqueira, mesa e espaço de receber. Combina com piso atérmico ao redor.",
    image: "/produtos/pergolado/tipos/gourmet.webp",
    alt: "Pergolado de concreto cobrindo área gourmet com mesa e cadeiras",
  },
  {
    eyebrow: "Hotelaria e pousada",
    title: "Pergolado pra pousada",
    desc: "Decks de boas-vindas, áreas de descanso, varandas. Foco em estrutura premium pra rede hoteleira.",
    image: "/produtos/pergolado/tipos/hotelaria.webp",
    alt: "Pergolado de concreto em pousada com jardim",
  },
];

const grupo = [
  {
    title: "Telhas Ivoti",
    desc: "Cobertura sanduíche metálica pra fechar o pergolado contra sol e chuva.",
    href: "#",
  },
  {
    title: "Bom Jardim Ivoti",
    desc: "Madeiras, deck, pedras naturais e paisagismo pra completar a área externa.",
    href: "https://bomjardimivoti.com.br",
  },
];

const faqs = [
  {
    grupo: "Técnico",
    perguntas: [
      {
        q: "Qual a durabilidade do pergolado de concreto?",
        a: "Estruturas em concreto armado, com manutenção mínima, têm vida útil acima de 50 anos. Não apodrece, não enferruja, não cupiniza.",
      },
      {
        q: "Aguenta maresia do Litoral Norte?",
        a: "Sim. Concreto armado tem desempenho superior a madeira e ferro em ambiente salino. É a escolha técnica pra casa de praia e empreendimento litorâneo.",
      },
    ],
  },
  {
    grupo: "Processo",
    perguntas: [
      {
        q: "Qual o prazo da instalação?",
        a: "Após confirmação do projeto, fabricamos em 7 a 14 dias úteis e instalamos em 1 a 2 dias na obra. Prazo total varia conforme tamanho e logística.",
      },
      {
        q: "Como peço orçamento?",
        a: "Manda pelo WhatsApp (51) 99669-1757 a medida estimada e a cidade. Retornamos com proposta no mesmo dia.",
      },
    ],
  },
  {
    grupo: "Extras",
    perguntas: [
      {
        q: "Vocês fazem cobertura junto?",
        a: "A estrutura já vem pronta pra receber cobertura. Pra fechamento, indicamos a Telhas Ivoti, do mesmo grupo.",
      },
      {
        q: "A iluminação já vem instalada?",
        a: "Os pontos elétricos vêm preparados na estrutura — espera de luz no teto e tomadas externas. A finalização da fiação e dos pontos de luz é feita pelo eletricista da obra.",
      },
    ],
  },
];

const cidades = [
  "Xangri-Lá",
  "Capão da Canoa",
  "Atlântida",
  "Capão Novo",
  "Pinhal",
  "Tramandaí",
  "Imbé",
  "Cidreira",
  "Torres",
  "Arroio do Sal",
];

export default function PergoladoDeConcretoPage() {
  return (
    <>
      {/* 01 HERO · Full-bleed com overlay verde escuro */}
      <section
        className="relative w-full min-h-[560px] md:min-h-[620px] flex items-center justify-center overflow-hidden"
        aria-labelledby="pergolado-title"
      >
        <Image
          src="/produtos/pergolado/hero/pergolado-litoral-hero.webp"
          alt="Pergolado de concreto em residência do Litoral Norte"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-green/70" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-center gap-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white">Início</Link>
            <span aria-hidden="true">›</span>
            <Link href="/produtos" className="hover:text-white">Produtos</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white font-medium">Pergolado de Concreto</span>
          </nav>

          <h1
            id="pergolado-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Pergolado de concreto pra Litoral Norte
          </h1>

          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Direto da fábrica em Ivoti, com estrutura reforçada, equipe própria de instalação e pontos de iluminação integrados. Atendemos casas, condomínios, pousadas e hotéis de Xangri-Lá a Torres.
          </p>

          <div className="flex justify-center mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir orçamento no WhatsApp
            </a>
          </div>

          <p className="flex items-center justify-center gap-2 text-sm text-white/85">
            <svg className="w-4 h-4 text-cc-orange flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Av. Bom Jardim, 149 · Loja 04 · Ivoti-RS · Atendemos Litoral Norte e Médio
          </p>
        </div>
      </section>

      {/* 03 POR QUÊ */}
      <section
        className="py-12 sm:py-16 bg-cc-cream"
        aria-labelledby="diferenciadores-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="diferenciadores-title"
            className="text-2xl sm:text-3xl font-bold text-cc-green mb-10 text-center"
          >
            Por que pergolado de concreto da Central
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {diferenciadores.map((d) => (
              <div
                key={d.title}
                className="bg-white border border-cc-gray-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-cc-green mb-2">
                  {d.title}
                </h3>
                <p className="text-base text-cc-gray-600 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 TIPOS */}
      <section
        className="py-12 sm:py-16 bg-white"
        aria-labelledby="tipos-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="tipos-title"
            className="text-2xl sm:text-3xl font-bold text-cc-green mb-10 text-center"
          >
            Tipos de pergolado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {tipos.map((t) => (
              <div
                key={t.title}
                className="group bg-white rounded-xl overflow-hidden border border-cc-gray-200 hover:border-cc-green transition-colors"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium tracking-widest text-cc-coral uppercase mb-2">
                    {t.eyebrow}
                  </p>
                  <h3 className="text-lg font-medium text-cc-green mb-2">
                    {t.title}
                  </h3>
                  <p className="text-sm text-cc-gray-600 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 COMBINE · Mosaico assimétrico */}
      <section
        className="py-12 sm:py-16 bg-cc-cream"
        aria-labelledby="combine-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="combine-title"
            className="text-2xl sm:text-3xl font-bold text-cc-green mb-3 text-center"
          >
            Combine seu pergolado
          </h2>
          <p className="text-base text-cc-gray-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Os produtos da Central do Concreto que mais entregamos junto com pergolado pra obra externa ficar completa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:min-h-[480px]">
            {/* Card grande · Piso Atérmico */}
            <a
              href="/produtos/piso-atermico"
              className="md:col-span-2 md:row-span-3 group relative rounded-xl overflow-hidden border border-cc-gray-200 hover:border-cc-green transition-colors min-h-[300px]"
            >
              <Image
                src="/produtos/combine/piso-atermico.webp"
                alt="Piso atérmico antiderrapante 49x49 ao redor de piscina"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                  Piso Atérmico →
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-md">
                  Placas antiderrapantes 49x49 pra área da piscina. Combina direto com pergolado solarium.
                </p>
              </div>
            </a>

            {/* Card pequeno 1 · Cobogó */}
            <a
              href="/produtos/cobogos"
              className="md:col-span-1 md:row-span-1 group relative rounded-xl overflow-hidden border border-cc-gray-200 hover:border-cc-green transition-colors min-h-[140px]"
            >
              <Image
                src="/produtos/combine/cobogo.webp"
                alt="Cobogó decorativo de concreto pré-moldado"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-medium text-white mb-1">Cobogó →</h3>
                <p className="text-xs text-white/85 leading-snug">
                  Painel vazado decorativo que fecha um lado do pergolado.
                </p>
              </div>
            </a>

            {/* Card pequeno 2 · Muro pré-moldado */}
            <a
              href="/produtos/muros-e-gradis"
              className="md:col-span-1 md:row-span-1 group relative rounded-xl overflow-hidden border border-cc-gray-200 hover:border-cc-green transition-colors min-h-[140px]"
            >
              <Image
                src="/produtos/combine/muro.webp"
                alt="Muro pré-moldado de concreto da Central do Concreto"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-medium text-white mb-1">Muro pré-moldado →</h3>
                <p className="text-xs text-white/85 leading-snug">
                  Fechamento da área externa em concreto pré-moldado.
                </p>
              </div>
            </a>

            {/* Card pequeno 3 · Revestimentos */}
            {/* TODO: avaliar foto definitiva de revestimento (categoria não está totalmente fechada no banco CC) */}
            <a
              href="/produtos/revestimentos"
              className="md:col-span-1 md:row-span-1 group relative rounded-xl overflow-hidden border border-cc-gray-200 hover:border-cc-green transition-colors min-h-[140px]"
            >
              <Image
                src="/produtos/combine/revestimentos.webp"
                alt="Revestimento decorativo Rock Face para fachada externa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-medium text-white mb-1">Revestimentos →</h3>
                <p className="text-xs text-white/85 leading-snug">
                  Acabamento estético pras paredes da área externa.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 06 GRUPO */}
      <section
        className="py-12 sm:py-16 bg-white"
        aria-labelledby="grupo-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="grupo-title"
            className="text-2xl sm:text-3xl font-bold text-cc-green mb-3 text-center"
          >
            Pacote completo · Grupo Ivoti
          </h2>
          <p className="text-base text-cc-gray-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Três empresas no mesmo endereço pra entregar a obra externa completa.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {grupo.map((g) => (
              <a
                key={g.title}
                href={g.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cc-cream border border-cc-gray-200 rounded-lg p-6 hover:border-cc-green transition-colors"
              >
                <h3 className="text-lg font-bold text-cc-green mb-2">
                  {g.title} →
                </h3>
                <p className="text-base text-cc-gray-600 leading-relaxed">
                  {g.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 07 FAQ */}
      <section
        className="py-12 sm:py-16 bg-cc-cream"
        aria-labelledby="faq-title"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-title"
            className="text-2xl sm:text-3xl font-bold text-cc-green mb-10 text-center"
          >
            Perguntas frequentes
          </h2>
          <div className="space-y-8">
            {faqs.map((g) => (
              <div key={g.grupo}>
                <Eyebrow className="mb-4">{g.grupo}</Eyebrow>
                <div className="space-y-3">
                  {g.perguntas.map((p) => (
                    <details
                      key={p.q}
                      className="group bg-white border border-cc-gray-200 rounded-lg px-5 py-4"
                    >
                      <summary className="text-base font-semibold text-cc-green cursor-pointer list-none flex items-start justify-between gap-4">
                        <span>{p.q}</span>
                        <span
                          className="text-cc-coral text-xl group-open:rotate-45 transition-transform shrink-0"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>
                      <p className="text-base text-cc-gray-600 leading-relaxed mt-3">
                        {p.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 COBERTURA EXCLUSIVA LITORAL NORTE */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="cobertura-title"
      >
        <div className="mx-auto max-w-6xl px-4">

          {/* 8.1 — Conhecemos a região + chips de cidades */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 items-start">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-cc-gray-200">
              <Image
                src="/produtos/pergolado/conhecemos-litoral.webp"
                alt="Vista do Litoral Norte gaúcho onde a Central do Concreto atende"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 260px"
              />
            </div>

            <div>
              <Eyebrow className="mb-3">Cobertura exclusiva</Eyebrow>
              <h2
                id="cobertura-title"
                className="text-3xl md:text-4xl font-medium text-cc-green mb-4"
              >
                Conhecemos o Litoral Norte e Médio
              </h2>
              <p className="text-base md:text-lg text-cc-gray-600 leading-relaxed mb-6">
                Saímos direto da fábrica em Ivoti com pergolado pré-moldado e equipe própria
                de instalação. Atendemos toda a faixa de praia do Rio Grande do Sul —
                residencial de veraneio, condomínio fechado, pousada, hotel e empreendimento.
              </p>
              <div className="flex flex-wrap gap-2">
                {cidades.map((cidade) => (
                  <span
                    key={cidade}
                    className="px-4 py-1.5 bg-cc-cream border border-cc-gray-200 rounded-full text-sm text-cc-gray-700"
                  >
                    {cidade}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 8.2 — Como nós chegamos até você (3 métricas) */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-medium text-cc-green mb-8">
              Como nós chegamos até você
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-cc-cream rounded-xl p-6 border border-cc-gray-200">
                <p className="text-3xl md:text-4xl font-medium text-cc-green mb-1">
                  130-210 km
                </p>
                <p className="text-sm text-cc-gray-600">
                  de Ivoti até o Litoral
                </p>
              </div>
              <div className="bg-cc-cream rounded-xl p-6 border border-cc-gray-200">
                <p className="text-3xl md:text-4xl font-medium text-cc-green mb-1">
                  1h45 - 3h
                </p>
                <p className="text-sm text-cc-gray-600">
                  de viagem por estrada
                </p>
              </div>
              <div className="bg-cc-cream rounded-xl p-6 border border-cc-gray-200">
                <p className="text-3xl md:text-4xl font-medium text-cc-green mb-1">
                  A combinar
                </p>
                <p className="text-sm text-cc-gray-600">
                  prazo conforme projeto
                </p>
              </div>
            </div>
          </div>

          {/* 8.3 — Mapa placeholder + bloco descritivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <div className="bg-cc-gray-200 rounded-xl flex items-center justify-center min-h-[240px]">
              <div className="text-center px-6">
                <svg
                  className="w-14 h-14 mx-auto mb-3 text-cc-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-sm text-cc-gray-500">Mapa interativo em breve</p>
              </div>
            </div>

            <div className="bg-cc-cream rounded-xl p-6 md:p-8 border border-cc-gray-200 flex flex-col justify-center">
              <h4 className="text-xl font-medium text-cc-green mb-3">
                Veja toda nossa área de entrega
              </h4>
              <p className="text-sm md:text-base text-cc-gray-600 mb-6 leading-relaxed">
                Cobrimos do empreendimento residencial ao hotel à beira-mar com instalação
                por equipe própria. Consulte sua cidade e te passo orçamento e prazo na hora.
              </p>
              <a
                href={WHATSAPP_COBERTURA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-5 py-2.5 bg-cc-black text-white rounded-lg text-sm font-medium hover:bg-cc-gray-800 transition-colors"
              >
                Consultar minha cidade
              </a>
            </div>
          </div>

          {/* 8.4 — Grid de cidades em pílulas */}
          <div>
            <Eyebrow className="mb-3">Cidades atendidas</Eyebrow>
            <h3 className="text-2xl md:text-3xl font-medium text-cc-green mb-3">
              Entregas no Litoral Norte e Médio
            </h3>
            <p className="text-base text-cc-gray-600 leading-relaxed max-w-3xl mb-8">
              Saímos da fábrica em Ivoti e instalamos nas 10 cidades abaixo. Consulte
              disponibilidade e prazo conforme tamanho do projeto.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
              {cidades.map((cidade) => (
                <div
                  key={cidade}
                  className="bg-cc-cream border border-cc-gray-200 rounded-lg py-4 px-3 text-center hover:border-cc-green transition-colors"
                >
                  <span className="text-sm font-medium text-cc-gray-700 uppercase tracking-wide">
                    {cidade}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href={WHATSAPP_COBERTURA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white rounded-full font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar entrega na minha cidade
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 09 CTA FINAL */}
      <section className="bg-cc-orange py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Pronto pra começar seu pergolado?
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-95">
            Atendimento direto pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-cc-orange hover:bg-cc-gray-100 px-7 py-3.5 rounded-md text-base font-bold transition-colors mb-6"
          >
            Falar no WhatsApp: (51) 99669-1757
          </a>
          <p className="text-sm opacity-90">
            Av. Bom Jardim, 149 · Loja 04 · Vista Alegre · Ivoti-RS
          </p>
        </div>
      </section>
    </>
  );
}
