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
        className="cursor-pointer absolute bottom-2 right-2 border border-gray-600 rounded-sm p-2"
        onClick={handleThemeToggle}
      >
        <SunMoon />
      </button>
    </>
  );
};
