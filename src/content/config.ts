import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.date(),
  updatedDate: z.date().optional(),
  author: z.string().default('Maryna Suvorova'),
  tags: z.array(z.string()),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  draft: z.boolean().default(false),
  alternateSlug: z.string().optional(),
});

const blogUk = defineCollection({
  type: 'content',
  schema: blogSchema,
});

const blogRu = defineCollection({
  type: 'content',
  schema: blogSchema,
});

export const collections = {
  'blog-uk': blogUk,
  'blog-ru': blogRu,
};
