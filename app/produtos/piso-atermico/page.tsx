import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/5551996691757?text=Oi%2C%20visitei%20o%20site%20Central%20do%20Concreto%20e%20gostaria%20de%20atendimento.";

export const metadata = {
  title: "Piso Atérmico — Central do Concreto · Ivoti-RS",
  description:
    "Piso atérmico antiderrapante 49x49 em Ivoti-RS. Placas que não esquentam no sol, ideais para áreas ao redor de piscinas e áreas gourmet.",
};

export default function PisoAtermicoPage() {
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
        Piso Atérmico para Piscinas
      </h1>

      <div className="bg-cc-gray-50 border border-cc-gray-200 rounded-lg p-6 sm:p-10 text-center">
        <p className="text-base sm:text-lg text-cc-gray-600 mb-8 leading-relaxed">
          Página em construção. Em breve, galeria com 30 fotos reais aplicadas, cores disponíveis (branco, marfim, cinza), peças especiais (bordas curvas, cantos em L, grelhas), e dicas de instalação para áreas ao redor de piscinas.
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
