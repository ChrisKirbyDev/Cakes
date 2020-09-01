import React from "react";
import { withRouter } from "react-router-dom";

function Header(props) {
  return (
    <header className="header-section" id="header">
      <img
        className="header-image"
        src="/img/header-image.png"
        alt="Cakes By Emily Eve Header"
      />
      <div className="header-content">
        <h1 className="header-title">Life Is Sweet.</h1>
        <h2 className="header-subtitle">Experience Love At First Bite!</h2>
        <div onClick={() => props.history.push("/form")}>
          <button className="header-btn btn-1">Book A Consultation</button>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header);
