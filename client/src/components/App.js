import React from "react";
import "../styles/styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Form from "./common/Form";
import Navbar from "./NavBar";
import Contact from "./common/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/form" exact component={Form} />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
