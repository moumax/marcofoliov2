import { ModeContext } from "../context/ModeContext.jsx";
import { useContext } from "react";

const Button = (props) => {
  const { mode } = useContext(ModeContext);

  const button_style_dark =
  "inline-block px-6 py-2.5 bg-zinc-500 font-sans text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-5 mr-5 mt-5 xl:w-80 mb-24 xl:text-xl";

  const button_style_light =
    "inline-block px-6 py-2.5 bg-blue-400 text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-5 mr-5 mt-5 xl:w-80 mb-24 xl:text-xl";

  return (
    <button
      onClick={props.onClick}
      className={
        mode == "dark"
          ? props.className || button_style_dark
          : props.className || button_style_light
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
