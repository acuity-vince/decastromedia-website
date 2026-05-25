"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ROTATE_INTERVAL = 2600;

const stats = [
  { value: "15+", label: "Years B2B Marketing" },
  { value: "3", label: "Core AI Services" },
  { value: "FCA", label: "Regulated Experience" },
];

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "marketing engine",
      "growth team",
      "sales machine",
      "research desk",
      "content studio",
    ],
    []
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, ROTATE_INTERVAL);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black">
      {/* ── Background layer ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Vignette over dot grid */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #000 100%)",
          }}
        />
        {/* Teal atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 55%, rgba(0,189,175,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Green accent — tighter, centered */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 35% 25% at 50% 45%, rgba(0,230,156,0.05) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Top gradient rule ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-28 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2.5 border border-brand-teal/25 bg-brand-teal/5 px-4 py-2">
            <span
              className="relative flex h-1.5 w-1.5"
              aria-hidden
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green" />
            </span>
            <span className="font-body text-[10px] uppercase tracking-[0.18em] text-brand-teal">
              AI Consultant &amp; Strategic Advisor
            </span>
          </div>
        </motion.div>

        {/* Static headline line 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.6rem,7vw,5.5rem)] uppercase leading-[1.02] tracking-wide text-brand-white"
        >
          Turn your team into
          <br />
          an AI-powered
        </motion.h1>

        {/* Rotating word */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="relative mt-1 mb-8 h-[clamp(2.8rem,7.5vw,5.8rem)] w-full flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={titleNumber}
              className="absolute font-display text-[clamp(2.6rem,7vw,5.5rem)] uppercase leading-[1.02] tracking-wide text-brand-green"
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              {titles[titleNumber]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-[1.05rem] sm:text-lg text-white/50 max-w-2xl leading-relaxed mb-10"
        >
          De Castro Media helps companies audit, train, and implement practical
          AI systems across marketing, sales, operations, and research teams.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Button asChild size="lg">
            <Link href="/contact" className="gap-3">
              Book an AI Audit
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/contact#calendar" className="gap-3">
              Schedule a Strategy Call
              <CalendarDays className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </Button>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-px border border-white/10 divide-x divide-white/10"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="px-8 py-4 flex flex-col items-center gap-1"
            >
              <span className="font-display text-2xl uppercase text-brand-white">
                {value}
              </span>
              <span className="font-body text-[10px] uppercase tracking-widest text-white/30">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom gradient rule ── */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

export { Hero };
