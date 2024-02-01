import {MasterDetailIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'brand',
  title: 'Brand Builder',
  type: 'document',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'brandQuote',
      title: 'Brand Quote',
      description: 'Brand Quote is displayed on Brands Page.',
      type: 'localeString',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'brandPageImage',
    //   title: 'Brand Page Image',
    //   description: 'Cover image when visiting the specific brand page.',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'brandPagePromotionImage',
    //   title: 'Brand Page Promotion Image',
    //   description: 'Promotion image when visiting the specific brand page.',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'brandPageProductImage',
    //   title: 'Brand Page Product Image',
    //   description: 'Products image when visiting the specific brand page.',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'brandPageTreatmentImage',
    //   title: 'Brand Page Treatment Image',
    //   description: 'Brands image when visiting the specific brand page.',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'websiteLink',
      title: 'Website Link',
      description: 'Link to brand website',
      type: 'string',
    }),
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
      name: 'productCategories',
      title: 'Product Categories',
      description: 'Product Categories that belong to the brand.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'productCategory'}}],
    }),

    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
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

    defineField({
      name: 'productsPageBuilder',
      title: 'Products Page builder',
      type: 'array',
      of: [
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

    defineField({
      name: 'treatmentsPageBuilder',
      title: 'Treatments Page builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'treatmentsDisplay',
          type: 'treatmentsDisplay',
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
