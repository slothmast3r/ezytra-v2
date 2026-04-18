import type { CollectionConfig, Block } from 'payload'

const OverviewBlock: Block = {
  slug: 'overview',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'brief', type: 'richText', required: true, admin: { width: '50%' } },
        { name: 'myRole', type: 'richText', required: true, admin: { width: '50%' } },
      ],
    },
  ],
}

const ChallengeBlock: Block = {
  slug: 'challenge',
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'description', type: 'richText', required: true },
    {
      name: 'constraints',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
  ],
}

const ProcessBlock: Block = {
  slug: 'process',
  fields: [
    { name: 'heading', type: 'text', required: true },
    {
      name: 'steps',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', admin: { description: 'e.g. "Week 1"' } },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'richText', required: true },
      ],
    },
    { name: 'note', type: 'text' },
  ],
}

const ResultsBlock: Block = {
  slug: 'results',
  fields: [
    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        { name: 'description', type: 'text' },
      ],
    },
  ],
}

const TextBlock: Block = {
  slug: 'textSection',
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'body', type: 'richText', required: true },
  ],
}

const ImageBlock: Block = {
  slug: 'imageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'large',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Large', value: 'large' },
        { label: 'Full Width', value: 'full' },
      ],
    },
  ],
}

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'location', 'order', 'updatedAt'],
  },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Project Info',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
                { name: 'location', type: 'text', required: true, admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'slug', type: 'text', required: true, admin: { width: '50%' } },
                { name: 'order', type: 'number', required: true, defaultValue: 1, admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'type', type: 'text', admin: { width: '33%' } },
                { name: 'year', type: 'text', admin: { width: '33%' } },
                { name: 'hasCaseStudy', type: 'checkbox', defaultValue: true, admin: { width: '33%' } },
              ],
            },
            { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text', required: true }] },
            { name: 'desc', type: 'textarea', required: true, label: 'Hero Description' },
            {
              type: 'row',
              fields: [
                { name: 'url', type: 'text', admin: { width: '50%' } },
                { name: 'href', type: 'text', admin: { width: '50%' } },
              ],
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Featured Image',
              admin: {
                description: 'Used in the work grid. If empty, a CSS placeholder will be shown.',
              },
            },
            { name: 'live', type: 'text' },
            { name: 'featured', type: 'checkbox', defaultValue: false },
          ],
        },
        {
          label: 'Case Study Builder',
          admin: {
            condition: (data) => data.hasCaseStudy,
          },
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [OverviewBlock, ChallengeBlock, ProcessBlock, ResultsBlock, TextBlock, ImageBlock],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'meta',
              type: 'group',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
