import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import { BadgePrimary } from '@/common/components/elements/BadgeCustom';
import { HeroSectionCenter } from '@/common/components/elements/HeroSections';
import { Card, CardBody } from '@heroui/react';
import { dataWhyChooseUs } from '@/common/lib/DummyData';

const WhyChooseUs = () => {
  return (
    <>
      <HeroSectionCenter>
        <div
          className='flex flex-col items-center gap-4'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <BadgePrimary>Why Choose Us</BadgePrimary>
          <PageHeading
            widthTitle='md:max-w-[576px] lg:max-w-[868px]'
            widthDesc='mb-2 max-w-[450px]'
            importantSentenceOne='Kenapa'
            sentenceOne='Harus Pakai'
            importantSentenceTwo='Jasa Kami?'
            description='Kami bukan sekadar joki tugas, tapi partner yang siap bantu kamu sampai PAHAM !!!'
          />
        </div>
        <div className='mb-4 grid w-full grid-cols-1 gap-6 md:mt-6 md:grid-cols-2 xl:grid-cols-3'>
          {dataWhyChooseUs.map((item) => (
            <Card
              key={item.id}
              isBlurred
              className='relative w-full border border-transparent bg-white dark:border-zinc-800 dark:bg-zinc-900/80'
              data-aos='zoom-in-up'
              data-aos-delay={item.id * 100}
            >
              <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]'></div>
              <CardBody className='flex flex-row gap-4 p-4'>
                <div
                  className={`flex h-fit items-center rounded-xl border p-3 ${
                    [1, 3, 5].includes(item.id)
                      ? 'border border-teal-300 bg-gradient-to-tr from-teal-400/20 to-cyan-400/20 text-teal-500 dark:border-teal-600 dark:from-teal-600/20 dark:to-cyan-600/20 dark:text-teal-400'
                      : 'border border-zinc-300 bg-gradient-to-tr from-zinc-400/20 to-zinc-400/20 text-zinc-500 dark:border-zinc-600 dark:from-zinc-600/20 dark:to-zinc-600/20 dark:text-zinc-400'
                  }`}
                >
                  {item.icon}
                </div>
                <div className='flex flex-col'>
                  <span className='font-aguarita text-default-300'>
                    0{item.id}
                  </span>
                  <p className='text-md mb-1 font-semibold'>{item.title}</p>
                  <p className='text-small text-default-500'>{item.desc}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </HeroSectionCenter>
    </>
  );
};

export default WhyChooseUs;
