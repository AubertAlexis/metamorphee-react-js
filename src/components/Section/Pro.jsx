import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import data from '../../data/proData';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pro = () => {

    const [slider, setSlider] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1099) {
                if (slider === true) setSlider(false);
                return;
            } 
            setSlider(true)
        })
    }, [slider])

    const sliderSettings = {
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="section space" id="space">

            <div className="container">
                <h2 className="section__title space__title">espace pro</h2>

                {
                    !slider ?
                        <div className="slider space__cards" id="slider-space">
                        {
                            data.map((slide, key) => {
                                return <div key={key} className="card-space">

                                <div className="card-space__image">
                                    <img className="card-space__image--img" src={slide.image} alt="space" />
                                </div>
        
                                <div className="card-space__body">
                                    <p className="card-space__title">{slide.title}</p>
                                    <p className="card-space__text">{slide.text}</p>
        
                                    <div className="card-space__footer">
                                        <Link to={slide.button.link} className="card-space__btn btn-link arrow">{slide.button.text}</Link>
                                    </div>
                                </div>
        
                            </div>
                            })
                        }

                    </div>
                    :
                    <Slider {...sliderSettings} className="slider space__cards slider-space">
                        {
                            data.map((slide, key) => {
                                return <div key={key} className="card-space">

                                <div className="card-space__image">
                                    <img className="card-space__image--img" src={slide.image} alt="space" />
                                </div>
        
                                <div className="card-space__body">
                                    <p className="card-space__title">{slide.title}</p>
                                    <p className="card-space__text">{slide.text}</p>
        
                                    <div className="card-space__footer">
                                        <Link to={slide.button.link} className="card-space__btn btn-link arrow">{slide.button.text}</Link>
                                    </div>
                                </div>
        
                            </div>
                            })
                        }
                    </Slider>
                }

            </div>

        </div>
    )
}

export default Pro
