import { classNames } from '../../utils/classNames';

type LayoutPlaceholderAspect = 'landscape' | 'portrait' | 'square' | 'wide';

export interface LayoutPlaceholderProps {
  aspect?: LayoutPlaceholderAspect;
  className?: string;
}

const aspectClasses: Record<LayoutPlaceholderAspect, string> = {
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
};

export function LayoutPlaceholder({ aspect = 'landscape', className }: LayoutPlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={classNames(
        'border border-border bg-surface-muted shadow-soft',
        aspectClasses[aspect],
        className,
      )}
    />
  );
}
