"use client";

import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { projects } from "@/data/portfolio";
import { GitBranch, ExternalLink, FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="A collection of academic, web, and algorithmic projects I have built."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glow-card rounded-lg p-6 flex flex-col justify-between h-full border border-stone-900 bg-stone-925/25 backdrop-blur relative overflow-hidden group"
          >
            {/* Top Row: Icon and Links */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded bg-stone-950 border border-stone-900 text-stone-400 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
                  <FolderGit2 className="h-5 w-5" />
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-stone-950 border border-stone-900 text-stone-400 hover:text-white hover:border-accent/30 transition-all duration-300"
                    aria-label={`View GitHub source code for ${project.title}`}
                  >
                    <GitBranch className="h-4.5 w-4.5" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-stone-950 border border-stone-900 text-stone-400 hover:text-white hover:border-accent/30 transition-all duration-300"
                      aria-label={`View live deployment for ${project.title}`}
                    >
                      <ExternalLink className="h-4.5 w-4.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-white font-sans mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-6 font-sans">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Footer */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-stone-900/60">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-950 border border-stone-900 text-stone-400 group-hover:text-accent/80 group-hover:border-accent/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
