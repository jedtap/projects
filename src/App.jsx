import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/devicon/devicon.min.css'
import '../node_modules/devicon/devicon-base.css'
import '../node_modules/devicon/devicon.json'
import '../node_modules/devicon/icomoon.json'

import './App.css'

import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'

const App = () => {

  const toggleContact = () => {
    const overlay = document.querySelector('.contactdummy');
    overlay.style.display === 'none' ? overlay.style.display = 'block' : overlay.style.display = 'none';
  };

  return (<>
    <BrowserRouter>   
      <Contact toggleContact={toggleContact} />
      <Navbar toggleContact={toggleContact} />
      <Routes>
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App