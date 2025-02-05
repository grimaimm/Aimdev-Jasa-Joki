import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import TechStack from '@/common/components/partials/TechStack/TechStack';
import { BadgePrimary } from '@/common/components/elements/BadgeCustom';
import { HeroSectionCenter } from '@/common/components/elements/HeroSections';

const TechWeUse = () => {
  return (
    <>
      <HeroSectionCenter>
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
      </HeroSectionCenter>
      <div className='mb-6 w-full px-4 md:mt-4'>
        <TechStack />
      </div>
    </>
  );
};

export default TechWeUse;
