import type { MetadataRoute } from "next";
import { CIDADES_LITORAL } from "@/lib/cidades-litoral";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: SITE_URL, lastModified: now, priority: 1.0 },
    { url: `${SITE_URL}/produtos`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/produtos/pergolado-de-concreto`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/produtos/piso-atermico`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/produtos/tubos`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/produtos/caixas-de-passagem`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/produtos/muros-e-gradis`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/produtos/postes-e-meio-fio`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/produtos/blocos`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/produtos/pavs`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/produtos/fossa-e-filtro`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/sobre`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/contato`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/entregas`, lastModified: now, priority: 0.7 },
  ];

  const cidadesRoutes = CIDADES_LITORAL.map((c) => ({
    url: `${SITE_URL}/atendimento/${c.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  return [...staticRoutes, ...cidadesRoutes];
}
