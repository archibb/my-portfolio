import './App.css'
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { TbArrowBarToUp } from "react-icons/tb"


function App() {

  const [isVisible , setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
    setIsVisible(window.scrollY > 300)
  }

  window.addEventListener('scroll' , handleScroll)

  return () => window.removeEventListener('scroll' , handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <button type="button" 
      className={isVisible ? 'back-to-top show' : 'back-to-top'} 
      aria-label="Back to top" 
      onClick={scrollToTop}>
        <TbArrowBarToUp />
      </button>
    </>
  );
}

export default App