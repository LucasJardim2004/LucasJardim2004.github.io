# AGENTS.md

Regras de desenvolvimento para qualquer agente de IA que trabalhe neste projeto.
Este documento é a **fonte de verdade** do processo. Lê-o por inteiro no arranque
de cada sessão, antes de escrever qualquer linha de código.

Projeto: site pessoal de Lucas Jardim
Stack: Astro + TypeScript + Tailwind CSS + MDX, publicado no GitHub Pages
Objetivos-âncora: gratuito, profissional, **simples de manter a longo prazo**, bilingue (EN/PT).

Se em algum momento uma instrução deste documento colidir com um pedido pontual,
para e assinala a colisão em vez de escolher em silêncio.

---

## 1. Processo

Como trabalho, sessão a sessão.

- **Parte sempre dos requisitos.** Antes de implementar uma feature, lê o requisito
  correspondente em `docs/requirements.md` e os seus critérios de aceitação. Se o
  requisito não existir ou estiver ambíguo, para e pergunta — não inventes âmbito.
- **Uma fase de cada vez, pela ordem do roadmap.** Segue `docs/roadmap.md`. Não
  saltes à frente nem misturas fases. Cada incremento tem de deixar o site
  **publicado e funcional** no fim — nada de estados "meio prontos".
- **Não fecho uma feature sem os critérios de aceitação cumpridos.** "Parece que
  funciona" não chega; valida contra a lista (ver secção 7, Qualidade).
- **Confirmo antes de decisões estruturais.** Mudar a stack, adicionar uma
  dependência de peso, alterar o modelo de conteúdo, ou reverter uma decisão já
  documentada exige perguntar primeiro (ver secção 8, Limites).
- **Trabalho incremental e legível.** Prefere passos pequenos e verificáveis a
  grandes saltos. É melhor entregar uma peça sólida do que três a meio.
- **Documento à medida que avanço.** Se uma decisão técnica nova for tomada durante
  a implementação, regista-a em `docs/architecture.md`.

---

## 2. Código

Convenções técnicas. O objetivo é consistência e manutenção fácil, não esperteza.

- **TypeScript sempre, em modo estrito.** Sem `any` a não ser com justificação
  escrita. Tipa os dados de conteúdo a partir dos esquemas em `src/content/config.ts`.
- **Nomes de ficheiros e componentes:**
  - Componentes e layouts em `PascalCase` (`ProjectCard.astro`, `BaseLayout.astro`).
  - Utilitários, configs e conteúdos em `kebab-case` (`portfolio-tracker`, `en.json`).
  - O nome (slug) de um projeto é o que aparece no URL — mantém-no curto, em inglês,
    sem acentos nem espaços, e **igual nas pastas `en/` e `pt/`**.
- **Nunca duplicar.** Se um bloco de marcação ou lógica aparece duas vezes, vira
  componente ou função. Se um valor se repete (cor, espaçamento, texto de UI), vira
  token ou entrada de dicionário. Esta é a regra que mantém a manutenção simples.
- **Componentes pequenos e de responsabilidade única.** Um componente faz uma coisa.
  Se está a fazer três, parte-o.
- **Sem lógica de apresentação espalhada.** As cores, tipografia e espaçamentos vêm
  dos tokens do design system (secção 4). Não escrevas valores de cor à mão no meio
  de um componente.
- **Erros de conteúdo falham cedo e com clareza.** A validação de esquema no build é
  a rede de segurança — nunca a contornes para "deixar passar" conteúdo incompleto.
- **Comentários explicam o *porquê*, não o *quê*.** O código diz o que faz; o
  comentário justifica uma decisão não óbvia.
- **Zero dependências desnecessárias.** Cada pacote novo é dívida. Antes de adicionar
  um, pergunta se a plataforma (Astro/Tailwind) já resolve o problema.

---

## 3. Conteúdo e bilingue

Como o conteúdo vive e como o site fala duas línguas.

- **Conteúdo separado por idioma, em pastas espelhadas.** Cada projeto existe como
  `src/content/projects/en/<slug>/` e `src/content/projects/pt/<slug>/`, ligados pelo
  slug partilhado. O idioma por omissão é **inglês**.
- **A interface traduz-se a partir de um único dicionário por idioma**
  (`src/i18n/en.json`, `src/i18n/pt.json`). Nenhum texto de UI (menus, botões,
  títulos de secção, rótulos) fica escrito à mão dentro de um componente — vem sempre
  do dicionário, por uma chave.
- **Só se duplica o conteúdo que o Lucas escreve, nunca a mecânica do site.** Se te
  vês a copiar lógica por causa do idioma, está errado — abstrai.
- **Tradução em falta:** se um projeto existe num idioma e não no outro, o site não
  pode partir. Comporta-se de forma graciosa (ex.: não listar nesse idioma, ou mostrar
  aviso claro em dev) — nunca uma página em branco ou um erro de build silencioso.
- **Não traduzir automaticamente.** O conteúdo é escrito por uma pessoa. Não geres
  traduções por conta própria; se faltar uma versão, assinala.
- **As categorias de certificados** usam uma chave curta e neutra (`cloud`,
  `security`, ...); o nome legível de cada categoria vive no dicionário de UI, por
  idioma.

---

## 4. Design

As regras visuais. Estão em detalhe em `docs/design-system.md`; o essencial que
nunca se quebra:

