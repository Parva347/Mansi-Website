import { useQuote } from '../../hooks/useQuote';

export function QuoteSummary() {
  const { totalProducts, totalQuantity } = useQuote();

  return (
    <dl className="grid grid-cols-2 gap-4 border-y border-ink/10 py-5">
      <div>
        <dt className="font-mono text-xs tracking-[0.1em] text-ink-muted uppercase">Products</dt>
        <dd className="mt-2 font-display text-2xl text-ink">{totalProducts}</dd>
      </div>
      <div>
        <dt className="font-mono text-xs tracking-[0.1em] text-ink-muted uppercase">
          Total quantity
        </dt>
        <dd className="mt-2 font-display text-2xl text-ink">{totalQuantity}</dd>
      </div>
    </dl>
  );
}
