import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projetos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projetos" }),
  schema: z.object({
    titulo: z.string(),
    responsavel: z.string().optional(),
    linha: z.string().optional(),
    status: z.enum(["em andamento", "concluído", "planejado"]).default("em andamento"),
    resumo: z.string(),
    ordem: z.number().default(99),
  }),
});

const producao = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/producao" }),
  schema: z.object({
    titulo: z.string(),
    autores: z.string(),
    tipo: z.enum(["artigo", "TCC", "resumo", "apresentação", "outro"]).default("artigo"),
    ano: z.number(),
    veiculo: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { projetos, producao };
