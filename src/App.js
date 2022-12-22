import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextUtils from './components/TextUtiils';

import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar title="Absar Ahmad"/>
    <Routes>
      <Route exact path="/" element={<TextUtils/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
      {/* <TextUtils/> */}
      {/* <About/> */}
    </>
  );
}

export default App;
