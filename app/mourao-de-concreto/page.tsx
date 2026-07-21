import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";
import WhatsAppLink from "@/components/WhatsAppLink";

const CANONICAL_URL = "https://centraldoconcretoentrega.com.br/mourao-de-concreto";

const WHATSAPP_HUB =
  "https://wa.me/5551996691757?text=Oi%2C%20quero%20or%C3%A7amento%20de%20mour%C3%A3o%20de%20concreto.";
const WHATSAPP_CERCA =
  "https://wa.me/5551996691757?text=Oi%2C%20quero%20or%C3%A7amento%20de%20mour%C3%A3o%20de%20concreto%20para%20cerca.";
const WHATSAPP_PARREIRA =
  "https://wa.me/5551996691757?text=Oi%2C%20quero%20or%C3%A7amento%20de%20mour%C3%A3o%20de%20concreto%20para%20parreira.";

const PAGE_TITLE = "Mourão de Concreto para Cerca e Parreira | Central do Concreto";
const PAGE_DESCRIPTION =
  "Mourão de concreto para cerca, parreira e alambrado — modelos reto e curvo. Fábrica em Ivoti-RS, entrega na Serra, Vale do Sinos e Litoral. Orçamento no WhatsApp.";

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
    q: "Mourão e poste de cerca são a mesma coisa?",
    a: "Sim — mourão, poste para cerca e palanque são o mesmo produto, muda só o nome que cada região usa. Todos designam o poste vertical que segura o arame ou a tela da cerca.",
  },
  {
    q: "Mourão de concreto serve pra parreira de uva?",
    a: "Sim, é um dos usos mais comuns na Serra Gaúcha. O mourão sustenta a videira em espaldeira ou latada e estica o arame que conduz a parreira, aguentando o peso da produção sem apodrecer.",
  },
  {
    q: "Quantos mourões preciso por metro de cerca?",
    a: "Depende do tipo de cerca e do terreno, então não existe número único. O espaçamento entre mourões muda conforme a cerca é de arame ou de tela — passe o comprimento da obra no WhatsApp que a Central calcula a quantidade.",
  },
  {
    q: "Mourão de concreto racha ou entorta com o tempo?",
    a: "Não, quando é concreto armado bem curado. A armação de ferro por dentro segura a tração do arame e o vento por décadas, sem entortar como o poste de madeira que apodrece na base.",
  },
  {
    q: "A Central do Concreto entrega mourão na minha cidade?",
    a: "Provavelmente sim. A entrega cobre Ivoti, a Serra Gaúcha, o Vale do Sinos e o Litoral Norte, direto na obra — confirme sua cidade pelo WhatsApp.",
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
          name: "Mourão de concreto",
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
  ],
};

