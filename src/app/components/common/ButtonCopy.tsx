import { useState, useEffect } from 'react';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

type CopyButtonProps = {
  text: string;
};

const ButtonCopy: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <button
      onClick={handleCopy}
      className="group relative inline-flex items-center rounded-full border-2 border-black bg-[#8CF6BF] pb-1 text-sm font-medium text-black shadow-sm transition-all duration-200 ease-in-out hover:outline-none hover:ring-2 hover:ring-offset-2">
      {copied ? (
        <div className="text-bolt relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#91E3CC] bg-transparent px-6 text-xl font-bold">
          <ClipboardDocumentCheckIcon className="h-4 w-4 sm:h-12 sm:w-10" />
          <span className="text-xl font-bold">Address copied!</span>
        </div>
      ) : (
        <>
          <span className="text-bolt relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#91E3CC] bg-transparent px-6 text-xl font-bold md:hidden md:text-xl lg:text-3xl">
            Contract Address - TBA
          </span>
          <span className="text-bolt relative z-10 hidden h-12 items-center justify-center overflow-hidden rounded-full bg-[#91E3CC] bg-transparent px-6 text-xl font-bold transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 md:inline-flex">
            {text}
          </span>
          <div className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#B4FFDB,10px_10px_#55A754,15px_15px_#006A34]"></div>
        </>
      )}
    </button>
  );
};

export default ButtonCopy;
