import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-cc-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="bg-white rounded p-2 inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Central do Concreto - logotipo"
                width={180}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-cc-gray-400 text-sm leading-relaxed">
              Fabricante de artefatos de concreto em Ivoti-RS. Direto da fábrica, com normas técnicas e entrega na Serra Gaúcha.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Endereço</h3>
            <address className="text-cc-gray-400 text-sm leading-relaxed not-italic">
              Av. Bom Jardim, 149<br />
              Loja 04 — Vista Alegre<br />
              Ivoti-RS, 93900-000
            </address>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5551996691757"
                  className="text-cc-gray-400 hover:text-cc-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: (51) 99669-1757
                </a>
              </li>
              <li>
                <a
                  href="mailto:suporte@centraldoconcretoentrega.com.br"
                  className="text-cc-gray-400 hover:text-cc-orange transition-colors break-all"
                >
                  suporte@centraldoconcretoentrega.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/centraldoconcretors"
                  className="text-cc-gray-400 hover:text-cc-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram: @centraldoconcretors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cc-gray-800 mt-10 pt-6 text-center text-cc-gray-400 text-xs">
          © 2026 Central do Concreto. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
