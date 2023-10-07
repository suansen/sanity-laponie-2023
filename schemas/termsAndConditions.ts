import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'termsAndConditions',
  title: 'Terms And Conditions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sanity Display Name',
      type: 'string',
    }),

    defineField({
      name: 'textBlockContent',
      title: 'Text Block Content',
      type: 'blockContent',
    }),
  ],
})
