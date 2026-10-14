const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// React's development build uses eval() for debugging features (reconstructing
// callstacks across environments), so dev needs 'unsafe-eval' or the page dies
// on a CSP violation. Production React never calls eval — keep it out of the
// shipped policy.
const isDev = process.env.NODE_ENV === 'development'

// Fillout serves the interest form in an iframe; Umami is our analytics provider.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ''}analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  connect-src 'self' api.fillout.com forms.fillout.com api-gateway.umami.dev cloud.umami.is;
  frame-src forms.fillout.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self' forms.fillout.com;
  object-src 'none';
`

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\n/g, ' ').trim() },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  async redirects() {
    return [
      // Old program URLs -> new short, non-colliding routes (section 04 of the plan)
      { source: '/program/helloexplorer', destination: '/program/explorer', permanent: true },
      { source: '/program/hellomaker', destination: '/program/maker', permanent: true },
      { source: '/program/hellochanger', destination: '/program/changer', permanent: true },
      { source: '/program/helloparent', destination: '/parents', permanent: true },
      { source: '/program/helloparents', destination: '/parents', permanent: true },
      { source: '/ideas', destination: '/about', permanent: true },
      { source: '/blog', destination: '/', permanent: false },
      { source: '/projects/:path*', destination: '/program', permanent: true },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
