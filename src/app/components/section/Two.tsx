// import { usePortal } from '@/app/components/layout/PortalContext';
import { Fredoka } from 'next/font/google';
const fredoka = Fredoka({ subsets: ['latin-ext'], weight: ['400', '600'] });
import '@/app/styles/two.css';

const Two = () => {
  return (
    <section className={`${fredoka.className} img2`}>
      <div className="container mx-auto text-center text-white">
        <h2 className="second-text mb-2 text-2xl font-semibold md:text-3xl">About FEFE</h2>
        <p className="second-text m-auto max-w-screen-xl text-3xl font-normal">
          $FEFE was not just a digital asset. He had his own unique personality, which made him a true hero in
          the world building. $FEFE was renowned for his charisma and fearlessness, and everyone who dealt
          with him felt his kindness and caring.
        </p>
      </div>
    </section>
  );
};

export default Two;
