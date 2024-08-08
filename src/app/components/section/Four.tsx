// import { usePortal } from '@/app/components/layout/PortalContext';
import Image from 'next/image';
import '@/app/styles/four.css';

const Four = () => {
  return (
    <section className="img4 min-h-screen">
      <div className="container mx-auto flex justify-center pt-16">
        <Image src="/footer-title.png" alt="Slide image" width={620} height={75} className="object-cover" />
      </div>
    </section>
  );
};

export default Four;
