import { Heading } from '../ui/Heading';

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="border border-dashed border-ink/20 bg-surface px-6 py-14 text-center sm:px-10">
      <Heading as="h2" size="sm">
        {title}
      </Heading>
      <p className="mx-auto mt-3 max-w-prose text-sm leading-relaxed text-ink-muted">
        {description}
      </p>
    </div>
  );
}
