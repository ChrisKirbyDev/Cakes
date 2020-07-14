import React, {Component} from "react";

// Re-usable components
import Header from "../common/header";
import Portfolio from "../common/portfolio";

class Home extends Component {
    render(){
        return (
            <div>
                <Header />
                <Portfolio />
            </div>            
        )
    }
}

export default Home;