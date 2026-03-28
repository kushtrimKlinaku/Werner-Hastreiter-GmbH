"use client";

import { motion } from "framer-motion";
import { PhoneCall, ArrowRight, ShieldCheck, Wrench, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const servicesList = [
    {
      title: t.services.items[0].title,
      description: t.services.items[0].description,
      icon: <Lock className="w-8 h-8 text-copper-500" />,
    },
    {
      title: t.services.items[1].title,
      description: t.services.items[1].description,
      icon: <ShieldCheck className="w-8 h-8 text-copper-500" />,
    },
    {
      title: t.services.items[2].title,
      description: t.services.items[2].description,
      icon: <Wrench className="w-8 h-8 text-copper-500" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-charcoal-900 border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-copper-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-copper-500 font-bold tracking-wider uppercase text-sm mb-3">
                {t.services.tag}
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                {t.services.title}
              </h3>
              <p className="text-steel-400 mb-8 leading-relaxed">
                {t.services.description}
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 bg-copper-600 hover:bg-copper-500 text-white px-6 py-3 rounded-sm font-semibold transition-all">
                  {t.services.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {servicesList.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-black/40 border border-steel-600/20 p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300 ${
                    index === 2 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="bg-white/5 w-16 h-16 rounded-sm flex items-center justify-center mb-6 border border-white/10">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-steel-400">{service.description}</p>
                </motion.div>
              ))}
              
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.3 }}
                 className="sm:col-span-2 bg-copper-600/10 border border-copper-500/30 p-8 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{t.services.emergency.title}</h4>
                  <p className="text-copper-400 text-sm">{t.services.emergency.subtitle}</p>
                </div>
                <a href="tel:+4989528753" className="flex items-center gap-2 flex-shrink-0 bg-copper-600 hover:bg-copper-500 text-white px-6 py-3 rounded-sm font-bold transition-all shadow-[0_0_20px_rgba(180,83,9,0.3)]">
                  <PhoneCall className="w-5 h-5" />
                  +49 89 528753
                </a>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
