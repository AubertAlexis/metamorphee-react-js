import React from 'react'
import { Link } from 'react-router-dom';
import SliderBlog from '../Slider/SliderBlog'

const Blog = () => {
    return (
        <div className="section blog">

            <div className="container">
                <h2 className="section__title blog__title">espace blog</h2>
                <h3 className="section__subtitle blog__subtitle">Articles dans l'ordre chronologique</h3>

                <div className="blog__cards">

                    <SliderBlog />

                    <Link to="./blog" className="btn btn-primary blog__more">Plus d'articles</Link>

                </div>

            </div>

        </div>
    )
}

export default Blog
