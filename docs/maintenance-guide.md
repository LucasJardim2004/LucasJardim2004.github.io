# Guia de manutenção

Manual do dia-a-dia para gerir o site — escrito para o futuro-tu que já não
se lembra dos detalhes. Nenhuma destas tarefas exige tocar em código.

O fluxo é sempre o mesmo em todas as tarefas:

```bash
# 1. Faz as alterações nos ficheiros
# 2. Testa localmente (opcional mas recomendado)
npm run dev       # abre http://localhost:4321 — vês as mudanças em tempo real
npm run build     # valida tudo antes do push
# 3. Publica
git add .
git commit -m "descrição do que mudaste"
git push
# O site reconstrói-se e publica-se sozinho em 1-2 minutos.
```

---

## Projetos

### Adicionar um projeto novo

Um projeto vive em duas pastas com o mesmo nome (slug) — uma por idioma.
As imagens são partilhadas entre os dois idiomas.

**1. Cria as pastas:**

```
src/content/projects/
  shared/
    nome-do-projeto/        ← imagens aqui (partilhadas EN + PT)
  en/
    nome-do-projeto/
      index.mdx             ← texto em inglês
  pt/
    nome-do-projeto/
      index.mdx             ← texto em português
```

O slug (`nome-do-projeto`) é o que aparece no URL. Usa sempre minúsculas,
hífens em vez de espaços, sem acentos — ex.: `cocktail-explorer`, `pong`.

**2. Cria o ficheiro `index.mdx` em inglês** — copia este modelo:

```mdx
---
title: "Nome do Projeto"
summary: "Uma frase que descreve o projeto — aparece no card da listagem."
date: 2025-06-15
type: "Web app"
status: "Completed"
tags: ["React", "Node.js", "PostgreSQL"]
# Descomenta quando tiveres imagens:
# cover: "../../shared/nome-do-projeto/cover.png"
# coverAlt: "Descrição da imagem de capa para leitores de ecrã"
# gallery:
#   - src: "../../shared/nome-do-projeto/shot-1.png"
#     alt: "Descrição da imagem 1"
#   - src: "../../shared/nome-do-projeto/shot-2.png"
#     alt: "Descrição da imagem 2"
featured: false
draft: false
---

## What it does

Descreve o que o projeto faz.

## Key features

- Feature 1
- Feature 2

## Tech stack

As tecnologias usadas.

## My role & challenges

O que fizeste e os desafios que encontraste.

## What I learned

O que aprendeste.
```

**3. Cria o `index.mdx` em português** na pasta `pt/nome-do-projeto/` —
mesmo frontmatter, texto traduzido no corpo.

**4. Commit + push.** O card e a página de detalhe aparecem sozinhos.

**Valores do campo `type`:** `"Web app"`, `"Game"`, `"University project"`,
`"University web app"`, `"University game"` — ou qualquer string que faça
sentido.

---

### Adicionar imagens a um projeto

Quando tiveres screenshots reais:

1. Coloca os ficheiros em `src/content/projects/shared/nome-do-projeto/`
2. Abre `src/content/projects/en/nome-do-projeto/index.mdx` e descomenta
   as linhas com `cover` e `gallery` (remove os `#` do início)
3. Faz o mesmo no ficheiro `pt/`
4. Commit + push

As imagens são partilhadas — carregas uma vez, aparecem nos dois idiomas.
O Astro optimiza-as automaticamente em build (converte para WebP, gera
tamanhos responsivos).

> **Nota:** o `coverAlt` é obrigatório quando tens capa — é o texto
> alternativo para leitores de ecrã. Se o deixares em branco, o build
> falha com uma mensagem clara.

---

### Destacar um projeto na home

Abre o `index.mdx` do projeto (EN e PT) e muda:

```yaml
featured: false   →   featured: true
```

O projeto aparece automaticamente na secção "Selected projects" da home.
Não há limite de projetos em destaque, mas 4-6 é o número ideal para a
home não ficar demasiado longa.

---

### Esconder um projeto temporariamente

```yaml
draft: false   →   draft: true
```

O projeto desaparece do site publicado mas continua nos ficheiros.
Volta a pôr `false` quando estiver pronto.

---

### Editar um projeto existente

Abre o `index.mdx` correspondente e edita o que precisas — texto,
metadados, tags, data. Commit + push.

Os projetos existentes e as suas pastas são:

```
src/content/projects/en/
  cocktail-explorer/
  euro-2024-sticker-album/
  flag-guesser/
  geo-organizer/
  isctorrent/
  pong/
  simon-game/
  sokoban/
  world-tracker/
```

---

## Certificados

### Adicionar um certificado

Cria um ficheiro `.json` em `src/content/certificates/`. O nome do
ficheiro é livre — usa algo descritivo como `aws-solutions-architect.json`.

