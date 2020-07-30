import React from "react";

// Re-usable components
import Header from "../common/header";
import Portfolio from "../common/portfolio";
import About from "../common/about";
import Pricing from "../common/pricing";
import Contact from "../common/contact";
import Form from "../common/form";

function Home(){
        return (
            <div>
                <Header />
                <Portfolio />
                <About />
                <Pricing />
                <Contact />
                <Form />
            </div>            
        )
}

export default Home;