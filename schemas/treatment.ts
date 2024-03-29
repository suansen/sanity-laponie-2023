import {MasterDetailIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'treatment',
  title: 'Treatment Builder',
  type: 'document',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
    }),
    defineField({
      name: 'treatmentImage',
      title: 'Treatment Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      weak: false,
      to: [{type: 'brand'}],
      description: 'Which brand the treatment belongs to',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      description: 'Description of the product',
      type: 'localeBlockContent',
    }),

    defineField({
      name: 'products',
      title: 'Products',
      description: 'List of products used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Treatment Page builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'singleTreatmentDisplay',
          type: 'singleTreatmentDisplay',
        }),

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
          name: 'cardsForSupport',
          type: 'cardsForSupport',
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
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
      // subtitle: 'releaseDate',
    },
  },
})
