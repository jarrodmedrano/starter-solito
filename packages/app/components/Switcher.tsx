import { ChangeEventHandler, useEffect, useState } from 'react';
import { useDarkSide } from '../utilities/useDarkSide';

export default function Switcher() {
  const [theme, setTheme] = useDarkSide();

  const toggleDarkMode: ChangeEventHandler<HTMLInputElement> = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <>
      <input type="checkbox" checked={theme === 'dark'} onChange={toggleDarkMode} size={30} />
    </>
  );
}
