import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://centraldoconcretoentrega.com.br";
const CANONICAL_URL = `${SITE_URL}/cobogos/entrega`;
const WHATSAPP_HERO_URL = `https://wa.me/5551996691757?text=${encodeURIComponent("Olá, vi a página de entrega de cobogós e quero combinar a entrega para minha obra.")}`;
const WHATSAPP_PRAZO_URL = `https://wa.me/5551996691757?text=${encodeURIComponent("Olá, minha obra está com prazo curto e quero saber sobre entrega agilizada de cobogó.")}`;
const WHATSAPP_COMBINAR_URL = `https://wa.me/5551996691757?text=${encodeURIComponent("Olá, quero combinar entrega de cobogó com a instalação numa logística única.")}`;
const WHATSAPP_FINAL_URL = `https://wa.me/5551996691757?text=${encodeURIComponent("Olá, quero falar com o André sobre entrega de cobogó.")}`;
const PAGE_TITLE =
  "Entrega de cobogó · raio de 120 km com caminhão próprio · Central do Concreto Ivoti RS";
const PAGE_DESCRIPTION =
  "Entrega de cobogós com caminhão próprio da Central do Concreto · raio operacional de 120 km a partir de Ivoti RS · 16 cidades atendidas na Serra Gaúcha e Vale do Sinos · agendada, carga protegida, descarga combinada.";
const OG_IMAGE = `${SITE_URL}/cluster-cobogos/saveiro-entrega-cobogo-ivoti.webp`;

const faqs = [
  {
    q: "Quais cidades a Central do Concreto atende com entrega de cobogó?",
    a: "16 cidades dentro do raio de 120 km a partir de Ivoti RS · Ivoti · Dois Irmãos · Estância Velha · Bom Princípio · Lindolfo Collor · São José do Hortêncio · Presidente Lucena · Novo Hamburgo · Campo Bom · Sapiranga · Picada Café · Morro Reuter · Santa Maria do Herval · Nova Petrópolis · Canela · Gramado.",
  },
  {
    q: "Qual o prazo padrão de entrega de cobogó?",
    a: "5 a 10 dias úteis após a confirmação do pedido · cidades dentro de 30 km de Ivoti podem ter janela reduzida pra até 3 dias úteis em obras urgentes · grandes volumes podem incluir 2 a 3 dias adicionais de produção antes da carga.",
  },
  {
    q: "A Central entrega com caminhão próprio ou terceirizado?",
    a: "Caminhão próprio com cobertura de carga · cobogós embalados em stretch e fixados com cintas antes de sair de Ivoti · zero intermediário entre a fábrica e a obra.",
  },
  {
    q: "A descarga no canteiro tem taxa extra?",
    a: "Não · a descarga combinada com a obra está inclusa no frete · o ponto de descarga (calçada · garagem · pátio interno) é definido no agendamento · pedidos com grande volume podem precisar de apoio do canteiro.",
  },
  {
    q: "Dá pra combinar entrega de cobogó com a instalação?",
    a: "Sim · a Central instala cobogó na Serra Gaúcha e Vale do Sinos · quando o serviço de instalação é contratado junto, a entrega e a equipe chegam no mesmo agendamento, com 1 frete só. Detalhes em /cobogos/instalacao.",
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
          name: "Entrega de cobogó",
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
        alt: "Veículo Saveiro branca da Central do Concreto estacionada em pavimento de paver na sede operacional em Ivoti com estoque de cobogós empilhados ao fundo · entrega no raio de 120 km com caminhão próprio · Central do Concreto Ivoti RS",
      },
    ],
  },
};

