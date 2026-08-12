import React from "react";
import { GitBranch, Link2, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-900 bg-stone-950 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-sm text-stone-500">
            &copy; {currentYear} {personalInfo.name.replace("[", "").replace("]", "") || "Developer"}.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GitBranch className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Link2 className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.email}
            className="text-stone-500 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
