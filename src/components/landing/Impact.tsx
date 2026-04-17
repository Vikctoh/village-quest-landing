import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Cpu, Heart, School, Globe } from "lucide-react";

const Impact: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b10c8410-e1df-4c68-9cfc-c28a162c21f5/impact-visual-fb43e441-1776425938660.webp" 
                alt="Children learning in a community setting" 
                className="rounded-[3.5rem] shadow-2xl ring-1 ring-slate-200"
              />
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:flex items-center gap-4">
                <ShieldCheck size={40} />
                <div>
                  <p className="text-2xl font-black">Built for</p>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Communities</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <h2 className="text-emerald-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">The Vision</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">
              Built for Real Community Impact
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              We are building a platform that goes beyond basic literacy. Our goal is to empower rural learners with tools that work in their environment, respecting their unique challenges.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: <Globe size={20} />, title: "Designed for Offline Access", desc: "No constant data connection required for full curriculum access." },
                { icon: <Cpu size={20} />, title: "Built for Affordable Devices", desc: "Optimized for the $50 Android smartphones common in rural areas." },
                { icon: <Heart size={20} />, title: "Created for Rural Learners", desc: "Every lesson is designed with village-based contexts and storytelling." },
                { icon: <School size={20} />, title: "Structured for Partnerships", desc: "Designed for easy integration with schools, NGOs, and community programs." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-100 p-2 rounded-full text-emerald-600">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 leading-tight">{item.title}</h5>
                    <p className="text-slate-500 text-sm font-medium mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;