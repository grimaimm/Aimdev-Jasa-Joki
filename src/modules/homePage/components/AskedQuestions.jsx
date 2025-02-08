import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import { BadgePrimary } from '@/common/components/elements/BadgeCustom';
import { HeroSectionCenter } from '@/common/components/elements/HeroSections';
import { Accordion, AccordionItem } from '@heroui/react';
import { IoChevronBack } from 'react-icons/io5';
import { dataAskedQuestions } from '@/common/lib/DummyData';

const AskedQuestions = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']));

  return (
    <>
      <HeroSectionCenter>
        <div
          className='flex flex-col items-center gap-4'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <BadgePrimary>FAQ</BadgePrimary>
          <PageHeading
            widthTitle='md:max-w-[728px] lg:max-w-[868px]'
            widthDesc='mb-2 max-w-[450px]'
            importantSentenceOne='Pertanyaan'
            sentenceOne='yang Sering Diajukan'
            description='Jawaban lengkap seputar layanan kami, biar kamu makin yakin sebelum order!'
          />
        </div>
      </HeroSectionCenter>
      <div className='mx-auto mb-6 w-full gap-6 px-2 md:mt-6 md:max-w-4xl'>
        <Accordion
          variant='splitted'
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          itemClasses={{
            base: 'w-full border border-transparent bg-white dark:border-zinc-800 dark:bg-zinc-900/80',
            indicator:
              'p-2 rounded-lg border border-zinc-300 bg-gradient-to-tr from-zinc-400/20 to-zinc-400/20 dark:border-zinc-600 dark:from-zinc-600/20 dark:to-zinc-600/20 text-zinc-500 dark:text-zinc-400',
          }}
        >
          {dataAskedQuestions.map((item) => (
            <AccordionItem
              className='text-default-500'
              key={item.id}
              aria-label={item.question}
              title={item.question}
              indicator={<IoChevronBack />}
              data-aos='zoom-in-up'
              data-aos-delay={item.id * 100}
            >
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default AskedQuestions;
