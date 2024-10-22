import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'CTA',
  name: 'cta',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      placeholder: 'Get Started',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'string',
      placeholder: 'https://wedevx.co',
    }),
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'string',
      placeholder: '*open in new tab',
    }),
    defineField({
      title: 'Variant',
      name: 'variant',
      type: 'string',
      initialValue: 'solid',
      options: {
        list: [
          { title: 'Solid', value: 'solid' },
          { title: 'Outline', value: 'outline' },
          { title: 'Ghost', value: 'ghost' },
          { title: 'Link', value: 'link' },
        ],
      },
    }),
    defineField({
      title: 'ColorScheme',
      name: 'colorScheme',
      type: 'string',
      initialValue: 'primary',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Gray', value: 'gray' },
        ],
      },
    }),
    defineField({
      title: 'Size',
      name: 'size',
      type: 'string',
      initialValue: 'md',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
      },
    }),
  ],
});
