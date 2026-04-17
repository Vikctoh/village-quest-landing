import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Handshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Be Part of the Journey
            </h3>
            <p className="text-slate-400 text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
              LearnHamletiq is preparing for pilot launch. Join the waitlist, request a demo, or partner with us to help expand access to learning.
            </p>
            
            {!submitted ? (
              <div className="flex flex-col items-center gap-10">
                <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white/5 p-8 lg:p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                  <h4 className="text-white text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                    <Users className="text-emerald-400" /> Join the Waitlist
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                    <div className="space-y-2">
                      <label className="text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                      <Input 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-14 rounded-xl px-5 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                      <Input 
                        type="email" 
                        placeholder="email@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-14 rounded-xl px-5 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Organization</label>
                      <Input 
                        placeholder="School, NGO, etc." 
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-14 rounded-xl px-5 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Interest Type</label>
                      <Select onValueChange={(val) => setFormData({...formData, interest: val})}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white h-14 rounded-xl px-5">
                          <SelectValue placeholder="Select interest" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-white/20 text-white">
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="school">School</SelectItem>
                          <SelectItem value="ngo">NGO</SelectItem>
                          <SelectItem value="partner">Community Partner</SelectItem>
                          <SelectItem value="investor">Investor / Supporter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl h-16 text-lg font-bold shadow-xl shadow-emerald-500/20 group transition-all"
                  >
                    Request Early Access <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button 
                    variant="outline"
                    onClick={() => toast.info("Opening demo request...")}
                    className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-2xl px-10 h-14 font-bold"
                  >
                    Request Demo
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={() => toast.info("Opening partnership inquiry...")}
                    className="text-white hover:bg-white/10 rounded-2xl px-10 h-14 font-bold"
                  >
                    <Handshake className="mr-2 w-5 h-5" /> Partner With Us
                  </Button>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex flex-col items-center gap-6 bg-emerald-500/10 text-emerald-400 p-12 rounded-[3rem] border border-emerald-500/20"
              >
                <div className="bg-emerald-500 text-white p-4 rounded-full">
                  <CheckCircle size={40} />
                </div>
                <div>
                  <h4 className="text-3xl font-black mb-2">You're on the list!</h4>
                  <p className="text-emerald-400/80 font-medium">We've received your request for early access. Our team will reach out to you shortly.</p>
                </div>
              </motion.div>
            )}
          </div>
          
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default CTA;