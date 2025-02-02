import React from 'react';
import { Heading, SubHeading } from '@/common/components/elements/Heading';
import { dataIntroduction } from '@/common/lib/Introduction';
import { Button } from '@heroui/react';
import MockupCodeAnimation from './MockupCodeAnimation';
import FireEmoji from './FireEmoji';

const Introduction = () => {
  const { subheadline, ctaone, ctatwo } = dataIntroduction[0];

  return (
    <div className='hero'>
      <div className='hero-content flex flex-col items-center text-center md:items-center'>
        <div className='badge mb-2 h-8 whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-100 px-3 !text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400'>
          {/* {ctaone} <span aria-label="emoji" role="img">🔥</span> */}
          {ctaone} <FireEmoji />
        </div>
        <div className='md:max-w-[728px] lg:max-w-[868px]'>
          <Heading
            sentenceOne='Gak Mau Ribet'
            importantSentence='Bikin Aplikasi Web?'
            sentenceTwo='Serahkan aja'
            sentenceThree='ke Kami'
          />
        </div>
        <div className='mb-2 max-w-[450px]'>
          <SubHeading description={subheadline} />
        </div>
        <div className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-2'>
          <Button
            className='btn border-none bg-gradient-to-tr from-teal-400/80 to-cyan-400/80 font-semibold shadow-lg dark:from-teal-600/80 dark:to-cyan-600/80'
            radius='full'
          >
            {ctatwo}
          </Button>
          <Button
            className='btn border border-zinc-200 bg-zinc-100 font-semibold shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80'
            radius='full'
          >
            Read More
          </Button>
        </div>
        <MockupCodeAnimation />
      </div>
    </div>
  );
};

export default Introduction;
