import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      description: 'The title of the page',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Button Text',
      description: 'What the buttons on each article preview say',
      type: 'string',
    }),
  ],
})