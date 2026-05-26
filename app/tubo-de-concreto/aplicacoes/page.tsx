import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

const CANONICAL_URL =
  "https://centraldoconcretoentrega.com.br/tubo-de-concreto/aplicacoes";
const WHATSAPP_URL = "https://wa.me/5551996691757";

const PAGE_TITLE =
  "Aplicações do tubo de concreto: onde se usa e o que pedir em cada obra | Central do Concreto";
const PAGE_DESCRIPTION =
  "Veja onde se usa o tubo de concreto — da entrada de propriedade à galeria pluvial urbana, do esgoto sanitário à fossa séptica — e saiba o que pedir em cada caso. Central do Concreto · Ivoti-RS.";

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
  },
};

const faqs = [
  {
    q: "Posso usar manilha de concreto na entrada da minha propriedade?",
    a: "Sim. A entrada de carro que cruza a sarjeta usa manilha de Ø30 a Ø40 cm na maioria dos casos. A Central tem essa faixa em pronta entrega.",
  },
  {
    q: "Qual a diferença entre tubo de concreto e manilha?",
    a: "Não há diferença. Manilha é como o tubo de concreto é conhecido no balcão e em zona rural — vocabulário popular. A norma ABNT chama de tubo de concreto de seção circular. Os dois termos referem à mesma peça.",
  },
  {
    q: "A Central trabalha com junta elástica para esgoto sanitário?",
    a: "Não. A Central trabalha com junta rígida — adequada para drenagem pluvial, fossa séptica, galeria de loteamento e a maioria das aplicações em propriedade. Para esgoto sanitário pressurizado, a peça correta é a de junta elástica, e indicamos o caminho na conversa.",
  },
  {
    q: "Quanto custa uma manilha de Ø40 cm?",
    a: "O preço varia com a classe (PA1, PA2, PA3) e a quantidade. Peça orçamento pelo WhatsApp (51) 99669-1757 e respondemos com o valor da peça e da entrega na sua cidade.",
  },
  {
    q: "Vocês instalam ou só fornecem?",
    a: "A Central só fornece. Fabricamos e entregamos os tubos no endereço da obra com caminhão próprio · a instalação fica com a equipe do cliente, ou com uma empreiteira parceira que a Central pode indicar.",
  },
];

const howToSteps = [
  {
    name: "Definir a vazão e o diâmetro",
    text: "A vazão depende do volume de chuva da região e da área de captação. Regra prática: Ø30 cm para entradas; Ø40 a Ø60 cm para bueiros rurais; Ø80 cm em diante para galeria. Em obras maiores, o cálculo segue a ABNT NBR 9648.",
  },
  {
    name: "Definir a classe de resistência conforme o tráfego",
    text: "PS1 e PS2 para áreas sem trânsito; PA1 e PA2 para tráfego residencial e via local; PA3 e PA4 para rodovia e zona industrial pesada.",
  },
  {
    name: "Escolher o encaixe",
    text: "PB (ponta e bolsa) é o padrão da Central e atende a maioria das aplicações em drenagem. MF (macho e fêmea) é alternativa em alguns casos.",
  },
  {
    name: "Escolher a junta",
    text: "Junta rígida (JR) para drenagem pluvial — é o que a Central trabalha. Junta elástica (JE) para esgoto sanitário — obrigatória por norma.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://centraldoconcretoentrega.com.br/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tubo de concreto",
          item: "https://centraldoconcretoentrega.com.br/tubo-de-concreto",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Aplicações",
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
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
    {
      "@type": "HowTo",
      "@id": `${CANONICAL_URL}#howto`,
      name: "Como escolher o tubo de concreto certo para cada aplicação",
      description:
        "Quatro passos para definir diâmetro, classe de resistência, encaixe e tipo de junta do tubo de concreto adequado à sua obra.",
      step: howToSteps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    },
  ],
};

