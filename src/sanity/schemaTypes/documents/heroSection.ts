import { DocumentIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'form',
      type: 'object',
      fields: [
        { name: 'placeholder', type: 'string', title: 'Placeholder' },
        { name: 'cta', type: 'cta', title: 'Cta' },
        { name: 'subtext', type: 'string', title: 'Subtext' },
      ],
    }),
    defineField({
      name: 'cards',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'card',
          type: 'object',
          fields: [
            { name: 'count', type: 'string', title: 'Count' },
            {
              name: 'image',
              type: 'image',
              title: 'Card image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'stars',
              type: 'image',
              title: 'Stars',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'text',
              type: 'string',
              title: 'Text Description',
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
