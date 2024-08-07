import { Chakra_Petch, Fredoka } from 'next/font/google';
import '@/app/styles/globals.css';
import Header from '@/app/components/layout/Header';
import { siteMetadata, siteViewport } from '@/lib/metadata';
// import { PortalProvider } from '@/app/context/PortalContext'
// import { GoogleTagManager from '@next/third-parties/google'; if you need npm i @next/third-parties
// import { GoogleAnalytics } from '@next/third-parties/google'; if you need npm i @next/third-parties

const chakra_petch = Chakra_Petch({ subsets: ['latin-ext'], weight: ['400', '600', '700'] });

export const viewport = siteViewport;

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <GoogleTagManager gtmId="youID" />
        <GoogleAnalytics gaId="youID" /> */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={chakra_petch.className}>
        <Header />
        <main>{children}</main>
        <div id="portal-root" />
        {/* if need PopUp
                 <PortalProvider>

        <Header/>
        <main>

        {children}
        </main>
      <Footer/>
      <div id="portal-root" />
         </PortalProvider>
          */}
      </body>
    </html>
  );
}
