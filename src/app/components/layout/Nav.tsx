'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { nav } from '@/db/data';

type NavItemType = {
  id: number;
  text: string;
  src: string;
};

const data: NavItemType[] = nav;
const Nav = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTopButton = document.getElementById('scrollTopButton');
      const textNav = document.getElementById('textNav');
      if (scrollTopButton && textNav) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
          textNav.style.display = 'block';
        } else {
          textNav.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full flex-col border-t-2 border-black bg-opacity-80 backdrop-blur-sm md:flex-row md:justify-between">
      <ul className="flex w-full items-center justify-center p-2 md:w-max md:justify-start md:p-5">
        {data.map((item) => (
          <li key={item.id} className="m-1 rounded-full bg-white">
            <a
              href="https://dexscreener.com/solana/AB1eu2L1Jr3nfEft85AuD2zGksUbam1Kr8MR3uM2sjwt"
              target="_blank"
              className="flex items-center justify-center p-2">
              <Image
                width={32}
                height={32}
                className="h-6 w-6 hover:scale-125"
                alt={item.text}
                src={item.src}
              />
            </a>
          </li>
        ))}
      </ul>
      <div
        id="textNav"
        className="flex items-center justify-center text-center text-white md:p-3"
        style={{ display: 'none' }}>
        <p className="pd-1 text-lg md:max-w-[60vw]">
          This token was created with the goal of revolutionizing the world of cryptocurrencies and bringing
          new breath into it.
        </p>
        <p className="text-lg">$FEFE 2024 - All Rights Reserved.</p>
      </div>
      <div id="scrollTopButton" className="hidden items-start p-2 md:block md:p-3">
        <div className="m-1 flex items-center justify-center rounded-full bg-white">
          <a href="#hero" className="flex items-center p-2" id="scroll-top">
            <Image src="/svg/arrow-up.svg" alt="up" width={32} height={32} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
