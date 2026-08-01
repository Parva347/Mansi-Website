import type { CataloguePlaceholderProduct } from './catalogue-ui';

export interface ProductDetailInfo {
  category: string;
  code: string;
  collection: string;
  description: string;
  title: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductGalleryContent {
  primaryImageLabel: string;
  thumbnailImageLabels: string[];
}

export interface ProductDetailContent {
  gallery: ProductGalleryContent;
  product: ProductDetailInfo;
  relatedProducts: CataloguePlaceholderProduct[];
  specifications: ProductSpecification[];
}
