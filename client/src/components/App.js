import React from "react";
import "../styles/styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Form from "./common/form";
import Navbar from "./NavBar";
import Contact from "./common/contact";

function App(){  
    return (
      <Router>
      <div>
       <Navbar />
       <Route
          path="/"
          exact component={Home} />
        <Route
          path="/form"
          exact component={Form} />
        <Contact />
      </div>
      </Router>
    )
}

export default App;