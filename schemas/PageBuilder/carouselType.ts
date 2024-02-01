import {defineField, defineType} from 'sanity'

export const productCarouselType = defineType({
  name: 'productCarousel',
  type: 'object',
  title: 'Product section with Carousel',
  fields: [
    // defineField({
    //   name: 'variant',
    //   type: 'string',
    //   description: 'Select image variant type',
    //   options: {
    //     list: ['full', 'half'],
    //   },
    //   initialValue: 'full',
    // }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'localeText',
    }),
    defineField({
      name: 'products',
      title: 'Product Name',
      description: 'Add Product',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product'}}],
    }),
  ],
})

export const awardCarouselType = defineType({
  name: 'awardCarousel',
  type: 'object',
  title: 'Award section with Carousel',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'localeText',
    }),
    defineField({
      name: 'awards',
      title: 'Award Name',
      description: 'Add award',
      type: 'array',
      of: [{type: 'reference', to: {type: 'brandAward'}}],
    }),
  ],
})

export const reviewCarouselType = defineType({
  name: 'reviewCarousel',
  type: 'object',
  title: 'Review section with Carousel',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'localeText',
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews ',
      description: 'Add Review',
      type: 'array',
      of: [{type: 'reference', to: {type: 'review'}}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
