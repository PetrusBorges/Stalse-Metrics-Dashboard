"use client";

import { useTheme } from "next-themes";
import { SunMoon } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <button
        suppressHydrationWarning
        className="cursor-pointer bottom-2 right-2 bg-white transition-all duration-300 hover:bg-gray-300 rounded-sm p-2"
        onClick={handleThemeToggle}
      >
        <SunMoon className="w-5 h-5 text-black" />
      </button>
    </>
  );
};
