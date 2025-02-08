import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import { motion } from 'framer-motion';
import { ButtonSecondary } from '@/common/components/elements/ButtonCustom';
import { CardMockupCode } from '@/common/components/elements/Card';
import { HeroSectionStart } from '@/common/components/elements/HeroSections';
import { dataInformationContact } from '@/common/lib/DummyData';
import CodeHighlighter from '@/common/components/elements/CodeHighlighter';

const CallToAction = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { blockcodeone } = dataInformationContact[0];

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
      <HeroSectionStart className='relative w-full rounded-3xl bg-gradient-to-br from-cyan-400/50 to-teal-400/50 dark:from-cyan-400/50 dark:to-teal-400/50 max-lg:pb-14'>
        <div className='relative flex w-full flex-col gap-6 p-4 md:p-8 lg:flex-row lg:p-12'>
          <div
            className='flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left'
            data-aos={isMobile ? 'fade-right' : 'fade-up'}
            data-aos-delay='100'
          >
            <PageHeading
              descClass='dark:!text-zinc-300'
              widthTitle='md:max-w-[728px] lg:max-w-[868px]'
              widthDesc='mb-2 lg:max-w-[450px]'
              sentenceOne='Ayo Selesaikan Tugasmu!'
              description='Gak perlu pusing sama tugas atau skripsi yang butuh aplikasi web. Serahkan aja ke kami.'
            />
            <ButtonSecondary
              link='https://wa.me/6285870655685?text=Halo%20kak,%20saya%20mau%20joki%20dong!'
              className='w-full md:w-fit'
              title='Chat Sekarang via WhatsApp'
            />
          </div>
          <div className='mx-auto mt-4 grid h-full w-full grid-cols-1 transition-all duration-300 max-lg:absolute max-lg:top-full max-lg:-translate-x-8 max-md:-translate-x-4 lg:relative lg:max-w-md lg:translate-x-0'>
            <motion.div animate={bounceAnimation}>
              <CardMockupCode
                className='relative z-10 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/80'
                data-aos={isMobile ? 'fade-left' : 'zoom-in-up'}
                data-aos-delay='100'
              >
                <CodeHighlighter lang='js' code={blockcodeone} />
                <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]'></div>
              </CardMockupCode>
            </motion.div>
          </div>
        </div>
      </HeroSectionStart>
    </>
  );
};

export default CallToAction;
