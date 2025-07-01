import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }} 
      className="absolute top-0 left-0 w-full z-50 bg-transbairnt py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <h1 className="text-[24px] font-bold text-golden tracking-wide">
          Grand Egyptian Museum
        </h1>
      </div>
    </motion.nav>
  );
};

export default Navbar;
