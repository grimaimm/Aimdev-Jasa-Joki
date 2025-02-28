import React from 'react';
import Home from '@/modules/homePage';
import { LocalBusinessJsonLd, NextSeo } from 'next-seo';

export default function HomePage() {
  return (
    <>
      <NextSeo title='Aimdev Joki Tugas Website' />
      <Home />
      <LocalBusinessJsonLd
        type='Joki Tugas'
        id='https://jokitugas.aimdev.web.id'
        name='Aimdev Joki Tugas Website'
        description='Kami yang bikin, kamu fokus ke hal lain. Jadi, gak perlu pusing ngoding, kami yang urusin! Hehe3x.'
        url='https://jokitugas.aimdev.web.id'
        telephone='+6281325970587'
        address={{
          addressLocality: 'Yogyakarta',
          addressRegion: 'Daerah Istimewa Yogyakarta',
          addressCountry: 'ID',
        }}
        images={['https://jokitugas.aimdev.web.id/images/introduction_one.png']}
        openingHours={[
          {
            opens: '00:00',
            closes: '23:59',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
          },
        ]}
        rating={{
          ratingValue: '4.8',
          ratingCount: '120',
        }}
      />
    </>
  );
}
