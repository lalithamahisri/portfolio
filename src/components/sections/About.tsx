"use client";

import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { aboutInfo, personalInfo } from "@/data/portfolio";
import { Code2, Blocks, Cpu, Compass } from "lucide-react";

export default function About() {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "software development":
        return <Code2 className="h-5 w-5 text-accent" />;
      case "web development":
        return <Blocks className="h-5 w-5 text-accent" />;
      case "dsa & problem solving":
        return <Cpu className="h-5 w-5 text-accent" />;
      default:
        return <Compass className="h-5 w-5 text-accent" />;
    }
  };

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="B.Tech Computer Science student passionate about software development, web technologies, and problem solving."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Biography & Bio */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white font-mono">
            {aboutInfo.status}
          </h3>
          <p className="text-stone-400 leading-relaxed text-sm sm:text-base font-sans">
            {personalInfo.longIntro}
          </p>
          
          {/* Current learning focus */}
          <div className="p-4.5 rounded border border-stone-900 bg-stone-925/40 border-l-2 border-l-accent relative overflow-hidden">
            {/* Soft decorative accent glow inside the box */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/4 rounded-full blur-2xl pointer-events-none" />
            
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent mb-2.5 flex items-center gap-2 select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              current_focus
            </h4>
            <p className="text-stone-300 text-sm font-sans leading-relaxed">
              {aboutInfo.currentFocus}
            </p>
          </div>
        </div>

        {/* Competencies */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 mb-1 select-none">
            core_competencies
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            {aboutInfo.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="glow-card p-5 rounded border border-stone-900 bg-stone-925/25 backdrop-blur flex gap-4 items-start group"
              >
                <div className="p-2.5 rounded bg-stone-950 border border-stone-900 text-accent group-hover:border-accent/30 group-hover:text-accent-light transition-all duration-300 shrink-0">
                  {getIcon(area.title)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans mb-1.5 group-hover:text-accent transition-colors duration-300">
                    {area.title}
                  </h4>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
