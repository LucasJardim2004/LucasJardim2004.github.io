# Task: Fase 1 — Esqueleto bilingue e navegação

**Data:** 2026-08-14
**Estado:** ✅ Concluída
**Requisitos cobertos:** RF-9, RF-10, RF-11, RF-12; RNF-3.

---

## O que foi feito

- Estrutura bilingue `src/pages/[lang]/` implementada; getStaticPaths gera
  `/en/` e `/pt/` em paralelo a partir dos mesmos moldes. Nenhuma lógica se
  duplica por causa do idioma.
- Dicionários de interface criados: `src/i18n/en.json` e `src/i18n/pt.json`.
  Todo o texto de UI (menus, botões, títulos, placeholders) vem de uma chave;
  nenhum componente tem texto escrito à mão.
- Utilitário `src/i18n/utils.ts` com:
  - lista de idiomas suportados e tipo `Lang`,
  - função `t(lang, key)` para tradução por chave em notação pontuada,
  - `localizedPath(lang, path)` para construir URLs consistentes,
  - `isLang()` type-guard.
- `Header.astro`: nome à esquerda (link para home), navegação
  Projects · Certificates · Contact, botão **Download CV** destacado, seletor
  de idioma e toggle de tema. Marca a secção atual com `aria-current="page"`.
  Duas variantes: horizontal para ≥sm, empilhada por baixo para telemóvel.
- `Footer.astro`: linha discreta com copyright/ano, "built with" traduzido,
  e link para o repositório.
- `LanguageSwitcher.astro`: EN / PT compacto, com o idioma atual em destaque,
  preserva o caminho ao trocar (`/pt/projects` ↔ `/en/projects`).
- `ThemeToggle.astro`: botão a sério com ícones sol/lua, aria-label traduzido,
  persiste a escolha em `localStorage`.
- `BaseLayout.astro` refatorado: recebe `lang`, define `<html lang>`, integra
  Header + Footer, emite `<link rel="alternate" hreflang>` para EN, PT e
  x-default (SEO/i18n correto).
- `src/pages/index.astro` passou a página de redirect: meta refresh + JS
  `window.location.replace` para `/en/`. Nenhuma página fica órfã sem prefixo
  de idioma.
- Páginas placeholder criadas para validar navegação e traduções:
  `[lang]/index.astro` (home), `[lang]/projects.astro`,
  `[lang]/certificates.astro`, `[lang]/contact.astro`.
- `tsconfig.json`: adicionado `"resolveJsonModule": true` para importar os
  dicionários JSON com segurança de tipos.

## Ficheiros criados

```
src/i18n/en.json
src/i18n/pt.json
src/i18n/utils.ts
src/components/Header.astro
src/components/Footer.astro
src/components/LanguageSwitcher.astro
src/components/ThemeToggle.astro
src/pages/[lang]/index.astro
src/pages/[lang]/projects.astro
src/pages/[lang]/certificates.astro
src/pages/[lang]/contact.astro
tasks/fase-1-bilingue-navegacao.md   ← este ficheiro
```

## Ficheiros alterados

- `src/layouts/BaseLayout.astro` — recebe agora `lang`, inclui Header/Footer
  e emite os `hreflang` alternates. O toggle de tema provisório foi removido
  (passou a componente próprio, montado no header).
- `src/pages/index.astro` — deixou de ser a home; agora é apenas o redirect
  da raiz para `/en/`.
- `tsconfig.json` — adicionado `"resolveJsonModule": true`.

## Decisões tomadas durante a implementação

- **Redirect da raiz com meta refresh + JS.** Como o site é 100% estático,
  não há redirect HTTP 301/302 possível sem servidor. Meta refresh + JS
  cobre todos os cenários (com e sem JS, motores de busca) e o `hreflang
  x-default` sinaliza o idioma preferido aos crawlers.
- **Seletor de idioma `EN / PT` compacto**, como acordado. Fica bem em
  qualquer largura e não precisa de menu.
- **CV sempre em EN, independentemente do idioma da UI.** O link no header
  aponta para `/cv/lucas-jardim-cv.pdf` em ambas as versões — coerente com
  a decisão de "um único CV em inglês".
- **Header responsivo com duas navegações** (desktop inline + mobile por
  baixo) em vez de um menu hamburger. Mais simples, mais acessível, sem JS
  extra. Para 3 itens de menu é a escolha certa; se um dia forem mais,
  reavalia-se.
- **`aria-current="page"` em vez de classe visual apenas.** Marca a secção
  atual para leitores de ecrã e é a base para o estilo visual (via seletor
  de atributo).

## Problemas encontrados

- **Import de JSON dava erro em TypeScript estrito.** O `astro/tsconfigs/strict`
  não inclui `resolveJsonModule` por defeito, pelo que os `import en from
  './en.json'` falhavam.
  **Solução:** adicionar `"compilerOptions": { "resolveJsonModule": true }`
  ao `tsconfig.json`. Fica documentado aqui porque foge à convenção mínima
  do preset.

## Validação (checklist de qualidade)

- [x] `npm run build` passa sem erros nem avisos — 9 páginas geradas
      (4 rotas × 2 idiomas + raiz).
- [x] Funciona em EN e PT — verificado no HTML: EN tem "Projects/Download CV",
      PT tem "Projetos/Descarregar CV", sem infiltrações cruzadas.
- [x] Seletor de idioma preserva a página — em `/en/projects/` aponta para
      `/pt/projects/`, e vice-versa.
- [x] `<html lang>` correto em cada idioma.
- [x] `hreflang` alternates emitidos (en, pt, x-default) — SEO/i18n correto.
- [x] Raiz `/` encaminha para `/en/`.
- [x] Marcação `aria-current="page"` presente na secção atual.
- [x] Dark mode preservado (classe `.dark` no CSS gerado).
- [x] Foco visível preservado (`:focus-visible` no CSS).
- [x] Reduced-motion respeitado.
- [x] Responsivo — duas variantes de navegação (desktop + mobile) sem JS extra.
- [x] Sem duplicação — a lógica de rotas está uma vez só; só o texto de
      conteúdo é que existe em duas versões.
