# Estrutura do projeto

A árvore de pastas do repositório e o que vive em cada sítio. Regra geral: **conteúdo
(`src/content/`) e lógica (`src/pages/`) são mundos separados** — o conteúdo é texto que
se edita; as páginas são o código que o transforma.

```
LucasJardim2004.github.io/
│
├── README.md                    # porta de entrada do repositório
├── AGENTS.md                    # regras do agente (fonte de verdade do processo)
├── docs/                        # documentação de suporte
│   ├── vision.md
│   ├── requirements.md
│   ├── architecture.md
│   ├── content-model.md
│   ├── design-system.md
│   ├── project-structure.md
│   ├── roadmap.md
│   └── maintenance-guide.md
│
├── public/                      # servido tal como está, sem processamento
│   ├── cv/
│   │   └── lucas-jardim-cv.pdf  # o CV — substituir este ficheiro para atualizar
│   ├── favicon.svg
│   └── og-image.png             # imagem de partilha (LinkedIn, WhatsApp, etc.)
│
├── src/
│   ├── content/                 # ← CONTEÚDO (editável sem tocar em código)
│   │   ├── projects/
│   │   │   ├── en/
│   │   │   │   └── <slug>/       # cada projeto: uma pasta autocontida
│   │   │   │       ├── index.mdx
│   │   │   │       └── cover.png
│   │   │   └── pt/
│   │   │       └── <slug>/
│   │   │           ├── index.mdx
│   │   │           └── cover.png
│   │   ├── certificates/        # um ficheiro por certificado
│   │   │   └── <cert>.mdx
│   │   └── config.ts            # esquemas + validação (rede de segurança)
│   │
│   ├── i18n/                    # traduções da INTERFACE (não do conteúdo)
│   │   ├── en.json
│   │   ├── pt.json
│   │   └── utils.ts             # mecânica de seleção de idioma
│   │
│   ├── components/              # blocos reutilizáveis (nunca duplicar marcação)
│   │   ├── ProjectCard.astro
│   │   ├── CertificateCard.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ThemeToggle.astro
│   │   └── SEO.astro
│   │
│   ├── layouts/                 # molduras de página partilhadas
│   │   ├── BaseLayout.astro     # <head>, header, footer, dark mode
│   │   └── ProjectLayout.astro  # moldura da página de detalhe de projeto
│   │
│   ├── pages/                   # ← ROTAS (o que vira URL)
│   │   ├── index.astro          # encaminha para o idioma por omissão (/en/)
│   │   └── [lang]/              # tudo abaixo existe em /en e /pt
│   │       ├── index.astro          # home
│   │       ├── projects/
│   │       │   ├── index.astro      # listagem de projetos (cards)
│   │       │   └── [slug].astro     # detalhe de projeto (gerado automaticamente)
│   │       ├── certificates.astro   # certificados agrupados por tema
│   │       └── contact.astro        # contactos (email + redes)
│   │
│   └── styles/
│       └── global.css           # base e utilitários globais
│
├── astro.config.mjs             # configuração do Astro
├── tailwind.config.mjs          # tokens do design system, em código
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml           # build + publicação automática no push
```

## Notas para ler a estrutura com os olhos certos

**`src/content/` vs `src/pages/`.** É a separação central. O `content/` é onde o autor
vive — texto, sem código. O `pages/` é onde o código vive — a lógica que transforma
conteúdo em páginas. A página de detalhe de projeto nunca se escreve à mão: o molde
`[slug].astro` gera-as todas.

**`public/` é deliberadamente "burra".** O que lá está é servido exatamente como está.
É por isso que o CV vive ali — caminho estável, atualização por simples substituição de
ficheiro.

**`config.ts` é a rede de segurança.** Define os esquemas e faz o build recusar
conteúdo mal formado com mensagem clara.

**Cada projeto é uma pasta autocontida.** Carrega as suas próprias imagens ao lado do
texto — sem pasta global de imagens, sem ficheiros órfãos.

## Regra ao adicionar ficheiros

Cada tipo de ficheiro tem um sítio. Não criar pastas novas sem as documentar aqui.
Conteúdo vai para `src/content/`; nunca meter lógica dentro de um ficheiro de conteúdo,
nem obrigar a editar código para gerir conteúdo.
