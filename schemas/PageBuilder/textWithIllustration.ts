// ./schemas/textWithIllustration.js

import {defineField, defineType} from 'sanity'

export const textWithIllustrationType = defineType({
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text with Illustration',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
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

export const teamMembersType = defineType({
  name: 'teamMembers',
  type: 'object',
  title: 'Team Members',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'header',
      type: 'localeString',
    }),
    defineField({
      name: 'subheader',
      type: 'localeString',
    }),
    defineField({
      name: 'team',
      title: 'Team Member',
      description: 'Add Team Member',
      type: 'array',
      of: [{type: 'reference', to: {type: 'teamMember'}}],
    }),
  ],
})

export const cardsForHighlightType = defineType({
  name: 'cardsForHighlight',
  type: 'object',
  title: 'Cards for Highlights (ref)',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      type: 'array',
      of: [{type: 'reference', to: {type: 'highlight'}}],
    }),
  ],
})

export const cardsForBrandType = defineType({
  name: 'cardsForBrand',
  type: 'object',
  title: 'Cards for Brand (ref)',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      type: 'localeString',
    }),
    defineField({
      name: 'cards',
      type: 'array',
      of: [{type: 'reference', to: {type: 'brand'}}],
    }),
  ],
})

export const cardsForSupportType = defineType({
  name: 'cardsForSupport',
  type: 'object',
  title: 'Cards for Support (ref)',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'header',
      type: 'localeString',
    }),
    defineField({
      name: 'subheader',
      type: 'localeString',
    }),

    defineField({
      name: 'cards',
      type: 'array',
      of: [{type: 'reference', to: {type: 'support'}}],
    }),
  ],
})

export const roundedImageWithTextType = defineType({
  name: 'roundedImageWithText',
  type: 'object',
  title: 'Rounded image with text',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'header',
      type: 'localeString',
    }),
    defineField({
      name: 'subheader',
      type: 'localeString',
    }),
    defineField({
      name: 'text',
      type: 'localeText',
    }),
    defineField({
      name: 'variant',
      type: 'string',
      description: 'Select where image will be',
      options: {
        list: ['left', 'right'],
      },
      initialValue: 'left',
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

export const cardsForLinkType = defineType({
  name: 'cardsForLink',
  type: 'object',
  title: 'Cards for Link (ref)',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      type: 'array',
      of: [{type: 'reference', to: {type: 'cardLink'}}],
    }),
  ],
})

export const cardsForProductType = defineType({
  name: 'cardsForProduct',
  type: 'object',
  title: 'Cards for Product (ref)',
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
      name: 'description',
      type: 'localeString',
    }),
    defineField({
      name: 'button',
      type: 'button',
    }),
    defineField({
      name: 'products',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product'}}],
    }),
  ],
})
