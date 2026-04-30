import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";
const WHATSAPP_URL = "https://wa.me/5551996691757";

export const metadata: Metadata = {
  title: "Entregas · Central do Concreto · Onde atendemos",
  description:
    "Cobertura completa da Central do Concreto · Serra Gaúcha · Vale do Rio dos Sinos · Litoral Norte. Fábrica em Ivoti-RS.",
  alternates: { canonical: `${SITE_URL}/entregas` },
};

const regioes = [
  {
    nome: "Vale do Rio dos Sinos",
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
    nome: "Litoral Norte e Médio · Pergolado exclusivo",
    descricao: "Cobertura exclusiva CC pra pergolado · saímos da fábrica e instalamos.",
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

export default function EntregasPage() {
  return (
    <>
      <section className="bg-cc-green py-20 md:py-28 text-center">
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
              <Eyebrow className={`mb-3 ${r.cor === "coral" ? "text-cc-coral" : ""}`}>
                {r.nome}
              </Eyebrow>
              <h2 className="text-2xl md:text-3xl font-medium text-cc-green mb-3">{r.nome}</h2>
              <p className="text-base text-cc-gray-600 mb-6">{r.descricao}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {r.cidades.map((cidade) => (
                  <div
                    key={cidade}
                    className="bg-cc-cream border border-cc-gray-200 rounded-lg py-3 px-3 text-center"
                  >
                    <span className="text-sm font-medium text-cc-gray-600">{cidade}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cc-green text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">
            Sua cidade não aparece?
          </h2>
          <p className="text-base text-white/85 mb-10">
            Entra em contato · podemos avaliar entrega especial.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            Consultar · (51) 99669-1757
          </a>
        </div>
      </section>
    </>
  );
}
