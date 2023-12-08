import { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextAPI = (props) => {
  const [theme, setTheme] = useState("dark");
  const dark_background = 'bg-[#000000]';
  const light_background = 'bg-[#ffffff]';
  const primary_bg = 'bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121]'
  const primary_text = 'bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] bg-clip-text text-transparent'
  const light_contrast = 'bg-gray-100';
  const dark_contrast = 'bg-[#191c24]'
  const semi_dark_contrast = 'bg-[#0f101f]'
  const semi_light_contrast = 'bg-gray-50'
  const dark_text_color = 'text-white'
  const light_text_color = 'text-black'
  const semi_light_text_color = 'text-gray-500'
  const semi_dark_text_color = 'text-[#6c7293]'

  return (
    <AppContext.Provider value={
      { 
        theme, 
        setTheme, 
        dark_background, 
        light_background, 
        light_contrast, 
        dark_contrast, 
        semi_dark_contrast, 
        semi_light_contrast, 
        dark_text_color, 
        light_text_color,
        semi_dark_text_color,
        semi_light_text_color,
        primary_bg,
        primary_text }}>
      {props.children}
    </AppContext.Provider>
  );
};
