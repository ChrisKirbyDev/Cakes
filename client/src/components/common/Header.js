import React from "react";
import Image from "../assets/img/header-image.png";
import { Link } from "react-router-dom";


function Header(){
        return(
            <header className="header-section" id="header">
                <img className="header-image" src={Image} alt="Cakes By Emily Eve Header"/>
                <div className="header-content">
                    <h1 className="header-title">Life Is Sweet.</h1>
                    <h2 className="header-subtitle">Experience Love At First Bite!</h2>
                    <Link to="/form"><button className="header-btn btn-1">Book A Consultation</button></Link>
                </div>
            </header>
        )
}

export default Header;

