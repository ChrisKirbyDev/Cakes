import React, {Component} from "./node_modules/react";
import {hot} from "react-hot-loader";
import Navbar from "./navbar";
import "../styles/styles.css";

// Pages

import Home from "./pages/home";

class App extends Component{
  render(){
    return(
      <Navbar>
        <Home />
      </Navbar>
    );
  }
}

export default hot(module)(App);