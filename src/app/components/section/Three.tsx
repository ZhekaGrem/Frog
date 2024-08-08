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
    p: 'Download Phantom or your wallet of choice from the app store or Google Play for free. Desktop users, download the Google Chrome extension by going to Phantom.',
  },
  {
    id: 2,
    h3: '02. GET SOME SOL',
    p: 'Have SOL in your wallet to switch to $FWOG. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.',
  },
  {
    id: 3,
    h3: '03. GO TO JUPITER',
    p: 'Connect to Jupiter. Connect your wallet in chrome. Paste the $FWOG token address, select $FWOG, and confirm. When Phantom prompts you for a wallet signature, sign.',
  },
  {
    id: 4,
    h3: '04. SWAP FOR FWOG',
    p: ' Switch SOL for $FWOG. We have Zero taxes so you don’t need to worry about buying with a specific slippage.',
  },
];

const Three = () => {
  return (
    <section className="relative">
      <div className="img3 flex min-h-screen justify-center">
        <div className="flex flex-col-reverse items-center pt-16 md:flex-col">
          <div className="order-last md:order-first">
            <Image
              src="/how_to_title.png"
              alt="Slide image"
              width={620}
              height={75}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="how_to_buy">
        {data.map((item) => (
          <div className="buy_step" key={item.id}>
            <h3 className="mb-1 text-2xl font-bold">{item.h3}</h3>
            <p className="desc font-normal">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Three;
