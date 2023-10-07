import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sanity Name',
      type: 'string',
    }),
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'localeString',
    }),
    defineField({
      name: 'productImage',
      title: 'Product image',
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
      description: 'Which brand the product belongs to',
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      weak: false,
      to: [{type: 'productCategory'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Description of the product',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'productTag',
      title: 'Product Tag',
      type: 'string',
      options: {
        list: ['featured', 'best seller'],
      },
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      description: 'List of active ingredients',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'ingredient'}],
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
