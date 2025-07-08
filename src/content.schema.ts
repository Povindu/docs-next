import { z } from "astro:content";

const TocItemSchema: z.ZodType<any> = z.lazy(() =>
    z.object({
        name: z.string(),
        uid: z.string().optional(),
        href: z.string().optional(),
        topicHref: z.string().optional(),
        items: z.array(TocItemSchema).optional(),
    })
);

const OptionalDocsSchema = z.object({
    description: z.string().optional().nullable(),
    audience: z.string().optional().nullable(),
    audience_tooltip: z.string().optional().nullable(),
    category: z.string().optional().nullable(),
    updated: z.date().optional().nullable(),
    version: z.coerce.string().optional().nullable(),
    version_sofo: z.coerce.string().optional().nullable(),
    version_devportal: z.coerce.string().optional().nullable(),
    version_mobile: z.coerce.string().optional().nullable(),
    translation_type: z.number().optional().nullable(),
    envir: z.union([z.string(), z.array(z.string())]).optional().nullable(),
    generated: z.boolean().optional().nullable(),
    keywords: z.union([z.string(), z.array(z.string())]).optional().nullable(),
    language: z.string().max(2).optional().nullable(),
    pilot: z.string().optional().nullable(),
    redirect_url: z.string().optional().nullable(),
}).partial()

const MandatoryDocsSchema = z.object({
    author: z.string().nullable(),
    date: z.coerce.string().nullable(),
    title: z.string().nullable(),
    uid: z.string().nullable(),
    topic: z.string().nullable(),
}).partial() // .partial() is used to make every property optional due to current frontmatter mismatch in some markdown files. Needs to be removed once frontmatter fixed

export const DocsSchema = MandatoryDocsSchema.merge(OptionalDocsSchema).passthrough();

export const SimplifiedYamlSchema = z.object({
    yamlMime: z.enum(["Category", "SubCategory"]), 
    title: z.string(),
    metadata: z.any(),
}).passthrough(); // Allow all other fields like landingContent, conceptualContent, tools, etc.

export const TocYamlSchema = z.object({
    items: z.array(TocItemSchema),
});




