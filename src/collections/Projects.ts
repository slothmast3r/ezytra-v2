import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'location', 'order', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Martial Arts Centre — Warsaw, PL"',
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
    },
    {
      name: 'live',
      type: 'text',
      admin: {
        description: 'e.g. "Live · pantera.pl"',
      },
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        description: 'Display URL, e.g. "pantera.pl"',
      },
    },
    {
      name: 'href',
      type: 'text',
      admin: {
        description: 'Full link URL, e.g. "https://pantera.pl"',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 1,
      admin: {
        description: 'Display order (lower = first)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        description: 'URL slug for the case study, e.g. "pantera"',
      },
    },
    {
      name: 'type',
      type: 'text',
      admin: {
        description: 'e.g. "Full Project", "Brand + Site", "Web App"',
      },
    },
    {
      name: 'year',
      type: 'text',
      admin: {
        description: 'e.g. "2025"',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO / Meta',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
          admin: {
            description: 'Custom title for search engines. If empty, project name will be used.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
          admin: {
            description: 'Brief summary for search results.',
          },
        },
      ],
    },
  ],
}
