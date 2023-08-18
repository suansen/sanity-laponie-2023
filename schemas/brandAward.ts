import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brandAward',
  title: 'Brand Award',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      description: 'Award for which brand?',
      weak: false,
      to: [{type: 'brand'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
