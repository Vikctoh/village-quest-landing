import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Globe, ShieldCheck } from "lucide-react";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-8">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/ecf3573e-9d19-4d28-977b-4b1eea7d876d/1776428170529_main_logo.png" 
                alt="LearnHamletiq Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              Empowering the next generation of rural learners through interactive, offline-first educational games. Currently preparing for pilot launch.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Globe].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">Pilot Program</h5>
            <ul className="space-y-4">
              {[
                { name: "About", href: "#about" },
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Impact Vision", href: "#impact" }
              ].map((l) => (
                <li key={l.name}>
                  <a 
                    href={l.href} 
                    onClick={(e) => handleSectionLink(e, l.href)}
                    className="text-slate-500 hover:text-emerald-600 font-medium transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">Resources</h5>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-slate-500 hover:text-emerald-600 font-medium transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-slate-500 hover:text-emerald-600 font-medium transition-colors">Terms & Conditions</Link></li>
              <li><a href="#contact" onClick={(e) => handleSectionLink(e, "#contact")} className="text-slate-500 hover:text-emerald-600 font-medium transition-colors">Partner Program</a></li>
              <li><a href="#contact" onClick={(e) => handleSectionLink(e, "#contact")} className="text-slate-500 hover:text-emerald-600 font-medium transition-colors">Request Early Access</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">Get In Touch</h5>
            <p className="text-slate-500 font-medium mb-6">
              partners@learnhamletiq.io<br/>
              Join our waitlist for updates.
            </p>
            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <ShieldCheck className="text-emerald-600" size={24} />
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Status</p>
                <p className="text-xs font-bold text-slate-900 leading-tight">Pre-Launch Stage</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <p className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} LearnHamletiq. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-400 text-sm font-bold">Beta Phase v0.8.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;