import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

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

          {/* Kozoriz High-Five Illustration in Terracotta #E65639 (matching Screenshot 1) */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] pt-4">
            <svg
              viewBox="0 0 320 340"
              className="w-full h-auto text-[#E65639]"
              fill="none"
              stroke="#E65639"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Spark lines between hands */}
              <line x1="160" y1="65" x2="160" y2="45" strokeWidth="2.5" />
              <line x1="145" y1="72" x2="135" y2="58" strokeWidth="2.5" />
              <line x1="175" y1="72" x2="185" y2="58" strokeWidth="2.5" />

              {/* Left Figure (Woman with bun & glasses) */}
              {/* Head & Hair */}
              <circle cx="95" cy="120" r="18" fill="#E65639" />
              <circle cx="82" cy="122" r="14" fill="#E65639" />
              <circle cx="106" cy="124" r="10" strokeWidth="2" fill="#FBF5EF" />
              {/* Glasses */}
              <circle cx="103" cy="122" r="4" strokeWidth="1.5" />
              <path d="M107 122 L112 124" strokeWidth="1.5" />

              {/* Left Body & Arm raising to high-five */}
              <path
                d="M102 138 C108 152 114 175 110 200 L76 215 C82 185 88 158 98 138 Z"
                strokeWidth="2"
                fill="#FBF5EF"
              />
              {/* High five arm */}
              <path
                d="M106 150 C125 130 142 98 154 75"
                strokeWidth="2.5"
              />
              <path
                d="M154 75 C156 70 162 70 160 78"
                strokeWidth="2.5"
              />

              {/* Left Pants */}
              <path
                d="M76 215 C80 260 62 300 55 315 L78 320 C88 290 98 250 96 230 C96 255 102 285 110 320 L130 315 C122 280 114 240 110 200 Z"
                strokeWidth="2"
                fill="#E65639"
              />
              {/* Left Shoes */}
              <path d="M50 315 C55 328 72 328 78 320" strokeWidth="2" fill="#E65639" />
              <path d="M110 320 C116 328 132 328 138 320" strokeWidth="2" fill="#E65639" />

              {/* Right Figure (Man high-fiving) */}
              {/* Head & Hair */}
              <path
                d="M210 102 C218 100 230 108 226 122 C222 135 210 135 204 125 C200 118 202 105 210 102 Z"
                strokeWidth="2"
                fill="#FBF5EF"
              />
              <path
                d="M214 100 C218 95 232 100 230 118 C225 112 216 110 214 100 Z"
                fill="#E65639"
              />
              {/* Smile / Profile */}
              <path d="M208 124 C212 126 216 124 216 122" strokeWidth="1.5" />

              {/* Right Body & High-five arm */}
              <path
                d="M204 135 C196 150 190 175 194 205 L228 202 C234 175 230 152 218 135 Z"
                strokeWidth="2"
                fill="#FBF5EF"
              />
              {/* Raised arm */}
              <path
                d="M200 150 C185 125 172 98 160 76"
                strokeWidth="2.5"
              />
              <path
                d="M160 76 C158 72 164 70 162 78"
                strokeWidth="2.5"
              />

              {/* Right Pants */}
              <path
                d="M194 205 C190 250 194 290 196 320 L218 320 C218 280 218 250 216 230 C220 250 226 280 236 315 L256 310 C246 270 238 235 228 202 Z"
                strokeWidth="2"
                fill="#E65639"
              />
              {/* Right Shoes */}
              <path d="M192 320 C198 328 215 328 220 320" strokeWidth="2" fill="#E65639" />
              <path d="M232 315 C238 324 254 324 258 312" strokeWidth="2" fill="#E65639" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
