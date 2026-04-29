const WHATSAPP_URL =
  "https://wa.me/5551996691757?text=Oi%2C%20visitei%20o%20site%20Central%20do%20Concreto%20e%20gostaria%20de%20atendimento.";

const diferenciais = [
  {
    title: "Direto da fábrica",
    desc: "Sem atravessadores. Preço de origem e contato direto com quem produz cada peça.",
  },
  {
    title: "Normas técnicas de fabricação",
    desc: "Cada artefato segue padrões da ABNT. Resistência, vedação e durabilidade conferidas antes da entrega.",
  },
  {
    title: "Entrega própria na Serra Gaúcha",
    desc: "Frota própria atendendo Ivoti, Gramado, Canela, Nova Petrópolis, Dois Irmãos e região.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cc-black text-white py-20 sm:py-28" aria-labelledby="hero-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Artefatos de Concreto<br />
            <span className="text-cc-orange">Direto da Fábrica</span>
          </h1>
          <p className="text-lg sm:text-xl text-cc-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Tubos, PAVS, fossas, muros, postes e mais. Entrega garantida em Ivoti, interior e Serra Gaúcha.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-orange hover:bg-cc-orange-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors"
          >
            Solicitar orçamento no WhatsApp
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="diferenciais-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="diferenciais-title" className="text-3xl sm:text-4xl font-bold text-center mb-4 text-cc-black">
            Como a Central trabalha
          </h2>
          <p className="text-center text-cc-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Três compromissos firmes em cada entrega.
          </p>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {diferenciais.map((d) => (
              <article
                key={d.title}
                className="bg-cc-gray-50 border border-cc-gray-200 rounded-lg p-6 sm:p-8"
              >
                <div className="w-12 h-12 bg-cc-orange rounded-md flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cc-black">{d.title}</h3>
                <p className="text-cc-gray-600 leading-relaxed">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-cc-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto pra falar com nossa equipe técnica?
          </h2>
          <p className="text-lg mb-8 opacity-95 leading-relaxed">
            Atendemos construtoras, empreiteiros, madeireiras e pessoas físicas em Ivoti-RS e Serra Gaúcha.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-cc-orange hover:bg-cc-gray-100 px-8 py-4 rounded-md text-base font-bold transition-colors"
          >
            Chamar no WhatsApp: (51) 99669-1757
          </a>
        </div>
      </section>
    </>
  );
}
