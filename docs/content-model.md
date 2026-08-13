# Modelo de conteúdo

Como o conteúdo é guardado, estruturado e editado. Este é o documento que torna a
manutenção simples de verdade. Princípio-guia: **cada peça de conteúdo é um ficheiro de
texto simples; a mecânica do site nunca se duplica, só o texto que o autor escreve.**

---

## Organização bilingue

Conteúdo separado por idioma, em pastas espelhadas, ligadas pelo **slug** (nome da
pasta/ficheiro). Um projeto vive em duas pastas com o mesmo slug — uma por idioma:

```
src/content/projects/
  en/
    portfolio-tracker/
      index.mdx
      cover.png
  pt/
    portfolio-tracker/
      index.mdx
      cover.png
```

- O slug partilhado (`portfolio-tracker`) liga as duas versões e define o URL
  (`/en/projects/portfolio-tracker` e `/pt/projects/portfolio-tracker`).
- O slug é curto, em inglês, sem acentos nem espaços, e **igual nos dois idiomas**.
- O texto da **interface** (menus, botões, rótulos) não vive nos conteúdos — vive nos
  dicionários `src/i18n/en.json` e `src/i18n/pt.json`.

---

## Esquema: Projeto

Cada projeto é uma pasta autocontida com um `index.mdx` (metadados + corpo) e as suas
imagens ao lado.

### Metadados (frontmatter)

```yaml
---
title: "Portfolio Tracker"                 # obrigatório
summary: "Web app to track investments"    # obrigatório — frase do card (1-2 linhas)
date: 2025-03-10                           # obrigatório — ordena (recente primeiro)
tags: ["React", "Node.js", "PostgreSQL"]   # obrigatório — tecnologias/temas
cover: "./cover.png"                       # obrigatório — imagem do card e do topo
coverAlt: "Screenshot of the dashboard"    # obrigatório — acessibilidade
repo: "https://github.com/..."             # opcional — botão para o código
demo: "https://..."                        # opcional — botão para a demo ao vivo
featured: true                             # opcional — destaca na home (default: false)
draft: false                               # opcional — esconde do site (default: false)
---
```

### Corpo

Abaixo do frontmatter, texto livre em Markdown/MDX: o problema, a solução, decisões
técnicas, o que se aprendeu, imagens, blocos de código. As imagens referenciam
ficheiros na própria pasta do projeto.

### Regras de campo

- **`date`** define a ordenação automática (descendente). Não se gere ordem à mão.
- **`featured`** controla o destaque na home, sem tocar em código.
- **`draft: true`** esconde o projeto do site publicado — útil para escrever aos poucos.
- **`repo` / `demo`** só geram botão quando presentes.
- **Imagens** ficam sempre ao lado do `index.mdx`, nunca numa pasta global.

---

## Esquema: Certificado

Mais leve que um projeto: sem página de detalhe, sem corpo longo. Um ficheiro pequeno
por certificado. A maioria dos campos é neutra de idioma (o nome do certificado e o
emissor não se traduzem).

```yaml
---
title: "AWS Certified Solutions Architect"   # obrigatório
issuer: "Amazon Web Services"                # obrigatório
date: 2024-11-01                             # obrigatório
category: "cloud"                            # obrigatório — chave curta que agrupa
credentialUrl: "https://..."                 # opcional — link para verificar
image: "./aws-saa.png"                       # opcional — logo/badge
---
```

### Agrupamento por tema

- O agrupamento faz-se pela **chave** `category` (`cloud`, `security`, `frontend`, ...).
- O **nome legível** de cada categoria (que pode diferir em EN e PT) vive no dicionário
  de UI. Renomear uma categoria é mudar uma palavra num sítio.
- Adicionar um certificado: cria o ficheiro. Se a categoria existe, encaixa; se é nova,
  define a chave e o nome traduzido uma vez.

---

## CV

- Um único PDF em inglês, em caminho fixo e estável: `public/cv/lucas-jardim-cv.pdf`.
- Atualizar o CV = **substituir esse ficheiro** (mantendo o nome) e fazer commit.
- Nenhum link nem código depende de outro nome de ficheiro.

---

## Dados de contacto

Email e ligações a redes vivem num único ficheiro de configuração/dados (não espalhados
pelos componentes), para serem fáceis de atualizar num só sítio.

---

## Validação

Os esquemas acima são definidos em código em `src/content/config.ts` e **validados no
build**. Conteúdo mal formado (campo obrigatório em falta, data inválida) faz o build
falhar com mensagem clara, em vez de publicar algo partido.

---

## Resumo da manutenção

| Tarefa | Ação |
|--------|------|
| Adicionar projeto | Criar pasta EN + PT (mesmo slug) com `index.mdx` e imagens |
| Editar projeto | Editar o `index.mdx` respetivo |
| Esconder projeto | `draft: true` no frontmatter |
| Destacar na home | `featured: true` no frontmatter |
| Adicionar certificado | Criar um ficheiro na coleção de certificados |
| Nova categoria de certificado | Definir chave + nome traduzido no dicionário |
| Atualizar CV | Substituir `public/cv/lucas-jardim-cv.pdf` |
| Corrigir texto de UI | Editar o dicionário `en.json` / `pt.json` |

Em todos os casos: commit, e o site reconstrói-se e publica-se sozinho. Nunca é preciso
tocar em código para gerir conteúdo.
