import React from 'react';
import { motion } from 'framer-motion';

const works = [
  {
    title: 'Adaptive LMS Platform',
    problem: 'Fragmented learning reduced engagement and progress tracking.',
    process:
      'Built a modular LMS with Next.js and FastAPI, adaptive modules, progress insights, and AI‑assisted recommendations.',
    impact: 'Improved learning efficiency by ~50% and increased completion rates.',
  },
  {
    title: 'Retail POS & Ops Dashboard',
    problem: 'Manual workflows and scattered tools slowed retail operations.',
    process:
      'Designed a unified POS + ops dashboard with real‑time inventory, role‑based access, and offline‑first capabilities.',
    impact: 'Reduced ops time by 80% and errors by 35%.',
  },
  {
    title: 'BLE IoT Integrations',
    problem: 'Hardware data was noisy and hard to interpret in real time.',
    process:
      'Implemented BLE data pipelines, smoothing, and event thresholds with intuitive visual feedback.',
    impact: 'Increased reliability of field signals and decision speed for technicians.',
  },
  {
    title: 'FACO — Digital Health',
    problem: 'Low access to timely health triage during COVID.',
    process:
      'Co‑founded and shipped a remote triage experience; integrated bot workflows and clinician handoff.',
    impact: 'Served 1,000+ users and won international hackathons.',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-[#0a0a0b] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.1),rgba(10,10,11,0)_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Experience — Problem, Process, Outcome
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {works.map((w) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white/95">{w.title}</h3>
              <div className="mt-3 space-y-2 text-sm text-zinc-300">
                <p><span className="text-zinc-400">Problem:</span> {w.problem}</p>
                <p><span className="text-zinc-400">Process:</span> {w.process}</p>
                <p><span className="text-zinc-400">Impact:</span> {w.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6"
        >
          <h3 className="text-lg font-semibold">Thinking: Quantum × AI</h3>
          <p className="mt-3 text-zinc-300">
            I explore interfaces where classical UI meets quantum intuition. The aim: make systems that don’t
            just react, but predict and adapt — translating uncertainty into useful, human‑readable signals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-zinc-400">Services</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-200">
              <li>Web & App Development</li>
              <li>Product Prototyping</li>
              <li>AI Integration & Intelligent Interfaces</li>
              <li>Systems & Ops Dashboards</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-zinc-400">Focus</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-200">
              <li>Outcomes over outputs</li>
              <li>Simplicity over complexity</li>
              <li>Truth over hype</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
