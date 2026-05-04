export type Regiao = "litoral" | "serra";

export type Cidade = {
  slug: string;
  nome: string;
  regiao: Regiao;
  distanciaKm: string;
  tempoEstimado: string;
  // Cidades vizinhas pra usar no copy "atendemos X e Y"
  vizinhas: string[];
  // Tipo de mercado predominante · ajuda na contextualização do copy
  perfil: string;
};

export const CIDADES_LITORAL: Cidade[] = [
  {
    slug: "imbe",
    nome: "Imbé",
    regiao: "litoral",
    distanciaKm: "145 km",
    tempoEstimado: "1h50",
    vizinhas: ["Tramandaí"],
    perfil: "Residência de veraneio e segunda casa",
  },
  {
    slug: "tramandai",
    nome: "Tramandaí",
    regiao: "litoral",
    distanciaKm: "140 km",
    tempoEstimado: "1h45",
    vizinhas: ["Imbé", "Xangri-Lá"],
    perfil: "Residência de veraneio, hotel e pousada",
  },
  {
    slug: "xangri-la",
    nome: "Xangri-Lá",
    regiao: "litoral",
    distanciaKm: "165 km",
    tempoEstimado: "2h",
    vizinhas: ["Atlântida", "Capão da Canoa"],
    perfil: "Condomínio fechado, residência de luxo",
  },
  {
    slug: "atlantida",
    nome: "Atlântida",
    regiao: "litoral",
    distanciaKm: "168 km",
    tempoEstimado: "2h",
    vizinhas: ["Xangri-Lá", "Capão da Canoa"],
    perfil: "Condomínio fechado, residência de veraneio",
  },
  {
    slug: "capao-da-canoa",
    nome: "Capão da Canoa",
    regiao: "litoral",
    distanciaKm: "170 km",
    tempoEstimado: "2h05",
    vizinhas: ["Atlântida", "Capão Novo"],
    perfil: "Hotel, pousada e residência de veraneio",
  },
  {
    slug: "capao-novo",
    nome: "Capão Novo",
    regiao: "litoral",
    distanciaKm: "175 km",
    tempoEstimado: "2h10",
    vizinhas: ["Capão da Canoa", "Arroio do Sal"],
    perfil: "Residência de veraneio e empreendimento",
  },
  {
    slug: "arroio-do-sal",
    nome: "Arroio do Sal",
    regiao: "litoral",
    distanciaKm: "200 km",
    tempoEstimado: "2h30",
    vizinhas: ["Capão Novo", "Torres"],
    perfil: "Residência de veraneio, casa de praia",
  },
  {
    slug: "torres",
    nome: "Torres",
    regiao: "litoral",
    distanciaKm: "210 km",
    tempoEstimado: "2h45",
    vizinhas: ["Arroio do Sal"],
    perfil: "Hotel, pousada, residência de veraneio",
  },
];

// Defaults genéricos pras cidades de Serra · conteúdo único vem em rodada futura.
// distanciaKm/tempoEstimado/vizinhas/perfil ainda não preenchidos · usar fallback "—" quando faltar.
const SERRA_DEFAULT_PERFIL = "Residência, comércio e obra civil em Serra Gaúcha";

export const CIDADES_SERRA: Cidade[] = [
  {
    slug: "ivoti",
    nome: "Ivoti",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "gramado",
    nome: "Gramado",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "canela",
    nome: "Canela",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "nova-petropolis",
    nome: "Nova Petrópolis",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "dois-irmaos",
    nome: "Dois Irmãos",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "picada-cafe",
    nome: "Picada Café",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "feliz",
    nome: "Feliz",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "bom-principio",
    nome: "Bom Princípio",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "linha-nova",
    nome: "Linha Nova",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "harmonia",
    nome: "Harmonia",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "tres-coroas",
    nome: "Três Coroas",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "morro-reuter",
    nome: "Morro Reuter",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "novo-hamburgo",
    nome: "Novo Hamburgo",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
  {
    slug: "santa-maria-do-herval",
    nome: "Santa Maria do Herval",
    regiao: "serra",
    distanciaKm: "—",
    tempoEstimado: "—",
    vizinhas: [],
    perfil: SERRA_DEFAULT_PERFIL,
  },
];

export const CIDADES_ATENDIMENTO: Cidade[] = [
  ...CIDADES_LITORAL,
  ...CIDADES_SERRA,
];

export function getCidade(slug: string): Cidade | undefined {
  return CIDADES_ATENDIMENTO.find((c) => c.slug === slug);
}
