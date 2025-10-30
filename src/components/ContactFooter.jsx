import React from 'react';
import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    <section id="contact" className="relative w-full bg-[#0a0a0b] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08),rgba(10,10,11,0)_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s talk about building something that lasts.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
            I work with founders and teams who value precision, honesty, and speed. If that’s you, I’d love
            to collaborate.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:navneet@example.com"
              className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              Email Me
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/40 hover:text-white"
            >
              See Work Again
            </a>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-zinc-400 sm:flex-row">
          <p>Made with precision, caffeine, and curiosity by Navneet Gupta.</p>
          <p className="text-zinc-500">© {new Date().getFullYear()} — Built for truth, not for hype.</p>
        </div>
      </div>
    </section>
  );
}
