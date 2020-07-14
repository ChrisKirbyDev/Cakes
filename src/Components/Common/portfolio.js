import React, { useState } from "react";

function Portfolio() {    
        let portfolioArr = [1, 2, 3, 4, 5];
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
                    <div className="portfolio-text-center">
                        <h2 className="portfolio-section-heading">Portfolio</h2>
                        <h3 className="portfolio-section-subheading">Here is some of the work I have created.</h3>
                    </div>
                    <div className="portfolio-slider">
                        {portfolioArr.map((item, index) => {
                            return (
                                <div key={index} className="portfolio-slide" style={{transform: `translateX(${x}%)`}}>
                                    {item}
                                </div>
                            );
                        })}
                        <button id="goLeft" onClick={goLeft}>
                            left
                        </button>
                        <button id="goRight" onClick={goRight}>
                            right
                        </button>
                    </div>
                </div>
            </section>
        )    
}

export default Portfolio;