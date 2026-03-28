"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 bg-charcoal-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-copper-500 font-bold tracking-wider uppercase text-sm mb-3"
          >
            {t.contact.tag}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6"
          >
            {t.contact.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-steel-400 max-w-2xl mx-auto"
          >
            {t.contact.description}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="bg-black/40 border border-steel-600/30 p-6 rounded-sm">
                <MapPin className="text-copper-500 w-8 h-8 mb-4 border border-copper-500/20 p-1.5 rounded-sm bg-copper-600/10" />
                <h4 className="text-white font-bold mb-2">{t.contact.details.location}</h4>
                <p className="text-steel-400">Werner Hastreiter GmbH<br />Lerchenstraße 20<br />80995 München, Germany</p>
              </div>

              <div className="bg-black/40 border border-steel-600/30 p-6 rounded-sm">
                <Phone className="text-copper-500 w-8 h-8 mb-4 border border-copper-500/20 p-1.5 rounded-sm bg-copper-600/10" />
                <h4 className="text-white font-bold mb-2">{t.contact.details.phone}</h4>
                <a href="tel:+4989528753" className="text-steel-400 hover:text-white transition-colors block text-lg font-bold">
                  +49 89 528753
                </a>
              </div>

              <div className="bg-black/40 border border-steel-600/30 p-6 rounded-sm">
                <Mail className="text-copper-500 w-8 h-8 mb-4 border border-copper-500/20 p-1.5 rounded-sm bg-copper-600/10" />
                <h4 className="text-white font-bold mb-2">{t.contact.details.email}</h4>
                <a href="mailto:info@werner-hastreiter.de" className="text-steel-400 hover:text-white transition-colors">
                  info@werner-hastreiter.de
                </a>
              </div>

              <div className="bg-black/40 border border-steel-600/30 p-6 rounded-sm">
                <Clock className="text-copper-500 w-8 h-8 mb-4 border border-copper-500/20 p-1.5 rounded-sm bg-copper-600/10" />
                <h4 className="text-white font-bold mb-2">{t.contact.details.hours}</h4>
                <p className="text-steel-400" dangerouslySetInnerHTML={{ __html: t.contact.hoursText }} />
              </div>

            </div>

            {/* Google Maps Embed Placeholder - using grayscale filter to match theme */}
            <div className="w-full h-64 bg-steel-800 rounded-sm overflow-hidden border border-steel-600/30 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.267860269399!2d11.536737!3d48.212046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e76868d4a6a57%3A0xe7f9b87f9b7c8f9b!2sLerchenstra%C3%9Fe%2020%2C%2080995%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%) hue-rotate(180deg)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-charcoal-800 p-8 rounded-sm border border-steel-600/20 shadow-2xl"
          >
            <h4 className="text-2xl font-bold text-white mb-6">{t.contact.form.title}</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-steel-400 mb-2">{t.contact.form.nameLabel}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/50 border border-steel-600/40 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-colors"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-steel-400 mb-2">{t.contact.form.phoneLabel}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-black/50 border border-steel-600/40 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-colors"
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-steel-400 mb-2">{t.contact.form.emailLabel}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black/50 border border-steel-600/40 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-colors"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-steel-400 mb-2">{t.contact.form.messageLabel}</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-black/50 border border-steel-600/40 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-colors resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-copper-600 hover:bg-copper-500 text-white font-bold py-4 rounded-sm transition-all shadow-[0_0_15px_rgba(180,83,9,0.3)]"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
