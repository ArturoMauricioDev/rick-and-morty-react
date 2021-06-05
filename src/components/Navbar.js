import React from 'react'
import './styles/Navbar.css'
import logo from '../images/logo.png'
export default function Navbar() {
    return (
        <div className="Navbar-container">
        <a href="">
          <img src={logo} alt="Logo" />  
        </a>
        <ul>
            <li>Character</li>
            <li>Location</li>
            <li>Episode</li>
        </ul>
        </div>
    )
}
