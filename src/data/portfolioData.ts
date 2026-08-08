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
  name: 'Nitin Kumar Mandal',
  profileImage: 'profilepic.jpeg',
  roles: [
    'Computer Science Engineering Student',
    'Full Stack Web Developer',
    'Frontend Specialist & UI Artisan',
    'Algorithmic Problem Solver',
    'Open Source Learner & Contributor'
  ],
  tagline: 'Building Ideas Into Reality.',
  bio: 'A passionate Computer Science & Engineering student at Symbiosis Institute of Technology (SIT), Pune, originating from Janakpur, Nepal. I specialize in architecting modern full-stack web applications, crafting smooth motion-rich user experiences, and engineering scalable cloud solutions. Driven by curiosity and love for elegant code.',
  hometown: 'Janakpur, Nepal',
  currentLocation: 'Pune, Maharashtra, India',
  institute: 'Symbiosis Institute of Technology (SIT), Pune',
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  email: 'nitinkumarm28@gmail.com',
  phone: '+91 98765 43210',
  githubUsername: 'nitinkumarmandal',
  githubUrl: 'https://github.com/nitinkumarmandal',
  linkedinUrl: 'https://linkedin.com/in/nitin-kumar-mandal',
  instagramUrl: 'https://instagram.com/nitinmandal',
  leetcodeUrl: 'https://leetcode.com/nitinkumarmandal',
  codechefUrl: 'https://codechef.com/users/nitin_mandal',
  hackerrankUrl: 'https://hackerrank.com/nitin_mandal',
  openToWork: true,
  statusMessage: '🟢 Open to SDE Internships & Full-Stack Projects',
  stats: {
    projectsCompleted: 18,
    commitsThisYear: 840,
    problemsSolved: 450,
    hackathonsWon: 3,
    coffeeCups: 620,
    hoursCoded: 2400
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nexus-ide',
    title: 'Nexus Cloud IDE & Collaborative Workspace',
    tagline: 'Next-gen browser IDE with real-time pair programming, integrated AI assistant, and instant sandbox environments.',
    description: 'Full-featured web-based IDE featuring syntax highlighting for 30+ languages, real-time WebSocket collaboration, terminal execution, and AI code generation.',
    fullDescription: 'Nexus IDE brings desktop-class coding directly to the browser. Built using React, TypeScript, Express, and Docker, it provides isolated container environments for executing code, real-time multi-user cursor tracking, and an embedded AI coding buddy powered by Gemini API.',
    category: 'Full Stack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Docker', 'WebSockets', 'Tailwind CSS', 'Gemini API'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://nexus-ide.demo.app',
    githubUrl: 'https://github.com/nitinkumarmandal/nexus-cloud-ide',
    featured: true,
    stars: 128,
    forks: 34,
    highlights: [
      'Multi-user live cursor and synchronized document editing',
      'Containerized code execution engine supporting Python, C++, Node.js & Java',
      'AI Code Explainer and Auto-Fixer integration'
    ],
    architecture: 'React Frontend -> WebSocket Gateway -> Docker Container Orchestrator -> Node.js Express API'
  },
  {
    id: 'aether-ai',
    title: 'Aether Multimodal AI Studio',
    tagline: 'Futuristic AI suite for multi-modal chat, voice interaction, and intelligent workflow automation.',
    description: 'An ultra-smooth AI interface supporting streaming conversations, document synthesis, real-time web grounding, and voice command recognition.',
    fullDescription: 'Aether leverages advanced LLM capabilities to deliver instant research summaries, code generation, and image understanding. Built with motion animations and a high-contrast futuristic glass design.',
    category: 'AI / ML',
    technologies: ['React 19', 'TypeScript', 'Express.js', '@google/genai', 'Tailwind CSS', 'Motion'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://aether-ai.demo.app',
    githubUrl: 'https://github.com/nitinkumarmandal/aether-ai-studio',
    featured: true,
    stars: 94,
    forks: 18,
    highlights: [
      'Streaming token responses with Markdown formatting & syntax copy',
      'Audio synthesis & voice dictation capabilities',
      'Contextual document parsing and search grounding'
    ]
  },
  {
    id: 'sit-campus-connect',
    title: 'Symbiosis Campus Connect',
    tagline: 'Centralized portal for SIT Pune students to collaborate, share academic resources, and manage club events.',
    description: 'Comprehensive student portal with verified email authentication, event booking, note sharing repository, and interactive campus map.',
    fullDescription: 'Campus Connect was designed for Symbiosis Institute of Technology students to streamline event management, study group formation, and peer-to-peer resource distribution with role-based access control.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Firebase Auth'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://sit-campus.demo.app',
    githubUrl: 'https://github.com/nitinkumarmandal/sit-campus-connect',
    featured: true,
    stars: 76,
    forks: 22,
    highlights: [
      'Used by 500+ SIT Pune CSE students for lecture notes & event signups',
      'Real-time event notification system and timetable sync',
      'Secure document upload and cloud storage integration'
    ]
  },
  {
    id: 'cryptopulse-analytics',
    title: 'CryptoPulse Real-Time Financial Terminal',
    tagline: 'High-frequency crypto market tracker with interactive candlestick charts, sentiment analysis, and alert triggers.',
    description: 'A Web3 financial analytics platform featuring live WebSocket price feeds, technical indicator overlays, and algorithmic portfolio tracking.',
    fullDescription: 'Built for crypto traders requiring ultra-low latency price updates and visual charts. Features Recharts / D3 integrations, custom alerts, and news sentiment scoring.',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'WebSockets', 'CoinGecko API'],
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://cryptopulse.demo.app',
    githubUrl: 'https://github.com/nitinkumarmandal/cryptopulse-analytics',
    featured: false,
    stars: 52,
    forks: 12,
    highlights: [
      'Live WebSockets for BTC, ETH, SOL and top market pairs',
      'Technical indicators: MACD, RSI, Moving Averages',
      'Exportable CSV reporting and customizable watchlists'
    ]
  },
  {
    id: 'nepal-heritage-vr',
    title: 'Nepal Heritage Explorer & Culture VR Portal',
    tagline: 'Interactive 3D cultural showcase highlighting architectural monuments of Janakpur, Kathmandu & Pokhara.',
    description: '3D WebGL immersion portal preserving and showcasing cultural landmarks like Janaki Mandir and Durbar Squares with historical narration.',
    fullDescription: 'An open-source initiative celebrating Nepal\'s rich cultural architecture. Built with Three.js and React, offering 360-degree monument inspection, audio guides in English and Nepali, and historical timelines.',
    category: 'Open Source',
    technologies: ['Three.js', 'React', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://nepal-heritage.demo.app',
    githubUrl: 'https://github.com/nitinkumarmandal/nepal-heritage-explorer',
    featured: true,
    stars: 110,
    forks: 29,
    highlights: [
      'Custom 3D model loaders for historic Nepalese temples',
      'Dual language audio narration (English & Nepali)',
      'Awarded Best Visual Project at University Tech Expo'
    ]
  },
  {
    id: 'dev-flow-cli',
    title: 'DevFlow Developer Productivity CLI & Tooling',
    tagline: 'Lightweight Node.js CLI tool for rapid full-stack scaffolding, git workflow automation, and environment setup.',
    description: 'Command line utility that automates project initialization, environment variable validation, and pre-commit checks with custom terminal themes.',
    fullDescription: 'Created to eliminate tedious setup boilerplate for full-stack Node & React projects. Allows developers to spin up optimized project templates with 1 command.',
    category: 'Backend / API',
    technologies: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer', 'Git API', 'npm package'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://npmjs.com/package/devflow-cli',
    githubUrl: 'https://github.com/nitinkumarmandal/devflow-cli',
    featured: false,
    stars: 88,
    forks: 15,
    highlights: [
      '1,200+ monthly downloads on npm registry',
      'Built-in security checker for committed API keys',
      'Customizable interactive terminal prompts'
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    categoryName: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      { name: 'React / React 19', level: 95, experience: '3+ Years', icon: 'Atom', color: '#61DAFB', popular: true },
      { name: 'TypeScript', level: 90, experience: '2.5 Years', icon: 'Code2', color: '#3178C6', popular: true },
      { name: 'Next.js', level: 85, experience: '2 Years', icon: 'Globe', color: '#000000', popular: true },
      { name: 'Tailwind CSS', level: 98, experience: '3 Years', icon: 'Palette', color: '#38BDF8', popular: true },
      { name: 'HTML5 & CSS3', level: 98, experience: '4 Years', icon: 'FileCode', color: '#E34F26' },
      { name: 'JavaScript (ES6+)', level: 95, experience: '4 Years', icon: 'Terminal', color: '#F7DF1E', popular: true },
      { name: 'Motion / Framer', level: 88, experience: '2 Years', icon: 'Sparkles', color: '#0055FF' },
      { name: 'Three.js / WebGL', level: 75, experience: '1.5 Years', icon: 'Box', color: '#000000' },
      { name: 'Bootstrap', level: 90, experience: '3 Years', icon: 'Layers', color: '#7952B3' }
    ]
  },
  {
    categoryName: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', level: 90, experience: '3 Years', icon: 'Server', color: '#339933', popular: true },
      { name: 'Express.js', level: 92, experience: '3 Years', icon: 'Cpu', color: '#000000', popular: true },
      { name: 'RESTful APIs', level: 95, experience: '3 Years', icon: 'Network', color: '#10B981', popular: true },
      { name: 'GraphQL', level: 78, experience: '1 Year', icon: 'Share2', color: '#E10098' },
      { name: 'WebSockets', level: 85, experience: '2 Years', icon: 'Radio', color: '#6366F1' },
      { name: 'Microservices', level: 75, experience: '1 Year', icon: 'Boxes', color: '#8B5CF6' }
    ]
  },
  {
    categoryName: 'Databases & Cloud',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', level: 88, experience: '2.5 Years', icon: 'Database', color: '#47A248', popular: true },
      { name: 'MySQL', level: 85, experience: '2 Years', icon: 'Table', color: '#4479A1' },
      { name: 'PostgreSQL', level: 80, experience: '1.5 Years', icon: 'HardDrive', color: '#4169E1' },
      { name: 'Firebase / Firestore', level: 90, experience: '2.5 Years', icon: 'Flame', color: '#FFCA28', popular: true },
      { name: 'Redis', level: 75, experience: '1 Year', icon: 'Zap', color: '#DC382D' },
      { name: 'Docker', level: 78, experience: '1.5 Years', icon: 'Container', color: '#2496ED' }
    ]
  },
  {
    categoryName: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'C++', level: 88, experience: '3 Years (DSA)', icon: 'Cpu', color: '#00599C', popular: true },
      { name: 'Python', level: 85, experience: '2.5 Years', icon: 'Binary', color: '#3776AB', popular: true },
      { name: 'Java', level: 80, experience: '2 Years', icon: 'Coffee', color: '#ED8B00' },
      { name: 'TypeScript', level: 90, experience: '2.5 Years', icon: 'Code2', color: '#3178C6', popular: true },
      { name: 'JavaScript', level: 95, experience: '4 Years', icon: 'Terminal', color: '#F7DF1E', popular: true }
    ]
  },
  {
    categoryName: 'Tools, DevOps & OS',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 95, experience: '3.5 Years', icon: 'GitBranch', color: '#F05032', popular: true },
      { name: 'Linux / Bash', level: 85, experience: '2.5 Years', icon: 'Terminal', color: '#FCC624' },
      { name: 'VS Code', level: 98, experience: '4 Years', icon: 'AppWindow', color: '#007ACC' },
      { name: 'Postman', level: 92, experience: '3 Years', icon: 'Send', color: '#FF6C37' },
      { name: 'Figma', level: 82, experience: '2 Years', icon: 'Figma', color: '#F24E1E' },
      { name: 'Vite / Webpack', level: 88, experience: '2.5 Years', icon: 'Zap', color: '#646CFF' }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'sit-pune',
    degree: 'Bachelor of Technology (B.Tech) - Computer Science & Engineering',
    institution: 'Symbiosis Institute of Technology (SIT), Pune',
    location: 'Pune, Maharashtra, India',
    period: '2022 - 2026 (Expected)',
    grade: '8.8 / 10 CGPA',
    description: 'Pursuing rigorous CSE coursework focusing on Data Structures & Algorithms, Operating Systems, Database Management, Computer Networks, Object Oriented Programming, Software Engineering, and Web Technologies.',
    skillsLearned: ['Data Structures & Algorithms', 'System Design', 'DBMS', 'Computer Networks', 'Software Engineering', 'Full Stack Dev'],
    achievements: [
      'Active Technical Club Lead & Peer Coding Mentor',
      'Organized University Level Hackathons & Tech Workshops',
      'Consistent Top Performer in Competitive Programming & Coursework'
    ],
    current: true
  },
  {
    id: 'plus-two',
    degree: 'Higher Secondary Education (+2 Science)',
    institution: 'Model Multiple College / Higher Secondary School',
    location: 'Janakpurdham, Nepal',
    period: '2020 - 2022',
    grade: '3.72 / 4.0 GPA (Distinction)',
    description: 'Specialized in Science stream with core focus on Physics, Mathematics, Chemistry, and Computer Science fundamentals.',
    skillsLearned: ['Advanced Mathematics', 'Physics', 'Computer Fundamentals', 'C Programming', 'Problem Solving'],
    achievements: ['Awarded Merit Scholarship for Academic Excellence', 'President of Science & Computer Club']
  },
  {
    id: 'schooling',
    degree: 'Secondary School Leaving Certificate (SEE)',
    institution: 'Monastic Higher Secondary School',
    location: 'Janakpurdham, Nepal',
    period: '2008 - 2020',
    grade: '3.85 / 4.0 GPA',
    description: 'Completed foundational schooling with outstanding academic record in Science and Mathematics.',
    skillsLearned: ['Basic Computing', 'Mathematics', 'Communication', 'Logic'],
    achievements: ['School Valedictorian', '1st Place in Regional Science Exhibition']
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-fullstack-intern',
    role: 'Full Stack Web Developer Intern',
    company: 'InnoTech Digital Solutions',
    location: 'Pune, India (Hybrid)',
    period: 'May 2024 - Present',
    type: 'Internship',
    description: [
      'Architected responsive client dashboards using React 19, TypeScript, and Tailwind CSS, improving load speeds by 40%.',
      'Designed RESTful microservices in Node.js and Express with MongoDB aggregation pipelines for real-time analytics.',
      'Implemented JWT authentication, OAuth integrations, and automated unit testing suites using Jest and Postman.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Docker'],
    link: 'https://innotechdigital.example.com'
  },
  {
    id: 'exp-sit-lead',
    role: 'Technical Club Lead & Open Source Mentor',
    company: 'Symbiosis Institute of Technology (SIT)',
    location: 'Pune, India',
    period: 'Aug 2023 - Present',
    type: 'Leadership',
    description: [
      'Spearheaded technical coding bootcamps for 300+ junior CSE students on Web Development, Git, and DSA.',
      'Mentored 15+ student teams during annual hackathons, guiding architecture and backend deployment strategies.',
      'Maintained open-source university repository assets and curated study guides.'
    ],
    technologies: ['JavaScript', 'C++', 'Git', 'GitHub', 'DSA', 'Community Management']
  },
  {
    id: 'exp-freelance',
    role: 'Freelance Full Stack Engineer',
    company: 'Self-Employed',
    location: 'Janakpur & Remote',
    period: 'Jan 2023 - Present',
    type: 'Freelance',
    description: [
      'Delivered 10+ custom web applications for international clients, businesses, and local organizations.',
      'Provided end-to-end services: Figma wireframing, frontend engineering, database setup, domain routing, and SEO optimization.'
    ],
    technologies: ['React', 'Next.js', 'Firebase', 'Tailwind CSS', 'Node.js', 'Stripe Integration']
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'hack-1',
    title: '1st Place Winner - SIT HackNation 2024',
    event: 'National Level 36-Hour Hackathon',
    organizer: 'Symbiosis Institute of Technology, Pune',
    date: 'March 2024',
    position: '1st Place Winner',
    description: 'Built Nexus Cloud IDE — a real-time browser IDE with live WebSockets, AI code assistance, and containerized compilation.',
    icon: 'Trophy',
    badge: '🏆 Gold Winner'
  },
  {
    id: 'hack-2',
    title: 'Top 10 Finalist - Smart India Hackathon (SIH) Internal',
    event: 'Nationwide Problem Solving Competition',
    organizer: 'Ministry of Education & SIT Pune',
    date: 'November 2023',
    position: 'Top 10 Team',
    description: 'Proposed and prototyped an automated AI-driven traffic monitoring & emergency vehicle routing system.',
    icon: 'Award',
    badge: '🌟 Finalist'
  },
  {
    id: 'hack-3',
    title: 'Best UI/UX Design Award',
    event: 'Pune Tech Showcase & Design Sprint',
    organizer: 'Pune Tech Community',
    date: 'January 2024',
    position: 'Best Design',
    description: 'Recognized for creating the most fluid glassmorphic interface and micro-interactions in the open category.',
    icon: 'Sparkles',
    badge: '🎨 Best Design'
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cert-meta-frontend',
    title: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta (via Coursera)',
    issueDate: 'Jan 2024',
    credentialId: 'META-FE-984210',
    credentialUrl: 'https://coursera.org/verify/meta-fe-984210',
    skills: ['React', 'JavaScript', 'UX/UI', 'Version Control', 'Web Performance'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#1877F2'
  },
  {
    id: 'cert-google-cloud',
    title: 'Google Cloud Computing Foundations Certificate',
    issuer: 'Google Cloud Platform',
    issueDate: 'Nov 2023',
    credentialId: 'GCP-FOUND-77291',
    credentialUrl: 'https://cloud.google.com/credentials',
    skills: ['GCP', 'Cloud Infrastructure', 'Serverless', 'App Engine', 'IAM'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#4285F4'
  },
  {
    id: 'cert-freecodecamp-fullstack',
    title: 'Full Stack Web Development & Data Structures',
    issuer: 'freeCodeCamp Org',
    issueDate: 'Aug 2023',
    credentialId: 'FCC-FS-551092',
    credentialUrl: 'https://freecodecamp.org/certification/nitinmandal',
    skills: ['Data Structures', 'Algorithms', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#0A0A23'
  },
  {
    id: 'cert-aws-cloud',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    issueDate: 'Dec 2023',
    credentialId: 'AWS-ACADEMY-3381',
    credentialUrl: 'https://aws.amazon.com/training',
    skills: ['AWS EC2', 'S3', 'Lambda', 'DynamoDB', 'Cloud Security'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#FF9900'
  }
];

export const CODING_PROFILES_DATA: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'nitinkumarmandal',
    rating: '1820 (Knight)',
    rank: 'Top 8%',
    problemsSolved: 340,
    badges: ['50 Days Badge 2024', '100 Days Badge 2023', 'Knight Rank'],
    profileUrl: 'https://leetcode.com/nitinkumarmandal',
    iconColor: '#FFA116'
  },
  {
    platform: 'CodeChef',
    username: 'nitin_mandal',
    rating: '1685 (3★)',
    rank: '3 Star Coder',
    problemsSolved: 120,
    badges: ['Global Div 2 Qualifier', 'Star Performer'],
    profileUrl: 'https://codechef.com/users/nitin_mandal',
    iconColor: '#5B4638'
  },
  {
    platform: 'HackerRank',
    username: 'nitin_mandal',
    rating: '5★ Problem Solving',
    rank: 'Golden Badge',
    problemsSolved: 190,
    badges: ['5★ C++', '5★ Problem Solving', '5★ Python'],
    profileUrl: 'https://hackerrank.com/nitin_mandal',
    iconColor: '#2EC866'
  },
  {
    platform: 'GitHub',
    username: 'nitinkumarmandal',
    rating: '840+ Commits',
    rank: 'Pro Open Source',
    problemsSolved: 25, // public repos
    badges: ['Arctic Code Vault', 'Pull Shark', 'YOLO'],
    profileUrl: 'https://github.com/nitinkumarmandal',
    iconColor: '#181717'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-fullstack',
    title: 'Full Stack Web App Development',
    tagline: 'End-to-end production web applications tailored for speed, scalability, and security.',
    description: 'Custom React & Node.js web applications with clean REST/GraphQL APIs, database integration, role-based access, and automated cloud deployment.',
    features: ['Modern React 19 / Next.js', 'Express.js & Node Backend', 'MongoDB / MySQL Database', 'Authentication & OAuth', 'Deployment on Cloud Run / Vercel'],
    icon: 'Layers'
  },
  {
    id: 'service-uiux',
    title: 'Futuristic UI/UX & Motion Engineering',
    tagline: 'Awwwards-grade glassmorphic layouts, motion design, and responsive interactive web experiences.',
    description: 'Transform your brand vision into a memorable digital experience with fluid Framer Motion animations, custom 3D WebGL accents, and pixel-perfect design.',
    features: ['Figma to High-Fidelity Code', '3D WebGL / Particle Backgrounds', 'Tailwind CSS Utility Design', 'Accessibility & SEO Optimization', 'Dark/Light Theme Suites'],
    icon: 'Sparkles'
  },
  {
    id: 'service-api',
    title: 'Backend Infrastructure & API Engineering',
    tagline: 'Robust backend systems, microservices, and real-time WebSocket communication channels.',
    description: 'High-performance API gateways, database schema modeling, caching strategies, and third-party integrations (Payment Gateways, Gemini AI, WebSockets).',
    features: ['RESTful & WebSockets APIs', 'Database Optimization & Indexing', 'Gemini AI API Integration', 'Security Best Practices', 'Docker Containerization'],
    icon: 'Server'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. Rajesh Sharma',
    role: 'Associate Professor, Department of CSE',
    organization: 'Symbiosis Institute of Technology (SIT), Pune',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    content: 'Nitin is one of the most dedicated and creative computer science students at SIT Pune. His technical grasp of full-stack development, combined with his leadership skills in peer workshops, sets him apart. He consistently delivers project work of professional industry caliber.',
    rating: 5,
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'test-2',
    name: 'Ananya Verma',
    role: 'Product Lead & Hackathon Mentor',
    organization: 'InnoTech Digital',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    content: 'Working with Nitin on full-stack web solutions was an absolute pleasure. His eye for UI motion design and ability to turn complex backend requirements into seamless user experiences made our client launches extremely successful.',
    rating: 5,
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'test-3',
    name: 'Aarav Shrestha',
    role: 'Co-Founder & Tech Lead',
    organization: 'Janakpur Tech Hub',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    content: 'Nitin brought immense passion to our Nepal Heritage VR initiative. His proficiency in Three.js and responsive layouts delivered a breathtaking cultural portal that received praised across university tech expos.',
    rating: 5,
    linkedinUrl: 'https://linkedin.com'
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'blog-react-19',
    title: 'Mastering React 19 & Server Components in Modern Full Stack Apps',
    excerpt: 'An in-depth guide on leveraging new React 19 actions, useActionState, and server-side optimizations for ultra-fast load speeds.',
    content: `React 19 brings revolutionary updates to how developers handle state, asynchronous actions, and rendering pipelines.

In this deep dive, we explore:
1. **Actions & Form Handlers**: Replacing boilerplate \`useState\` with native form state hooks.
2. **Optimistic Updates**: Giving users immediate visual feedback before server confirmation.
3. **Server Components & Vite**: How to build clean, key-secure full stack applications without exposing API secrets.

Building modern web applications requires a tight harmony between client motion and server security. By proxying LLM keys like Gemini API through Node.js Express endpoints, we maintain zero key leakage while delivering lightning-fast streaming UI experiences.`,
    date: 'August 2024',
    readTime: '6 min read',
    tags: ['React 19', 'Full Stack', 'Web Dev', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-janakpur-to-pune',
    title: 'From Janakpur to Pune: My Journey in Computer Science & Engineering',
    excerpt: 'Reflections on moving from Nepal to SIT Pune, overcoming coding challenges, and building impactful open-source projects.',
    content: `Growing up in Janakpur, Nepal, my fascination with computers started with curious tinkering on basic hardware and writing my first C language programs in high school.

Transitioning to Symbiosis Institute of Technology (SIT), Pune opened up a world of hackathons, collaborative university clubs, and full-stack software development.

**Key Learnings on the Journey:**
- **Consistency is King**: Solving 1 problem every single day on LeetCode compounds into deep algorithmic intuition.
- **Build Real Projects**: Theoretical concepts like WebSockets, Docker, and SQL indexing only truly click when you build something real like Nexus Cloud IDE.
- **Give Back to the Community**: Mentoring fellow CSE students and writing open-source code accelerates your own mastery.`,
    date: 'July 2024',
    readTime: '5 min read',
    tags: ['Personal Journey', 'SIT Pune', 'Nepal', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-microservices-docker',
    title: 'Architecting Scalable Microservices with Node.js & Docker',
    excerpt: 'Learn how to split monolithic backends into containerized microservices communicating via WebSockets & REST.',
    content: `When building applications like cloud IDEs or real-time financial dashboards, monolithic servers quickly encounter CPU bottlenecks during heavy computation.

In this tutorial, we construct a scalable Node.js backend architecture using Docker containers:
- **API Gateway**: Handles incoming client connections, JWT authentication, and SSL termination.
- **Worker Nodes**: Isolated Docker containers running code execution sandboxes safely separated from the core API.
- **Redis Pub/Sub**: Syncing WebSockets across multiple server instances effortlessly.`,
    date: 'June 2024',
    readTime: '8 min read',
    tags: ['Node.js', 'Docker', 'Backend', 'System Design'],
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80'
  }
];

export const GOALS_DATA: GoalItem[] = [
  {
    id: 'goal-1',
    timeframe: 'Short-Term (2024)',
    title: 'Secure Full Stack / SDE Engineering Internship',
    description: 'Apply full-stack proficiency in React, Node, and System Design at a top-tier tech firm or high-growth startup.',
    status: 'In Progress',
    icon: 'Briefcase'
  },
  {
    id: 'goal-2',
    timeframe: 'Short-Term (2024)',
    title: 'Cross 500+ Solved Problems on LeetCode & Reach Knight Rank',
    description: 'Sharpen algorithm design in graph theory, dynamic programming, and binary search trees.',
    status: 'In Progress',
    icon: 'Target'
  },
  {
    id: 'goal-3',
    timeframe: 'Medium-Term (2025-2026)',
    title: 'Graduate with Honors in B.Tech CSE from SIT Pune',
    description: 'Maintain top academic standing while leading open-source software initiatives and university hackathons.',
    status: 'Planned',
    icon: 'GraduationCap'
  },
  {
    id: 'goal-4',
    timeframe: 'Long-Term (2027+)',
    title: 'Found an Impactful Tech Startup in Nepal & India',
    description: 'Leverage AI and modern cloud infrastructure to solve real-world educational and infrastructure challenges.',
    status: 'Planned',
    icon: 'Rocket'
  }
];

export const GALLERY_DATA: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'SIT Pune Campus Life',
    category: 'Campus Life',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    caption: 'Symbiosis Institute of Technology campus in Lavale, Pune — beautiful hills and tech hubs.',
    date: '2024'
  },
  {
    id: 'gal-2',
    title: 'HackNation 1st Place Celebration',
    category: 'Hackathons',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    caption: 'Winning 1st prize after 36 sleepless hours building Nexus Cloud IDE with team.',
    date: 'March 2024'
  },
  {
    id: 'gal-3',
    title: 'Peer Coding Bootcamp Workshop',
    category: 'Coding',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Conducting Full-Stack Web Development workshop for junior CSE students at SIT Pune.',
    date: 'February 2024'
  },
  {
    id: 'gal-4',
    title: 'Janakpurdham Heritage Visit',
    category: 'Memories',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80',
    caption: 'Visiting Janaki Temple during holiday break in hometown Janakpur, Nepal.',
    date: 'January 2024'
  }
];
