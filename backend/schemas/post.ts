import {defineField, defineType} from 'sanity'
import { ImageIcon } from "@sanity/icons";

export default defineType({
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'I love you, Tusia.'
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
      name: 'description',
      title: 'Description',
      description: 'A brief description of the article for readers to preview it.',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'A part of the article that helps it show up in online searches.',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          icon: ImageIcon,
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'This is your caption and what users with screen-readers will hear to describe the image (for blind users, for example)',
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Photo credit',
            },
          ],
        },
      ]
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
