"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsGallery() {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: t.projects.items[0],
      category: t.projects.categories.security,
      image: "/images/security-doors.png",
      size: "large"
    },
    {
      id: 2,
      title: t.projects.items[1],
      category: t.projects.categories.metal,
      image: "/images/custom-metalwork.png",
      size: "small"
    },
    {
      id: 3,
      title: t.projects.items[2],
      category: t.projects.categories.construction,
      image: "/images/stair-railings.png",
      size: "small"
    },
    {
      id: 4,
      title: t.projects.items[3],
      category: t.projects.categories.systems,
      image: "/images/high-security-locks.png",
      size: "small"
    },
    {
      id: 5,
      title: t.projects.items[4],
      category: t.projects.categories.metal,
      image: "/images/custom-gate.png",
      size: "large"
    },
    {
      id: 6,
      title: t.projects.items[5],
      category: t.projects.categories.security,
      image: "/images/window-grilles.png",
      size: "small"
    }
  ];

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
            {t.projects.tag}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6"
          >
            {t.projects.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-steel-400 max-w-2xl mx-auto"
          >
            {t.projects.description}
          </motion.p>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[280px] lg:auto-rows-[320px] grid-flow-row-dense">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-sm bg-steel-600 h-full w-full ${
                project.size === "large" ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
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
