# Task: Fase 3 — Certificados

**Data:** 2026-08-15
**Estado:** ✅ Concluída
**Requisitos cobertos:** RF-5, RF-6.

---

## O que foi feito

- 9 certificados reais criados em `src/content/certificates/` (JSON):
  - Santander Open Academy: Big Data, Leadership, Generative AI
  - ISCTE E-Learning: Competências para o mercado de trabalho,
    Métodos e técnicas de estudo, Trabalho de equipa
  - Anthropic: Claude Code in Action
  - Udemy: React: A Quick Understanding, Obsidian Quickstart
- 5 categorias definidas: `ai`, `leadership`, `professional`, `web`, `tools`.
- Nomes legíveis das categorias adicionados aos dicionários EN e PT
  sob `pages.certificates.categories.<key>`.
- String `pages.certificates.verify` adicionada a ambos os dicionários
  (texto do link de verificação de credencial).
- `CertificateCard.astro` criado: título, emissor, ano, e ícone de
  credencial verificada (só aparece quando `credentialUrl` existe).
- `[lang]/certificates.astro` atualizado: agrupa certificados por categoria
  numa ordem definida (`categoryOrder`), com secção semântica por grupo
  (`<section aria-labelledby>`), grelha de 2 colunas em ≥sm.
- Placeholder `aws-saa.json` removido.

## Ficheiros criados

```
src/content/certificates/anthropic-claude-code.json
src/content/certificates/iscte-competencias-mercado.json
src/content/certificates/iscte-metodos-estudo.json
src/content/certificates/iscte-trabalho-equipa.json
src/content/certificates/santander-bigdata.json
src/content/certificates/santander-generative-ai.json
src/content/certificates/santander-leadership.json
src/content/certificates/udemy-obsidian.json
src/content/certificates/udemy-react.json
src/components/CertificateCard.astro
tasks/fase-3-certificados.md   ← este ficheiro
```

## Ficheiros alterados

- `src/i18n/en.json` — categorias e string "verify credential".
- `src/i18n/pt.json` — categorias e string "verificar credencial".
- `src/pages/[lang]/certificates.astro` — página real (substituiu placeholder).
- `src/content/certificates/aws-saa.json` — **removido** (era placeholder).

## Decisões tomadas

- **Datas como "2024-01-01" / "2025-01-01"** — os certificados não tinham
  data exata; usei o ano provável. O Lucas pode afinar a `date` em cada
  ficheiro quando souber a data certa.
- **Ordem das categorias** definida em código (`categoryOrder`) em vez de
  no dicionário — é uma decisão de apresentação, não de conteúdo, e muda
  raramente. Se quiser reordenar, edita o array na página.
- **Ícone de credencial verificada** em vez de texto "Verify →": mais
  compacto no card, e o `aria-label` garante acessibilidade.
- **Sem página de detalhe** — decisão fixada no modelo de conteúdo (RF-5).

## Problemas encontrados

Nenhum. Build limpo.

## Validação (checklist de qualidade)

- [x] `npm run build` passa sem erros — 27 páginas.
- [x] 9 certificados, 5 categorias em EN e PT.
- [x] Nomes de categorias traduzidos corretamente nos dois idiomas.
- [x] Ícone de credencial só aparece quando `credentialUrl` existe.
- [x] Secções semânticas com `aria-labelledby`.
- [x] Adicionar certificado = criar ficheiro JSON (RF-6 cumprido).
- [x] Categoria nova = definir chave + nome no dicionário uma vez.
- [x] Dark mode preservado.
