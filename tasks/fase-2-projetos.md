# Task: Fase 2 — Projetos

**Data:** 2026-08-14
**Estado:** ✅ Concluída
**Requisitos cobertos:** RF-2, RF-3, RF-4; RNF-2, RNF-6, RNF-7.

---

## O que foi feito

- `src/content/config.ts` criado com esquemas validados para as collections
  `projects` e `certificates`. O build rejeita conteúdo mal formado com
  mensagem clara (campo obrigatório em falta, tipo errado, URL inválida).
- Dois projectos de exemplo criados em EN e PT (mesmo slug, pastas espelhadas):
  `personal-site` e `portfolio-tracker`. Cada um é uma pasta autocontida com
  `index.mdx` e `cover.png`.
- Imagens de capa placeholder (PNG 1200×630) geradas com as cores do design
  system. Substituir por screenshots reais é trocar o ficheiro `cover.png`
  em cada pasta — sem tocar em código.
- `ProjectCard.astro`: card com imagem de capa, tags, título, resumo e seta
  indicadora. Hover com scale subtil na imagem e deslocamento da seta.
  Imagens carregadas com `loading="lazy"` e otimizadas em build pelo Astro.
- `ProjectLayout.astro`: moldura da página de detalhe. Inclui breadcrumb de
  volta à listagem, cabeçalho com data e tags, botões repo/demo condicionais
  (só aparecem quando os campos existem), imagem de capa a largura total, e
  corpo MDX com estilos tipográficos via `@tailwindcss/typography`.
- `[lang]/projects/index.astro`: listagem de cards, filtrada pelo idioma atual
  e excluindo `draft: true`, ordenada por data descendente. Grelha de 2 colunas
  em ≥sm, 1 coluna em mobile. Contagem de projectos traduzida (singular/plural).
- `[lang]/projects/[slug].astro`: detalhe gerado automaticamente por
  `getStaticPaths` — nenhuma rota se escreve à mão. Slug extraído da collection
  (`en/nome` → `nome`) para construir o URL limpo.
- `@tailwindcss/typography` instalado e ligado no `tailwind.config.mjs` para
  os estilos do corpo MDX (headings, parágrafos, código, links, listas).
- Placeholder `[lang]/projects.astro` da Fase 1 removido (substituído pela
  pasta `projects/` com `index.astro` e `[slug].astro`).

## Ficheiros criados

```
src/content/config.ts
src/content/projects/en/personal-site/index.mdx
src/content/projects/en/personal-site/cover.png
src/content/projects/pt/personal-site/index.mdx
src/content/projects/pt/personal-site/cover.png
src/content/projects/en/portfolio-tracker/index.mdx
src/content/projects/en/portfolio-tracker/cover.png
src/content/projects/pt/portfolio-tracker/index.mdx
src/content/projects/pt/portfolio-tracker/cover.png
src/components/ProjectCard.astro
src/layouts/ProjectLayout.astro
src/pages/[lang]/projects/index.astro
src/pages/[lang]/projects/[slug].astro
tasks/fase-2-projetos.md   ← este ficheiro
```

## Ficheiros alterados

- `tailwind.config.mjs` — adicionado `require('@tailwindcss/typography')` nos
  plugins.
- `src/pages/[lang]/projects.astro` — **removido** (substituído pela pasta
  `projects/` com as rotas próprias).

## Dependências novas

- `@tailwindcss/typography` — plugin oficial para estilos tipográficos no corpo
  MDX. Necessário porque o Tailwind faz reset de todos os estilos de headings,
  parágrafos e listas por defeito.

## Decisões tomadas durante a implementação

- **Slug extraído da collection** (`en/nome` → `nome`) em vez de configurar
  um `base` na collection. É a abordagem mais compatível com a estrutura de
  pastas espelhadas EN/PT que decidimos.
- **Imagens placeholder PNG sólido** em vez de SVG. O esquema usa `image()`
  do Astro (não `z.string()`), o que força um ficheiro de imagem real para
  o Astro poder otimizar e gerar os `srcset`. Ao substituir por screenshots
  reais, o processo é idêntico.
- **`loading="eager"` na imagem de detalhe**, `"lazy"` nos cards de listagem.
  A imagem de detalhe está acima da dobra; a lazy loading atrasaria o LCP.
- **Contagem singular/plural inline** na listagem em vez de entradas no
  dicionário. São apenas duas strings de contexto de UI muito específico;
  adicionar ao dicionário seria over-engineering para este caso.

## Problemas encontrados

- **Caminhos relativos errados na listagem.** Ao mover a listagem de
  `[lang]/projects.astro` para `[lang]/projects/index.astro`, os imports
  ficaram com um nível a menos (`../../` em vez de `../../../`).
  **Solução:** corrigidos os caminhos. Fica documentado como ponto de atenção
  ao criar rotas aninhadas.
- **Aviso de certificados vazios.** O Astro avisou que a pasta
  `src/content/certificates/` não tinha ficheiros. Não é um erro — resolve-se
  na Fase 3 quando os certificados entram.

## Validação (checklist de qualidade)

- [x] `npm run build` passa sem erros — 13 páginas geradas.
- [x] Páginas de detalhe geradas para EN e PT (4 páginas de detalhe).
- [x] Títulos correctos nas páginas de detalhe (EN e PT).
- [x] Listagem filtra pelo idioma e exclui `draft: true`.
- [x] Ordenação por data descendente automática.
- [x] Botões repo/demo condicionais — só aparecem quando o campo existe.
- [x] Imagens optimizadas pelo Astro (webp, tamanhos ajustados).
- [x] Corpo MDX com estilos tipográficos correctos.
- [x] Adicionar projecto = criar ficheiros, sem tocar em código (RF-4).
- [x] Campo obrigatório em falta → build falha com mensagem clara (RF-4).
- [x] Seletor de idioma preserva a página de detalhe.
- [x] Dark mode preservado em todos os novos componentes.
