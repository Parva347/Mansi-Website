import type { HTMLAttributes } from 'react';

import { classNames } from '../../utils/classNames';

type ContainerWidth = 'narrow' | 'content' | 'wide';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
}

const widthClasses: Record<ContainerWidth, string> = {
  narrow: 'max-w-narrow',
  content: 'max-w-content',
  wide: 'max-w-wide',
};

export function Container({ children, className, width = 'content', ...props }: ContainerProps) {
  return (
    <div
      className={classNames('mx-auto w-full px-page', widthClasses[width], className)}
      {...props}
    >
      {children}
    </div>
  );
}
