'use client';
import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('dark'); // ✅ default is dark

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');

    const preferredTheme = stored || 'dark'; // ✅ fallback to dark
    root.classList.add(preferredTheme);
    setTheme(preferredTheme);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const isCurrentlyDark = root.classList.contains('dark');
    const newTheme = isCurrentlyDark ? 'light' : 'dark';

    root.classList.remove(isCurrentlyDark ? 'dark' : 'light');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}
