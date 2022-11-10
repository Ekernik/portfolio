'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid/';
import { ButtonHTMLAttributes, FC, useState } from 'react';

interface IToggle extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DarkModeToggle: FC<IToggle> = () => {
  const [theme, setTheme] = useState<string | null>(null);

  const toggleTheme = () => {
    const html = document.querySelector('html');
    html!.classList.toggle('dark');
    setTheme(html!.classList.contains('dark') ? 'dark' : 'light');
    localStorage.theme = html!.classList.contains('dark') ? 'dark' : 'light';
  };

  const icon =
    theme === 'dark' ? (
      <SunIcon width={32} height={32} />
    ) : (
      <MoonIcon width={32} height={32} />
    );

  return (
    <button
      onClick={toggleTheme}
      className="text-slate-600 transition dark:text-slate-400"
    >
      {icon}
    </button>
  );
};

export default DarkModeToggle;
