"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sicherheitstüren",
    category: "Einbruchschutz",
    image: "https://images.unsplash.com/photo-1541812613137-b95c02ef1bb5?q=80&w=1000&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    title: "Maßgefertigtes Tor",
    category: "Metallbau",
    image: "https://images.unsplash.com/photo-1628174786765-ab1b95147854?q=80&w=1000&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "Treppengeländer",
    category: "Konstruktion",
    image: "https://images.unsplash.com/photo-1600021946864-152e04374cbf?q=80&w=1000&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 4,
    title: "Schließanlagen",
    category: "Sicherheitstechnik",
    image: "https://images.unsplash.com/photo-1558005530-cb61e21b0fb6?q=80&w=1000&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 5,
    title: "Stahltreppe",
    category: "Metallbau",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    size: "large"
  }
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-24 bg-charcoal-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-copper-500 font-bold tracking-wider uppercase text-sm mb-3"
          >
            Referenzen
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6"
          >
            Unsere Arbeiten
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-steel-400 max-w-2xl mx-auto"
          >
            Vom massiven Stahltor bis zur feinen Schließanlage: Werfen Sie einen Blick auf einige unserer erfolgreich realisierten Projekte für Kunden im Raum München.
          </motion.p>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-sm bg-steel-600 ${
                project.size === "large" ? "md:col-span-2 md:row-span-2 aspect-[16/9]" : "aspect-square"
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-copper-500 text-sm font-bold tracking-wider uppercase mb-1 block">
                    {project.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    <button className="bg-white/10 hover:bg-copper-600 text-white p-2 rounded-sm transition-colors backdrop-blur-sm">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
