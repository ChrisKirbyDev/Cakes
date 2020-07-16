import React from "react";
import Image from "../assets/img/header-image.png";


function Header(){
        return(
            <header className="header-section">
                <img className="header-image" src={Image} alt="Cakes By Emily Eve Header"/>
                <div className="header-content">
                    <h1 className="header-title">Life Is Sweet.</h1>
                    <h2 className="header-subtitle">Experience Love At First Bite!</h2>
                    <button className="header-btn btn-1">Book A Consultation</button>
                </div>
            </header>
        )
}

export default Header;

