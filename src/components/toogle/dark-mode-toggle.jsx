import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-500 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-white text-2xl transition-colors mt-6 cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default DarkModeToggle;
