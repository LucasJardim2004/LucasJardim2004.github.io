# Task: Fase 5 — Polimento e lançamento

**Data:** 2026-08-15
**Estado:** ✅ Concluída
**Requisitos cobertos:** RF-13, RNF-5, RNF-6, RNF-7, RNF-8.

---

## O que foi feito

- **`SEO.astro`** criado — componente que centraliza Open Graph, Twitter
  Card, canonical, robots e author. Incluído no `BaseLayout`.
- **`BaseLayout.astro`** atualizado:
  - Importa e usa `SEO.astro`.
  - `hreflang` com URLs absolutos (exigido pelo Google).
  - `id="main-content"` no `<main>` para o skip link funcionar.
- **`og-image.png`** gerada (1200×630) — imagem de partilha com design
  sóbrio alinhado com o resto do site.
- **`favicon.svg`** refinado — monograma LJ mais limpo e legível.
- **`404.astro`** criado — página de erro amigável com dois CTAs (home e
  projects). O GitHub Pages serve-a automaticamente.
- **`Header.astro`** atualizado:
  - Skip link "Skip to main content" — visível ao foco por teclado,
    invisível visualmente (sr-only).
  - `aria-label` no link do nome e no botão de CV.
  - `aria-label` nas duas `<nav>` (primary / mobile).
- **`global.css`** atualizado:
  - Alvos de toque mínimos de 44px em `a` e `button` (RNF-5 mobile).
  - Exceção para links inline em prosa (sem distorção de layout).
  - `::selection` com cor de acento.
  - `prefers-reduced-motion` já estava, mantido.
- **Títulos únicos por página** validados: cada página tem um `<title>`
  distinto e descritivo.
- **Open Graph** validado: `og:title`, `og:description`, `og:image`,
  `og:url`, `og:locale`, Twitter Card — presentes em todas as páginas.

## Ficheiros criados

```
src/components/SEO.astro
src/pages/404.astro
public/og-image.png
tasks/fase-5-polimento.md   ← este ficheiro
```

## Ficheiros alterados

- `src/layouts/BaseLayout.astro` — SEO, hreflang absolutos, id="main-content".
- `src/components/Header.astro` — skip link, aria-labels.
- `src/styles/global.css` — alvos de toque, ::selection.
- `public/favicon.svg` — refinado.

## Validação (checklist de qualidade)

- [x] `npm run build` passa sem erros.
- [x] `404.html` gerada e servida pelo GitHub Pages.
- [x] `og-image.png` 1200×630 presente.
- [x] Open Graph + Twitter Card em todas as páginas.
- [x] Títulos únicos e descritivos por página.
- [x] `rel="canonical"` presente.
- [x] `hreflang` com URLs absolutos.
- [x] Skip link "Skip to main content" funcional.
- [x] Alvos de toque ≥44px em mobile.
- [x] `prefers-reduced-motion` respeitado.
- [x] Dark mode preservado em todos os componentes.
