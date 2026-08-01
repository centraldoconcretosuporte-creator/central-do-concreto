import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import WhatsAppLink from "@/components/WhatsAppLink";
import { NEGOCIO_NODES } from "@/lib/schema-negocio";

const SITE_URL = "https://centraldoconcretoentrega.com.br";
const CANONICAL_URL = `${SITE_URL}/entregas`;
const WHATSAPP_URL = "https://wa.me/5551996691757";

export const metadata: Metadata = {
  title: "Entregas · Central do Concreto · Onde atendemos",
  description:
    "Cobertura completa da Central do Concreto · Serra Gaúcha · Vale dos Sinos · Litoral Norte. Fábrica em Ivoti-RS.",
  alternates: { canonical: CANONICAL_URL },
};

const regioes = [
  {
    nome: "Vale dos Sinos",
    descricao: "Onde a fábrica está. Entregas mais rápidas.",
    cidades: [
      "Ivoti (retirada)",
      "Dois Irmãos",
      "Estância Velha",
      "Novo Hamburgo",
      "São Leopoldo",
      "Sapucaia do Sul",
      "Esteio",
      "Linha Nova",
      "Presidente Lucena",
      "Lindolfo Collor",
    ],
    cor: "verde",
  },
  {
    nome: "Serra Gaúcha",
    descricao: "Subimos a serra toda semana.",
    cidades: [
      "Picada Café",
      "Nova Petrópolis",
      "Gramado",
      "Canela",
      "Caxias do Sul",
      "Bento Gonçalves",
      "Bom Princípio",
      "Feliz",
      "Harmonia",
      "Três Coroas",
      "Morro Reuter",
      "Igrejinha",
    ],
    cor: "verde",
  },
  {
    nome: "Litoral Norte e Médio",
    descricao: "Artefatos de concreto e pergolado · o pergolado sai da fábrica com instalação.",
    cidades: [
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
    ],
    cor: "coral",
  },
];

const faqs = [
  {
    q: "Vocês atendem todas as cidades do mapa?",
    a: "Sim, são as cidades onde a entrega é recorrente. O que muda de uma obra pra outra é o encaixe na rota e o acesso até o local — em zona rural isso pesa mais.",
  },
  {
    q: "Como funcionam as entregas?",
    a: "Por três rotas semanais que saem de Ivoti. Cada rota cobre uma parte da área e roda uma vez por semana, o que alcança tanto cidade vizinha quanto localidade mais afastada.",
  },
  {
    q: "Entregam em área rural e fora do centro?",
    a: "Sim. Propriedade rural, bairro afastado e área industrial entram, desde que o acesso comporte o caminhão carregado. Havendo dúvida sobre o acesso, é melhor conferir antes de fechar o pedido.",
  },
  {
    q: "A entrega é sempre no mesmo dia da semana?",
    a: "Não. A rota é semanal, mas o dia dentro dela depende do volume de pedido e de onde estão as obras naquela semana.",
  },
  {
    q: "Quais produtos entram na entrega?",
    a: "Os artefatos de concreto do catálogo — tubo, caixa de passagem, poste, moirão, bloco e o restante da linha de infraestrutura.",
  },
  {
    q: "Como sei se minha obra está na área?",
    a: "Mande a localização pelo WhatsApp. A gente confere o encaixe na rota e as condições de acesso, e responde direto.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...NEGOCIO_NODES,
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Onde atendemos",
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
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

export default function EntregasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-cc-black py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Onde atendemos
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Direto da fábrica em Ivoti-RS · 3 regiões · cobertura por estrada.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 space-y-12">
          {regioes.map((r) => (
            <div key={r.nome}>
              <Eyebrow className={`mb-3 ${r.cor === "coral" ? "text-cc-orange" : ""}`}>
                {r.nome}
              </Eyebrow>
              <h2 className="text-2xl md:text-3xl font-medium text-cc-black mb-3">{r.nome}</h2>
              <p className="text-base text-cc-gray-600 mb-6">{r.descricao}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {r.cidades.map((cidade) => (
                  <div
                    key={cidade}
                    className="bg-cc-gray-100 border border-cc-gray-200 rounded-lg py-3 px-3 text-center"
                  >
                    <span className="text-sm font-medium text-cc-gray-600">{cidade}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cc-gray-100" aria-labelledby="como-a-entrega-funciona">
        <div className="mx-auto max-w-3xl px-4">
          <h2
            id="como-a-entrega-funciona"
            className="text-2xl md:text-3xl font-medium text-cc-black mb-6"
          >
            Como a entrega funciona
          </h2>
          <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
            <p>
              A entrega sai da fábrica em Ivoti e roda em três rotas semanais. Cada uma cobre uma
              parte da área do mapa e é percorrida uma vez por semana.
            </p>
            <p>
              É isso que permite atender obra no interior sem depender de frete de terceiro: o
              caminhão já vai passar na região, e a obra entra na carga daquela rota.
            </p>
            <p>
              O dia exato varia. A rota é semanal, mas a ordem das paradas depende do volume da
              semana e de onde as obras estão. A data é confirmada quando o pedido fecha.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cc-black text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">
            Sua cidade não aparece?
          </h2>
          <p className="text-base text-white/85 mb-10">
            Entra em contato · podemos avaliar entrega especial.
          </p>
          <WhatsAppLink
            href={WHATSAPP_URL}
            source="entregas-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            Consultar · (51) 99669-1757
          </WhatsAppLink>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-cc-gray-100 cc-faq" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2
            id="faq-title"
            className="text-2xl md:text-3xl font-bold text-cc-black mb-10 text-center leading-tight"
          >
            Perguntas sobre a área de cobertura
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-cc-gray-200 rounded-lg px-5 py-4"
              >
                <summary className="text-base font-semibold text-cc-black cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>
                    <h3 className="inline">{f.q}</h3>
                  </span>
                  <span
                    className="text-cc-orange text-xl group-open:rotate-45 transition-transform shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-base text-cc-gray-700 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
