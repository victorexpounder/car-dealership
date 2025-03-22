'use client'
import { useEffect, useState } from "react";
import { CarContext } from "./CarContext";
import { anonkey, supabaseUrl } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";

const CarProvider = ({ children } : any) => {
  const [cars, setCars] = useState<any>([]);
  const supabase = createClient(supabaseUrl, anonkey);

  const fetchCars = async () => {
    let { data, error } = await supabase
    .from('cars')
    .select('*')
    .range(0, 9)
    if (error) {
      throw new Error(error.message);
    }
    setCars(data);
  }

  useEffect(() => {
    fetchCars();
  })
  return (
    <CarContext.Provider value={{cars,  setCars }}>
      {children}
    </CarContext.Provider>
  )
};

export default CarProvider;