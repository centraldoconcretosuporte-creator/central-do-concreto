"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5551996691757?text=Oi%2C%20visitei%20o%20site%20Central%20do%20Concreto%20e%20gostaria%20de%20atendimento.";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/entregas", label: "Entregas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-cc-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Central do Concreto - Home">
          <Image
            src="/logo.png"
            alt="Central do Concreto - logotipo"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-cc-black hover:text-cc-orange transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-cc-orange hover:bg-cc-orange-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
          aria-label="Solicitar orçamento no WhatsApp"
        >
          Solicitar orçamento
        </a>

        <button
          className="lg:hidden p-2 text-cc-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="lg:hidden border-t border-cc-gray-200 px-4 py-4 bg-white" aria-label="Menu mobile">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 px-2 text-cc-black hover:text-cc-orange text-base font-medium border-b border-cc-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cc-orange text-white text-center py-3 rounded-md font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Solicitar orçamento
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
