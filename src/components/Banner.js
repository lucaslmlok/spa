import React from 'react'

const Banner = ({ children, title, subtitle, style}) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div />
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner
