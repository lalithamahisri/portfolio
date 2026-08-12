"use client";

import React, { useState } from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { personalInfo } from "@/data/portfolio";
import { Mail, Link2, GitBranch, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = personalInfo.email.replace("mailto:", "");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Looking to collaborate on projects or discuss internship and placement opportunities?"
    >
      <div className="max-w-3xl mx-auto text-center py-12 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/3 rounded-full blur-[90px] pointer-events-none" />

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 font-sans">
          Let&apos;s build something <span className="text-gradient-accent">useful</span>.
        </h3>
        
        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto mb-12 leading-relaxed font-sans">
          I am currently seeking internship and entry-level software engineering roles. If you are a recruiter, developer, or manager looking for a dedicated builder, feel free to reach out.
        </p>

        {/* Action Center */}
        <div className="flex flex-col items-center gap-4.5">
          {/* Main Email Button */}
          <a
            href={personalInfo.email}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded border border-accent bg-accent/5 text-accent font-semibold text-xs uppercase tracking-wider hover:bg-accent hover:text-stone-950 transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.06)] hover:shadow-[0_0_30px_rgba(217,119,6,0.3)] font-mono select-none"
          >
            <Mail className="h-4 w-4 shrink-0" />
            send_email
          </a>

          {/* Secondary Clipboard Copy */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-300 hover:border-stone-850 transition-colors bg-stone-950 border border-stone-900 px-4 py-2.5 rounded focus:outline-none"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-accent" />
                copied!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                {emailAddress}
              </>
            )}
          </button>
        </div>

        {/* Social Quick Links */}
        <div className="flex items-center justify-center gap-8 mt-16 border-t border-stone-900/60 pt-10">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-stone-500 hover:text-white transition-colors group"
          >
            <Link2 className="h-4.5 w-4.5 text-stone-500 group-hover:text-accent transition-colors duration-300" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-stone-500 hover:text-white transition-colors group"
          >
            <GitBranch className="h-4.5 w-4.5 text-stone-500 group-hover:text-accent transition-colors duration-300" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
