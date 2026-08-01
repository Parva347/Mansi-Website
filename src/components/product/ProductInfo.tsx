import type { ProductDetailInfo } from '../../types/product-detail';
import { Heading } from '../ui/Heading';

interface ProductInfoProps {
  product: ProductDetailInfo;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <section aria-labelledby="product-name">
      <p className="font-mono text-xs tracking-[0.16em] text-ink-muted uppercase">Product detail</p>
      <Heading as="h1" className="mt-5" id="product-name" size="xl">
        {product.title}
      </Heading>
      <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-muted sm:text-lg">
        {product.description}
      </p>
      <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
        <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] gap-5 py-4">
          <dt className="font-mono text-xs tracking-[0.1em] text-ink-muted uppercase">
            Product code
          </dt>
          <dd className="text-sm text-ink">{product.code}</dd>
        </div>
        <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] gap-5 py-4">
          <dt className="font-mono text-xs tracking-[0.1em] text-ink-muted uppercase">
            Collection
          </dt>
          <dd className="text-sm text-ink">{product.collection}</dd>
        </div>
        <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] gap-5 py-4">
          <dt className="font-mono text-xs tracking-[0.1em] text-ink-muted uppercase">Category</dt>
          <dd className="text-sm text-ink">{product.category}</dd>
        </div>
      </dl>
    </section>
  );
}
