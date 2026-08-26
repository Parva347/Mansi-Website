import type { ProductImage } from './catalogue';

export interface CataloguePlaceholderProduct {
  id: string;
  title: string;
  code: string;
  category: string;
  imageLabel: string;
  image?: ProductImage;
  dimensions?: string;
  referencePrice?: number;
}

export interface CatalogueToolbarContent {
  searchLabel: string;
  searchPlaceholder: string;
  collectionLabel: string;
  collectionPlaceholder: string;
  sortLabel: string;
  sortPlaceholder: string;
  productCountLabel: string;
}
