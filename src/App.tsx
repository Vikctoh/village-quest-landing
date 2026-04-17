import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Problem from "./components/landing/Problem";
import Solution from "./components/landing/Solution";
import Process from "./components/landing/Process";
import Impact from "./components/landing/Impact";
import Testimonials from "./components/landing/Testimonials";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => {
  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Problem />
      </div>
      <div id="features">
        <Solution />
      </div>
      <div id="how-it-works">
        <Process />
      </div>
      <div id="impact">
        <Impact />
      </div>
      <div>
        <Testimonials />
      </div>
      <div id="contact">
        <CTA />
      </div>
    </main>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Set site icon
    const iconUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/ecf3573e-9d19-4d28-977b-4b1eea7d876d/1776428337403_site_icon.png";
    
    // Standard favicon
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.type = 'image/png';
    link.href = iconUrl;

    // Apple touch icon
    let appleIcon: HTMLLinkElement | null = document.querySelector("link[rel*='apple-touch-icon']");
    if (!appleIcon) {
      appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      document.getElementsByTagName('head')[0].appendChild(appleIcon);
    }
    appleIcon.href = iconUrl;

    // Set document title
    document.title = "LearnHamletiq | Empowering the Next Generation of Learners";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
        <Toaster position="top-center" richColors />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;