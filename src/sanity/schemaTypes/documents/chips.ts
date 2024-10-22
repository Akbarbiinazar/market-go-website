import { DocumentIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const ChipsType = defineType({
  name: 'chips',
  title: 'Chips',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'chips',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'chip',
          type: 'object',
          fields: [
            {
              name: 'Icon',
              type: 'image',
              title: 'Icon',
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
});
