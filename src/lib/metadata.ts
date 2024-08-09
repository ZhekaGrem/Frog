import { Metadata, Viewport } from 'next';

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};
export const siteMetadata: Metadata = {
  title: '$FEFE',
  description:
    '$FEFE was renowned for his charisma and fearlessness, and everyone who dealt with him felt his kindness and caring.',
  keywords: ['', '', '', '', '', ''],
  openGraph: {
    title: '$FEFE',
    description:
      '$FEFE was renowned for his charisma and fearlessness, and everyone who dealt with him felt his kindness and caring.',
    images: ['https://frog-steel.vercel.app/_next/static/media/1.c855e518.webp'],

    type: 'website',
  },
  twitter: {
    title: '$FEFE',
    description:
      '$FEFE was renowned for his charisma and fearlessness, and everyone who dealt with him felt his kindness and caring.',
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
