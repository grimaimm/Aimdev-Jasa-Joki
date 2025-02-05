import React from 'react';

export function HeroSectionCenter({ children, className = '', ...others }) {
  return (
    <div className='hero'>
      <div
        className={`hero-content flex flex-col items-center text-center md:items-center ${className}`}
        {...others}
      >
        {children}
      </div>
    </div>
  );
}

export function HeroSectionStart({ children, className = '', ...others }) {
  return (
    <div className='hero'>
      <div className={`hero-content flex flex-col ${className}`} {...others}>
        {children}
      </div>
    </div>
  );
}
