import React, { useContext, useEffect } from "react";
import Header from "./components/layout/Header/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./util/ThemeContext";

const Main: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  
  useEffect(() => {
    document.body.style.backgroundColor = !isDark ? "#000000" : "#ffffff";
  }, [isDark])

  return (
    <main id="main" style={{ position: "relative", height: "100%" }}>
      <Header title="Neatflix" />
      <Home />
    </main>
  );
};

export default Main;
