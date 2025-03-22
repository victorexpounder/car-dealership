'use client'
import { anonkey, supabaseUrl } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect } from "react";

interface CarContextType {
    cars: any;
    setCars: any;
}

export const CarContext = createContext<CarContextType | undefined>(undefined);

export const useCarContext = () => {
  const context = useContext(CarContext);
  

  if (!context) {
    throw new Error("useCarContext must be used within a CarContext.Provider");
  }
  return context;
};
