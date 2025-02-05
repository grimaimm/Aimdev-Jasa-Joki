import React from 'react';
import { motion } from 'framer-motion';
import { CardMockupCode } from './Card';
import { dataIntroduction } from '@/common/lib/DummyData';
import dynamic from 'next/dynamic';

const CodeBlock = dynamic(() => import('./CodeBlock'), { ssr: false });

const MockupCodeAnimation = () => {
  const { blockcodeone, blockcodetwo } = dataIntroduction[0];

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
    <div
      className='mx-auto mt-6 grid h-full w-full grid-cols-1 gap-y-6 transition-all duration-300 sm:h-full md:mt-6 md:h-80 md:max-w-[728px] md:grid-cols-[70%_29%] lg:h-full lg:max-w-4xl'
      data-aos='fade-up'
      data-aos-delay='50'
    >
      {/* First Card */}
      <motion.div animate={bounceAnimationFirstCard}>
        <CardMockupCode
          className='relative z-10 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/80'
          data-aos='fade-right'
          data-aos-delay='100'
        >
          <CodeBlock language='js' value={blockcodeone} />
          <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]'></div>
        </CardMockupCode>
      </motion.div>

      {/* Second Card */}
      <motion.div
        animate={bounceAnimationSecondCard}
        className='mt-0 sm:mt-0 md:mt-44 md:flex md:items-center md:justify-end lg:mt-0'
      >
        <CardMockupCode
          className='relative z-10 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900'
          data-aos='fade-left'
          data-aos-delay='150'
        >
          <CodeBlock language='bash' value={blockcodetwo} />
          <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]'></div>
        </CardMockupCode>
      </motion.div>
    </div>
  );
};

export default MockupCodeAnimation;
