import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import { BadgePrimary } from '@/common/components/elements/BadgeCustom';
import { HeroSectionStart } from '@/common/components/elements/HeroSections';
import { Card, CardBody } from '@heroui/react';
import { dataAppTypes } from '@/common/lib/DummyData';
import { SvgOne } from '@/common/components/elements/Svg';
import { motion } from 'framer-motion';

const AppTypes = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <HeroSectionStart className='w-full gap-x-12 lg:flex-row'>
        <div
          className='flex w-full flex-col items-center gap-4 text-center lg:items-start lg:text-left'
          // kalau diatas md dia fade right kalau dibawah dia fade up
          data-aos={isMobile ? 'fade-right' : 'fade-up'}
          data-aos-delay='100'
        >
          <BadgePrimary>App Types</BadgePrimary>
          <PageHeading
            widthTitle='md:max-w-[672px] lg:max-w-[868px]'
            widthDesc='mb-2 max-w-[450px]'
            importantSentenceOne='Jenis Aplikasi'
            sentenceOne='yang Kami Bisa Buat'
            description='Punya ide lain? Konsultasi aja, kita bisa bantu!'
          />
          <div
            className='mt-6 block w-full md:hidden'
            data-aos={isMobile ? 'fade-left' : 'zoom-in-up'}
            data-aos-delay='100'
          >
            <motion.div animate={bounceAnimation}>
              <SvgOne className='drop-shadow-md' />
            </motion.div>
          </div>
          <div className='w-full gap-x-8 md:mt-6 md:flex md:items-center lg:mt-0'>
            <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
              {dataAppTypes.map((item) => (
                <Card
                  key={item.id}
                  shadow='sm'
                  data-aos='zoom-in-up'
                  data-aos-delay={item.id * 100}
                >
                  <CardBody className='flex h-full flex-row items-start gap-3 p-4'>
                    <div className='flex flex-col'>
                      <p className='text-medium'>{item.title}</p>
                      <p className='text-small text-default-400'>{item.desc}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
            <div
              className='hidden w-full md:block lg:hidden lg:max-w-2xl'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <motion.div animate={bounceAnimation}>
                <SvgOne className='drop-shadow-md' />
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className='mt-6 hidden w-full md:hidden lg:block lg:max-w-2xl'
          data-aos={isMobile ? 'fade-left' : 'zoom-in-up'}
          data-aos-delay='100'
        >
          <motion.div animate={bounceAnimation}>
            <SvgOne className='drop-shadow-md' />
          </motion.div>
        </div>
      </HeroSectionStart>
    </>
  );
};

export default AppTypes;
