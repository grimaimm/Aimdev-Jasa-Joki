// next-seo.config.js
const canonicalUrl = 'https://jokitugas.aimdev.web.id/';
const metaImage = 'https://jokitugas.aimdev.web.id/images/introduction_one.png';
const metaDescription =
  'Kami yang buat, kamu fokus ke hal lain. Jadi, gak perlu pusing ngoding, kami yang urusin! Hehe3x.';
const metaAuthor = 'aimdev.xyz';
const metaGoogleBot = 'index, follow';

const defaultSEOConfig = {
  defaultTitle: 'Aimdev Joki Tugas Website',
  title: 'Aimdev Joki Tugas Website',
  description: metaDescription,
  canonical: canonicalUrl,
  authors: metaAuthor,
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
      name: 'keywords',
      content:
        'aimdev jokitugas, aimdevjt, aimdev, jokitugas, joki, tugas, website, joki tugas aimdev, joki skripsi aimdev, joki web aimdev',
    },
    {
      name: 'theme-color',
      content: '#09090b',
    },
    {
      name: 'msapplication-navbutton-color',
      content: '#09090b',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: '#09090b',
    },
    {
      name: 'msapplication-TileColor',
      content: '#09090b',
    },
    {
      name: 'google-site-verification',
      content: 'H8oEgquIF2vFvhySnsZtchBi-4LNQxI7HlKQjXz0TIA',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: `${canonicalUrl}favicon/favicon.ico`,
      type: 'image/x-icon',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: `${canonicalUrl}favicon/favicon-32x32.png`,
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: `${canonicalUrl}favicon/favicon-16x16.png`,
      sizes: '16x16',
    },
    {
      rel: 'apple-touch-icon',
      href: `${canonicalUrl}favicon/apple-touch-icon.png`,
      sizes: '180x180',
    },
    {
      rel: 'mask-icon',
      href: `${canonicalUrl}favicon/safari-pinned-tab.svg`,
      color: '#09090b',
    },
    {
      rel: 'manifest',
      href: `${canonicalUrl}favicon/site.webmanifest`,
    },
  ],
};

export default defaultSEOConfig;
