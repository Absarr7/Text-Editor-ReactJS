import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Alerts from './components/Alerts';
import TextUtils from './components/TextUtiils';
import React, { useState } from 'react'


import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = ()=>{
    if (mode === 'light') {
      setmode('dark');
    } else if (mode === 'dark') {
      setmode('light');
    } 
  }

  const [greenmode, setGreenMode] = useState('light')

  const toggleGreenMode = ()=>{
    if (mode === 'light') {
      setmode('success');
    } else if (mode === 'success') {
      setmode('light');
    } 
  }


  return (
    <>
    <Navbar title="Absar Ahmad" mode={mode} toggleMode={toggleMode} greenmode={greenmode} toggleGreenMode={toggleGreenMode}/>
    <Routes>
      <Route exact path="/" element={<TextUtils  mode={mode} toggleMode={toggleMode}/>}/>
      <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
    </Routes>
    </>
  );
}

export default App;
