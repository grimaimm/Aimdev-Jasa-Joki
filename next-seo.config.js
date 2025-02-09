const siteUrl = process.env.SITE_URL || 'http://localhost:3004';

const canonicalUrl = { siteUrl };
const metaImage = `${siteUrl}/images/introduction.png`;
const metaDescription =
  'Kami yang bikin, kamu fokus ke hal lain. Jadi, gak perlu pusing ngoding, kami yang urusin! Hehe3x.';
const metaKeywords =
  'aimdev, aimdevjoki, aimdevjokitugas, joki tugas, joki tugas website, tugas kuliah, tugas skripsi, aimdevjokitugas.xyz';
const metaAuthor = 'aimdev.xyz';
const metaGoogleBot = 'index, follow';

const defaultSEOConfig = {
  defaultTitle: 'Aimdev Joki Tugas Website',
  description: metaDescription,
  canonical: canonicalUrl,
  keywords: metaKeywords,
  author: metaAuthor,
  googlebot: metaGoogleBot,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Aimdev Joki Tugas Website',
    description: metaDescription,
    keywords:
      'aimdev, aimdevjoki, aimdevjokitugas, joki tugas, joki tugas website, tugas kuliah, tugas skripsi, aimdevjokitugas.xyz',
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
    site_name: 'Aimdev Joki Tugas Website',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
