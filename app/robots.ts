import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export default function robots(): MetadataRoute.Robots {
  const base = siteMetadata.siteUrl.replace(/\/$/, '')
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/thanks' }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
