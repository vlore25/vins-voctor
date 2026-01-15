import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Pages que vous ne voulez pas indexer
    },
    sitemap: 'https://vinsvoctor.com/sitemap.xml',
  }
}