import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  path?: string
}

export function genPageMetadata({ title, description, image, path }: PageSEOProps): Metadata {
  const desc = description || siteMetadata.description
  return {
    title,
    description: desc,
    alternates: { canonical: path ?? './' },
    openGraph: {
      title: `${title} | ${siteMetadata.shortTitle}`,
      description: desc,
      url: path ?? './',
      siteName: siteMetadata.shortTitle,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: siteMetadata.locale,
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.shortTitle}`,
      description: desc,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
  }
}
