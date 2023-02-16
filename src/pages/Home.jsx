import { useContext, useCallback } from "react";
import { ModeContext } from "../context/ModeContext.jsx";
import { motion } from "framer-motion";
import LangContextProvider from "../context/LangContext";
import ButtonLanguage from "../components/ButtonLanguage.jsx";
import ButtonMode from "../components/ButtonMode.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Code from "../components/Code.jsx";
import Welcome from "../components/Welcome.jsx";
import Footer from "../components/Footer.jsx";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Home() {
  const { mode } = useContext(ModeContext);

  const classBackgroundDark =
    "relative flex flex-col text-white items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black overflow-hidden";
  const classBackgroundLight =
    "relative flex flex-col text-black items-center bg-white z-0 overflow-hidden";

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log("Ceci est un message caché !!             (ou pas...) :D");
  }, []);

  return (
    <div
      className={mode == "light" ? classBackgroundLight : classBackgroundDark}
    >
      {mode == "dark" ? (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 900,
                },
                value: 80,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 6 },
              },
            },
            detectRetina: true,
          }}
        />
      ) : (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#49b6ff",
              },
              links: {
                color: "#49b6ff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 900,
                },
                value: 80,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 6 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      <LangContextProvider>
        <Welcome />
        <Code />
        <About />
        <Projects />
        <Contact />
        <Footer />
        {/* Style for button mode & button lang */}
        <motion.div
          // style for box
          className="fixed bg-slate-700 w-16 h-24 rounded-2xl -right-3 bottom-12 opacity-50 z-100"
          initial={{ x: "-200vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
        >
          {/* style for logos */}
          <div className="flex flex-col w-full h-full justify-center items-center gap-2">
            <ButtonLanguage />
            <ButtonMode />
          </div>
        </motion.div>
      </LangContextProvider>
    </div>
  );
}

export default Home;
