import type { Product, ProductCollection } from '../types/catalogue';

export interface CatalogueSource {
  getCollections(): Promise<readonly ProductCollection[]>;
  getProducts(): Promise<readonly Product[]>;
}
