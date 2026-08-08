import {
  Project,
  SkillCategory,
  EducationItem,
  ExperienceItem,
  CertificateItem,
  AchievementItem,
  TestimonialItem,
  BlogPost,
  CodingProfile,
  ServiceItem,
  GalleryImage,
  GoalItem
} from '../types';

export const PERSONAL_DETAILS = {
  name: "Nitin Kumar Mandal",
  profileImage: "/profilepic.jpeg",
  roles: [
    "Computer Science Engineering Student",
    "Full-Stack Web Developer",
    "AI & Cybersecurity Enthusiast"
  ],
  tagline: "Building Ideas Into Reality.",
  bio: "I am Nitin Kumar Mandal, a Computer Science & Engineering student at Symbiosis Institute of Technology (SIT), Pune. I am passionate about building web applications, exploring AI and cybersecurity, and turning ideas into practical digital solutions.",
  hometown: "Janakpur, Dhanusha, Nepal",
  currentLocation: "Pune, Maharashtra, India",
  institute: "Symbiosis Institute of Technology (SIT), Pune",
  degree: "Bachelor of Technology in Computer Science & Engineering",
  email: "er.nitinkumar217@gmail.com",
  phone: "+977 9817885318",
  githubUsername: "nitin-0x01",
  githubUrl: "https://github.com/nitin-0x01",
  linkedinUrl: "https://www.linkedin.com/in/nitin-mandal-tech",
  instagramUrl: "https://instagram.com/nitin0x01",
  twitterUrl: "https://x.com/nitin0x01",
  websiteUrl: "https://nitinkumarmandal.com.np",
  leetcodeUrl: ""
};

export const EDUCATION_DATA = [
  {
    institution: "Symbiosis Institute of Technology (SIT), Pune",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2025 - 2029",
    description: "Focusing on Software Engineering, Web Development, Algorithmic Foundations, Artificial Intelligence, and Cybersecurity.",
    status: "In Progress"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Tailwind CSS"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Firebase", "Android Studio"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "Firebase / Firestore", "MongoDB"]
  },
  {
    category: "Areas of Interest",
    skills: ["Full-Stack Web Development", "Artificial Intelligence", "Cybersecurity", "Software Development", "UI/UX Design"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "ride-together",
    title: "RideTogether",
    description: "A group travel coordination and carpooling platform designed to simplify ride sharing and logistics for campus groups.",
    techStack: ["React", "Android Studio", "Firebase", "Firestore", "Tailwind CSS"],
    githubUrl: "https://github.com/nitin-0x01/RideTogether",
    liveUrl: "",
    featured: true
  },
  {
    id: "campus-pulse",
    title: "CampusPulse",
    description: "A web-based hostel management system featuring administrative dashboards, student activity tracking, and request handling.",
    techStack: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/sandycodes2205/CampusPulse",
    liveUrl: "",
    featured: true
  },
  {
    id: "nepse-calculator",
    title: "NEPSE Calculator",
    description: "A financial utility tool designed for technical analysis, stock profit calculations, and transaction fee estimations for NEPSE trading.",
    techStack: ["JavaScript", "HTML5", "CSS3", "React"],
    githubUrl: "https://github.com/nitin-0x01/Nepse-Calculator",
    liveUrl: "",
    featured: true
  },
  {
    id: "biyaj-calculator",
    title: "Biyaj Calculator",
    description: "A financial interest calculation tool built to compute compound and simple interest rates tailored for local financial modeling.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/nitin-0x01",
    liveUrl: "",
    featured: false
  },
  {
    id: "dhanusha-science-campus",
    title: "Dhanusha Science Campus Portal",
    description: "A modern college web portal concept containing academic details, department portals, facilities, and notice boards.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/nitin-0x01/Dhanusha",
    liveUrl: "",
    featured: false
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "A modern developer portfolio showcasing real projects, skills, education, and links with custom domain deployment.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/nitin-0x01/nitin-0x01.github.io",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: false
  }
];

export const ACHIEVEMENTS_DATA = [
  "B.Tech Computer Science & Engineering student at Symbiosis Institute of Technology (SIT), Pune.",
  "Designed and deployed RideTogether (Group Travel Coordination App) and CampusPulse (Hostel Management System).",
  "Built financial analysis utilities including NEPSE Calculator and Biyaj Calculator.",
  "Developed and maintained an active personal developer portfolio with custom domain integration.",
  "Hands-on expertise across full-stack development tools including React, TypeScript, Firebase, and Android Studio."
];
