'use client';
import Image from 'next/image';
import { footer } from '@/db/data';
const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {footer.text.firstColum}
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              {footer.firstColum.map((list) => (
                <li className="mb-4" key={list.id}>
                  <a
                    href={list.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={list.text}
                    title={list.text}
                    className="hover:underline">
                    {list.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {footer.text.secondColum}
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              {footer.secondColum.map((list) => (
                <li className="mb-4" key={list.id}>
                  <a
                    href={list.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={list.text}
                    title={list.text}
                    className="hover:underline">
                    {list.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {footer.text.thirdColum}
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              {footer.thirdColum.map((list) => (
                <li className="mb-4" key={list.id}>
                  <a
                    href={list.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={list.text}
                    title={list.text}
                    className="hover:underline">
                    {list.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {footer.text.fourthColum}
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              {footer.fourthColum.map((list) => (
                <li className="mb-4" key={list.id}>
                  <a
                    href={list.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={list.text}
                    title={list.text}
                    className="hover:underline">
                    {list.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 md:flex md:items-center md:justify-between dark:bg-gray-700">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-300">
          © {date} {footer.text.bottom}
        </span>
        <div className="mt-4 flex space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
          {footer.iconColum.map((list) => (
            <a
              key={list.id}
              href={list.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={list.text}
              title={list.text}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <Image
                width={32}
                height={32}
                className="h-5 w-5 hover:scale-125"
                alt={list.text}
                src={list.src}
              />
              <span className="sr-only">{list.text}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
