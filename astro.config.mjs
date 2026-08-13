// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// O repositório chama-se LucasJardim2004.github.io, pelo que o site é servido
// na raiz do domínio — sem base path, links internos ficam limpos.
export default defineConfig({
  site: 'https://lucasjardim2004.github.io',
  integrations: [tailwind(), mdx()],
});
