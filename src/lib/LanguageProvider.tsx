"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  dictionaries,
  type Dictionary,
  type Language,
} from "./dictionary";

type ContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
  mounted: boolean;
};

const LanguageContext = createContext<ContextType | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "id";
    }

    const saved = window.localStorage.getItem("language");

    return saved === "id" || saved === "en"
      ? saved
      : "id";
  });

  // React 19 replacement untuk mounted state
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    if (!mounted) return;

    window.localStorage.setItem(
      "language",
      language
    );
  }, [language, mounted]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      mounted,
      t: dictionaries[language],
    }),
    [language, mounted]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): ContextType {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider."
    );
  }

  return context;
}