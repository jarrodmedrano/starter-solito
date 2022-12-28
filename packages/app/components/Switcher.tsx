import { ChangeEventHandler, SetStateAction, useEffect, useState } from 'react';
import { useDarkSide } from '../utilities/useDarkSide';

export default function Switcher() {
  const [theme, setTheme] = useDarkSide();
  const [darkMode, setDarkMode] = useState<boolean>(theme === 'dark' ? true : false);

  const toggleDarkMode: ChangeEventHandler<HTMLInputElement> = (checked) => {
    setTheme(checked.target.checked ? 'dark' : 'light');
  };

  return (
    <>
      <input type="checkbox" checked={theme === 'dark'} onChange={toggleDarkMode} size={30} />
    </>
  );
}
