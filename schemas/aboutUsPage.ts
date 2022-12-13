import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutUsPage',
  title: 'About Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string',
    }),
    defineField({
      name: 'introSubtitle',
      title: 'Intro Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Description',
      type: 'text',
    }),
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
      type: 'string',
    }),
    defineField({
      name: 'storySubtitle',
      title: 'Story Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'storyDescription',
      title: 'Story Description',
      type: 'text',
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
    }),
    defineField({
      name: 'missionSubtitle',
      title: 'Mission Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'missionDescription',
      title: 'mission Description',
      type: 'text',
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
