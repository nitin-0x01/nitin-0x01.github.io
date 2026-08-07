import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CertificateItem } from '../../types';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

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
          className="relative w-full max-w-xl bg-gray-950 border border-purple-500/40 rounded-2xl shadow-[0_0_60px_rgba(139,92,246,0.3)] text-white overflow-hidden z-10 flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                Verified Credential
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="relative h-44 w-full rounded-xl overflow-hidden border border-gray-800">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
              <p className="text-sm font-semibold text-purple-400 mt-1">{certificate.issuer}</p>
              <p className="text-xs text-gray-400 mt-0.5">Issued: {certificate.issueDate}</p>
            </div>

            <div className="bg-gray-900/80 p-3.5 rounded-xl border border-gray-800 font-mono text-xs space-y-1">
              <div className="text-gray-400">Credential ID:</div>
              <div className="text-cyan-300 font-bold">{certificate.credentialId}</div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Validated Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map(s => (
                  <span key={s} className="flex items-center gap-1 px-2.5 py-1 rounded bg-purple-950/60 border border-purple-800/50 text-xs text-purple-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> {s}
                  </span>
                ))}
              </div>
            </div>

            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition shadow-lg shadow-purple-600/30"
              >
                <ExternalLink className="w-4 h-4" /> Verify Credential on Issuer Website
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
