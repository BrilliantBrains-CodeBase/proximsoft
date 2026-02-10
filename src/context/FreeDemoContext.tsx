import React, { createContext, useContext, useState } from "react";

interface FreeDemoContextType {
  isOpen: boolean;
  openDemo: () => void;
  closeDemo: () => void;
}

const FreeDemoContext = createContext<FreeDemoContextType | undefined>(undefined);

export const FreeDemoProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDemo = () => setIsOpen(true);
  const closeDemo = () => setIsOpen(false);

  return (
    <FreeDemoContext.Provider value={{ isOpen, openDemo, closeDemo }}>
      {children}
    </FreeDemoContext.Provider>
  );
};

export const useFreeDemo = () => {
  const context = useContext(FreeDemoContext);
  if (!context) throw new Error("useFreeDemo must be used within FreeDemoProvider");
  return context;
};