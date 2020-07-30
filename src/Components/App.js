import React from "react";
import Navbar from "./navbar";
import "../styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Form from "./common/form";

function App(){  
    return (
      <Router>
      <div>
       <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/Form" component={Form} />     
      </div>
      </Router>
    )
}

export default App;