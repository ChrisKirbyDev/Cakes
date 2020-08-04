import React, { useState } from "react";
import PortfolioImg from "./portfolioimg";

function Portfolio() {    
        let portfolioArr = [
        <PortfolioImg src="/img/01-thumbnail.jpg" />,
        <PortfolioImg src="/img/02-thumbnail.jpg" />,
        <PortfolioImg src="/img/03-thumbnail.jpg" />,
        <PortfolioImg src="/img/04-thumbnail.jpg" />,
        <PortfolioImg src="/img/05-thumbnail.jpg" />,
        <PortfolioImg src="/img/06-thumbnail.jpg" />
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
            <section className="portfolio-section" id="portfolio">
                <div className="portfolio-container">
                    <div className="portfolio-title">
                        <h2>Portfolio</h2>
                    </div>                    
                    <div className="portfolio-slider">
                        {portfolioArr.map((item, index) => {
                            return (
                                <div key={index} className="portfolio-slide" style={{transform: `translateX(${x}%)`}}>
                                    {item}
                                </div>
                            );
                        })}
                        <button className="goLeft" onClick={goLeft}>
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </button>
                        <button className="goRight" onClick={goRight}>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </section>
        )    
}

export default Portfolio;