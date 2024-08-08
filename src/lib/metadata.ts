import { Metadata, Viewport } from 'next';

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};
export const siteMetadata: Metadata = {
  title: 'FWOG',
  description:
    'In the ashes a community emerged, a new flog, a more based flog, a FWOG. FWOG has no dev. It is the community.',
  keywords: ['', '', '', '', '', ''],
  openGraph: {
    title: 'FWOG',
    description:
      'In the ashes a community emerged, a new flog, a more based flog, a FWOG. FWOG has no dev. It is the community.',
    images: ['https://frog-steel.vercel.app/_next/static/media/1.c855e518.webp'],

    type: 'website',
  },
  twitter: {
    title: 'FWOG',
    description:
      'In the ashes a community emerged, a new flog, a more based flog, a FWOG. FWOG has no dev. It is the community.',
    images: ['https://frog-steel.vercel.app/_next/static/media/1.c855e518.webp'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'урла',
  },
  icons: {
    icon: ['/favicon.ico'],
    shortcut: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
  },
};
