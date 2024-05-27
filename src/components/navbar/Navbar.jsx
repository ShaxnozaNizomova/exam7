import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
         <NavLink to={"/"}><img src={logo} alt="logo" /></NavLink>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><a href="#">Bags</a></li>
            <li><a href="#">Sneakers</a></li>
            <li><a href="#">Belt</a></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
