import { withPayload } from '@payloadcms/next/withPayload'
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
        pathname: '/api/media/file/**',
      },
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
      {
        source: '/pl',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-frontmatter', ['yaml']]],
  },
})

export default withPayload(withMDX(nextConfig), { devBundleServerPackages: false })
