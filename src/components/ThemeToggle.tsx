"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "./ui/Buttons";
import { SunIcon } from "./ui/Icons";
import { MoonIcon } from "./ui/Icons";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button onClick={handleTheme} type='button'>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggle;
