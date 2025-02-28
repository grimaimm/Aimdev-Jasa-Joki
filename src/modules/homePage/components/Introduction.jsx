import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import { BadgePrimary } from '@/common/components/elements/BadgeCustom';
import { ButtonPrimary } from '@/common/components/elements/ButtonCustom';
import { HeroSectionCenter } from '@/common/components/elements/HeroSections';
import { FireEmojiAnimation } from '@/common/components/elements/Animation';
import { motion } from 'framer-motion';
import { dataIntroductionV1 } from '@/common/lib/DummyData';
import CodeHighlighter from '@/common/components/elements/CodeHighlighter';

const Introduction = () => {
  // Common bounce animation function
  const createBounceAnimation = (yValues, duration, delay) => ({
    y: yValues,
    transition: {
      duration,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
      delay,
    },
  });

  const bounceAnimationFirstCard = createBounceAnimation([0, -15, 0], 3, 0);
  const bounceAnimationSecondCard = createBounceAnimation([0, -22, 0], 2.5, 1);

  return (
    <>
      <HeroSectionCenter>
        <div
          className='flex flex-col items-center gap-4'
          data-aos='fade-down'
          data-aos-delay='100'
        >
          <BadgePrimary>
            Cepat, Aman, Terpercaya <FireEmojiAnimation />
          </BadgePrimary>
          <PageHeading
            widthTitle='md:max-w-[728px] lg:max-w-[868px]'
            widthDesc='mb-2 max-w-[450px]'
            sentenceOne='Gak Mau Ribet'
            importantSentenceTwo='Bikin Aplikasi Web?'
            sentenceTwo='Serahkan aja'
            sentenceThree='ke Kami'
            description='Kami yang buat, kamu fokus ke hal lain. Jadi, gak perlu pusing ngoding, kami yang urusin! Hehe3x.'
          />
          <div className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-2'>
            <ButtonPrimary
              link='https://wa.me/6281325970587?text=Halo%20kak,%20saya%20mau%20joki%20dong!'
              title='Kuy, Konsultasi Sekarang, Gratis!'
            />
          </div>
        </div>
        <div className='mx-auto mt-6 grid h-full w-full grid-cols-1 gap-y-6 transition-all duration-300 sm:h-full md:mt-8 md:h-80 md:max-w-[728px] md:grid-cols-[70%_29%] lg:h-full lg:max-w-4xl'>
          {dataIntroductionV1.map((item, index) => (
            <motion.div
              key={item.id}
              animate={
                index === 0
                  ? bounceAnimationFirstCard
                  : bounceAnimationSecondCard
              }
              className={
                index === 0
                  ? ''
                  : 'mt-0 sm:mt-0 md:mt-44 md:flex md:items-center md:justify-end lg:mt-0'
              }
            >
              <div data-aos='zoom-in-up' data-aos-delay={item.id * 100}>
                <div
                  className={`mockup-code rounded-md shadow-md transition-all duration-300 scrollbar-hide lg:hover:shadow-lg ${
                    index === 0
                      ? 'relative z-10 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/80'
                      : 'relative z-10 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900'
                  } `}
                >
                  <CodeHighlighter lang={item.language} code={item.code} />
                  <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]'></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </HeroSectionCenter>
    </>
  );
};

export default Introduction;
