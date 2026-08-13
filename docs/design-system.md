# Design system

A identidade visual do site e a fonte de verdade para qualquer decisão de aparência.
Registo base: **minimal & sóbrio** — fundo off-white quente, texto quase-preto, um
único acento sóbrio, tipografia com carácter contido. O conteúdo é o protagonista.

---

## Princípios

Aplicam-se a tudo. Em caso de dúvida, obedece a estes antes de qualquer outra coisa.

1. **Sobriedade primeiro.** Entre "mais" e "menos", é sempre menos.
2. **O acento é raro e intencional** — links, botões, um ou outro destaque. Nunca
   decorativo.
3. **Sem efeitos decorativos** — nada de gradientes, sombras dramáticas, glow ou
   animações exuberantes.
4. **Sentence case em toda a interface** — nunca Title Case, nunca MAIÚSCULAS.
5. **Dark/light mode obrigatório** em cada componente, testado nos dois.
6. **Acessibilidade não é opcional** — contraste AA, foco visível, teclado, texto
   alternativo.

---

## Tipografia

| Uso | Fonte | Notas |
|-----|-------|-------|
| Títulos grandes (h1, h2 de secção) | **Fraunces** (serif) | O toque de carácter. Contido, não decorativo. |
| Corpo, UI, navegação, botões | **Inter** (sans) | Neutro, moderno, muito legível. |
| Código (detalhe de projeto) | **JetBrains Mono** | Mono para blocos de código. |

- Todas gratuitas e **auto-hospedadas** no repositório (sem CDNs de terceiros).
- **Dois pesos apenas:** regular (400) e medium (500). Nunca 600/700.
- Escala de referência: h1 ~44px · h2 ~30px · h3 ~20px · corpo 16–17px · legendas
  13–14px.
- Line-height do corpo generoso (~1.7).

---

## Paleta — modo claro

| Papel | Valor |
|-------|-------|
| Fundo da página | `#FBFAF7` (off-white quente) |
| Superfície de card | `#FFFFFF` |
| Texto principal | `#1A1A18` |
| Texto secundário | `#6B6A64` |
| Texto ténue | `#9A988F` |
| Borda (hairline) | `#E7E3D9` |
| Acento (links, botões) | `#1F5563` (azul-petróleo) |
| Acento hover | `#2A6B7C` |
| Fundo de acento suave | `#E8F0F1` |

## Paleta — modo escuro

| Papel | Valor |
|-------|-------|
| Fundo da página | `#15150F` (quase-preto quente) |
| Superfície de card | `#1E1E17` |
| Texto principal | `#F2F1EC` |
| Texto secundário | `#A9A79E` |
| Texto ténue | `#75736A` |
| Borda (hairline) | `#2E2D25` |
| Acento | `#6FB5C4` |
| Acento hover | `#8AC7D4` |
| Fundo de acento suave | `#1A2E33` |

Estes valores tornam-se tokens em `tailwind.config.mjs`. Nunca escrever cores à mão
dentro de um componente — usar sempre os tokens.

---

## Espaçamento

- Grelha base de **4px**. Gaps usados: 8 / 12 / 16 / 24 / 32.
- Secções bem respiradas; layout arejado, não compacto.

## Cantos

- Controlos (botões, inputs): **8px**.
- Cards: **12px**.

## Movimento

- Transições curtas e discretas (150–200ms). Funcional, nunca exuberante.

---

## Componentes

### Card de projeto
- Superfície branca (claro) / card escuro (escuro), cantos 12px, borda hairline.
- Conteúdo: imagem de capa, título, resumo curto, tags.
- Hover: elevação subtil (borda mais forte + ligeiro deslocamento). Sem sombras
  pesadas.

### Card de certificado
- Mesmo registo do card de projeto, mais enxuto.
- Conteúdo: título, emissor, data, imagem/badge opcional, link de verificação opcional.
- Apresentados agrupados por categoria.

### Botões
- **Primário:** fundo de acento, texto claro.
- **Secundário:** contorno hairline, sem preenchimento.
- Cantos 8px.

### Tags / badges
- Fundo de acento suave, texto na cor de acento escura, cantos arredondados.
- Nunca texto preto/cinza genérico sobre o fundo de acento — usar o tom escuro do
  próprio acento.

### Header
- Navegação para as secções principais, seletor de idioma, botão de tema.
- Indica a secção atual. Consistente em todas as páginas.

### Footer
- Ligações de contacto/redes. Discreto.

---

## Acessibilidade (detalhe)

- Contraste mínimo **AA** em todo o texto, nos dois modos.
- **Foco visível** em todos os elementos interativos.
- Navegação **100% por teclado**.
- Um `h1` por página; hierarquia de headings coerente.
- Marcas semânticas: `<nav>`, `<main>`, `<footer>`.
- Toda a imagem tem texto alternativo (`coverAlt` obrigatório nos projetos).

---

## O que este design NÃO faz

Para preservar o registo sóbrio e autêntico:

- Sem gradientes, sombras dramáticas, glow, néon.
- Sem múltiplas cores de acento — um só acento.
- Sem tipografia em maiúsculas nem Title Case.
- Sem animações que chamem a atenção para si próprias.
- Sem densidade visual excessiva — o espaço em branco é intencional.
