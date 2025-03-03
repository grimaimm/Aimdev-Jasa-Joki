import React from 'react';
import Home from '@/modules/homePage';
import { NextSeo } from 'next-seo';

export default function HomePage() {
  return (
    <>
      <NextSeo
        title='Aimdev Joki Tugas Website'
        description='Kami yang buat, kamu fokus ke hal lain. Jadi, gak perlu pusing ngoding, kami yang urusin! Hehe3x.'
      />
      <Home />
    </>
  );
}
