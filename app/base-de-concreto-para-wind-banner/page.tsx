import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";
import WhatsAppLink from "@/components/WhatsAppLink";
import { NEGOCIO_NODES, SITE_URL } from "@/lib/schema-negocio";

const CANONICAL_URL = `${SITE_URL}/base-de-concreto-para-wind-banner`;

const FOTO_HERO = "/images/base-wind-banner/base-de-concreto-wind-banner-sextavada-central-do-concreto.jpg";
const FOTO_FURO = "/images/base-wind-banner/base-wind-banner-furo-bucha-encaixe-mastro-central-do-concreto.jpg";
const FOTO_PESO = "/images/base-wind-banner/base-wind-banner-peso-15kg-concreto-central-do-concreto.jpg";

const WHATSAPP_REVENDA =
  "https://wa.me/5551996691757?text=Ol%C3%A1%2C%20sou%20revendedor%20e%20quero%20or%C3%A7amento%20de%20base%20de%20concreto%20para%20wind%20banner%20por%20quantidade.";

const PAGE_TITLE = "Base de Concreto para Wind Banner | Central do Concreto";
const PAGE_DESCRIPTION =
  "Base de concreto sextavada de mais de 14 kg para wind e fly banner: furo com bucha pra encaixe do mastro, entrega para todo o RS. Orçamento por quantidade.";

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
    images: [`${SITE_URL}${FOTO_HERO}`],
  },
};

