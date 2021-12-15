import React, { useEffect } from 'react'
import Home from "./components/home";
import Setting from "./components/setting"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
    useEffect(()=>{
        const dark = window.localStorage.getItem("theme");
        const html = document.querySelector("html");
        if(dark === "dark" && html !== null){
            html.classList.add("dark");
        }else{
        }
    },[])
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                </Routes>
            </Router>
        </>
    )
}
