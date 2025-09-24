'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Pricing() {
  const [faqOpen, setFaqOpen] = useState<{ [key: string]: boolean }>({});

  const toggleFaq = (id: string) => {
    setFaqOpen(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      <Header />

      {/* Services Section */}
      <section className="h-full flex items-center justify-center relative px-4 py-20 pb-40 bg-white">
        <div className="diagonal-divider bg-white"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-left mb-16">
            <h1 className="text-hero text-black font-bold mb-6 tracking-tight">
              PRICING
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

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq('faq-1')}
                >
                  <h3 className="text-lg font-bold">How does the grading system work?</h3>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${faqOpen['faq-1'] ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`px-6 pb-6 ${faqOpen['faq-1'] ? '' : 'hidden'}`}>
                  <p className="text-gray-600">Our system analyzes watch images using advanced computer vision to identify condition issues, scratches, and wear patterns. The system provides detailed condition reports and professional grading.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq('faq-2')}
                >
                  <h3 className="text-lg font-bold">Can I cancel anytime?</h3>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${faqOpen['faq-2'] ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`px-6 pb-6 ${faqOpen['faq-2'] ? '' : 'hidden'}`}>
                  <p className="text-gray-600">Yes, absolutely. Cancel your subscription anytime with no penalties. Your account remains active until the end of your billing period.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq('faq-3')}
                >
                  <h3 className="text-lg font-bold">What formats do you support?</h3>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${faqOpen['faq-3'] ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`px-6 pb-6 ${faqOpen['faq-3'] ? '' : 'hidden'}`}>
                  <p className="text-gray-600">We accept JPG, JPEG, PNG, WEBP, and HEIC image formats. We recommend 3-6 high-quality photos from different angles for best results.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq('faq-4')}
                >
                  <h3 className="text-lg font-bold">Do you offer enterprise solutions?</h3>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${faqOpen['faq-4'] ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`px-6 pb-6 ${faqOpen['faq-4'] ? '' : 'hidden'}`}>
                  <p className="text-gray-600">Yes! We offer custom enterprise solutions with volume pricing, white-label options, and dedicated support. <a href="mailto:andrew@automachine.dev" className="text-emerald-lake font-medium">Contact us</a> to discuss your needs.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq('faq-5')}
                >
                  <h3 className="text-lg font-bold">How does the API work?</h3>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${faqOpen['faq-5'] ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`px-6 pb-6 ${faqOpen['faq-5'] ? '' : 'hidden'}`}>
                  <p className="text-gray-600">Professional plan includes full API access for integrating Automachine into your existing workflow. Complete documentation and SDKs available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 gradient-bg text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Watch Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of watch professionals who trust Automachine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://app.automachine.dev/signup" className="bg-white text-emerald-lake px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-block">
              Start Free Analysis
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-emerald-lake transition-all inline-block">
              Enterprise Contact
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top Button */}
      <button id="backToTop" className="fixed bottom-20 right-6 z-50 w-12 h-12 rounded-full bg-gray-800 text-white shadow-lg flex items-center justify-center transition-all opacity-0 invisible hover:bg-emerald-lake">
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 hidden" id="floatingCta">
        <a href="https://app.automachine.dev/signup" className="btn-primary px-6 py-3 rounded-full shadow-lg text-white font-medium bg-emerald-lake transition-all flex items-center">
          <span>Free Analysis</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>


      {/* Structured Data */}
      <Script id="pricing-structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pricing - Automachine",
            "description": "Professional watch condition grading with 5-stage analysis pipeline",
            "url": "https://automachine.dev/pricing",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Automachine",
              "offers": {
                "@type": "Offer",
                "price": "99.00",
                "priceCurrency": "USD"
              }
            }
          }
        `}
      </Script>
    </>
  );
}