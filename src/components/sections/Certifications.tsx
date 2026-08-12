"use client";

import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional certificates and technological credentials."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="glow-card rounded-lg p-6 border border-stone-900 bg-stone-925/25 backdrop-blur relative overflow-hidden flex items-start gap-5 group"
          >
            {/* Ambient Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/4 rounded-full blur-xl pointer-events-none" />

            {/* Certificate Icon */}
            <div className="p-2.5 rounded bg-stone-950 border border-stone-900 text-stone-400 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300 shrink-0">
              <Award className="h-5 w-5" />
            </div>

            {/* Certificate Details */}
            <div className="flex-1">
              <h3 className="text-base font-bold text-white font-sans group-hover:text-accent transition-colors duration-300">
                {cert.name}
              </h3>
              <p className="text-xs font-mono font-bold text-accent mt-1 select-none">
                {cert.issuer}
              </p>
              
              <div className="flex flex-col gap-1.5 text-xs text-stone-400 font-sans border-t border-stone-900/60 mt-4 pt-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-stone-500 font-mono">Issued:</span>
                  <span>{cert.date}</span>
                </div>
                {cert.credentialId && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-stone-500 font-mono">Credential:</span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
