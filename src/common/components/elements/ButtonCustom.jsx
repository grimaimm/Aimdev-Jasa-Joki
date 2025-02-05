import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

export function ButtonPrimary({ title, className = '', link }) {
  return (
    <Button
      className={`btn border-none bg-gradient-to-tr from-teal-400/80 to-cyan-400/80 font-semibold shadow-lg dark:from-teal-600/80 dark:to-cyan-600/80 ${className}`}
      radius='full'
    >
      {link && (
        <Link isExternal target='_blank' color='foreground' href={link}>
          {title}
        </Link>
      )}

      {!link && title}
    </Button>
  );
}

export function ButtonSecondary({ title, link }) {
  return (
    <Button
      className='btn border border-zinc-200 bg-zinc-100 font-semibold shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80'
      radius='full'
    >
      {link && (
        <Link isExternal target='_blank' color='foreground' href={link}>
          {title}
        </Link>
      )}

      {!link && title}
    </Button>
  );
}
