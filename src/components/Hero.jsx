import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0a0a0b] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette to focus center without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,11,0)_0%,rgba(10,10,11,0.2)_40%,rgba(10,10,11,0.78)_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-r from-white via-white to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          I’m Navneet Gupta — a builder of systems that scale ideas into impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mt-5 max-w-3xl text-balance text-sm/6 text-zinc-300 sm:text-base/7"
        >
          Code is a medium. The goal is clarity. I connect React, Next.js, FastAPI, Flutter, and AI into
          quiet systems that think, learn, and help people act faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/40 hover:text-white"
          >
            Let’s Build Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
