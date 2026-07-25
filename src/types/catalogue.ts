export interface ProductCollection {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: ProductImage;
}

export interface ProductImage {
  alt: string;
  height: number;
  src: string;
  width: number;
}

export interface Product {
  id: string;
  collectionId: string;
  dimensions?: string;
  image?: ProductImage;
  name: string;
  referencePrice?: number;
  sku: string;
}
