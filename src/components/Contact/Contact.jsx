import React, { useState } from 'react';
import { Send, CheckCircle2, SendToBack } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import GlassCard from '../Common/GlassCard';
import Button from '../Common/Button';
import contactLakeBg from '../../assets/contact_lake.png';

/**
 * Contact Section.
 * Features a glassmorphism contact form set against a sunset lake backdrop.
 * Includes a simulated paper plane send action on form submission.
 */
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ismailmanyal3@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917899120229');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Simulate sending email
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset back to idle after showing success message
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-[#0B1120] flex items-center justify-center min-h-screen"
    >
      {/* Sunset Lake Parallax Backdrop */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 opacity-40 mix-blend-lighten"
        style={{
          backgroundImage: `url(${contactLakeBg})`,
        }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/75 to-[#0B1120] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center">
        <SectionTitle
          subtitle="Connection"
          title="Reach the Summit"
          description="Have an ERP module, a database query bottleneck, or an AI pipeline project? Let&apos;s build together."
        />

        {/* Glass Form Wrapper */}
        <div className="w-full max-w-lg">
          <GlassCard className="relative overflow-hidden p-8 border-white/5 bg-[#111827]/50 hover:border-white/10 card-glow-green">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* Success Screen Overlay */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  {/* Custom Paper Plane animation frame */}
                  <div className="relative mb-6">
                    <motion.div
                      initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                      animate={{
                        x: [0, 40, 100, 250],
                        y: [0, -20, -60, -180],
                        scale: [1, 0.9, 0.7, 0],
                        opacity: [1, 1, 0.8, 0],
                      }}
                      transition={{ duration: 1.8, ease: 'easeOut' }}
                      className="text-[#84CC16]"
                    >
                      <Send className="w-12 h-12" />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-heading-sora text-xl font-bold text-[#F8FAFC] mb-2 flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#84CC16]" /> Message Sent
                    </h3>
                    <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                      Thank you! Your transmission has launched successfully. I will get back to you shortly.
                    </p>
                  </motion.div>
                </motion.div>
              ) : (
                /* Interactive Form Fields */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 text-left"
                >
                  {/* Quick Copy Shortcuts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Copy Email */}
                    <div className="flex justify-between items-center p-3 rounded-lg bg-[#0B1120]/40 border border-white/5 font-body">
                      <span className="text-[11px] text-[#94A3B8] font-mono tracking-tight">ismailmanyal3@gmail.com</span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="font-heading-space text-[11px] font-semibold text-[#84CC16] hover:text-[#F8FAFC] transition-colors focus:outline-none cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        {copiedEmail ? 'Copied! 🌲' : 'Copy Email'}
                      </button>
                    </div>

                    {/* Copy Phone */}
                    <div className="flex justify-between items-center p-3 rounded-lg bg-[#0B1120]/40 border border-white/5 font-body">
                      <span className="text-[11px] text-[#94A3B8] font-mono tracking-tight">+91 7899120229</span>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="font-heading-space text-[11px] font-semibold text-[#84CC16] hover:text-[#F8FAFC] transition-colors focus:outline-none cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        {copiedPhone ? 'Copied! 🌲' : 'Copy Phone'}
                      </button>
                    </div>
                  </div>

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="font-heading-space text-xs font-semibold tracking-wider text-[#94A3B8] uppercase block mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="John Muir"
                      className="w-full bg-[#0B1120]/60 border border-white/8 rounded-lg px-4 py-3 font-body text-sm text-[#F8FAFC] placeholder-white/20 focus:outline-none focus:border-[#84CC16] disabled:opacity-50"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="font-heading-space text-xs font-semibold tracking-wider text-[#94A3B8] uppercase block mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="john.muir@parks.org"
                      className="w-full bg-[#0B1120]/60 border border-white/8 rounded-lg px-4 py-3 font-body text-sm text-[#F8FAFC] placeholder-white/20 focus:outline-none focus:border-[#84CC16] disabled:opacity-50"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="font-heading-space text-xs font-semibold tracking-wider text-[#94A3B8] uppercase block mb-2"
                    >
                      Project Description
                    </label>
                    <textarea
                      required
                      rows="4"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Briefly describe what you're working on..."
                      className="w-full bg-[#0B1120]/60 border border-white/8 rounded-lg px-4 py-3 font-body text-sm text-[#F8FAFC] placeholder-white/20 focus:outline-none focus:border-[#84CC16] disabled:opacity-50 resize-none"
                    />
                  </div>

                  {/* Form Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === 'submitting'}
                    className="w-full mt-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-t-transparent border-[#0B1120] animate-spin inline-block mr-2" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <SendToBack className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
