import { DocumentIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const PartnersType = defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'partners',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'partner',
          type: 'image',
          title: 'Icon',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'logo',
      options: {
        hotspot: true,
      },
    }),
  ],
});
