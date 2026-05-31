import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://centraldoconcretoentrega.com.br";
const CANONICAL_URL = `${SITE_URL}/cobogos/pintado-ou-natural`;
const WHATSAPP_HERO_URL = `https://wa.me/5551996691757?text=${encodeURIComponent("Olá, vi a página de cobogó pintado ou natural e quero ver as cores do catálogo Suvinil.")}`;
const WHATSAPP_NATURAL_URL = `https://wa.me/5551996691757?text=${encodeURIComponent("Olá, quero orçar cobogó natural sem pintura.")}`;
const WHATSAPP_PINTADO_URL = `https://wa.me/5551996691757?text=${encodeURIComponent("Olá, quero orçar cobogó com pintura aplicada em fábrica.")}`;
const WHATSAPP_FINAL_URL = `https://wa.me/5551996691757?text=${encodeURIComponent("Olá, quero falar com o André sobre cobogó pintado ou natural.")}`;
const PAGE_TITLE =
  "Cobogó pintado ou natural · qual acabamento escolher · Central do Concreto";
const PAGE_DESCRIPTION =
  "Cobogó pintado ou natural · catálogo Suvinil aberto na pintura em fábrica nas 6 faces ou concreto natural cru · 14 modelos · entrega em 16 cidades RS no raio de 120 km.";
const OG_IMAGE = `${SITE_URL}/cluster-cobogos/cobogo-citadino-com-base-floreira-concreto-ivoti.webp`;

const faqs = [
  {
    q: "Quais cores estão disponíveis pra cobogó pintado?",
    a: "Qualquer cor do catálogo Suvinil. O cliente escolhe a cor pelo nome ou código Suvinil no momento do orçamento. A Central confirma compatibilidade da cor com aplicação em concreto pré-moldado e aplica nas 6 faces da peça em fábrica.",
  },
  {
    q: "Quanto custa a pintura em fábrica?",
    a: "Custo extra com orçamento individual por pedido. Depende do modelo escolhido, da quantidade de peças e da cor selecionada. Mandar modelo, cor e medidas pelo WhatsApp pra receber orçamento agilizado direto do André.",
  },
  {
    q: "Quanto tempo a mais leva pra fabricar cobogó pintado?",
    a: "5 a 7 dias úteis adicionais ao prazo padrão de produção do cobogó natural. O tempo extra cobre cura da peça antes da pintura e aplicação nas 6 faces.",
  },
  {
    q: "A garantia da pintura é a mesma da peça?",
    a: "Não. A peça tem garantia padrão da Central (resistência estrutural). A pintura tem garantia separada de 12 meses · cobre destacamento prematuro e defeito de aplicação · não cobre desbotamento natural por exposição UV.",
  },
  {
    q: "Posso misturar cobogós pintados e naturais na mesma obra?",
    a: "Sim. Combinação válida arquitetonicamente quando há intenção estética (faixa pintada de destaque numa parede natural, por exemplo). Pedir as duas referências no mesmo orçamento e a Central entrega juntos.",
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

const galeria = [
  {
    src: "/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-02.webp",
    alt: "Cobogó modelo Ao Quadrado em concreto pré-moldado · muro alto construído com módulos Ao Quadrado em série pintados em tom grafite escuro, padrão de pequenos quadrados vazados em malha densa, ambiente residencial externo com jardim de folhagens · Central do Concreto Ivoti RS",
    legenda: "Grafite escuro · modelo Ao Quadrado",
  },
  {
    src: "/cluster-cobogos/cobogo-poente-concreto-ivoti.webp",
    alt: "Cobogó modelo Poente em concreto pré-moldado · geometria em L espelhado formando espiral interna, acabamento laranja sobre base cinza · Central do Concreto Ivoti RS",
    legenda: "Laranja sobre cinza · modelo Poente",
  },
  {
    src: "/cluster-cobogos/cobogo-trancado-concreto-ivoti.webp",
    alt: "Cobogó modelo Trançado em concreto pré-moldado · barras horizontais e verticais entrelaçadas formando padrão tipo grelha, vazados internos retangulares, acabamento branco · Central do Concreto Ivoti RS",
    legenda: "Branco · modelo Trançado",
  },
  {
    src: "/cluster-cobogos/cobogo-horizon-dupla-face-concreto-ivoti.webp",
    alt: "Cobogó modelo Horizon Dupla Face em concreto pré-moldado · rasgo horizontal único na parte superior, miolo recuado, face dupla, fundo de grama sintética · Central do Concreto Ivoti RS",
    legenda: "Concreto natural · modelo Horizon Dupla Face",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${CANONICAL_URL}#localbusiness`,
      name: "Central do Concreto",
      url: SITE_URL,
      telephone: "+555199669-1757",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Bom Jardim 149 · Loja 02",
        addressLocality: "Ivoti",
        addressRegion: "RS",
        postalCode: "93900-000",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -29.62038,
        longitude: -51.16389,
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: -29.62038,
          longitude: -51.16389,
        },
        geoRadius: "120000",
      },
    },
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
          name: "Pintado ou natural",
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
        height: 1600,
        alt: "Cobogó modelo Citadino com Base para Floreira em concreto pré-moldado · triângulo vazado inscrito em quadrado, base inferior fechada para receber substrato e plantas, acabamento concreto natural sobre fundo de folhagem verde · Central do Concreto Ivoti RS",
      },
    ],
  },
};

