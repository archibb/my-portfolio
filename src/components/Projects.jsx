import './Projects.css'

function Projects() {
    return (
      <section className="projects" id="projects">
        
      <h1 className="projects-header"> Projects </h1> 
      <p className="projects-desc"> more to go (soon!) </p>
      
      <div className="projects-cont"> 

        <div className="projects-item-cont">
            
            <span className="projects-item-no"> PROJECT 1 </span>

            <article className="projects-item-block">

                <div className="projects-item-img">
                    
                </div>

                <div className="projects-item-header"> 
                    NicNacNoe
                </div>
                
                <div className="projects-item-desc"> 
                    pixel theme tictactoe game for our Java project in DCIT24 during 1st year in college.
                </div>

                <div className="projects-item-lang">
                    <span className="lang"> Java </span>
                    <span className="lang"> Git </span>
                </div>

                <a href="https://github.com/archibb/nic-nac-noe" className="projects-item-link" target="_blank" rel="noopener noreferrer"> 
                    View on GitHub ↗ </a>
            </article>
        </div>

      </div>

      </section>
    );
}

export default Projects