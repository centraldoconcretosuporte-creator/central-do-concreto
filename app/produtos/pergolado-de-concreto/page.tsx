import Image from "next/image";

export const metadata = {
  title: "Pergolado de Concreto pra Litoral Norte | Central do Concreto",
  description:
    "Pergolado de concreto pré-moldado direto da fábrica em Ivoti pra casas, condomínios, pousadas e hotéis do Litoral Norte e Médio do RS. Estrutura reforçada, equipe própria de instalação, iluminação integrada.",
};

const WHATSAPP_URL =
  "https://wa.me/5551996691757?text=Oi%20Andr%C3%A9%2C%20quero%20or%C3%A7amento%20de%20pergolado%20de%20concreto%20pra%20Litoral%20Norte.";

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
    title: "Solarium",
    desc: "Pergolado pra área de piscina e banho de sol. Mais comum em casa de praia e condomínio fechado.",
  },
  {
    title: "Área gourmet",
    desc: "Pra churrasqueira, mesa e espaço de receber. Combina com piso atérmico ao redor.",
  },
  {
    title: "Empreendimento",
    desc: "Áreas comuns de condomínio, edifício e loteamento. Atendemos construtor com escala.",
  },
  {
    title: "Hotelaria e pousada",
    desc: "Decks de boas-vindas, áreas de descanso, varandas. Foco em estrutura premium pra rede hoteleira.",
  },
];

const combine = [
  {
    slug: "piso-atermico",
    title: "Piso Atérmico",
    desc: "Placas antiderrapantes 49x49 pra área de piscina.",
    href: "/produtos/piso-atermico",
  },
  {
    slug: "cobogos",
    title: "Cobogó",
    desc: "Parede vazada decorativa que fecha um lado do pergolado.",
    href: "/produtos/cobogos",
  },
  {
    slug: "muros-e-gradis",
    title: "Muro pré-moldado",
    desc: "Fechamento da área externa em concreto pré-moldado.",
    href: "/produtos/muros-e-gradis",
  },
  {
    slug: "revestimentos",
    title: "Revestimentos",
    desc: "Acabamento estético pras paredes da área externa.",
    href: "#",
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
      {/* 01 HERO */}
      <section
        className="bg-cc-gray-50 border-b border-cc-gray-200 py-12 sm:py-16"
        aria-labelledby="pergolado-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="breadcrumb" className="mb-6 text-sm text-cc-gray-600">
            <ol className="flex flex-wrap gap-2">
              <li>
                <a href="/" className="hover:text-cc-orange">
                  Início
                </a>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <a href="/produtos" className="hover:text-cc-orange">
                  Produtos
                </a>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-cc-black font-semibold">
                Pergolado de Concreto
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1
                id="pergolado-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cc-black mb-4 leading-tight"
              >
                Pergolado de concreto pra Litoral Norte
              </h1>
              <p className="text-base sm:text-lg text-cc-gray-600 leading-relaxed mb-8">
                Direto da fábrica em Ivoti, com estrutura reforçada, equipe própria de instalação e pontos de iluminação integrados. Atendemos casas, condomínios, pousadas e hotéis de Xangri-Lá a Torres.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cc-orange text-white hover:opacity-90 px-7 py-3.5 rounded-md text-base font-bold transition-opacity"
              >
                Solicitar orçamento no WhatsApp
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/produtos/pergolado.webp"
                alt="Pergolado de concreto com piscina em casa de praia no Litoral Norte"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 POR QUÊ */}
      <section
        className="py-12 sm:py-16 bg-white"
        aria-labelledby="diferenciadores-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="diferenciadores-title"
            className="text-2xl sm:text-3xl font-bold text-cc-black mb-10 text-center"
          >
            Por que pergolado de concreto da Central
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {diferenciadores.map((d) => (
              <div
                key={d.title}
                className="bg-cc-gray-50 border border-cc-gray-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-cc-black mb-2">
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
        className="py-12 sm:py-16 bg-cc-gray-50 border-y border-cc-gray-200"
        aria-labelledby="tipos-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="tipos-title"
            className="text-2xl sm:text-3xl font-bold text-cc-black mb-10 text-center"
          >
            Tipos de pergolado
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {tipos.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-cc-gray-200 rounded-lg p-5"
              >
                <h3 className="text-base font-bold text-cc-black mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-cc-gray-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 COMBINE */}
      <section
        className="py-12 sm:py-16 bg-white"
        aria-labelledby="combine-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="combine-title"
            className="text-2xl sm:text-3xl font-bold text-cc-black mb-10 text-center"
          >
            Combine seu pergolado
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {combine.map((c) => (
              <a
                key={c.slug}
                href={c.href}
                className="block bg-cc-gray-50 border border-cc-gray-200 rounded-lg p-5 hover:border-cc-orange transition-colors"
              >
                <h3 className="text-base font-bold text-cc-black mb-2">
                  {c.title} →
                </h3>
                <p className="text-sm text-cc-gray-600 leading-relaxed">
                  {c.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 06 GRUPO */}
      <section
        className="py-12 sm:py-16 bg-cc-gray-50 border-y border-cc-gray-200"
        aria-labelledby="grupo-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="grupo-title"
            className="text-2xl sm:text-3xl font-bold text-cc-black mb-3 text-center"
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
                className="block bg-white border border-cc-gray-200 rounded-lg p-6 hover:border-cc-orange transition-colors"
              >
                <h3 className="text-lg font-bold text-cc-black mb-2">
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
        className="py-12 sm:py-16 bg-white"
        aria-labelledby="faq-title"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-title"
            className="text-2xl sm:text-3xl font-bold text-cc-black mb-10 text-center"
          >
            Perguntas frequentes
          </h2>
          <div className="space-y-8">
            {faqs.map((g) => (
              <div key={g.grupo}>
                <h3 className="text-sm font-bold text-cc-orange uppercase tracking-wider mb-4">
                  {g.grupo}
                </h3>
                <div className="space-y-3">
                  {g.perguntas.map((p) => (
                    <details
                      key={p.q}
                      className="group bg-cc-gray-50 border border-cc-gray-200 rounded-lg px-5 py-4"
                    >
                      <summary className="text-base font-semibold text-cc-black cursor-pointer list-none flex items-start justify-between gap-4">
                        <span>{p.q}</span>
                        <span
                          className="text-cc-orange text-xl group-open:rotate-45 transition-transform shrink-0"
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

      {/* 08 COBERTURA */}
      <section
        className="py-12 sm:py-16 bg-cc-gray-50 border-y border-cc-gray-200"
        aria-labelledby="cobertura-title"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cobertura-title"
            className="text-2xl sm:text-3xl font-bold text-cc-black mb-3"
          >
            Atendemos no Litoral Norte e Médio
          </h2>
          <p className="text-base text-cc-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Fabricamos em Ivoti e levamos com frota própria pra todo o Litoral Norte do RS. Atendimento exclusivo da Central nesse território.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {cidades.map((c) => (
              <li
                key={c}
                className="bg-white border border-cc-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-cc-black"
              >
                {c}
              </li>
            ))}
          </ul>
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
