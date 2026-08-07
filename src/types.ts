export type ThemeMode = 'dark' | 'light';

export type LanguageCode = 'en' | 'np' | 'hi';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Backend / API' | 'AI / ML' | 'Open Source';
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stars?: number;
  forks?: number;
  highlights?: string[];
  architecture?: string;
}

export interface SkillCategory {
  categoryName: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experience: string;
    icon: string;
    color: string;
    popular?: boolean;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  description: string;
  skillsLearned: string[];
  achievements?: string[];
  current?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Leadership' | 'Freelance' | 'Open Source';
  description: string[];
  technologies: string[];
  link?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl?: string;
  skills: string[];
  image: string;
  badgeColor: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  organizer: string;
  date: string;
  position: string;
  description: string;
  icon: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  content: string;
  rating: number;
  linkedinUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

export interface CodingProfile {
  platform: 'LeetCode' | 'CodeChef' | 'HackerRank' | 'Codeforces' | 'GitHub';
  username: string;
  rating?: string | number;
  rank?: string;
  problemsSolved: number;
  badges: string[];
  profileUrl: string;
  iconColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  startingPrice?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Campus Life' | 'Hackathons' | 'Coding' | 'Memories';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface GoalItem {
  id: string;
  timeframe: 'Short-Term (2024)' | 'Medium-Term (2025-2026)' | 'Long-Term (2027+)';
  title: string;
  description: string;
  status: 'In Progress' | 'Achieved' | 'Planned';
  icon: string;
}
