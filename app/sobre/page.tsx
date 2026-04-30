import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";
const WHATSAPP_URL = "https://wa.me/5551996691757";

export const metadata: Metadata = {
  title: "Sobre · Central do Concreto · Fábrica em Ivoti-RS",
  description:
    "História, missão e equipe da Central do Concreto. Fabricante de artefatos de concreto em Ivoti-RS · Grupo Ivoti.",
  alternates: { canonical: `${SITE_URL}/sobre` },
};

const pilares = [
  {
    titulo: "Direto da fábrica",
    desc: "Sem intermediário · preço de fábrica · prazo controlado pela própria produção.",
  },
  {
    titulo: "Normas técnicas",
    desc: "Concreto armado calculado conforme especificação. Resistência testada · garantia.",
  },
  {
    titulo: "Equipe própria de instalação",
    desc: "Não terceirizamos a obra. Nossa equipe vai até o local · monta · entrega pronto.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="relative w-full min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/sobre/hero-fabrica.webp"
          alt="Fábrica da Central do Concreto"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-green/75" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Sobre a Central do Concreto
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Fábrica em Ivoti-RS · pré-moldados de concreto com normas técnicas e equipe própria de
            instalação.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-cc-gray-200">
            <Image
              src="/sobre/historia.webp"
              alt="Equipe da Central do Concreto"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <Eyebrow className="mb-4">Nossa história</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium text-cc-green mb-6 leading-tight">
              Direto da fábrica · sem atravessador
            </h2>
            <p className="text-base text-cc-gray-600 leading-relaxed mb-4">
              A Central do Concreto produz artefatos de concreto pré-moldado em Ivoti-RS. Atendemos
              construtoras, prefeituras e obras residenciais com pergolados, tubos de drenagem,
              fossas, muros e pisantes.
            </p>
            <p className="text-base text-cc-gray-600 leading-relaxed">
              Faz parte do Grupo Ivoti junto da Bom Jardim Ivoti e da Telhas Ivoti · três empresas
              no mesmo endereço pra resolver da estrutura ao acabamento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cc-cream">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <Eyebrow className="mb-4 justify-center">Como trabalhamos</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium text-cc-green">Três pilares · sempre</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {pilares.map((p) => (
              <div key={p.titulo} className="bg-white border border-cc-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-medium text-cc-green mb-3">{p.titulo}</h3>
                <p className="text-sm text-cc-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cc-green text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">Quer conversar?</h2>
          <p className="text-base text-white/85 mb-10">Falamos pelo WhatsApp · resposta rápida.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            (51) 99669-1757
          </a>
        </div>
      </section>
    </>
  );
}
