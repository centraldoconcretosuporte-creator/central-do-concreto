const WHATSAPP_URL =
  "https://wa.me/5551996691757?text=Oi%2C%20visitei%20o%20site%20Central%20do%20Concreto%20e%20gostaria%20de%20atendimento.";

export const metadata = {
  title: "Contato — Central do Concreto",
  description: "Fale com a Central do Concreto. WhatsApp (51) 99669-1757, email, endereço em Ivoti-RS.",
};

export default function ContatoPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-cc-black">Contato</h1>
      <p className="text-lg text-cc-gray-600 mb-10 leading-relaxed">
        WhatsApp (51) 99669-1757. Email suporte@centraldoconcretoentrega.com.br. Endereço Av. Bom Jardim, 149 — Loja 04 — Vista Alegre, Ivoti-RS, 93900-000. Página completa com formulário e mapa em construção.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-cc-orange hover:bg-cc-orange-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors"
      >
        Falar no WhatsApp agora
      </a>
    </section>
  );
}
