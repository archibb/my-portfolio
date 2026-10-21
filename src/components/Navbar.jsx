import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner"> 
        <a href="/" className="nav-logo">IBB</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="nav-contact">Contact</a></li>
        </ul>
      </div> 
    </nav>
  )
}

export default Navbar