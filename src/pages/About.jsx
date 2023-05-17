import { useContext, useState } from "react";
import { ModeContext } from "../context/ModeContext.jsx";
import { motion } from "framer-motion";

import SwitchSelector from "react-switch-selector";

import DataSoftSkills from "../datas/dataSoftskills";
import DatasHardSkills from "../datas/dataHardskills";

import Softskill from "../components/utils/Softskill.jsx";
import Hardskill from "../components/utils/Hardskill.jsx";

const About = () => {
  const [switcher, setSwitcher] = useState(false);
  const { mode } = useContext(ModeContext);

  const classImgSkills =
    "grid grid-cols-2 gap-2 justify-center z-50 xs:mb-32 xl:mb-60 lg:mb-36 w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]  xs:mt-10";

  const options = [
    {
      label: "SoftSkills",
      value: "SoftSkills",
    },
    {
      label: "HardSkills",
      value: "HardSkills",
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "SoftSkills"
  );

  const onChange = () => {
    setSwitcher((current) => !current);
  };

  return (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3}}
          className="relative flex w-screen items-center justify-center"
        >
          {/* Style for container */}
          <div className="z-0 xs:mt-36 xl:mt-48 flex flex-col">
            <div
              //Style for button switcher
              className="relative flex w-60 h-10 md:w-72 md:h-12 md:h lg:h-14 self-center "
            >
              {mode == "dark" ? (
                <SwitchSelector
                  onChange={onChange}
                  options={options}
                  initialSelectedIndex={initialSelectedIndex}
                  backgroundColor={"#353b48"}
                  fontColor={"#f5f6fa"}
                  selectedBackgroundColor={"grey"}
                />
              ) : (
                <SwitchSelector
                  onChange={onChange}
                  options={options}
                  initialSelectedIndex={initialSelectedIndex}
                  backgroundColor={"grey"}
                  fontColor={"black"}
                  selectedBackgroundColor={"#39B5E0"}
                />
              )}
            </div>
            {!switcher && (
              <div className={classImgSkills}>
                {DataSoftSkills.map((skill) => (
                  <Softskill skill={skill} key={skill.id} />
                ))}
              </div>
            )}
            {switcher && (
              <div className={classImgSkills}>
                {DatasHardSkills.map((skill) => (
                  <Hardskill skill={skill} key={skill.id} />
                ))}
              </div>
            )}
          </div>
        </motion.section>
  );
};

export default About;
