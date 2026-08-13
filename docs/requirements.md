# Requisitos

Requisitos funcionais e não-funcionais do site, organizados por feature. Cada
requisito tem **critérios de aceitação** verificáveis — é contra eles que se decide
se uma feature está pronta. Este é o documento contra o qual toda a implementação se
valida.

Convenção: `RF` = requisito funcional, `RNF` = requisito não-funcional.

---

## Requisitos não-funcionais (transversais)

Aplicam-se a **todas** as features. Uma feature que os viole não está pronta,
independentemente de funcionar.

### RNF-1 — Custo zero
- O site aloja-se no GitHub Pages e publica-se via GitHub Actions.
- Nenhum serviço externo pago, nenhuma dependência que exija subscrição.
- **Aceitação:** o site funciona na íntegra sem qualquer conta ou chave paga.

### RNF-2 — Manutenção simples
- Gerir conteúdo (adicionar projeto, certificado, atualizar CV, corrigir texto) faz-se
  editando ficheiros de texto e fazendo commit — **nunca** tocando em código.
- **Aceitação:** adicionar um projeto e um certificado é possível sem abrir um único
  ficheiro em `src/pages/`, `src/components/` ou `src/layouts/`.

### RNF-3 — Bilingue (EN por omissão, PT disponível)
- Todo o site existe em inglês e português. O idioma por omissão é inglês.
- A interface traduz-se a partir de um dicionário único por idioma; o conteúdo é
  escrito nas duas línguas pelo autor.
- **Aceitação:** cada página é alcançável em `/en/...` e `/pt/...`; o seletor de
  idioma alterna entre as versões equivalentes; nenhum texto de UI fica por traduzir.

### RNF-4 — Dark / light mode
- Cada componente e página funciona nos dois modos de cor.
- **Aceitação:** alternar o tema não parte nenhum contraste nem esconde conteúdo;
  a escolha do utilizador persiste ao navegar.

### RNF-5 — Responsivo
- O site é utilizável e bem apresentado de ~320px (telemóvel pequeno) a ecrã de
  computador.
- **Aceitação:** não há scroll horizontal indevido; toques/cliques têm alvos
  adequados; a leitura é confortável em qualquer largura.

### RNF-6 — Acessibilidade (AA)
- Contraste mínimo AA em todo o texto, nos dois modos.
- Navegável 100% por teclado, com foco visível.
- Estrutura semântica correta e imagens com texto alternativo.
- **Aceitação:** uma auditoria de acessibilidade não reporta erros de nível A/AA;
  o site é operável só com teclado.

### RNF-7 — Performance
- Site estático, sem JavaScript desnecessário. Imagens otimizadas.
- **Aceitação:** carregamento rápido numa ligação normal; sem bloqueios visíveis de
  render; pontuação de performance elevada numa auditoria padrão.

### RNF-8 — SEO e partilha
- Cada página tem título, descrição e metadados Open Graph adequados.
- **Aceitação:** colar o link numa rede social ou app de mensagens mostra título,
  descrição e imagem corretos.

### RNF-9 — Independência e durabilidade
- Fontes auto-hospedadas no repositório; sem dependências de CDNs de terceiros para
  funcionar.
- **Aceitação:** o site renderiza corretamente sem acesso a servidores externos.

---

## Feature: Home

### RF-1 — Página inicial de apresentação
- Apresenta o Lucas em poucas linhas (quem é, o que faz).
- Mostra uma seleção de projetos em destaque, puxada automaticamente dos projetos
  marcados como `featured`.
- Oferece pontos de entrada claros para Projetos, Certificados, CV e Contactos.
- **Aceitação:**
  - [ ] A home existe em `/en/` e `/pt/`.
  - [ ] Os projetos em destaque refletem os que têm `featured: true`, sem edição de
        código.
  - [ ] Se não houver projetos em destaque, a secção degrada de forma graciosa (não
        aparece vazia nem parte).
  - [ ] Há navegação visível para todas as secções principais.

---

## Feature: Projetos

### RF-2 — Listagem de projetos (cards)
- Mostra todos os projetos publicados (não `draft`) como cards.
- Cada card mostra: imagem de capa, título, resumo curto e tags.
- Ordenados por data, mais recente primeiro.
- **Aceitação:**
  - [ ] Todos os projetos não-`draft` do idioma atual aparecem.
  - [ ] A ordenação por data (descendente) é automática.
  - [ ] Um card em `draft: true` não aparece no site publicado.
  - [ ] Clicar no card leva à página de detalhe correspondente.

