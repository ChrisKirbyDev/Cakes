import React, { Component } from "react";
import Logo from "../components/assets/img/cbee_logo.svg";

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar" i="mainNav">
                    <img src={Logo} alt="website logo" />
                    <div className="nav-container">
                        <ul className="navbar-nav">
                            <li className="nav-item">Portfolio</li>
                            <li className="nav-item">About</li>
                            <li className="nav-item">Book</li>
                            <li className="nav-item">Pricing</li>
                            <li className="nav-item">Contact</li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;