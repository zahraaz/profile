"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "react-feather";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5  w-[3rem] h-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] shadow-xl
      rounded-full flex items-center justify-center
      border border-white border-opacity-40 bg-white
      hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
