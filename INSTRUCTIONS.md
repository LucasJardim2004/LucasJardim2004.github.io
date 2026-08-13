# Instruções — referência rápida

Cartão de bolso das regras de desenvolvimento. Para o detalhe completo, ver
`AGENTS.md`. Estas são as regras que mais se consultam.

## Antes de começar (cada sessão)
1. Ler `AGENTS.md` por inteiro.
2. Ver o requisito da feature em `requirements.md` e os seus critérios de aceitação.
3. Confirmar em que fase estás no `roadmap.md`. Não saltar fases.

## As regras de ouro
- **Manutenção acima de tudo.** Gerir conteúdo nunca implica tocar em código. Qualquer
  decisão que complique a manutenção para o Lucas está, por defeito, errada.
- **Uma fase de cada vez**, pela ordem do roadmap. Cada fase deixa o site publicado e
  funcional.
- **Nunca duplicar.** Marcação, lógica ou valores repetidos viram componente, função ou
  token.
- **Só se duplica o conteúdo escrito**, nunca a mecânica do site.

## Design (não negociável)
- Sobriedade primeiro; em dúvida, menos.
- Acento de cor raro e intencional (azul-petróleo).
- Fraunces nos títulos grandes; Inter no corpo; JetBrains Mono no código. Pesos 400/500.
- Sentence case sempre. Sem gradientes/sombras/glow.
- Dark e light mode em cada componente.

## Bilingue
- EN por omissão, PT disponível.
- Conteúdo em pastas espelhadas `en/` e `pt/`, ligado pelo slug.
- Texto de UI só nos dicionários `en.json` / `pt.json`, nunca escrito num componente.

## Antes de dar algo por "pronto" (checklist)
- [ ] `npm run build` passa sem erros nem avisos.
- [ ] Funciona em EN e PT.
- [ ] Funciona em claro e escuro.
- [ ] Responsivo (telemóvel + computador).
- [ ] Acessível (contraste AA, teclado, foco, alt text).
- [ ] Cumpre os critérios de aceitação do requisito.
- [ ] Sem duplicação introduzida.

## Parar e perguntar antes de
- Mudar a stack ou adicionar dependência de peso.
- Alterar o modelo de conteúdo já fixado.
- Reverter uma decisão documentada.
- Introduzir serviços externos (analytics, formulários, fontes de terceiros).
- Adicionar features fora do roadmap.

## Git e deploy
- Commits pequenos, imperativo, em inglês.
- Nunca commitar: `node_modules/`, `dist/`, segredos, `.DS_Store`.
- Nunca fazer push que quebre o build — quebra o site em produção.
- CV sempre em `public/cv/lucas-jardim-cv.pdf` (nome estável).
