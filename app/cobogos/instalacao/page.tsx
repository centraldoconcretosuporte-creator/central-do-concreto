import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const SITE_URL = "https://centraldoconcretoentrega.com.br";
const CANONICAL_URL = `${SITE_URL}/cobogos/instalacao`;
const WHATSAPP_URL = "https://wa.me/5551996691757";
const PAGE_TITLE =
  "Como Instalar Cobogó: Passo a Passo + Serviço da Central | Central do Concreto";
const PAGE_DESCRIPTION =
  "Como instalar cobogó passo a passo · fundação, prumo, argamassa específica, alinhamento e rejunte. A Central instala em 16 cidades no raio de 120 km a partir de Ivoti-RS.";
const OG_IMAGE = `${SITE_URL}/cluster-cobogos/cobogo-citadino-com-base-floreira-concreto-ivoti.webp`;

const faqs = [
  {
    q: "Posso usar argamassa comum pra assentar cobogó?",
    a: "Não. Argamassa de revestimento (a comum, saco azul de loja de material) tem retração diferente do cobogó · fissura em 3-6 meses. Use argamassa de assentamento (classificada P) · traço caseiro 1:4:3 (cimento : areia média peneirada : areia grossa) ou argamassa industrial específica fornecida pela Central junto com o pedido.",
  },
  {
    q: "Quanto tempo dura a instalação de um muro residencial de cobogó?",
    a: "Pedreiro autônomo experiente leva 4-7 dias úteis pra muro de 15 a 30 m² · obra inclui fundação, pilaretes intermediários, assentamento, rejunte e limpeza. Equipe profissional da Central faz o mesmo serviço em 2-5 dias úteis. Muros acima de 60 m² ou com altura acima de 2,5 metros pedem mais tempo.",
  },
  {
    q: "Preciso de pedreiro especialista em cobogó ou serve um pedreiro comum?",
    a: "Serve pedreiro comum experiente em alvenaria estrutural · cobogó NÃO exige especialização rara, mas exige rigor com prumo, argamassa correta e limpeza imediata. Pedreiros que nunca instalaram cobogó podem precisar de 1 fileira de prática antes de pegar ritmo. A Central também fornece equipe especializada que faz a instalação direta.",
  },
  {
    q: "Posso instalar cobogó na laje de cobertura como guarda-corpo?",
    a: "Sim, mas exige análise estrutural · cobogó assentado em laje vira carga distribuída de 110 a 200 kg/m² conforme modelo e altura. Confirme com o calculista da obra ou peça parecer técnico antes de começar. Cobogó como guarda-corpo também precisa altura mínima de 1,10 metro pela NBR 14718.",
  },
  {
    q: "Existe garantia da instalação feita pela Central?",
    a: "Sim. Toda instalação contratada com a Central tem garantia de 12 meses contra fissura por defeito de execução · não cobre danos por terceiros, intervenção posterior, recalque de aterro ou eventos extremos. A garantia é registrada por escrito junto com a nota fiscal do serviço.",
  },
];

const cidades = [
  "Ivoti",
  "Dois Irmãos",
  "Estância Velha",
  "Bom Princípio",
  "Lindolfo Collor",
  "São José do Hortêncio",
  "Presidente Lucena",
  "Novo Hamburgo",
  "Campo Bom",
  "Sapiranga",
  "Picada Café",
  "Morro Reuter",
  "Santa Maria do Herval",
  "Nova Petrópolis",
  "Canela",
  "Gramado",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cobogós",
          item: `${SITE_URL}/cobogos`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Como instalar cobogó",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "HowTo",
      "@id": `${CANONICAL_URL}#howto`,
      name: "Como instalar cobogó · passo a passo",
      description:
        "Instalação de cobogó em 5 passos: fundação, prumo + cantoneira, assentamento com argamassa específica, alinhamento + rejunte, limpeza final.",
      totalTime: "P5D",
      tool: [
        { "@type": "HowToTool", name: "Cantoneira de aço galvanizado" },
        { "@type": "HowToTool", name: "Desempenadeira de borracha" },
        { "@type": "HowToTool", name: "Linha de pedreiro" },
        { "@type": "HowToTool", name: "Nível alemão" },
      ],
      supply: [
        { "@type": "HowToSupply", name: "Cobogó de concreto pré-moldado" },
        {
          "@type": "HowToSupply",
          name: "Argamassa específica de assentamento (classificada P)",
        },
        { "@type": "HowToSupply", name: "Chumbador para fixação da cantoneira" },
      ],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Fundação corrida",
          text: "Base de concreto armado contínua com 40-60 cm de profundidade sob toda a linha do muro.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Prumo e cantoneira",
          text: "Cantoneira de aço galvanizado a cada 2 a 3 metros, fixada com chumbador, define a verticalidade da fileira inteira.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Assentamento com argamassa específica",
          text: "Argamassa traço 1:4:3 ou industrial classe P aplicada com desempenadeira · cobogó assentado fileira por fileira com linha de pedreiro.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Alinhamento e rejunte",
          text: "Conferência de prumo a cada metro · rejunte com argamassa fina e desempenadeira de borracha.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Limpeza final",
          text: "Pano úmido remove excesso de argamassa antes de endurecer · evita mancha permanente na face do cobogó.",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL_URL}#service`,
      name: "Instalação de cobogó",
      provider: {
        "@type": "LocalBusiness",
        name: "Central do Concreto",
        url: SITE_URL,
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: -29.62038,
          longitude: -51.16389,
        },
        geoRadius: 120000,
      },
      description:
        "Serviço completo de instalação de muro de cobogó · da fundação corrida ao rejunte e limpeza final · raio de 120 km a partir de Ivoti-RS.",
    },
  ],
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    locale: "pt_BR",
    siteName: "Central do Concreto",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 1200,
        alt: "Detalhe construtivo de instalação de cobogó · modelo Citadino com Base Floreira em concreto pré-moldado · cobogó assentado em base de floreira mostrando junta de argamassa e alinhamento · Central do Concreto Ivoti RS",
      },
    ],
  },
};

