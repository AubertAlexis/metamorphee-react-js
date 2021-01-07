import React from 'react';
import { Link } from 'react-router-dom';

import PrevArrow from '../Button/PrevArrow';
import NextArrow from '../Button/NextArrow';

import arrowRightImg from '../../resources/img/icon/right-arrow-gray.svg';
import arrowLeftImg from '../../resources/img/icon/left-arrow-gray.svg';

import data from '../../data/blogData';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBlog = () => {

    const sliderSettings = {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        variableWidth: true,
        prevArrow: <PrevArrow image={arrowLeftImg} />,
        nextArrow: <NextArrow image={arrowRightImg} />,
        responsive: [
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
        <Slider {...sliderSettings} className="slider inline-arrows slider-blog">
            {
                data.map((slide, key) => {
                    return <div key={key} className="slide-item">
                        <Link className="slide-link" to={slide.link}></Link>
                        <div className="card-blog">

                            <div className="card-blog__image">
                                <img className="card-blog__image--img" src={slide.image} alt={`blog-${key}`} />
                            </div>

                            <div className="card-blog__body">
                                <p className="card-blog__title">{slide.title.first} <br /> {slide.title.second}</p>
                                <p className="card-blog__text">{slide.text}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </Slider>
    )
}

export default SliderBlog
