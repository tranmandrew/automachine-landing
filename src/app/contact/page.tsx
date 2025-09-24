'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Redirect to success page
        window.location.href = '/contact-success';
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      alert('There was an error sending your message. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      {/* Contact Section */}
      <section className="h-screen flex items-center justify-center relative px-4 py-20 pb-40 bg-white overflow-hidden">
        <div className="diagonal-divider bg-white"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-hero text-black font-bold mb-6 tracking-tight">
              CONTACT
            </h1>
            <p className="text-display text-gray-600 mb-4">
              Ready to automate your workflows?
            </p>
            <p className="text-heading text-gray-800 mb-4 font-medium">
              Let&apos;s discuss your automation goals<br />
              and create a custom solution
            </p>
            <p className="text-lg text-gray-600">
              Get started with a free workflow analysis
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white border-2 border-black p-6 rounded-none flex flex-col min-h-96" style={{position: 'fixed', left: 'calc((100vw - 72rem) / 2)', right: 'calc((100vw - 72rem) / 2 + 0.25rem)', bottom: 'calc(8rem + 68px + 1rem - 9px)', zIndex: 999}}>
            <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                  <h3 className="text-lg text-black font-bold mb-4">Get in Touch</h3>
                  <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="space-y-3"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      required
                      className="w-full px-3 py-2 border-2 border-black rounded-none focus:outline-none text-sm"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      className="w-full px-3 py-2 border-2 border-black rounded-none focus:outline-none text-sm"
                    />
                    <textarea
                      name="message"
                      placeholder="Message *"
                      required
                      rows={4}
                      className="w-full px-3 py-2 border-2 border-black rounded-none focus:outline-none text-sm resize-none"
                    ></textarea>

                    <input type="hidden" name="access_key" value="f93c282e-e8b5-4825-b247-fb6c719b199f" />
                    <input type="hidden" name="subject" value="Contact - Automachine" />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-lg text-black font-bold mb-4">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>Email:</strong>
                    </p>
                    <p className="text-base text-black font-mono">
                      andrew@automachine.dev
                    </p>
                    <p className="text-sm text-gray-600 mt-4">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
              </div>
            </div>
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

    </>
  );
}