import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'helloSection',
  title: 'Hello Section',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      description: "Hi, 'Tusia, I love you",
      type: 'string',
    }),
    defineField({
      name: 'information',
      title: 'Information',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Button',
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
  ],
})