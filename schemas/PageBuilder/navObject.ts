import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navObject',
  title: 'navObject',
  type: 'object',
  fields: [
    {title: 'Title', name: 'title', type: 'string'},
    {title: 'Link', name: 'link', type: 'string'},
  ],
})
