import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <div className="hero-text-cont"> 
            <p className="my-name-is"> my name is</p>
            
            <div className="hero-name-cont">
                <h1 className="hero-name">Iza Bless!</h1>
            </div>
            
            <h2 className ="hero-desc"> 
                I just love to do new things.    
                Maybe a <mark> future web designer? </mark> </h2>

            <p className="tagline"> Let's get in touch! Follow my journey in making my dream come to life. </p>

            <div className= "projects-contacts-links">
                <a className="projects-link" href="#projects"> View my work </a>
                <a className="contacts-link" href="#contact"> Say hello </a>
            </div>
        </div>
      </div>

      <div className="hero-image-cont">
        <div className="hero-picture-cont"> 
          
        </div>
      </div>

    </section>
  );
}

export default Hero