import React from 'react';
import './App.css';
import Movies from './Component/Movies';
import About from './Component/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path='/About' element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
