"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden grid-bg">
      {/* Layered high-end ambient glows */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[65%] left-1/3 w-[300px] h-[300px] bg-stone-500/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Cybernetic Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded border border-stone-800/80 bg-stone-900/40 backdrop-blur-md mb-8 select-none"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-stone-400">
            Open to Internship & Placement Roles
          </span>
        </motion.div>

        {/* Name with text gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gradient mb-5 font-sans"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-stone-400 mb-6 font-mono"
        >
          &lt;<span className="text-accent">{personalInfo.title}</span> /&gt;
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-stone-400 max-w-2xl mb-12 leading-relaxed font-sans"
        >
          {personalInfo.shortIntro}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded border border-accent bg-accent/5 text-accent font-semibold text-xs uppercase tracking-wider hover:bg-accent hover:text-stone-950 transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.06)] hover:shadow-[0_0_25px_rgba(217,119,6,0.3)] flex items-center gap-2 font-mono"
          >
            projects_
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded border border-stone-800 bg-stone-950/20 backdrop-blur-sm hover:bg-stone-900/35 hover:border-stone-700 transition-all duration-300 text-stone-450 hover:text-white font-semibold text-xs uppercase tracking-wider font-mono"
          >
            contact_
          </a>
        </motion.div>

        {/* Quick Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-6"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-stone-500 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <GitBranch className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-stone-500 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Link2 className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.email}
            className="p-1.5 text-stone-500 hover:text-white transition-colors duration-300"
            aria-label="Send Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
