import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./index.css";
import ModeContextProvider from "./context/ModeContext.jsx";

ReactDOM.createRoot(document.getElementById("toto")).render(
  <React.StrictMode>
    <ModeContextProvider>
        <Home />
    </ModeContextProvider>
  </React.StrictMode>
);
