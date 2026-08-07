import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Zap, ShieldCheck, Code2, Award, RefreshCw, Eye, Flame } from 'lucide-react';
import { PERSONAL_DETAILS } from '../../data/portfolioData';

interface ProfileAvatarProps {
  className?: string;
  showBadges?: boolean;
  imageUrl?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  className = '',
  showBadges = true,
  imageUrl
}) => {
  const displayImage = imageUrl || PERSONAL_DETAILS.profileImage;
  const [imageError, setImageError] = useState(false);
  // 4 unique theme modes that the user can cycle through to give a "unique edited" look
  const [activeTheme, setActiveTheme] = useState<'cyber' | 'hologram' | 'gold' | 'matrix'>('cyber');
  const [isRotating, setIsRotating] = useState(true);

  const cycleTheme = () => {
    const themes: ('cyber' | 'hologram' | 'gold' | 'matrix')[] = ['cyber', 'hologram', 'gold', 'matrix'];
    const currentIndex = themes.indexOf(activeTheme);
    setActiveTheme(themes[(currentIndex + 1) % themes.length]);
  };

  const getThemeStyles = () => {
    switch (activeTheme) {
      case 'cyber':
        return {
          ringGradient: 'from-purple-500 via-cyan-400 to-indigo-600',
          glowColor: 'rgba(168, 85, 247, 0.5)',
          badgeBorder: 'border-cyan-400/50',
          badgeText: 'text-cyan-300',
          badgeBg: 'bg-gray-950/90',
          title: 'Cyberpunk Neon',
          tag: 'NEON'
        };
      case 'hologram':
        return {
          ringGradient: 'from-blue-400 via-teal-300 to-emerald-500',
          glowColor: 'rgba(20, 184, 166, 0.5)',
          badgeBorder: 'border-teal-400/50',
          badgeText: 'text-teal-300',
          badgeBg: 'bg-gray-950/90',
          title: 'Holographic Glass',
          tag: 'HOLO'
        };
      case 'gold':
        return {
          ringGradient: 'from-amber-400 via-yellow-300 to-orange-500',
          glowColor: 'rgba(245, 158, 11, 0.5)',
          badgeBorder: 'border-yellow-400/50',
          badgeText: 'text-yellow-300',
          badgeBg: 'bg-gray-950/90',
          title: 'Awwwards Gold',
          tag: 'GOLD'
        };
      case 'matrix':
        return {
          ringGradient: 'from-emerald-500 via-green-400 to-lime-400',
          glowColor: 'rgba(34, 197, 94, 0.5)',
          badgeBorder: 'border-green-400/50',
          badgeText: 'text-green-300',
          badgeBg: 'bg-gray-950/90',
          title: 'Matrix Terminal',
          tag: 'MATRIX'
        };
    }
  };

  const currentStyle = getThemeStyles();

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl transition-all duration-700 pointer-events-none"
        style={{
          backgroundColor: currentStyle.glowColor,
          transform: 'scale(1.2)'
        }}
      />

      {/* Main Avatar Container */}
      <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
        {/* Animated Rotating Outer Ring */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr ${currentStyle.ringGradient} ${
            isRotating ? 'animate-spin' : ''
          } blur-lg opacity-70 transition-all duration-700`}
          style={{ animationDuration: '18s' }}
        />

        {/* Outer Frame Wrapper */}
        <div className={`relative w-full h-full rounded-3xl p-1 bg-gradient-to-tr ${currentStyle.ringGradient} shadow-2xl overflow-hidden transition-all duration-700`}>
          <div className="w-full h-full bg-gray-950 rounded-[22px] overflow-hidden relative group">
            
            {/* Avatar Content: Photo or SVG Vector Artwork */}
            <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-950 to-black">
              {/* Matrix / Digital Grid Background Pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {displayImage && !imageError ? (
                <img
                  src={displayImage}
                  alt="Nitin Kumar Mandal"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* Unique Vector Artwork fallback matching photo */
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Background Aura Gradient */}
                    <radialGradient id="avatarGlow" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor={activeTheme === 'cyber' ? '#a855f7' : activeTheme === 'hologram' ? '#14b8a6' : activeTheme === 'gold' ? '#eab308' : '#22c55e'} stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#030712" stopOpacity="0.95" />
                    </radialGradient>

                    {/* Terracotta / Crimson Shirt Gradient */}
                    <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c2410c" />
                      <stop offset="50%" stopColor="#9a3412" />
                      <stop offset="100%" stopColor="#7c2d12" />
                    </linearGradient>

                    {/* Skin Tone Gradient */}
                    <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e5a880" />
                      <stop offset="100%" stopColor="#cb885c" />
                    </linearGradient>

                    {/* Dark Hair Gradient */}
                    <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1f2937" />
                      <stop offset="100%" stopColor="#111827" />
                    </linearGradient>

                    {/* Cyber Scan Line Effect */}
                    <linearGradient id="scanLine" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>

                  {/* Canvas Background */}
                  <rect width="400" height="400" fill="url(#avatarGlow)" />

                  {/* Subtle Background Circuit Lines */}
                  <path d="M 50 100 Q 100 80 200 120 T 350 100" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 30 250 Q 150 220 250 280 T 370 240" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="4 4" />

                  {/* Shoulders & Terracotta Shirt */}
                  <path
                    d="M 90 400 C 90 320 130 285 200 285 C 270 285 310 320 310 400 Z"
                    fill="url(#shirtGradient)"
                  />
                  
                  {/* Shirt Collar Detail */}
                  <path d="M 160 285 L 200 330 L 240 285" fill="#451a03" stroke="#2a0d02" strokeWidth="2" />
                  <path d="M 175 285 L 200 320 L 225 285" fill="#f87171" opacity="0.3" />

                  {/* Neck */}
                  <rect x="175" y="235" width="50" height="55" rx="8" fill="url(#skinGradient)" />
                  <path d="M 175 250 Q 200 265 225 250" fill="rgba(0,0,0,0.15)" />

                  {/* Head / Face Base Shape */}
                  <path
                    d="M 135 140 C 135 85 160 65 200 65 C 240 65 265 85 265 140 C 265 195 245 240 200 240 C 155 240 135 195 135 140 Z"
                    fill="url(#skinGradient)"
                  />

                  {/* Ears */}
                  <circle cx="132" cy="145" r="12" fill="#cb885c" />
                  <circle cx="268" cy="145" r="12" fill="#cb885c" />

                  {/* Hair - Stylish Cropped Dark Hair */}
                  <path
                    d="M 130 130 C 130 80 155 52 200 52 C 245 52 270 80 270 130 C 265 110 250 82 200 82 C 150 82 135 110 130 130 Z"
                    fill="url(#hairGradient)"
                  />
                  {/* Hair Top Spikes / Volume */}
                  <path
                    d="M 140 85 Q 170 45 200 48 Q 230 45 260 85 Q 220 62 200 64 Q 180 62 140 85 Z"
                    fill="#111827"
                  />

                  {/* Eyebrows */}
                  <path d="M 155 125 Q 170 120 183 125" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 217 125 Q 230 120 245 125" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />

                  {/* Eyes */}
                  <ellipse cx="170" cy="138" rx="7" ry="5" fill="#ffffff" />
                  <circle cx="170" cy="138" r="3.5" fill="#1f2937" />
                  <circle cx="171" cy="137" r="1" fill="#ffffff" />

                  <ellipse cx="230" cy="138" rx="7" ry="5" fill="#ffffff" />
                  <circle cx="230" cy="138" r="3.5" fill="#1f2937" />
                  <circle cx="231" cy="137" r="1" fill="#ffffff" />

                  {/* Nose */}
                  <path d="M 198 135 L 202 165 L 194 168 Q 200 172 206 168" stroke="#a3623b" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                  {/* Trimmed Mustache & Beard */}
                  <path d="M 180 182 Q 200 177 220 182 Q 200 187 180 182 Z" fill="#111827" />
                  <path d="M 185 190 Q 200 196 215 190" stroke="#a3583b" strokeWidth="3" strokeLinecap="round" fill="none" />

                  <path
                    d="M 136 150 C 136 210 160 238 200 238 C 240 238 264 210 264 150 C 260 190 240 230 200 230 C 160 230 140 190 136 150 Z"
                    fill="#1f2937"
                    opacity="0.9"
                  />

                  {/* Cyber Overlay option */}
                  {activeTheme === 'cyber' && (
                    <g opacity="0.85">
                      <path d="M 150 133 L 188 133 L 183 145 L 155 145 Z" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="1.5" />
                      <path d="M 212 133 L 250 133 L 245 145 L 217 145 Z" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="1.5" />
                      <line x1="188" y1="136" x2="212" y2="136" stroke="#38bdf8" strokeWidth="1.5" />
                    </g>
                  )}

                  {/* Matrix Code Scanner effect */}
                  {activeTheme === 'matrix' && (
                    <line x1="100" y1="140" x2="300" y2="140" stroke="#22c55e" strokeWidth="2" strokeDasharray="10 5" opacity="0.8">
                      <animate attributeName="y1" values="80; 260; 80" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="80; 260; 80" dur="3s" repeatCount="indefinite" />
                    </line>
                  )}
                </svg>
              )}

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent pointer-events-none" />

              {/* Bottom Info Card inside photo frame */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-gray-950/80 border border-purple-500/30 backdrop-blur-md">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>Nitin Kumar Mandal</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${currentStyle.badgeText} bg-gray-900 border ${currentStyle.badgeBorder}`}>
                    {currentStyle.tag}
                  </span>
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5 flex items-center justify-between">
                  <span>Full Stack Dev & CS Student</span>
                  <span className="text-purple-300 font-mono">SIT Pune</span>
                </div>
              </div>

              {/* Top Interactive Theme Switcher Button */}
              <button
                onClick={cycleTheme}
                className="absolute top-3 right-3 p-2 rounded-xl bg-gray-950/80 border border-purple-500/40 text-purple-300 hover:text-white hover:scale-110 backdrop-blur-md transition shadow-lg flex items-center gap-1 text-[10px] font-mono"
                title="Click to edit & switch unique theme look!"
              >
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="hidden sm:inline">{currentStyle.title}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Orbiting Floating Badges */}
        {showBadges && (
          <>
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute -top-4 -right-4 p-3 rounded-2xl ${currentStyle.badgeBg} border ${currentStyle.badgeBorder} shadow-lg backdrop-blur-md ${currentStyle.badgeText} font-mono text-xs font-bold flex items-center gap-2`}
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>React 19 & Node</span>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 p-3 rounded-2xl bg-gray-950/90 border border-purple-500/50 shadow-lg backdrop-blur-md text-purple-300 font-mono text-xs font-bold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>18+ Projects Built</span>
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 -right-8 p-2.5 rounded-2xl bg-gray-950/90 border border-yellow-500/50 shadow-lg backdrop-blur-md text-yellow-300 font-mono text-xs font-bold flex items-center gap-1.5"
            >
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Hackathon Gold</span>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};
