import React, {Component} from "react";
import {hot} from "react-hot-loader";
import NavBar from "../Components/NavBar";
import "../styles/styles.css";

// Pages

import Home from "../components/Pages/Home";

class App extends Component{
  render(){
    return(
      <NavBar>
        <Home />
      </NavBar>
    );
  }
}

export default hot(module)(App);