import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { stages } from '@/data/stages'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMetadata.siteUrl.replace(/\/$/, '')
  const now = new Date()

  const routes = [
    { path: '', priority: 1 },
    { path: '/program', priority: 0.9 },
    { path: '/workshops', priority: 0.9 },
    { path: '/makerspace', priority: 0.8 },
    { path: '/parents', priority: 0.8 },
    { path: '/about', priority: 0.6 },
    { path: '/support', priority: 0.5 },
    { path: '/code-of-conduct', priority: 0.3 },
  ]

  return [
    ...routes.map((route) => ({
      url: `${base}${route.path}`,
      lastModified: now,
      priority: route.priority,
    })),
    ...stages.map((stage) => ({
      url: `${base}/program/${stage.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ]
}
