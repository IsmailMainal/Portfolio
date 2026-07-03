import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { useTheme } from './hooks/useTheme';

// Layout components
import LoadingScreen from './components/Common/LoadingScreen';
import CursorGlow from './components/Common/CursorGlow';
import ScrollProgressBar from './components/Common/ScrollProgressBar';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/Common/ScrollToTop';

// Pages lazily loaded for code splitting
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));


/**
 * Root Application Router & Scaffold.
 * Orchestrates Lenis smooth scroll, color theme bindings, global layout overlays, and core page routing.
 */
function App() {
  // Initialize smooth scroll
  useLenis();

  // Color Theme Manager
  const [theme, toggleTheme] = useTheme();

  // Page initialization loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Release loading screen after simulated initial environment bootstrap (1.6s)
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(delay);
  }, []);

  return (
    <BrowserRouter>
      {/* Visual Ambient Spotlights */}
      <CursorGlow />
      
      {/* Top Page Scroll completion bar */}
      <ScrollProgressBar />

      {/* Entry Silhouette Loader */}
      <LoadingScreen isLoading={isLoading} />

      {/* Main Container Layout */}
      <div className="flex flex-col min-h-screen selection:bg-[#2D6A4F] selection:text-[#F8FAFC]">
        {/* Sticky blur header */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Dynamic Page Router */}
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen bg-[#0B1120]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Back-To-Top button */}
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
