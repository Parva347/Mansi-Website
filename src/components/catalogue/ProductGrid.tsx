import type { CataloguePlaceholderProduct } from '../../types/catalogue-ui';
import { EmptyState } from './EmptyState';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: CataloguePlaceholderProduct[];
  emptyState: { title: string; description: string };
}

export function ProductGrid({ products, emptyState }: ProductGridProps) {
  if (products.length === 0) return <EmptyState {...emptyState} />;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.code} product={product} />
      ))}
    </div>
  );
}
