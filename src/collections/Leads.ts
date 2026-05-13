import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'school',
    defaultColumns: ['school', 'name', 'contact', 'niche', 'createdAt'],
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'school', type: 'text', required: true },
    { name: 'contact', type: 'text', required: true },
    { name: 'message', type: 'textarea' },
    {
      name: 'niche',
      type: 'select',
      options: [
        { label: 'Szkoły tańca', value: 'taniec' },
        { label: 'Szkoły walki', value: 'walki' },
        { label: 'Inne', value: 'inne' },
      ],
    },
    { name: 'source', type: 'text', admin: { description: 'URL strony, z której przyszedł lead' } },
  ],
  timestamps: true,
}
