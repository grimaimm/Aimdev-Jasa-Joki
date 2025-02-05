import React from 'react';

export function Heading({
  sentenceOne = '',
  sentenceTwo = '',
  sentenceThree = '',
  importantSentenceOne = '',
  importantSentenceTwo = '',
  className = '',
  ...others
}) {
  return (
    <h1
      className={`text-[clamp(1rem,10vw,2rem)] font-bold !leading-tight tracking-tight transition-colors duration-300 sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl ${className}`}
      {...others}
    >
      <span className='bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400'>
        {importantSentenceOne}
      </span>{' '}
      {sentenceOne}{' '}
      <span className='bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400'>
        {importantSentenceTwo}
      </span>{' '}
      {sentenceTwo} <span className='whitespace-nowrap'>{sentenceThree}</span>
    </h1>
  );
}

export function SubHeading({ description = '', className = '', ...others }) {
  return (
    <p className={`text-zinc-600 dark:text-zinc-400 ${className}`} {...others}>
      {description}
    </p>
  );
}
