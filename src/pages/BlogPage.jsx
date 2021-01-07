import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBanner from "../components/Header/HeaderBanner";

import data from '../data/blogListData';

const BlogPage = () => {
    return (
        <div className="list-articles with-banner">
            <HeaderBanner title="Titre de l’article numéro un" blog={true} withButton={true} />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__body">
                            <div className="blog-list">
                                <h2 className="blog-list__title">Dernier articles</h2>
                                {
                                    data.map((card, key) => {
                                        return <div className="card-list-blog" key={key}>
                                            <div className="card-list-blog__image-box"></div>
                                            <div className="card-list-blog__content">
                                                <p className="card-list-blog__title">{card.title}</p>
                                                <p className="card-list-blog__text">{card.text}</p>
                                                <Link to={card.button.link} className="btn btn-transparent black card-list-blog__btn">{card.button.text}</Link>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;