"use client";

import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic qualifications and relevant coursework."
    >
      <div className="flex flex-col gap-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="glow-card rounded-lg p-6 border border-stone-900 bg-stone-925/25 backdrop-blur relative overflow-hidden flex flex-col md:flex-row gap-6 items-start group"
          >
            {/* Ambient Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/4 rounded-full blur-xl pointer-events-none" />

            {/* Top/Left Icon */}
            <div className="p-2.5 rounded bg-stone-950 border border-stone-900 text-stone-400 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300 shrink-0">
              <GraduationCap className="h-5 w-5" />
            </div>

            {/* Details Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white font-sans group-hover:text-accent transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-mono font-bold text-accent mt-1 select-none">
                    {edu.institution}
                  </p>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded text-xs font-mono font-medium bg-stone-950 border border-stone-900 text-stone-400 select-none">
                    {edu.duration}
                  </span>
                </div>
              </div>

              {/* Coursework and details */}
              <ul className="flex flex-col gap-3">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-stone-400 text-sm leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
