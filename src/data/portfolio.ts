export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string; // placeholder URL
  liveUrl?: string; // placeholder URL
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string; // placeholder duration
  description: string[];
}

export interface Education {
  degree: string;
  institution: string; // placeholder institution
  duration: string; // placeholder duration
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string; // placeholder date
  credentialId?: string; // placeholder id
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortIntro: string;
  longIntro: string;
  email: string;
  github: string;
  linkedin: string;
}

export const personalInfo: PersonalInfo = {
  name: "Lalitha mahisri Mallepudi",
  title: "Computer Science Student & Developer",
  shortIntro: "B.Tech Computer Science and Engineering student looking for internships and placements. Focused on building clean, useful software and web applications with a strong foundation in data structures and problem-solving.",
  longIntro: "I am a B.Tech Computer Science and Engineering student passionate about software development and web technologies. I spend my time solving algorithmic problems, building responsive web applications, and exploring backend engineering. Currently, I am looking for internship and placement opportunities where I can contribute to real-world projects and grow as a developer.",
  email: "mailto:lalithamahisri06@gmail.com",
  github: "https://github.com/lalithamahisri",
  linkedin: "https://www.linkedin.com/in/lalitha-mahi-sri-mallepudi-95b4b0326/",
};

export const aboutInfo = {
  status: "B.Tech Computer Science and Engineering Student",
  focusAreas: [
    {
      title: "Software Development",
      description: "Writing clean, maintainable code and applying programming fundamentals to build practical software."
    },
    {
      title: "Web Development",
      description: "Building responsive, modern, and highly interactive user interfaces using Next.js, React, and Tailwind CSS, backed by robust Node.js/Express APIs."
    },
    {
      title: "DSA & Problem Solving",
      description: "Building a strong foundation in Data Structures and Algorithms while practicing problem solving in Java and C."
    }
  ],
  currentFocus: "Currently focusing on Data Structures & Algorithms, full-stack web development, and building practical software projects."
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "C", "JavaScript", "TypeScript", "HTML/CSS"]
  },
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Tools & Version Control",
    skills: ["Git", "GitHub"]
  }
];

export const projects: Project[] = [

  {
    id: "mindcare",
    title: "MindCare",
    description: "A mental wellness tracking application that provides mood tracking, daily journaling, and mindfulness exercises for student mental wellness.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/lalithamahisri/mind_care",
    liveUrl: "https://mind-care-blue-omega.vercel.app/"
  },
  {
    id: "spend-check",
    title: "Spend Check",
    description: "A personal finance and expense tracking tool that visualizes monthly budgets, tracks transactions, and flags unnecessary expenses.",
    techStack: ["TypeScript", "React", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/lalithamahisri/Spend_Check",
    liveUrl: "https://krishitamyneni.github.io/SpendCheck/"
  },
  {
    id: "food-website",
    title: "FoodHub",
    description: "A full-stack food ordering web application featuring a responsive frontend, interactive menu, cart functionality, backend APIs, and MongoDB database integration.",
    techStack: ["HTML/CSS", "JavaScript", "React", "MongoDB", "Node.js", "Express"],
    githubUrl: "https://github.com/lalithamahisri/food-hub",
    liveUrl: "https://food-hub-app-ochre.vercel.app"
  },
  {
    id: "temperature-converter",
    title: "Temperature Converter",
    description: "A clean, functional utility tool that converts temperatures between Celsius, Fahrenheit, and Kelvin in real-time.",
    techStack: ["HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/lalithamahisri/SCT_SD_1"
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    description: "An interactive web app that visualizes the backtracking algorithm used to solve 9x9 Sudoku puzzles instantly.",
    techStack: ["Java", "React", "TypeScript"],
    githubUrl: "https://github.com/lalithamahisri/SCT_SD_3"
  },
  {
    id: "number-guessing-game",
    title: "Number Guessing Game",
    description: "A classic interactive number guessing game featuring difficulty levels, hint generators, and high score tracking.",
    techStack: ["JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/lalithamahisri/SCT_SD_2"
  }
];

export const experience: Experience[] = [
  {
    company: "SkillCraft Technologies",
    role: "Software Development Intern",
    duration: "June 2026 – July 2026",
    description: [
      "Developed responsive web applications using HTML, CSS, and JavaScript as part of internship assignments.",
      "Built projects including a Temperature Converter, Sudoku Solver, and Number Guessing Game.",
      "Implemented interactive features and user-friendly interfaces while improving frontend development skills.",
      "Debugged and tested applications to improve functionality and user experience."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "KL University, Hyderabad",
    duration: "2024 – 2028",
    details: [
      "Relevant Coursework: Data Structures and Algorithms, Database Management Systems (DBMS), Operating Systems, Software Engineering, Computer Networks.",
      "Key Academic Projects: Built several utility and full-stack software web applications."
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "May 19, 2026",
    credentialId: "74895f40fa0f4b0cbff66b59d1605467"
  }
];
