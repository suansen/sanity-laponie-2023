// ./schemas/productDisplayType.js

import {defineField, defineType} from 'sanity'

export const productDisplayType = defineType({
  name: 'productDisplay',
  type: 'object',
  title: 'Products Display',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'productCategories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'productCategory'}}],
    }),
  ],
})

export const singleProductDisplayType = defineType({
  name: 'singleProductDisplay',
  type: 'object',
  title: 'Single Product Display',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})

export const singleProductIngredientDisplayType = defineType({
  name: 'singleProductIngredientDisplay',
  type: 'object',
  title: 'Single Product Ingredient Display',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'localeString',
    }),
    defineField({
      name: 'subheading',
      type: 'localeString',
    }),
  ],
})

export const singleTreatmentDisplayType = defineType({
  name: 'singleTreatmentDisplay',
  type: 'object',
  title: 'Single Treatment Display',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})

export const treatmentsDisplayType = defineType({
  name: 'treatmentsDisplay',
  type: 'object',
  title: 'Treatments Display',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'localeString',
    }),
    defineField({
      name: 'subheading',
      type: 'localeString',
    }),
    defineField({
      name: 'treatments',
      type: 'array',
      of: [{type: 'reference', to: {type: 'treatment'}}],
    }),
  ],
})
