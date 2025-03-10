import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

export const ButtonPrimary = ({ title, className = '', link }) => {
  return (
    <Button
      className={`btn border-none bg-gradient-to-tr from-teal-400/80 to-cyan-400/80 font-semibold shadow-lg dark:from-teal-600/80 dark:to-cyan-600/80 ${className}`}
      radius='full'
      target='_blank'
      as={Link}
      href={link}
    >
      {title}
    </Button>
  );
};

export const ButtonSecondary = ({ title, link }) => {
  return (
    <Button
      className='btn border border-zinc-200 bg-zinc-100 font-semibold shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80'
      radius='full'
      target='_blank'
      as={Link}
      href={link}
    >
      {title}
    </Button>
  );
};

export const ButtonTertiary = ({ title, link }) => {
  return (
    <Button
      showAnchorIcon
      as={Link}
      href='https://github.com/heroui-inc/heroui'
      className='btn border border-zinc-200 bg-zinc-100 font-semibold shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80'
      radius='full'
      target='_blank'
    >
      Button Link
    </Button>
  );
};
