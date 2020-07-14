import React, { useState } from "react";
import PortfolioImg from "./portfolioimg";

// Images

import i1 from "../assets/img/01-thumbnail.jpg";
import i2 from "../assets/img/02-thumbnail.jpg";
import i3 from "../assets/img/03-thumbnail.jpg";
import i4 from "../assets/img/04-thumbnail.jpg";
import i5 from "../assets/img/05-thumbnail.jpg";
import i6 from "../assets/img/06-thumbnail.jpg";

function Portfolio() {    
        let portfolioArr = [
        <PortfolioImg src={i1} />,
        <PortfolioImg src={i2} />,
        <PortfolioImg src={i3} />,
        <PortfolioImg src={i4} />,
        <PortfolioImg src={i5} />,
        <PortfolioImg src={i6} />
    ];
        const [x, setX] = useState(0);
        const goLeft = () => {
            console.log(x)
            // moves to end of the array
            x === 0 ? setX(-100 * (portfolioArr.length - 1)) : setX(x + 100);
        };
        const goRight = () => {
            console.log(x)
            // set maximum length of portfolioArr & moves to the start of the array
            x=== -100 * (portfolioArr.length - 1) ? setX(0) : setX(x - 100);
        };

        return(
            <section className="portfolio-section" id="section">
                <div className="portfolio-container">
                    <h2>Portfolio</h2>
                    <div className="portfolio-slider">
                        {portfolioArr.map((item, index) => {
                            return (
                                <div key={index} className="portfolio-slide" style={{transform: `translateX(${x}%)`}}>
                                    {item}
                                </div>
                            );
                        })}
                        <button id="goLeft" onClick={goLeft}>
                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        </button>
                        <button id="goRight" onClick={goRight}>
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </section>
        )    
}

export default Portfolio;