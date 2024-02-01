import {MasterDetailIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product Builder',
  type: 'document',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Sanity Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productImage',
      title: 'Product image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      weak: false,
      to: [{type: 'brand'}],
      description: 'Which brand the product belongs to',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      weak: false,
      to: [{type: 'productCategory'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Description of the product',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'productTag',
      title: 'Product Tag',
      type: 'string',
      options: {
        list: ['featured', 'best seller'],
      },
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      description: 'List of Sizes of Product',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      description: 'List of active ingredients',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'ingredient'}],
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
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'pageBuilder',
      title: 'Product Page builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'singleProductDisplay',
          type: 'singleProductDisplay',
        }),
        defineArrayMember({
          name: 'singleProductIngredientDisplay',
          type: 'singleProductIngredientDisplay',
        }),
        defineArrayMember({
          name: 'productDisplay',
          type: 'productDisplay',
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
})
