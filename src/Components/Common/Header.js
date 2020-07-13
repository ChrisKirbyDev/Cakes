import React, {Component} from "react";

class Header extends Component {
    render(){
        return(
            <header className="header-section">
                <div className="header-content">
                    <h1 className="header-title">Cakes By Emily Eve</h1>
                    <h2 className="header-subtitle">Experience Love At First Bite!</h2>
                    <button>Book Now!</button>
                </div>
            </header>
        )
    }
}

export default Header;