export default function AplicacoesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-cc-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/85"
          >
            <Link href="/" className="hover:text-white">
              Início
            </Link>
            <span aria-hidden="true">›</span>
            <Link href="/tubo-de-concreto" className="hover:text-white">
              Tubo de concreto
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white font-medium">Aplicações</span>
          </nav>

          <Image
            src="/cluster-drenagem/aplicacao-tubo-concreto-drenagem-pluvial.webp"
            alt="Caixa de passagem de concreto conectada a dois tubos instalados em vala de drenagem pluvial em obra real — aplicação típica do tubo de concreto."
            width={817}
            height={613}
            priority
          />

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
            Aplicações do tubo de concreto
          </h1>

          <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              O tubo de concreto é a peça base de qualquer sistema de drenagem
              ou esgoto conduzido por gravidade — da entrada de propriedade
              rural à galeria pluvial principal de avenida. Esta página percorre
              as principais aplicações, indica o que pedir em cada caso e mostra
              onde a Central do Concreto entrega.
            </p>
            <p>
              Para orçamento, fale com a equipe pelo WhatsApp{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cc-orange underline-offset-4 hover:text-white"
              >
                (51) 99669-1757
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <article className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 space-y-14">
          {/* H2 1 — Para que serve o tubo de concreto? */}
          <section aria-labelledby="para-que-serve">
            <h2
              id="para-que-serve"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Para que serve o tubo de concreto?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O tubo de concreto serve para conduzir água — pluvial, esgoto
                sanitário, drenagem ou efluente — sob a terra, em obras que vão
                da entrada de uma propriedade rural até a galeria principal de
                uma cidade. É a peça base de qualquer sistema de drenagem ou
                esgoto conduzido por gravidade.
              </p>
              <p>
                Conhecido também como manilha de concreto, é uma peça circular
                pré-moldada, autoportante, projetada para resistir ao peso do
                aterro acima e às cargas que passam por cima. Tem vida útil de
                cerca de 100 anos quando fabricado e instalado segundo a ABNT
                NBR 8890 — a norma que regula a fabricação para água pluvial e
                esgoto.
              </p>
              <p>
                A faixa de uso vai do{" "}
                <Link
                  href="/tubo-de-concreto/diametros"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  Ø20 cm
                </Link>{" "}
                — drenagem doméstica e fossa séptica pequena — até Ø150 cm e
                maior — galeria principal, travessia de córrego, drenagem de
                avenida. O que muda de uma aplicação para outra é a combinação
                de quatro coisas: diâmetro, classe de resistência, encaixe e
                tipo de junta. Cada aplicação pede uma combinação diferente, e
                as próximas seções mostram qual é cada uma.
              </p>
            </div>
          </section>

          {/* H2 2 — Aplicações em propriedade */}
          <section aria-labelledby="aplicacoes-propriedade">
            <h2
              id="aplicacoes-propriedade"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Aplicações em propriedade — entrada, bueiro de acesso, drenagem
              de muro
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Em obras de propriedade, o tubo de concreto serve para a
                travessia da sarjeta na entrada de carro, o bueiro sob estrada
                vicinal, a drenagem por trás de muro de arrimo e a manilha para
                fossa séptica. São as aplicações mais comuns de quem constrói
                no interior, em loteamento rural ou em chácara.
              </p>
              <p>
                A entrada de garagem que cruza uma sarjeta exige um tubo de
                pelo menos Ø30 cm — Ø40 quando há acúmulo grande de chuva —
                para que a água da rua continue fluindo embaixo do acesso. O
                tubo fica enterrado, com inclinação leve, e a entrada de
                veículos passa por cima do aterro compactado.
              </p>
              <p>
                O bueiro de estrada vicinal atravessa a estrada para deixar a
                água passar de um lado ao outro. Aqui o diâmetro depende do
                volume de chuva: Ø40 a Ø60 cm para terrenos pequenos, Ø80 cm
                para travessias de córrego sazonal.
              </p>
              <p>
                A drenagem atrás de muro de arrimo usa tubo dreno perfurado, do
                Ø20 ao Ø60 cm conforme a altura do muro. Esta aplicação tem{" "}
                <Link
                  href="/tubo-de-concreto/tubo-dreno"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  página dedicada
                </Link>
                .
              </p>
              <p>
                <strong>Para quem é:</strong> proprietário rural, dono de
                chácara, construtor de casa em loteamento.
              </p>
              <p>
                <strong>O que pedir no orçamento:</strong> Ø30, Ø40 ou Ø50 cm;
                classe PA1 ou PA2; encaixe PB (ponta e bolsa); junta rígida.
              </p>
            </div>
          </section>

          {/* H2 3 — Aplicações em loteamento e via local */}
          <section aria-labelledby="aplicacoes-loteamento">
            <h2
              id="aplicacoes-loteamento"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Aplicações em loteamento e via local — galeria de rua, ramal de
              esgoto
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Em obras de loteamento e via local, o tubo de concreto forma a
                galeria pluvial da rua e o ramal de esgoto sanitário. São os
                &ldquo;primeiros metros&rdquo; do sistema urbano — antes do
                tubo chegar à galeria principal, ele passa pelo trecho do
                loteamento.
              </p>
              <p>
                A galeria pluvial de rua de loteamento típico usa Ø40 a Ø80 cm
                dependendo da extensão e da vazão de projeto, com classe PA2
                para suportar o trânsito normal da via. Recebe a água das
                bocas de lobo das esquinas e leva até o ponto de descarga —
                córrego, galeria principal da prefeitura, ou bacia de retenção.
              </p>
              <p>
                O ramal de esgoto sanitário do loteamento — quando a rede
                pública chega até ele — usa tubo de concreto Ø30 cm em diante,
                com junta elástica obrigatória e cimento RS (resistente a
                sulfatos) conforme a ABNT NBR 16697. O esgoto é corrosivo, e a
                junta elástica garante estanqueidade.
              </p>
              <p>
                A drenagem de pátio comercial ou industrial de pequeno porte
                segue a mesma faixa de Ø40 a Ø80 cm, com classe PA2 ou PA3
                dependendo do peso de caminhões que passam por cima.
              </p>
              <p>
                <strong>Para quem é:</strong> construtora de loteamento, dono
                de pátio comercial, gestor de obra de via local.
              </p>
              <p>
                <strong>O que pedir no orçamento:</strong> Ø40, Ø60 ou Ø80 cm;
                classe PA2 ou PA3; encaixe PB; junta rígida para pluvial e
                junta elástica para esgoto.
              </p>
              <p>
                Nota — a Central trabalha apenas com junta rígida. Para esgoto
                sanitário pressurizado a peça correta é a de junta elástica, e
                indicamos o caminho na conversa (veja a seção 5).
              </p>
            </div>
          </section>

          {/* H2 4 — Aplicações em infraestrutura urbana */}
          <section aria-labelledby="aplicacoes-urbana">
            <h2
              id="aplicacoes-urbana"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Aplicações em infraestrutura urbana — galeria principal,
              travessia de córrego
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Em obras de infraestrutura urbana, o tubo de concreto forma a
                galeria principal de avenida, a travessia de córrego sob via
                pública e a canalização de trechos de rio em área urbana. São
                as aplicações de maior diâmetro — Ø100 cm em diante — e maior
                classe de resistência.
              </p>
              <p>
                A galeria principal de avenida recebe a água de várias galerias
                menores e leva ao despejo final. Usa Ø100, Ø120, Ø150 cm — e em
                obras muito grandes, diâmetros que passam dos dois metros (fora
                da faixa da Central). Classe PA3 a PA4, suportando carga
                rodoviária pesada.
              </p>
              <p>
                A travessia de córrego sob via pública segue o mesmo perfil:
                diâmetro grande para a vazão de pico de chuva, classe alta para
                o peso da via acima. Quando a seção retangular faz mais sentido
                — córregos com fundo plano —, a peça correta é a aduela
                (galeria celular), não o tubo circular.
              </p>
              <p>
                A canalização de trecho urbano de rio combina aduelas ou tubos
                de grande diâmetro com elementos pré-moldados de captação —
                boca de lobo, poço de visita, caixa de passagem.
              </p>
              <p>
                <strong>Para quem é:</strong> prefeitura, secretaria de obras,
                construtora de infraestrutura urbana.
              </p>
              <p>
                <strong>O que pedir no orçamento:</strong> Ø100 a Ø150 cm;
                classe PA3 ou PA4; encaixe PB; junta rígida — ou aduela quando
                a seção for retangular.
              </p>
            </div>
          </section>

          {/* H2 5 — Esgoto sanitário */}
          <section aria-labelledby="esgoto-sanitario">
            <h2
              id="esgoto-sanitario"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Esgoto sanitário — quando o tubo é a peça obrigatória
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Em rede de esgoto sanitário, o tubo de concreto é a peça padrão
                exigida pela ABNT NBR 8890 com três condições adicionais:
                cimento resistente a sulfatos (RS), encaixe ponta e bolsa, e
                junta elástica. Sem esses três, o tubo não atende à norma para
                esgoto.
              </p>
              <p>
                O motivo é químico. O esgoto sanitário gera gás sulfídrico que
                ataca o concreto comum ao longo dos anos. O cimento RS,
                especificado pela ABNT NBR 16697, foi formulado justamente para
                resistir a esse ataque. A junta elástica garante a
                estanqueidade contra vazamentos — qualquer infiltração na rede
                de esgoto contamina lençol freático.
              </p>
              <p>
                A execução de obra de esgoto e drenagem com tubos e aduelas de
                concreto segue uma norma específica, a ABNT NBR 15645, que
                cobre desde a escavação da vala até o reaterro compactado.
              </p>
              <p>
                <strong>Para quem é:</strong> concessionária de saneamento,
                prefeitura, construtora com projeto aprovado pela companhia
                local.
              </p>
              <p>
                <strong>Importante sobre a Central.</strong> A Central do
                Concreto trabalha com junta rígida — adequada para drenagem
                pluvial e para a maioria das aplicações em propriedade e
                loteamento, mas não para esgoto sanitário pressurizado. Quando
                a obra exige junta elástica para esgoto, ajudamos a indicar o
                caminho.
              </p>
            </div>
          </section>

          {/* H2 6 — Fossa séptica, filtro e sumidouro */}
          <section aria-labelledby="fossa-septica">
            <h2
              id="fossa-septica"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Fossa séptica, filtro anaeróbio e sumidouro
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Em zona rural ou propriedade fora da rede pública de coleta, o
                sistema completo de tratamento doméstico de esgoto usa três
                peças de tubo de concreto: a fossa séptica (tanque primário), o
                filtro anaeróbio (tratamento secundário) e o sumidouro
                (infiltração do líquido tratado no solo). Os três usam manilha
                de concreto liso de diâmetro grande, geralmente Ø80, Ø100 ou
                Ø120 cm.
              </p>
              <p>
                A fossa séptica recebe o esgoto da casa. Dentro dela, os
                sólidos decantam no fundo (lodo) e os líquidos seguem para o
                filtro. É construída com manilha fechada — fundo selado — para
                impedir contaminação do solo.
              </p>
              <p>
                O filtro anaeróbio recebe o líquido da fossa e o faz passar por
                uma camada de brita, onde bactérias degradam a matéria orgânica
                restante. Também precisa de fundo selado.
              </p>
              <p>
                O sumidouro é a terceira peça e a única com paredes permeáveis
                — usa manilha perfurada ou com fundo aberto, permitindo que o
                líquido já tratado se infiltre no solo sem contaminar.
              </p>
              <p>
                A ABNT NBR 7229 trata do projeto, construção e operação desses
                sistemas em obras sem rede pública de coleta.
              </p>
              <p>
                <strong>Para quem é:</strong> proprietário rural, dono de
                chácara, construção em local sem rede pública de esgoto.
              </p>
              <p>
                <strong>O que pedir na Central:</strong> manilha lisa Ø80, Ø100
                ou Ø120 cm para fossa e filtro; manilha do mesmo diâmetro para
                sumidouro — a perfuração lateral pode ser feita em obra ou
                indicada no momento do pedido.
              </p>
            </div>
          </section>

          {/* H2 7 — Como saber qual tubo cada aplicação pede? */}
          <section aria-labelledby="como-escolher">
            <h2
              id="como-escolher"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Como saber qual tubo cada aplicação pede?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A escolha do tubo certo para cada aplicação combina quatro
                decisões: diâmetro, classe de resistência, encaixe e tipo de
                junta. Cada uma resolve uma necessidade específica e, juntas,
                definem a peça correta.
              </p>
              <p>
                <strong>Passo 1 — Defina a vazão e o diâmetro.</strong> A vazão
                depende do volume de chuva da região (em mm/h) e da área de
                captação. Para obras pequenas, a regra prática é: Ø30 cm para
                entradas e drenagens leves; Ø40 a Ø60 cm para bueiros rurais;
                Ø80 cm em diante para galeria. Para obras maiores, o cálculo
                segue a ABNT NBR 9648 e o manual técnico da ABTC. Veja também
                a{" "}
                <Link
                  href="/tubo-de-concreto/diametros"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  página de diâmetros
                </Link>{" "}
                para a tabela completa.
              </p>
              <p>
                <strong>
                  Passo 2 — Defina a classe de resistência conforme o tráfego.
                </strong>{" "}
                PS1 e PS2 (simples) para áreas sem trânsito. PA1 e PA2 para
                tráfego residencial e via local. PA3 e PA4 para rodovia e zona
                industrial pesada. A{" "}
                <Link
                  href="/tubo-de-concreto/classes-de-carga"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  página de classes
                </Link>{" "}
                cobre essa decisão em detalhe.
              </p>
              <p>
                <strong>Passo 3 — Escolha o encaixe.</strong> PB (ponta e
                bolsa) é o padrão da Central e atende a maioria das aplicações
                em drenagem. MF (macho e fêmea) é alternativa em alguns casos.
                A diferença está na{" "}
                <Link
                  href="/tubo-de-concreto/tipos-de-encaixe"
                  className="text-cc-orange underline underline-offset-4 hover:text-cc-black"
                >
                  página de encaixes
                </Link>
                .
              </p>
              <p>
                <strong>Passo 4 — Escolha a junta.</strong> Junta rígida (JR)
                para drenagem pluvial — é o que a Central trabalha. Junta
                elástica (JE) para esgoto sanitário — obrigatória por norma.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm md:text-base border border-cc-gray-200 rounded-lg overflow-hidden">
                <caption className="sr-only">
                  Referência rápida — aplicação, diâmetro, classe, encaixe e
                  junta
                </caption>
                <thead className="bg-cc-black text-white">
                  <tr>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Aplicação
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Diâmetro típico
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Classe
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Encaixe
                    </th>
                    <th scope="col" className="text-left font-semibold px-4 py-3">
                      Junta
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Entrada de propriedade
                    </th>
                    <td className="px-4 py-3">Ø30 a Ø40 cm</td>
                    <td className="px-4 py-3">PA1</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">JR</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Bueiro de acesso (estrada vicinal)
                    </th>
                    <td className="px-4 py-3">Ø40 a Ø60 cm</td>
                    <td className="px-4 py-3">PA1 ou PA2</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">JR</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Drenagem de muro de arrimo
                    </th>
                    <td className="px-4 py-3">Ø20 a Ø40 cm (perfurado)</td>
                    <td className="px-4 py-3">PA1</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">JR</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Galeria de loteamento
                    </th>
                    <td className="px-4 py-3">Ø40 a Ø80 cm</td>
                    <td className="px-4 py-3">PA2</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">JR</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Galeria principal urbana
                    </th>
                    <td className="px-4 py-3">Ø100 a Ø150 cm</td>
                    <td className="px-4 py-3">PA3 ou PA4</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">JR</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Travessia de córrego urbano
                    </th>
                    <td className="px-4 py-3">Ø100 a Ø150 cm</td>
                    <td className="px-4 py-3">PA3 ou PA4</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">JR</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Esgoto sanitário
                    </th>
                    <td className="px-4 py-3">Ø30 a Ø80 cm</td>
                    <td className="px-4 py-3">PA1 a PA3</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">JE (não disponível na Central)</td>
                  </tr>
                  <tr className="border-t border-cc-gray-200 bg-cc-gray-100/40">
                    <th scope="row" className="px-4 py-3 font-medium text-left">
                      Fossa séptica, filtro, sumidouro
                    </th>
                    <td className="px-4 py-3">Ø80 a Ø120 cm (manilha lisa)</td>
                    <td className="px-4 py-3">PA1</td>
                    <td className="px-4 py-3">PB</td>
                    <td className="px-4 py-3">JR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <figure
              className="mt-8 max-w-3xl mx-auto"
              aria-labelledby="svg-corte-via-titulo"
            >
              <svg
                viewBox="0 0 800 500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="svg-corte-via-titulo svg-corte-via-desc"
                className="w-full h-auto"
              >
                <title id="svg-corte-via-titulo">
                  Corte transversal de via com tubo de concreto
                </title>
                <desc id="svg-corte-via-desc">
                  Esquema mostrando, de baixo para cima: solo natural, lastro
                  de brita, tubo de concreto, aterro compactado, base,
                  pavimento, sarjeta lateral.
                </desc>

                <rect x="0" y="0" width="800" height="500" fill="#d8c9a8" />

                <path
                  d="M 200 100 L 600 100 L 600 420 L 200 420 Z"
                  fill="#f2e9d4"
                  stroke="#8a7a5a"
                  strokeWidth="1"
                />

                <rect x="200" y="380" width="400" height="40" fill="#9aa0a6" />
                <g fill="#6b7075">
                  <circle cx="230" cy="395" r="3" />
                  <circle cx="260" cy="402" r="3" />
                  <circle cx="295" cy="392" r="3" />
                  <circle cx="330" cy="408" r="3" />
                  <circle cx="365" cy="395" r="3" />
                  <circle cx="400" cy="400" r="3" />
                  <circle cx="440" cy="393" r="3" />
                  <circle cx="475" cy="405" r="3" />
                  <circle cx="510" cy="395" r="3" />
                  <circle cx="545" cy="400" r="3" />
                  <circle cx="575" cy="392" r="3" />
                </g>

                <circle
                  cx="400"
                  cy="320"
                  r="60"
                  fill="#c8c8c8"
                  stroke="#6b6b6b"
                  strokeWidth="2"
                />
                <circle
                  cx="400"
                  cy="320"
                  r="42"
                  fill="#f2e9d4"
                  stroke="#6b6b6b"
                  strokeWidth="1.5"
                />

                <path
                  d="M 200 100 L 600 100 L 600 260 Q 500 245, 400 245 Q 300 245, 200 260 Z"
                  fill="#a8946d"
                />

                <rect x="100" y="80" width="600" height="20" fill="#7a7a7a" />

                <rect x="100" y="60" width="600" height="20" fill="#3a3a3a" />

                <rect x="0" y="60" width="100" height="440" fill="#a08560" />
                <rect x="700" y="60" width="100" height="440" fill="#a08560" />

                <path
                  d="M 100 60 L 80 60 L 80 80 L 100 80 Z"
                  fill="#bdbdbd"
                  stroke="#6b6b6b"
                  strokeWidth="1"
                />
                <path
                  d="M 700 60 L 720 60 L 720 80 L 700 80 Z"
                  fill="#bdbdbd"
                  stroke="#6b6b6b"
                  strokeWidth="1"
                />

                <line
                  x1="400"
                  y1="70"
                  x2="400"
                  y2="30"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                />
                <circle cx="400" cy="70" r="3" fill="#1a1a1a" />
                <text
                  x="400"
                  y="22"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="500"
                  textAnchor="middle"
                  fill="#1a1a1a"
                >
                  1 · Pavimento
                </text>

                <line
                  x1="90"
                  y1="70"
                  x2="50"
                  y2="40"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                />
                <circle cx="90" cy="70" r="3" fill="#1a1a1a" />
                <text
                  x="45"
                  y="32"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="500"
                  textAnchor="end"
                  fill="#1a1a1a"
                >
                  2 · Sarjeta
                </text>

                <line
                  x1="280"
                  y1="180"
                  x2="160"
                  y2="155"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                />
                <circle cx="280" cy="180" r="3" fill="#1a1a1a" />
                <text
                  x="155"
                  y="150"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="500"
                  textAnchor="end"
                  fill="#1a1a1a"
                >
                  3 · Aterro compactado
                </text>

                <line
                  x1="460"
                  y1="320"
                  x2="640"
                  y2="280"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                />
                <circle cx="460" cy="320" r="3" fill="#1a1a1a" />
                <text
                  x="650"
                  y="278"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="500"
                  textAnchor="start"
                  fill="#1a1a1a"
                >
                  4 · Tubo de concreto
                </text>

                <line
                  x1="350"
                  y1="400"
                  x2="180"
                  y2="445"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                />
                <circle cx="350" cy="400" r="3" fill="#1a1a1a" />
                <text
                  x="175"
                  y="450"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="500"
                  textAnchor="end"
                  fill="#1a1a1a"
                >
                  5 · Lastro de brita
                </text>

                <line
                  x1="50"
                  y1="300"
                  x2="20"
                  y2="300"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                />
                <text
                  x="15"
                  y="304"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="500"
                  textAnchor="end"
                  fill="#1a1a1a"
                >
                  6 · Solo
                </text>
              </svg>
              <figcaption className="text-sm text-cc-gray-700 mt-2 text-center">
                Corte transversal de via urbana com o tubo de concreto
                enterrado abaixo do pavimento.
              </figcaption>
            </figure>
          </section>

          {/* H2 8 — Aplicações atendidas pela Central */}
          <section aria-labelledby="aplicacoes-central">
            <h2
              id="aplicacoes-central"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Aplicações atendidas pela Central do Concreto
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A Central do Concreto trabalha com tubos do Ø20 ao Ø150 cm em
                pronta entrega — todos os diâmetros disponíveis, sem &ldquo;sob
                consulta&rdquo;. O comprimento útil padrão é de 1,00 m em todos
                os tubos, o que simplifica o cálculo: basta dividir o
                comprimento da vala por 1 metro para saber quantas peças.
              </p>
              <p>
                O encaixe é PB (ponta e bolsa) com junta rígida — adequado para
                todas as aplicações em drenagem pluvial, drenagem de
                propriedade, galeria de loteamento, travessia de estrada
                vicinal, drenagem de pátio e fossa séptica.
              </p>

              <Image
                src="/cluster-drenagem/entrega-tubo-concreto-central-ivoti.webp"
                alt="Colaborador da Central do Concreto com uniforme da empresa preparando o caminhão munck para entrega de tubos de concreto em Ivoti."
                width={1920}
                height={1440}
              />

              <p>
                Atendemos Ivoti e cidades em raio de aproximadamente 50 km:
                Novo Hamburgo, Estância Velha, Dois Irmãos, Lindolfo Collor,
                Presidente Lucena, Bom Princípio, São José do Hortêncio, Campo
                Bom, Sapiranga, Morro Reuter, Picada Café, Santa Maria do
                Herval, Nova Petrópolis, Gramado e Canela. Entrega com caminhão
                próprio. Para quem prefere o serviço completo, a Central
                indica empreiteira parceira da região.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* FAQ */}
      <section
        className="py-16 md:py-20 bg-cc-gray-100 cc-faq"
        aria-labelledby="faq-title"
      >
        <div className="mx-auto max-w-3xl px-4">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2
            id="faq-title"
            className="text-2xl md:text-3xl font-bold text-cc-black mb-10 text-center leading-tight"
          >
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-cc-gray-200 rounded-lg px-5 py-4"
              >
                <summary className="text-base font-semibold text-cc-black cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>
                    <h3 className="inline">{f.q}</h3>
                  </span>
                  <span
                    className="text-cc-orange text-xl group-open:rotate-45 transition-transform shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-base text-cc-gray-700 leading-relaxed mt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cc-black py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Peça seu orçamento
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            Conte onde é a obra e qual a aplicação — entrada de propriedade,
            bueiro, galeria, fossa séptica — e respondemos com diâmetro, classe
            e preço. Atendimento de segunda a sexta pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Falar no WhatsApp · (51) 99669-1757
          </a>
          <p className="mt-6 text-sm text-white/80">
            Endereço: Av. Bom Jardim, 149 — Loja 02 — Vista Alegre, Ivoti-RS
            <br />
            Atendimento: Ivoti e cidades em raio de 50 km
          </p>
        </div>
      </section>
    </>
  );
}
