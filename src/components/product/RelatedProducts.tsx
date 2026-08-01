import type { CataloguePlaceholderProduct } from '../../types/catalogue-ui';
import { ProductCard } from '../catalogue/ProductCard';
import { Heading } from '../ui/Heading';

interface RelatedProductsProps {
  products: CataloguePlaceholderProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section aria-labelledby="related-products-heading">
      <p className="font-mono text-xs tracking-[0.16em] text-ink-muted uppercase">Catalogue</p>
      <Heading as="h2" className="mt-4" id="related-products-heading" size="lg">
        Related products
      </Heading>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
