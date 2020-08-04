import React from "react";

// Re-usable components
import Header from "../common/Header";
import Portfolio from "../common/Portfolio";
import About from "../common/About";
import Pricing from "../common/Pricing";

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