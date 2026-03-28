"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-steel-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tighter text-white">
                Werner Hastreiter <span className="text-copper-500">GmbH</span>
              </span>
            </Link>
            <p className="text-steel-400 max-w-sm mt-4">
              {t.footer.about}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">{t.footer.navItems[0]}</a></li>
              <li><a href="#services" className="text-steel-400 hover:text-white transition-colors">{t.footer.navItems[1]}</a></li>
              <li><a href="#projects" className="text-steel-400 hover:text-white transition-colors">{t.footer.navItems[2]}</a></li>
              <li><a href="#about" className="text-steel-400 hover:text-white transition-colors">{t.footer.navItems[3]}</a></li>
              <li><a href="#contact" className="text-steel-400 hover:text-white transition-colors">{t.footer.navItems[4]}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">{t.footer.legalItems[0]}</a></li>
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">{t.footer.legalItems[1]}</a></li>
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">{t.footer.legalItems[2]}</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-steel-600/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-500 text-sm">
            &copy; {currentYear} Werner Hastreiter GmbH. {t.footer.rights}
          </p>
          <p className="text-steel-500 text-sm">
            {t.footer.designed}
          </p>
        </div>
      </div>
    </footer>
  );
}
