/**
 * Canon do Grupo Ivoti · single source of truth
 *
 * Define o texto oficial do grupo usado em todos os 3 sites (BJ, CC, Telhas).
 * Se mudar, muda aqui — todos os sites que consumirem refletem.
 *
 * Referência canônica: https://bomjardimivoti.com.br/nosso-grupo
 *
 * Última revisão: 2026-05-01
 */

export const GRUPO_IVOTI_CANON = {
  // Slogan âncora · usado em todos os sites
  slogan: "Atendemos obras completas — do piso ao telhado.",

  // Variação alternativa do slogan · usada na página dedicada
  sloganLongo: "Obra completa — do alicerce à cobertura.",

  // Tese do grupo
  tese: "Grupo que atua em construção e paisagismo na Serra Gaúcha",

  // H2 da seção "Sobre o grupo" · varia por estilo do site
  h2Bj: "Três empresas, um só lugar pra resolver",
  h2Cc: "Três empresas · um só lugar pra resolver",
  h2Telhas: "Três empresas, um só lugar pra resolver",

  // Eyebrow · igual nos 3 sites
  eyebrow: "Sobre o grupo",

  // Empresas · agora com campos completos pra cards detalhados e futura página /nosso-grupo
  empresas: {
    bomJardim: {
      nome: "Bom Jardim Ivoti",
      tagline: "Pedras, madeiras e revestimentos",
      descricaoCurta: "Pedras, madeiras e revestimentos", // legado · não remover
      subtitulo: "Loja física em Ivoti com pedras, madeiras, revestimentos e paisagismo.",
      descricao: "A loja física de quem quer ver, tocar e escolher. Expõe revestimentos de concreto (Rock Face, Moledo, Mosaico 3D), pedras naturais, seixos decorativos, pisantes atérmicos, madeiras tratadas e pergolados pré-moldados. Atende toda a Serra Gaúcha com retirada em Ivoti ou entrega no local.",
      endereco: "Av. Bom Jardim, 149 · Loja 4 · Vista Alegre",
      whatsapp: "(51) 98942-2316",
      whatsappLink: "https://wa.me/5551989422316",
      site: "bomjardimivoti.com.br",
      url: "https://bomjardimivoti.com.br",
    },
    centralDoConcreto: {
      nome: "Central do Concreto",
      tagline: "Pergolados e pré-moldados de concreto",
      descricaoCurta: "Pergolados e pré-moldados de concreto", // legado
      subtitulo: "Pré-moldados de concreto fabricados em Ivoti.",
      descricao: "Fabricante direto de artefatos de concreto: pergolados, pisantes atérmicos, muros pré-moldados, tubos, pavimentos intertravados (paver), calhas e piso tátil. Produz sob normas técnicas, entrega em Ivoti e região. Para obras que precisam de estrutura pronta e duradoura.",
      endereco: "Av. Bom Jardim, 149 · Loja 2 · Vista Alegre",
      whatsapp: "(51) 99669-1757",
      whatsappLink: "https://wa.me/5551996691757",
      site: "centraldoconcretoentrega.com.br",
      url: "https://central-do-concreto-br6r.vercel.app",
    },
    telhas: {
      nome: "Telhas Ivoti",
      tagline: "Telha sanduíche com isolamento térmico",
      descricaoCurta: "Telha sanduíche com isolamento térmico", // legado
      subtitulo: "Telhas metálicas com corte sob medida e instalação.",
      descricao: "Revenda especializada em telhas metálicas — linhas TP40, TP25 e Colonial, nas versões simples, sanduíche com EPS e forro integrado. Oito cores disponíveis, duas espessuras (0,43 e 0,50mm), entrega em até 3 dias úteis direto da fábrica. Instalação opcional com equipe própria e a redução de até 8°C na temperatura do ambiente coberto.",
      endereco: "Av. Bom Jardim, 149 · Loja 3 · Vista Alegre",
      whatsapp: "(51) 99529-9826",
      whatsappLink: "https://wa.me/5551995299826",
      site: "telhasivoti.com.br",
      url: "https://telhasivoti.com.br",
    },
  },

  // Página canônica do grupo · BJ /nosso-grupo
  paginaGrupo: {
    label: "Conheça o grupo →",
    href: "https://bomjardimivoti.com.br/nosso-grupo",
  },

  // ===== Compatibilidade com versão anterior =====
  // ctaBotao mantido pra não quebrar import legado · agora aponta pra paginaGrupo
  ctaBotao: {
    label: "Conheça o grupo →",
    href: "https://bomjardimivoti.com.br/nosso-grupo",
  },
} as const;

/**
 * Helper: gera o parágrafo descritivo da seção "Sobre o grupo" para cada site.
 *
 * Cada site é o "primeiro" no parágrafo (a empresa que está falando).
 * As outras duas são citadas com descrição entre parênteses.
 */
export function paragrafoGrupo(empresaPrimeira: "bomJardim" | "centralDoConcreto" | "telhas"): string {
  const c = GRUPO_IVOTI_CANON.empresas;
  const primeira = c[empresaPrimeira];
  const outras = (Object.keys(c) as Array<keyof typeof c>).filter(k => k !== empresaPrimeira);

  const parteOutras = outras
    .map(k => `a ${c[k].nome} (${c[k].descricaoCurta.toLowerCase()})`)
    .join(" e ");

  return `A ${primeira.nome} faz parte do Grupo Ivoti, que atua em construção e paisagismo na Serra Gaúcha. Junto com ${parteOutras}, atendemos obras completas — do piso ao telhado.`;
}
