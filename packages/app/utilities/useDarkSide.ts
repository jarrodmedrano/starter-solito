import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export const useDarkSide = (): [string, Dispatch<SetStateAction<string>>] => {
  const [theme, setTheme] = useState<string>(
    typeof window !== 'undefined' ? localStorage?.theme : 'dark'
  );
  const colorTheme: string = theme === 'dark' ? 'light' : 'dark';

  console.log('theme', theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
