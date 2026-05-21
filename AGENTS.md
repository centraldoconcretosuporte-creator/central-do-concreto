<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:method -->
# Método de trabalho

Toda sessão neste repositório segue três blocos: convenções da stack, formato `/goal` de abertura de pedido, e os POPs (Procedimentos Operacionais Padrão) abaixo.

Este arquivo é mantido tão curto quanto necessário — alto sinal, sem dump de histórico, sem cap arbitrário. Histórico e estado vivem no PK do projeto; aqui só mora método.

## Convenções do repo

- **Stack**: Next.js 16 + React 19 + Tailwind v4. Tailwind v4 não usa `tailwind.config.*` — config vive em `postcss.config.mjs`.
- **Lint**: ESLint 9 com flat config (`eslint.config.mjs`). Não existe `.eslintrc`.
- **Estrutura**: App Router clássico. `app/` na raiz, sem `src/`. `lib/` e `components/` também na raiz.
- **Branch**: `main`. Push direto para `main` está autorizado (workflow single-developer, registrado em `autoMode.allow`).
- **Build de verificação**: sempre `npm run build` antes de commit. Verde obrigatório.

## Formato /goal

Todo pedido enviado pelo André abre com um header `/goal` de três campos obrigatórios + um opcional:

```
/goal
Objetivo: [frase única, ação + critério verificável]
Pronto quando: [estado terminal observável]
Verificador: [quem confirma — André / Cowork / Code / GSC / build]
Não-objetivo: [opcional — usar quando há risco de drift]
```

Se o pedido chegar sem `/goal`, parar e pedir antes de executar.

## POPs

### POP 1 · Publicar página de cluster

**Gatilho**: o pedido fala em "publicar página", "criar satélite", "criar pilar", ou similar.

**Passos**:
1. Criar `app/<rota>/page.tsx` seguindo o padrão JSX do repo: `<article>` com H1 e H2s no fluxo; bloco FAQ separado em `<section className="cc-faq">` com `<details>`; CTA final em `<section>` com `bg-cc-green` e WhatsApp `(51) 99669-1757`.
2. Schema JSON-LD em bloco único `<script type="application/ld+json">` no topo do return, com `@graph` contendo `BreadcrumbList` + `FAQPage` (+ `HowTo` quando há procedimento de instalação ou escolha).
3. Tabelas técnicas em HTML semântico — `<caption>`, `<thead>`, `<th scope>`, `<tbody>`. Nunca como imagem.
4. **Validar todos os `<Link>` internos antes do build**: cada destino deve apontar para uma rota que já existe em `app/`. Se a rota não existir, remover o link ou criar a rota junto no mesmo commit.
5. Atualizar `app/sitemap.ts` adicionando a nova URL.
6. `npm run build` — confirmar build verde com a nova rota na lista.
7. `git add .` + `git commit -m "feat: publicar pagina <nome>"` + `git push origin main`.

**Pronto quando** (checklist completo, não só build):
- `npm run build` verde, com a nova rota na lista
- Zero `<Link>` interno apontando para rota inexistente
- Nova URL presente em `app/sitemap.ts`
- Tag `<link rel="canonical">` da página aponta para a própria URL final
- Bloco JSON-LD `@graph` válido — `FAQPage` com pelo menos 3 perguntas, `BreadcrumbList` completo
- Commit pushed para `main`

Indexação no Google é outro escopo, executado via Cowork.

### POP 2 · Sessão de imagens com EXIF

**Gatilho**: o pedido fala em "adicionar fotos", "substituir marcadores FOTO_X", "imagens com EXIF", ou similar.

**Passos**:
1. Para cada imagem listada no pedido:
   - Converter para WebP.
   - Injetar EXIF: GPS base `-29.62038, -51.16389` com variação aleatória de 5–10 m; autor `Central do Concreto`; cidade `Ivoti-RS`; data atual.
   - Renomear em kebab-case curto.
2. Salvar em `public/produtos/` (ou subpasta correspondente ao tipo de página).
3. No JSX da página, substituir cada marcador `FOTO_X` pela tag de imagem apontando ao arquivo, com `alt` carregando entidades SEO do tema da página.
4. `npm run build`.
5. `git add .` + `git commit -m "feat: adiciona N imagens com EXIF em <pagina>"` + `git push origin main`.

**Pronto quando**: build verde, todos os marcadores substituídos, commit pushed.

### POP 3 · Pedido autossuficiente para o Code

**Gatilho**: aplica-se a TODO pedido `.md` que o André monta para o Code, sem exceção.

**Estrutura obrigatória do arquivo `.md`**:
1. Header `/goal` (formato acima).
2. Contexto curto — por que esta sessão existe.
3. **O que fazer**: passos numerados, na ordem.
4. **O que NÃO fazer**: lista explícita de comandos e tipos de mudança proibidas (anti-drift).
5. **Entregável**: caminho exato do relatório final em `C:\Users\reusa\Área de Trabalho\`.
6. **Critério de pronto**: condições observáveis para encerrar.

**Pronto quando**: arquivo salvo em `C:\Users\reusa\Área de Trabalho\` em kebab-case curto, Code invocado com "Lê o arquivo X e executa tudo que está nele", relatório `.md` de volta para o André.

## Aprendizado persistente

Quando um padrão se repete em sessões diferentes, decide-se onde ele vive antes de virar documento:

- **AGENTS.md** (este arquivo) — método: como executar um tipo de tarefa que volta.
- **PK do projeto** — estado: o que aconteceu, o que está no ar, decisões travadas.
- **Skill** — workflow específico que ganha lógica própria de invocação.

Não documentar coisa que aconteceu uma só vez. POP nasce na terceira repetição, não na primeira.
<!-- END:method -->
