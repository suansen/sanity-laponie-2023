import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sanity Name',
      type: 'string',
    }),
    defineField({
      name: 'categoryName',
      title: 'Category Name',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
