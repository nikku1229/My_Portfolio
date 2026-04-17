import { createContext, useContext, useState, useRef } from "react";

const AnchorContext = createContext();

export const AnchorProvider = ({ children }) => {
  const quoteRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "quotes") {
      quoteRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnchorContext.Provider value={{ quoteRef, scrollToSection }}>
      {children}
    </AnchorContext.Provider>
  );
};

export const useAnchor = () => useContext(AnchorContext);
