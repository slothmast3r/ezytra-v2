import { MetadataRoute } from 'next'
import { SITE_DATA } from './data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${SITE_DATA.url}/sitemap.xml`,
  }
}
