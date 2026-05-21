import type { MetadataRoute } from "next";
import { CIDADES_ATENDIMENTO } from "@/lib/cidades-atendimento";

const SITE_URL = "https://centraldoconcretoentrega.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/tubo-de-concreto`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/tubo-de-concreto/tipos-de-encaixe`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tubo-de-concreto/classes-de-carga`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tubo-de-concreto/diametros`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tubo-de-concreto/tubo-dreno`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tubo-de-concreto/aplicacoes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/produtos`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${SITE_URL}/produtos/pergolado-de-concreto`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${SITE_URL}/produtos/piso-atermico`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/produtos/tubos`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/produtos/caixas-de-passagem`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/produtos/muros-e-gradis`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/produtos/postes-e-meio-fio`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/produtos/blocos`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/produtos/pavs`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/produtos/fossa-e-filtro`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/produtos/revestimentos-de-concreto`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/produtos/cobogos`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/sobre`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/entregas`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const cidadesRoutes: MetadataRoute.Sitemap = CIDADES_ATENDIMENTO.map((c) => ({
    url: `${SITE_URL}/pre-moldados/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...cidadesRoutes];
}