```json
{
  "title": "AWS Certified Solutions Architect",
  "issuer": "Amazon Web Services",
  "date": "2025-03-15",
  "category": "cloud",
  "credentialUrl": "https://www.credly.com/..."
}
```

- `date` — formato `YYYY-MM-DD`, obrigatório
- `category` — chave curta (ver lista abaixo), obrigatório
- `credentialUrl` — opcional; quando presente, aparece um ícone de
  credencial verificada no card

Commit + push. O certificado aparece no grupo da sua categoria.

---

### Categorias existentes

| Chave | EN | PT |
|-------|----|----|
| `ai` | AI & Data | IA & Dados |
| `web` | Web development | Desenvolvimento web |
| `tools` | Tools & productivity | Ferramentas & produtividade |
| `leadership` | Leadership | Liderança |
| `professional` | Professional skills | Competências profissionais |

---

### Adicionar uma categoria nova

1. Usa uma chave curta em inglês sem espaços (ex.: `cloud`, `security`)
2. Abre `src/i18n/en.json` e adiciona dentro de
   `pages.certificates.categories`:
   ```json
   "cloud": "Cloud & DevOps"
   ```
3. Faz o mesmo em `src/i18n/pt.json`:
   ```json
   "cloud": "Cloud & DevOps"
   ```
4. Nos certificados dessa categoria, usa a nova chave no campo `category`

---

## CV

Substitui o ficheiro `public/cv/lucas-jardim-cv.pdf` mantendo exactamente
esse nome e caminho. Commit + push. O botão de download passa a servir o
novo PDF — nenhum link parte.

```bash
# Exemplo com o novo CV exportado do Word/Figma/etc.:
cp ~/Downloads/novo-cv.pdf ~/dev/PersonalSite/public/cv/lucas-jardim-cv.pdf
cd ~/dev/PersonalSite
git add public/cv/lucas-jardim-cv.pdf
git commit -m "update CV"
git push
```

---

## Contactos

Todos os dados de contacto vivem em `src/config/contact.ts`. Edita esse
ficheiro para mudar email, telefone, LinkedIn ou GitHub:

```typescript
export const contact = {
  email: 'lucascostajardim04@gmail.com',
  phone: '+351 966 152 776',
  linkedin: {
    url: 'https://www.linkedin.com/in/lucascostajardim',
    label: 'lucascostajardim',
  },
  github: {
    url: 'https://github.com/LucasJardim2004',
    label: 'LucasJardim2004',
  },
};
```

Commit + push. A mudança reflecte-se na página de contactos e no footer.

---

## Textos de interface

Menus, botões, títulos de secção e outros textos fixos da interface vivem
nos dicionários:

- `src/i18n/en.json` — inglês
- `src/i18n/pt.json` — português

Para corrigir um texto: encontra a chave, edita o valor nos **dois**
ficheiros, commit + push.

---

## Apresentação pessoal (home)

O texto da home vem dos dicionários — edita as chaves dentro de `"home"`:

```json
"home": {
  "role": "Tech Analyst @ Deloitte",
  "heading": "Lucas Jardim",
  "intro": "O parágrafo de apresentação...",
  "interests": "A linha de interesses..."
}
```

---

## Testar localmente antes de publicar

```bash
cd ~/dev/PersonalSite
npm run dev     # servidor local em http://localhost:4321
# Ctrl+C para parar

npm run build   # valida tudo — idêntico ao que o GitHub Actions faz
                # se passar aqui, passa em produção
```

---

## Se algo correr mal

**O build falhou depois de um push?**
Vai ao separador **Actions** no GitHub, abre o workflow que falhou, e lê
a mensagem de erro. As causas mais comuns:

- Campo obrigatório em falta num `index.mdx` ou `.json` de conteúdo
- Data mal formatada (usa sempre `YYYY-MM-DD`)
- `cover` definido sem `coverAlt`
- Imagem referenciada no frontmatter que não existe na pasta `shared/`

Corrige o ficheiro e faz push de novo.

**Um projeto não aparece na listagem?**
- Confirma que `draft: false` (ou que o campo não existe — o default é false)
- Confirma que existem as duas versões (pasta `en/` e `pt/`) com o mesmo slug
- Confirma que o `index.mdx` tem todos os campos obrigatórios

**Uma imagem não carrega?**
- Confirma que o ficheiro está em `src/content/projects/shared/nome-do-projeto/`
- Confirma que o caminho no frontmatter usa `../../shared/nome-do-projeto/`
- Confirma que o nome do ficheiro coincide exactamente (incluindo extensão)

**O link de partilha (LinkedIn, WhatsApp) não mostra a imagem?**
As redes sociais fazem cache das previews. Usa o
[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) ou o
[OpenGraph debugger do Facebook](https://developers.facebook.com/tools/debug/)
para forçar a actualização da cache.
