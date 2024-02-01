import {defineField, defineType} from 'sanity'

export const headerLeftTextRightType = defineType({
  name: 'headerLeftTextRight',
  type: 'object',
  title: 'Text Only (Header Left Text Right)',
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
      name: 'description',
      type: 'localeText',
    }),
  ],
})

export const headerSubHeaderType = defineType({
  name: 'headerSubHeader',
  type: 'object',
  title: 'Text Only (Header and Subheader)',
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
      description: 'Select variant type',
      options: {
        list: ['full', 'fit'],
      },
      initialValue: 'full',
    }),

    defineField({
      name: 'textAlign',
      type: 'string',
      description: 'Select text alignment type',
      options: {
        list: ['left', 'right', 'center'],
      },
      initialValue: 'center',
    }),
  ],
})
