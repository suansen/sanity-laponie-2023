// ./schemas/heroType.ts

import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'variant',
      type: 'string',
      description: 'Select image variant type',
      options: {
        list: ['full', 'half', 'quarter'],
      },
      initialValue: 'full',
    }),
    defineField({
      name: 'textColor',
      type: 'string',
      description: 'Select Text color variant',
      options: {
        list: ['dark', 'light'],
      },
      initialValue: 'dark',
    }),

    defineField({
      name: 'heading',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      type: 'localeString',
    }),
    defineField({
      name: 'button',
      type: 'button',
    }),

    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
})

export const heroRoundedType = defineType({
  name: 'heroRounded',
  type: 'object',
  title: 'Hero with round image',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'localeString',
    }),
    defineField({
      name: 'tagline',
      type: 'localeString',
    }),
    defineField({
      name: 'tagline2',
      type: 'localeString',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
})
