import React from "react";

// Re-usable components
import Header from "../common/header";
import Portfolio from "../common/portfolio";
import About from "../common/about";
import Pricing from "../common/pricing";

function Home(){
        return (
            <div>
                <Header />
                <Portfolio />
                <About />
                <Pricing />
            </div>            
        )
}

export default Home;