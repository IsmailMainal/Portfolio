import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF5EF] text-[#242424] flex flex-col lg:flex-row">
      {/* Mobile Sticky Navbar at top of viewport (< lg) */}
      <div className="block lg:hidden sticky top-0 z-40">
        <Navbar />
      </div>

      {/* Sidebar: on mobile sits under Navbar; on desktop is left sticky column */}
      <Sidebar />

      {/* Scrollable Right Main Column */}
      <div className="flex-1 min-w-0 flex flex-col bg-[#FBF5EF]">
        {/* Desktop Sticky Navbar (>= lg) */}
        <div className="hidden lg:block sticky top-0 z-40">
          <Navbar />
        </div>

        <main className="flex-1 px-3 sm:px-8 lg:px-16 py-6 sm:py-8 max-w-4xl w-full">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
