import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { LangContext } from "../context/LangContext.jsx";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import dataPortfolio from "../datas/dataPortfolio";

import "../index.css";

const Projects = () => {
  const { mode } = useContext(ModeContext);
  const { language } = useContext(LangContext);

  const classBorderDark =
    "flex flex-col border-2 border-slate-800 rounded-md h-full";
  const classBorderLight =
    "flex flex-col border-2 border-slate-400 rounded-md h-full";
  const classImg = "px-2 ";
  const classLabelTechnoDark =
    "border-2 border-stone-900 rounded-md hover:text-blue-300";
  const classLabelTechnoLight =
    "border-2 border-slate-400 rounded-md hover:text-blue-300";

  const descriptionDark = "mx-2 text-xs my-4";
  const descriptionLight = "mx-2 text-xs my-4 font-bold"

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 2 }}
      className="relative flex flex-col w-[90vw] mb-20 z-0"
      id="projects"
    >
      <div className="flex flex-col items-center">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          showStatus={true}
          showIndicators={true}
          showThumbs={false}
          className="w-[90vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]"
        >
          {dataPortfolio.map((data) => (
            <div
              key={data.titre}
              className={mode === "dark" ? classBorderDark : classBorderLight}
            >
              <h2 className="text-start text-2xl mt-3 mb-5 ml-4 w-fit underline">
                {data.titre}
              </h2>
              <a href={data.lien} target="_blank" rel="noopener noreferrer">
                {mode == "dark" ? (
                  <img
                    className={classImg}
                    src={data.imageLight || data.image}
                    alt={data.imageLight}
                  />
                ) : (
                  <img
                    className={classImg}
                    src={data.imageDark || data.image}
                    alt={data.imageDark}
                  />
                )}
              </a>
              <ul className="flex flex-wrap justify-center gap-2 mb-7 text-md mt-7">
                {data.techno1 ? (
                  <li
                    className={
                      mode === "dark"
                        ? classLabelTechnoDark
                        : classLabelTechnoLight
                    }
                  >
                    <span className="m-2">{data.techno1}</span>
                  </li>
                ) : null}

                {data.techno2 ? (
                  <li
                    className={
                      mode === "dark"
                        ? classLabelTechnoDark
                        : classLabelTechnoLight
                    }
                  >
                    <span className="m-2">{data.techno2}</span>
                  </li>
                ) : null}

                {data.techno3 ? (
                  <li
                    className={
                      mode === "dark"
                        ? classLabelTechnoDark
                        : classLabelTechnoLight
                    }
                  >
                    <span className="m-2">{data.techno3}</span>
                  </li>
                ) : null}

                {data.techno4 ? (
                  <li
                    className={
                      mode === "dark"
                        ? classLabelTechnoDark
                        : classLabelTechnoLight
                    }
                  >
                    <span className="m-2">{data.techno4}</span>
                  </li>
                ) : null}

                {data.techno5 ? (
                  <li
                    className={
                      mode === "dark"
                        ? classLabelTechnoDark
                        : classLabelTechnoLight
                    }
                  >
                    <span className="m-2">{data.techno5}</span>
                  </li>
                ) : null}
                <h3 className={mode == "dark" ? descriptionDark : descriptionLight}>{language == "fr" ? data.descriptionFR : data.descriptionEN}</h3>
              </ul>
            </div>
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Projects;
