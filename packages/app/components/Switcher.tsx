import { ChangeEventHandler, SetStateAction, useEffect, useState } from 'react';
import { useDarkSide } from '../utilities/useDarkSide';

export default function Switcher() {
  const [theme, setTheme] = useDarkSide();
  const [darkMode, setDarkMode] = useState(theme === 'dark');

  const toggleDarkMode: ChangeEventHandler<HTMLInputElement> = (checked) => {
    setTheme(checked.target.checked ? 'dark' : 'light');
  };

  useEffect(() => {
    setDarkMode(theme === 'dark');
  }, [theme]);

  return (
    <>
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} size={30} />
    </>
  );
}
