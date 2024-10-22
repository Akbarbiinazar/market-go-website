import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('header').title('Header'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['header'].includes(item.getId()!)
      ),
    ]);
