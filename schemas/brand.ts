import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brand',
  title: 'Brand',
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
      type: 'localeText',
    }),
    defineField({
      name: 'brandQuote',
      title: 'Brand Quote',
      description: 'Brand Quote is displayed on Brands Page.',
      type: 'localeString',
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
      name: 'brandPageImage',
      title: 'Brand Page Image',
      description: 'Cover image when visiting the specific brand page.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'brandPagePromotionImage',
      title: 'Brand Page Promotion Image',
      description: 'Promotion image when visiting the specific brand page.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'brandPageProductImage',
      title: 'Brand Page Product Image',
      description: 'Products image when visiting the specific brand page.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'brandPageTreatmentImage',
      title: 'Brand Page Treatment Image',
      description: 'Brands image when visiting the specific brand page.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'websiteLink',
      title: 'Website Link',
      description: 'Link to brand website',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'productCategories',
      title: 'Product Categories',
      description: 'Product Categories that belong to the brand.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'productCategory'}}],
    }),
  ],
})
