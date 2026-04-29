import CardProdutoDestaque from "@/components/CardProdutoDestaque";
import CardProdutoPadrao from "@/components/CardProdutoPadrao";

export const metadata = {
  title: "Produtos — Central do Concreto · Catálogo de Artefatos em Ivoti-RS",
  description:
    "Tubos, caixas de passagem, pergolados, muros, postes, blocos, PAVS, piso atérmico, fossas. Direto da fábrica em Ivoti-RS, com normas técnicas e entrega na Serra Gaúcha.",
};

const WHATSAPP_URL =
  "https://wa.me/5551996691757?text=Oi%2C%20visitei%20o%20site%20Central%20do%20Concreto%20e%20gostaria%20de%20atendimento.";

const destaques = [
  {
    slug: "tubos",
    title: "Tubos de Concreto",
    desc: "Drenagem e saneamento com resistência superior. PA1, PA2, parede fina e grossa, ponta-bolsa, macho-fêmea.",
    image: "/produtos/tubos.png",
    imageAlt: "Tubos de concreto pré-moldados em Ivoti-RS",
    badge: "B2B",
  },
  {
    slug: "caixas-de-passagem",
    title: "Caixas de Passagem",
    desc: "Conexões seguras com acesso rápido para drenagem urbana. Padrões dimensionais conforme normas ABNT.",
    image: "/produtos/caixas.png",
    imageAlt: "Caixa de passagem de concreto para inspeção em Ivoti-RS",
    badge: "B2B",
  },
  {
    slug: "pergolado-de-concreto",
    title: "Pergolado de Concreto",
    desc: "Estrutura pré-moldada amadeirada para áreas residenciais. 30+ anos sem cupim, sem manutenção, sem retrabalho.",
    image: "/produtos/pergolado.svg",
    imageAlt: "Pergolado de concreto pré-moldado em Ivoti-RS",
    badge: "Residencial",
  },
];

const padroes = [
  {
    slug: "muros-e-gradis",
    title: "Muros e Gradis",
    desc: "Placa veneziana e gradil em concreto. Fechamento com qualidade controlada.",
    image: "/produtos/muros.png",
    imageAlt: "Muro de concreto pré-moldado em Ivoti-RS",
  },
  {
    slug: "postes-e-meio-fio",
    title: "Postes e Meio-fio",
    desc: "Pavimentação e iluminação. Estruturas robustas com máxima durabilidade.",
    image: "/produtos/postes.png",
    imageAlt: "Poste de concreto e meio-fio em Ivoti-RS",
  },
  {
    slug: "blocos",
    title: "Blocos de Concreto",
    desc: "Alvenaria estrutural e de vedação. Resistência conferida por lote.",
    image: "/produtos/blocos.svg",
    imageAlt: "Bloco de concreto para alvenaria em Ivoti-RS",
  },
  {
    slug: "piso-atermico",
    title: "Piso Atérmico",
    desc: "Antiderrapante, não esquenta no sol. Placas 49x49 ideais para áreas de piscina.",
    image: "/produtos/piso-atermico.svg",
    imageAlt: "Piso atérmico de concreto antiderrapante em Ivoti-RS",
  },
  {
    slug: "pavs",
    title: "PAVS",
    desc: "Sextavado e holandês. Pisos intertravados com instalação inclusa.",
    image: "/produtos/pavs.png",
    imageAlt: "PAVS sextavado e holandês em Ivoti-RS",
  },
  {
    slug: "fossa-e-filtro",
    title: "Fossa e Filtro",
    desc: "Tratamento de esgoto sob medida. Rastreabilidade por lote, conforme ABNT.",
    image: "/produtos/fossa.png",
    imageAlt: "Fossa séptica e filtro anaeróbio de concreto em Ivoti-RS",
  },
];

export default function ProdutosPage() {
  return (
    <>
      <section
        className="bg-cc-gray-50 border-b border-cc-gray-200 py-12 sm:py-16"
        aria-labelledby="produtos-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="produtos-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cc-black mb-4"
          >
            Catálogo de Artefatos de Concreto
          </h1>
          <p className="text-base sm:text-lg text-cc-gray-600 max-w-2xl mx-auto leading-relaxed">
            Direto da fábrica. Normas técnicas de fabricação. Entrega na Serra Gaúcha.
          </p>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 bg-white"
        aria-labelledby="destaques-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="destaques-title" className="sr-only">
            Produtos em destaque
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {destaques.map((p) => (
              <CardProdutoDestaque key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-8 sm:py-12 bg-white border-t border-cc-gray-200"
        aria-labelledby="catalogo-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="catalogo-title"
            className="text-2xl sm:text-3xl font-bold text-cc-black mb-8 text-center"
          >
            Demais produtos do catálogo
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {padroes.map((p) => (
              <CardProdutoPadrao key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cc-orange py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Não encontrou o que procura?
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-95">
            Fabricamos sob medida. Fale com nossa equipe técnica.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-cc-orange hover:bg-cc-gray-100 px-7 py-3.5 rounded-md text-base font-bold transition-colors"
          >
            Falar no WhatsApp: (51) 99669-1757
          </a>
        </div>
      </section>
    </>
  );
}
