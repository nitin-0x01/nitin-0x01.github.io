import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Booting Kernel...');

  useEffect(() => {
    const statuses = [
      'Booting Kernel...',
      'Loading SIT Pune Credentials...',
      'Synthesizing Three.js WebGL Shaders...',
      'Fetching GitHub Contributions...',
      'Establishing 60 FPS Motion Pipeline...',
      'Portfolio System Ready!'
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 10;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setStatusText(statuses[statuses.length - 1]);
        clearInterval(interval);
        setTimeout(onComplete, 600);
      } else {
        setProgress(current);
        const idx = Math.min(
          Math.floor((current / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[idx]);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-6 text-white font-mono select-none"
    >
      {/* Outer Glow Circle */}
      <div className="relative mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-full border-2 border-dashed border-purple-500/50 p-2 shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full border border-cyan-400/40 border-t-cyan-400 animate-spin" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center font-extrabold text-cyan-400 text-sm">
          {progress}%
        </div>
      </div>

      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500 tracking-wider">
          NITIN KUMAR MANDAL
        </h1>
        <p className="text-xs text-purple-300/80 font-sans tracking-wide">
          Computer Science & Engineering Student @ SIT Pune
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full max-w-md mt-8 space-y-2">
        <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[11px] text-gray-500">
          <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
            <Terminal className="w-3 h-3" /> {statusText}
          </span>
          <span>v2.0-PRO</span>
        </div>
      </div>
    </motion.div>
  );
};
