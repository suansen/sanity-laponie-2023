// ./schemas/formType.js

import {defineField, defineType} from 'sanity'

export const navItemType = defineType({
  name: 'navItem',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
    }),
    defineField({
      name: 'link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