export default function CobogoInstalacaoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-4 pt-6 pb-2 text-sm"
      >
        <ol className="flex flex-wrap items-center gap-2 text-cc-gray-600">
          <li>
            <Link href="/" className="hover:text-cc-orange">
              Início
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/cobogos" className="hover:text-cc-orange">
              Cobogós
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li
            className="text-cc-gray-700 font-medium"
            aria-current="page"
          >
            Como instalar cobogó
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
        <Image
          src="/cluster-cobogos/cobogo-citadino-com-base-floreira-concreto-ivoti.webp"
          alt="Detalhe construtivo de instalação de cobogó · modelo Citadino com Base Floreira em concreto pré-moldado · cobogó assentado em base de floreira mostrando junta de argamassa e alinhamento · Central do Concreto Ivoti RS"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cc-black/35" />
        <div className="relative container mx-auto px-4 py-16 max-w-3xl text-white">
          <p className="text-cc-orange font-semibold mb-3 uppercase tracking-wide text-sm">
            Cobogós · Como instalar
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Como instalar cobogó · passo a passo + serviço de instalação da Central
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/95">
            Cinco etapas em sequência rígida e quatro erros que separam muro durável de muro com problema · ou contrate a equipe da Central no raio de 120 km a partir de Ivoti.
          </p>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(
              "Olá, quero falar sobre instalação de cobogó."
            )}`}
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Falar sobre instalação de cobogó
          </a>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Caminhão próprio
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Raio 120 km · 16 cidades
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded">
              Pintura em fábrica
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Eyebrow>Guia · Como instalar cobogó</Eyebrow>

        {/* TOC */}
        <aside
          aria-label="Índice deste guia"
          className="bg-cc-gray-50 border border-cc-gray-200 rounded-lg p-6 my-8"
        >
          <h2 className="text-base font-semibold text-cc-gray-700 mb-3 uppercase tracking-wide">
            Neste guia
          </h2>
          <ol className="space-y-2 text-cc-gray-700">
            <li>
              <a href="#como-instalar-cobogo" className="hover:text-cc-orange">
                Como instalar cobogó · 5 passos →
              </a>
            </li>
            <li>
              <a href="#material-necessario" className="hover:text-cc-orange">
                Material necessário antes de começar →
              </a>
            </li>
            <li>
              <a href="#erros-comuns" className="hover:text-cc-orange">
                Os 4 erros mais comuns →
              </a>
            </li>
            <li>
              <a href="#quando-contratar" className="hover:text-cc-orange">
                Quando vale contratar profissional →
              </a>
            </li>
            <li>
              <a href="#custo-instalacao" className="hover:text-cc-orange">
                Quanto custa o serviço da Central →
              </a>
            </li>
            <li>
              <a href="#como-funciona-servico" className="hover:text-cc-orange">
                Como funciona o serviço →
              </a>
            </li>
          </ol>
        </aside>

        {/* H2 1 */}
        <h2
          id="como-instalar-cobogo"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Como instalar cobogó · passo a passo em 5 etapas
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Instalar cobogó tem 5 etapas em sequência rígida: fundação corrida, marcação de prumo e cantoneira, assentamento com argamassa específica, alinhamento + rejunte, limpeza final.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A fundação corrida vem primeiro · base de concreto armado contínua sob toda a linha do muro, com profundidade mínima de 40 cm em solo firme e 60 cm em terreno com aterro recente ou inclinado. Largura da fundação acompanha a largura do cobogó escolhido · entre 8 e 12 cm pra maioria dos modelos.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Marcação de prumo é o passo mais decisivo · cantoneira de aço galvanizado a cada 2 a 3 metros, fixada com chumbador na fundação, define a verticalidade da fileira inteira. Erro de prumo nesse passo gera barriga em altura · 1 cm de desvio em 80 cm vira 5 cm em 4 metros de muro.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Assentamento usa argamassa específica · traço 1:4:3 (cimento : areia média peneirada : areia grossa) ou argamassa industrial classificada P (assentamento). Argamassa comum de revestimento NÃO serve · fissura em 6 meses por retração e diferença de absorção entre cobogó e base.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Alinhamento horizontal e rejunte fecham o serviço · linha de pedreiro entre cada fileira garante régua reta · rejunte com argamassa fina e desempenadeira de borracha preenche entre as peças sem manchar a face. Limpeza com pano úmido logo após o rejunte tira o excesso antes de endurecer.
        </p>
        {/* TODO polimento: SVG didático de 3 passos · fundação · prumo+cantoneira · argamassa+alinhamento · pendência registrada no briefing arquitetura S3 */}

        {/* H2 2 */}
        <h2
          id="material-necessario"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          O material que você precisa antes de assentar a primeira peça
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Antes de começar a instalar cobogó, separe: cobogós + argamassa específica + cantoneira de aço galvanizado + chumbadores + linha de pedreiro + desempenadeira de borracha + pano úmido pra limpeza.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Os cobogós você compra da Central · pedido feito pelo WhatsApp com modelo, quantidade e endereço de entrega. A argamassa específica também vem com o pedido (a Central fornece o traço documentado · evita trinca por argamassa errada). Cantoneira de aço galvanizado, chumbadores, linha de pedreiro e desempenadeira você compra em loja de material de construção comum · investimento de 80 a 150 reais pra obra residencial.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Reserve 10% a mais de cobogós além do calculado · quebras durante o assentamento são normais (3 a 7% conforme habilidade do assentador). O cobogó quebrado pode até virar arremate de canto · mas se você não comprou sobra, vai parar a obra esperando reposição.
        </p>

        {/* H2 3 */}
        <h2
          id="erros-comuns"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Os 4 erros que separam muro durável de muro com problema
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Quatro erros são responsáveis por mais de 80% dos defeitos em muros de cobogó: fundação rasa, argamassa errada, prumo torto e rejunte com sobra de argamassa.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Fundação rasa é o pior · cobogó sobre apenas base de pedra rachão ou contrapiso fino cede com chuva forte ou aterro recente. Solução é fundação corrida de concreto armado ancorada a 40-60 cm de profundidade, igual qualquer muro residencial.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Argamassa de revestimento (a comum, de saco azul de loja) NÃO assenta cobogó · a retração maior abre fissura entre a peça e a base em 3 a 6 meses. Use argamassa de assentamento (classe P), traço 1:4:3 caseiro ou industrial específica fornecida pela Central junto com o pedido.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Prumo torto na cantoneira inicial multiplica em altura · 1 cm de fora-de-prumo em 80 cm vira 5 cm em 4 metros. Use nível alemão de mão a cada peça e fio de prumo a cada metro de fileira concluída. Erros pequenos parecem invisíveis na hora mas saltam em fotos do muro pronto.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Rejunte com sobra de argamassa mancha a face do cobogó de forma quase irreversível em concreto natural · limpe imediatamente com pano úmido após cada metro de rejunte aplicado. Em cobogó pintado, a tinta protege parcialmente · em natural, mancha de cimento permanente.
        </p>

        {/* H2 4 */}
        <h2
          id="quando-contratar"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Quando vale contratar instalação profissional
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Vale contratar instalação profissional em três cenários: muro acima de 1,80 metro, projeto com mais de 30 m² de cobogó, ou prazo apertado (entrega contratada por outro serviço dependente).
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Muro alto exige cálculo de pilar intermediário, controle de prumo cumulativo e segurança no manuseio de peças em altura · serviço profissional resolve em 2-3 dias o que pedreiro autônomo demora 5-7 com risco de erro de prumo. Muros até 1,5 metro com até 15 m² de cobogó são confortáveis pra pedreiro experiente sozinho.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          A Central tem equipe própria de instalação no raio de 120 km · serviço completo da fundação ao rejunte. Orçamento personalizado por m² considerando altura, modelo escolhido, distância, complexidade de fundação e prazo. Mande planta ou medidas pelo WhatsApp · resposta em 1 dia útil.
        </p>

        {/* H2 5 */}
        <h2
          id="custo-instalacao"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Quanto custa o serviço de instalação da Central
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O custo do serviço de instalação depende de quatro variáveis: altura do muro, complexidade da fundação (terreno plano ou em desnível), distância do canteiro até Ivoti e prazo desejado.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Pra obras dentro de 50 km de Ivoti em terreno plano com altura até 2 metros, a faixa típica fica entre R$ 80 e R$ 140 por m² de cobogó instalado · inclui mão de obra, transporte e ferramentas. Acima de 80 km ou em desnível, soma de 15% a 30% pra cobrir frete da equipe e adicional técnico.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O orçamento vem detalhado · separação clara entre material (cobogó + argamassa + cantoneira), mão de obra (instalação + ajudante) e logística (frete + descarga). Sem pegadinha · sem adicional surpresa no fim. Pra pedir orçamento, mande pelo WhatsApp as medidas do muro (largura + altura + perímetro) e o modelo escolhido.
        </p>

        {/* H2 6 */}
        <h2
          id="como-funciona-servico"
          className="scroll-mt-24 text-3xl font-bold text-cc-gray-700 mt-12 mb-4"
        >
          Como funciona o serviço · da fundação à limpeza final
        </h2>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          O serviço de instalação da Central segue 6 passos em sequência fixa: visita técnica, fundação corrida, pilaretes intermediários, assentamento dos cobogós, rejunte + limpeza e entrega final.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Visita técnica gratuita marca início do processo · técnico mede o muro, avalia o terreno, fotografa, registra o modelo escolhido. Orçamento sai em 1 a 2 dias úteis após a visita. Aprovado o orçamento, agendamento entra na fila · prazo típico de 7 a 15 dias até o início da obra dependendo da estação.
        </p>
        <p className="text-cc-gray-700 leading-relaxed mb-4">
          Obra acontece em 2 a 5 dias úteis conforme tamanho · fundação no dia 1, pilaretes no dia 2, cobogós nos dias 3-4, rejunte + limpeza no dia 5. Entrega final inclui vassoura do canteiro e checagem visual do muro · seu pedreiro não precisa estar presente, mas pode acompanhar se quiser. Veja também a{" "}
          <a
            href="/cobogos/entrega"
            className="text-cc-orange underline hover:no-underline"
          >
            entrega de cobogó pra Serra Gaúcha
          </a>{" "}
          e os{" "}
          <a
            href="/cobogos/muro"
            className="text-cc-orange underline hover:no-underline"
          >
            modelos pra muro
          </a>
          .
        </p>
      </article>

      {/* CITY PILLS */}
      <section className="bg-cc-black py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-center">
            Entrega de cobogó pra muro · 16 cidades
          </h2>
          <p className="text-white/80 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            Raio de 120 km a partir de Ivoti-RS · caminhão próprio · descarga ao lado do canteiro de obra.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cidades.map((c) => (
              <a
                key={c}
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  `Olá! Quero falar sobre instalação de cobogó em ${c}.`
                )}`}
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-cc-whatsapp hover:border-cc-whatsapp hover:text-white px-4 py-2 rounded-full text-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {c}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-cc-gray-700 mb-8">
          Perguntas frequentes · instalação de cobogó
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border border-cc-gray-200 rounded-lg"
            >
              <summary className="cursor-pointer flex items-start justify-between gap-4 px-5 py-4 list-none">
                <h3 className="inline font-semibold text-cc-gray-700 leading-snug">
                  {f.q}
                </h3>
                <span className="text-cc-orange text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-cc-gray-700 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cc-black py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos definir o cobogó do seu muro?
          </h2>
          <p className="text-white/80 mb-8 text-lg leading-relaxed">
            Mande foto do local, tamanho aproximado do muro e cidade · respondemos com modelos sugeridos, preço unitário e prazo de entrega.
          </p>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(
              "Olá, quero falar sobre instalação de cobogó."
            )}`}
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg"
          >
            Falar agora pelo WhatsApp
          </a>
        </div>
      </section>

      {/* CROSS-LINK */}
      <section className="bg-white py-12 border-t border-cc-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-sm uppercase tracking-wide text-cc-gray-600 mb-5 text-center font-semibold">
            Explore mais da Central
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <Link
              href="/cobogos/entrega"
              className="text-cc-gray-700 hover:text-cc-orange py-3 transition-colors"
            >
              Entrega de cobogó →
            </Link>
            <Link
              href="/cobogos/muro"
              className="text-cc-gray-700 hover:text-cc-orange py-3 transition-colors"
            >
              Muros de cobogó →
            </Link>
            <Link
              href="/produtos/pergolado-de-concreto"
              className="text-cc-gray-700 hover:text-cc-orange py-3 transition-colors"
            >
              Pergolado de concreto →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
