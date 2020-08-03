import React, { Component } from "react";
import { MenuItems } from "./common/menuitems";
import { Button } from "./common/button";
import { Link } from "react-router-dom";
import Logo from "../components/assets/img/cbee_logo.svg";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(            
                <nav className="navbar" i="mainNav">
                    <Link to="/"><img className="navbar-logo" src={Logo} alt="website logo" /></Link>                    
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                            {MenuItems.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                        {item.title}
                                        </a>
                                    </li>
                                )
                            })}                                                        
                        </ul>
                        <Button>Book</Button>
                </nav>
            
        );
    }
}

export default Navbar;