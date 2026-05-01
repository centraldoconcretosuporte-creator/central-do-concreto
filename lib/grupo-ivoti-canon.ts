/**
 * Canon do Grupo Ivoti · single source of truth
 *
 * Define o texto oficial do grupo usado em todos os 3 sites (BJ, CC, Telhas).
 * Se mudar, muda aqui — todos os sites que consumirem refletem a alteração.
 *
 * Última revisão: 2026-05-01
 */

export const GRUPO_IVOTI_CANON = {
  slogan: "Atendemos obras completas — do piso ao telhado.",

  tese: "Grupo que atua em construção e paisagismo na Serra Gaúcha",

  h2Bj: "Três empresas, um só lugar pra resolver",
  h2Cc: "Três empresas · um só lugar pra resolver",
  h2Telhas: "Três empresas, um só lugar pra resolver",

  eyebrow: "Sobre o grupo",

  empresas: {
    bomJardim: {
      nome: "Bom Jardim Ivoti",
      descricaoCurta: "Pedras, madeiras e revestimentos",
      url: "https://bomjardimivoti.com.br",
    },
    centralDoConcreto: {
      nome: "Central do Concreto",
      descricaoCurta: "Pergolados e pré-moldados de concreto",
      url: "https://central-do-concreto-br6r.vercel.app",
    },
    telhas: {
      nome: "Telhas Ivoti",
      descricaoCurta: "Telha sanduíche com isolamento térmico",
      url: "https://telhasivoti.com.br",
    },
  },

  ctaBotao: {
    label: "Conheça o grupo →",
    href: "/sobre",
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
  const outras = (Object.keys(c) as Array<keyof typeof c>).filter((k) => k !== empresaPrimeira);

  const parteOutras = outras
    .map((k) => `a ${c[k].nome} (${c[k].descricaoCurta.toLowerCase()})`)
    .join(" e ");

  return `A ${primeira.nome} faz parte do Grupo Ivoti, que atua em construção e paisagismo na Serra Gaúcha. Junto com ${parteOutras}, atendemos obras completas — do piso ao telhado.`;
}
