import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import playformInline from '@playform/inline'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import rehypeKatex from 'rehype-katex'
import remarkEmbeddedMedia from './src/plugins/remark-embedded-media.mjs'
import remarkReadingTime from './src/plugins/remark-reading-time.mjs'
import rehypeCleanup from './src/plugins/rehype-cleanup.mjs'
import rehypeImageProcessor from './src/plugins/rehype-image-processor.mjs'
import rehypeCopyCode from './src/plugins/rehype-copy-code.mjs'
import remarkTOC from './src/plugins/remark-toc.mjs'
import { themeConfig } from './src/config'
import { imageConfig } from './src/utils/image-config'
import path from 'path'
import netlify from '@astrojs/netlify'
import { readFileSync, readdirSync } from 'fs'

// Build a slug → pubDate map by reading post frontmatter at config time
const postDates: Record<string, Date> = {}
const postsDir = './src/content/posts'
for (const file of readdirSync(postsDir).filter((f) => !f.startsWith('_') && f.endsWith('.md'))) {
  const content = readFileSync(`${postsDir}/${file}`, 'utf-8')
  const match = content.match(/pubDate:\s*['"]?(\d{4}-\d{2}-\d{2})['"]?/)
  if (match) postDates[file.replace('.md', '')] = new Date(match[1])
}

export default defineConfig({
  adapter: netlify(), // Set adapter for deployment, or set `linkCard` to `false` in `src/config.ts`
  site: themeConfig.site.website,
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: imageConfig
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      wrap: false
    },
    remarkPlugins: [remarkMath, remarkDirective, remarkEmbeddedMedia, remarkReadingTime, remarkTOC],
    rehypePlugins: [rehypeKatex, rehypeCleanup, rehypeImageProcessor, rehypeCopyCode]
  },
  integrations: [
    playformInline({
      Exclude: [(file) => file.toLowerCase().includes('katex')]
    }),
    mdx(),
    sitemap({
      serialize(item) {
        const slugMatch = item.url.match(/\/blog\/([^/]+)\/$/)
        if (slugMatch && postDates[slugMatch[1]]) {
          item.lastmod = postDates[slugMatch[1]]
        }
        return item
      }
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },
  devToolbar: {
    enabled: false
  }
})
