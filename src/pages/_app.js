import '@/styles/globals.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import React from 'react';
import StyleGlobal from '@/common/components/elements/StyleGlobal';
import AppLayout from '@/common/components/layouts/AppLayouts';
import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import defaultSEOConfig from '../../next-seo.config';

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      once: true,
      // offset: 10
    });
  }, []);

  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <StyleGlobal />
      <HeroUIProvider>
        <NextThemesProvider attribute='class' defaultTheme='light'>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </NextThemesProvider>
      </HeroUIProvider>
    </>
  );
}
