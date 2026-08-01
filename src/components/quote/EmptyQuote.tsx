import { Heading } from '../ui/Heading';

export function EmptyQuote() {
  return (
    <div className="border border-dashed border-ink/20 bg-surface-muted px-6 py-12 text-center">
      <Heading as="h2" size="sm">
        Your quote is empty
      </Heading>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        Add products from the catalogue to start an enquiry.
      </p>
    </div>
  );
}
