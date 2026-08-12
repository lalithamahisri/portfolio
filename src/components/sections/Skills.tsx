"use client";

import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { skillCategories } from "@/data/portfolio";
import { Terminal, Laptop, Database, Wrench } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "languages":
        return <Terminal className="h-4.5 w-4.5 text-accent" />;
      case "frontend development":
        return <Laptop className="h-4.5 w-4.5 text-accent" />;
      case "backend & database":
        return <Database className="h-4.5 w-4.5 text-accent" />;
      case "tools & version control":
        return <Wrench className="h-4.5 w-4.5 text-accent" />;
      default:
        return <Terminal className="h-4.5 w-4.5 text-accent" />;
    }
  };

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="My technical toolkit categorized by feature area."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((categoryInfo, idx) => (
          <div
            key={idx}
            className="glow-card p-6 rounded border border-stone-900 bg-stone-925/25 backdrop-blur relative overflow-hidden group"
          >
            {/* Ambient Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/4 rounded-full blur-2xl pointer-events-none" />

            {/* Category Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-2 rounded bg-stone-950 border border-stone-900 text-accent group-hover:border-accent/30 group-hover:text-accent-light transition-all duration-350">
                {getCategoryIcon(categoryInfo.category)}
              </div>
              <h3 className="text-xs font-bold tracking-widest text-white uppercase font-mono select-none">
                {categoryInfo.category}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-2.5">
              {categoryInfo.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="px-3 py-1.5 rounded text-xs font-mono font-medium bg-stone-900/40 border border-stone-850 text-stone-300 hover:border-accent/30 hover:bg-accent/5 hover:text-accent transition-all duration-200 cursor-default select-none"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
