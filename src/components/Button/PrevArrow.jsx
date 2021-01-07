import React from 'react'

const PrevArrow = ({ image, onClick }) => {
    return (
        <div className="arrow arrow-left" onClick={onClick}>
            <img className="arrow-img" src={image} alt="left-arrow" />
        </div>
    )
}

export default PrevArrow
