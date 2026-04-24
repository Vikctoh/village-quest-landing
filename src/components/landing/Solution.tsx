import React from "react";
import { motion } from "framer-motion";
import { WifiOff, Gamepad2, MapPin, LineChart, Smartphone, Languages, Cloud } from "lucide-react";

const Solution: React.FC = () => {
  const features = [
    { icon: <WifiOff />, title: "Offline-First Learning", desc: "The app is designed to work fully without internet, allowing 24/7 access to lessons." },
    { icon: <Gamepad2 />, title: "Game-Based Lessons", desc: "We are building immersive worlds where learning math and literacy feels like an adventure." },
    { icon: <MapPin />, title: "Local-Context Storytelling", desc: "Lessons will feature stories and characters that reflect the rural learner's daily life." },
    { icon: <LineChart />, title: "Progress Tracking", desc: "Learners will be able to monitor their growth through visual maps and skill trees." },
    { icon: <Smartphone />, title: "Low-End Android Support", desc: "Our engine will be optimized to run smoothly on legacy devices with limited memory." },
    { icon: <Languages />, title: "Dual-Language Support", desc: "The app will support seamless switching between local dialects and national languages." },
    { icon: <Cloud />, title: "Cloud-Powered Intelligence", desc: "LearnHamletiq uses cloud infrastructure for content delivery, student progress data, and AI-powered personalized learning." },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          <div className="lg:w-1/2">
            <h2 className="text-emerald-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Why LearnHamletiq</h2>
            <h3 className="text-4xl lg:text-6xl font-black mb-8 leading-[1.1]">
              Built for Impact, Designed for Access
            </h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed font-medium">
              LearnHamletiq is being built to make learning more accessible, engaging, and relevant for children in underserved communities. We are rethinking the digital classroom for the offline world.
            </p>
            <p className="text-slate-300 text-base mb-12 leading-relaxed font-semibold border-l-2 border-emerald-500 pl-4">
              LearnHamletiq uses cloud infrastructure for content delivery, student progress data, and AI-powered personalized learning — so every child gets a curriculum that adapts to them.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {features.map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-5"
                >
                  <div className="text-emerald-400 shrink-0 w-8 h-8">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-white">{f.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[3.5rem] overflow-hidden border-[16px] border-slate-800 shadow-[0_0_80px_rgba(16,185,129,0.15)] ring-1 ring-slate-700 bg-slate-800">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b10c8410-e1df-4c68-9cfc-c28a162c21f5/excited-children-with-phone-157feb8f-1776426447572.webp" 
                alt="Two Black children smiling and excitedly holding a phone"
                className="w-full h-auto transition-all duration-500 hover:scale-105"
              />
            </div>
            
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/20 blur-[120px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;