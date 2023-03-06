import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesInfo',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      description: 'The title of the page',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Services description',
      description: 'A brief blurb to talk about your services in general',
      type: 'string',
    }),
    defineField({
      name: 'moreInfo',
      title: 'More Info',
      description: 'A brief blurb to tell people to reach out if they have questions',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Button Text',
      description: 'What the button says',
      type: 'string',
    }),
  ],
})