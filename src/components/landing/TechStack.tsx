import React from "react";
import { motion } from "framer-motion";
import { Server, Shield, Zap, Globe, Cpu, Database } from "lucide-react";

const TechStack: React.FC = () => {
  const tech = [
    { icon: <Server />, title: "AWS Infrastructure", desc: "Built on Amazon S3 and CloudFront for global, low-latency content delivery." },
    { icon: <Shield />, title: "Secure Sync", desc: "Enterprise-grade encryption for student progress data via AWS Cognito." },
    { icon: <Zap />, title: "Edge Computing", desc: "Local-first processing ensures zero lag even on entry-level hardware." },
    { icon: <Globe />, title: "Scalable Architecture", desc: "Serverless backend (AWS Lambda) scales instantly to millions of learners." },
    { icon: <Cpu />, title: "Smart Optimization", desc: "Binary assets optimized for minimal storage footprint on mobile." },
    { icon: <Database />, title: "Relational Sync", desc: "PostgreSQL backed progress tracking with offline conflict resolution." },
  ];

  return (
    <section id="tech" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-emerald-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">The Stack</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">
              Cloud Powered. <br/>Offline Native.
            </h3>
            <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">
              LearnHamletiq leverages cutting-edge AWS infrastructure to manage global educational content while maintaining a tiny device footprint. Our proprietary sync engine ensures no data is lost, even in the most remote areas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {tech.map((t, i) => (
                <div key={i} className="group">
                  <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform w-8 h-8">{t.icon}</div>
                  <h4 className="font-extrabold text-slate-900 mb-2">{t.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b10c8410-e1df-4c68-9cfc-c28a162c21f5/aws-powered-infrastructure-6f57c473-1776425066969.webp" 
                alt="Cloud Infrastructure Architecture" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;