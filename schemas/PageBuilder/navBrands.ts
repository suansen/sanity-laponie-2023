// ./schemas/formType.js

import {defineField, defineType} from 'sanity'

export const navBrandsType = defineType({
  name: 'navBrands',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      description: 'Add selected Brands to Navbar',
      type: 'array',
      of: [{type: 'reference', to: {type: 'brand'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
