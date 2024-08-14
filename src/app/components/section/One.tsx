'use client';
import Image from 'next/image';
import '@/app/styles/one.css';
import { motion } from 'framer-motion';
import { slideDown } from '@/animations/animation';
import ButtonCopy from '../common/ButtonCopy';

const One = () => {
  //  const { isPortalOpen, setIsPortalOpen } = usePortal(); exampl how open popUp block
  // <button className="bg-slate-300  px-6 "  onClick={() => setIsPortalOpen(true)}>+</button>  exampl how open popUp block
  const textCopy = '0x6f5d9662a998cEfaDE4F29129a46d4D15289b093';
  return (
    <section id="hero" className="img1 flex min-h-screen flex-col justify-between">
      <motion.div
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex justify-center pt-16">
        <Image src="/fefe.png" alt="Slide image" width={350} height={120} className="object-cover" />
      </motion.div>
      <div className="pb-5 md:pb-20">
        <ButtonCopy text={textCopy} />
      </div>
    </section>
  );
};

export default One;
