import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div>
        <div className="about-text-cont">
          <div className="about-me-cont">
            <div className="paper-line"> </div>

              <p className="about-me-p">
                about me! </p>

              <h2 className="about-me-h2">
                 Little details about myself </h2>

              <ul className="about-me-desc">
                <li> I am currently 20 year old, living in Silang, Cavite. </li>
                <li> Taking a degree in <b> Bachelor of Science in Information Technology </b> in Cavite State University </li>
                <li> I like to draw, read, watch series/movies, and I'm into <mark> sapphic contents! </mark> </li>
              </ul>
            </div>

            <div className="more-about-cont">
               <div className="currently-cont">
                   <p className="currently">
                        currently
                   </p>

                   <p className="currently-desc">
                        Learning CSS, HTML, React, while building my portfolio.
                   </p>
                </div>

                <div className="achieve-cont">
                    <p className="achieve">
                       achievements
                    </p>

                    <ul className="achieve-desc">
                       <li> consistent honor student since elementary </li>
                       <li> municipality scholar</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>

        <div className="space"></div>
    </section>
  );
}

export default About