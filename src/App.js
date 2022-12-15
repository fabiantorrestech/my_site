import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import ContactMe from './components/pages/ContactMe'
import Portfolio from './components/pages/Portfolio'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/my_site' exact element={<Home/>} />
          <Route path='/my_site/about-me' exact element={<AboutMe/>} />
          <Route path='/my_site/portfolio' exact element={<Portfolio/>} />
          <Route path='/my_site/contact-me' exact element={<ContactMe/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
