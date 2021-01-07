import React from 'react';
import { Link } from 'react-router-dom';

import PrevArrow from '../Button/PrevArrow';
import NextArrow from '../Button/NextArrow';

import arrowRightImg from '../../resources/img/icon/right-arrow-white.svg';
import arrowLeftImg from '../../resources/img/icon/left-arrow-white.svg';

import data from '../../data/eventCardData';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderEvent = () => {

    const eventSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        variableWidth: true,
        prevArrow: <PrevArrow image={arrowLeftImg} />,
        nextArrow: <NextArrow image={arrowRightImg} />,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
        ]
    };

    return (
        <Slider {...eventSliderSettings} className="slider inline-arrows slider-event">
            {
                data.map((slide, key) => {
                    return <div key={key} className="slide-item card-event">
                        <div className="card-event__image">
                            <img className="card-event__image--img" src={slide.image} alt="event"/>
                        </div>

                        <div className="card-event__body">
                            <span className={`card-event__badge ${slide.badge.color}`}>{slide.badge.title}</span>
                            <p className="card-event__date">{slide.date}</p>
                            <p className="card-event__text">{slide.text}</p>

                            <div className="card-event__footer">
                                <p className="card-event__price">{slide.price}</p>
                                <Link to={slide.button.link} className="card-event__btn btn-secondary">{slide.button.text}</Link>
                            </div>
                        </div>

                    </div>
                })
            }
        </Slider>
    )
}

export default SliderEvent
