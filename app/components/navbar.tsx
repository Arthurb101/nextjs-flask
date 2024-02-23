"use client"
import { useState } from "react";

export default function Navbar() {

  const [isActive, setIsActive] = useState(false);
    const onHamburgerClick = () => {
      setIsActive(!isActive)
    }

    return (<nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="title"> Beta </div>
      <a role="button" onClick={onHamburgerClick} className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    
    <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
      <div className="navbar-start">
        <a className="navbar-item" href="/">
          Home
        </a>
    
        <a className="navbar-item" href="/mustHave">
          Must Have
        </a>
    
        
        
      </div>
    
      <div className="navbar-end">
        <div className="navbar-item">
        <input className="input" type="text" placeholder="Text input"/>
        </div>
      </div>
    </div>
    </nav>)
}







