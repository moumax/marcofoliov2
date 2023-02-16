import { LangContext } from "../context/LangContext.jsx";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext.jsx";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="mt-20">
        <div className="absolute top-24 left-12 sm:left-28 md:left-36 lg:left-56 xl:left-72 2xl:left-96 text-3xl sm:text-4xl xl:text-5xl font-title text-sky-600">
          Marc LANTOL
        </div>
        <div className="h-36 md:h-40 lg:h-48 xl:h-56 flex items-center text-2xl sm:text-3xl xl:text-4xl font-normal font-title text-sky-900">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(75)
                .typeString("DEVELOPPEUR WEB FULL STACK")
                .pauseFor("1000")
                .deleteAll()
                .typeString(" FRONT-END : REACTJS")
                .pauseFor("1000")
                .deleteAll()
                .typeString(" BACK-END : NODEJS")
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Welcome;
