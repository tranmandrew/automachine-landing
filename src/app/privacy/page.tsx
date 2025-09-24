import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <>
      <Header />

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-6">When you use Automachine, we collect information you provide directly to us, such as when you create an account, upload watch images, or contact us for support.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">We use the information we collect to provide, maintain, and improve our watch grading services, process your uploads, and communicate with you about your account.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
          <p className="text-gray-600 mb-6">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-6">You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:andrew@automachine.dev" className="text-emerald-lake font-medium">andrew@automachine.dev</a>.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}