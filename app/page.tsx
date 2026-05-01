import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";
import { GRUPO_IVOTI_CANON, paragrafoGrupo } from "@/lib/grupo-ivoti-canon";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Central do Concreto · Pergolados, tubos e pré-moldados em Ivoti-RS",
  description:
    "Fabricante de artefatos de concreto direto da fábrica em Ivoti. Pergolados pro Litoral Norte, tubos de drenagem, fossa séptica, muros e pisantes. Equipe própria de instalação.",
  openGraph: {
    title: "Central do Concreto · Pergolados, tubos e pré-moldados em Ivoti-RS",
    description:
      "Direto da fábrica, com normas técnicas e equipe própria de instalação. Atendemos Serra Gaúcha, Vale dos Sinos e Litoral Norte.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Central do Concreto",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "Central do Concreto" }],
  },
  alternates: { canonical: SITE_URL },
};

const WHATSAPP_URL = "https://wa.me/5551996691757";

const produtosDestaque = [
  {
    titulo: "Pergolados de Concreto",
    descricao:
      "Pré-moldado pra Litoral Norte · estrutura reforçada pra vento e maresia. Ganchos pra rede, tomada e iluminação embutidos.",
    badge: "Mais procurado",
    href: "/produtos/pergolado-de-concreto",
    foto: "/home/produtos/pergolados.webp",
    grande: true,
  },
  {
    titulo: "Piso Atérmico",
    descricao:
      "Placa 49×49cm antiderrapante. Não esquenta no sol · pé descalço sai da piscina sem queimar. Três cores: branco, marfim e cinza.",
    badge: "Não esquenta no sol",
    href: "/produtos/piso-atermico",
    foto: "/home/produtos/piso-atermico.webp",
    grande: true,
  },
  {
    titulo: "Tubos e Caixas",
    descricao:
      "Tubo de drenagem, esgoto e água pluvial. Caixa de passagem e inspeção. Pra construtora e prefeitura.",
    badge: null,
    href: "/produtos/tubos",
    foto: "/home/produtos/tubos.webp",
    grande: false,
  },
  {
    titulo: "Muros e Gradis",
    descricao:
      "Placa + pilar instalados em 1 dia. Modelo decorativo vazado também disponível pra fechar o terreno todo.",
    badge: null,
    href: "/produtos/muros-e-gradis",
    foto: "/home/produtos/muros.webp",
    grande: false,
  },
  {
    titulo: "Fossa e Filtro",
    descricao:
      "Fossa séptica + filtro anaeróbio · saneamento rural ou área sem rede de esgoto. Sistema completo, instalação inclusa.",
    badge: null,
    href: "/produtos/fossa-e-filtro",
    foto: "/home/produtos/fossa.webp",
    grande: false,
  },
];

