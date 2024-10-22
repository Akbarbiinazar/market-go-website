import { type SchemaTypeDefinition } from 'sanity';

import { headerType } from './documents/header';
import cta from './objects/cta';
import seo from './objects/seo';
import { heroType } from './documents/heroSection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cta, seo, heroType, headerType],
};
