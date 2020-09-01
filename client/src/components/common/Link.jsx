import React from "react";
import { withRouter } from "react-router-dom";

const Link = (props) => {
  const { children, to, history, location } = props;

  const handleOnClick = () => {
    if (location === to) return;
    history.push(to);
  };

  return (
    <button className="btn" onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default withRouter(Link);
