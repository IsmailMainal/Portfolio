import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import GlassCard from '../Common/GlassCard';
import Button from '../Common/Button';
import AuroraNebulaCanvas from './AuroraNebulaCanvas';

/**
 * Vesper Contact Section.
 * Implements cosmic obsidian aesthetics, glowing mint & violet spotlights,
 * fast clipboard copy, and direct WhatsApp / Email integrations.
 */
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'success'
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

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const text = `New Project Inquiry for Ismail Mainal\n\nClient Name: ${formData.name}\nEmail: ${formData.email}\nDate: ${dateStr}\n\nProject Details:\n${formData.message}\n\n-----------------------------------\nSent via Ismail Mainal Portfolio`;
    const whatsappUrl = `https://wa.me/917899120229?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const subject = `Portfolio Project Inquiry: ${formData.name}`;
    const body = `New Project Inquiry for Ismail Mainal\n\nClient Name: ${formData.name}\nEmail: ${formData.email}\nDate: ${dateStr}\n\nProject Details:\n-----------------------------------\n${formData.message}\n-----------------------------------\n\nSent via Ismail Mainal Portfolio`;
    const mailtoUrl = `mailto:ismailmanyal3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-[#030712] flex items-center justify-center min-h-screen transition-all duration-1000 vesper-grid-bg"
    >
      {/* Fluid Aurora Borealis Nebula Canvas */}
      <AuroraNebulaCanvas />

      {/* Vesper Ambient Volumetric Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#10B981]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-[#6366F1]/7 blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center">
        <SectionTitle
          subtitle="Get in Touch"
          title="Let's Collaborate"
          description="Have an ERP module, a database query bottleneck, or an AI & web project? Let's build together."
        />

        {/* Glass Form Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-lg"
        >
          <GlassCard className="relative overflow-hidden p-8 border-white/[0.08] bg-[#070B18]/75 shadow-2xl">
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
                      className="text-[#10B981]"
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
                      <CheckCircle2 className="w-5 h-5 text-[#10B981]" /> App Launched
                    </h3>
                    <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                      Your message payload has been formatted and opened in your selected app (WhatsApp / Email Client).
                    </p>
                  </motion.div>
                </motion.div>
              ) : (
                /* Interactive Form Fields */
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 text-left"
                >
                  {/* Quick Copy Shortcuts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Copy Email */}
                    <div className="flex justify-between items-center p-3 rounded-xl bg-[#030712]/60 border border-white/5 font-body">
                      <span className="text-[11px] text-[#94A3B8] font-mono tracking-tight truncate max-w-[140px]">
                        ismailmanyal3@gmail.com
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="font-heading-space text-[11px] font-semibold text-[#10B981] hover:text-[#F8FAFC] transition-colors focus:outline-none cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        {copiedEmail ? 'Copied! ✦' : 'Copy Email'}
                      </button>
                    </div>

                    {/* Copy Phone */}
                    <div className="flex justify-between items-center p-3 rounded-xl bg-[#030712]/60 border border-white/5 font-body">
                      <span className="text-[11px] text-[#94A3B8] font-mono tracking-tight">+91 7899120229</span>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="font-heading-space text-[11px] font-semibold text-[#6366F1] hover:text-[#F8FAFC] transition-colors focus:outline-none cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        {copiedPhone ? 'Copied! ✦' : 'Copy Phone'}
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
                      placeholder="Alex Mercer"
                      className="w-full bg-[#030712]/70 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-[#F8FAFC] placeholder-white/20 focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all"
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
                      placeholder="alex@acme.corp"
                      className="w-full bg-[#030712]/70 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-[#F8FAFC] placeholder-white/20 focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all"
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
                      placeholder="Briefly describe what you are looking to build or optimize..."
                      className="w-full bg-[#030712]/70 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-[#F8FAFC] placeholder-white/20 focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all resize-none"
                    />
                  </div>

                  {/* Dual Channel Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                    <Button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      variant="primary"
                      className="w-full sm:w-1/2 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black border-none font-bold shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>WhatsApp Chat</span>
                    </Button>
                    <Button
                      type="button"
                      onClick={handleEmailSubmit}
                      variant="secondary"
                      className="w-full sm:w-1/2 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#6366F1]" />
                      <span>Send via Email</span>
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
