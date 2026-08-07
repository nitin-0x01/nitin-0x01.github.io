import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, Server, CheckCircle2, Calculator, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesProps {
  onOpenQuoteBuilder: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteBuilder }) => {
  return (
    <section id="services" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering & Design Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Offered</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Providing full-stack web engineering, motion design, and scalable backend architecture for startups and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/60 rounded-3xl p-8 backdrop-blur-xl transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:-translate-y-2 space-y-6"
            >
              <div className="space-y-4">
                <div className="p-3.5 w-fit rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30">
                  <Layers className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white">{service.title}</h3>
                  <p className="text-xs text-purple-300 font-medium mt-1">{service.tagline}</p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                    What&apos;s Included:
                  </div>
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenQuoteBuilder}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Scope & Investment</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
