import type {
  CataloguePlaceholderProduct,
  CatalogueToolbarContent,
} from '../types/catalogue-ui'

const products: CataloguePlaceholderProduct[] = [
  { title: 'Product Placeholder A', code: 'CODE-PLACEHOLDER-A', category: 'Category Placeholder A', imageLabel: 'Product placeholder A image' },
  { title: 'Product Placeholder B', code: 'CODE-PLACEHOLDER-B', category: 'Category Placeholder B', imageLabel: 'Product placeholder B image' },
  { title: 'Product Placeholder C', code: 'CODE-PLACEHOLDER-C', category: 'Category Placeholder C', imageLabel: 'Product placeholder C image' },
  { title: 'Product Placeholder D', code: 'CODE-PLACEHOLDER-D', category: 'Category Placeholder D', imageLabel: 'Product placeholder D image' },
  { title: 'Product Placeholder E', code: 'CODE-PLACEHOLDER-E', category: 'Category Placeholder E', imageLabel: 'Product placeholder E image' },
  { title: 'Product Placeholder F', code: 'CODE-PLACEHOLDER-F', category: 'Category Placeholder F', imageLabel: 'Product placeholder F image' },
]

const toolbar: CatalogueToolbarContent = {
  searchLabel: 'Search catalogue',
  searchPlaceholder: 'Search placeholder',
  collectionLabel: 'Collection',
  collectionPlaceholder: 'Collection placeholder',
  sortLabel: 'Sort',
  sortPlaceholder: 'Sort placeholder',
  productCountLabel: 'Product count placeholder',
}

export const catalogueContent = {
  hero: { eyebrow: 'Catalogue', title: 'Catalogue foundation', description: 'A considered framework for future catalogue content.' },
  toolbar,
  products,
  emptyState: { title: 'No products to display', description: 'This reusable state will support an empty future catalogue.' },
  pagination: { currentLabel: 'Page 1', pages: ['1', '2', '3'] },
  callToAction: {
    eyebrow: 'Catalogue access',
    title: 'Plan the next catalogue step',
    description: 'A clear route for future catalogue enquiries and access.',
    action: { label: 'Request catalogue access', href: '/contact' },
  },
}
