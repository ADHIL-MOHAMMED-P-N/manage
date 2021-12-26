import React from 'react'
import GetStarted from './GetStarted'
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
            <div className="text">
                <div className="text-content">
                    <h1 className="hero-display">Bring everyone together to build better products.
                    </h1>
                    <p className="hero-para">Manage makes it simple for software teams to plan day-to-day tasks while keeping the large team goal in view.
                    </p>
                    <GetStarted />
                </div>
               
            </div>
            <div className="illustration">
                <div className="img-container">
                <img src="./images/illustration-intro.svg" alt="graphs-images" />
                </div>
               
            </div>
            </div>
            
        </div>
    )
}

export default Hero
