import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Terms & Conditions</h1>
        <div className="prose prose-slate prose-lg">
          <p className="text-slate-600 mb-6">Last Updated: May 2024</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-600 mb-6">
            By accessing or using the LearnHamletiq website and signing up for our waitlist, you agree to be bound by these Terms & Conditions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Waitlist and Early Access</h2>
          <p className="text-slate-600 mb-6">
            Signing up for the waitlist does not guarantee access to the LearnHamletiq pilot program or the final product. Access is granted at our sole discretion based on program capacity and partnership suitability.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Intellectual Property</h2>
          <p className="text-slate-600 mb-6">
            All content on this website, including text, graphics, logos, and software, is the property of LearnHamletiq and is protected by intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Limitation of Liability</h2>
          <p className="text-slate-600 mb-6">
            LearnHamletiq is currently in development. We provide this website on an "as is" basis and make no warranties regarding the availability or performance of future software.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Contact Us</h2>
          <p className="text-slate-600 mb-6">
            If you have any questions about these Terms & Conditions, please contact us at legal@learnhamletiq.io.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;