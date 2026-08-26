import type { CataloguePlaceholderProduct } from '../../types/catalogue-ui';
import { ImagePlaceholder } from '../home/ImagePlaceholder';
import { QuoteButton } from '../quote/QuoteButton';
import { Button } from '../ui/Button';
import { Heading } from '../ui/Heading';

interface ProductCardProps {
  product: CataloguePlaceholderProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col border border-ink/10 bg-surface p-4 sm:p-5">
      {product.image ? (
        <img
          alt={product.image.alt}
          className="aspect-square w-full border border-border object-cover"
          height={product.image.height}
          loading="lazy"
          src={product.image.src}
          width={product.image.width}
        />
      ) : (
        <ImagePlaceholder aspect="square" label={product.imageLabel} />
      )}
      <div className="flex flex-1 flex-col pt-5">
        <p className="font-mono text-xs tracking-[0.12em] text-ink-muted">{product.category}</p>
        <Heading as="h2" size="sm" className="mt-3">
          {product.title}
        </Heading>
        <p className="mt-2 font-mono text-xs tracking-[0.1em] text-ink-muted">
          {product.code}
          {product.dimensions ? ` · ${product.dimensions}` : ''}
        </p>
        {product.referencePrice ? (
          <p className="mt-2 text-sm text-ink-muted">
            <span className="font-mono text-2xs tracking-[0.08em] uppercase">MRP </span>
            <span className="font-serif text-base font-semibold text-ink">
              ₹{product.referencePrice}
            </span>
          </p>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-2">
          <Button href={`/catalogue/${product.id}`} variant="ghost">
            View details
          </Button>
          <QuoteButton product={{ id: product.id, name: product.title, code: product.code }} />
        </div>
      </div>
    </article>
  );
}
