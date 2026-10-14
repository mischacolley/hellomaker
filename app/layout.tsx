import 'css/tailwind.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Nunito, DM_Sans } from 'next/font/google'
import siteMetadata from '@/data/siteMetadata'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Nunito carries the friendly, child-appropriate display voice; DM Sans is the
// workhorse that keeps 600-word program pages readable at 17px.
const display = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const body = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.shortTitle}`,
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.shortTitle,
  authors: [{ name: siteMetadata.author, url: siteMetadata.authorSite }],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.shortTitle,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: 'website',
  },
  twitter: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
  alternates: { canonical: './' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/static/favicons/favicon.svg', type: 'image/svg+xml' },
      { url: '/static/favicons/favicon-96x96.png', sizes: '96x96' },
    ],
    apple: '/static/favicons/apple-touch-icon.png',
  },
  manifest: '/static/favicons/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f8b500',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteMetadata.language} className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {siteMetadata.analytics.umamiWebsiteId && (
          <Script
            async
            src="https://analytics.umami.is/script.js"
            data-website-id={siteMetadata.analytics.umamiWebsiteId}
          />
        )}
      </body>
    </html>
  )
}
