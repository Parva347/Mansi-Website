import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '../../utils/classNames';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-ink bg-ink text-canvas hover:border-accent-hover hover:bg-accent-hover focus-visible:outline-focus',
  secondary:
    'border border-ink bg-transparent text-ink hover:border-accent hover:bg-surface-muted focus-visible:outline-focus',
  ghost:
    'border border-transparent bg-transparent text-ink hover:bg-surface-muted focus-visible:outline-focus',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 text-xs tracking-[var(--token-letter-spacing-label)]',
  md: 'min-h-11 px-5 text-sm tracking-[var(--token-letter-spacing-label)]',
  lg: 'min-h-12 px-6 text-sm tracking-[var(--token-letter-spacing-label)]',
};

export function Button({
  children,
  className,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'inline-flex items-center justify-center rounded-none font-sans font-medium uppercase transition-colors duration-[var(--token-duration-standard)] ease-standard disabled:pointer-events-none disabled:opacity-50',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
