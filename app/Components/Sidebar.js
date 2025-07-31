"use client";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">ChatGPT Clone</h2>
        <ul className="space-y-2">
          <li className="hover:underline cursor-pointer">New Chat</li>
          <li className="hover:underline cursor-pointer">History</li>
        </ul>
      </div>
      <button
        className="bg-gray-700 mt-4 px-2 py-1 rounded text-sm"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
