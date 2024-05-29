import React from 'react'
import { Link } from "react-router-dom";

import '../styles/Navbar.css';
// import Resume from '../docs/Tapiador-Resume-RME-CSM.pdf'

const Navbar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg"> <div className="container-fluid">
      <Link to='/projects' className="navbar-brand">JED TAPIADOR</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent"> <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/projects/about' className="nav-link">About</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="https://forms.gle/3DhefWUMXfsuUnEk8" target="_blank" rel="noopener noreferrer">Contact</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="https://drive.google.com/drive/folders/1dug3oPfSjJ9aq7wePPyil4iayanqjmoN?usp=sharing" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/jed-tapiador" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.instagram.com/projectsandvalue/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://jedtap.github.io/hello/" target="_blank" rel="noopener noreferrer">Programming</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </li> */}
      </ul> </div>
    </div> </nav>
  </>)
}

export default Navbar