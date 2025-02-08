import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import TechStack from '@/common/components/partials/TechStack/TechStack';
import { BadgePrimary } from '@/common/components/elements/BadgeCustom';
import { HeroSectionCenter } from '@/common/components/elements/HeroSections';

const TechWeUse = () => {
  return (
    <>
      <HeroSectionCenter>
        <div
          className='flex flex-col items-center gap-4'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <BadgePrimary>Tech We Use</BadgePrimary>
          <PageHeading
            widthTitle='md:max-w-[576px] lg:max-w-[868px]'
            widthDesc='mb-2 max-w-[450px]'
            importantSentenceOne='Teknologi'
            sentenceOne='yang'
            importantSentenceTwo='Kami'
            sentenceTwo='Gunakan'
            description='Teknologi fleksibel, disesuaikan dengan kebutuhan tugas atau skripsimu!'
          />
        </div>
      </HeroSectionCenter>
      <div
        className='mx-auto mb-6 w-full px-4 md:mt-4 lg:max-w-4xl'
        data-aos='zoom-in-up'
        data-aos-delay='100'
      >
        <TechStack />
      </div>
    </>
  );
};

export default TechWeUse;
