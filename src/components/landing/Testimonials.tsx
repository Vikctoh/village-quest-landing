import React from "react";
import { motion } from "framer-motion";
import { Quote, Heart, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials: React.FC = () => {
  const insights = [
    {
      title: "Built for Communities",
      text: "We believe that educational tools should adapt to the environment, not the other way around. Our focus is on making technology invisible so learning can shine.",
      icon: <Users className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Why This Matters",
      text: "Over 1.2 billion children live in areas with limited digital access. By building offline-first, we are ensuring no child is left behind in the digital age.",
      icon: <Heart className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Designed for Real Learning",
      text: "Learning is most effective when it is relevant. Our curriculum integrates literacy and numeracy with practical life skills like farming and finance.",
      icon: <Lightbulb className="w-8 h-8 text-emerald-600" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-emerald-600 text-sm font-bold uppercase tracking-[0.2em] mb-4 text-center">Our Philosophy</h2>
          <h3 className="text-4xl font-black text-slate-900 text-center">A Foundation for Growth</h3>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-none shadow-xl shadow-slate-200/50 bg-slate-50 rounded-[2.5rem] overflow-hidden hover:scale-[1.02] transition-transform duration-300 h-full">
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm">
                    {insight.icon}
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-6">{insight.title}</h4>
                  <Quote className="text-emerald-100 mb-4 w-10 h-10" />
                  <p className="text-slate-600 font-medium leading-relaxed italic">
                    {insight.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;