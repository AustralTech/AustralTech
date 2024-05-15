"use client"

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }} // Estado inicial de la animación
      animate={{ y: 0, opacity: 1 }} // Estado final de la animación
      exit={{ opacity: 0 }} // Estado de salida de la animación
      transition={{ ease: 'easeInOut', duration: 0.75 }} // Duración de la animación en segundos
    >
      {children}
    </motion.div>
  );
}