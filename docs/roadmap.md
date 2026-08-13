# Roadmap

Ordem de implementação incremental. Lógica: **construir sempre sobre chão firme.** Cada
fase deixa o site publicado e funcional no fim — nada de estados "meio prontos". A ordem
respeita as dependências: fundações primeiro, conteúdo que dá valor a seguir, polimento
no fim.

Cada fase só se considera concluída quando cumpre a **checklist de qualidade** do
`AGENTS.md` e os critérios de aceitação dos requisitos que a fase implementa.

---

## Fase 0 — Fundações

Criar o projeto Astro; ligar TypeScript e Tailwind; configurar o deploy automático para
o GitHub Pages; pôr no ar uma página mínima. Definir os tokens do design system em
código e o `BaseLayout` com dark/light mode.

**No fim:** o pipeline commit → build → site publicado funciona. Tudo o resto passa a
ser adicionar peças a uma máquina que já roda.

**Requisitos tocados:** RNF-1, RNF-4, RNF-9; base para todos.

---

## Fase 1 — Esqueleto bilingue e navegação

A estrutura `[lang]/`; o dicionário de interface (`en.json` / `pt.json`); header com
navegação; footer; seletor de idioma; botão de tema; encaminhamento da raiz para o
idioma por omissão.

**No fim:** site navegável em EN e PT, com páginas ainda vazias mas todas ligadas.

**Requisitos tocados:** RF-9, RF-10, RF-11, RF-12; RNF-3.

---

## Fase 2 — Projetos

O coração do site. Esquema de conteúdo validado (`config.ts`); `ProjectCard`; página de
listagem com cards; página de detalhe gerada automaticamente. Feito com um ou dois
projetos de exemplo para validar a experiência.

**No fim:** adicionar um projeto criando ficheiros faz aparecer card e página, sem tocar
em código.

**Requisitos tocados:** RF-2, RF-3, RF-4.

---

## Fase 3 — Certificados

Esquema; `CertificateCard`; página com agrupamento por tema. Mais leve que a Fase 2 —
reaproveita muito do já feito.

**No fim:** adicionar certificados da mesma forma simples, agrupados pela categoria.

**Requisitos tocados:** RF-5, RF-6.

---

## Fase 4 — Home, contactos e CV

Página inicial (apresentação + projetos em destaque puxados de `featured`); página de
contactos (email + redes); botão de download do CV.

Vêm agora porque dependem de tudo o resto existir — a home só faz sentido quando há
projetos para destacar.

**Requisitos tocados:** RF-1, RF-7, RF-8.

---

## Fase 5 — Polimento e lançamento

SEO e Open Graph; favicon; `og-image`; passagem de acessibilidade (contraste, teclado,
leitores de ecrã); performance; responsividade fina no telemóvel; página 404.

**No fim:** o site está pronto para pôr no perfil.

**Requisitos tocados:** RF-13, RNF-5, RNF-6, RNF-7, RNF-8.

---

## Fase 6 — Documentação de fecho

Escrever/rever o `maintenance-guide.md` com o site já real à frente — passos verdadeiros,
contra o site que existe.

Fica para o fim de propósito: um manual escrito contra algo que já se pode tocar é muito
mais útil do que um escrito contra um site imaginado.

**Requisitos tocados:** RNF-2 (validação final da manutenção).

---

## Notas sobre a ordem

- **A home não vem primeiro**, apesar de ser a primeira página que o visitante vê. É a
  que mais depende das outras (destaca projetos, liga a tudo). Construí-la cedo
  obrigaria a refazê-la.
- **A documentação de manutenção fica para o fim** pela mesma razão: só se escreve bem
  um manual sobre algo que já existe.

## Fora de âmbito por agora

Blog, analytics, animações elaboradas, formulário de contacto com servidor. Ficam como
"talvez um dia". Se algum se tornar importante, encaixa-se como **fase nova** — a
arquitetura já deixa espaço. Nunca por deriva silenciosa (ver limites no `AGENTS.md`).

## Flexibilidade

Este roadmap não é rígido. Se a meio for preciso trocar prioridades, ajusta-se — mas
esta ordem tira o máximo de valor com o mínimo de retrabalho.
