import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/5551996691757?text=Oi%2C%20visitei%20o%20site%20Central%20do%20Concreto%20e%20gostaria%20de%20atendimento.";

export const metadata = {
  title: "PAVS — Central do Concreto · Ivoti-RS",
  description:
    "PAVS sextavado e holandês em Ivoti-RS. Pisos intertravados de concreto com instalação inclusa, ideais para calçadas, pátios e estacionamentos.",
};

export default function PavsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <nav aria-label="Navegação" className="mb-8">
        <Link
          href="/produtos"
          className="inline-flex items-center gap-1 text-sm text-cc-gray-600 hover:text-cc-orange transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Voltar pro catálogo
        </Link>
      </nav>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cc-black mb-6 text-center">
        PAVS — Pisos Intertravados
      </h1>

      <div className="bg-cc-gray-50 border border-cc-gray-200 rounded-lg p-6 sm:p-10 text-center">
        <p className="text-base sm:text-lg text-cc-gray-600 mb-8 leading-relaxed">
          Página em construção. Em breve, modelos (sextavado, holandês), espessuras, aplicações em calçadas residenciais e pátios comerciais, instalação por equipe própria, e exemplos de obras prontas.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-cc-orange hover:bg-cc-orange-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors"
        >
          Falar com André no WhatsApp
        </a>
      </div>
    </section>
  );
}
