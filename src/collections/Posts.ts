import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'headline',
    defaultColumns: ['headline', 'tag', 'status', 'date', 'updatedAt'],
  },
  access: { read: () => true },
  fields: [
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'published',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Coming Soon', value: 'coming-soon' },
        { label: 'Draft', value: 'draft' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    { name: 'tag', type: 'text' },
    { name: 'date', type: 'text' },
    { name: 'readTime', type: 'text' },
    { name: 'headline', type: 'text', required: true },
    { name: 'excerpt', type: 'textarea' },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: false,
      admin: { position: 'sidebar' },
    },
    { name: 'nextTitle', type: 'text' },
    { name: 'nextHref', type: 'text' },
    {
      name: 'sections',
      type: 'array',
      fields: [
        { name: 'anchor', type: 'text', required: true },
        { name: 'label', type: 'text' },
        { name: 'heading', type: 'text' },
        /**
         * Plain text body — separate paragraphs with a blank line (\n\n).
         * Code blocks: wrap in ```lang\n...\n``` fences.
         * Callouts: prefix a paragraph with "PRO TIP: ".
         */
        { name: 'body', type: 'textarea' },
      ],
    },
  ],
}
