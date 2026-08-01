import type { HTMLAttributes } from 'react';

import { classNames } from '../../utils/classNames';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'display' | 'xl' | 'lg' | 'md' | 'sm';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
}

const sizeClasses: Record<HeadingSize, string> = {
  display:
    'text-5xl leading-[var(--token-line-height-tight)] tracking-[var(--token-letter-spacing-tight)]',
  xl: 'text-4xl leading-[var(--token-line-height-heading)] tracking-[var(--token-letter-spacing-tight)]',
  lg: 'text-3xl leading-[var(--token-line-height-heading)] tracking-[var(--token-letter-spacing-tight)]',
  md: 'text-2xl leading-[var(--token-line-height-heading)] tracking-[var(--token-letter-spacing-tight)]',
  sm: 'text-xl leading-[var(--token-line-height-heading)] tracking-[var(--token-letter-spacing-tight)]',
};

export function Heading({
  as: Tag = 'h2',
  children,
  className,
  size = 'lg',
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={classNames('font-display font-normal text-ink', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
