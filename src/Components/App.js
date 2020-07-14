import React from "react";
import Navbar from "./navbar";
import "../styles/styles.css";

// Pages
import Home from "./pages/home";

function App(){
    return (
      <>
       <Navbar />
       <Home />
      </>
    )
}

export default App;