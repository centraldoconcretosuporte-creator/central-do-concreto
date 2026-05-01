export type CidadeLitoral = {
  slug: string;
  nome: string;
  distanciaKm: string;
  tempoEstimado: string;
  // Cidade vizinha pra usar no copy "atendemos X e Y"
  vizinhas: string[];
  // Tipo de mercado predominante · ajuda na contextualização do copy
  perfil: string;
};

export const CIDADES_LITORAL: CidadeLitoral[] = [
  {
    slug: "imbe",
    nome: "Imbé",
    distanciaKm: "145 km",
    tempoEstimado: "1h50",
    vizinhas: ["Tramandaí"],
    perfil: "Residência de veraneio e segunda casa",
  },
  {
    slug: "tramandai",
    nome: "Tramandaí",
    distanciaKm: "140 km",
    tempoEstimado: "1h45",
    vizinhas: ["Imbé", "Xangri-Lá"],
    perfil: "Residência de veraneio, hotel e pousada",
  },
  {
    slug: "xangri-la",
    nome: "Xangri-Lá",
    distanciaKm: "165 km",
    tempoEstimado: "2h",
    vizinhas: ["Atlântida", "Capão da Canoa"],
    perfil: "Condomínio fechado, residência de luxo",
  },
  {
    slug: "atlantida",
    nome: "Atlântida",
    distanciaKm: "168 km",
    tempoEstimado: "2h",
    vizinhas: ["Xangri-Lá", "Capão da Canoa"],
    perfil: "Condomínio fechado, residência de veraneio",
  },
  {
    slug: "capao-da-canoa",
    nome: "Capão da Canoa",
    distanciaKm: "170 km",
    tempoEstimado: "2h05",
    vizinhas: ["Atlântida", "Capão Novo"],
    perfil: "Hotel, pousada e residência de veraneio",
  },
  {
    slug: "capao-novo",
    nome: "Capão Novo",
    distanciaKm: "175 km",
    tempoEstimado: "2h10",
    vizinhas: ["Capão da Canoa", "Arroio do Sal"],
    perfil: "Residência de veraneio e empreendimento",
  },
  {
    slug: "arroio-do-sal",
    nome: "Arroio do Sal",
    distanciaKm: "200 km",
    tempoEstimado: "2h30",
    vizinhas: ["Capão Novo", "Torres"],
    perfil: "Residência de veraneio, casa de praia",
  },
  {
    slug: "torres",
    nome: "Torres",
    distanciaKm: "210 km",
    tempoEstimado: "2h45",
    vizinhas: ["Arroio do Sal"],
    perfil: "Hotel, pousada, residência de veraneio",
  },
];

export function getCidade(slug: string): CidadeLitoral | undefined {
  return CIDADES_LITORAL.find((c) => c.slug === slug);
}
