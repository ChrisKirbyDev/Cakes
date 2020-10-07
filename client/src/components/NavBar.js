import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { MenuItems } from "./common/menuitems";
import Link from "./common/Link";

class Navbar extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <nav className="navbar" i="mainNav">
        <div onClick={() => this.props.history.push("/")}>
          <img
            className="navbar-logo"
            src="assets/img/cbee_logo.svg"
            alt="website logo"
          />
        </div>
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
        <Link to="/form">Book</Link>
      </nav>
    );
  }
}

export default withRouter(Navbar);