export default function MouraoDeConcretoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative w-full min-h-[560px] md:min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src="/home/fachada-noturna-showroom-cc-iluminacao-azul-051-central-concreto-ivoti.jpg"
          alt="Fachada noturna do showroom da Central do Concreto em Ivoti, com o pátio de pré-moldados iluminado"
          fill
          priority
          sizes="100vw"
          className="object-cover [object-position:50%_70%]"
        />
        <div className="absolute inset-0 bg-cc-black/35" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Mourão de concreto
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mourão de concreto é o poste pré-moldado que sustenta cerca, parreira e alambrado com
            uma resistência que a madeira não entrega. É uma peça de concreto armado, moldada pra
            ficar décadas fincada no solo sem apodrecer, sem pegar cupim e sem manutenção. A mesma
            base firme que divide um terreno, fecha um sítio ou levanta um vinhedo.
          </p>
          <div className="flex justify-center mb-8">
            <WhatsAppLink
              href={WHATSAPP_HUB}
              source="mourao-hub-hero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Orçamento agilizado pelo WhatsApp
            </WhatsAppLink>
          </div>
          <p className="text-sm text-white/85">
            ✓ Pronta entrega · ✓ Caminhão próprio · ✓ Ivoti e 15 cidades no RS
          </p>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <article className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 space-y-14">
          {/* O que é */}
          <section aria-labelledby="o-que-e">
            <h2
              id="o-que-e"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O que é um mourão de concreto?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Mourão de concreto é uma peça pré-moldada de concreto armado usada como poste para
                cerca, parreira e alambrado. Também chamado de poste para cerca ou palanque, ele
                leva ferro por dentro (armação), e é essa estrutura que dá a rigidez pra esticar
                arame ou tela sem entortar. A maioria dos modelos vem com furos alinhados pra
                passar o arame na altura certa. Existe em versão reta e curva, conforme o uso. Na
                prática, o mourão de concreto substitui o antigo poste de madeira ou eucalipto em
                qualquer aplicação de cercamento e sustentação — com a vantagem de não pedir troca
                com o tempo.
              </p>
            </div>
          </section>

          {/* Por que concreto e não madeira */}
          <section aria-labelledby="vs-madeira">
            <h2
              id="vs-madeira"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Por que mourão de concreto e não de madeira?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Mourão de concreto dura décadas porque não apodrece, não pega cupim nem fungo e
                resiste ao fogo — a madeira não. O poste de eucalipto, mesmo tratado, tende a
                apodrecer na linha do solo com o passar dos anos, e a madeira de lei ficou cara e
                difícil por causa da legislação ambiental. O concreto ainda tem dimensão uniforme,
                o que dá um acabamento padronizado na cerca ou no parreiral, e pode ser
                reaproveitado se a cerca mudar de lugar. O custo maior está na compra; ao longo da
                vida da cerca ou da parreira, o mourão de concreto economiza em troca e manutenção.
              </p>
            </div>
          </section>

          {/* Reto ou curvo */}
          <section aria-labelledby="reto-curvo">
            <h2
              id="reto-curvo"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Mourão reto ou curvo — qual escolher?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Mourão reto serve pra cerca de arame e pra parreira; mourão curvo inclina o topo
                pra segurar tela de alambrado com mais segurança. O reto é o padrão de divisa
                rural, fechamento de sítio e espaldeira de vinhedo — a peça fica vertical e o arame
                passa pelos furos. O curvo tem a ponta virada, que angula o arame farpado pra fora
                no alto e dificulta a escalada: é a escolha de muro e alambrado em área comercial ou
                residencial. A regra simples: divisa e parreira pedem reto; segurança de perímetro
                pede curvo.
              </p>
            </div>
          </section>

          {/* Para cerca */}
          <section aria-labelledby="cerca">
            <h2
              id="cerca"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Mourão de concreto para cerca
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Mourão de concreto fecha sítio, fazenda, terreno e área comercial com arame farpado,
                arame liso ou tela de alambrado. Serve pra divisa de propriedade rural, cerca de
                pasto, perímetro de loteamento e fechamento industrial. Combina tanto com fio de
                arame quanto com tela, dependendo do nível de segurança que a obra pede. O
                espaçamento entre um mourão e outro varia com o tipo de cerca e com o terreno, e os
                mourões de canto e de porteira recebem reforço porque aguentam a maior tração do
                arame. É a solução que troca a manutenção anual da cerca de madeira por uma
                estrutura que fica firme por muito tempo.
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-cc-black mb-4">
                Vai cercar sítio, fazenda ou terreno?
              </p>
              <WhatsAppLink
                href={WHATSAPP_CERCA}
                source="mourao-cerca-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white hover:bg-green-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.117 1.527 5.845L.057 23.998l6.304-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.359-.214-3.742.981 1.001-3.648-.234-.374A9.818 9.818 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
                </svg>
                Orçar mourão para cerca no WhatsApp
              </WhatsAppLink>
            </div>
          </section>

          {/* Para parreira */}
          <section aria-labelledby="parreira">
            <h2
              id="parreira"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Mourão de concreto para parreira
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Mourão de concreto sustenta a parreira em espaldeira ou latada, segurando o arame
                que conduz a videira. Na Serra Gaúcha, o cinturão da uva e do vinho usa fileiras de
                mourão pra conduzir o parreiral safra após safra. No sistema de espaldeira, os
                mourões alinham a fileira e esticam o arame liso na vertical, com a videira
                crescendo em parede; na latada, ou parreirão, sustentam a grade suspensa por cima do
                cultivo. O concreto aguenta o peso da produção sem apodrecer na base como o poste de
                madeira, e é por isso que o vinhedo moderno adota o mourão pré-moldado. Serve tanto
                pra uva de vinho e suco quanto pra uva de mesa.
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-cc-black mb-4">
                Vai montar ou renovar o parreiral?
              </p>
              <WhatsAppLink
                href={WHATSAPP_PARREIRA}
                source="mourao-parreira-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white hover:bg-green-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.117 1.527 5.845L.057 23.998l6.304-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.359-.214-3.742.981 1.001-3.648-.234-.374A9.818 9.818 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
                </svg>
                Orçar mourão para parreira no WhatsApp
              </WhatsAppLink>
            </div>
          </section>

          {/* Outros usos */}
          <section aria-labelledby="outros-usos">
            <h2
              id="outros-usos"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Que outros usos tem o mourão de concreto?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Além de cerca e parreira, o mourão de concreto serve como escora de canto, reforço
                de portão e suporte estrutural. A escora, também chamada de rabicho, ancora os
                cantos e as pontas da cerca contra a tração do arame, mantendo a linha esticada. O
                modelo reforçado segura o vão de um portão sem ceder. A mesma peça vira ainda
                suporte pra tela sombrite, viveiro e estrutura rural leve. É sempre a mesma base de
                concreto armado — o que muda é o modelo e a função dentro da obra.
              </p>
            </div>
          </section>

          {/* Medidas e quanto enterrar */}
          <section aria-labelledby="medidas">
            <h2
              id="medidas"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Que medidas de mourão existem e quanto enterrar?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A altura do mourão muda conforme a cerca ou a parreira, e parte dele fica enterrada
                pra dar firmeza. Cerca baixa de divisa pede mourão mais curto; cerca alta, alambrado
                e parreira pedem mourão mais alto. Uma parte da peça fica no solo, fincada ou
                concretada, pra resistir à tração do arame e ao vento — é o que impede a cerca de
                tombar com o tempo. O espaçamento entre mourões e a medida exata dependem do projeto
                e do terreno. Pra acertar a altura e a quantidade certa pro seu caso, o melhor
                caminho é passar as informações da obra pela Central do Concreto pelo WhatsApp.
              </p>
            </div>
          </section>

          {/* Quanto custa */}
          <section aria-labelledby="preco">
            <h2
              id="preco"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Quanto custa um mourão de concreto?
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O preço do mourão de concreto depende do modelo, da altura, da quantidade e da
                distância de entrega. Mourão reto, curvo ou reforçado têm custos diferentes; comprar
                em volume muda o valor por peça; e o frete varia conforme a cidade dentro do raio de
                entrega. Por isso a Central do Concreto não trabalha com tabela fixa no site — o
                orçamento é fechado por WhatsApp, com a medida e a quantidade do seu projeto em
                mãos. Assim o valor sai certo pra sua cerca, parreira ou alambrado, sem estimativa
                furada.
              </p>
            </div>
          </section>

          {/* Ivoti e região */}
          <section aria-labelledby="ivoti-regiao">
            <h2
              id="ivoti-regiao"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Mourão de concreto em Ivoti e região
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A Central do Concreto fabrica e entrega mourão de concreto em Ivoti e em toda a
                região, direto na obra. A entrega cobre a Serra Gaúcha — a região da uva e do vinho
                —, o Vale do Sinos e o Litoral Norte. O mourão chega no sítio, na fazenda, no
                vinhedo ou no canteiro, com fábrica própria em Ivoti-RS. É a mesma logística que já
                atende pré-moldados em dezenas de cidades da região.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-cc-gray-100 cc-faq" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2
            id="faq-title"
            className="text-2xl md:text-3xl font-bold text-cc-black mb-10 text-center leading-tight"
          >
            Perguntas frequentes sobre mourão de concreto
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
                <p className="text-base text-cc-gray-700 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cc-black py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Precisa de mourão de concreto para a sua obra?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            Fale agora com a Central do Concreto pra orçar mourão de concreto pra cerca, parreira ou
            alambrado. A fábrica fica em Ivoti-RS e a entrega chega direto na sua obra.
          </p>
          <WhatsAppLink
            href={WHATSAPP_HUB}
            source="mourao-hub-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Falar no WhatsApp · (51) 99669-1757
          </WhatsAppLink>
          <p className="mt-6 text-sm text-white/80">
            Endereço: Av. Bom Jardim, 149 — Loja 02 — Vista Alegre, Ivoti-RS
            <br />
            Atendimento: Ivoti e cidades em raio de 120 km
          </p>
        </div>
      </section>
    </>
  );
}
