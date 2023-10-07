import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localeBlockContent',
  title: 'localeBlockContent',
  type: 'object',
  fields: [
    {title: 'English', name: 'en', type: 'blockContent'},
    {title: 'Chinese', name: 'cn', type: 'blockContent'},
  ],
})
