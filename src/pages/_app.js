import * as React from 'react';
import '@/styles/globals.css';
import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { AppLayouts } from '@/common/components/layouts/AppLayouts';
import StyleGlobal from '@/common/components/elements/StyleGlobal';

export default function App({ Component, pageProps }) {
  return (
    <>
      <StyleGlobal />
      <HeroUIProvider>
        <NextThemesProvider attribute='class' defaultTheme='light'>
          <AppLayouts>
            <Component {...pageProps} />
          </AppLayouts>
        </NextThemesProvider>
      </HeroUIProvider>
    </>
  );
}
