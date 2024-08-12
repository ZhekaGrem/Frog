'use client';
import Image from 'next/image';
import '@/app/styles/one.css';
import { motion } from 'framer-motion';
import { slideDown } from '@/animations/animation';

const One = () => {
  //  const { isPortalOpen, setIsPortalOpen } = usePortal(); exampl how open popUp block
  // <button className="bg-slate-300  px-6 "  onClick={() => setIsPortalOpen(true)}>+</button>  exampl how open popUp block

  return (
    <section id="hero" className="img1 min-h-screen">
      <motion.div
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex justify-center pt-16">
        <Image src="/fefe.png" alt="Slide image" width={350} height={120} className="object-cover" />
      </motion.div>
    </section>
  );
};

export default One;
