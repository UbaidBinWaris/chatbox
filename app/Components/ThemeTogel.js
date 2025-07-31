// components/ThemeButton.js
'use client';
import Themes from "../hooks/Themes";
export default function ThemeButton() {
  const { theme, toggleTheme } = Themes();

  return (
    <div className="p-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 border rounded dark:bg-black dark:text-white bg-white text-black"
      >
        Toggle Theme
      </button>
      <p className="mt-2 text-sm dark:text-gray-300 text-gray-800">
        Current Theme: {theme}
      </p>
    </div>
  );
}
