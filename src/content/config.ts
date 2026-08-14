// Esquemas das content collections. O build valida cada ficheiro de conteúdo
// contra o seu esquema — um campo obrigatório em falta ou um tipo errado faz
// o build falhar com mensagem clara. É a rede de segurança que protege a
// manutenção futura. Ver docs/content-model.md para a especificação completa.

import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        summary: z.string(),
        date: z.date(),
        type: z.string(), // ex.: "Web app", "Game", "University project"
        status: z.string().default('Completed'),
        tags: z.array(z.string()),
        // Capa opcional: sem capa, o card mostra um bloco tipográfico com o
        // título. Ao adicionar cover.png, a imagem aparece automaticamente.
        cover: image().optional(),
        coverAlt: z.string().optional(),
        // Galeria opcional: lista de imagens que alimenta o carrossel na
        // página de detalhe. Cada imagem tem o seu texto alternativo (alt).
        // Sem galeria, o carrossel não aparece.
        gallery: z
          .array(z.object({ src: image(), alt: z.string() }))
          .optional(),
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
      })
      // Se há capa, o texto alternativo é obrigatório (acessibilidade).
      .refine((d) => !d.cover || !!d.coverAlt, {
        message: 'coverAlt é obrigatório quando cover está definido',
        path: ['coverAlt'],
      }),
});

const certificates = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      issuer: z.string(),
      // Certificados usam type:'data' (JSON) — sem coercao automatica de
      // string para Date. Guardamos como string ISO e convertemos em runtime.
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      category: z.string(),
      credentialUrl: z.string().url().optional(),
      image: image().optional(),
    }),
});

export const collections = { projects, certificates };
