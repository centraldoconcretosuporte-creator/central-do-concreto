import Link from "next/link";

const navegacao = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Onde atendemos", href: "/entregas" },
  { label: "Pergolados", href: "/produtos/pergolado-de-concreto" },
  { label: "Piso Atérmico", href: "/produtos/piso-atermico" },
  { label: "Tubos", href: "/produtos/tubos" },
  { label: "Caixas de Passagem", href: "/produtos/caixas-de-passagem" },
  { label: "Muros e Gradis", href: "/produtos/muros-e-gradis" },
  { label: "Postes", href: "/produtos/postes-e-meio-fio" },
  { label: "Blocos", href: "/produtos/blocos" },
  { label: "PAVS", href: "/produtos/pavs" },
  { label: "Fossa e Filtro", href: "/produtos/fossa-e-filtro" },
];

const grupo = [
  { label: "Bom Jardim Ivoti", href: "https://bomjardimivoti.com.br" },
  { label: "Telhas Ivoti", href: "https://telhasivoti.com.br" },
];

export default function Footer() {
  return (
    <footer className="bg-cc-green text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-base font-bold tracking-tight mb-4">CENTRAL DO CONCRETO</p>
            <p className="text-sm text-white/80 leading-relaxed mb-3">
              Av. Bom Jardim, 149 · Loja 04
              <br />
              Vista Alegre · Ivoti-RS
              <br />
              CEP 93900-000
            </p>
            <p className="text-sm text-white/80 leading-relaxed mb-3">
              Segunda a Sexta · 8h às 18h
              <br />
              Sábado · 8h às 12h
            </p>
            <p className="text-sm text-white/90 font-medium">
              <a
                href="https://wa.me/5551996691757"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cc-coral transition-colors"
              >
                (51) 99669-1757
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-widest text-cc-coral uppercase mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {navegacao.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-widest text-cc-coral uppercase mb-4">
              Nosso grupo
            </p>
            <ul className="space-y-2">
              {grupo.map((g) => (
                <li key={g.href}>
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {g.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/60">
          © 2026 Central do Concreto · Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
