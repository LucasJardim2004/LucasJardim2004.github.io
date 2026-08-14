# Task: Projetos reais + galeria de imagens

**Data:** 2026-08-14
**Estado:** ✅ Concluída
**Requisitos cobertos:** RF-2, RF-3, RF-4 (revisitados com conteúdo real);
extensão do modelo de conteúdo.

---

## O que foi feito

- Removidos os dois projectos de exemplo fabricados (`personal-site`,
  `portfolio-tracker`).
- Adicionados **9 projectos reais** a partir dos textos fornecidos, reescritos
  num registo mais limpo e profissional, cada um em EN e PT (18 ficheiros):
  cocktail-explorer, world-tracker, flag-guesser, geo-organizer, pong,
  euro-2024-sticker-album, isctorrent, simon-game, sokoban.
- **Esquema estendido** (`config.ts`):
  - `type` (string) — ex.: "Web app", "Game", "University project".
  - `status` (string, default "Completed").
  - `gallery` (opcional) — lista de `{ src: image(), alt: string }` que
    alimenta o carrossel na página de detalhe.
  - `cover` e `coverAlt` passaram a **opcionais**, com refine: se há capa, o
    alt é obrigatório (acessibilidade).
- **`ProjectGallery.astro`** criado — carrossel acessível: navegável por
  teclado, botões com aria-label, indicadores de posição, scroll-snap, sem
  autoplay. Só é renderizado quando há imagens.
- **`ProjectCard.astro`** atualizado — capa opcional: sem imagem, mostra um
  bloco tipográfico sóbrio (tipo + título em Fraunces sobre fundo de acento
  suave). Mostra até 3 tags no card.
- **`ProjectLayout.astro`** atualizado — cabeçalho com type · status · data,
  capa a largura total só quando existe, e a galeria integrada no fim (só
  quando há imagens).

## Ficheiros criados

```
src/components/ProjectGallery.astro
src/content/projects/en/<9 projetos>/index.mdx
src/content/projects/pt/<9 projetos>/index.mdx
tasks/projetos-reais-galeria.md   ← este ficheiro
```

## Ficheiros alterados

- `src/content/config.ts` — esquema estendido (type, status, gallery, cover
  opcional).
- `src/components/ProjectCard.astro` — capa opcional + bloco tipográfico.
- `src/layouts/ProjectLayout.astro` — type/status, capa opcional, galeria.

## Decisões tomadas

- **Conteúdo em inglês nas duas pastas (en/ e pt/)** por agora. O Lucas optou
  por conteúdo só em inglês; para não deixar a página PT vazia, o mesmo texto
  inglês está em ambas. Quando quiser traduzir, edita os ficheiros em pt/.
- **Capa opcional em vez de placeholders falsos.** Mais limpo de manter — um
  projecto sem capa mostra um bloco tipográfico intencional; ao adicionar
  cover.png, a imagem aparece sozinha.
- **`type` como campo próprio** (opção escolhida pelo Lucas), não como tag.
- **Datas aproximadas.** Os textos só indicavam o ano; atribuí um mês
  plausível a cada projecto para a ordenação ser estável. O Lucas pode
  ajustar a `date` de cada projecto no frontmatter.
- **`featured: true`** em 4 projectos que mostram gama técnica (cocktail,
  world-tracker, geo-organizer, euro, isctorrent) — para a home da Fase 4.
  Ajustável a qualquer momento.
- **Carrossel sem autoplay.** Movimento automático prejudica acessibilidade e
  colide com a regra de "sem animações exuberantes". A navegação é manual.

## Problemas encontrados

Nenhum novo. Build limpo — 27 páginas.

## Validação (checklist de qualidade)

- [x] `npm run build` passa sem erros — 27 páginas.
- [x] 9 projectos aparecem na listagem, ordenados por data descendente.
- [x] Capa tipográfica presente nos 9 (sem imagem real ainda).
- [x] type · status corretos na página de detalhe.
- [x] Páginas de detalhe geradas para EN e PT.
- [x] Galeria não renderiza quando vazia (comportamento correto).
- [x] Campo obrigatório em falta → build falha com mensagem clara.
- [x] Dark mode preservado em todos os componentes novos.
