import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <Header />

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">By accessing and using Automachine&apos;s services, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
          <p className="text-gray-600 mb-6">Automachine provides automated watch condition grading and analysis services. Our platform analyzes watch images to provide condition assessments and market insights.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
          <p className="text-gray-600 mb-6">You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when using our services.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Limitations</h2>
          <p className="text-gray-600 mb-6">While we strive for accuracy, our automated grading system is a tool to assist in evaluation and should not be considered a substitute for professional appraisal when making significant purchasing decisions.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment and Billing</h2>
          <p className="text-gray-600 mb-6">Paid services are billed in advance on a monthly basis. Fees are non-refundable except as required by law. You may cancel your subscription at any time.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
          <p className="text-gray-600 mb-6">The Automachine service and its original content, features, and functionality remain the exclusive property of Automachine LLC and its licensors.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">In no event shall Automachine LLC be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-6">If you have any questions about these Terms of Service, please contact us at <a href="mailto:andrew@automachine.dev" className="text-emerald-lake font-medium">andrew@automachine.dev</a>.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}