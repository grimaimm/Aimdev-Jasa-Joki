import dynamic from 'next/dynamic';
import React from 'react';

const ThemeSwitcher = dynamic(
  () => import('@/common/components/elements/ThemeSwitcher'),
  { ssr: false },
);

export default function Home() {
  return <ThemeSwitcher />;
}
