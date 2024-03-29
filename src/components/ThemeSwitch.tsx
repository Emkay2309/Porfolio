"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");

  const setThemeHandler = () => {
    localStorage.theme = localStorage.theme == "dark" ? "light" : "dark";
    if (theme != "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(() => {
      if (theme === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(localStorage.theme);
  }, [theme]);

  return (
    <div className="flex items-center pr-8">
      {theme !== "dark" ? (
        <FiSun
          className="text-white h-8 w-8 cursor-pointer"
          onClick={setThemeHandler}
        />
      ) : (
        <FiMoon
          className="text-slate-600 h-8 w-8 cursor-pointer"
          onClick={setThemeHandler}
        />
      )}
    </div>
  );
};

export default ThemeSwitch;
