import React, { Component } from "react";
import Logo from "../components/assets/img/cbee_logo.svg";
import Form from "../components/common/form.js";

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar" i="mainNav">
                    <img src={Logo} alt="website logo" />
                    <div className="nav-container">
                        <ul className="navbar-nav">
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="">Book</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;