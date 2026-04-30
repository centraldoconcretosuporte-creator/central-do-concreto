import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/Eyebrow";
import { CIDADES_LITORAL, getCidade } from "@/lib/cidades-litoral";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";
const WHATSAPP_URL =
  "https://wa.me/5551996691757?text=Oi%20Andr%C3%A9%2C%20quero%20or%C3%A7amento%20de%20pergolado%20de%20concreto.";
const WHATSAPP_COBERTURA_URL =
  "https://wa.me/5551996691757?text=Oi%2C%20quero%20consultar%20entrega%20de%20pergolado%20pra%20minha%20cidade";

export async function generateStaticParams() {
  return CIDADES_LITORAL.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade } = await params;
  const c = getCidade(cidade);
  if (!c) return {};
  const url = `${SITE_URL}/atendimento/${c.slug}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: `Pergolado de concreto em ${c.nome}-RS · Central do Concreto`,
    description: `Pergolado pré-moldado em ${c.nome}-RS · direto da fábrica em Ivoti com equipe própria de instalação. ${c.distanciaKm} · ${c.tempoEstimado}.`,
    openGraph: {
      title: `Pergolado de concreto em ${c.nome}-RS`,
      description: `Equipe própria · estrutura reforçada · iluminação integrada. Atendemos ${c.nome} e cidades vizinhas.`,
      type: "website",
      locale: "pt_BR",
      url,
      siteName: "Central do Concreto",
      images: [
        { url: "/og/pergolado-litoral.jpg", width: 1200, height: 630, alt: `Pergolado em ${c.nome}` },
      ],
    },
    alternates: { canonical: url },
  };
}

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
    href: "https://telhasivoti.com.br",
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
];

export default async function CidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade } = await params;
  const c = getCidade(cidade);
  if (!c) notFound();

  const subtitulo =
    c.descricao ??
    `Direto da fábrica em Ivoti, com estrutura reforçada, equipe própria de instalação e pontos de iluminação integrados. Atendemos ${c.nome} e cidades vizinhas.`;

  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[560px] md:min-h-[620px] flex items-center justify-center overflow-hidden">
        <Image
          src="/produtos/pergolado/hero/pergolado-litoral-hero.webp"
          alt={`Pergolado de concreto em ${c.nome}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-green/70" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center justify-center gap-2 text-sm text-white/90 flex-wrap"
          >
            <Link href="/" className="hover:text-white">
              Início
            </Link>
            <span aria-hidden="true">›</span>
            <Link href="/entregas" className="hover:text-white">
              Atendimento
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white font-medium">{c.nome}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Pergolado de concreto em {c.nome}-RS
          </h1>

          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitulo}
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
            <svg
              className="w-4 h-4 text-cc-orange flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Saímos de Ivoti-RS · Atendemos {c.nome}
          </p>
        </div>
      </section>

      {/* POR QUÊ */}
      <section className="py-12 sm:py-16 bg-cc-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-cc-green mb-10 text-center">
            Por que pergolado de concreto da Central
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {diferenciadores.map((d) => (
              <div key={d.title} className="bg-white border border-cc-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-cc-green mb-2">{d.title}</h3>
                <p className="text-base text-cc-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-cc-green mb-10 text-center">
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
                  <h3 className="text-lg font-medium text-cc-green mb-2">{t.title}</h3>
                  <p className="text-sm text-cc-gray-600 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO CHEGAMOS */}
      <section className="py-16 md:py-24 bg-cc-cream">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow className="mb-3">Cobertura {c.nome}</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-medium text-cc-green mb-8">
            Como nós chegamos até {c.nome}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-xl p-6 border border-cc-gray-200">
              <p className="text-3xl md:text-4xl font-medium text-cc-green mb-1">{c.distanciaKm}</p>
              <p className="text-sm text-cc-gray-600">de Ivoti até {c.nome}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-cc-gray-200">
              <p className="text-3xl md:text-4xl font-medium text-cc-green mb-1">
                {c.tempoEstimado}
              </p>
              <p className="text-sm text-cc-gray-600">de viagem por estrada</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-cc-gray-200">
              <p className="text-3xl md:text-4xl font-medium text-cc-green mb-1">A combinar</p>
              <p className="text-sm text-cc-gray-600">prazo conforme projeto</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={WHATSAPP_COBERTURA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white rounded-full font-medium transition-colors shadow-lg"
            >
              Consultar entrega em {c.nome}
            </a>
          </div>
        </div>
      </section>

      {/* GRUPO */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-cc-green mb-3 text-center">
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
                <h3 className="text-lg font-bold text-cc-green mb-2">{g.title} →</h3>
                <p className="text-base text-cc-gray-600 leading-relaxed">{g.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-cc-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-cc-green mb-10 text-center">
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
                      <p className="text-base text-cc-gray-600 leading-relaxed mt-3">{p.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cc-orange py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Pronto pra começar seu pergolado em {c.nome}?
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-95">Atendimento direto pelo WhatsApp.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-cc-orange hover:bg-cc-gray-100 px-7 py-3.5 rounded-md text-base font-bold transition-colors mb-6"
          >
            Falar no WhatsApp · (51) 99669-1757
          </a>
          <p className="text-sm opacity-90">
            Av. Bom Jardim, 149 · Loja 04 · Vista Alegre · Ivoti-RS
          </p>
        </div>
      </section>
    </>
  );
}
