import { Chakra_Petch } from 'next/font/google';
import '@/app/styles/globals.css';
import Nav from '@/app/components/layout/Nav';
import { siteMetadata, siteViewport } from '@/lib/metadata';
import FloatingBlock from '@/app/components/layout/FloatingBlock';
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
        <main>{children}</main>
        <Nav />
        <FloatingBlock />
        {/* <div id="portal-root" /> */}
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
