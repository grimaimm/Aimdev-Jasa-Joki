import React from 'react';
import { motion } from 'framer-motion';
import { CardMockupCode } from './Card';
import CodeBlock from './CodeBlock';
import { dataIntroduction } from '@/common/lib/DummyData';

export default function MockupCodeAnimation() {
  const { blockcodeone, blockcodetwo } = dataIntroduction[0];

  const bounceAnimationFirstCard = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
      delay: 0,
    },
  };

  const bounceAnimationSecondCard = {
    y: [0, -22, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
      delay: 1,
    },
  };

  return (
    <div className='mx-auto mt-6 grid h-full w-full grid-cols-1 gap-y-6 transition-all duration-300 sm:h-full md:mt-6 md:h-80 md:max-w-[728px] md:grid-cols-[70%_29%] lg:h-full lg:max-w-4xl'>
      <motion.div animate={bounceAnimationFirstCard}>
        <CardMockupCode className='relative z-10 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/80'>
          <CodeBlock language='js' value={blockcodeone} />
          <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]'></div>
        </CardMockupCode>
      </motion.div>
      <div className='mt-0 sm:mt-0 md:mt-44 md:flex md:items-center md:justify-end lg:mt-0'>
        <motion.div animate={bounceAnimationSecondCard}>
          <CardMockupCode className='relative z-10 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900'>
            <CodeBlock language='bash' value={blockcodetwo} />
            <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]'></div>
          </CardMockupCode>
        </motion.div>
      </div>
    </div>
  );
}
