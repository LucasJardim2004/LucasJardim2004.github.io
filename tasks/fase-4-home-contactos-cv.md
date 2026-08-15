# Task: Fase 4 — Home, contactos e CV

**Data:** 2026-08-15
**Estado:** ✅ Concluída
**Requisitos cobertos:** RF-1, RF-7, RF-8.

---

## O que foi feito

- **CV copiado** para `public/cv/lucas-jardim-cv.pdf` — caminho estável e
  permanente. Atualizar o CV = substituir este ficheiro.
- **`src/config/contact.ts`** criado — único sítio para atualizar email,
  telefone, LinkedIn e GitHub. Importado pela página de contactos e pelo
  footer.
- **Home (`[lang]/index.astro`)** construída:
  - Role em mono ("Tech Analyst @ Deloitte") como eyebrow.
  - Heading em Fraunces.
  - Dois parágrafos de apresentação baseados no CV.
  - Dois CTAs: "Selected projects" (botão primário) e "Download CV"
    (botão secundário).
  - Secção de projetos em destaque, puxada automaticamente de
    `featured: true`, ordenada por data. Esconde-se se não houver
    projetos em destaque.
  - Link "All projects →" para a listagem completa.
- **Contactos (`[lang]/contact.astro`)** construídos:
  - Cards de contacto para email, telefone, LinkedIn e GitHub, com ícones
    SVG inline, label em mono, valor em destaque, e seta ↗ nos externos.
  - Hover: borda da cor de acento.
  - Card de CV com botão de download direto.
- **Footer** atualizado com links para GitHub e LinkedIn, importados do
  `contact.ts`.
- **Dicionários** atualizados com todas as strings novas (home e contactos)
  em EN e PT.

## Ficheiros criados

```
src/config/contact.ts
public/cv/lucas-jardim-cv.pdf
tasks/fase-4-home-contactos-cv.md   ← este ficheiro
```

## Ficheiros alterados

- `src/pages/[lang]/index.astro` — home real (substituiu placeholder).
- `src/pages/[lang]/contact.astro` — página de contactos real.
- `src/components/Footer.astro` — links de GitHub e LinkedIn.
- `src/i18n/en.json` — strings de home e contactos.
- `src/i18n/pt.json` — strings de home e contactos.

## Decisões tomadas

- **Telefone visível na página de contactos** — já está no CV público,
  portanto não acrescenta exposição.
- **CV abre numa nova aba** (`target="_blank"`) em vez de fazer download
  direto — mais amigável em dispositivos móveis onde o download pode ser
  confuso.
- **Projetos featured na home** puxados em runtime (getCollection) em vez
  de hardcoded — adicionar `featured: true` a qualquer projeto faz aparecer
  automaticamente na home, sem tocar em código.
- **Footer simples** com texto em vez de ícones SVG — mais legível, mais
  fácil de manter, e suficientemente discreto para o registo sóbrio do site.

## Validação (checklist de qualidade)

- [x] `npm run build` passa sem erros.
- [x] Home EN e PT com role, heading, intro e interests.
- [x] 5 projetos featured aparecem na home.
- [x] Botões de CV e "All projects" presentes.
- [x] Contactos: email, telefone, LinkedIn, GitHub em EN e PT.
- [x] CV presente em `dist/cv/lucas-jardim-cv.pdf`.
- [x] Footer com GitHub e LinkedIn.
- [x] Dados de contacto num único ficheiro (RF-7 cumprido).
- [x] Dark mode preservado.
