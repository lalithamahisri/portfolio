"use client";

import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="My professional internship history and industry exposure."
    >
      <div className="relative border-l border-stone-900 ml-4 md:ml-8 pl-8 md:pl-12 py-2 flex flex-col gap-12">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[45px] md:-left-[61px] top-1.5 p-1.5 rounded bg-stone-950 border border-stone-900 text-stone-500 group-hover:border-accent/40 group-hover:text-accent transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.6)]">
              <Briefcase className="h-4 w-4" />
            </div>

            {/* Content card */}
            <div className="glow-card rounded-lg p-6 relative overflow-hidden">
              {/* Top ambient highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-6">
                <div>
                  <h3 className="text-base font-bold text-white font-sans group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-bold text-accent font-mono mt-1 select-none">
                    {exp.company}
                  </p>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded text-xs font-mono font-medium bg-stone-950 border border-stone-900 text-stone-400 select-none">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Tasks details */}
              <ul className="flex flex-col gap-3">
                {exp.description.map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3 text-stone-400 text-sm leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                    <span>{task}</span>
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
