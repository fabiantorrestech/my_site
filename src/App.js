import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
