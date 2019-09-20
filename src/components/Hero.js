import React from 'react'

const Hero = ({ children, hero }) => {
    return (
        <header className={hero}>
            <div className={`${hero}-filter`}></div>
            {children}
        </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
}

export default Hero
