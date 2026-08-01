import type { HomeCardContent } from '../../types/home';
import { Heading } from '../ui/Heading';

export function IconCard({ description, title }: HomeCardContent) {
  return (
    <article className="border border-border p-6">
      <span aria-hidden="true" className="mb-10 block size-4 border border-border-strong" />
      <Heading as="h3" size="sm">
        {title}
      </Heading>
      <p className="mt-3 text-sm leading-[var(--token-line-height-body)] text-ink-muted">
        {description}
      </p>
    </article>
  );
}
