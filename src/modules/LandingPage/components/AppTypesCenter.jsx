import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import { BadgePrimary } from '@/common/components/elements/BadgeCustom';
import {
  HeroSectionCenter,
  HeroSectionStart,
} from '@/common/components/elements/HeroSections';
import { Card, CardBody } from '@heroui/react';
import { dataAppTypes } from '@/common/lib/DummyData';
import { SvgOne } from '@/common/components/elements/Svg';
import { motion } from 'framer-motion';

const AppTypesCenter = () => {
  const bounceAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
      delay: 0,
    },
  };

  return (
    <>
      <HeroSectionCenter className='w-full'>
        <BadgePrimary>App Types</BadgePrimary>
        <PageHeading
          widthTitle='md:max-w-[672px] lg:max-w-[868px]'
          widthDesc='mb-2 max-w-[450px]'
          importantSentenceOne='Jenis Aplikasi'
          sentenceOne='yang Kami Bisa Buat'
          description='Punya ide lain? Konsultasi aja, kita bisa bantu!'
        />
        <div className='grid w-full grid-cols-1 gap-6 md:mt-6 md:grid-cols-3 lg:grid-cols-3 lg:items-center'>
          <div className='flex w-full flex-col gap-6 lg:me-auto lg:max-w-xs'>
            {dataAppTypes
              .filter((item) => [1, 2].includes(item.id))
              .map((item) => (
                <Card key={item.id} className='h-auto' shadow='sm'>
                  <CardBody className='flex h-full flex-row items-start gap-3 p-4'>
                    <div className='flex flex-col'>
                      <p className='text-medium'>{item.title}</p>
                      <p className='text-small text-default-400'>{item.desc}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
          </div>
          <div className='block w-full'>
            <SvgOne className='drop-shadow-md' />
          </div>
          <div className='flex w-full flex-col gap-6 lg:ms-auto lg:max-w-xs'>
            {dataAppTypes
              .filter((item) => [3, 4].includes(item.id))
              .map((item) => (
                <Card key={item.id} className='h-auto' shadow='sm'>
                  <CardBody className='flex h-full flex-row items-start gap-3 p-4'>
                    <div className='flex flex-col'>
                      <p className='text-medium'>{item.title}</p>
                      <p className='text-small text-default-400'>{item.desc}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
      </HeroSectionCenter>
    </>
  );
};

export default AppTypesCenter;
