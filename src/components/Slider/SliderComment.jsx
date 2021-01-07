import React from 'react';

import PrevArrow from '../Button/PrevArrow';
import NextArrow from '../Button/NextArrow';

import arrowRightImg from '../../resources/img/icon/right-little-arrow.svg';
import arrowLeftImg from '../../resources/img/icon/left-little-arrow.svg';

import data from '../../data/commentData';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComment = () => {

    const sliderSettings = {
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow image={arrowLeftImg} />,
        nextArrow: <NextArrow image={arrowRightImg} />,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
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

        <Slider {...sliderSettings} className="slider inline-arrows slider-comment">
            {
                data.map((slide, key) => {
                    return <div key={key} className="slide-item">
                        <div className="comment">
                            <div className="comment__image"></div>
                            <div className="comment__content">
                                <p className="comment__text">{slide.text}
                                </p>
                                <p className="comment__author">{slide.author}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </Slider>
    )
}

export default SliderComment
