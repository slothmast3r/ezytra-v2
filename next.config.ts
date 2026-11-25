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
      // Polish moved from /pl/* to the root (2026-11); services folded into the price list.
      { source: '/pl', destination: '/', permanent: true },
      { source: '/pl/uslugi', destination: '/cennik', permanent: true },
      { source: '/uslugi', destination: '/cennik', permanent: true },
      { source: '/pl/:path*', destination: '/:path*', permanent: true },
      // English moved from the root to /en/* (2026-11).
      { source: '/about', destination: '/en/about', permanent: true },
      { source: '/services', destination: '/en/services', permanent: true },
      { source: '/contact', destination: '/en/contact', permanent: true },
      { source: '/work', destination: '/en/work', permanent: true },
      { source: '/work/:path*', destination: '/en/work/:path*', permanent: true },
      { source: '/journal', destination: '/en/journal', permanent: true },
      { source: '/journal/:path*', destination: '/en/journal/:path*', permanent: true },
      // Legacy aliases.
      { source: '/about-us', destination: '/en/about', permanent: true },
      { source: '/featured', destination: '/en/work', permanent: true },
      { source: '/privacy-policy', destination: '/polityka-prywatnosci', permanent: false },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-frontmatter', ['yaml']]],
  },
})

export default withMDX(nextConfig)
