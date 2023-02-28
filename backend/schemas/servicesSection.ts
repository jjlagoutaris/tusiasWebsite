import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
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