import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-right">
                <div className="title">Waterbury Traditional GMT</div>
                <div className="subtitle">There are Time<br/>Travelers Among <br/>Us</div>
                <div className="description">We’ve blended our traditional craftsmanship<br/>with the practicality of a GMT movement</div>
                <br/>
                <div>
                    <button className="latest-collection-button">Latest Collection</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
