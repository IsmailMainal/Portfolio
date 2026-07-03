import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Journey from '../components/Journey/Journey';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Achievements from '../components/Achievements/Achievements';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

/**
 * Main Home Page Composition.
 * Renders all page sections sequentially. Smooth scrolling managed via Lenis.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
