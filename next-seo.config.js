// next-seo.config.js

const canonicalUrl = 'https://jokitugas.aimdev.web.id/';
const metaImage = 'https://jokitugas.aimdev.web.id/images/introduction_one.png';
const metaDescription =
  'Kami yang bikin, kamu fokus ke hal lain. Jadi, gak perlu pusing ngoding, kami yang urusin! Hehe3x.';
const metaAuthor = 'aimdev.xyz';
const metaGoogleBot = 'index, follow';

const defaultSEOConfig = {
  defaultTitle: 'Aimdev Joki Tugas Website',
  title: 'Aimdev Joki Tugas Website',
  description: metaDescription,
  canonical: canonicalUrl,
  authorName: metaAuthor,
  googlebot: metaGoogleBot,
  site_name: 'Aimdev Joki Tugas Website',
  openGraph: {
    authors: metaAuthor,
    url: canonicalUrl,
    canonical: canonicalUrl,
    title: 'Aimdev Joki Tugas Website',
    description: metaDescription,
    type: 'website',
    locale: 'id-ID',
    images: [
      {
        url: metaImage,
        alt: 'aimdevjt og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'aimdevjt og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'aimdevjt og-image',
        width: 1600,
        height: 900,
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#000000',
    },
    {
      name: 'msapplication-navbutton-color',
      content: '#000000',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: '#000000',
    },
  ],
};

export default defaultSEOConfig;
