import React from "react";

function About(){
    return(
        <div className="about-section" id="about"> 
            <div className="about-titles">
                <h2>The First Cake I Made Was For Others.</h2>
                <h3>Since then, <strong>nothing has changed.</strong></h3>
            </div>            
            <div className="about-image">
                <img className="profile-image" src="/img/about.png" alt="About Me Profile"/>
            </div>
            <div className="about-text">
                <h2>Here's how I got started.</h2>
                <p>I have grown up watching my Mum create wonderful masterpieces for mine and my sisters birthdays 
                over the years and I couldn’t help but want to get involved,
                making the odd thing out of icing for her to add to her creations every now and then.</p>
                <br/>
                <p>After showing my friends at college these little additions to my Mums creations,
                a friend dared me to make him a birthday cake and bring it into college the next day.
                So off I went, stopping off at the cake supply shop and supermarket on my way home.
                I spent all night baking and decorating a cake,
                using every utensil I could find and making an absolute mess in the process!</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet porttitor neque.
                Proin sit amet velit non lectus ultricies fringilla eu pellentesque metus. Pellentesque in est massa.
                Morbi in dignissim nisi. Proin tincidunt tincidunt tortor et pellentesque. In ullamcorper suscipit ante ut sagittis.
                Cras suscipit augue vitae consectetur porttitor. Sed pretium mi a sapien commodo tristique sed nec est.</p>
            </div>
        </div>
    )
}

export default About;