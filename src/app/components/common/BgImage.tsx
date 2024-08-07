import Image from 'next/image';

const FullScreenImage = ({ src }: { src: string }) => (
  <div className="relative h-screen w-full">
    <Image className="object-cover" loading="lazy" src={src} alt="bg" fill quality={100} sizes="100vw" />
  </div>
);

export default FullScreenImage;
