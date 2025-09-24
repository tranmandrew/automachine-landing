import React from 'react';
import Link from 'next/link';

export default function ContactSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check text-2xl text-emerald-600"></i>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>

        <p className="text-gray-600 mb-6">
          We&apos;ve received your enterprise inquiry and will be in touch within 24 hours to discuss your custom solution.
        </p>

        <div className="space-y-4">
          <Link href="/" className="block w-full bg-emerald-lake text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-700 transition-all">
            Back to Home
          </Link>
          <Link href="/pricing" className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-all">
            View Standard Pricing
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Questions? Email us directly at{' '}
            <a href="mailto:andrew@automachine.dev" className="text-emerald-600 hover:underline">andrew@automachine.dev</a>
          </p>
        </div>
      </div>
    </div>
  );
}