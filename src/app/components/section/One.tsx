'use client';
import Image from 'next/image';
import '@/app/styles/one.css';
import { motion } from 'framer-motion';
import { slideDown } from '@/animations/animation';
import ButtonCopy from '../common/ButtonCopy';

const One: React.FC = () => {
  //  const { isPortalOpen, setIsPortalOpen } = usePortal(); exampl how open popUp block
  // <button className="bg-slate-300  px-6 "  onClick={() => setIsPortalOpen(true)}>+</button>  exampl how open popUp block
  const textCopy = '0x212A95e3c22b9Cc4c2d575BAFc397cf183E714A4';
  return (
    <section id="hero" className="img1 min-h-screen">
      <div className="pt-14">
        <ButtonCopy text={textCopy} />
      </div>
      <motion.div
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex justify-center">
        <Image src="/fefe.png" alt="Slide image" width={350} height={120} className="object-cover" />
      </motion.div>
    </section>
  );
};

export default One;
