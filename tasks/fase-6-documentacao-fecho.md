# Task: Fase 6 — Documentação de fecho

**Data:** 2026-08-15
**Estado:** ✅ Concluída
**Requisitos cobertos:** RNF-2 (validação final da manutenção).

---

## O que foi feito

`docs/maintenance-guide.md` reescrito por completo com o site real à
frente. A versão inicial (Fase 0) era baseada no modelo de conteúdo
imaginado; esta versão usa os caminhos, ficheiros e padrões exactos que
ficaram definidos durante o desenvolvimento.

Cobre:
- Fluxo de publicação (dev → build → commit → push)
- Adicionar projeto: estrutura de pastas, modelo de frontmatter completo,
  valores válidos de `type`, nota sobre `coverAlt` obrigatório
- Adicionar imagens a um projeto: pasta `shared/`, descomento dos campos,
  comportamento do Astro (WebP, srcset)
- Destacar projeto na home (`featured: true`)
- Esconder projeto temporariamente (`draft: true`)
- Editar projeto existente: lista dos 9 slugs reais
- Adicionar certificado: modelo JSON real, campos obrigatórios e opcionais
- Tabela de categorias existentes com chaves EN e PT
- Adicionar categoria nova: 4 passos exactos
- Atualizar CV: comando real com `cp` e `git`
- Atualizar contactos: ficheiro `src/config/contact.ts` com os dados reais
- Corrigir textos de interface: dicionários EN e PT
- Editar apresentação pessoal da home: chaves reais no dicionário
- Testar localmente: `npm run dev` e `npm run build`
- Resolução de problemas: causas comuns de falha do build, projetos
  invisíveis, imagens que não carregam, cache de previews de partilha

## Ficheiros criados / alterados

- `docs/maintenance-guide.md` — reescrito (substituiu versão inicial)
- `tasks/fase-6-documentacao-fecho.md` ← este ficheiro

## Nota sobre o roadmap

Com a Fase 6 concluída, o roadmap completo está fechado:

- [x] Fase 0 — Fundações
- [x] Fase 1 — Esqueleto bilingue e navegação
- [x] Fase 2 — Projetos
- [x] Fase 3 — Certificados
- [x] Fase 4 — Home, contactos e CV
- [x] Fase 5 — Polimento e lançamento
- [x] Fase 6 — Documentação de fecho

O site está pronto para produção.
