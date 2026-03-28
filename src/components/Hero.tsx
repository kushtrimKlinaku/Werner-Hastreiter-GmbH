"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-charcoal-900"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/80 to-charcoal-900 z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Google Reviews Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-steel-600/30 px-4 py-2 rounded-full mb-8 shadow-2xl"
        >
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-white font-semibold text-sm">{t.hero.reviews}</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl"
          dangerouslySetInnerHTML={{ __html: t.hero.title }}
        />

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-steel-300 mb-10 max-w-2xl font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="tel:+4989528753" 
            className="bg-copper-600 hover:bg-copper-500 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all shadow-[0_0_20px_rgba(180,83,9,0.4)] flex items-center justify-center gap-2"
          >
            {t.hero.ctaPrimary}
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-steel-400 hover:border-white hover:text-white hover:bg-white/5 text-steel-300 px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-steel-500"
      >
        <span className="text-xs tracking-widest uppercase mb-2">{t.hero.scroll}</span>
        <div className="w-[1px] h-8 bg-current"></div>
      </motion.div>
    </section>
  );
}
