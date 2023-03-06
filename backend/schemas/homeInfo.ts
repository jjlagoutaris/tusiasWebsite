import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeInfo',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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