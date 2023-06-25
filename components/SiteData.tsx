"use client"
import React, {useEffect, useState, useRef} from "react";
import svgs from "./Images";
import Image from "next/image";
import { motion } from "framer-motion";

export const SiteData = () => {
  const [width, setWidth] = useState(0);
  const carrousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carrousel.current) { 
      setWidth(carrousel.current.scrollWidth  - carrousel.current.offsetWidth)
    }
  }, [])
  

  return (
    <motion.div ref={carrousel} className=" w-full  cursor-grab overflow-hidden">
      <motion.div 
      drag="x"
      dragConstraints={{ left: -width, right: 0 }}
      className="flex justify-evenly w-full gap-4">
        {svgs.map((svg, index) => (
          <motion.div className="h-28 w-[200px] p-2 " key={index}>
            <Image src={svg} alt="tecnologias conocidas" className="w-full p-2 h-full pointer-events-none imagenes" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
