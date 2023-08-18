import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localeText',
  title: 'localeText',
  type: 'object',
  fields: [
    {title: 'English', name: 'en', type: 'text'},
    {title: 'Chinese', name: 'cn', type: 'text'},
  ],
})
