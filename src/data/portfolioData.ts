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
    status: "In Progress"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    name: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Web Development",
    name: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Tailwind CSS"],
    items: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Tailwind CSS"]
  },
  {
    category: "Tools & Technologies",
    name: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Firebase", "Android Studio"],
    items: ["Git", "GitHub", "VS Code", "Vite", "Firebase", "Android Studio"]
  },
  {
    category: "Databases",
    name: "Databases",
    skills: ["MySQL", "Firebase / Firestore", "MongoDB"],
    items: ["MySQL", "Firebase / Firestore", "MongoDB"]
  },
  {
    category: "Areas of Interest",
    name: "Areas of Interest",
    skills: ["Full-Stack Web Development", "Artificial Intelligence", "Cybersecurity", "Software Development", "UI/UX Design"],
    items: ["Full-Stack Web Development", "Artificial Intelligence", "Cybersecurity", "Software Development", "UI/UX Design"]
  }
];

export const SKILLS_DATA = SKILL_CATEGORIES;

export const PROJECTS_DATA = [
  {
    id: "ride-together",
    title: "RideTogether",
    description: "A group travel coordination and carpooling platform designed to simplify ride sharing and logistics for campus groups.",
    techStack: ["React", "Android Studio", "Firebase", "Firestore", "Tailwind CSS"],
    technologies: ["React", "Android Studio", "Firebase", "Firestore", "Tailwind CSS"],
    githubUrl: "https://github.com/nitin-0x01/RideTogether",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: true
  },
  {
    id: "campus-pulse",
    title: "CampusPulse",
    description: "A web-based hostel management system featuring administrative dashboards, student activity tracking, and request handling.",
    techStack: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    technologies: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/sandycodes2205/CampusPulse",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: true
  },
  {
    id: "nepse-calculator",
    title: "NEPSE Calculator",
    description: "A financial utility tool designed for technical analysis, stock profit calculations, and transaction fee estimations for NEPSE trading.",
    techStack: ["JavaScript", "HTML5", "CSS3", "React"],
    technologies: ["JavaScript", "HTML5", "CSS3", "React"],
    githubUrl: "https://github.com/nitin-0x01/Nepse-Calculator",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: true
  },
  {
    id: "biyaj-calculator",
    title: "Biyaj Calculator",
    description: "A financial interest calculation tool built to compute compound and simple interest rates tailored for local financial modeling.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/nitin-0x01",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: false
  },
  {
    id: "dhanusha-science-campus",
    title: "Dhanusha Science Campus Portal",
    description: "A modern college web portal concept containing academic details, department portals, facilities, and notice boards.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/nitin-0x01/Dhanusha",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: false
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "A modern developer portfolio showcasing real projects, skills, education, and links with custom domain deployment.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/nitin-0x01/nitin-0x01.github.io",
    liveUrl: "https://nitinkumarmandal.com.np",
    featured: false
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "SIT Pune Engineering Student",
    description: "B.Tech Computer Science & Engineering student at Symbiosis Institute of Technology, Pune.",
    date: "2025 - Present"
  },
  {
    title: "Full-Stack Project Architect",
    description: "Designed and deployed RideTogether (Group Travel App) and CampusPulse (Hostel System).",
    date: "2026"
  },
  {
    title: "Financial Utility Developer",
    description: "Built stock analysis tools including NEPSE Calculator and Biyaj Calculator.",
    date: "2026"
  }
];

export const EXPERIENCE_DATA = [
  {
    company: "Personal Projects & Academic Development",
    role: "Full-Stack Developer",
    duration: "2025 - Present",
    description: "Architected and built full-stack applications including RideTogether, CampusPulse, and NEPSE Calculator using React, Node.js, and Firebase.",
    technologies: ["React", "TypeScript", "Firebase", "Node.js"]
  }
];

export const CERTIFICATES_DATA = [
  {
    title: "B.Tech Computer Science & Engineering",
    issuer: "Symbiosis Institute of Technology (SIT), Pune",
    date: "2025 - 2029",
    url: "https://nitinkumarmandal.com.np"
  }
];

export const CODING_PROFILES_DATA = [
  {
    platform: "GitHub",
    username: "nitin-0x01",
    url: "https://github.com/nitin-0x01"
  },
  {
    platform: "LeetCode",
    username: "nitin-0x01",
    url: "https://leetcode.com"
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: "Academic Peer",
    role: "Developer",
    content: "Collaborated on core software and web projects.",
    avatar: "/profilepic.jpeg"
  }
];

export const BLOGS_DATA = [
  {
    title: "Building Full Stack Apps",
    date: "2026",
    summary: "Insights into modern Web Dev and React architectures.",
    tags: ["React", "WebDev"],
    url: "https://nitinkumarmandal.com.np"
  }
];

export const SERVICES_DATA = [
  {
    title: "Web Development",
    description: "Building modern responsive web applications.",
    icon: "code"
  }
];

export const GALLERY_DATA = [
  {
    title: "Portfolio Development",
    image: "/profilepic.jpeg",
    category: "Development"
  }
];

export const GOALS_DATA = [
  {
    goal: "Master Advanced Software Systems & Cybersecurity",
    status: "In Progress"
  }
];

// Structural Aliases
export const PROJECTS = PROJECTS_DATA;
export const EDUCATION = EDUCATION_DATA;
export const EXPERIENCE = EXPERIENCE_DATA;
export const ACHIEVEMENTS = ACHIEVEMENTS_DATA;
export const CERTIFICATES = CERTIFICATES_DATA;
export const SKILLS = SKILLS_DATA;
export const SERVICES = SERVICES_DATA;
export const BLOGS = BLOGS_DATA;
export const TESTIMONIALS = TESTIMONIALS_DATA;