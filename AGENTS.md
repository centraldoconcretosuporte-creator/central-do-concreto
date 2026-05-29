<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:method -->
# Método de trabalho

Toda sessão neste repositório segue: convenções da stack, princípios K1-K4, regras críticas operacionais e editoriais, padrões editoriais de copy (ski ramp + humanizer), stack e identidade, formato `/goal` de abertura, e os POPs abaixo.

Este arquivo é mantido tão curto quanto necessário — alto sinal, sem dump de histórico. Histórico e estado vivem no PK do projeto; aqui só mora método.

## Convenções do repo

- **Stack**: Next.js 16 + React 19 + Tailwind v4. Tailwind v4 não usa `tailwind.config.*` — config vive em `postcss.config.mjs`.
- **Lint**: ESLint 9 com flat config (`eslint.config.mjs`). Não existe `.eslintrc`.
- **Estrutura**: App Router clássico. `app/` na raiz, sem `src/`. `lib/` e `components/` também na raiz.
- **Branch**: `main`. Push direto para `main` autorizado (workflow single-developer, registrado em `autoMode.allow`).
- **Build de verificação**: sempre `npm run build` antes de commit. Verde obrigatório.
- **Shell**: PowerShell. `;` encadeia comandos · nunca `&&`.

## Princípios K1-K4 · obrigatórios em todo pedido

**K1 · Think Before Coding.** Toda premissa não verificada vira fetch / view / grep / `git status` / pergunta direta · nunca chute. Régua de confiança · ≥ 75 % age, abaixo verifica. Se há mais de uma interpretação possível, listar antes de escolher.

**K2 · Simplicity First.** Só o pedido · zero feature extra · zero abstração especulativa. Se 200 linhas resolve em 50, reescrever. Pergunta de auditoria · "um engenheiro sênior diria que isto está complicado demais?".

**K3 · Surgical Changes.** Toca só o que precisa · não "melhora" código adjacente · não refatora o que não está quebrado. `git add` sempre nominal por caminho · nunca `-A` nem `.`. Combinar style existente mesmo discordando.

**K4 · Goal-Driven Execution.** Cada pedido abre com `/goal` (formato abaixo) com critério forte e verificável. Referência exata · "usar wrapper X do componente Y" · não vago tipo "padrão da home".

## Regras operacionais críticas

