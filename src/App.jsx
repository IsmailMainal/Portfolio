import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';

// Global Layout Components
import ScrollProgressBar from './components/Common/ScrollProgressBar';
import ScrollToTop from './components/Common/ScrollToTop';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <BrowserRouter>
      {/* Top reading progress */}
      <ScrollProgressBar />

      {/* Main App */}
      <Suspense fallback={<div className="min-h-screen bg-[#FBF5EF]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
