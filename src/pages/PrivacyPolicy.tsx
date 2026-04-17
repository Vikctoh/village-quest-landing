import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate prose-lg">
          <p className="text-slate-600 mb-6">Last Updated: May 2024</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Introduction</h2>
          <p className="text-slate-600 mb-6">
            At LearnHamletiq, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information from our waitlist participants and future users.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Information We Collect</h2>
          <p className="text-slate-600 mb-6">
            Currently, we collect personal information such as your name, email address, and organization when you voluntarily sign up for our waitlist or early access program.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Use of Information</h2>
          <p className="text-slate-600 mb-6">
            We use the information we collect to provide you with updates about LearnHamletiq, respond to your inquiries, and improve our pilot programs. We do not sell your personal data to third parties.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Data Security</h2>
          <p className="text-slate-600 mb-6">
            We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, or misuse.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Your Rights</h2>
          <p className="text-slate-600 mb-6">
            You have the right to access, correct, or request the deletion of your personal information at any time. To exercise these rights, please contact us at privacy@learnhamletiq.io.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Changes to This Policy</h2>
          <p className="text-slate-600 mb-6">
            We may update this Privacy Policy as LearnHamletiq evolves. We will notify you of any significant changes by posting the new policy on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;