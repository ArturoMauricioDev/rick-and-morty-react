import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import './styles/Header.css'
export default function Header() {
    return (
        <div className="Header">
            <Navbar/>
            <Login/>
        </div>
            
    )
}