const faqs = [
  {
    q: "Serve pra banner de quantos metros?",
    a: "Serve para os wind e fly banners de tamanho padrão do mercado, de 2,80 m a 3,25 m. Acima disso, ou em dia de vento muito forte, vale usar reforço. A base é a mesma peça de mais de 14 kg para qualquer um desses tamanhos.",
  },
  {
    q: "Aguenta vento?",
    a: "Os mais de 14 kg e o centro de massa baixo é que seguram o banner em pé — o peso fica concentrado a 8 cm do chão. Não medimos rajada em laboratório, então não prometemos velocidade de vento. Em condição extrema, o certo é reforçar.",
  },
  {
    q: "Já vem com encaixe pro mastro?",
    a: "Sim. A base sai da fábrica com furo central e bucha embutida, então o encaixe já vem pronto. Não precisa furar, chumbar nem improvisar adaptação na hora da montagem.",
  },
  {
    q: "Vocês vendem com o mastro e a lona?",
    a: "Não. A Central do Concreto fornece apenas a base de concreto. Mastro, lona e demais componentes ficam por conta do revendedor, que já trabalha com esses itens.",
  },
  {
    q: "Quantas bases eu preciso?",
    a: "Uma base por banner. O cálculo da quantidade é direto: cada peça montada em pé consome uma base. Para pedido de revenda, o volume costuma seguir o giro do seu estoque de banner.",
  },
  {
    q: "Vocês entregam na minha cidade?",
    a: "A entrega cobre todo o Rio Grande do Sul, com fabricação própria em Ivoti-RS. Passe a cidade e a quantidade no WhatsApp que a Central confirma o prazo e o frete até o seu endereço.",
  },
  {
    q: "Fazem preço para quantidade?",
    a: "Sim, o atendimento é de atacado. O valor por peça muda conforme o volume do pedido e a distância da entrega, então o orçamento é fechado por WhatsApp com a quantidade em mãos.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...NEGOCIO_NODES,
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Base de concreto para wind banner",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "Product",
      "@id": `${CANONICAL_URL}#produto`,
      name: "Base de concreto sextavada para wind banner e fly banner",
      description:
        "Base de concreto maciço sextavada de mais de 14 kg para wind banner e fly banner, com furo central e bucha embutida para encaixe do mastro. Fabricação própria em Ivoti-RS, entrega para todo o Rio Grande do Sul.",
      image: `${SITE_URL}${FOTO_HERO}`,
      brand: { "@type": "Brand", name: "Central do Concreto" },
      material: "Concreto",
      weight: { "@type": "QuantitativeValue", value: 14.898, unitCode: "KGM" },
      manufacturer: { "@id": `${SITE_URL}/#organization` },
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

export default function BaseDeConcretoParaWindBannerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO
          PONTO DE TROCA DE HERÓI: quando a foto do banner montado em pé sobre a base existir,
          ela assume este <Image> (FOTO_HERO) e a sextavada desce para a seção #especificacao. */}
      <section id="topo" className="bg-cc-black">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid gap-10 md:grid-cols-2 md:items-center">
          <figure className="order-1 md:order-2">
            <Image
              src={FOTO_HERO}
              alt="Base de concreto maciça e sextavada da Central do Concreto para wind banner e fly banner, com furo central para encaixe do mastro"
              width={960}
              height={1280}
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="w-full max-w-sm mx-auto h-auto rounded-lg"
            />
          </figure>

          <div className="order-2 md:order-1 text-white">
            <Eyebrow className="mb-4">Fornecimento para revenda</Eyebrow>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Base de concreto para wind banner e fly banner — o peso certo pro banner não cair
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
              Sextavada, concreto maciço, mais de 14 kg, furo com bucha pra encaixe do mastro. Fabricação
              própria em Ivoti, entrega para todo o Rio Grande do Sul.
            </p>
            <WhatsAppLink
              href={WHATSAPP_REVENDA}
              source="cta-base-wind-banner-hero"
              className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Orçamento por quantidade no WhatsApp
            </WhatsAppLink>
            <p className="mt-6 text-sm text-white/85">
              ✓ Fabricação própria · ✓ Mais de 14 kg medidos na balança · ✓ Entrega em todo o RS
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <article className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 space-y-14">
          {/* O problema */}
          <section aria-labelledby="o-problema">
            <h2
              id="o-problema"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              O banner que tomba no meio do evento
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                O vento da tarde entra na feira, o banner inclina e vai ao chão na frente do
                público. Quem paga a conta primeiro é o revendedor que forneceu a peça: a lona volta
                rasgada, o cliente liga cobrando e o próximo pedido fica travado. Base leve não é
                economia, é retrabalho adiado.
              </p>
            </div>
          </section>

          {/* Por que concreto resolve */}
          <section aria-labelledby="por-que-concreto">
            <h2
              id="por-que-concreto"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Por que a base de concreto resolve
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Concreto resolve porque coloca peso morto no lugar certo: os mais de 14 kg ficam
                concentrados em 8 cm de altura, o que mantém o centro de gravidade rente ao chão. É
                a mesma lógica de um boneco joão-bobo. Quanto mais baixa a massa, mais o conjunto
                inclina antes de perder o equilíbrio.
              </p>
              <p>
                A diferença aparece na comparação com o que circula no mercado. A base comum tem 6
                cm de altura e 9 a 10 kg; a nossa tem 8 cm e mais de 14 kg. São cerca de 50% mais peso morto
                pra segurar o mesmo mastro, e isso não é ajuste de catálogo: é concreto maciço a
                mais dentro da peça. O revendedor sente a diferença no primeiro dia de vento, que é
                quando o cliente decide se volta a comprar.
              </p>
            </div>
          </section>

          {/* Especificação técnica */}
          <section aria-labelledby="especificacao">
            <h2
              id="especificacao"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Especificação técnica da base
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A peça é sextavada, de concreto maciço, com mais de 14 kg de peso e furo central com bucha
                embutida. O topo sai liso, na cor grafite, e o formato hexagonal distribui o apoio
                em seis lados em vez de quatro. Todas as medidas abaixo saem da mesma fôrma, então a
                peça chega padronizada no pedido de revenda.
              </p>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-base border-collapse">
                <caption className="text-sm text-cc-gray-600 mb-3 text-left">
                  Ficha técnica da base de concreto para wind banner
                </caption>
                <thead>
                  <tr className="bg-cc-gray-100">
                    <th scope="col" className="border border-cc-gray-200 px-4 py-3 font-semibold text-cc-black">
                      Item
                    </th>
                    <th scope="col" className="border border-cc-gray-200 px-4 py-3 font-semibold text-cc-black">
                      Especificação
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">Formato</th>
                    <td className="border border-cc-gray-200 px-4 py-3">Sextavada (hexagonal)</td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">Altura</th>
                    <td className="border border-cc-gray-200 px-4 py-3">~8 cm</td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">Base</th>
                    <td className="border border-cc-gray-200 px-4 py-3">~30 cm</td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">Peso</th>
                    <td className="border border-cc-gray-200 px-4 py-3">14,898 kg (medido na balança)</td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">Encaixe</th>
                    <td className="border border-cc-gray-200 px-4 py-3">Furo central com bucha embutida</td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">Acabamento</th>
                    <td className="border border-cc-gray-200 px-4 py-3">Topo liso, cor grafite/antracite</td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">Material</th>
                    <td className="border border-cc-gray-200 px-4 py-3">Concreto maciço</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-base font-semibold text-cc-black">
              Furo com bucha embutida: o encaixe já vem pronto, é só espetar o mastro.
            </p>

            <figure className="my-8 text-center">
              <Image
                src={FOTO_FURO}
                alt="Detalhe do furo central com bucha da base de concreto para wind banner da Central do Concreto, encaixe pronto para o mastro"
                width={960}
                height={1280}
                sizes="(min-width: 768px) 28rem, 90vw"
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </figure>
          </section>

          {/* Prova do peso */}
          <section aria-labelledby="prova-do-peso">
            <h2
              id="prova-do-peso"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              A prova do peso
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Colocamos a base na balança antes de escrever esta página: 14,898 kg. O número não vem
                de tabela de fornecedor nem de estimativa por volume — é a peça que sai da nossa
                fôrma, pesada aqui em Ivoti. Peso é o único argumento que importa numa base de
                banner, então ele vem com foto.
              </p>
            </div>
            <figure className="my-8 text-center">
              <Image
                src={FOTO_PESO}
                alt="Base de concreto para wind banner da Central do Concreto na balança, marcando 14,898 kg"
                width={1280}
                height={960}
                sizes="(min-width: 768px) 32rem, 90vw"
                className="w-full max-w-lg mx-auto h-auto rounded-lg"
              />
              <figcaption className="mt-3 text-sm text-cc-gray-600">
                Pesamos: 14,898 kg de concreto de verdade.
              </figcaption>
            </figure>
          </section>

          {/* Comparativo */}
          <section aria-labelledby="comparativo">
            <h2
              id="comparativo"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Concreto, água, tripé ou ferro
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                Cada tipo de base falha de um jeito diferente, e o revendedor é quem escuta a
                reclamação. A de água depende de alguém encher direito no local. O tripé leve
                depende de sorte com o vento. A de ferro depende de o tempo estar seco. O concreto
                chega pesado de fábrica e continua pesado no ano seguinte.
              </p>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-base border-collapse">
                <caption className="text-sm text-cc-gray-600 mb-3 text-left">
                  Comparação entre os tipos de base de wind banner
                </caption>
                <thead>
                  <tr className="bg-cc-gray-100">
                    <th scope="col" className="border border-cc-gray-200 px-4 py-3 font-semibold text-cc-black">
                      Tipo de base
                    </th>
                    <th scope="col" className="border border-cc-gray-200 px-4 py-3 font-semibold text-cc-black">
                      Como se comporta no uso
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cc-gray-700">
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">
                      Base de água
                    </th>
                    <td className="border border-cc-gray-200 px-4 py-3">
                      Enche no local, vaza e esvazia com o tempo. Perdeu água, perdeu peso, e o
                      banner cai.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">
                      Tripé ou cruzeta leve
                    </th>
                    <td className="border border-cc-gray-200 px-4 py-3">
                      Pouco peso e apoio alto. Tomba na primeira rajada mais forte da tarde.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-medium text-left">
                      Base de ferro ou aço
                    </th>
                    <td className="border border-cc-gray-200 px-4 py-3">
                      Enferruja com sereno e chuva, mancha o piso e custa mais por peça.
                    </td>
                  </tr>
                  <tr className="bg-cc-gray-50">
                    <th scope="row" className="border border-cc-gray-200 px-4 py-3 font-semibold text-cc-black text-left">
                      Base de concreto sextavada de mais de 14 kg com furo e bucha
                    </th>
                    <td className="border border-cc-gray-200 px-4 py-3">
                      Peso real desde a primeira montagem, encaixe pronto pro mastro, não vaza e não
                      enferruja.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Para quem é */}
          <section aria-labelledby="para-quem">
            <h2
              id="para-quem"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Para quem é esta base
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A base é feita para quem revende: gráficas, comunicação visual e distribuidoras de
                wind e fly banner que precisam entregar a peça em pé junto com a lona. Depois vêm
                produtoras de evento, agências de campanha, lojas e organizadores de feira, que
                compram para o próprio uso e repõem conforme o calendário.
              </p>
              <p>
                Do lado do atacado, o que muda é a previsibilidade. A fabricação é nossa, o
                fornecimento é constante e a peça sai sempre no mesmo padrão de fôrma, então o que
                você mostrou ao cliente no mês passado é o que chega no pedido deste mês. Volume
                fecha por WhatsApp, com prazo confirmado antes do aceite.
              </p>
            </div>
          </section>

          {/* Compatibilidade */}
          <section aria-labelledby="compatibilidade">
            <h2
              id="compatibilidade"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Com que tamanho de banner ela funciona
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A base segura com folga os wind banners de tamanho padrão do mercado, de 2,80 m a
                3,25 m. Para banner extra-grande ou dia de vento muito forte, o bom senso é usar
                reforço. Não medimos rajada em ensaio, então não vamos prometer número de vento: o
                que a página afirma é o peso, que foi medido na balança e está na foto acima.
              </p>
            </div>
          </section>

          {/* Entrega */}
          <section aria-labelledby="entrega">
            <h2
              id="entrega"
              className="text-2xl md:text-3xl font-bold text-cc-black mb-5 leading-tight"
            >
              Entrega em todo o Rio Grande do Sul
            </h2>
            <div className="space-y-4 text-base text-cc-gray-700 leading-relaxed">
              <p>
                A fabricação é própria, em Ivoti-RS, e a entrega vai para todo o Rio Grande do Sul.
                Ivoti é onde a peça nasce, não o limite de onde ela chega. Fornecemos e entregamos;
                a montagem do banner fica com o cliente. Para fechar prazo e frete, o caminho é
                passar cidade e quantidade no WhatsApp.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-cc-gray-100 cc-faq" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4">
          <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
          <h2
            id="faq-title"
            className="text-2xl md:text-3xl font-bold text-cc-black mb-10 text-center leading-tight"
          >
            Perguntas frequentes sobre a base de concreto para wind banner
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
      <section id="cta" className="bg-cc-black py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Orçamento de base para wind banner por quantidade
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            Passe a quantidade e a cidade que a Central do Concreto fecha o valor por peça e o prazo
            de entrega. Fabricação própria em Ivoti-RS, entrega para todo o Rio Grande do Sul.
          </p>
          <WhatsAppLink
            href={WHATSAPP_REVENDA}
            source="cta-base-wind-banner-final"
            className="inline-flex items-center gap-2 bg-cc-whatsapp hover:bg-cc-whatsapp-hover text-white px-7 py-3.5 rounded-full font-medium text-base md:text-lg transition-colors shadow-lg"
          >
            Falar no WhatsApp · (51) 99669-1757
          </WhatsAppLink>
          <p className="mt-6 text-sm text-white/80">
            Endereço: Av. Bom Jardim, 149 — Loja 02 — Vista Alegre, Ivoti-RS, 93900-000
          </p>
        </div>
      </section>
    </>
  );
}
