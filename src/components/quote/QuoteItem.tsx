import type { QuoteItemData } from '../../context/QuoteContext';
import { useQuote } from '../../hooks/useQuote';

interface QuoteItemProps {
  item: QuoteItemData;
}

export function QuoteItem({ item }: QuoteItemProps) {
  const { decreaseQuantity, increaseQuantity, removeProduct } = useQuote();

  return (
    <li className="border-b border-ink/10 py-5 first:pt-0">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg leading-tight text-ink">{item.name}</p>
          <p className="mt-2 font-mono text-xs tracking-[0.1em] text-ink-muted uppercase">
            {item.code}
          </p>
        </div>
        <button
          aria-label={`Remove ${item.name} from quote`}
          className="text-xs tracking-[var(--token-letter-spacing-label)] text-ink-muted uppercase transition-colors hover:text-ink"
          onClick={() => removeProduct(item.id)}
          type="button"
        >
          Remove
        </button>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.1em] text-ink-muted uppercase">
          Quantity
        </span>
        <div className="flex items-center border border-ink/15">
          <button
            aria-label={`Decrease ${item.name} quantity`}
            className="grid size-9 place-items-center text-lg transition-colors hover:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-50"
            disabled={item.quantity === 1}
            onClick={() => decreaseQuantity(item.id)}
            type="button"
          >
            −
          </button>
          <output
            aria-label={`${item.name} quantity`}
            className="grid min-w-10 place-items-center border-x border-ink/15 text-sm"
          >
            {item.quantity}
          </output>
          <button
            aria-label={`Increase ${item.name} quantity`}
            className="grid size-9 place-items-center text-lg transition-colors hover:bg-surface-muted"
            onClick={() => increaseQuantity(item.id)}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
