import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    disableLocalStorage: !!process.env.BLOB_READ_WRITE_TOKEN,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'projectCard',
        width: 1200,
        height: 800,
        position: 'centre',
      },
      {
        name: 'journalHero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
      {
        name: 'caseStudyDetail',
        width: 1440,
        height: null, // Auto height
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
}
