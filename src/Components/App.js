import React from "react";
import Navbar from "./navbar";
import "../styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";

function App(){  
    return (
      <Router>
      <div>
       <Navbar />
       <Route
          path="/"
          exact component={Home} />       
      </div>
      </Router>
    )
}

export default App;