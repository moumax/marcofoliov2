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
          <img className="w-8" src="../../javascript_bw.png" />
          <img className="w-8" src="../../react_bw.png" />
          <img className="w-8" src="../../tailwind_bw.png" />
          <img className="w-8" src="../../git_bw.png" />
        </div>
      ) : (
        <div className="flex gap-2 mt-5 mb-5">
          <img className="w-8" src="../../javascript_color.png" />
          <img className="w-8" src="../../react_color.png" />
          <img className="w-8" src="../../tailwind_color.png" />
          <img className="w-8" src="../../git_color.png" />
        </div>
      )}
    </div>
  );
};

export default Footer;
