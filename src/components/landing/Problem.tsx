import React from "react";
import { motion } from "framer-motion";
import { WifiOff, BookOpen, UserX, BrainCircuit } from "lucide-react";

const Problem: React.FC = () => {
  const problems = [
    { 
      icon: <WifiOff className="w-8 h-8 text-emerald-600" />, 
      title: "Low Internet Access", 
      desc: "LearnHamletiq is being built to eliminate the dependency on high-speed internet that excludes millions from digital learning." 
    },
    { 
      icon: <BookOpen className="w-8 h-8 text-emerald-600" />, 
      title: "Limited Digital Tools", 
      desc: "We are designing low-resource software that works effectively on affordable, low-spec Android devices." 
    },
    { 
      icon: <UserX className="w-8 h-8 text-emerald-600" />, 
      title: "Low Engagement", 
      desc: "Our game-based approach aims to solve the problem of high dropout rates in traditional remote learning environments." 
    },
    { 
      icon: <BrainCircuit className="w-8 h-8 text-emerald-600" />, 
      title: "Need for Practicality", 
      desc: "We focus on real-world skills like health, farming, and finance that are often missing from standard curricula." 
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-emerald-600 text-sm font-bold uppercase tracking-[0.2em] mb-4 text-center">The Challenge</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 text-center">
            The Learning Gap We Aim to Solve
          </h3>
          <p className="text-lg text-slate-500 font-medium text-center">
            Educational technology often assumes infrastructure that doesn't exist in rural areas. LearnHamletiq is being built to bridge this divide through smart, offline-first engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <div className="mb-8 p-5 bg-emerald-50 rounded-2xl w-fit shadow-sm border border-emerald-100">{p.icon}</div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-4">{p.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;