import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' data-theme='light'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='icon' type='image/x-icon' href='/favicon/favicon.ico' />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#09090b'
        />
        <meta name='msapplication-TileColor' content='#09090b' />
        <meta name='theme-color' content='#09090b' />
      </Head>
      <body className='font-sora'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
