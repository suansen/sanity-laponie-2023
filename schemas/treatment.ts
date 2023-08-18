import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'treatment',
  title: 'Treatment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'treatmentImage',
      title: 'Treatment Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      weak: false,
      to: [{type: 'brand'}],
      description: 'Which brand the treatment belongs to',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      description: 'Description of the product',
      type: 'localeText',
    }),

    defineField({
      name: 'products',
      title: 'Products',
      description: 'List of products used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
})
