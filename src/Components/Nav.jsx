import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
        <div className="navbar">
        <div className="logo">
            <Link to="/">
            <img src="src\assets\img\logo_p.png" alt="Logo portfolio" style={{ height: '50px' }} ></img></Link>
        </div>
        <div className="menu-toggle" id="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <ul className="menu" id="menu">
        
            <li><Link to="/">Home</Link></li>
            <li><Link to="/competences">Compétences</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/formulaire">Contact</Link></li>
        </ul>
    </div>
        </>
    )
    
}

export default Nav
