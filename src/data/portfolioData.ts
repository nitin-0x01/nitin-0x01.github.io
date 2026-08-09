export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const PERSONAL_DETAILS = {
  name: "Nitin Kumar Mandal",
  profileImage: "/profilepic.jpeg",
  statusMessage: "Available for Projects & Collaboration",
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
  leetcodeUrl: "https://leetcode.com"
};

export const EDUCATION_DATA = [
  {
    institution: "Symbiosis Institute of Technology (SIT), Pune",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2025 - 2029",
    description: "Focusing on Software Engineering, Web Development, Algorithmic Foundations, Artificial Intelligence, and Cybersecurity.",
    status: "In Progress",
    courses: [
      "Data Structures & Algorithms",
      "Object Oriented Programming (Java/C++)",
      "Database Management Systems"
    ],
    highlights: [
      "Core Computer Science & Engineering Curriculum",
      "Symbiosis Institute of Technology (SIT), Pune"
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    name: "Programming Languages",
    skills: [
      { name: "C", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" }
    ],
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Web Development",
    name: "Web Development",
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" }
    ],
    items: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Tailwind CSS"]
  },
  {
    category: "Tools & Technologies",
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vite", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
      { name: "Android Studio", level: "Intermediate" }
    ],
    items: ["Git", "GitHub", "VS Code", "Vite", "Firebase", "Android Studio"]
  },
  {
    category: "Databases",
    name: "Databases",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "Firebase / Firestore", level: "Intermediate" },
      { name: "MongoDB", level: "Learning" }
    ],
    items: ["MySQL", "Firebase / Firestore", "MongoDB"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "ride-together",
    title: "RideTogether",
    description: "Group travel coordination and carpooling platform.",
    techStack: ["React", "Android Studio", "Firebase"],
    technologies: ["React", "Android Studio", "Firebase"],
    githubUrl: "https://github.com/nitin-0x01/RideTogether",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: true
  },
  {
    id: "campus-pulse",
    title: "CampusPulse",
    description: "Web-based hostel management system.",
    techStack: ["React", "Node.js", "Firebase", "Tailwind"],
    technologies: ["React", "Node.js", "Firebase", "Tailwind"],
    githubUrl: "https://github.com/sandycodes2205/CampusPulse",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: true
  },
  {
    id: "nepse-calculator",
    title: "NEPSE Calculator",
    description: "Financial utility tool for NEPSE trading analysis.",
    techStack: ["JavaScript", "HTML5", "React"],
    technologies: ["JavaScript", "HTML5", "React"],
    githubUrl: "https://github.com/nitin-0x01/Nepse-Calculator",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: true
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "SIT Pune Engineering Student",
    description: "B.Tech Computer Science & Engineering.",
    date: "2025 - Present"
  }
];

export const EXPERIENCE_DATA = [
  {
    company: "Academic Projects & Development",
    role: "Full-Stack Developer",
    duration: "2025 - Present",
    description: [
      "Architected and built full-stack applications including RideTogether, CampusPulse, and NEPSE Calculator.",
      "Integrated React, Node.js, Firebase, and Tailwind CSS for scalable web and mobile solutions.",
      "Engineered financial tools like Biyaj Calculator and custom campus portals."
    ],
    technologies: ["React", "TypeScript", "Firebase", "Node.js", "Tailwind CSS"]
  }
];

export const EXPERIENCE = EXPERIENCE_DATA;

export const STATS_DATA = {
  projectsCompleted: 6,
  yearsExperience: 2,
  githubContributions: 250,
  technologiesMastered: 12
};

export const CERTIFICATES_DATA = [];
export const CODING_PROFILES_DATA = [];
export const TESTIMONIALS_DATA = [];
export const BLOGS_DATA = [];
export const SERVICES_DATA = [];
export const GALLERY_DATA = [];
export const GOALS_DATA = [];

export const SKILLS_DATA = SKILL_CATEGORIES;
export const PROJECTS = PROJECTS_DATA;
export const EDUCATION = EDUCATION_DATA;
export const ACHIEVEMENTS = ACHIEVEMENTS_DATA;
export const CERTIFICATES = CERTIFICATES_DATA;
export const STATS = STATS_DATA;