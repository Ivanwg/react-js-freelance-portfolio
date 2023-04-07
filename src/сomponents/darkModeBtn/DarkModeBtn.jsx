import { useEffect, useRef } from 'react';
import { useLocalStorage } from './../../hooks/useLocalStorage';
import detectThemeMode from './../../utils/detectThemeMode';
import sun from './img/sun.svg';
import moon from './img/moon.svg';
import './style.css';

function DarkModeBtn() {
  const [mode, setMode] = useLocalStorage(
    'THEME_MODE', detectThemeMode()
  );

  const btnRef = useRef(null);

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    }
    else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [mode]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorTheme = event.matches ? 'dark' : 'light';
        setMode(newColorTheme);
      });
  }, [setMode]);

  function toggleMode() {
    setMode((currentValue) => {
      return currentValue === 'dark' ? 'light' : 'dark';
    });
  }

  return (
    <button className='dark-mode-btn' onClick={toggleMode} ref={btnRef}>
      <img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
      <img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
    </button>
  );
}

export default DarkModeBtn;