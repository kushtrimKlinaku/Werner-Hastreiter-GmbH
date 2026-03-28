"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, dictionaries } from "@/i18n/dictionaries";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  langDe: boolean;
  t: typeof dictionaries.de;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");

  // Update language state
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    langDe: language === "de",
    t: dictionaries[language],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
