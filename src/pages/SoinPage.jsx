import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBanner from "../components/Header/HeaderBanner";

import image from '../resources/img/soins/image-1.png';

const SoinPage = () => {
    return (
        <div className="soins with-banner activity">
            <HeaderBanner title="Soins restructurant" />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__body">
                            <div className="block activity activity-gap">
                                <h2 className="block__title">Le massage restructurant</h2>
                                <p className="block__text">Le massage restructurant est caractérisé par un climat affectif
                                    sécurisant et un certain type de toucher: superficiel, moyen et profond</p>
                                <img className="block__image" src={image} alt="main" />
                                <p className="block__text top-gap">Cette approche corporelle progressive favorise la prise de
                                    conscience de sa propre individualité, son identité, au travers de la corporalité et ses
                                    sensations. Développe la confiance en soi, l’autonomie, l’ouverture et la communication.</p>
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

export default SoinPage;