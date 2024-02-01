// ./schemas/formType.js

import {defineField, defineType} from 'sanity'

export const formType = defineType({
  name: 'form',
  type: 'object',
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
      name: 'form',
      type: 'string',
      description: 'Select form type',
      options: {
        // list: ['newsletter', 'register', 'contact'],
        list: ['contact'],
      },
      initialValue: 'contact',
    }),
  ],
})
