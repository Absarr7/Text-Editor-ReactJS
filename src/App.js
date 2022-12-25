import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
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

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

  }
  return (
    <>
    <Navbar title="Absar Ahmad" mode={mode} toggleMode={toggleMode}/>
    <alert alert={alert} showAlert={showAlert}/>
    <Routes>
      <Route exact path="/" element={<TextUtils  mode={mode} toggleMode={toggleMode}/>}/>
      <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
    </Routes>
    </>
  );
}

export default App;
