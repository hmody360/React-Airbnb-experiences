import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <div className="card-list">
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
    )
}
export default App