const objetivos = [
  { titulo: "Cobrir a piscina", icone: "umbrella", href: "/produtos/pergolado-de-concreto" },
  { titulo: "Drenar terreno", icone: "drop", href: "/produtos/tubos" },
  { titulo: "Construir muro", icone: "wall", href: "/produtos/muros-e-gradis" },
  { titulo: "Saneamento rural", icone: "home", href: "/produtos/fossa-e-filtro" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[560px] md:min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src="/home/hero-fabrica.webp"
          alt="Fábrica da Central do Concreto em Ivoti-RS"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-green/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Pergolados, tubos e pré-moldados de concreto
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Fábrica em Ivoti · pré-moldados saindo direto da forma. Saímos toda semana pra Serra Gaúcha, pro Vale dos Sinos e pro Litoral Norte com equipe própria de instalação.
          </p>
          <div className="flex justify-center mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
          <p className="flex items-center justify-center gap-2 text-sm text-white/85">
            <svg
              className="w-4 h-4 text-cc-orange flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Av. Bom Jardim, 149 · Loja 04 · Vista Alegre · Ivoti-RS
          </p>
        </div>
      </section>

      {/* MOSAICO PRODUTOS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-cc-green mb-3">Nossos produtos</h2>
            <p className="text-base text-cc-gray-600 max-w-2xl mx-auto">
              Pergolado pro Litoral Norte · tubo e fossa pra obra B2B · muro e pisante pro residencial. Tudo saindo da forma em Ivoti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4">
              {produtosDestaque
                .filter((p) => p.grande)
                .map((p) => (
                  <Link
                    key={p.titulo}
                    href={p.href}
                    className="group relative rounded-xl overflow-hidden border border-cc-gray-200 hover:border-cc-green transition-colors min-h-[260px]"
                  >
                    <Image
                      src={p.foto}
                      alt={p.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    {p.badge && (
                      <span className="absolute top-4 right-4 bg-cc-orange text-white text-xs font-medium px-3 py-1 rounded-full">
                        {p.badge}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-medium text-white mb-2">{p.titulo}</h3>
                      <p className="text-sm text-white/90 leading-relaxed">{p.descricao}</p>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="grid grid-rows-3 gap-4">
              {produtosDestaque
                .filter((p) => !p.grande)
                .map((p) => (
                  <Link
                    key={p.titulo}
                    href={p.href}
                    className="group relative rounded-xl overflow-hidden border border-cc-gray-200 hover:border-cc-green transition-colors min-h-[150px]"
                  >
                    <Image
                      src={p.foto}
                      alt={p.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-medium text-white mb-1">{p.titulo}</h3>
                      <p className="text-xs text-white/85 leading-snug">{p.descricao}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ QUER FAZER */}
      <section className="py-16 md:py-24 bg-cc-cream">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-cc-green mb-3">
              O que você quer fazer?
            </h2>
            <p className="text-base text-cc-gray-600 max-w-2xl mx-auto">
              Conta o que você quer resolver · indicamos o produto.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {objetivos.map((obj) => (
              <Link
                key={obj.titulo}
                href={obj.href}
                className="group bg-white border border-cc-gray-200 hover:border-cc-green rounded-xl p-6 md:p-8 text-center transition-colors"
              >
                <svg
                  className="w-10 h-10 mx-auto mb-4 text-cc-green"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {obj.icone === "umbrella" && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9a9 9 0 0 1 18 0H3z" />
                  )}
                  {obj.icone === "drop" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v3m0 12a4 4 0 0 1-4-4c0-2 4-9 4-9s4 7 4 9a4 4 0 0 1-4 4z"
                    />
                  )}
                  {obj.icone === "wall" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M3 14h18M3 6h18M3 18h18M7 6v12m5-12v12m5-12v12"
                    />
                  )}
                  {obj.icone === "home" && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10h14V10" />
                  )}
                </svg>
                <h3 className="text-base font-medium text-cc-green">{obj.titulo}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE O GRUPO */}
      <section className="py-16 md:py-24 bg-cc-green relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Coluna esquerda · texto + CTA */}
          <div>
            <Eyebrow className="mb-4 text-white/80">{GRUPO_IVOTI_CANON.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
              {GRUPO_IVOTI_CANON.h2Cc}
            </h2>
            <p className="text-base text-white/85 leading-relaxed mb-6">
              {paragrafoGrupo("centralDoConcreto")}
            </p>
            <a
              href={GRUPO_IVOTI_CANON.paginaGrupo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-6 py-3 rounded-full font-medium text-sm transition-colors"
            >
              {GRUPO_IVOTI_CANON.paginaGrupo.label}
            </a>
          </div>

          {/* Coluna direita · 3 cards das empresas */}
          <div className="space-y-3">

            {/* Card empresa atual · selo "VOCÊ ESTÁ AQUI" em coral · sem link externo · border mais forte */}
            <div className="bg-white/15 backdrop-blur border-2 border-white/30 rounded-xl p-5">
              <div className="flex items-baseline justify-between mb-1 gap-3">
                <h3 className="text-lg font-medium text-white">
                  {GRUPO_IVOTI_CANON.empresas.centralDoConcreto.nome}
                </h3>
                <span className="text-[11px] text-cc-coral font-medium tracking-widest uppercase whitespace-nowrap">
                  Você está aqui
                </span>
              </div>
              <p className="text-sm text-white/85 leading-relaxed">
                {GRUPO_IVOTI_CANON.empresas.centralDoConcreto.subtitulo}
              </p>
            </div>

            {/* Card BJ · com seta · link externo · subtitulo (texto mais rico) */}
            <a
              href={GRUPO_IVOTI_CANON.empresas.bomJardim.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors"
            >
              <h3 className="text-lg font-medium text-white mb-1">
                {GRUPO_IVOTI_CANON.empresas.bomJardim.nome} →
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {GRUPO_IVOTI_CANON.empresas.bomJardim.subtitulo}
              </p>
            </a>

            {/* Card Telhas · com seta · link externo · subtitulo (texto mais rico) */}
            <a
              href={GRUPO_IVOTI_CANON.empresas.telhas.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors"
            >
              <h3 className="text-lg font-medium text-white mb-1">
                {GRUPO_IVOTI_CANON.empresas.telhas.nome} →
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {GRUPO_IVOTI_CANON.empresas.telhas.subtitulo}
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* === ONDE ATENDEMOS · simplificada · onda 2 === */}
      <section className="py-16 md:py-24 bg-cc-green/95">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">Onde atendemos</h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-3 max-w-2xl mx-auto">
            Saímos da fábrica em Ivoti pra Vale do Rio dos Sinos, Serra Gaúcha e Litoral Norte · com equipe própria de instalação.
          </p>
          <p className="text-sm md:text-base text-cc-coral leading-relaxed mb-10 max-w-2xl mx-auto">
            Pergolado é cobertura exclusiva do Litoral Norte · de Imbé a Torres.
          </p>
          <Link
            href="/entregas"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-6 py-3 rounded-full font-medium text-sm transition-colors"
          >
            Ver cobertura completa →
          </Link>
        </div>
      </section>

      {/* FALA COM A GENTE */}
      <section className="py-16 md:py-24 bg-cc-green text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">Fala com a gente agora</h2>
          <p className="text-base text-white/85 mb-10">
            Manda foto da obra ou as medidas pelo WhatsApp · respondo com orçamento em 1 dia útil. Quem fala com você é o André, da Central.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            (51) 99669-1757
          </a>
          <p className="text-sm text-white/70 mt-6">
            Av. Bom Jardim, 149 · Loja 04 · Vista Alegre · Ivoti-RS
          </p>
        </div>
      </section>
    </>
  );
}
