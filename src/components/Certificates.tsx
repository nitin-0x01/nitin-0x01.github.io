import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { CertificateItem } from '../types';

interface CertificatesProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const Certificates: React.FC<CertificatesProps> = ({ onSelectCertificate }) => {
  return (
    <section id="certificates" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Licenses</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Professional certifications completed from Meta, Google Cloud, freeCodeCamp, and Amazon Web Services.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onSelectCertificate(cert)}
              className="cursor-pointer group bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/60 rounded-3xl p-6 backdrop-blur-xl transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row gap-6 items-center hover:-translate-y-1"
            >
              {/* Image Preview */}
              <div className="relative h-32 w-full sm:w-44 rounded-2xl overflow-hidden shrink-0 border border-gray-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                <div className="absolute top-2 left-2 p-1 rounded bg-black/70 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                </div>
              </div>

              {/* Info Body */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span className="text-purple-300 font-bold">{cert.issuer}</span>
                  <span>{cert.issueDate}</span>
                </div>

                <h3 className="text-base font-extrabold text-white group-hover:text-purple-300 transition leading-snug">
                  {cert.title}
                </h3>

                <p className="text-[11px] font-mono text-cyan-300 truncate">
                  ID: {cert.credentialId}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-gray-900 border border-gray-800 text-gray-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
