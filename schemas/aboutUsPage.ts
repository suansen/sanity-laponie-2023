import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutUsPage',
  title: 'About Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      type: 'localeString',
    }),
    defineField({
      name: 'introSubtitle',
      title: 'Intro Subtitle',
      type: 'localeString',
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Description',
      type: 'localeText',
    }),
    {
      title: 'Rich text example',
      name: 'myRichTextExample',
      type: 'array',
      of: [{type: 'block'}],
    },
    defineField({
      name: 'introImage',
      title: 'Intro image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'storyTitle',
      title: 'Story Title',
      type: 'localeString',
    }),
    defineField({
      name: 'storySubtitle',
      title: 'Story Subtitle',
      type: 'localeString',
    }),
    defineField({
      name: 'storyDescription',
      title: 'Story Description',
      type: 'localeText',
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'localeString',
    }),
    defineField({
      name: 'missionSubtitle',
      title: 'Mission Subtitle',
      type: 'localeString',
    }),
    defineField({
      name: 'missionDescription',
      title: 'mission Description',
      type: 'localeText',
    }),
    defineField({
      name: 'missionImage',
      title: 'Mission image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
