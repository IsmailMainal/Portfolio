import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contactHighFiveImage } from '../../assets';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = `Portfolio Project Inquiry: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Ismail Mainal Portfolio`;
    const mailtoUrl = `mailto:ismailmanyal3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading + Form */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242424] mb-3">
              Let's Trade Ideas
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6A66] leading-relaxed max-w-lg">
              I'm always glad to hear about interesting collaborations, full stack roles, or a stubborn database or API problem worth thinking through together.
            </p>
          </div>

          {/* Form with exact Kozoriz inputs */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs text-[#6E6A66] mb-1.5">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alex Henderson"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#ECE5DD] border-none text-xs sm:text-sm text-[#242424] placeholder-[#8C8681] focus:outline-none focus:ring-1 focus:ring-[#1A0A06]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs text-[#6E6A66] mb-1.5">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#ECE5DD] border-none text-xs sm:text-sm text-[#242424] placeholder-[#8C8681] focus:outline-none focus:ring-1 focus:ring-[#1A0A06]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs text-[#6E6A66] mb-1.5">
                What's on your mind?
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="An idea, a project, a question..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#ECE5DD] border-none text-xs sm:text-sm text-[#242424] placeholder-[#8C8681] focus:outline-none focus:ring-1 focus:ring-[#1A0A06] resize-none"
              />
            </div>

            {status === 'sent' && (
              <div className="p-3 rounded-lg bg-emerald-50 text-xs font-mono text-emerald-800">
                Message formatted and opened in your email client!
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#1A0A06] hover:bg-[#331B15] text-white text-xs font-medium transition-colors cursor-pointer shadow-xs"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Social Links & Kozoriz High-Five Illustration */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6 pt-4 lg:pt-0">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-mono text-[#8C8681] block">
              Find me here:
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-[#242424]">
              <a
                href="https://www.linkedin.com/in/ismail-mainal-187199215/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E65639] transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/IsmailMainal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E65639] transition-colors p-1"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ismailmanyal3@gmail.com"
                className="hover:text-[#E65639] transition-colors p-1"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Official Kozoriz High-Five Illustration */}
          <div className="w-full max-w-[300px] sm:max-w-[340px] pt-4">
            <img
              src={contactHighFiveImage}
              alt="High five collaboration"
              className="w-full h-auto object-contain select-none"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
