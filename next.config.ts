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

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "centraldoconcretoentrega.com.br",
      },
    ],
  },
  async redirects() {
    return CIDADES_LITORAL_SLUGS.flatMap((slug) => [
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
    ]);
  },
};

export default nextConfig;
