import React from "react";
import omarPic from "../images/Omar.jpg"

const Card = () => {
    return (
        <div className="card-container">
            <img src={omarPic} className="card-image" />
            <div className="rating-container">
                <i className="fa-solid fa-star"></i>
                <p className="rating">5.0</p>
                <p className="no-of-ratings">(6)</p>
                <p className="country">• KSA</p>
            </div>
            <p className="card-desc">React Lessons with Omar Aboulliel</p>
            <div className="price-container">
            <p className="price">From $∞ </p>
            <p className="per-person">/ person</p>
            </div>
        </div>
    )
}
export default Card