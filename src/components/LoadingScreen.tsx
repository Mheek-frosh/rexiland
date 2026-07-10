'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800);
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[60] flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(48,79,255,0.18),_transparent_42%),linear-gradient(135deg,_#f7f8ff_0%,_#eef2ff_55%,_#ffffff_100%)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.95)_0%,_rgba(255,255,255,0)_70%)]" />

          <div className="absolute left-6 top-6 z-10 flex items-center gap-3 sm:left-8 sm:top-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-white/80 shadow-[0_12px_40px_rgba(48,79,255,0.16)] backdrop-blur">
              <Image src={siteDetails.siteLogo} alt="Logo" width={28} height={28} className="h-7 w-7" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-zinc-900">{siteDetails.siteName}</p>
              <p className="text-sm text-zinc-500">Preparing your experience</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center px-6 text-center">
            <div className="relative mb-8 flex h-44 w-44 items-center justify-center sm:h-56 sm:w-56">
              <motion.div
                animate={{ y: [0, -22, 0], scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-[#304fff] via-[#5b6dff] to-[#8d9bff] shadow-[0_30px_80px_rgba(48,79,255,0.35)] sm:h-36 sm:w-36"
              />
              <motion.div
                animate={{ y: [0, -16, 0], scale: [0.95, 1.02, 0.95], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.18 }}
                className="absolute left-6 top-8 h-16 w-16 rounded-full border border-white/70 bg-white/80 shadow-lg backdrop-blur sm:h-20 sm:w-20"
              />
              <motion.div
                animate={{ y: [0, -10, 0], scale: [0.9, 1.03, 0.9], opacity: [0.7, 0.95, 0.7] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.28 }}
                className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-[#fed835] shadow-[0_20px_40px_rgba(254,216,53,0.35)] sm:h-16 sm:w-16"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#304fff]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#304fff]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fed835]" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
