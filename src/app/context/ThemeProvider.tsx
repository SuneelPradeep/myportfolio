// context/ThemeProvider.js
'use client';
import { createContext, useEffect, useRef, useState } from 'react';

export type ThemeState = {
  isDarkMode: boolean;
  enableAudio : boolean;
  toggleTheme: () => void;
  toggleAudio : () => void;
};

const initialState: ThemeState = {
  isDarkMode: true ,
  enableAudio : true,
  toggleTheme: () => {},
  toggleAudio : () => {}
};

export const ThemeContext = createContext<ThemeState>(initialState);

const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialState.isDarkMode);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enableAudio, setEnableAudio] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/music/oceans.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
    }
  }, []);

  

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  const toggleAudio = async () => {
    if (audioRef.current) {
      if (!enableAudio) {
        audioRef.current.pause();
      } else {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Audio play failed:", error);
        }
      }
      setEnableAudio((prev) => !prev);
    }
  };

  

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, toggleAudio,enableAudio }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