export default function CobogoPintadoOuNaturalPage() {
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
          <li className="text-cc-gray-700 font-medium" aria-current="page">
            Pintado ou natural
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
        <Image
          src="/cluster-cobogos/cobogo-citadino-com-base-floreira-concreto-ivoti.webp"
          alt="Cobogó modelo Citadino com Base para Floreira em concreto pré-moldado · triângulo vazado inscrito em quadrado, base inferior fechada para receber substrato e plantas, acabamento concreto natural sobre fundo de folhagem verde · Central do Concreto Ivoti RS"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative container mx-auto px-4 py-16 max-w-3xl text-white">
          <p className="text-cc-orange font-semibold mb-3 uppercase tracking-wide text-sm">
            Cobogós · Acabamento
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Cobogó pintado ou natural · qual acabamento escolher pra muro e fachada
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-white/95">
            Cobogó pintado ou natural · a escolha define manutenção, custo, prazo de obra e durabilidade da face exposta. A Central oferece os dois acabamentos em 14 modelos · concreto natural cru ou pintura acrílica Suvinil aplicada em fábrica nas 6 faces da peça, na cor que o cliente escolher do catálogo aberto Suvinil.
          </p>
          <p className="text-base md:text-lg mb-8 leading-relaxed text-white/90">
            Catálogo Suvinil aberto · pintura acrílica aplicada em fábrica nas 6 faces da peça ou concreto natural cru, sem intermediário entre fábrica e canteiro.
          </p>
          <a
            href={WHATSAPP_HERO_URL}
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Ver cores e modelos pelo WhatsApp
          </a>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Natural ou pintado
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Catálogo Suvinil aberto
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Pintura nas 6 faces
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow>Cobogós · Acabamento</Eyebrow>

        {/* H2 1 */}
        <h2
          id="natural-vs-pintado"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Cobogó natural vs pintado em fábrica · diferença essencial em 1 parágrafo
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A diferença essencial é onde a tinta é aplicada · o cobogó natural sai da fábrica com a textura crua do concreto pré-moldado, e o cobogó pintado recebe tinta acrílica Suvinil nas 6 faces antes de sair, em qualquer cor do catálogo aberto. Essa diferença afeta estética (textura visível vs cor uniforme), manutenção (lavagem com escova vs retoque pontual), prazo (padrão vs 5 a 7 dias úteis adicionais), custo (incluso no preço da peça vs orçamento individual com custo extra) e durabilidade da face exposta (concreto envelhece vs tinta protege por 5 a 7 anos). Saber qual acabamento faz sentido pra obra começa por definir intenção estética e plano de manutenção.
        </p>

        {/* H2 2 */}
        <h2
          id="quando-natural"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Cobogó natural · quando faz sentido escolher
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O concreto natural faz sentido quando a estética desejada é industrial, brutalista ou minimalista, quando o prazo é apertado e quando o cliente quer liberdade pra pintar depois com cor de obra. É a escolha padrão pro cobogó · sai da fábrica no prazo regular sem custo adicional de pintura. A textura crua do concreto pré-moldado tem apelo arquitetônico próprio · projetos contemporâneos com vocabulário industrial usam a peça natural como elemento ativo. A manutenção é simples · lavagem com escova e água, sem retoque. A peça escurece levemente com o tempo (poeira urbana, umidade), o que muitas obras consideram característica e não defeito.
        </p>
        <Image
          src="/cluster-cobogos/cobogo-urbano-concreto-ivoti-01.webp"
          alt="Cobogó modelo Urbano em concreto pré-moldado · muro de canto duplo com módulos quadrados subdivididos por diagonal, vazado triangular, ambiente externo com vegetação · Central do Concreto Ivoti RS"
          width={1200}
          height={1200}
          className="w-full h-auto rounded-lg mb-6"
        />

        <div className="mt-10 text-center">
          <p className="text-base md:text-lg text-cc-gray-700 mb-6 leading-relaxed">
            Concreto natural · prazo padrão, custo menor, liberdade pra pintar depois com cor de obra.
          </p>
          <a
            href={WHATSAPP_NATURAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Pedir cobogó natural
          </a>
        </div>

        {/* H2 3 */}
        <h2
          id="quando-pintado"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Cobogó pintado em fábrica · quando faz sentido escolher
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O cobogó pintado em fábrica faz sentido quando a obra precisa de acabamento pronto, cor uniforme em todas as faces (impossível alcançar com pintura de obra) e maior proteção contra envelhecimento da face exposta. A Central aplica tinta acrílica Suvinil nas 6 faces da peça antes de enviar · resultado uniforme em todas as superfícies, sem o vinco entre faces que sempre aparece quando a pintura é feita na obra (a tinta de rolo só alcança a face frontal · cantos e laterais ficam expostos). A cor é livre · qualquer cor do catálogo Suvinil. O acabamento pintado em fábrica tem durabilidade típica de 5 a 7 anos sem necessidade de retoque, contra 3 a 5 anos da pintura aplicada na obra.
        </p>
        <Image
          src="/cluster-cobogos/cobogo-fenestra-concreto-ivoti-02.webp"
          alt="Cobogó modelo Fenestra em concreto pré-moldado · muro construído com módulos Fenestra em série pintados em tom bordô vermelho, padrão de arcos duplos formando textura visual orgânica, ambiente externo com vegetação · Central do Concreto Ivoti RS"
          width={1200}
          height={1200}
          className="w-full h-auto rounded-lg mb-6"
        />

        <div className="mt-10 text-center">
          <p className="text-base md:text-lg text-cc-gray-700 mb-6 leading-relaxed">
            Acabamento pronto · cobogó pintado em fábrica nas 6 faces na cor que você escolher do catálogo Suvinil.
          </p>
          <a
            href={WHATSAPP_PINTADO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Pedir cobogó pintado em fábrica
          </a>
        </div>

        {/* H2 4 */}
        <h2
          id="catalogo-suvinil"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Como funciona a escolha de cor pelo catálogo Suvinil
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A escolha de cor é aberta · o cliente seleciona qualquer cor do catálogo Suvinil e a Central aplica em fábrica nas 6 faces da peça com tinta acrílica. Sem paleta restrita · o catálogo Suvinil cobre o espectro completo de tons entre brancos, cinzas, terrosos, vibrantes e neutros. O processo · o cliente define a cor no momento do orçamento (pelo nome comercial Suvinil ou código), a Central confirma compatibilidade com aplicação em concreto pré-moldado, aplica nas 6 faces após cura da peça e libera pra entrega. Custo da pintura entra como orçamento individual por pedido · prazo adicional de 5 a 7 dias úteis ao prazo padrão de produção · garantia de 12 meses da pintura (separada da garantia da peça). Galeria abaixo mostra exemplos de obras já entregues em cores diferentes.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {galeria.map((g) => (
            <figure key={g.src}>
              <Image
                src={g.src}
                alt={g.alt}
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <figcaption className="text-sm text-cc-gray-600 mt-2 leading-snug">
                {g.legenda}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* H2 5 */}
        <h2
          id="pintar-depois"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Posso pintar depois · tinta de obra vs tinta de fábrica
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Sim, o cliente pode comprar a peça natural e pintar depois · a diferença está na cobertura (uma face vs 6 faces) e na durabilidade (3 a 5 anos vs 5 a 7 anos). Pra pintar cobogó natural na obra, usar tinta acrílica fosca ou acetinada de fachada · não tinta látex comum. Limpar a peça antes (escova, água, deixar secar 24 horas). A pintura de obra alcança só a face frontal voltada pra rolo · cantos e laterais expostas ao tempo seguem com concreto cru, o que produz vinco visível entre faces ao longo dos anos. A pintura de fábrica nas 6 faces evita esse vinco · cobre tudo de uma vez antes da peça sair. Vale pesar custo (pintura de obra é mais barata) contra resultado estético (pintura de fábrica é uniforme) ao decidir.
        </p>

        {/* H2 6 */}
        <h2
          id="manutencao-durabilidade"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Manutenção e durabilidade dos dois acabamentos
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Cobogó natural exige só lavagem periódica com escova e água; cobogó pintado em fábrica precisa de retoque a cada 5 a 7 anos típicos. Manutenção do natural · lavagem 1 a 2 vezes por ano com escova de cerdas duras e jato de água, eventualmente com sabão neutro pra remover sujeira urbana. Não retoca · o concreto escurece naturalmente e isso faz parte da estética. Manutenção do pintado em fábrica · lavagem leve a cada 6 meses pra preservar a cor; retoque com tinta Suvinil da mesma referência a cada 5 a 7 anos (cor desbota com sol). Manutenção da pintura de obra · retoque a cada 3 a 5 anos porque a tinta não alcança cantos e laterais, então o desgaste é mais visível. Garantia da pintura em fábrica · 12 meses pela Central · cobre destacamento prematuro e defeito de aplicação · não cobre desbotamento natural por exposição UV ao longo do tempo.
        </p>
        <Image
          src="/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp"
          alt="Cobogó modelo Eclipse em concreto pré-moldado · muro alto construído com módulos Eclipse em série, padrão de círculos entrelaçados formando textura visual contínua, ambiente residencial externo com calçada de petit pavé · Central do Concreto Ivoti RS"
          width={1200}
          height={1200}
          className="w-full h-auto rounded-lg mb-6"
        />

        {/* INTERNAL LINKS */}
        <div className="mt-12 pt-8 border-t border-cc-gray-200">
          <p className="font-semibold text-cc-gray-700 mb-3">
            Continue no cluster cobogós
          </p>
          <ul className="space-y-2 text-cc-gray-700 leading-relaxed">
            <li>
              <Link
                href="/cobogos"
                className="text-cc-orange underline hover:no-underline"
              >
                Cobogós
              </Link>{" "}
              · linha completa e modelos.
            </li>
            <li>
              <Link
                href="/cobogos/fachada"
                className="text-cc-orange underline hover:no-underline"
              >
                Cobogó na fachada
              </Link>{" "}
              · fachada exposta a sol e chuva pede pintura de fábrica.
            </li>
            <li>
              <Link
                href="/cobogos/muro"
                className="text-cc-orange underline hover:no-underline"
              >
                Cobogó no muro
              </Link>{" "}
              · muros internos e industriais aceitam bem o natural.
            </li>
            <li>
              <Link
                href="/cobogos/instalacao"
                className="text-cc-orange underline hover:no-underline"
              >
                Instalação de cobogó
              </Link>{" "}
              · pintado e natural seguem o mesmo método.
            </li>
            <li>
              <Link
                href="/cobogos/entrega"
                className="text-cc-orange underline hover:no-underline"
              >
                Entrega de cobogó
              </Link>{" "}
              · cobre os dois acabamentos no raio de 120 km.
            </li>
          </ul>
        </div>

        {/* CTA FINAL */}
        <div className="mt-10 text-center">
          <p className="text-base md:text-lg text-cc-gray-700 mb-6 leading-relaxed">
            Mande modelo, cor se for o caso e medidas · resposta humana e agilizada direto do André no mesmo dia útil, sem intermediário e sem formulário.
          </p>
          <a
            href={WHATSAPP_FINAL_URL}
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Falar com o André
          </a>
        </div>
      </article>

      {/* CITY PILLS */}
      <section className="bg-cc-black py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-3xl font-bold mb-3 text-center">
            Cobogó pintado ou natural · 16 cidades no raio de 120 km
          </p>
          <p className="text-white/80 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            Raio de 120 km a partir de Ivoti-RS · os dois acabamentos entregues com caminhão próprio, descarga ao lado do canteiro de obra.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cidades.map((c) => (
              <a
                key={c}
                href={`https://wa.me/5551996691757?text=${encodeURIComponent(
                  `Olá, quero saber sobre cobogó pintado ou natural com entrega em ${c}.`
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
          Perguntas frequentes sobre cobogó pintado ou natural
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
    </>
  );
}