- PowerShell · `;` encadeia · nunca `&&`.
- Git · `git add caminho/especifico` · nunca `git add -A` nem `git add .`.
- Sem `rm -rf` · usar `Remove-Item -Recurse` se realmente preciso (bloqueado por segurança).
- Sem script runner externo · sem `node -e` · sem `child_process` dinâmico · sem `exec` em pedido autônomo.
- Pedido pro Code · arquivo `.md` autossuficiente na Desktop quando passar de poucas linhas.
- Relatórios `.md` gerados pelo Code salvam em `C:\Users\reusa\Desktop\` (nunca na raiz do projeto).
- Toda fase com commit inclui `git push origin main` como passo final · nunca deixar push manual pendente.

## Regras editoriais críticas

- NÃO criar páginas, rotas, satélites ou qualquer arquivo em `app/` sem pedido explícito no briefing.
- NÃO mexer em código que não foi pedido · drift desnecessário.
- Diretrizes editoriais são específicas por cluster, não globais. No cluster drenagem · não oferta esgoto como produto ativo · não fornece junta elástica · NÃO faz instalação (só fornece e entrega). No cluster pergolado · instala (regras próprias). Confirmar regras de cada cluster antes de abrir.
- Identificador de fornecedor da Central jamais aparece em copy, alt, EXIF, schema, slug, comentário ou README · grep zero é critério de pronto.

## Padrões editoriais de copy

Todo texto novo escrito pra páginas, FAQs, `alt`, EXIF description ou CTA passa por dois filtros antes de virar commit.

### Ski ramp · resposta primeiro

H1 entrega produto + uso principal numa frase única. Primeira frase de cada H2 responde a pergunta implícita da seção · cauda preenche com norma, dimensão, prova. Trechos auto-contidos de 130 a 160 palavras por H2. Razão técnica · AI Overview puxa parágrafos, não páginas inteiras (Mike King, Lily Ray) · sem ski ramp, o parágrafo não é citável.

Aplica também a foto · o primeiro frame visual resolve o produto sem depender de legenda. `alt` e EXIF description carregam entidades SEO da página (categoria · aplicação · região) na primeira frase. FAQ idem · pergunta + resposta direta + 1 linha de prova.

Referência canônica · `ski-ramp-principio-universal.md` no PK · cobre 6 domínios (páginas, fotos, comunicação @cinzento, aprendizado, operação física → ativos, GMB).

### Humanizer · sem pegada de IA

Antes de commit, toda copy nova passa pelos princípios da skill `humanizer` (PK). Sinais a remover · superficial `-ing endings` ("highlighting", "reflecting", "contributing to") · linguagem promocional ("vibrant", "in the heart of", "boasts a", "nestled") · vague attributions ("experts say", "industry reports") · em dash excessivo · rule of three previsível em série · negative parallelism ("not just X, but Y") · hyphenated word pair overuse · generic positive conclusions ("exciting times ahead").

Auditoria final · ler em voz alta o parágrafo · se soa como release corporativo, refazer. Variar ritmo de frase (curta · longa · curta). Especificidade derrota fluff · "Ø 600 PA-1 com encaixe ponta-bolsa" mais útil que "soluções robustas em concreto".

Referência canônica · `humanizer/SKILL.md` no PK · 26 padrões com exemplos antes/depois + processo de revisão em 2 passes.

## Stack e identidade

| Item | Valor |
|---|---|
| Framework | Next.js 16 + React 19 + Tailwind v4 |
| Repo GitHub | centraldoconcretosuporte-creator/central-do-concreto |
| Pasta local | `C:\Users\reusa\central-do-concreto` |
| Deploy | Vercel · `central-do-concreto.vercel.app` |
| Domínio oficial | `centraldoconcretoentrega.com.br` |
| Domínio que NÃO é nosso | `centraldoconcreto.com.br` (empresa MG · jamais referenciar) |
| Endereço | Av. Bom Jardim, 149 · Loja 02 · Vista Alegre · Ivoti-RS · 93900-000 |
| GPS | `-29.62038, -51.16389` (variação 5-10 m em EXIF) |
| WhatsApp | (51) 99669-1757 |

## Formato /goal

Todo pedido enviado pelo André abre com header `/goal` de três campos obrigatórios + um opcional:

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

**Gatilho**: o pedido fala em "publicar página", "criar satélite", "criar pilar" ou similar.

**Passos**:
1. Criar `app/<rota>/page.tsx` seguindo o padrão JSX do repo: `<article>` com H1 e H2s no fluxo; bloco FAQ separado em `<section className="cc-faq">` com `<details>`; CTA final em `<section>` com `bg-cc-green` e WhatsApp `(51) 99669-1757`.
2. Schema JSON-LD em bloco único `<script type="application/ld+json">` no topo do return, com `@graph` contendo `BreadcrumbList` + `FAQPage` (+ `HowTo` quando há procedimento de instalação ou escolha).
3. Tabelas técnicas em HTML semântico — `<caption>`, `<thead>`, `<th scope>`, `<tbody>`. Nunca como imagem.
4. **Validar todos os `<Link>` internos antes do build**: cada destino deve apontar para uma rota que já existe em `app/`. Se a rota não existir, remover o link ou criar a rota junto no mesmo commit.
5. Atualizar `app/sitemap.ts` adicionando a nova URL.
6. **Auditoria editorial** · aplicar Padrões editoriais de copy (seção acima) em H1, todos os H2, FAQ, CTA e `alt` de imagem. Ski ramp obrigatório em cada H2 · humanizer obrigatório em cada parágrafo de prosa. Sem essa auditoria, build verde não basta.
7. `npm run build` — confirmar build verde com a nova rota na lista.
8. `git add` nominal por caminho · cada arquivo tocado citado explicitamente · **nunca** `git add .` nem `git add -A`. Exemplo: `git add app/<rota>/page.tsx app/sitemap.ts`.
9. `git commit -m "feat: publicar pagina <nome>"` + `git push origin main`.

**Pronto quando** (checklist completo, não só build):
- `npm run build` verde, com a nova rota na lista
- Zero `<Link>` interno apontando para rota inexistente
- Nova URL presente em `app/sitemap.ts`
- Tag `<link rel="canonical">` da página aponta para a própria URL final
- Bloco JSON-LD `@graph` válido — `FAQPage` com pelo menos 3 perguntas, `BreadcrumbList` completo
- Auditoria editorial concluída · ski ramp em cada H2 · humanizer aplicado em prosa
- Commit pushed para `main`

Indexação no Google é outro escopo, executado via Cowork.

### POP 2 · Sessão de imagens com EXIF

**Gatilho**: o pedido fala em "adicionar fotos", "substituir marcadores FOTO_X", "imagens com EXIF" ou similar.

**Passos**:
1. Para cada imagem listada no pedido:
   - Converter para WebP.
   - Injetar EXIF: GPS base `-29.62038, -51.16389` com variação aleatória de 5–10 m; autor `Central do Concreto`; cidade `Ivoti-RS`; data atual.
   - Renomear em kebab-case curto.
2. Salvar em `public/<subpasta-do-cluster>/` correspondente ao tipo de página.
3. No JSX da página, substituir cada marcador `FOTO_X` pela tag de imagem apontando ao arquivo, com `alt` carregando entidades SEO do tema da página.
4. **Auditoria editorial** · `alt` e EXIF description seguem ski ramp · primeira frase carrega entidades SEO da página (categoria · aplicação · região). Humanizer aplicado em qualquer description de mais de uma frase.
5. `npm run build`.
6. `git add` nominal por caminho · **nunca** `git add .` nem `git add -A`. Exemplo: `git add public/<subpasta>/ app/<rota>/page.tsx`.
7. `git commit -m "feat: adiciona N imagens com EXIF em <pagina>"` + `git push origin main`.

**Pronto quando**: build verde, todos os marcadores substituídos, commit pushed.

### POP 3 · Pedido autossuficiente para o Code

**Gatilho**: aplica-se a TODO pedido `.md` que o André monta para o Code, sem exceção.

**Estrutura obrigatória do arquivo `.md`**:
1. Header `/goal` (formato acima).
2. Contexto curto — por que esta sessão existe.
3. **O que fazer**: passos numerados, na ordem.
4. **O que NÃO fazer**: lista explícita de comandos e tipos de mudança proibidas (anti-drift), incluindo `git add -A` / `git add .` / `rm -rf` / `node -e` / script runner externo / criação de arquivo em `app/` não pedida.
5. **Entregável**: caminho exato do relatório final em `C:\Users\reusa\Desktop\`.
6. **Critério de pronto**: condições observáveis para encerrar.

**Pronto quando**: arquivo salvo em `C:\Users\reusa\Desktop\` em kebab-case curto, Code invocado com "Lê o arquivo X e executa tudo que está nele", relatório `.md` de volta para o André.

## Aprendizado persistente

Quando um padrão se repete em sessões diferentes, decide-se onde ele vive antes de virar documento:

- **AGENTS.md** (este arquivo) — método: como executar um tipo de tarefa que volta.
- **PK do projeto** — estado: o que aconteceu, o que está no ar, decisões travadas.
- **Skill** — workflow específico que ganha lógica própria de invocação.

Não documentar coisa que aconteceu uma só vez. POP nasce na terceira repetição, não na primeira.
<!-- END:method -->
