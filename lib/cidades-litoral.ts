export type CidadeLitoral = {
  slug: string;
  nome: string;
  distanciaKm: string;
  tempoEstimado: string;
  descricao?: string;
};

export const CIDADES_LITORAL: CidadeLitoral[] = [
  {
    slug: "xangri-la",
    nome: "Xangri-Lá",
    distanciaKm: "165 km",
    tempoEstimado: "2h",
    descricao:
      "Cobertura exclusiva CC · pergolado em residência de veraneio e condomínio fechado.",
  },
  { slug: "capao-da-canoa", nome: "Capão da Canoa", distanciaKm: "170 km", tempoEstimado: "2h05" },
  { slug: "atlantida", nome: "Atlântida", distanciaKm: "168 km", tempoEstimado: "2h" },
  { slug: "capao-novo", nome: "Capão Novo", distanciaKm: "175 km", tempoEstimado: "2h10" },
  { slug: "pinhal", nome: "Pinhal", distanciaKm: "150 km", tempoEstimado: "1h50" },
  { slug: "tramandai", nome: "Tramandaí", distanciaKm: "140 km", tempoEstimado: "1h45" },
  { slug: "imbe", nome: "Imbé", distanciaKm: "145 km", tempoEstimado: "1h50" },
  { slug: "cidreira", nome: "Cidreira", distanciaKm: "130 km", tempoEstimado: "1h45" },
  { slug: "torres", nome: "Torres", distanciaKm: "210 km", tempoEstimado: "2h45" },
  { slug: "arroio-do-sal", nome: "Arroio do Sal", distanciaKm: "200 km", tempoEstimado: "2h30" },
];

export function getCidade(slug: string): CidadeLitoral | undefined {
  return CIDADES_LITORAL.find((c) => c.slug === slug);
}
