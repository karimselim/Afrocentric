import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl text-white'
      >
        <p className={`${styles.sectionSubText} `}>We Came, Then History</p>
        <h2 className={`${styles.sectionHeadText}`}>Egypt: The Beginning</h2>
        
        <h4 className="text-xl font-semibold text-secondary mt-2">
          When the world lived in caves, Egyptians built palaces. When others had no language, Egyptians spoke the language of the stars.
        </h4>
        <p className="mt-4 text-lg leading-relaxed">
          Egypt was never just a civilization of the past; it has always been a <strong>bridge between eras</strong>, where <strong>heritage</strong> meets <strong>modernity</strong>. Throughout history, Egypt has remained a beacon of <strong>knowledge, culture, and art</strong>, telling its <strong>true story</strong> to the world, untouched by distortion or manipulation.
        </p>
        <p className="mt-4 text-lg font-bold text-golden/40">
          "Civilizations are built on truth, and Egypt has always been the cornerstone of human history."
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[600px] md:h-[500px] h-[400px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
