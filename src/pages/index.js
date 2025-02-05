import React from 'react';
import Home from '@/modules/homePage';
import { NextSeo } from 'next-seo';

export default function HomePage() {
  return (
    <>
      <NextSeo title='Home | AimdevJT' />
      <Home />
    </>
  );
}
