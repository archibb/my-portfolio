import './Navbar.css'

import { useState } from 'react'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-inner">

        <a href="#home" className="nav-logo" onClick={closeMenu}> IBB </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >

          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="nav-contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div> 
    </nav>
  )
}

export default Navbar