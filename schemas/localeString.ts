import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localeString',
  title: 'localeString',
  type: 'object',
  fields: [
    {title: 'English', name: 'en', type: 'string'},
    {title: 'Chinese', name: 'cn', type: 'string'},
  ],
})
