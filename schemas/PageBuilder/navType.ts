// ./schemas/pageType.ts

import {defineArrayMember, defineField, defineType} from 'sanity'
import {MasterDetailIcon} from '@sanity/icons'

export const navType = defineType({
  name: 'nav',
  type: 'document',
  title: 'Navbar Builder',
  icon: MasterDetailIcon,

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: '* There should only be 1 Navbar item in the Navbar Builder.',
    }),

    defineField({
      name: 'navBuilder',
      type: 'array',
      title: 'Navbar builder',
      of: [
        defineArrayMember({
          name: 'navItem',
          type: 'navItem',
        }),

        defineArrayMember({
          name: 'navBrands',
          type: 'navBrands',
        }),
        // etc...
      ],
    }),
    defineField({
      name: 'footerBuilder',
      type: 'array',
      title: 'Footer builder',
      of: [
        defineArrayMember({
          name: 'footer',
          type: 'footer',
        }),

        // etc...
      ],
    }),
  ],
})
