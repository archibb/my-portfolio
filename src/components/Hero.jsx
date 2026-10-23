import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text"> 
            <p className="intro"> my name is</p>
            
            <div className="hero-name-cont">
                <h1 className="hero-name">Iza Bless!</h1>
            </div>
            
            <h2 className ="hero-desc"> 
                I just love to do new things.    
                Maybe a <mark> future web designer? </mark> </h2>

            <p className="tagline"> Let's be in touch! Follow my journey in making my dream come to life. </p>

            <div className= "projects-contacts-links">
                <a className="projects-link" href="#projects"> View my work </a>
                <a className="contacts-link" href="#contact"> Say hello </a>
            </div>

            <div className="hero-image-cont">
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero