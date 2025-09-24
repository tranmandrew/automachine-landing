'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Load animations after component mounts
    const script = document.createElement('script');
    script.src = '/animations.js';
    script.async = true;
    script.defer = true;

    const handleLoad = () => {
      console.log('Animations script loaded');
    };

    const handleError = () => {
      console.error('Failed to load animations script');
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);
    document.body.appendChild(script);

    return () => {
      // Cleanup event listeners
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);

      // Remove script if still in DOM
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-hidden h-screen relative">
      <Header />

      {/* Hero Section */}
      <section className="h-full flex items-center justify-center relative px-4 py-20">
        <div className="diagonal-divider bg-white"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-hero text-black font-bold mb-8 tracking-tight text-left pl-8 md:pl-16">
            AUTOMACHINE
          </h1>
          <div className="text-center">
            <p className="text-display text-gray-600 mb-6">
              eCommerce accelerator through automation
            </p>

            <p className="text-heading text-gray-800 mb-4 font-medium">
              We eliminate manual workflows<br />
              that limit your growth
            </p>

            <p className="text-lg text-gray-600 mb-12">
              Custom AI systems for growing eCommerce operations
            </p>
          </div>

          {/* Geometric decorations */}
          <div className=""></div>
          <div className=""></div>
        </div>
      </section>


      <Footer />
    </div>
  );
}