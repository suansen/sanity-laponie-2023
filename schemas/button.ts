import {defineType} from 'sanity'

export default defineType({
  name: 'button',
  title: 'button',
  type: 'object',
  fields: [
    {title: 'English', name: 'en', type: 'string'},
    {title: 'Chinese', name: 'cn', type: 'string'},
    {title: 'Link', name: 'link', type: 'string'},
  ],
})
