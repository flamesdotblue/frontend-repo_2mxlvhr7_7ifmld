import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0b] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),rgba(10,10,11,0)_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-zinc-300"
        >
          I’m a 23-year-old full‑stack engineer and entrepreneur from India. I build products that speak
          truth, not buzzwords. From LMS platforms that improved learning efficiency by 50% to POS systems
          that streamlined retail workflows, BLE‑based IoT integrations, and internal dashboards touching
          10,000+ users — my work is measured by clarity and outcomes.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-zinc-300"
        >
          I co‑founded FACO during COVID, won international hackathons, and served 1,000+ users in digital
          health. Today at Quantum AI Global, I build GenAI and quantum‑integrated systems that connect UI,
          backend, and intelligence — systems that think, learn, and help people act faster.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 border-l-2 border-white/10 pl-4 text-lg text-zinc-200"
        >
          “Code is just a medium. The goal is clarity.”
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-3"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-zinc-400">Engineer</p>
            <p className="mt-2 text-zinc-200">React, Next.js, FastAPI, Flutter, TypeScript, AI front‑ends</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-zinc-400">Thinker</p>
            <p className="mt-2 text-zinc-200">Problem framing, user empathy, outcome over output</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-zinc-400">Creator</p>
            <p className="mt-2 text-zinc-200">Simplicity, precision, and measurable results</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14"
        >
          <h3 className="text-xl font-semibold">Philosophy</h3>
          <p className="mt-3 text-zinc-300">
            I’m fascinated by systems that think — from human brains to quantum algorithms. I chase clarity,
            not hype. I believe interfaces should predict, adapt, and quietly amplify human decision‑making.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
