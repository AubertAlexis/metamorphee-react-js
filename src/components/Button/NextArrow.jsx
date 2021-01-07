import React from 'react'

const NextArrow = ({ image, onClick }) => {
    return (
        <div className="arrow arrow-right" onClick={onClick}>
            <img className="arrow-img" src={image} alt="right-arrow" />
        </div>
    )
}

export default NextArrow
