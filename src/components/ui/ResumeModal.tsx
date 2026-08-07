import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  MapPin,
  Mail,
  Phone,
  CheckCircle2
} from 'lucide-react';
import {
  PERSONAL_DETAILS,
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  SKILLS_DATA,
  PROJECTS_DATA,
  ACHIEVEMENTS_DATA
} from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Generate text/markdown or trigger simulated download
    const element = document.createElement("a");
    const file = new Blob([
      `NITIN KUMAR MANDAL
Computer Science Engineering Student @ SIT Pune
Email: ${PERSONAL_DETAILS.email} | Phone: ${PERSONAL_DETAILS.phone}
GitHub: ${PERSONAL_DETAILS.githubUrl} | LinkedIn: ${PERSONAL_DETAILS.linkedinUrl}

EDUCATION:
- Bachelor of Technology (CSE), Symbiosis Institute of Technology (SIT), Pune (2022-2026) | 8.8 CGPA
- +2 Higher Secondary Science, Model Multiple College, Nepal (2020-2022) | 3.72 GPA

SKILLS:
- Languages: C++, Python, JavaScript, TypeScript, HTML/CSS
- Frontend: React 19, Next.js, Tailwind CSS, Motion, WebGL
- Backend: Node.js, Express.js, WebSockets, REST APIs, GraphQL
- Databases: MongoDB, MySQL, PostgreSQL, Firebase
- Tools: Git, GitHub, Docker, Linux, VS Code

FEATURED PROJECTS:
- Nexus Cloud IDE (Collaborative browser IDE with WebSockets & Docker)
- Aether Multimodal AI Studio (Gemini powered research assistant)
- Symbiosis Campus Connect (Student resource portal for SIT Pune)

EXPERIENCE & ACHIEVEMENTS:
- Full Stack Web Developer Intern @ InnoTech Digital
- 1st Place Winner @ SIT HackNation 2024
- Technical Club Lead @ SIT Pune
`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Nitin_Kumar_Mandal_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-950 border border-purple-500/30 rounded-2xl shadow-[0_0_60px_rgba(139,92,246,0.3)] text-white overflow-hidden z-10 flex flex-col"
        >
          {/* Top Bar Actions */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
              <h2 className="text-lg font-bold text-white tracking-wide">
                Nitin Kumar Mandal — Official Resume
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition shadow-lg shadow-purple-600/30"
              >
                <Download className="w-4 h-4" /> Download Resume
              </button>
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
              >
                <Printer className="w-4 h-4" /> Print
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 print:text-black print:bg-white">
            {/* Resume Header */}
            <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  {PERSONAL_DETAILS.name}
                </h1>
                <p className="text-purple-400 font-medium text-base mt-1">
                  Computer Science Engineering Student & Full Stack Web Developer
                </p>
                <p className="text-slate-400 text-xs mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  Janakpur, Nepal | Pune, India (Symbiosis Institute of Technology)
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <a href={`mailto:${PERSONAL_DETAILS.email}`} className="hover:underline">{PERSONAL_DETAILS.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>{PERSONAL_DETAILS.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  <a href={PERSONAL_DETAILS.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">GitHub Profile</a>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                {PERSONAL_DETAILS.bio}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h3>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white text-sm">{edu.degree}</h4>
                        <p className="text-xs text-purple-300 font-medium">{edu.institution} — {edu.location}</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800/50">
                        {edu.period}
                      </span>
                    </div>
                    {edu.grade && <div className="text-xs text-cyan-400 mt-1 font-semibold">Grade: {edu.grade}</div>}
                    <p className="text-xs text-slate-400 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SKILLS_DATA.map((cat) => (
                  <div key={cat.categoryName} className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-xs font-bold text-yellow-400 mb-1.5">{cat.categoryName}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map(s => (
                        <span key={s.name} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Experience & Leadership
              </h3>
              <div className="space-y-3">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white text-sm">{exp.role}</h4>
                        <p className="text-xs text-purple-300 font-medium">{exp.company} | {exp.location}</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-slate-400 list-disc list-inside">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Key Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {PROJECTS_DATA.slice(0, 4).map((proj) => (
                  <div key={proj.id} className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
                    <h4 className="font-bold text-white text-xs">{proj.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {proj.technologies.slice(0, 4).map(t => (
                        <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Key Achievements & Hackathons
              </h3>
              <div className="space-y-2">
                {ACHIEVEMENTS_DATA.map((ach) => (
                  <div key={ach.id} className="flex justify-between items-center bg-slate-900/40 p-3 rounded-xl border border-slate-800 text-xs">
                    <div>
                      <span className="font-bold text-white">{ach.title}</span> — <span className="text-slate-400">{ach.organizer}</span>
                    </div>
                    <span className="text-yellow-400 font-semibold">{ach.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
