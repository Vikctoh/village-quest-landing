import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, WifiOff, Layout, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Preparing for Pilot Launch
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-sm font-bold text-emerald-700 uppercase tracking-[0.18em] mb-5"
            >
              Offline-first edtech platform improving literacy in underserved communities.
            </motion.p>
            
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
              Learning That <span className="text-emerald-600">Reaches Every Child</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              LearnHamletiq is an upcoming offline-first educational game designed to help children in rural communities build literacy, numeracy, and life skills through engaging, low-data mobile learning.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl shadow-emerald-200 h-auto group"
              >
                Join Waitlist <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full px-10 py-7 text-lg font-bold h-auto bg-transparent backdrop-blur-sm shadow-sm"
              >
                Request Demo
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-400 font-bold uppercase tracking-wider">
              Currently preparing for pilot launch with schools, NGOs, and community partners.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <Laptop size={20} className="text-emerald-600" />
                <span className="font-bold text-sm tracking-tighter">OFFLINE-FIRST DESIGN</span>
              </div>
              <div className="flex items-center gap-2">
                <Layout size={20} className="text-emerald-600" />
                <span className="font-bold text-sm tracking-tighter">LOW-DATA GAMES</span>
              </div>
              <div className="flex items-center gap-2">
                <WifiOff size={20} className="text-emerald-600" />
                <span className="font-bold text-sm tracking-tighter">RURAL OPTIMIZED</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100 bg-slate-100">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b10c8410-e1df-4c68-9cfc-c28a162c21f5/hero-visual-81905994-1776425939898.webp" 
                alt="Children in a rural setting learning together"
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Floating Info */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-5 max-w-xs border border-slate-100"
            >
              <div className="bg-amber-100 p-4 rounded-2xl text-amber-600">
                <WifiOff size={32} />
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg leading-tight">Design Intent</p>
                <p className="text-sm text-slate-500 font-medium leading-snug">Zero data required for core gameplay.</p>
              </div>
            </motion.div>

            {/* Decor */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-400/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;