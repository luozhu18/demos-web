// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const architecture = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/architecture" }),
  // 必须有 ({ image }) => 
  schema: ({ image }) => z.object({
    id: z.string(),
    name: z.string(),
    type: z.string(),
    title: z.string(),
    description: z.string(),
    // 必须是 image()
    coverImage: image().optional(),
  }),
});

export const collections = { architecture };