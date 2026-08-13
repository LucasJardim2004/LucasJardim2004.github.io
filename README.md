# Site pessoal — Lucas Jardim

Site pessoal e portfólio, estático e bilingue (inglês/português), alojado
gratuitamente no GitHub Pages. Reúne projetos, certificados, contactos e o CV.

**Objetivos:** gratuito, profissional, simples de manter a longo prazo.

## Stack

- [Astro](https://astro.build) — gerador de site estático
- TypeScript (modo estrito)
- Tailwind CSS — design system em tokens
- MDX — conteúdo de projetos em Markdown com componentes
- GitHub Pages + GitHub Actions — alojamento e deploy automático

## Correr localmente

```bash
npm install       # instalar dependências
npm run dev       # servidor de desenvolvimento
npm run build     # gerar o site de produção (valida o conteúdo)
npm run preview   # pré-visualizar o build de produção
```

## Deploy

O site publica-se sozinho: cada push para a branch principal dispara o workflow em
`.github/workflows/deploy.yml`, que faz o build e publica no GitHub Pages. Não há
passos manuais.

## Gerir conteúdo

Todo o conteúdo vive em `src/content/` e edita-se sem tocar em código. Ver o
**[guia de manutenção](docs/maintenance-guide.md)** para o passo a passo de:

- adicionar ou editar um projeto
- adicionar um certificado
- atualizar o CV
- corrigir textos

## Documentação

Toda a documentação de suporte está em [`docs/`](docs/):

| Documento | Para quê |
|-----------|----------|
| [vision.md](docs/vision.md) | Visão, âmbito e critérios de sucesso |
| [requirements.md](docs/requirements.md) | Requisitos e critérios de aceitação |
| [architecture.md](docs/architecture.md) | Decisões técnicas e o porquê |
| [content-model.md](docs/content-model.md) | Esquemas de conteúdo e bilingue |
| [design-system.md](docs/design-system.md) | Paleta, tipografia, componentes |
| [project-structure.md](docs/project-structure.md) | Árvore de pastas |
| [roadmap.md](docs/roadmap.md) | Ordem de implementação |
| [maintenance-guide.md](docs/maintenance-guide.md) | Manual do dia-a-dia |

As **regras de desenvolvimento** para agentes de IA estão em
[`AGENTS.md`](AGENTS.md) — a fonte de verdade do processo.
