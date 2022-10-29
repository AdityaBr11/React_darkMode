import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{
    const [darkMode,setdarkMode]=useState(JSON.parse(localStorage.getItem("darkMode")));
    const value={darkMode,setdarkMode}
    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}