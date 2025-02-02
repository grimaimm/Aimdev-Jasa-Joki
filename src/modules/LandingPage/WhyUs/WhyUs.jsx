import { Heading, SubHeading } from '@/common/components/elements/Heading';
import { dataWhyUs } from '@/common/lib/WhyUs';
import React from 'react';
import ListCardWhyUs from './ListCardWhyUs';

const WhyUs = () => {
  const { subheadline, ctaone, listdata } = dataWhyUs[0];
  return (
    <>
      <div className='hero'>
        <div className='hero-content flex w-full flex-col items-center text-center md:items-center'>
          <div className='badge mb-2 h-8 whitespace-nowrap rounded-full border border-zinc-200 bg-white px-3 !text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400'>
            {ctaone}
          </div>
          <div className='md:max-w-[728px] lg:max-w-[868px]'>
            <Heading
              importantSentenceOne='Kenapa'
              sentenceOne='Harus Pakai'
              importantSentenceTwo='Jasa Kami?'
            />
          </div>
          <div className='mb-2 max-w-[450px]'>
            <SubHeading description={subheadline} />
          </div>
          <div className='mb-4 grid w-full grid-cols-1 gap-6 md:mt-6 md:grid-cols-2 lg:grid-cols-3'>
            {listdata.map((item) => (
              <ListCardWhyUs key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
