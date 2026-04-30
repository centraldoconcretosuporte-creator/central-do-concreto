import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";

export const metadata: Metadata = {
  title: "Produtos · Central do Concreto",
  description:
    "Pergolados, tubos, caixas, muros, postes, blocos, piso atérmico, PAVS, fossa séptica · todos os produtos da Central do Concreto.",
  alternates: { canonical: `${SITE_URL}/produtos` },
};

const produtos = [
  {
    titulo: "Pergolado de Concreto",
    desc: "Pré-moldado · 30+ anos · pra Litoral Norte",
    href: "/produtos/pergolado-de-concreto",
    foto: "/home/produtos/pergolados.webp",
    destaque: true,
  },
  {
    titulo: "Piso Atérmico",
    desc: "Placas 49x49 antiderrapantes pra piscina",
    href: "/produtos/piso-atermico",
    foto: "/home/produtos/piso-atermico.webp",
    destaque: true,
  },
  {
    titulo: "Tubos de Concreto",
    desc: "Drenagem · esgoto · água pluvial",
    href: "/produtos/tubos",
    foto: "/home/produtos/tubos.webp",
  },
  {
    titulo: "Caixas de Passagem",
    desc: "Inspeção · sifão · infraestrutura",
    href: "/produtos/caixas-de-passagem",
    foto: "/produtos/caixas/hero.webp",
  },
  {
    titulo: "Muros e Gradis",
    desc: "Placas + pilares · gradil decorativo",
    href: "/produtos/muros-e-gradis",
    foto: "/home/produtos/muros.webp",
  },
  {
    titulo: "Postes e Meio-fio",
    desc: "Postes de concreto · meio-fio rua",
    href: "/produtos/postes-e-meio-fio",
    foto: "/produtos/postes/hero.webp",
  },
  {
    titulo: "Blocos",
    desc: "Alvenaria estrutural e vedação",
    href: "/produtos/blocos",
    foto: "/produtos/blocos/hero.webp",
  },
  {
    titulo: "PAVS",
    desc: "Pavimento sextavado · holandês · estrela",
    href: "/produtos/pavs",
    foto: "/produtos/pavs/hero.webp",
  },
  {
    titulo: "Fossa e Filtro",
    desc: "Sistema completo séptico + anaeróbio",
    href: "/produtos/fossa-e-filtro",
    foto: "/home/produtos/fossa.webp",
  },
];

export default function ProdutosPage() {
  return (
    <>
      <section className="bg-cc-green py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Todos os produtos
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            9 categorias · pré-moldados de concreto direto da fábrica.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produtos.map((p) => (
              <Link
                key={p.titulo}
                href={p.href}
                className={`group relative rounded-xl overflow-hidden border border-cc-gray-200 hover:border-cc-green transition-colors ${
                  p.destaque ? "lg:col-span-2 min-h-[300px]" : "min-h-[220px]"
                }`}
              >
                <Image
                  src={p.foto}
                  alt={p.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-medium text-white mb-1">{p.titulo} →</h3>
                  <p className="text-sm text-white/90">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
