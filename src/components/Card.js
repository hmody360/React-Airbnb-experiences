import React from "react";

const Card = (props) => {
    let badgeText
    if (props.openSpots == 0){
        badgeText = "SOLD OUT"
    } else if (props.location == "Online"){
        badgeText = "Online"
    }
    return (
        <div className="card-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`./images/${props.img}`} className="card-image" />
            <div className="rating-container">
                <i className="fa-solid fa-star"></i>
                <p className="rating">{props.rating}</p>
                <p className="no-of-ratings">({props.reviewCount})</p>
                <p className="country">• {props.location}</p>
            </div>
            <p className="card-desc">{props.title}</p>
            <div className="price-container">
            <p className="price">From ${props.price} </p>
            <p className="per-person">/ person</p>
            </div>
        </div>
    )
}
export default Card