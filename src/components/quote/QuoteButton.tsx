import type { QuoteProduct } from '../../context/QuoteContext';
import { useQuote } from '../../hooks/useQuote';
import { classNames } from '../../utils/classNames';
import { Button } from '../ui/Button';

interface QuoteButtonProps {
  className?: string;
  product?: QuoteProduct;
}

export function QuoteButton({ className, product }: QuoteButtonProps) {
  const { addProduct, openDrawer, totalQuantity } = useQuote();

  if (!product) {
    return (
      <Button
        aria-label={`Open quote drawer with ${totalQuantity} selected products`}
        className={classNames('shrink-0', className)}
        onClick={openDrawer}
        size="sm"
        variant="secondary"
      >
        Quote ({totalQuantity})
      </Button>
    );
  }

  return (
    <Button
      className={className}
      onClick={() => {
        addProduct(product);
        openDrawer();
      }}
      variant="secondary"
    >
      Add to quote
    </Button>
  );
}
