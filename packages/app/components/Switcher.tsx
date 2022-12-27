import { useEffect, useState } from 'react';
import { useDarkSide } from '../utilities/useDarkSide';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setDarkSide(checked);
    setTheme(colorTheme);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}
