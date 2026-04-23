import { createContext, useContext, useState, useRef } from "react";

const AnchorContext = createContext();

export const AnchorProvider = ({ children }) => {
  const quoteRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const refs = {
    quotes: quoteRef,
    skills: skillsRef,
    experience: experienceRef,
    education: educationRef,
  };

  const scrollToSection = (section) => {
    const ref = refs[section];

    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnchorContext.Provider
      value={{
        quoteRef,
        skillsRef,
        experienceRef,
        educationRef,
        scrollToSection,
      }}
    >
      {children}
    </AnchorContext.Provider>
  );
};

export const useAnchor = () => useContext(AnchorContext);
