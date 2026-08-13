# Task: Fase 0 — Fundações

**Data:** 2026-08-14
**Estado:** ✅ Concluída
**Requisitos cobertos:** RNF-1, RNF-4, RNF-9; base para todos os restantes.

---

## O que foi feito

- Projeto Astro 5 criado com TypeScript em modo estrito.
- Tailwind CSS ligado via `@astrojs/tailwind`; os tokens do design system (cores,
  tipografia, espaçamentos) definidos em `tailwind.config.mjs` e as variáveis CSS
  em `src/styles/global.css`.
- Duas paletas completas (modo claro e modo escuro) definidas como variáveis CSS;
  alternância via classe `.dark` no elemento `<html>`.
- Script anti-flash de tema injetado no `<head>` antes do primeiro paint — lê
  `localStorage` e a preferência do sistema para aplicar o tema correto sem
  piscar.
- Três fontes auto-hospedadas instaladas via npm e embutidas no build:
  Fraunces Variable (títulos), Inter Variable (corpo/UI), JetBrains Mono Variable
  (código). Sem dependências de CDNs externos.
- `BaseLayout.astro` criado como moldura base de todas as páginas: `<head>`,
  fontes, dark/light mode, toggle de tema provisório.
- Página `src/pages/index.astro` mínima para validar o pipeline.
- `favicon.svg` com monograma LJ na cor de acento do design system.
- `.gitignore` a cobrir `node_modules/`, `dist/`, `.astro/`, segredos e ficheiros
  de sistema.
- Workflow `.github/workflows/deploy.yml` para build e deploy automático no
  GitHub Pages via GitHub Actions (source: GitHub Actions, não branch).
- Pasta `tasks/` criada para registo de trabalho por fase.

## Ficheiros criados

```
.github/workflows/deploy.yml
.gitignore
astro.config.mjs
package.json
package-lock.json
public/favicon.svg
src/layouts/BaseLayout.astro
src/pages/index.astro
src/styles/global.css
tailwind.config.mjs
tsconfig.json
tasks/fase-0-fundacoes.md   ← este ficheiro
```

## Ficheiros alterados

Nenhum — esta foi a fase de criação inicial.

## Decisões tomadas durante a implementação

- **Astro 5 + `withastro/action@v3`** no workflow. A action oficial do Astro
  trata automaticamente do upload dos artefactos de build para o Pages, sem
  precisar de passos manuais de `actions/upload-pages-artifact`.
- **`@fontsource-variable/*`** em vez de ficheiros woff2 manuais. As variáveis de
  fonte (eixo de peso contínuo) com um único ficheiro por script reduzem o número
  de requests e o peso total. O build do Astro/Vite extrai só os subsets usados.
- **Toggle de tema provisório** em `BaseLayout` em vez de um componente
  `ThemeToggle.astro` completo — a separação fica para a Fase 1, quando o header
  e a navegação entram. Evita criar um componente que seria imediatamente
  refatorado.
- **Página `index.astro` mínima** com texto "Work in progress" — não é a home
  final (que vem na Fase 4), serve apenas para confirmar que o pipeline funciona.

## Problemas encontrados

Nenhum. O build passou limpo (`npm run build`) sem erros nem avisos.

## Validação (checklist de qualidade)

- [x] `npm run build` passa sem erros nem avisos.
- [x] Dark mode presente no CSS gerado (classe `.dark` com todos os tokens).
- [x] Fontes auto-hospedadas — 15 ficheiros woff2 no build, zero referências a
      CDNs externos (RNF-9 cumprido).
- [x] Script anti-flash de tema presente no HTML.
- [ ] EN/PT — não aplicável nesta fase (entra na Fase 1).
- [ ] Responsivo / acessível / critérios de features — não aplicável nesta fase.

## Primeiro commit

```
44766b4  init: phase 0 foundations
```

22 ficheiros, 8882 inserções. Push para
`https://github.com/LucasJardim2004/LucasJardim2004.github.io.git` com sucesso.
