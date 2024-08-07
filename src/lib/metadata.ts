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
    images: [
      'https://as1.ftcdn.net/v2/jpg/04/54/10/86/1000_F_454108632_C48wbroFTZQQR5tiSeg0oX0GkrYE8j8Z.jpg',
    ],

    type: 'website',
  },
  twitter: {
    title: 'FWOG',
    description:
      'In the ashes a community emerged, a new flog, a more based flog, a FWOG. FWOG has no dev. It is the community.',
    images: [
      'https://as1.ftcdn.net/v2/jpg/04/54/10/86/1000_F_454108632_C48wbroFTZQQR5tiSeg0oX0GkrYE8j8Z.jpg',
    ],
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
