import { Heading, SubHeading } from '@/common/components/elements/Heading';
import TechStack from '@/common/components/partials/TechStack/TechStack';
import { dataOurTech } from '@/common/lib/OurTech';
import React from 'react';

const OurTech = () => {
  const { subheadline, ctaone } = dataOurTech[0];
  return (
    <>
      <div className='hero'>
        <div className='hero-content flex w-full flex-col items-center text-center md:items-center'>
          <div className='badge mb-2 h-8 whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-100 px-3 !text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400'>
            {ctaone}
          </div>
          <div className='md:max-w-[728px] lg:max-w-[868px]'>
            <Heading
              importantSentenceOne='Teknologi'
              sentenceOne='yang'
              importantSentenceTwo='Kami'
              sentenceTwo='Gunakan'
            />
          </div>
          <div className='mb-2 max-w-[450px]'>
            <SubHeading description={subheadline} />
          </div>
        </div>
      </div>
      <div className='mb-4 w-full gap-6 px-4'>
        <TechStack />
      </div>
    </>
  );
};

export default OurTech;
