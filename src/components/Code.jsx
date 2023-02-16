import { useContext } from "react";
import { LangContext } from "../context/LangContext.jsx";
import { ModeContext } from "../context/ModeContext.jsx";
import { motion } from "framer-motion";
import dataCode from "../datas/dataCode.js";

const Code = () => {
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  const background_code_dark =
    "flex flex-col w-[90vw] sm:w-[80vw] lg:w-[70vw] 2xl:w-[60vw] rounded-lg bg-[#212529] shadow-lg bg-opacity-40";
  const background_code_light =
    "flex flex-col w-[90vw] sm:w-[80vw] lg:w-[70vw] rounded-lg bg-[#595959] shadow-lg bg-opacity-90";

  const introduction_text_dark =
    "font-anonymous xs:text-[0.85rem] sm:text-[1rem] xl:text-[1.3rem] text-[grey]";
  const introduction_text_light =
    "font-anonymous xs:text-[0.85rem] sm:text-[1rem] xl:text-[1.3rem] text-[#a9ed0b]";
  const line_font =
    "font-anonymous xs:text-[0.80rem] sm:text-[1rem] xl:text-[1.3rem]";

  const variable_dark = "text-[white]";
  const variable_light = "text-[#0e9fed] font-bold";

  const variable_name_dark = "text-[white]";
  const variable_name_light = "text-[#e0cc67]";

  const object_variable_name_dark = "text-[white]";
  const object_variable_name_light = "text-[#24b8e5]";

  const variable_content_dark = "text-[#4163c7]";
  const variable_content_light = "text-[#e58824]";

  const special_char_dark = "text-white";
  const special_char_light = "text-white";

  const line_number_dark = "text-[#7a7a7a]";
  const line_number_light = "text-[white]";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3 }}
    >
      <div
        className={
          mode == "dark" ? background_code_dark : background_code_light
        }
      >
        <pre className={line_font}>
          <pre
            className={
              mode == "dark" ? introduction_text_dark : introduction_text_light
            }
          >
            {language == "fr"
              ? dataCode.fr.introduction
              : dataCode.en.introduction}
          </pre>
          <pre> </pre>
          <span
            className={mode == "dark" ? line_number_dark : line_number_light}
          >
            {" "}
            1{" "}
          </span>
          <span className={mode == "dark" ? variable_dark : variable_light}>
            const{" "}
          </span>
          <span
            className={
              mode == "dark" ? variable_name_dark : variable_name_light
            }
          >
            {language == "fr"
              ? dataCode.fr.const_title
              : dataCode.en.const_title}
          </span>
          <span
            className={mode == "dark" ? special_char_dark : special_char_light}
          >
            {" "}
            ={" "}
          </span>
          <span
            className={mode == "dark" ? special_char_dark : special_char_light}
          >
            {" "}
            &#123;
          </span>
          <pre className={line_font}>
            <span
              className={mode == "dark" ? line_number_dark : line_number_light}
            >
              {" "}
              2{" "}
            </span>
            <span
              className={
                mode == "dark"
                  ? object_variable_name_dark
                  : object_variable_name_light
              }
            >
              {" "}
              {language == "fr"
                ? dataCode.fr.name_title
                : dataCode.en.name_title}
            </span>
            <span
              className={
                mode == "dark" ? variable_content_dark : variable_content_light
              }
            >
              "Marc LANTOL"
            </span>
          </pre>
          <pre className={line_font}>
            <span
              className={mode == "dark" ? line_number_dark : line_number_light}
            >
              {" "}
              3{" "}
            </span>
            <span
              className={
                mode == "dark"
                  ? object_variable_name_dark
                  : object_variable_name_light
              }
            >
              {" "}
              role:{" "}
            </span>
            <span
              className={
                mode == "dark" ? variable_content_dark : variable_content_light
              }
            >
              {language == "fr" ? dataCode.fr.role : dataCode.en.role}
            </span>
          </pre>
          <pre className={line_font}>
            <span
              className={mode == "dark" ? line_number_dark : line_number_light}
            >
              {" "}
              4{" "}
            </span>
            <span
              className={
                mode == "dark"
                  ? object_variable_name_dark
                  : object_variable_name_light
              }
            >
              {" "}
              status:{" "}
            </span>
            <span
              className={
                mode == "dark" ? variable_content_dark : variable_content_light
              }
            >
              {language == "fr" ? dataCode.fr.status : dataCode.en.status}
            </span>
          </pre>
          <pre className={line_font}>
            <span
              className={mode == "dark" ? line_number_dark : line_number_light}
            >
              {" "}
              5{" "}
            </span>
            <span
              className={
                mode == "dark"
                  ? object_variable_name_dark
                  : object_variable_name_light
              }
            >
              {" "}
              stack:{" "}
            </span>
            <span
              className={
                mode == "dark" ? variable_content_dark : variable_content_light
              }
            >
              "Js, node, react, tailwind..."
            </span>
          </pre>
          <pre className={line_font}>
            <span
              className={mode == "dark" ? line_number_dark : line_number_light}
            >
              {" "}
              6{" "}
            </span>
            <span
              className={
                mode == "dark" ? special_char_dark : special_char_light
              }
            >
              {" "}
              &#125;{" "}
            </span>
          </pre>
          <pre className={line_font}>
            <span
              className={mode == "dark" ? line_number_dark : line_number_light}
            >
              {" "}
              7{" "}
            </span>
          </pre>
          <pre className={line_font}>
            <span
              className={mode == "dark" ? line_number_dark : line_number_light}
            >
              {" "}
              8{" "}
            </span>
            <span className={mode == "dark" ? variable_dark : variable_light}>
              {" "}
              const{" "}
            </span>
            <span
              className={
                mode == "dark" ? variable_name_dark : variable_name_light
              }
            >
              message{" "}
            </span>
            <span
              className={
                mode == "dark" ? special_char_dark : special_char_light
              }
            >
              =
            </span>
            <span
              className={
                mode == "dark" ? variable_content_dark : variable_content_light
              }
            >
              {" "}
              {language == "fr"
                ? dataCode.fr.message
                : dataCode.en.message}{" "}
            </span>
          </pre>
          <pre className={line_font}>
            <span
              className={mode == "dark" ? line_number_dark : line_number_light}
            >
              {" "}
              9{" "}
            </span>
          </pre>
          <pre className={line_font}>
            <span
              className={mode == "dark" ? line_number_dark : line_number_light}
            >
              {" "}
              10{" "}
            </span>
          </pre>
        </pre>
      </div>
    </motion.div>
  );
};

export default Code;
