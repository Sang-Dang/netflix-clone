import React, { createContext, useEffect, useState } from "react";

const initialState = {
  isDark: false,
  toggle: () => {},
  getDarkClass: (className: string):string => {return ""}
};

interface props {
  children: React.ReactNode;
}

export const ThemeContext = createContext(initialState);

const ThemeProvider: React.FC<props> = ({ children }) => {
  const [isDark, setIsDark] = useState(initialState.isDark);

  useEffect(() => {
    const currentTheme: boolean = localStorage.getItem("dark") === "true";
    setIsDark(currentTheme);
  }, []);

  function toggleTheme() {
    const current = !isDark;
    localStorage.setItem("dark", JSON.stringify(current));
    setIsDark(current);
    console.log(current);
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark,
        toggle: toggleTheme,
        getDarkClass: (className: string):string => `${className} ${isDark ? "dark" : ""}`,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
