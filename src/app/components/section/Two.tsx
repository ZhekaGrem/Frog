// import { usePortal } from '@/app/components/layout/PortalContext';
import { Fredoka } from 'next/font/google';
const fredoka = Fredoka({ subsets: ['latin-ext'], weight: ['400', '600'] });
import '@/app/styles/two.css';

const Two = () => {
  return (
    <section className={`${fredoka.className} img2`}>
      <div className="container mx-auto text-center text-white">
        <h2 className="second-text mb-8 text-2xl font-semibold">Костя Грачов</h2>
        <p className="second-text m-auto max-w-screen-xl text-3xl font-normal">
          In the ashes a community emerged, a new flog, a more based flog, a FWOG. FWOG has no dev. It is the
          community.
        </p>
      </div>
    </section>
  );
};

export default Two;
