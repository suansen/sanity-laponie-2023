import {defineField, defineType} from 'sanity'

export const mapBoxType = defineType({
  name: 'mapBox',
  type: 'object',
  title: 'Map Box with General Enquiry and Address',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'header',
      type: 'localeString',
    }),
    defineField({
      name: 'subheader',
      type: 'localeString',
    }),
    defineField({
      name: 'latitude',
      type: 'number',
    }),
    defineField({
      name: 'longitude',
      type: 'number',
    }),

    defineField({
      name: 'enquiryPhoneNumber',
      type: 'string',
    }),
    defineField({
      name: 'enquiryEmail',
      type: 'string',
    }),
    defineField({
      name: 'enquiryAddressLine1',
      type: 'string',
    }),
    defineField({
      name: 'enquiryAddressLine2',
      type: 'string',
    }),
    defineField({
      name: 'enquiryAddressLine3',
      type: 'string',
    }),
  ],
})
