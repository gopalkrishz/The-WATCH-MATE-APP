import logo from "../assets/owl.png"
import React, { useEffect, useState } from 'react'

export const Header = () => {
    const [theme,setTheme] =useState("light");
    
    useEffect(()=>{
        document.documentElement.removeAttribute('class')
        document.documentElement.classList.add(theme);

    },[theme])
  return (
    <header>
    <div className='logo'>
    <img src={logo} alt="THE_WATCH-MATE LOGO"></img>
    <span><p>THE WATCH-MATE </p></span>
    </div>
    <div className="themeSelector">
        <span onClick={()=>{setTheme("light")}} className={theme==="light"?"light activeTheme":"light"}></span>
        <span onClick={()=>{setTheme("dark")}} className={theme=== "dark"?"dark activeTheme":"dark"}></span>
    </div>
    </header>
  )
}
