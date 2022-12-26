import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import TextUtils from './components/TextUtiils';
import React, { useState } from 'react'


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
    <TextUtils  mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
