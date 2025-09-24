'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
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

      {/* Services Section */}
      <section className="h-full flex items-center justify-center relative px-4 py-20 pb-40">
        <div className="diagonal-divider bg-white"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-left mb-16">
            <h1 className="text-hero text-black font-bold mb-6 tracking-tight">
              SERVICES
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Workflow Intelligence - Left Card */}
            <div className="bg-white border-2 border-black p-6 rounded-none flex flex-col min-h-96">
              <div className="mb-4">
                <h3 className="text-lg text-black font-bold">WORKFLOW INTELLIGENCE</h3>
                <p className="text-xl font-bold text-black mt-2">$12K - $18K</p>
              </div>
              <p className="text-gray-700 mb-4">
                Automate single processes with AI
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6 flex-grow">
                <li>• Order processing automation</li>
                <li>• Inventory sync & alerts</li>
                <li>• Customer service workflows</li>
                <li>• Basic analytics dashboard</li>
                <li>• Email integration</li>
              </ul>
              <button className="w-full py-3 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all mt-auto">
                Get Started
              </button>
            </div>

            {/* System Integration - Center Card (Square) */}
            <div className="bg-black border-2 border-black p-6 rounded-none flex flex-col min-h-96">
              <div className="mb-4">
                <h3 className="text-lg text-white font-bold">SYSTEM INTEGRATION</h3>
                <p className="text-xl font-bold text-white mt-2">$18K - $25K</p>
                <div className="bg-white text-black px-3 py-1 text-sm inline-block mt-2">
                  MOST POPULAR
                </div>
              </div>
              <p className="text-gray-200 mb-4">
                Connect your entire tech stack
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-6 flex-grow">
                <li>• Everything in Workflow Intelligence</li>
                <li>• Multi-platform integration</li>
                <li>• Advanced AI recommendations</li>
                <li>• Custom reporting suite</li>
                <li>• Priority support & training</li>
              </ul>
              <button className="w-full py-3 bg-white border-2 border-white text-black hover:bg-black hover:text-white hover:border-white transition-all mt-auto">
                Start Integration
              </button>
            </div>

            {/* Custom AI Solutions - Right Card */}
            <div className="bg-white border-2 border-black p-6 rounded-none flex flex-col min-h-96">
              <div className="mb-4">
                <h3 className="text-lg text-black font-bold">CUSTOM AI SOLUTIONS</h3>
                <p className="text-xl font-bold text-black mt-2">$25K - $40K</p>
              </div>
              <p className="text-gray-700 mb-4">
                Neural networks built for you
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6 flex-grow">
                <li>• Everything in System Integration</li>
                <li>• Custom AI model development</li>
                <li>• Predictive analytics engine</li>
                <li>• White-glove implementation</li>
                <li>• Dedicated success manager</li>
              </ul>
              <button className="w-full py-3 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all mt-auto">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}