import type { HTMLAttributes } from 'react';

import { classNames } from '../../utils/classNames';

type SectionSpacing = 'compact' | 'default' | 'generous';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
}

const spacingClasses: Record<SectionSpacing, string> = {
  compact: 'py-section-compact',
  default: 'py-section',
  generous: 'py-section-generous',
};

export function Section({ children, className, spacing = 'default', ...props }: SectionProps) {
  return (
    <section className={classNames(spacingClasses[spacing], className)} {...props}>
      {children}
    </section>
  );
}
