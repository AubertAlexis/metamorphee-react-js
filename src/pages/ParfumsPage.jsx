import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBanner from "../components/Header/HeaderBanner";

import image from '../resources/img/parfums/image-1.png';

const ParfumsPage = () => {
    return (
        <div className="parfums with-banner activity">
            <HeaderBanner title="Parfums d’éveil" />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__body">
                            <div className="block activity activity-gap">
                                <h2 className="block__title">Soins aux parfums d’éveil</h2>
                                <p className="block__text">Fondé sur les principes d’une approche holistique basée sur les chakras,
                                    les parfums d’éveils sont des sprays d’harmonisation et de connexion à soi à base d’huiles
                                    essentielles.</p>
                                <img className="block__image" src={image} alt="main" />
                                <p className="block__text top-gap">Ils invitent à une exploration consciente du corps et de ses
                                    ressentis afin de connecter ses propres ressources et révéler ses potentiels de réalisation.
                                    Agit sur les plans physique, émotionnel, énergétique et spirituel.</p>
                                <Link to="" className="btn btn-transparent btn-large black block__btn">Réserver une séance</Link>
                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
};

export default ParfumsPage;