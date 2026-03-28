"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { langDe, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.start, href: "#" },
    { name: t.navbar.services, href: "#services" },
    { name: t.navbar.projects, href: "#projects" },
    { name: t.navbar.about, href: "#about" },
    { name: t.navbar.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg py-4 border-b border-steel-600/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-white">
                Werner Hastreiter <span className="text-copper-500">GmbH</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-steel-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-steel-600/50">
              <button 
                onClick={() => setLanguage(langDe ? "en" : "de")}
                className="flex items-center text-steel-400 hover:text-white transition-colors" 
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span className="text-xs font-bold">{t.navbar.language}</span>
              </button>
              
              <a
                href="#contact"
                className="bg-copper-600 hover:bg-copper-500 text-white px-5 py-2.5 rounded-sm font-semibold text-sm transition-all shadow-[0_0_15px_rgba(180,83,9,0.4)]"
              >
                {t.navbar.requestQuote}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-steel-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-900 border-b border-steel-600/30 absolute w-full left-0 top-full">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-steel-300 hover:text-white hover:bg-white/5 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center bg-copper-600 text-white px-4 py-3 rounded-sm font-bold text-sm w-full"
              >
                {t.navbar.requestQuote}
              </a>
              <button 
                onClick={() => setLanguage(langDe ? "en" : "de")}
                className="flex items-center justify-center text-steel-400 py-2 border border-steel-600/50 rounded-sm"
              >
                <Globe className="w-4 h-4 mr-2" />
                {t.navbar.language}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
