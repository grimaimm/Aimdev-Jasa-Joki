import React from 'react';
import PageHeading from '@/common/components/elements/PageHeading';
import MockupCodeAnimation from '@/common/components/elements/MockupCodeAnimation';
import { BadgePrimary } from '@/common/components/elements/BadgeCustom';
import { ButtonPrimary } from '@/common/components/elements/ButtonCustom';
import { HeroSectionCenter } from '@/common/components/elements/HeroSections';
import { FireEmojiAnimation } from '@/common/components/elements/Animation';

const Introduction = () => {
  return (
    <>
      <HeroSectionCenter>
        <div
          className='flex flex-col items-center gap-4'
          data-aos='fade-down'
          data-aos-delay='50'
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
            description='Kami yang bikin, kamu fokus ke hal lain. Jadi, gak perlu pusing ngoding, kami yang urusin! Hehe3x.'
          />
          <div className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-2'>
            <ButtonPrimary
              link='https://wa.me/6285870655685?text=Halo%20kak,%20saya%20mau%20joki%20dong!'
              title='Kuy, Konsultasi Sekarang, Gratis!'
            />
          </div>
        </div>
        <MockupCodeAnimation />
      </HeroSectionCenter>
    </>
  );
};

export default Introduction;
