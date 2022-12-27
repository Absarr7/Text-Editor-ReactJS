import './App.css';

import Navbar from './components/Navbar';
import TextUtils from './components/TextUtiils';
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = ()=>{
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#121212';

    } else if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    } 
  }

  const [greenmode, setGreenMode] = useState('light')

  const toggleGreenMode = ()=>{
    if (mode === 'light') {
      setmode('success');
      document.body.style.backgroundColor = '#18A558';
    } else if (mode === 'success') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
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
