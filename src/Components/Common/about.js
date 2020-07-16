import React from "react";
import Image from "../assets/img/about.png";

function About(){
    return(
        <div className="about-section"> 
            <h2>The First Cake I Made Was For Others.</h2>
            <h3>Ever since, i've been making cakes <strong>styled for everyone.</strong></h3>
            <div className="about-image">
                <img className="profile-image" src={Image} alt="About Me Profile"/>
            </div>
            <div className="about-text">
                <h2>Here's how I got started.</h2>
                <p>I have grown up watching my Mum create wonderful masterpieces for mine and my sisters birthdays 
                over the years and I couldn’t help but want to get involved,
                making the odd thing out of icing for her to add to her creations every now and then.</p>
                <p>After showing my friends at college these little additions to my Mums creations,
                a friend dared me to make him a birthday cake and bring it into college the next day.
                So off I went, stopping off at the cake supply shop and supermarket on my way home.
                I spent all night baking and decorating a cake,
                using every utensil I could find and making an absolute mess in the process!</p>
            </div>
        </div>
    )
}

export default About;