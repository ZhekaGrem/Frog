'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface PortalProps {
  onClose: () => void;
  title?: string;
}

const Portal: React.FC<PortalProps> = ({ onClose }) => {
  const portalRoot = typeof document !== 'undefined' ? document.getElementById('portal-root') : null;
  const modalRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!portalRoot) {
    console.error('Портала немає');
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center rounded-2xl bg-opacity-50 px-4">
          <motion.div
            ref={modalRef}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="relative min-h-[50%] min-w-[50%] rounded-2xl bg-black shadow-lg">
            <button
              className="absolute right-4 top-4 text-gray-50 transition-colors hover:text-gray-700"
              onClick={handleClose}>
              <XMarkIcon className={`size-${6} text-white`} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot
  );
};

export default Portal;