export default function CobogoEntregaPage() {
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
            Entrega de cobogó
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
        <Image
          src="/cluster-cobogos/saveiro-entrega-cobogo-ivoti.webp"
          alt="Veículo Saveiro branca da Central do Concreto estacionada em pavimento de paver na sede operacional em Ivoti com estoque de cobogós empilhados ao fundo · entrega no raio de 120 km com caminhão próprio · Central do Concreto Ivoti RS"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative container mx-auto px-4 py-16 max-w-3xl text-white">
          <p className="text-cc-orange font-semibold mb-3 uppercase tracking-wide text-sm">
            Cobogós · Entrega
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Entrega de cobogó · raio de 120 km com caminhão próprio da Central
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/95">
            Entrega de cobogós com caminhão próprio da Central do Concreto · raio operacional de 120 km a partir de Ivoti RS · 16 cidades atendidas pela Serra Gaúcha, Vale do Sinos e região · carga protegida em cobertura, descarga combinada no canteiro, sem intermediário entre fábrica e obra.
          </p>
          <a
            href={WHATSAPP_HERO_URL}
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Combinar entrega pelo WhatsApp
          </a>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Caminhão próprio
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Raio 120 km · 16 cidades
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              5 a 10 dias úteis
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow>Logística · Entrega de cobogó</Eyebrow>

        {/* H2 1 */}
        <h2
          id="como-funciona"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Como funciona a entrega de cobogó da Central
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A entrega de cobogó da Central acontece em 5 passos definidos · da confirmação do pedido à descarga no canteiro · com janela de 5 a 10 dias úteis no fluxo padrão.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-cc-gray-700 leading-relaxed mb-4">
          <li>
            <strong>Pedido confirmado pelo WhatsApp</strong> · modelos, quantidade e endereço da obra alinhados em conversa.
          </li>
          <li>
            <strong>Confirmação do prazo</strong> · o André valida estoque e janela de carga no mesmo dia útil.
          </li>
          <li>
            <strong>Agendamento</strong> · data e horário combinados conforme a logística do canteiro.
          </li>
          <li>
            <strong>Carga protegida</strong> · cobogós embalados, fixados com cintas e cobertos no caminhão antes de sair de Ivoti.
          </li>
          <li>
            <strong>Entrega e descarga combinada</strong> · descarga no ponto definido com a obra sem taxa extra.
          </li>
        </ol>
        <Image
          src="/cluster-cobogos/cobogo-ao-quadrado-concreto-ivoti-02.webp"
          alt="Cobogó modelo Ao Quadrado em concreto pré-moldado · muro alto construído com módulos Ao Quadrado em série pintados em tom grafite escuro, padrão de pequenos quadrados vazados em malha densa, ambiente residencial externo com jardim de folhagens · Central do Concreto Ivoti RS"
          width={1200}
          height={1200}
          className="w-full h-auto rounded-lg mb-6"
        />

        {/* H2 2 */}
        <h2
          id="prazo-de-entrega"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Prazo de entrega · quanto tempo até o canteiro
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O prazo padrão de entrega de cobogó é de 5 a 10 dias úteis a partir da confirmação do pedido · cidades dentro de 30 km de Ivoti têm janela reduzida em até 3 dias úteis nas obras urgentes · grandes volumes podem precisar de 2 a 3 dias adicionais de produção.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-cc-gray-700 leading-relaxed mb-4">
          <li>
            <strong>Prazo padrão</strong> · 5 a 10 dias úteis após a confirmação do pedido.
          </li>
          <li>
            <strong>Prioridade</strong> · até 3 dias úteis pra obras em raio de 30 km de Ivoti.
          </li>
          <li>
            <strong>Estoque</strong> · quando o modelo está pronto na fábrica, o prazo encurta.
          </li>
          <li>
            <strong>Volume</strong> · pedidos grandes podem incluir 2 a 3 dias adicionais de produção antes da carga.
          </li>
        </ul>
        <Image
          src="/cluster-cobogos/cobogo-eclipse-concreto-ivoti-02.webp"
          alt="Cobogó modelo Eclipse em concreto pré-moldado · muro alto construído com módulos Eclipse em série, padrão de círculos entrelaçados formando textura visual contínua, ambiente residencial externo com calçada de petit pavé · Central do Concreto Ivoti RS"
          width={1200}
          height={1200}
          className="w-full h-auto rounded-lg mb-6"
        />

        <div className="mt-10 text-center">
          <p className="text-base md:text-lg text-cc-gray-700 mb-6 leading-relaxed">
            Obras urgentes pedem prioridade · cidades a até 30 km de Ivoti têm janela reduzida em até 3 dias úteis com agendamento direto pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_PRAZO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Pedir entrega agilizada
          </a>
        </div>

        {/* H2 3 */}
        <h2
          id="caminhao-e-descarga"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Como é o caminhão e a descarga
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O caminhão de entrega da Central do Concreto é veículo próprio com cobertura de carga · capacidade suficiente para os volumes típicos do cluster cobogós (fachada · muro · cercamento) · descarga combinada com a obra inclusa no frete sem taxa extra.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-cc-gray-700 leading-relaxed mb-4">
          <li>
            <strong>Caminhão truck</strong> com carroceria coberta · proteção contra chuva e impacto de estrada.
          </li>
          <li>
            <strong>Carga sempre embalada</strong> em stretch e fixada com cintas antes de sair de Ivoti.
          </li>
          <li>
            <strong>Descarga combinada</strong> no ponto definido com o canteiro (calçada · garagem · pátio interno).
          </li>
          <li>
            <strong>Apoio do canteiro</strong> pode ser necessário pra descarga de grandes volumes.
          </li>
        </ul>
        <Image
          src="/cluster-cobogos/cobogo-fenestra-concreto-ivoti-02.webp"
          alt="Cobogó modelo Fenestra em concreto pré-moldado · muro construído com módulos Fenestra em série pintados em tom bordô vermelho, padrão de arcos duplos formando textura visual orgânica, ambiente externo com vegetação · Central do Concreto Ivoti RS"
          width={1200}
          height={1200}
          className="w-full h-auto rounded-lg mb-6"
        />

        {/* H2 4 */}
        <h2
          id="combinar-com-instalacao"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Combinar entrega com instalação · 1 frete só
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Quando a obra contrata cobogó da Central com instalação inclusa, a entrega vai junto no mesmo agendamento · 1 logística só, sem dois fretes separados, sem dois agendamentos.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-cc-gray-700 leading-relaxed mb-4">
          <li>
            <strong>Material e equipe chegam juntos</strong> · economia de 1 frete e 1 deslocamento.
          </li>
          <li>
            <strong>Combinação resolvida</strong> no mesmo orçamento via WhatsApp.
          </li>
          <li>
            <strong>Detalhes do serviço de instalação</strong> · veja{" "}
            <Link
              href="/cobogos/instalacao"
              className="text-cc-orange underline hover:no-underline"
            >
              a página de instalação de cobogó
            </Link>
            .
          </li>
        </ul>

        <div className="mt-10 text-center">
          <p className="text-base md:text-lg text-cc-gray-700 mb-6 leading-relaxed">
            Frete combinado · cobogó e instalação entregues juntos numa só logística, sem dois fretes separados.
          </p>
          <a
            href={WHATSAPP_COMBINAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Combinar frete pelo WhatsApp
          </a>
        </div>

        {/* H2 5 */}
        <h2
          id="cidades-atendidas"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Cidades atendidas no raio de 120 km
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          16 cidades estão dentro do raio operacional de 120 km da Central do Concreto · cidades mais próximas, até 30 km de Ivoti, têm janela reduzida disponível para obras urgentes · cidades intermediárias seguem o prazo padrão de 5 a 10 dias úteis · cidades mais distantes como Canela e Gramado operam com agendamento combinado conforme rota disponível.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A lista completa das 16 cidades está logo abaixo, nas pills clicáveis · toque na sua cidade pra abrir a conversa de orçamento direto no WhatsApp.
        </p>
      </article>

      {/* CITY PILLS */}
      <section className="bg-cc-black py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-3xl font-bold mb-3 text-center">
            Entrega de cobogó · 16 cidades no raio de 120 km
          </p>
          <p className="text-white/80 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            Raio de 120 km a partir de Ivoti-RS · caminhão próprio · descarga ao lado do canteiro de obra.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cidades.map((c) => (
              <a
                key={c}
                href={`https://wa.me/5551996691757?text=${encodeURIComponent(
                  `Olá, gostaria de orçar cobogós com entrega em ${c}.`
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

      {/* IMAGEM OPERAÇÃO */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Image
            src="/cluster-cobogos/caminhao-entrega-cobogo-ivoti.webp"
            alt="Funcionário em camiseta da Central do Concreto opera descarga em caminhão truck Mercedes carregado com pré-moldados embalados em stretch · operação real de entrega no raio de 120 km · Central do Concreto Ivoti RS"
            width={1600}
            height={1200}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-cc-gray-700 mb-8">
          Perguntas frequentes sobre entrega de cobogó
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
          <p className="text-white/90 mb-8 text-lg leading-relaxed">
            Mande endereço, cidade ou CEP da obra · resposta humana e agilizada direto do André no mesmo dia útil, sem intermediário e sem formulário.
          </p>
          <a
            href={WHATSAPP_FINAL_URL}
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg"
          >
            Falar com o André
          </a>
        </div>
      </section>
    </>
  );
}
