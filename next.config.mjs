/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  async redirects() {
    return [
      {
        source: '/the-history-of-tattoos-from-ancient-traditions-to-modern-art/',
        destination: '/blog/the-history-of-tattoos-from-ancient-traditions-to-modern-art/',
        permanent: true,
      },
      {
        source: '/top-10-most-popular-tattoo-styles-in-2024-find-your-next-design-inspiration/',
        destination: '/blog/top-10-most-popular-tattoo-styles-in-2024-find-your-next-design-inspiration/',
        permanent: true,
      },
      {
        source: '/discover-the-diverse-tattoo-styles-at-angel-tattooz-in-london/',
        destination: '/blog/discover-the-diverse-tattoo-styles-at-angel-tattooz-in-london/',
        permanent: true,
      },
      {
        source: '/the-dark-side-of-laser-tattoo-removal-why-cover-ups-are-a-better-bet/',
        destination: '/blog/the-dark-side-of-laser-tattoo-removal-why-cover-ups-are-a-better-bet/',
        permanent: true,
      },
      {
        source: '/the-ultimate-guide-to-tattoo-aftercare-keeping-your-ink-fresh/',
        destination: '/blog/the-ultimate-guide-to-tattoo-aftercare-keeping-your-ink-fresh/',
        permanent: true,
      },
      {
        source: '/discover-the-ultimate-tattoo-experience-at-angel-tattooz/',
        destination: '/blog/discover-the-ultimate-tattoo-experience-at-angel-tattooz/',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com https://s.ytimg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' blob: data: https://cdn.sanity.io https://images.unsplash.com https://i.ytimg.com; font-src 'self' https://fonts.gstatic.com data:; frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com; connect-src 'self' https://e1ur0uih.api.sanity.io https://cdn.sanity.io https://www.google-analytics.com;",
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
