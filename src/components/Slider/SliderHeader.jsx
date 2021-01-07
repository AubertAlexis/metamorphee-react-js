import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import PrevArrow from '../Button/PrevArrow';
import NextArrow from '../Button/NextArrow';

import arrowRightImg from '../../resources/img/icon/right-arrow.svg';
import arrowLeftImg from '../../resources/img/icon/left-arrow.svg';

import data from '../../data/homeSliderData'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHeader = () => {

    useEffect(() => {
        setTimeout(() => {
            const body = document.querySelector("body");
        
            const initialImageSlide = document.querySelector(".slider-welcome .slick-active .slide-item");
            const initialImage = initialImageSlide.dataset.image;
        
            body.style.backgroundImage = `url('${initialImage}')`;
            body.style.backgroundSize = `cover`;
        
            document.addEventListener("click", (e) => {
                const imageUrlSlide = document.querySelector(".slider-welcome .slick-active .slide-item");
                if(imageUrlSlide === null) return;
                const imageUrl = imageUrlSlide.dataset.image;
        
                body.style.backgroundImage = `url('${imageUrl}')`;
                body.style.backgroundSize = `cover`;
            })
        }, 1)
    }, [])

    const headerSliderSettings = {
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow image={arrowLeftImg} />,
        nextArrow: <NextArrow image={arrowRightImg} />,
        beforeChange(currentSlide, nextSlide) {
            const body = document.querySelector("body");
            const imageUrlSlide = document.querySelectorAll(".slider-welcome .slick-slide:not(.slick-cloned) .slide-item")[nextSlide];
            const imageUrl = imageUrlSlide.dataset.image;

            body.style.backgroundImage = `url('${imageUrl}')`;
            body.style.backgroundSize = `cover`;
        },
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    return (
        <Slider {...headerSliderSettings} className="slider slider-welcome">
            {
                data.map((slide, key) => {
                    return <div key={key} className="slide-item" data-image={slide.image}>
                        <div className="slide-content">
                            <div className="container-fluid full-padding">
                                <h2 className="slide-title">{slide.title}</h2>
                                <p className="slide-text">{slide.text}</p>
                                <Link to={slide.button.link} className="btn btn-transparent slide-btn tablet">{slide.button.text}</Link>
                            </div>
                        </div>
                        <Link to={slide.button.link} className="btn btn-transparent slide-btn desktop mobile">{slide.button.text}</Link>
                    </div>
                })
            }
        </Slider>
    )
}

export default SliderHeader
