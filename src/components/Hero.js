import React from "react";
import gridPhotos from "../images/photo-grid.png"

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={gridPhotos} className="grid-photo"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-content">Join unique Interactive activities led by one-of-a-kind hosts-all without leaving home. </p>
        </div>
    )
}
export default Hero