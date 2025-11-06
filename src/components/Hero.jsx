import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability (does not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white"></div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold tracking-tight text-gray-900 sm:text-6xl text-4xl"
        >
          PostMuse.ai
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600"
        >
          Plan, preview, and perfect your social posts with an AI-guided workflow. English and Kiswahili captions, calendar scheduling, and a playful grid preview.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-900/20"
          >
            Explore Features
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg bg-white/80 px-5 py-3 text-gray-900 shadow-lg ring-1 ring-gray-200 backdrop-blur transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          >
            See Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
