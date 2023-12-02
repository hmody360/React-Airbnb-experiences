import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import cardData from "./cardData"
import Card from "./components/Card"
const App = () => {
    console.log(cardData);
    const cardElems = cardData.map( elem => {
        return (
        <Card 
        img={elem.img}
        rating={elem.rating}
        reviewCount={elem.reviewCount}
        location={elem.location}
        title={elem.title}
        price={elem.price}
        />
        )
    }
        
    )
    console.log(cardElems)
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <div className="card-list">
                {cardElems}
            </div>
        </div>
    )
}
export default App

{/* <Card 
            img="Omar.jpg"
            rating="5.0"
            reviewCount={6}
            location="KSA"
            title="Learn React with Omar"
            price={200}/> */}