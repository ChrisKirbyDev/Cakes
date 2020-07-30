import React from "react";
import Navbar from "./navbar";
import "../styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Form from "./common/home";

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
      </div>
      </Router>
    )
}

export default App;