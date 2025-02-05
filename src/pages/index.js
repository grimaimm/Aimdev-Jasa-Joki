// import LandingPage from '@/modules/LandingPage/LandingPage';
import LandingPage from '@/modules/LandingPage';
import { NextSeo } from 'next-seo';
// import dynamic from 'next/dynamic';
import React from 'react';

// const ThemeSwitcher = dynamic(
//   () => import('@/common/components/elements/ThemeSwitcher'),
//   { ssr: false },
// );

export default function Home() {
  return (
    <>
      <NextSeo title='Home | AimdevJT' />
      {/* <LandingPage /> */}
      <LandingPage />
    </>
  );
}
