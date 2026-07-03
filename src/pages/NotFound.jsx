import React from 'react';
import { Compass, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion';

import Button from '../components/Common/Button';

/**
 * Custom 404 Page: "Altitude Lost".
 * Renders a stylized vector mountain silhouette and a redirect button.
 */
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2D6A4F]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 404 Core Layout */}
      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center">
        {/* SVG Mountain Illustration */}
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-48 h-48 mb-8 text-[#2D6A4F]"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full stroke-current fill-none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Draw mountains outline */}
            <m.path
              d="M10 80 L40 30 L55 55 L80 15 L90 80"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            {/* Dash clouds */}
            <path d="M25 45 H35 M65 30 H75 M48 65 H55" strokeDasharray="3 3" className="stroke-white/20" />
            {/* Horizontal ground grid */}
            <line x1="5" y1="80" x2="95" y2="80" className="stroke-white/10" />
          </svg>
        </m.div>

        {/* Status code */}
        <m.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-heading-space text-xs font-bold tracking-[0.3em] uppercase text-[#84CC16] mb-3"
        >
          404 Error
        </m.span>

        {/* Heading */}
        <m.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-heading-sora text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-4"
        >
          Altitude Lost
        </m.h1>

        {/* Description text */}
        <m.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-body text-sm text-[#94A3B8] leading-relaxed mb-8"
        >
          The mountain path or peak you are trying to reach does not exist, or has been relocated to another valley.
        </m.p>

        {/* Action Button */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Button onClick={() => navigate('/')} variant="primary">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Base Camp</span>
          </Button>
        </m.div>
      </div>
    </div>
  );
}
