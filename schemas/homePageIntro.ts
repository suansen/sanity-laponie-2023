import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePageIntro',
  title: 'HomePageIntro',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'title2',
      title: 'Title2',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
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
    defineField({
      name: 'experienceTitle',
      title: 'Experience Title',
      type: 'string',
    }),
    defineField({
      name: 'experienceTitle2',
      title: 'Experience Title2',
      type: 'string',
    }),
    defineField({
      name: 'experienceDescription',
      title: 'Experience Description',
      type: 'text',
    }),
    defineField({
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [{type: 'reference', to: {type: 'brand'}}],
    }),
  ],
})
