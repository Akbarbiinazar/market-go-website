import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      placeholder: 'Title of the page, seen for users (max 60 characters)',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      placeholder:
        'A meta element that provides a brief description of the content of that page. Although the visitors of a website cannot see it directly, search engines such as Google use it to display a web page in search results.',
      rows: 5,
      validation: (Rule) => Rule.required().max(1000),
    }),
    defineField({
      title: 'Other Meta Tags',
      name: 'otherMetaTags',
      type: 'array',
      description: 'Open Graph, Twitter, etc.',
      of: [
        {
          title: 'Meta',
          name: 'meta',
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              title: 'Content',
              name: 'content',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
