import React from "react";

// Re-usable components
import Header from "../common/header";
import Portfolio from "../common/portfolio";
import About from "../common/about";

function Home(){
        return (
            <div>
                <Header />
                <Portfolio />
                <About />
            </div>            
        )
}

export default Home;