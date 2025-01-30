import * as React from 'react';
import '@/styles/globals.css';
import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <Component {...pageProps} />
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
