import React from 'react'
import { useContext } from 'react'
import '../App.css'
import { ThemeContext } from '../Context/ThemeContext'

const Button = () => {
    const {darkMode,setdarkMode}=useContext(ThemeContext);
    const handleTheme=()=>{
        setdarkMode(!darkMode);
        localStorage.setItem('darkMode',!darkMode);
    }
  return (
    <div>
      <button onClick={handleTheme} className={darkMode?'btn fa fa-toggle-on':'btn fa fa-toggle-off'}></button>
    </div>
  )
}

export default Button
