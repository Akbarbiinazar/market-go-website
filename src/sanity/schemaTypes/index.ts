import { type SchemaTypeDefinition } from 'sanity';

import { headerType } from './documents/header';
import cta from './objects/cta';
import seo from './objects/seo';
import { heroType } from './documents/heroSection';
import { ServicesType } from './documents/services';
import { FrequentServices } from './documents/frequentServices';
import { PartnersType } from './documents/partners';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cta, seo, ServicesType,PartnersType, heroType, headerType, FrequentServices],
};
