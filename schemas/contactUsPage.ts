import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactUsPage',
  title: 'Contact Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'generalEnquiryNumber',
      title: 'General Enquiry Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'generalEnquiryEmail',
      title: 'General Enquiry Email',
      type: 'string',
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'string',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
    }),
    defineField({
      name: 'latitude',
      title: 'Latitude',
      type: 'string',
    }),
    defineField({
      name: 'longitude',
      title: 'Longitude',
      type: 'string',
    }),

    defineField({
      name: 'salesTitle',
      title: 'Sales Title',
      type: 'localeString',
    }),
    defineField({
      name: 'salesImage',
      title: 'Sales image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'brandsTitle',
      title: 'Brands Title',
      type: 'localeString',
    }),
    defineField({
      name: 'brandsImage',
      title: 'Brands image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
