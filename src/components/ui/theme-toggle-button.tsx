"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./button"; // Assuming shadcn button is at this path

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On the server and initial client render, return a placeholder or null
  // to avoid hydration mismatch for the button's content.
  // The button structure itself should be consistent.
  if (!mounted) {
    // Render a disabled button or a simple placeholder.
    // The size and variant should match the final button to avoid layout shifts.
    return (
      <Button
        variant="outline"
        size="sm"
        disabled
        className="w-[150px]" // Approximate width of the final button to minimize layout shift
      >
        Loading...
      </Button>
    );
  }

  const toggleTheme = () => {
    // This logic cycles through system, light, dark.
    // If current theme is system, it will go to light.
    // If light, it will go to dark.
    // If dark, it will go back to system (or light, depending on preference).
    // For simplicity, let's stick to light/dark toggle as in the original button.
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Determine the text for the button
  let buttonText = `Toggle Theme: ${theme}`;
  if (theme === "light") {
    buttonText = "Switch to Dark";
  } else if (theme === "dark") {
    buttonText = "Switch to Light";
  } else if (theme === "system") {
    // If you want to show the resolved theme, you might need to access resolvedTheme
    // For now, keeping it simple:
    buttonText = "Switch Theme"; // Or reflect actual next theme based on system preference
  }


  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="bg-background/80 backdrop-blur-md w-[150px]" // Ensure it uses theme-aware background and consistent width
    >
      {/* Display current theme, or next theme, or an icon */}
      {/* The original button showed "Toggle Theme: {theme}" */}
      {/* Let's try to replicate that behavior more closely for the mounted state */}
      Toggle Theme: {theme}
    </Button>
  );
}
