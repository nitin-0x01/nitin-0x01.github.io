import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Send,
  MapPin,
  Phone,
  Copy,
  Check,
  Github,
  Linkedin,
  Instagram,
  Sparkles,
  Bot
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface ContactProps {
  initialMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [mapLocation, setMapLocation] = useState<'Pune' | 'Janakpur'>('Pune');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState<{ type: 'success' | 'error'; text: string; aiReply?: string } | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setResponseMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });

        setResponseMsg({
          type: 'success',
          text: data.message || 'Thank you! Message sent successfully.',
          aiReply: data.aiReply
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResponseMsg({
          type: 'error',
          text: data.error || 'Failed to send message. Please try again or email directly.'
        });
      }
    } catch (err) {
      setResponseMsg({
        type: 'error',
        text: 'Network error. Please try sending directly to nitinkumarm28@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Whether you have a full-stack engineering role, freelance project, or open-source idea, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-6"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-white">Send Me A Message</h3>
              <p className="text-xs text-gray-400">Fill out the form below for an instant response.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1.5">
                  Subject / Role
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. SDE Internship Opportunity / Full-Stack Project"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, or position details..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(168,85,247,0.4)] transition disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Nitin</span>
                  </>
                )}
              </button>
            </form>

            {/* Response Banner & AI Auto Reply */}
            {responseMsg && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border text-xs space-y-2 ${
                  responseMsg.type === 'success'
                    ? 'bg-purple-950/80 border-purple-500 text-purple-200'
                    : 'bg-red-950/80 border-red-500 text-red-200'
                }`}
              >
                <div className="font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  {responseMsg.text}
                </div>

                {responseMsg.aiReply && (
                  <div className="pt-2 border-t border-purple-800/60 font-mono text-[11px] text-cyan-300 flex items-start gap-2">
                    <Bot className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Nitin&apos;s AI Assistant: </span>
                      {responseMsg.aiReply}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Right: Contact Details & Google Maps Embed (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Info Cards */}
            <div className="bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl space-y-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400">
                Direct Contact Points
              </h3>

              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-900 border border-gray-800">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-[10px] text-gray-500 font-mono">Email Address</div>
                      <div className="text-xs font-bold text-white">{PERSONAL_DETAILS.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_DETAILS.email, 'email')}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-900 border border-gray-800">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-[10px] text-gray-500 font-mono">Phone Number</div>
                      <div className="text-xs font-bold text-white">{PERSONAL_DETAILS.phone}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_DETAILS.phone, 'phone')}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-900 border border-gray-800">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    <div>
                      <div className="text-[10px] text-gray-500 font-mono">Campus & Hometown</div>
                      <div className="text-xs font-bold text-white">SIT Pune, India & Janakpur, Nepal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Location Switcher */}
            <div className="bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl space-y-3 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Interactive Location Map
                </h4>

                <div className="flex items-center gap-1 bg-gray-900 p-1 rounded-lg border border-gray-800">
                  <button
                    onClick={() => setMapLocation('Pune')}
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold transition ${
                      mapLocation === 'Pune' ? 'bg-purple-600 text-white' : 'text-gray-400'
                    }`}
                  >
                    SIT Pune
                  </button>
                  <button
                    onClick={() => setMapLocation('Janakpur')}
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold transition ${
                      mapLocation === 'Janakpur' ? 'bg-purple-600 text-white' : 'text-gray-400'
                    }`}
                  >
                    Janakpur, Nepal
                  </button>
                </div>
              </div>

              {/* Map iFrame */}
              <div className="h-48 w-full rounded-2xl overflow-hidden border border-gray-800">
                <iframe
                  title="Location Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, filter: 'grayscale(0.9) contrast(1.2) invert(0.9)' }}
                  src={
                    mapLocation === 'Pune'
                      ? 'https://maps.google.com/maps?q=Symbiosis%20Institute%20of%20Technology%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed'
                      : 'https://maps.google.com/maps?q=Janakpur%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed'
                  }
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
