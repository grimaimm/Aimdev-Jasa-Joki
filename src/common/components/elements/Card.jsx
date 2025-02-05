import * as React from 'react';

export function CardMockupCode({ children, className = '', ...others }) {
  return (
    <div
      data-testid='mockup-code'
      className={`mockup-code rounded-md shadow-md transition-all duration-300 scrollbar-hide lg:hover:shadow-lg ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}
