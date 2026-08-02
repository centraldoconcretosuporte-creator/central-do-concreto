import type { MetadataRoute } from "next";
import { CIDADES_ATENDIMENTO } from "@/lib/cidades-atendimento";

const SITE_URL = "https://centraldoconcretoentrega.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/tubo-de-concreto`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/mourao-de-concreto`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/tubo-de-concreto/tipos-de-encaixe`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tubo-de-concreto/classes-de-carga`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tubo-de-concreto/diametros`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tubo-de-concreto/tubo-dreno`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tubo-de-concreto/aplicacoes`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/produtos`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${SITE_URL}/produtos/pergolado-de-concreto`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${SITE_URL}/produtos/piso-atermico`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/produtos/caixas-de-passagem`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/produtos/muros-e-gradis`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/produtos/postes-e-meio-fio`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/produtos/blocos`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/produtos/pavs`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/produtos/fossa-e-filtro`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/produtos/revestimentos-de-concreto`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/artefatos-de-cimento`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/cobogos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/revestimentos-externos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/revestimentos-externos/rock-face`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/revestimentos-externos/moledo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/revestimentos-externos/diamante-3d`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/revestimentos-externos/mosaico-3d`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/revestimentos-externos/placa-cimenticia`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/revestimentos-externos/ripado-cimenticio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cobogos/fachada`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cobogos/muro`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cobogos/pintado-ou-natural`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cobogos/instalacao`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cobogos/entrega`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/sobre`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contato`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/entregas`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const cidadesRoutes: MetadataRoute.Sitemap = CIDADES_ATENDIMENTO.map((c) => ({
    url: `${SITE_URL}/pre-moldados/${c.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...cidadesRoutes];
}
