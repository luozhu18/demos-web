// src/content.config.ts (🚨 注意文件名的变化)
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // 📦 引入新版数据加载器

const architectureCollection = defineCollection({
  // type: 'content', // 🚨 必须删除！
  loader: glob({ pattern: "**/*.md", base: "./src/content/architecture" }), // 指向你的 Markdown 档案库
  schema: ({ image }) => z.object({
    id: z.string().or(z.number()), // 兼容你写的 "02" 字符串，或者纯数字
    name: z.string(),              // 注册 name 字段
    type: z.string(),              // 注册 type 字段
    title: z.string(),             // 注册 title 字段
    description: z.string(),       // 注册 description 字段
    coverImage: image(),           // 你的封面图
  })
});

export const collections = {
  'architecture': architectureCollection,
};