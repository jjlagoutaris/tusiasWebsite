import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services Offered',
  type: 'document',
  fields: [
    defineField({
      name: 'service',
      title: 'Service',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
  ],
})