- **Sobriedade primeiro.** Em dúvida entre "mais" e "menos", é sempre menos. O
  conteúdo é o protagonista, não a decoração.
- **O acento de cor é raro e intencional.** Usa-o em links, botões e um ou outro
  destaque — nunca como enfeite. O registo base é off-white quente, texto quase-preto,
  um único acento (azul-petróleo).
- **Tipografia:** Fraunces (serif) só nos títulos grandes; Inter (sans) no corpo e UI;
  JetBrains Mono no código. Dois pesos apenas: 400 e 500.
- **Sem efeitos decorativos.** Nada de gradientes, sombras dramáticas, glow ou
  animações exuberantes. Movimento discreto (150–200ms) e funcional.
- **Sentence case em toda a interface.** Nunca Title Case, nunca MAIÚSCULAS.
- **Dark/light mode é obrigatório em cada componente,** e testado nos dois. Se um
  componente só funciona num modo, não está pronto.
- **Cantos ligeiramente arredondados** (8px em controlos, 12px em cards) e layout
  arejado.

### Acessibilidade (parte do design, não um extra)

- Contraste mínimo AA em todo o texto, nos dois modos de cor.
- Foco visível em tudo o que é navegável por teclado; o site é 100% usável só com
  teclado.
- Todas as imagens têm texto alternativo (`coverAlt` é obrigatório nos projetos).
- Estrutura semântica correta (um `h1` por página, hierarquia de headings coerente,
  `<nav>`, `<main>`, `<footer>`).

---

## 5. Git e deploy

- **Commits pequenos e descritivos**, no imperativo e em inglês
  (`add project card component`, `fix dark mode contrast on tags`). Um commit = uma
  mudança coerente.
- **O que nunca vai para o repositório:** `node_modules/`, ficheiros de build
  (`dist/`), segredos ou chaves de qualquer tipo, ficheiros de sistema
  (`.DS_Store`). Garante que o `.gitignore` os cobre.
- **Não partir o deploy.** O site publica-se via GitHub Actions a cada push para a
  branch principal. Antes de considerar algo entregue, o build tem de passar
  localmente (`npm run build`). Um push que quebra o build quebra o site em produção.
- **O caminho do CV é estável e não muda:** `public/cv/lucas-jardim-cv.pdf`.
  Atualizar o CV é substituir este ficheiro — nenhum código nem link deve depender de
  outro nome.

---

## 6. Estrutura do projeto

- Respeita a árvore definida em `docs/project-structure.md`. Cada tipo de ficheiro
  tem um sítio; não improvises pastas novas sem as documentar.
- **Conteúdo (`src/content/`) e lógica (`src/pages/`) são mundos separados.** O
  conteúdo é texto que o Lucas edita; as páginas são o código que o transforma. Nunca
  metas lógica dentro de um ficheiro de conteúdo, nem obrigues a editar código para
  gerir conteúdo.
- **Cada projeto é uma pasta autocontida** com o seu `index.mdx` e as suas imagens ao
  lado. Sem pasta global de imagens; sem ficheiros órfãos.
- **As rotas geram-se dinamicamente.** Uma página de detalhe de projeto nunca se
  escreve à mão — é gerada pelo molde `[slug].astro`. Adicionar conteúdo nunca implica
  criar uma rota nova à mão.

---

## 7. Qualidade — a checklist de "pronto"

Uma feature só está terminada quando **tudo** isto se verifica. Não declares algo
concluído sem passar a lista:

- [ ] O build passa sem erros nem avisos (`npm run build`).
- [ ] Funciona nos **dois idiomas** (EN e PT), incluindo os links entre eles.
- [ ] Funciona nos **dois modos de cor** (claro e escuro).
- [ ] É **responsivo** — testado em ecrã de telemóvel e de computador.
- [ ] É **acessível** — contraste AA, navegável por teclado, foco visível, imagens
      com texto alternativo.
- [ ] Cumpre os **critérios de aceitação** do requisito em `docs/requirements.md`.
- [ ] Não introduziu **duplicação** (marcação, lógica ou valores repetidos).
- [ ] O conteúdo de exemplo (se aplicável) valida contra o esquema.

---

## 8. Limites — o que nunca faço sem perguntar

Estas ações param e pedem confirmação explícita antes de avançar:

- **Mudar a stack** ou introduzir um framework/ferramenta nova.
- **Adicionar uma dependência de peso** (qualquer coisa além de utilitários pequenos
  e justificados).
- **Alterar o modelo de conteúdo** (campos de projeto/certificado, estrutura de
  pastas de conteúdo) depois de fixado.
- **Reverter ou contradizer uma decisão** já registada na documentação.
- **Introduzir serviços externos** (analytics, formulários com servidor, fontes
  alojadas por terceiros) — colidem com os objetivos de custo zero e independência.
- **Adicionar features fora do roadmap** (blog, comentários, etc.) sem as discutir e
  encaixar como fase nova.

Em qualquer destes casos: descreve o trade-off com clareza e espera por um "sim"
antes de mexer.

---

## 9. Princípio de fecho

Se tudo o resto falhar, orienta-te por isto: **o site tem de continuar gratuito,
profissional e simples de manter por uma pessoa que edita ficheiros de texto e faz
commit.** Qualquer decisão que torne a manutenção mais complicada para o Lucas está,
por defeito, errada — mesmo que seja tecnicamente mais elegante.
