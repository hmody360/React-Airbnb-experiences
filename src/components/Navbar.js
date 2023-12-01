import React from "react"
import airbnblogo from "../images/airbnb-logo.png"

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <img src={airbnblogo} className="nav-logo"/>
        </nav>
    )
}
export default Navbar