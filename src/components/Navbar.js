import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import logo from '../images/logo.png'

export default function Navbar() {
    return (
        <div className="Navbar-container">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <ul>
                <Link className="Navbar__brand" to="/characters"><li>Character</li></Link>
                <Link className="Navbar__brand" to="/location"><li>Location</li></Link>
                <Link className="Navbar__brand" to="/episode"><li>Episode</li></Link>
            </ul>
        </div>
    )
}
