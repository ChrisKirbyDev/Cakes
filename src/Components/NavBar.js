import React, { Component } from "./node_modules/react";

class Navbar extends Component{
    render(){
        return(
            <div>
            <nav>
                <ul>
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default Navbar;