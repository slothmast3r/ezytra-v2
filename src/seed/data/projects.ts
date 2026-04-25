import type { Project } from '@/payload-types'

type LayoutBlock = NonNullable<Project['layout']>[number]

type RichTextContent = {
  root: {
    type: string
    children: {
      type: string
      version: number
      [k: string]: unknown
    }[]
    direction: ('ltr' | 'rtl') | null
    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
    indent: number
    version: number
  }
  [k: string]: unknown
}

const rich = (text: string): RichTextContent => ({
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    direction: null,
    children: [
      {
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        direction: null,
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: text,
            type: 'text',
            version: 1,
          },
        ],
      },
    ],
  },
})

export const projects = [
  {
    name: 'Pantera',
    location: 'Martial Arts Centre · Warsaw, PL',
    tags: [
      { tag: 'Web Design' },
      { tag: 'Next.js' },
      { tag: 'Payload CMS' },
      { tag: 'SEO' },
      { tag: 'Polish' },
    ],
    desc: 'Website for a Krav Maga, Karate & Tai Chi centre. Design, development, CMS, and local SEO — built end to end.',
    live: 'Live',
    url: 'pantera.waw.pl',
    href: 'https://pantera.waw.pl',
    order: 1,
    slug: 'pantera',
    type: 'Full Project',
    year: '2025',
    featured: true,
    hasCaseStudy: true,
    layout: [
      {
        blockType: 'overview',
        brief: rich('Pantera needed a professional website that reflected the discipline and energy of their martial arts centre. They had no web presence — just a social media page.'),
        myRole: rich('End-to-end ownership: discovery, design in Figma, development in Next.js, CMS setup in Payload, local SEO, and VPS deployment.'),
      } satisfies Extract<LayoutBlock, { blockType: 'overview' }>,
      {
        blockType: 'challenge',
        heading: 'Starting from zero.',
        description: rich('The key challenges were building trust for people unfamiliar with martial arts, making the class schedule easy to find, and ensuring the site ranked for local searches like "Krav Maga Warsaw".'),
        constraints: [
          { text: 'No existing brand guidelines' },
          { text: 'Three distinct disciplines to balance' },
          { text: 'Mobile-first audience' },
        ],
      } satisfies Extract<LayoutBlock, { blockType: 'challenge' }>,
      {
        blockType: 'process',
        heading: 'From brief to high-fidelity.',
        steps: [
          {
            label: 'Week 1',
            title: 'Discovery & Wireframes',
            description: rich('Competitor analysis and low-fidelity wireframes for 6 key pages.'),
          },
          {
            label: 'Week 2',
            title: 'Visual Identity',
            description: rich('Colour palette anchored in dark navy and sharp accent. Built a minimal design system.'),
          },
          {
            label: 'Week 3',
            title: 'Development',
            description: rich('Full Next.js build with Payload CMS integration for schedule management.'),
          },
        ],
        note: 'All design screens are available on request.',
      } satisfies Extract<LayoutBlock, { blockType: 'process' }>,
      {
        blockType: 'results',
        stats: [
          { value: '95+', label: 'Lighthouse Score', description: 'Performance and SEO.' },
          { value: '#1', label: 'SEO Ranking', description: 'Top result for target keywords.' },
          { value: '100%', label: 'Editable', description: 'Client manages all content.' },
        ],
      } satisfies Extract<LayoutBlock, { blockType: 'results' }>,
    ],
  },
  {
    name: 'ProfilDance',
    location: 'Dance School · Warsaw, PL',
    tags: [
      { tag: 'Branding' },
      { tag: 'Web Design' },
      { tag: 'Next.js' },
      { tag: 'Polish' },
    ],
    desc: 'Full visual identity and website for a Warsaw dance school. Logo, type, colour — then Next.js build with Payload CMS.',
    live: 'Live',
    url: 'profildance.com',
    href: 'https://profildance.com',
    order: 2,
    slug: 'profildance',
    type: 'Brand + Site',
    year: '2024',
    featured: false,
    hasCaseStudy: false,
  },
]
