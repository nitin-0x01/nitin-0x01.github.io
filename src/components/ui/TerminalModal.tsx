import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';
import { PERSONAL_DETAILS, PROJECTS_DATA, SKILLS_DATA, EDUCATION_DATA } from '../../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

interface CommandOutput {
  id: string;
  command: string;
  response: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'welcome',
      command: 'sysinfo',
      response: (
        <div className="text-cyan-400 font-mono text-xs leading-relaxed space-y-1">
          <div>==========================================================</div>
          <div className="text-purple-400 font-bold">NITIN KUMAR MANDAL CLI TERMINAL v2.0</div>
          <div>Computer Science Engineering Student @ Symbiosis Institute of Technology (SIT), Pune</div>
          <div>Location: Janakpur, Nepal & Pune, India</div>
          <div>Status: OPEN TO INTERNSHIPS & SDE ROLES</div>
          <div>==========================================================</div>
          <div className="text-gray-300">Type <span className="text-yellow-400 font-bold">&quot;help&quot;</span> for available commands or <span className="text-yellow-400 font-bold">&quot;sudo hire nitin&quot;</span>.</div>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmdStr = inputVal.trim();
    if (!cmdStr) return;

    const lowerCmd = cmdStr.toLowerCase();
    let respNode: React.ReactNode = null;

    if (lowerCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lowerCmd === 'help') {
      respNode = (
        <div className="space-y-1 text-xs text-gray-300 font-mono">
          <div className="text-purple-400 font-bold">Available Commands:</div>
          <div><span className="text-cyan-400 font-bold">about</span> - Brief summary of Nitin</div>
          <div><span className="text-cyan-400 font-bold">skills</span> - List core technical proficiencies</div>
          <div><span className="text-cyan-400 font-bold">projects</span> - View featured engineering projects</div>
          <div><span className="text-cyan-400 font-bold">education</span> - SIT Pune & School academic details</div>
          <div><span className="text-cyan-400 font-bold">contact</span> - Display email, phone, and links</div>
          <div><span className="text-cyan-400 font-bold">sudo hire nitin</span> - Trigger instant hire procedure</div>
          <div><span className="text-cyan-400 font-bold">matrix</span> - Trigger digital rain matrix mode</div>
          <div><span className="text-cyan-400 font-bold">clear</span> - Clear terminal output</div>
          <div><span className="text-cyan-400 font-bold">exit</span> - Close terminal window</div>
        </div>
      );
    } else if (lowerCmd === 'about') {
      respNode = (
        <div className="text-xs text-gray-300 space-y-1 font-mono">
          <div className="text-purple-400 font-bold">{PERSONAL_DETAILS.name}</div>
          <div>{PERSONAL_DETAILS.bio}</div>
          <div className="text-cyan-400">Tagline: {PERSONAL_DETAILS.tagline}</div>
        </div>
      );
    } else if (lowerCmd === 'skills') {
      respNode = (
        <div className="text-xs space-y-1 font-mono text-gray-300">
          <div className="text-purple-400 font-bold">Technical Skills Overview:</div>
          {SKILLS_DATA.map(cat => (
            <div key={cat.categoryName}>
              <span className="text-yellow-400 font-semibold">{cat.categoryName}: </span>
              <span>{cat.skills.map(s => `${s.name} (${s.level}%)`).join(', ')}</span>
            </div>
          ))}
        </div>
      );
    } else if (lowerCmd === 'projects') {
      respNode = (
        <div className="text-xs space-y-1 font-mono text-gray-300">
          <div className="text-purple-400 font-bold">Featured Projects:</div>
          {PROJECTS_DATA.map(p => (
            <div key={p.id}>
              <span className="text-cyan-400 font-semibold">{p.title}:</span> {p.tagline}
            </div>
          ))}
        </div>
      );
    } else if (lowerCmd === 'education') {
      respNode = (
        <div className="text-xs space-y-1 font-mono text-gray-300">
          <div className="text-purple-400 font-bold">Academic Journey:</div>
          {EDUCATION_DATA.map(e => (
            <div key={e.id}>
              <span className="text-yellow-400">{e.degree}</span> @ {e.institution} ({e.period})
            </div>
          ))}
        </div>
      );
    } else if (lowerCmd === 'contact') {
      respNode = (
        <div className="text-xs space-y-1 font-mono text-gray-300">
          <div>Email: <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-cyan-400 underline">{PERSONAL_DETAILS.email}</a></div>
          <div>Phone: <span className="text-cyan-400">{PERSONAL_DETAILS.phone}</span></div>
          <div>GitHub: <a href={PERSONAL_DETAILS.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_DETAILS.githubUrl}</a></div>
          <div>LinkedIn: <a href={PERSONAL_DETAILS.linkedinUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_DETAILS.linkedinUrl}</a></div>
        </div>
      );
    } else if (lowerCmd === 'sudo hire nitin' || lowerCmd === 'hire') {
      respNode = (
        <div className="p-3 bg-purple-950/80 border border-purple-500 rounded-lg text-xs font-mono text-green-400 space-y-1">
          <div className="font-bold text-sm">🎉 ACCESS GRANTED! RECRUITER PRIORITY UNLOCKED.</div>
          <div>Nitin Kumar Mandal is ready to bring top-tier full-stack craftsmanship to your team.</div>
          <div>Emailing directly to <span className="underline">{PERSONAL_DETAILS.email}</span>...</div>
          <button
            onClick={() => {
              onClose();
              onNavigate('contact');
            }}
            className="mt-2 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-500 transition font-sans"
          >
            Jump to Contact Form & Send Message
          </button>
        </div>
      );
    } else if (lowerCmd === 'matrix') {
      respNode = (
        <div className="text-xs font-mono text-green-400 space-y-0.5">
          <div>01001110 01001001 01010100 01001001 01001110 (NITIN)</div>
          <div>01001101 01000001 01001110 01000100 01000001 01001100 (MANDAL)</div>
          <div>01010011 01001001 01010100 00100000 01010000 01010101 01001110 01000101</div>
          <div className="text-cyan-300 animate-pulse">System Matrix Simulation Active. Realities Constructed.</div>
        </div>
      );
    } else if (lowerCmd === 'exit') {
      onClose();
      return;
    } else {
      respNode = (
        <div className="text-xs font-mono text-red-400">
          Command not recognized: &quot;{cmdStr}&quot;. Type <span className="text-yellow-300 font-bold">&quot;help&quot;</span> for commands.
        </div>
      );
    }

    setHistory(prev => [
      ...prev,
      { id: Date.now().toString(), command: cmdStr, response: respNode }
    ]);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-gray-950 border border-green-500/40 rounded-xl shadow-[0_0_50px_rgba(34,197,94,0.2)] text-white overflow-hidden z-10 font-mono"
        >
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-green-400" /> nitin@sit-pune: ~
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Output Area */}
          <div className="p-4 max-h-[65vh] min-h-[350px] overflow-y-auto space-y-4 bg-gray-950/90 text-sm">
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-green-400">
                  <span>nitin@sit-pune:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-3 border-l-2 border-gray-800">{item.response}</div>
              </div>
            ))}

            {/* Active Command Prompt Input */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-xs text-green-400 font-bold">nitin@sit-pune:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 bg-transparent text-white text-xs font-mono focus:outline-none"
                placeholder="type command here..."
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
