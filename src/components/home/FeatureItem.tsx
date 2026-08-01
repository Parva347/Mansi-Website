import type { HomeCardContent } from '../../types/home';
import { Heading } from '../ui/Heading';

export function FeatureItem({ description, title }: HomeCardContent) {
  return (
    <article className="border-t border-border pt-4">
      <Heading as="h3" size="sm">
        {title}
      </Heading>
      <p className="mt-2 text-sm leading-[var(--token-line-height-body)] text-ink-muted">
        {description}
      </p>
    </article>
  );
}
