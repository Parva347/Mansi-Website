import { classNames } from '../../utils/classNames';

type Aspect = 'landscape' | 'portrait' | 'square' | 'wide';

export interface ImagePlaceholderProps {
  aspect?: Aspect;
  className?: string;
  label: string;
}

const aspects: Record<Aspect, string> = {
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
};

export function ImagePlaceholder({
  aspect = 'landscape',
  className,
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      aria-label={label}
      className={classNames(
        'flex items-end border border-border bg-surface-muted p-4 shadow-soft',
        aspects[aspect],
        className,
      )}
      role="img"
    >
      <span className="font-mono text-2xs tracking-[var(--token-letter-spacing-label)] text-ink-subtle uppercase">
        Image placeholder
      </span>
    </div>
  );
}
