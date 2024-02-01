import {defineField, defineType} from 'sanity'

export const footerType = defineType({
  name: 'footer',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Footer Section Title',
      type: 'localeString',
    }),
    defineField({
      name: 'navItem',
      title: 'Footer items',
      type: 'array',
      of: [{type: 'button'}],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
