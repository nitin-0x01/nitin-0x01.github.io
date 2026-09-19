import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X } from 'lucide-react';
import { GalleryImage } from '../types';

const LOCAL_GALLERY: GalleryImage[] = [
  {
    id: 'nitin-diwali',
    title: 'Nitin Kumar Mandal celebrating Diwali',
    imageUrl: '/nitin-kumar-mandal-diwali.jpg',
    category: 'Diwali',
    date: 'Diwali',
    caption: 'Nitin Kumar Mandal celebrating Diwali.',
  },
  {
    id: 'nitin-family',
    title: 'Nitin Kumar Mandal with family',
    imageUrl: '/nitin-kumar-mandal-family.jpg',
    category: 'Family',
    date: 'Family',
    caption: 'Nitin Kumar Mandal with his family.',
  },
  {
    id: 'nitin-fort',
    title: 'Nitin Kumar Mandal at a fort',
    imageUrl: '/nitin-kumar-mandal-fort.jpg',
    category: 'Travel',
    date: 'Travel',
    caption: 'Nitin Kumar Mandal during a travel visit.',
  },
  {
    id: 'nitin-friends',
    title: 'Nitin Kumar Mandal with friends',
    imageUrl: '/nitin-kumar-mandal-friends.jpg',
    category: 'Friends',
    date: 'Memories',
    caption: 'Nitin Kumar Mandal with friends.',
  },
  {
    id: 'nitin-lonavala',
    title: 'Nitin Kumar Mandal in Lonavala',
    imageUrl: '/nitin-kumar-mandal-lonavala.jpg',
    category: 'Lonavala',
    date: 'Travel',
    caption: 'Nitin Kumar Mandal in Lonavala, Maharashtra.',
  },
  {
    id: 'nitin-pose',
    title: 'Nitin Kumar Mandal portrait',
    imageUrl: '/nitin-kumar-mandal-pose.jpg',
    category: 'Portrait',
    date: 'Profile',
    caption: 'Portrait of Nitin Kumar Mandal.',
  },
  {
    id: 'nitin-pune',
    title: 'Nitin Kumar Mandal in Pune',
    imageUrl: '/nitin-kumar-mandal-pune.jpg',
    category: 'Pune',
    date: 'Pune',
    caption: 'Nitin Kumar Mandal in Pune, Maharashtra.',
  },
];

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Camera className="w-3.5 h-3.5" />
            <span>Moments & Memories</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Life &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">
              Memories
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A collection of personal moments, travel memories, family moments,
            and experiences from the journey of Nitin Kumar Mandal.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCAL_GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              onClick={() => setActiveImage(item)}
              className="cursor-pointer group relative h-64 rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/60 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent opacity-80 group-hover:opacity-90 transition" />

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-950/90 text-purple-300 border border-purple-800/60">
                  {item.category}
                </span>

                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">

            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-gray-950 border border-purple-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.3)] z-10"
            >

              {/* Image */}
              <div className="relative max-h-[70vh] w-full bg-black flex items-center justify-center">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />

                <button
                  onClick={() => setActiveImage(null)}
                  aria-label="Close image"
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-gray-800 border border-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Information */}
              <div className="p-6 bg-gray-950 space-y-2">
                <div className="flex items-center justify-between text-xs text-purple-400 font-mono">
                  <span>{activeImage.category}</span>

                  {activeImage.date && (
                    <span>{activeImage.date}</span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {activeImage.title}
                </h3>

                {activeImage.caption && (
                  <p className="text-xs text-gray-300">
                    {activeImage.caption}
                  </p>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
