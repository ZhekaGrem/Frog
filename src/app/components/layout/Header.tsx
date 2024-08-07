'use client'
import Image from "next/image";

const Header = () => {
  

  const data = [
    { id: 3, text: 'Twitter page', src: '/svg/X.svg', link: '' },
    { id: 4, text: 'Telegram account', src: '/svg/telegram.svg', link: '' },
    { id: 4, text: 'dexscreener account', src: '/svg/dexscreener.svg', link: '' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-between border-t-2 border-black bg-opacity-80 backdrop-blur-sm">
      <ul className="flex items-start px-2 py-2 md:px-8 md:py-4">
        {data.map((item) => (
          <li key={item.id} className="m-1 flex items-center justify-center rounded-full bg-white">
            <a
              href="https://dexscreener.com/solana/AB1eu2L1Jr3nfEft85AuD2zGksUbam1Kr8MR3uM2sjwt"
              target="_blank"
              className="flex items-center p-2">
              <Image
                width={32}
                height={32}
                className="h-5 w-5 hover:scale-125"
                alt={item.text}
                src={item.src}
              />
            </a>
          </li>
        ))}
      </ul>
      <div className="footer_disclaimer py-4 text-center">
        <p className="disclaimer text-sm min-w-max">
          In the ashes a community emerged, a new flog, a more based flog, a FWOG. FWOG has no dev. It is the community.
        </p>
        <p className="disclaimer text-sm">$FWOG2024 - All Rights Reserved.</p>
      </div>
      <div className="to_top py-4 text-center">
        <p className="text-sm">To the top</p>
        <a id="scroll-top" href="#hero" className="btn mx-auto flex items-center justify-center">
          <Image src="/assets/arrow-up.svg" alt="up" width={32} height={32} />
        </a>
      </div>
    </nav>
  );
};

export default Header;
