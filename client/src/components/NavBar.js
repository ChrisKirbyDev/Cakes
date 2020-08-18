import React, { Component } from "react";
import { MenuItems } from "./common/menuitems";
import { Button } from "./common/Button";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <nav className="navbar" i="mainNav">
        <Link to="/">
          <img
            className="navbar-logo"
            src="/img/cbee_logo.svg"
            alt="website logo"
          />
        </Link>
        <div className="menu-icon" onClick={this.handleOpen}>
          <i className={this.state.open ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.open ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} onClick={this.handleOpen}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Book</Button>
      </nav>
    );
  }
}

export default Navbar;
