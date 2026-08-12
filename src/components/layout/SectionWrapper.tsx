"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  title,
  subtitle,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-12 md:py-16 relative z-10 px-6 max-w-6xl mx-auto overflow-hidden ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative"
        >
          <h2 className="text-xl md:text-2xl font-bold tracking-tight font-sans text-white uppercase flex items-center gap-2">
            <span className="text-accent font-mono text-sm font-semibold select-none">//</span>
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2.5 text-xs sm:text-sm text-stone-400 font-sans max-w-2xl leading-relaxed">{subtitle}</p>
          )}
          {/* Custom fading hairline separator */}
          <div className="h-[1px] w-full bg-gradient-to-r from-accent/50 via-stone-900 to-transparent mt-4" />
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
