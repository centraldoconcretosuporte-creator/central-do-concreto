import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const BANCO = "C:/Users/reusa/Desktop/002-Banco imagens Central Concreto-EXIF 100%";
const OUT = "C:/Users/reusa/central-do-concreto/public";

const jobs = [
  // ============== PERGOLADO ==============
  // Tipos
  {
    src: `${BANCO}/PERGOLADO DE CONCRETO/pergolado-concreto-central-concreto-ivoti-008.jpg`,
    dst: `${OUT}/produtos/pergolado/tipos/solarium.webp`,
    width: 800,
    height: 600,
    fit: "cover",
  },
  {
    src: `${BANCO}/PERGOLADO DE CONCRETO/pergolado-concreto-central-concreto-ivoti-002.jpg`,
    dst: `${OUT}/produtos/pergolado/tipos/gourmet.webp`,
    width: 800,
    height: 600,
    fit: "cover",
  },
  {
    src: `${BANCO}/PERGOLADO DE CONCRETO/pergolado-concreto-central-concreto-ivoti-001.jpg`,
    dst: `${OUT}/produtos/pergolado/tipos/hotelaria.webp`,
    width: 800,
    height: 600,
    fit: "cover",
  },
  // Combine
  {
    src: `${BANCO}/CENTRAL CONCRETO-PISO-ATERMICO-EXIF 100%/piso-atermico-aplicacao-piscina-urbana-cascata-007-central-concreto-ivoti.jpg`,
    dst: `${OUT}/produtos/combine/piso-atermico.webp`,
    width: 1200,
    height: 900,
    fit: "cover",
  },
  {
    src: `${BANCO}/Cobogós/WhatsApp Image 2026-04-16 at 18.52.18 (1).jpeg`,
    dst: `${OUT}/produtos/combine/cobogo.webp`,
    width: 600,
    height: 600,
    fit: "cover",
  },
  {
    src: `${BANCO}/Banco-de-Imagens/Muros/selecionadas/muro-aplicacao-022.jpg`,
    dst: `${OUT}/produtos/combine/muro.webp`,
    width: 600,
    height: 600,
    fit: "cover",
  },
  {
    src: `${BANCO}/Banco-de-Imagens/Revestimentos/Rock-Face-Natural/rock-face-natural-aplicacao-01.jpg`,
    dst: `${OUT}/produtos/combine/revestimentos.webp`,
    width: 600,
    height: 600,
    fit: "cover",
  },
  // Pergolado hero + cobertura
  {
    src: `${BANCO}/PERGOLADO DE CONCRETO/pergolado-concreto-central-concreto-ivoti-008.jpg`,
    dst: `${OUT}/produtos/pergolado/hero/pergolado-litoral-hero.webp`,
    width: 1920,
    height: 1080,
    fit: "cover",
    quality: 80,
  },
  {
    src: `${BANCO}/PERGOLADO DE CONCRETO/pergolado-concreto-central-concreto-ivoti-010.jpg`,
    dst: `${OUT}/produtos/pergolado/conhecemos-litoral.webp`,
    width: 600,
    height: 600,
    fit: "cover",
  },
  // OG pergolado litoral
  {
    src: `${BANCO}/PERGOLADO DE CONCRETO/pergolado-concreto-central-concreto-ivoti-008.jpg`,
    dst: `${OUT}/og/pergolado-litoral.jpg`,
    width: 1200,
    height: 630,
    fit: "cover",
    format: "jpeg",
    quality: 85,
  },

  // ============== HOME ==============
  {
    src: `${BANCO}/PERGOLADO DE CONCRETO/pergolado-concreto-central-concreto-ivoti-007.jpg`,
    dst: `${OUT}/home/hero-fabrica.webp`,
    width: 1920,
    height: 1080,
    fit: "cover",
    quality: 80,
  },
  {
    src: `${BANCO}/PERGOLADO DE CONCRETO/pergolado-concreto-central-concreto-ivoti-008.jpg`,
    dst: `${OUT}/home/produtos/pergolados.webp`,
    width: 800,
    height: 800,
    fit: "cover",
  },
  {
    src: `${BANCO}/CENTRAL CONCRETO-PISO-ATERMICO-EXIF 100%/piso-atermico-aplicacao-area-gourmet-completa-016-central-concreto-ivoti.jpg`,
    dst: `${OUT}/home/produtos/piso-atermico.webp`,
    width: 800,
    height: 800,
    fit: "cover",
  },
  {
    src: `${BANCO}/Banco-de-Imagens/tubo-concreto-catalogo-01.jpg`,
    dst: `${OUT}/home/produtos/tubos.webp`,
    width: 600,
    height: 400,
    fit: "cover",
  },
  {
    src: `${BANCO}/Banco-de-Imagens/Muros/selecionadas/muro-aplicacao-018.jpg`,
    dst: `${OUT}/home/produtos/muros.webp`,
    width: 600,
    height: 400,
    fit: "cover",
  },
  // Fossa: sem foto específica · TODO foto definitiva quando fotografar in loco
  {
    src: `${BANCO}/Banco-de-Imagens/central-concreto-estoque-04.jpg`,
    dst: `${OUT}/home/produtos/fossa.webp`,
    width: 600,
    height: 400,
    fit: "cover",
  },
  // OG home
  {
    src: `${BANCO}/PERGOLADO DE CONCRETO/pergolado-concreto-central-concreto-ivoti-008.jpg`,
    dst: `${OUT}/og/home.jpg`,
    width: 1200,
    height: 630,
    fit: "cover",
    format: "jpeg",
    quality: 85,
  },

  // ============== SOBRE ==============
  {
    src: `${BANCO}/Banco-de-Imagens/central-concreto-estoque-01.jpg`,
    dst: `${OUT}/sobre/hero-fabrica.webp`,
    width: 1920,
    height: 800,
    fit: "cover",
    quality: 80,
  },
  {
    src: `${BANCO}/Banco-de-Imagens/central-concreto-estoque-02.jpg`,
    dst: `${OUT}/sobre/historia.webp`,
    width: 800,
    height: 600,
    fit: "cover",
  },

  // ============== CONTATO ==============
  {
    src: `${BANCO}/estoque pronta entrega-hero-1.jpeg`,
    dst: `${OUT}/contato/hero.webp`,
    width: 1920,
    height: 800,
    fit: "cover",
    quality: 80,
  },

  // ============== HEROS DOS STUBS DE PRODUTO ==============
  {
    src: `${BANCO}/caixas de passagem-2.jpeg`,
    dst: `${OUT}/produtos/caixas/hero.webp`,
    width: 600,
    height: 400,
    fit: "cover",
  },
  // Postes: sem foto específica · TODO foto definitiva
  {
    src: `${BANCO}/Banco-de-Imagens/central-concreto-estoque-05.jpg`,
    dst: `${OUT}/produtos/postes/hero.webp`,
    width: 600,
    height: 400,
    fit: "cover",
  },
  // Blocos: sem foto específica · TODO foto definitiva
  {
    src: `${BANCO}/Banco-de-Imagens/central-concreto-estoque-06.jpg`,
    dst: `${OUT}/produtos/blocos/hero.webp`,
    width: 600,
    height: 400,
    fit: "cover",
  },
  {
    src: `${BANCO}/Banco-de-Imagens/pavs-concreto-catalogo-01.jpg`,
    dst: `${OUT}/produtos/pavs/hero.webp`,
    width: 600,
    height: 400,
    fit: "cover",
  },
];

for (const job of jobs) {
  await mkdir(dirname(job.dst), { recursive: true });
  let pipeline = sharp(job.src).resize(job.width, job.height, {
    fit: job.fit,
    position: "center",
  });

  if (job.format === "jpeg") {
    pipeline = pipeline.jpeg({ quality: job.quality ?? 85, mozjpeg: true });
  } else {
    pipeline = pipeline.webp({ quality: job.quality ?? 82 });
  }

  await pipeline.toFile(job.dst);
  console.log(`✓ ${job.dst}`);
}
console.log("Done.");
