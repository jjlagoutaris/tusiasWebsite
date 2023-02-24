import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeInfo',
  title: 'Home Info',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'headerDescription',
      title: 'Header Description',
      type: 'string',
    }),
    defineField({
      name: 'aboutMeHeader',
      title: 'About Me Header',
      type: 'string',
    }),
    defineField({
      name: 'aboutMeDesc',
      title: 'About Me Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'string',
    }),
  ],
})