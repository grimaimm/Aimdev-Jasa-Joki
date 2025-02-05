import React from 'react';
import Introduction from './Introduction';
import WhyChooseUs from './WhyChooseUs';
import { SectionContent } from '@/common/components/elements/Container';
import TechWeUse from './TechWeUse';
import PricingPlans from './PricingPlans';
import AskedQuestions from './AskedQuestions';
import AppTypes from './AppTypes';
import AppTypesCenter from './AppTypesCenter';
import CallToAction from './CallToAction';

const LandingPage = () => {
  return (
    <>
      <SectionContent
        id='introduction'
        background=''
        className='mx-auto max-w-screen-xl px-2 pb-16 pt-8'
      >
        <Introduction />
      </SectionContent>
      <SectionContent
        id='why-choose-us'
        background='bg-zinc-50 dark:bg-zinc-950'
        className='mx-auto max-w-screen-xl px-2 pb-16 pt-16'
      >
        <WhyChooseUs />
      </SectionContent>
      <SectionContent
        id='app-types'
        background=''
        className='mx-auto max-w-screen-xl px-2 pb-16 pt-16'
      >
        {/* <AppTypesCenter /> */}
        <AppTypes />
      </SectionContent>
      <SectionContent
        id='tech-we-use'
        background='bg-zinc-50 dark:bg-zinc-950'
        className='mx-auto max-w-screen-xl px-2 pb-16 pt-16'
      >
        <TechWeUse />
      </SectionContent>
      <SectionContent
        id='pricing-plans'
        background=''
        className='mx-auto max-w-screen-xl px-2 pb-20 pt-16'
      >
        <PricingPlans />
      </SectionContent>
      <SectionContent
        id='asked-questions'
        background='bg-zinc-50 dark:bg-zinc-950'
        className='mx-auto max-w-screen-xl px-2 pb-8 pt-16'
      >
        <AskedQuestions />
      </SectionContent>
      <SectionContent
        id='cta'
        background='bg-zinc-50 dark:bg-zinc-950'
        className='mx-auto max-w-screen-xl px-6 pb-20 pt-8 max-lg:pb-80'
      >
        <CallToAction />
      </SectionContent>
    </>
  );
};

export default LandingPage;
