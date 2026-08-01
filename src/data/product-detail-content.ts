import type { ProductDetailContent } from '../types/product-detail';

export const productDetailContent: ProductDetailContent = {
  gallery: {
    primaryImageLabel: 'Primary product image placeholder',
    thumbnailImageLabels: [
      'Product thumbnail placeholder 1',
      'Product thumbnail placeholder 2',
      'Product thumbnail placeholder 3',
      'Product thumbnail placeholder 4',
    ],
  },
  product: {
    id: 'product-detail-placeholder',
    title: 'Product Name Placeholder',
    code: 'Product code placeholder',
    collection: 'Collection placeholder',
    category: 'Category placeholder',
    description: 'A concise placeholder for future product description content.',
  },
  specifications: [
    { label: 'Material', value: 'Material placeholder' },
    { label: 'Finish', value: 'Finish placeholder' },
    { label: 'Diameter', value: 'Diameter placeholder' },
    { label: 'Height', value: 'Height placeholder' },
    { label: 'Weight', value: 'Weight placeholder' },
  ],
  relatedProducts: [
    {
      id: 'related-product-placeholder-a',
      title: 'Related Product Placeholder A',
      code: 'RELATED-CODE-A',
      category: 'Category Placeholder A',
      imageLabel: 'Related product placeholder A image',
    },
    {
      id: 'related-product-placeholder-b',
      title: 'Related Product Placeholder B',
      code: 'RELATED-CODE-B',
      category: 'Category Placeholder B',
      imageLabel: 'Related product placeholder B image',
    },
    {
      id: 'related-product-placeholder-c',
      title: 'Related Product Placeholder C',
      code: 'RELATED-CODE-C',
      category: 'Category Placeholder C',
      imageLabel: 'Related product placeholder C image',
    },
    {
      id: 'related-product-placeholder-d',
      title: 'Related Product Placeholder D',
      code: 'RELATED-CODE-D',
      category: 'Category Placeholder D',
      imageLabel: 'Related product placeholder D image',
    },
  ],
};

export const productDetailCallToAction = {
  title: 'Continue the catalogue conversation',
  description: 'A placeholder route for future product catalogue enquiries.',
  action: {
    label: 'Contact placeholder',
    href: '/contact',
  },
};
