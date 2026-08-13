# Guia de manutenção

O manual do dia-a-dia para manter o site — escrito para o futuro-tu que já não se lembra
dos detalhes. Nenhuma destas tarefas exige tocar em código.

> Nota: esta é a versão inicial, feita a partir do modelo de conteúdo. Será revista na
> Fase 6 do roadmap, com o site já real à frente e capturas do resultado verdadeiro.

Em **todas** as tarefas, o fluxo final é o mesmo: guardas os ficheiros, fazes commit, e
fazes push. O site reconstrói-se e publica-se sozinho em minutos.

---

## Adicionar um projeto

Um projeto existe em dois idiomas, ligados pelo mesmo **slug** (nome curto, em inglês,
sem acentos nem espaços — ex.: `portfolio-tracker`).

1. Cria a pasta em inglês: `src/content/projects/en/portfolio-tracker/`.
2. Lá dentro, cria `index.mdx` com este cabeçalho e o texto por baixo:

   ```yaml
   ---
   title: "Portfolio Tracker"
   summary: "Web app to track investments"
   date: 2025-03-10
   tags: ["React", "Node.js", "PostgreSQL"]
   cover: "./cover.png"
   coverAlt: "Screenshot of the dashboard"
   repo: "https://github.com/..."      # opcional
   demo: "https://..."                 # opcional
   featured: true                      # opcional
   draft: false
   ---

   Aqui escreves o detalhe do projeto: problema, solução, decisões, etc.
   ```

3. Põe a imagem de capa (`cover.png`) na mesma pasta.
4. Repete para português em `src/content/projects/pt/portfolio-tracker/` — **mesmo
   slug**, texto traduzido.
5. Commit + push. O card e a página de detalhe aparecem sozinhos.

**Dicas:**
- Ainda a escrever? Põe `draft: true` e o projeto fica invisível até estar pronto.
- Queres destacá-lo na home? `featured: true`.
- A ordem na listagem é automática pela `date` (mais recente primeiro).

---

## Editar um projeto

Abre o `index.mdx` respetivo (lembra-te: há um por idioma) e edita o texto ou os
metadados. Commit + push.

---

## Adicionar um certificado

Os certificados não têm página própria — aparecem como cards agrupados por tema.

1. Cria um ficheiro em `src/content/certificates/` (ex.: `aws-saa.mdx`):

   ```yaml
   ---
   title: "AWS Certified Solutions Architect"
   issuer: "Amazon Web Services"
   date: 2024-11-01
   category: "cloud"
   credentialUrl: "https://..."   # opcional
   image: "./aws-saa.png"         # opcional
   ---
   ```

2. Commit + push. O certificado aparece no grupo da sua categoria.

**Categoria nova?** Usa uma chave curta em `category` (ex.: `security`) e define o nome
legível dessa categoria uma vez, nos dicionários `src/i18n/en.json` e `pt.json`.

---

## Atualizar o CV

1. Exporta o teu CV atualizado para PDF.
2. Substitui o ficheiro `public/cv/lucas-jardim-cv.pdf` — **mantendo exatamente o mesmo
   nome**.
3. Commit + push. O botão de download passa a servir o novo PDF; nenhum link parte.

---

## Corrigir um texto de interface

Textos como menus, botões e rótulos vivem nos dicionários:

- Inglês: `src/i18n/en.json`
- Português: `src/i18n/pt.json`

Encontra a chave, corrige o valor nos dois ficheiros, commit + push.

---

## Atualizar os contactos

Email e ligações a redes vivem num único ficheiro de configuração (indicado quando a
página de contactos for construída, Fase 4). Edita aí, commit + push.

---

## Correr o site localmente (opcional)

Se quiseres pré-visualizar antes de publicar:

```bash
npm install     # só na primeira vez
npm run dev     # abre um servidor local para ver as mudanças
```

Para confirmar que está tudo bem antes de um push importante:

```bash
npm run build   # valida o conteúdo e gera o site; se falhar, diz o que corrigir
```

---

## Se algo correr mal

- **O build falhou depois de um push?** Vê a mensagem de erro — normalmente é um campo
  obrigatório em falta ou uma data mal escrita num ficheiro de conteúdo. Corrige e faz
  push de novo.
- **Um projeto não aparece?** Confirma que `draft` não está `true` e que existem as duas
  versões (EN e PT) com o mesmo slug.
- **Uma imagem não carrega?** Confirma que está na pasta do projeto e que o nome no
  frontmatter coincide.
