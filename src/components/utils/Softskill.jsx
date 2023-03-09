import { LangContext } from "../../context/LangContext";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext.jsx";

const Softskill = ({ skill }) => {
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  return (
    <div className="mx-auto">
      <p className="xs:text-md text-center mb-3 sm:text-xl">
        {language == "fr" ? skill.texteFr : skill.texteEn}
      </p>
      {mode == "dark" ? (
        <img
          className="mx-auto xs:w-6 sm:w-16 md:w-16"
          src={skill.imageBw}
          alt={skill.alt}
          title={skill.title}
        />
      ) : (
        <img
          className="mx-auto xs:w-6 sm:w-16 md:w-16"
          src={skill.imageColor}
          alt={skill.alt}
          title={skill.title}
        />
      )}
    </div>
  );
};

export default Softskill;
