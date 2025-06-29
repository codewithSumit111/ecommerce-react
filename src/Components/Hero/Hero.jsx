import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Best Deals !  Best Prices !</h2>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src="src/assets/hand_icon.png" alt="" height="50px"/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src="src/assets/arrow_icon.png" alt="" height="30px"/>
            </div>
        </div>
        <div className="hero-right">
            <img src="src/assets/men.webp" alt="" width="550" height="500px" />
        </div>
    </div>
)
}

export default Hero