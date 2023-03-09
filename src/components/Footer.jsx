import { useContext } from "react";
import { ModeContext } from "../context/ModeContext.jsx";

const Footer = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div className="flex gap-5 items-center">
      {mode == "dark" ? (
        <p className="text-xs">Marc LANTOL &#169; 2022</p>
      ) : (
        <p className="text-xs font-bold">Marc LANTOL &#169; 2022</p>
      )}

      {mode == "dark" ? (
        <div className="flex gap-2 mt-5 mb-5">
          <img
            className="w-8"
            src="../../javascript_bw.png"
            alt="Logo Javascript"
          />
          <img className="w-8" src="../../react_bw.png" alt="Logo ReactJs" />
          <img
            className="w-8"
            src="../../tailwind_bw.png"
            alt="Logo Tailwind"
          />
          <img className="w-8" src="../../git_bw.png" alt="Logo Github" />
        </div>
      ) : (
        <div className="flex gap-2 mt-5 mb-5">
          <img
            className="w-8"
            src="../../javascript_color.png"
            alt="Logo Javascript"
          />
          <img className="w-8" src="../../react_color.png" alt="Logo ReactJs" />
          <img
            className="w-8"
            src="../../tailwind_color.png"
            alt="Logo Tailwind"
          />
          <img className="w-8" src="../../git_color.png" alt="Logo Github" />
        </div>
      )}
    </div>
  );
};

export default Footer;
