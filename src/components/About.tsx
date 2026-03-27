"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const benefits = [
    "Zertifizierter Schweißfachbetrieb",
    "Jahrelange Erfahrung in München",
    "Gewerbliche und private Kunden",
    "Zuverlässiger Außendienst vor Ort"
  ];

  return (
    <section id="about" className="py-24 bg-charcoal-800 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative lines */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-steel-600/20 to-transparent ml-8 hidden md:block" />
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-copper-600/20 to-transparent mr-8 hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-copper-600/20 to-transparent blur-2xl rounded-sm z-0" />
            <div className="relative z-10 aspect-[4/5] rounded-sm overflow-hidden border border-steel-600/30">
              <img 
                src="https://images.unsplash.com/photo-1574889601004-ca021ced4cc9?q=80&w=1200&auto=format&fit=crop" 
                alt="Werner Hastreiter GmbH Metallbau Workshop" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-6 border-l-4 border-copper-500 rounded-r-sm max-w-[80%]">
                <p className="text-white font-bold text-xl mb-1">Qualität & Präzision</p>
                <p className="text-steel-400 text-sm">Seit vielen Jahren Ihr verlässlicher Partner in München.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-copper-500 font-bold tracking-wider uppercase text-sm mb-3">
              Über uns
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
              Ihre erfahrene Schlosserei in München
            </h3>
            
            <div className="space-y-6 text-steel-300 text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-white">Sie sind auf der Suche nach einem Schlosser mit Schlüsseldienst?</strong> Dann wenden Sie sich an unser Team der Werner Hastreiter GmbH in München! Unsere Handwerker öffnen Ihnen Tür und Tor.
              </p>
              <p>
                Als gewerbliche Bauschlosserei sind wir spezialisiert auf Metallschlösser und Beschläge sowie deren Reparatur. Wer unsere Metallbaufirma vor Ort aufsuchen möchte, findet am schnellsten mit der U-Bahn zu uns. 
              </p>
              <p>
                Im Einzugsgebiet München besuchen wir unsere gewerblichen und privaten Kunden gerne auch im Außendienst.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-copper-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-steel-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex bg-white/5 hover:bg-copper-600 border border-steel-600/50 hover:border-copper-500 text-white px-8 py-4 rounded-sm font-bold transition-all"
            >
              Lernen Sie uns kennen
            </a>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
