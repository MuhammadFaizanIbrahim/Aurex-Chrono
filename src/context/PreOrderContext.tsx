"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import PreOrderModal from "@/components/PreOrderModal";

interface PreOrderContextType {
  openPreOrder: () => void;
  closePreOrder: () => void;
}

const PreOrderContext = createContext<PreOrderContextType | undefined>(undefined);

export function PreOrderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPreOrder = () => setIsOpen(true);
  const closePreOrder = () => setIsOpen(false);

  return (
    <PreOrderContext.Provider value={{ openPreOrder, closePreOrder }}>
      {children}
      <PreOrderModal isOpen={isOpen} onClose={closePreOrder} />
    </PreOrderContext.Provider>
  );
}

export function usePreOrder() {
  const context = useContext(PreOrderContext);
  if (context === undefined) {
    throw new Error("usePreOrder must be used within a PreOrderProvider");
  }
  return context;
}
