import { DocumentIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const ServicesType = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'services',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'service',
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
              title: 'Text',
            },
          ],
        }),
      ],
    }),
  ],
});
