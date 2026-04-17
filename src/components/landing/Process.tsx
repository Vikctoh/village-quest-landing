import React from "react";
import { motion } from "framer-motion";
import { Download, Compass, Gamepad2, Trophy, BookOpen, PlusCircle, HeartPulse, Sprout, Coins, BrainCircuit } from "lucide-react";

const Process: React.FC = () => {
  const steps = [
    { icon: <Download />, title: "Download", desc: "The app is designed to be installed once via community hubs or local SD cards." },
    { icon: <Compass />, title: "Choose Path", desc: "Learners will be able to choose custom learning journeys based on their age and goals." },
    { icon: <Gamepad2 />, title: "Play & Learn", desc: "LearnHamletiq will help children build skills through short, interactive educational games." },
    { icon: <Trophy />, title: "Track Growth", desc: "Progress and rewards will be stored locally and synced when a brief connection is available." },
  ];

  const areas = [
    { title: "Literacy", icon: <BookOpen />, color: "bg-blue-500" },
    { title: "Numeracy", icon: <PlusCircle />, color: "bg-emerald-500" },
    { title: "Health", icon: <HeartPulse />, color: "bg-rose-500" },
    { title: "Farming", icon: <Sprout />, color: "bg-green-600" },
    { title: "Money Skills", icon: <Coins />, color: "bg-amber-500" },
    { title: "Logic", icon: <BrainCircuit />, color: "bg-violet-500" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-emerald-600 text-sm font-bold uppercase tracking-[0.2em] mb-4 text-center">The Experience</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-20 text-center">How LearnHamletiq Works</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0" />
            
            {steps.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center relative z-10"
              >
                <div className="w-20 h-20 bg-emerald-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-emerald-100 mb-8 group hover:scale-110 transition-transform">
                  <div className="w-8 h-8">{s.icon}</div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-black">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pt-24 border-t border-slate-100">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 mb-4 text-center">What Children Will Learn</h3>
            <p className="text-slate-500 font-medium text-center">From core academics to vocational life skills, our curriculum is designed for real-world impact.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {areas.map((area, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center gap-4 transition-all"
              >
                <div className={`${area.color} p-4 rounded-2xl text-white shadow-lg shadow-current/10`}>
                  <div className="w-6 h-6">{area.icon}</div>
                </div>
                <span className="text-sm font-bold text-slate-700 tracking-tight">{area.title}</span></motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;