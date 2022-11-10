'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid/';
import { ButtonHTMLAttributes, FC, useEffect, useState } from 'react';

interface IToggle extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DarkModeToggle: FC<IToggle> = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    document.querySelector('html')?.classList.contains('dark') ||
    localStorage.theme === 'dark'
      ? setTheme('dark')
      : setTheme('light');
  }, []);

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
      className={`text-slate-600 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200`}
    >
      {icon}
    </button>
  );
};

export default DarkModeToggle;
