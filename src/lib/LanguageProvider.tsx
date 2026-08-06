"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
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


const LanguageContext =
  createContext<ContextType | null>(null);



type LanguageProviderProps = {
  children: ReactNode;
};



export function LanguageProvider({
  children,
}: LanguageProviderProps) {


  // Selalu sama antara server dan client
  const [language, setLanguageState] =
    useState<Language>("id");


  const [mounted, setMounted] =
    useState(false);



  // Ambil bahasa setelah client mounted
  useEffect(() => {

    const saved =
      window.localStorage.getItem("language");


    if (
      saved === "id" ||
      saved === "en"
    ) {
      setLanguageState(saved);
    }


    setMounted(true);

  }, []);



  function setLanguage(language: Language){

    setLanguageState(language);

    window.localStorage.setItem(
      "language",
      language
    );

  }



  const value = useMemo(
    () => ({
      language,
      setLanguage,
      mounted,
      t: dictionaries[language],
    }),
    [
      language,
      mounted,
    ]
  );



  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );

}



export function useLanguage(): ContextType {

  const context =
    useContext(LanguageContext);


  if (!context) {

    throw new Error(
      "useLanguage must be used inside LanguageProvider."
    );

  }


  return context;

}