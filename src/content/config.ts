// This is a special file that Astro will automatically load and use to configure your content collections.

// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";


// 2. Define your collection(s)
const releaseNotes = defineCollection({
  // loader: glob({
  //   pattern: "**/*.{md,mdx}",
  //   base: "./src/content/release-notes",
  // }),
  type: "content",
  schema: z.object({
    // title: z.string().optional(),
    // date: z.string().optional(),
    // description: z.string().optional(),
    // author: z.string().optional(),
    // version: z.string().optional(),
    // version_mobile: z.string().optional(),
  }),
});

// Define a data schema for YAML files
// const releaseNotesData = defineCollection({
//   type: "data", // This tells Astro it's a data collection
//   schema: z.object({
//     items: z.array(
//       z.object({
//         name: z.string(),
//         href: z.string(),
//         topicHref: z.string().optional(),
//         items: z.array(z.any()).optional(),
//       })
//     ),
//   }),
// });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  "release-notes": releaseNotes,
  // "release-notes-data": releaseNotesData,
};
