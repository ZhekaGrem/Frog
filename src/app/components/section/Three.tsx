'use client';
import Image from 'next/image';
import '@/app/styles/three.css';

type DataType = {
  id: number;
  h3: string;
  p: string;
};

const data: DataType[] = [
  {
    id: 1,
    h3: '01. CREATE WALLET',
    p: 'Get your free wallet app from either the App Store or Google Play Store, like MetaMask or any other wallet of your preference. If you`re using a desktop, simply visit metamask.io and download the Google Chrome extension.',
  },
  {
    id: 2,
    h3: '02. GET SOME ETH',
    p: 'To acquire $FEFE, ensure you have ETH in your wallet for seamless conversion. If you don`t have ETH, you have various options: purchase directly on Metamask, transfer from another wallet, or acquire on a different exchange and send it to your wallet.',
  },
  {
    id: 3,
    h3: '03. GO TO UNISWAP',
    p: 'Access Uniswap through your preferred browser, either by visiting app.uniswap.org in Google Chrome or using the built-in browser within your Metamask app. Connect your wallet, enter the $FEFE token address on Uniswap, choose $FEFE as your selection, and confirm the transaction. When prompted by Metamask, provide the required wallet signature to finalize the process.',
  },
  {
    id: 4,
    h3: '04. SWITCH ETH  FOR $FEFE',
    p: 'Trade ETH for $FEFE hassle-free. Enjoy tax-free transactions, eliminating concerns about specific slippage. However, during periods of market volatility, adjusting slippage might be necessary for seamless trading.',
  },
];

const Three = () => {
  return (
    <section className="relative">
      <div className="img3 flex min-h-screen justify-center">
        <div className="flex flex-col-reverse items-center pt-16 md:flex-col">
          <div className="order-last md:order-first">
            <Image src="/howtobuy.png" alt="Slide image" width={620} height={75} className="object-cover" />
          </div>
        </div>
      </div>
      <div className="how_to_buy">
        {data.map((item) => (
          <div className="buy_step" key={item.id}>
            <h3 className="text-2xl font-bold">{item.h3}</h3>
            <p className="desc font-normal">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Three;
