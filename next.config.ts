import path from "path";
import type { NextConfig } from "next";

const CIDADES_LITORAL_SLUGS = [
  "imbe",
  "tramandai",
  "xangri-la",
  "atlantida",
  "capao-da-canoa",
  "capao-novo",
  "arroio-do-sal",
  "torres",
];

// Redirects 301 das URLs do site WordPress antigo · preservar autoridade de SEO
// permanent: true → Next.js emite 308 (equivalente permanente de 301 que preserva o método HTTP)
const REDIRECTS_SITE_ANTIGO: Array<{ source: string; destination: string }> = [
  { source: "/bloco", destination: "/produtos/blocos" },
  { source: "/fossa-e-filtro", destination: "/produtos/fossa-e-filtro" },
  { source: "/pavs", destination: "/produtos/pavs" },
  { source: "/caixaspassagem", destination: "/produtos/caixas-de-passagem" },
  { source: "/tubos", destination: "/produtos/tubos" },
  { source: "/muros-e-gradis", destination: "/produtos/muros-e-gradis" },
  { source: "/postes", destination: "/produtos/postes-e-meio-fio" },
  {
    source: "/tubo-de-concreto-200-mm-20-cm-em-ivoti-drenagem-residencial",
    destination: "/tubo-de-concreto",
  },
  {
    source: "/drenagem-infraestrutura-tubos-concreto-ivoti",
    destination: "/tubo-de-concreto",
  },
  { source: "/tubos-de-concreto-ivoti", destination: "/tubo-de-concreto" },
  { source: "/tubo-concreto", destination: "/tubo-de-concreto" },
  { source: "/rotas-de-entrega-serra-gaucha", destination: "/entregas" },
  { source: "/politica-de-devolucao", destination: "/contato" },
  { source: "/gramado-e-canela_meio", destination: "/pre-moldados/gramado" },
  { source: "/gramado-e-canela_fundo", destination: "/pre-moldados/gramado" },
  { source: "/gramado-canela-meio", destination: "/pre-moldados/gramado" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "centraldoconcretoentrega.com.br",
      },
    ],
  },
  async redirects() {
    return [
      ...CIDADES_LITORAL_SLUGS.flatMap((slug) => [
        {
          source: `/atendimento/${slug}`,
          destination: `/pre-moldados/${slug}`,
          permanent: true,
        },
        {
          source: `/atendimento/${slug}/`,
          destination: `/pre-moldados/${slug}`,
          permanent: true,
        },
      ]),
      ...REDIRECTS_SITE_ANTIGO.flatMap((r) => [
        { source: r.source, destination: r.destination, permanent: true },
        { source: `${r.source}/`, destination: r.destination, permanent: true },
      ]),
    ];
  },
};

export default nextConfig;
