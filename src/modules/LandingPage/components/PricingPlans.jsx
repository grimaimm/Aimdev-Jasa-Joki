import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import { BadgePrimary } from '@/common/components/elements/BadgeCustom';
import { HeroSectionCenter } from '@/common/components/elements/HeroSections';
import { Card, CardBody, CardHeader, Chip } from '@heroui/react';
import { dataPricingPlans } from '@/common/lib/DummyData';

const PricingPlans = () => {
  return (
    <>
      <HeroSectionCenter className='w-full'>
        <BadgePrimary>Pricing Plans</BadgePrimary>
        <PageHeading
          widthTitle='md:max-w-[728px] lg:max-w-[868px]'
          widthDesc='mb-2 max-w-[450px]'
          sentenceOne='Pilihan'
          importantSentenceTwo='Paket & Harga'
          description='Harga menyesuaikan kompleksitas proyek, tapi tetap ramah di kantong kok :v'
        />
        <div className='grid w-full grid-cols-1 gap-6 md:mt-6 md:grid-cols-3'>
          {dataPricingPlans.map((item) => (
            <Card
              key={item.id}
              isBlurred
              className='relative w-full border border-transparent bg-white dark:border-zinc-800 dark:bg-zinc-900/80'
            >
              <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]'></div>
              <CardHeader className='flex justify-center px-6 pb-2 pt-6'>
                <div
                  className={`relative w-full rounded-xl border py-1.5 md:py-2 lg:py-1.5 ${
                    item.isPopular
                      ? 'border-teal-300 bg-gradient-to-tr from-teal-400/20 to-cyan-400/20 text-teal-500 dark:border-teal-600 dark:from-teal-600/20 dark:to-cyan-600/20 dark:text-teal-400'
                      : 'border-zinc-300 bg-gradient-to-tr from-zinc-400/20 to-zinc-400/20 text-zinc-500 dark:border-zinc-600 dark:from-zinc-600/20 dark:to-zinc-600/20 dark:text-zinc-400'
                  } `}
                >
                  <p className='text-lg font-semibold'>{item.title}</p>
                  {item.isPopular && (
                    <Chip
                      variant='solid'
                      className='absolute -right-4 -top-3 h-6 border border-teal-300 bg-gradient-to-tr from-teal-200 to-cyan-200 text-xs text-teal-500 dark:border-teal-600 dark:from-teal-800 dark:to-cyan-800 dark:text-teal-400 md:-top-3 md:h-5 lg:-top-3 lg:h-6'
                    >
                      Popular
                    </Chip>
                  )}
                </div>
              </CardHeader>
              <CardBody className='items-start px-6 pb-6 text-left'>
                <div className='flex flex-col'>
                  <div className='mb-2'>
                    <div className='mb-2'>Mulai dari</div>
                    <div
                      className={`whitespace-nowrap text-3xl font-extrabold md:text-2xl lg:text-4xl ${
                        item.isPopular
                          ? 'bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400'
                          : 'bg-gradient-to-br from-zinc-800 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-200 dark:to-zinc-800'
                      } `}
                    >
                      Rp {item.price}
                    </div>
                  </div>
                  <div className='stat-title !text-wrap text-default-500'>
                    {item.desc}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </HeroSectionCenter>
    </>
  );
};

export default PricingPlans;
