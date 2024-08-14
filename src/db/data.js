//change all [favicon.ico, favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png, android-chrome-512x512.png , android-chrome-192x192.png]

//Logo
export const logo = {
  src: '/logo/logo.svg',
  with: 100,
  height: 80,
  alt: 'logo',
};
//Nav
export const nav = [
  { id: 3, text: 'Twitter page', src: '/svg/X.svg', link: 'https://x.com/fefe_ether20' },
  { id: 2, text: 'Telegram account', src: '/svg/telegram.svg', link: 'https://t.me/fefe_meme_eth20' },
  {
    id: 4,
    text: 'Medium account',
    src: '/M.png',
    link: 'https://medium.com/@team_fefe_meme',
  },
  {
    id: 5,
    text: 'etherscan',
    src: '/etherscan.png',
    link: 'https://etherscan.io/address/0x212A95e3c22b9Cc4c2d575BAFc397cf183E714A4',
  },
];

//Footer
export const footer = {
  firstColum: [
    { id: 1, text: 'About', link: '/' },
    { id: 2, text: 'Careers', link: '/' },
    { id: 3, text: 'Brand Center', link: '/' },
    { id: 4, text: 'Blog', link: '/' },
  ],
  secondColum: [
    { id: 1, text: 'Discord Server', link: '/' },
    { id: 2, text: 'Twitter', link: '/' },
    { id: 3, text: 'Facebook', link: '/' },
    { id: 4, text: 'Contact Us', link: '/' },
  ],
  thirdColum: [
    { id: 1, text: 'Privacy Policy', link: '/' },
    { id: 2, text: 'Licensing', link: '/' },
    { id: 3, text: 'Terms & Conditions', link: '/' },
  ],
  fourthColum: [
    { id: 1, text: 'iOS', link: '/' },
    { id: 2, text: 'Android', link: '/' },
    { id: 3, text: 'Windows', link: '/' },
    { id: 4, text: 'MacOS', link: '/' },
  ],
  iconColum: [
    { id: 1, text: 'Facebook page', src: '/svg/facebook.svg', link: '' },
    { id: 2, text: 'Discord community', src: '/svg/discord.svg', link: '' },
    { id: 3, text: 'Twitter page', src: '/svg/X.svg', link: '' },
    { id: 4, text: 'Telegram account', src: '/svg/telegram.svg', link: '' },
    { id: 5, text: 'Instagram account', src: '/svg/instagram.svg', link: '' },
  ],
  text: {
    firstColum: 'Company',
    secondColum: 'Help center',
    thirdColum: 'Legal',
    fourthColum: 'Download',
    bottom: 'All Rights Reserved.',
  },
};
