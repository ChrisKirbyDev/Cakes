import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,  
} from "@fortawesome/free-brands-svg-icons";
import {  
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contact(){
  const currentYear = new Date().getFullYear();
  return (
    <footer className="contact">
        <div className="contact-container">
          <h3 className="text">Get In Touch</h3>
          <a 
            href="https://www.facebook.com/cakesbyemilyeve"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a 
            href="mailto:cakesbyemilyeve@gmail.com"
            className="email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <p className="text">Copyright ⓒ {currentYear}</p>
        </div>
        
    </footer>
  )
}

export default Contact;