### RF-3 — Página de detalhe de projeto
- Gerada automaticamente a partir do ficheiro de conteúdo.
- Mostra título, capa, metadados (data, tags) e o corpo completo em Markdown/MDX.
- Mostra botões para repositório e/ou demo quando esses campos existem.
- **Aceitação:**
  - [ ] A página gera-se sem escrever uma rota à mão.
  - [ ] Os botões de repo/demo só aparecem quando os campos estão presentes.
  - [ ] Imagens dentro do corpo renderizam e têm texto alternativo.
  - [ ] Existe em ambos os idiomas quando ambas as versões do ficheiro existem.

### RF-4 — Adicionar um projeto sem tocar em código
- Criar dois ficheiros de conteúdo (EN e PT, mesmo slug) mais imagens gera card e
  página automaticamente.
- **Aceitação:**
  - [ ] Após criar os ficheiros e fazer build, o projeto aparece na listagem e tem
        página de detalhe, sem qualquer alteração de código.
  - [ ] Um campo obrigatório em falta faz o build falhar com mensagem clara.

---

## Feature: Certificados

### RF-5 — Listagem de certificados agrupados por tema
- Mostra os certificados como cards, agrupados por categoria.
- Cada card mostra: título, entidade emissora, data e (se existir) imagem/badge.
- Um link opcional permite verificar a credencial.
- **Aceitação:**
  - [ ] Os certificados aparecem agrupados pela sua `category`.
  - [ ] O nome legível da categoria vem do dicionário de UI e traduz-se por idioma.
  - [ ] O link de verificação só aparece quando `credentialUrl` existe.
  - [ ] Não existe página de detalhe por certificado (decisão fixada).

### RF-6 — Adicionar um certificado sem tocar em código
- Criar um ficheiro de certificado adiciona-o à listagem no grupo certo.
- **Aceitação:**
  - [ ] Após criar o ficheiro e fazer build, o certificado aparece no grupo da sua
        categoria, sem alteração de código.
  - [ ] Uma categoria nova requer apenas definir a sua chave e nome traduzido uma vez.

---

## Feature: Contactos

### RF-7 — Página de contactos
- Sem formulário nem servidor: apresenta email e ligações a redes (ex.: LinkedIn,
  GitHub).
- **Aceitação:**
  - [ ] O email é acionável (`mailto:`) e os links de redes abrem os perfis corretos.
  - [ ] Existe em ambos os idiomas.
  - [ ] Os dados de contacto são fáceis de atualizar (num único sítio de config/dados).

---

## Feature: CV

### RF-8 — Download do CV
- Um único PDF em inglês, num caminho estável, com botão de download.
- **Aceitação:**
  - [ ] O botão "Download CV" descarrega/abre `public/cv/lucas-jardim-cv.pdf`.
  - [ ] Substituir esse ficheiro (mantendo o nome) atualiza o CV sem partir nenhum
        link.
  - [ ] O botão está acessível a partir da home e/ou navegação.

---

## Feature: Bilingue / i18n

### RF-9 — Alternância de idioma
- Um seletor permite trocar entre EN e PT, mantendo o utilizador na página
  equivalente.
- **Aceitação:**
  - [ ] O seletor está presente em todas as páginas.
  - [ ] Trocar de idioma numa página de projeto leva à mesma página no outro idioma
        (quando existe).
  - [ ] Quando a versão equivalente não existe, o comportamento é gracioso (ex.: volta
        à listagem), nunca um erro.

### RF-10 — Idioma por omissão e entrada
- A raiz do site encaminha para o idioma por omissão (inglês).
- **Aceitação:**
  - [ ] Abrir `/` leva o visitante para `/en/`.
  - [ ] Nenhuma página fica órfã sem prefixo de idioma.

---

## Feature: Tema (dark / light)

### RF-11 — Alternância de tema
- Um botão alterna entre claro e escuro; a preferência persiste.
- **Aceitação:**
  - [ ] O botão está presente e alterna o tema imediatamente.
  - [ ] A escolha persiste ao navegar e entre visitas.
  - [ ] Respeita a preferência do sistema como estado inicial, quando aplicável.

---

## Feature: Navegação

### RF-12 — Header e footer
- Header com navegação para as secções principais, seletor de idioma e botão de tema.
- Footer com ligações de contacto/redes.
- **Aceitação:**
  - [ ] Header e footer são consistentes em todas as páginas.
  - [ ] A navegação funciona por teclado e indica a secção atual.

### RF-13 — Página 404
- Uma página de erro amigável para rotas inexistentes.
- **Aceitação:**
  - [ ] Uma rota inválida mostra a 404, com caminho de volta para a home.
  - [ ] A 404 respeita o design e os dois modos de cor.

---

## Rastreabilidade

Cada feature acima mapeia para uma fase do `roadmap.md`. Nenhuma feature se considera
concluída sem cumprir os seus critérios **e** os requisitos não-funcionais
transversais (RNF-1 a RNF-9), verificados pela checklist de qualidade em `AGENTS.md`.
