import React from 'react';

export const BadgePrimary = ({ children }) => {
  return (
    <div className='badge h-8 whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-100 px-3 !text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400'>
      {children}
    </div>
  );
};

export const BadgeSecondary = ({ children }) => {
  return (
    <div className='badge h-8 whitespace-nowrap rounded-full border border-zinc-200 bg-white px-3 !text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400'>
      {children}
    </div>
  );
};
