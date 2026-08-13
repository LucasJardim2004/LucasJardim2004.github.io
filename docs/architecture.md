# Arquitetura

Decisões técnicas e o porquê de cada uma. Onde faz sentido, está registada a
alternativa que foi ponderada e a razão da escolha.

## Visão geral

Site **estático** gerado em build, servido pelo GitHub Pages. Não há servidor,
base de dados nem lógica em runtime — o que o visitante recebe são ficheiros HTML/CSS/JS
pré-gerados. Isto é o que torna o site gratuito, rápido, durável e seguro.

```
Conteúdo (Markdown/MDX)  ─┐
Dicionários i18n (JSON)  ─┼─►  Astro build  ─►  HTML/CSS/JS estático  ─►  GitHub Pages
Componentes e layouts    ─┘        ▲
                                   │
                            validação de esquema
```

## Stack e justificação

### Astro (framework)
- **Porquê:** gera HTML estático puro, é rapidíssimo, e — decisivo — as *content
  collections* deixam cada projeto/certificado ser um ficheiro de texto validado.
  Envia pouco ou nenhum JavaScript por omissão.
- **Alternativas ponderadas:** Jekyll (nativo do Pages, mas menos flexível e ecossistema
  mais datado); HTML/CSS/JS à mão (mais trabalho repetido, sem validação de conteúdo);
  Next.js (excessivo para um site estático, mais complexidade de manutenção).

### TypeScript (modo estrito)
- **Porquê:** segurança de tipos, apanha erros cedo, e os tipos derivam dos esquemas
  de conteúdo — o editor ajuda a não errar campos.

### Tailwind CSS
- **Porquê:** design system em tokens, consistência garantida, e facilidade de manter
  o registo visual sem CSS espalhado. Os tokens do design system vivem em
  `tailwind.config.mjs`.
- **Alternativa ponderada:** CSS à mão (mais liberdade, mais risco de inconsistência).

### MDX (conteúdo de projetos)
- **Porquê:** Markdown para escrita simples, com a opção de componentes quando um
  projeto precisar de algo mais rico. Os certificados usam frontmatter simples, sem
  corpo longo.

### GitHub Pages + GitHub Actions
- **Porquê:** alojamento gratuito e deploy automático. Um push reconstrói e publica.
- **Nota de alojamento:** o repositório chama-se `LucasJardim2004.github.io`, pelo que
  o site é servido na raiz (`https://lucasjardim2004.github.io/`) e os links internos
  ficam limpos, sem *base path*.

## Estratégia de internacionalização (i18n)

- **Conteúdo** separado por idioma em pastas espelhadas
  (`src/content/projects/en/`, `.../pt/`), ligado pelo slug partilhado.
- **Interface** traduzida a partir de um dicionário único por idioma
  (`src/i18n/en.json`, `pt.json`), aplicado por chave. A mecânica nunca se duplica.
- **Rotas** sob `src/pages/[lang]/`, geradas em paralelo para EN e PT a partir dos
  mesmos moldes.
- **Idioma por omissão:** inglês. A raiz (`/`) encaminha para `/en/`.
- **Traduções em falta** degradam de forma graciosa; nunca partem o build nem mostram
  página em branco.

## Validação de conteúdo

Os esquemas de projeto e certificado definem-se em `src/content/config.ts`. O build
valida cada ficheiro de conteúdo contra o seu esquema: um campo obrigatório em falta ou
um tipo errado faz o build falhar com uma mensagem clara, em vez de publicar algo
partido. É a rede de segurança que protege a manutenção futura.

## Geração dinâmica de rotas

As páginas de detalhe de projeto são geradas por um único molde `[slug].astro`, que
percorre a coleção de projetos e cria uma página por cada. Adicionar conteúdo nunca
implica criar uma rota à mão. O mesmo padrão de `[lang]/` gera EN e PT em paralelo.

## Tipografia e fontes

Fontes **auto-hospedadas** no repositório (Fraunces, Inter, JetBrains Mono), não
carregadas de CDNs de terceiros. Isto mantém o site independente e funcional sem
servidores externos, coerente com os objetivos de custo zero e durabilidade.

## Tema (dark / light)

Alternância cliente com persistência da preferência (armazenamento local) e respeito
pela preferência do sistema como estado inicial. O tema aplica-se via tokens de cor,
por isso cada componente herda os dois modos sem código extra.

## Performance

- Site estático, JavaScript mínimo (só o necessário: seletor de tema/idioma).
- Imagens otimizadas no build.
- CSS gerado apenas com o que é usado.

## Registo de decisões (resumo)

| Decisão | Escolha | Razão principal |
|---------|---------|-----------------|
| Framework | Astro | Estático + content collections + pouco JS |
| Linguagem | TypeScript estrito | Segurança de tipos derivada do conteúdo |
| Estilos | Tailwind (tokens) | Consistência do design system |
| Conteúdo | Markdown/MDX validado | Manutenção sem tocar em código |
| i18n | Pastas espelhadas + dicionário de UI | Só duplica conteúdo, não mecânica |
| Alojamento | GitHub Pages + Actions | Gratuito, deploy automático |
| Fontes | Auto-hospedadas | Independência de terceiros |
| Contacto | Email + redes (sem servidor) | Custo zero, simplicidade |

Novas decisões técnicas tomadas durante o desenvolvimento devem ser acrescentadas a
esta tabela.
