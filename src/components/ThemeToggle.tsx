"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "./ui/Button";
import { SunIcon } from "./ui/Icons/Sun";
import { MoonIcon } from "./ui/Icons/Moon";

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
    <div>
      <Button onClick={handleTheme}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
};

export default ThemeToggle;
