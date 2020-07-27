import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Contact(){
  const currentYear = new Date().getFullYear();
  return (
    <footer>
        <div className="contact-container">
          <a 
            href="https://www.facebook.com/cakesbyemilyeve"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <p>Copyright ⓒ {currentYear}</p>
        </div>
        
    </footer>
  )
}

export default Contact;
