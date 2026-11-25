import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    qualities: [70, 75],
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
  async redirects() {
    return [
      // English lives at the root, Polish under /pl. Between 2026-11-06 and
      // 2026-11-25 it was the other way round (Polish at the root, English
      // under /en); these send those short-lived URLs back.
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      { source: '/cennik', destination: '/pl/cennik', permanent: true },
      { source: '/realizacje', destination: '/pl/realizacje', permanent: true },
      { source: '/o-mnie', destination: '/pl/o-mnie', permanent: true },
      { source: '/kontakt', destination: '/pl/kontakt', permanent: true },
      { source: '/strony-dla-szkol-tanca', destination: '/pl/strony-dla-szkol-tanca', permanent: true },
      { source: '/strony-dla-szkol-walki', destination: '/pl/strony-dla-szkol-walki', permanent: true },
      { source: '/polityka-prywatnosci', destination: '/pl/polityka-prywatnosci', permanent: true },
      // The Polish services page was folded into the price list.
      { source: '/pl/uslugi', destination: '/pl/cennik', permanent: true },
      { source: '/uslugi', destination: '/pl/cennik', permanent: true },
      // Legacy aliases.
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/featured', destination: '/work', permanent: true },
      { source: '/privacy-policy', destination: '/pl/polityka-prywatnosci', permanent: false },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-frontmatter', ['yaml']]],
  },
})

export default withMDX(nextConfig)
