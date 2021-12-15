import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
import Toggle from "react-toggle"
export default function ToggleTheme() {
    const isDark = window.localStorage.getItem("theme");
    const [theme, setTheme] = useState(
        isDark === "dark" && isDark !== undefined? true : false)
    useEffect(()=>{
        if(theme){
            window.localStorage.setItem("theme","dark");
            document.getElementsByTagName("html")[0]?.classList.add("dark");
        }else{
            window.localStorage.removeItem("theme");
            document.getElementsByTagName("html")[0]?.classList.remove("dark");
        }
    },[theme])
    return (
        <div>
            <Toggle
                defaultChecked={theme}
                onChange={()=>{
                    setTheme(!theme);
                }}
                icons={
                    {checked: <FaMoon className="text-xl text-gray-500"/>, 
                    unchecked: <FaSun className="text-xl text-yellow-300"/>}
                }
            ></Toggle>
        </div>
    )
}
