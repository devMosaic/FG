'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    setDark(isDark);
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDark);
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 text-sm border rounded-md hover:bg-muted transition-colors"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
