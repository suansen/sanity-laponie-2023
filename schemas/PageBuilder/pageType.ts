// ./schemas/pageType.ts

import {defineArrayMember, defineField, defineType} from 'sanity'
import {MasterDetailIcon} from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page Builder',
  icon: MasterDetailIcon,

  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),

        defineArrayMember({
          name: 'heroRounded',
          type: 'heroRounded',
        }),
        defineArrayMember({
          name: 'teamMembers',
          type: 'teamMembers',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'cardsForHighlight',
          type: 'cardsForHighlight',
        }),
        defineArrayMember({
          name: 'cardsForBrand',
          type: 'cardsForBrand',
        }),
        defineArrayMember({
          name: 'cardsForProduct',
          type: 'cardsForProduct',
        }),
        defineArrayMember({
          name: 'cardsForLink',
          type: 'cardsForLink',
        }),
        defineArrayMember({
          name: 'mapBox',
          type: 'mapBox',
        }),
        defineArrayMember({
          name: 'cardsForSupport',
          type: 'cardsForSupport',
        }),
        defineArrayMember({
          name: 'roundedImageWithText',
          type: 'roundedImageWithText',
        }),

        defineArrayMember({
          name: 'headerLeftTextRight',
          type: 'headerLeftTextRight',
        }),
        defineArrayMember({
          name: 'headerSubHeader',
          type: 'headerSubHeader',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'productCarousel',
          type: 'productCarousel',
        }),
        defineArrayMember({
          name: 'awardCarousel',
          type: 'awardCarousel',
        }),
        defineArrayMember({
          name: 'reviewCarousel',
          type: 'reviewCarousel',
        }),
        // etc...
      ],
    }),
  ],
})
