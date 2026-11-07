import './Contact.css'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"

function Contact() {
    return (
      <section className="contact" id="contact">
        <div>
          <div className="contact-cont">
            <h1 className="contact-header"> Let's work together! </h1>
            <p className="contact-desc"> 
                I'm currently looking for new opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you! 
            </p>

            <div className="contact-email-cont">
              <span className="contact-email"> 
                  Send me a <a href="mailto:izablessbaridji01@gmail.com" target="_blank" rel="noopener noreferrer" className="email-link"> message </a> </span>
            </div>

            <div className="socials-cont"> 
              <a href="https://github.com/archibb" target="_blank" rel="noopener noreferrer" className="github-link"> 
                <FaGithub size={26}/> 
              </a>

              <a href="https://www.facebook.com/iza.bless.baridji" target="_blank" rel="noopener noreferrer" className="facebook-link">
                <FaFacebook size={26}/>
              </a>

              <a href="https://www.instagram.com/zblss_/" target="_blank" rel="noopener noreferrer" className="instagram-link">
                <FaInstagram size={26}/>
              </a>
            </div>
          </div>
        </div>
            
      </section>
    );
}

export default Contact