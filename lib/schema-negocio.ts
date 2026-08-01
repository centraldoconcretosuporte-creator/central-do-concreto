import { CIDADES_ATENDIMENTO } from "@/lib/cidades-atendimento";

export const SITE_URL = "https://centraldoconcretoentrega.com.br";

// Fonte canônica dos nós de entidade do negócio.
// Toda página que declara entidade espalha NEGOCIO_NODES no @graph · mesmo @id
// com dados idênticos consolida sem ambiguidade e evita referência cruzada por
// @id entre páginas, que não tem resolução garantida.
export const NEGOCIO_NODES = [
  {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "Central do Concreto",
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/cc-logo.png`,
      "width": 293,
      "height": 345,
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61583779437292",
      "https://www.instagram.com/centraldoconcretors/",
      "https://share.google/FcEUm0ex15p80uGNb",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5551996691757",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese",
    },
  },
  {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#central`,
    "name": "Central do Concreto",
    "description":
      "Pré-moldados e artefatos de concreto pra obra civil, drenagem e pergolados. Fornecimento direto da fábrica em Ivoti-RS com entrega própria na Serra Gaúcha e no Vale dos Sinos, dentro de raio de 120 km.",
    "url": SITE_URL,
    "image": `${SITE_URL}/cc-logo.png`,
    "telephone": "+5551996691757",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Bom Jardim, 149, Loja 02, Vista Alegre",
      "addressLocality": "Ivoti",
      "addressRegion": "RS",
      "postalCode": "93900-000",
      "addressCountry": "BR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -29.62038,
      "longitude": -51.16389,
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00",
      },
    ],
    "areaServed": CIDADES_ATENDIMENTO.map((c) => ({
      "@type": "City",
      "name": c.nome,
    })),
    "parentOrganization": { "@id": `${SITE_URL}/#organization` },
  },
];
