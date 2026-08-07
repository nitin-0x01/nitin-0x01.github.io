import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, Check, ArrowRight, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContactWithDetails: (details: string) => void;
}

export const QuoteBuilderModal: React.FC<QuoteBuilderModalProps> = ({
  isOpen,
  onClose,
  onOpenContactWithDetails
}) => {
  const [projectType, setProjectType] = useState<'Full Stack Web App' | 'Frontend UI & Motion' | 'API & Backend System'>('Full Stack Web App');
  const [timeline, setTimeline] = useState<'Express (1-2 Weeks)' | 'Standard (3-4 Weeks)' | 'Flexible'>('Standard (3-4 Weeks)');
  const [features, setFeatures] = useState<string[]>(['User Auth & Roles', 'Responsive UI & Motion']);

  if (!isOpen) return null;

  const featureOptions = [
    'User Auth & Roles',
    'Responsive UI & Motion',
    'Database Setup & API',
    'Gemini AI Assistant Integration',
    'WebSocket Real-Time Sync',
    'Payment Gateway (Stripe/Razorpay)',
    'Dark/Light Theme Suite',
    'Custom Domain & Cloud Deployment'
  ];

  const toggleFeature = (feat: string) => {
    if (features.includes(feat)) {
      setFeatures(features.filter(f => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
  };

  // Estimate price
  let baseCost = projectType === 'Full Stack Web App' ? 800 : projectType === 'Frontend UI & Motion' ? 500 : 600;
  baseCost += features.length * 100;
  if (timeline === 'Express (1-2 Weeks)') baseCost += 300;

  const handleSubmit = () => {
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    const summaryStr = `Project Quote Estimate: ${projectType} ($${baseCost} USD). Timeline: ${timeline}. Features: ${features.join(', ')}`;
    onClose();
    onOpenContactWithDetails(summaryStr);
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
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-gray-950 border border-purple-500/40 rounded-2xl shadow-[0_0_60px_rgba(139,92,246,0.3)] text-white overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-white text-base">Project Scope & Cost Estimator</h3>
            </div>
            <button onClick={onClose} className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-6">
            {/* Step 1: Project Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-2">
                1. Select Service Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {(['Full Stack Web App', 'Frontend UI & Motion', 'API & Backend System'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
                      projectType === type
                        ? 'bg-purple-900/40 border-purple-500 text-white shadow-md'
                        : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-2">
                2. Choose Required Modules & Features
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {featureOptions.map((f) => {
                  const isSel = features.includes(f);
                  return (
                    <button
                      key={f}
                      onClick={() => toggleFeature(f)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs text-left transition ${
                        isSel
                          ? 'bg-purple-950/60 border-purple-500 text-purple-200'
                          : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isSel ? 'bg-purple-600 border-purple-400 text-white' : 'border-gray-700'
                      }`}>
                        {isSel && <Check className="w-3 h-3" />}
                      </div>
                      <span>{f}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-2">
                3. Estimated Delivery Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {(['Express (1-2 Weeks)', 'Standard (3-4 Weeks)', 'Flexible'] as const).map((time) => (
                  <button
                    key={time}
                    onClick={() => setTimeline(time)}
                    className={`p-2.5 rounded-xl border text-xs font-semibold transition ${
                      timeline === time
                        ? 'bg-purple-900/40 border-purple-500 text-white'
                        : 'bg-gray-900 border-gray-800 text-gray-400'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Output Banner */}
            <div className="p-4 bg-gradient-to-r from-purple-900/40 via-blue-900/30 to-gray-900 border border-purple-500/40 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-xs text-purple-300">Estimated Investment</div>
                <div className="text-2xl font-black text-white">${baseCost} <span className="text-xs text-gray-400 font-normal">USD (Approx)</span></div>
              </div>

              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition"
              >
                <span>Proceed with Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
