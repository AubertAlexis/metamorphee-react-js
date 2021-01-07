import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBanner from "../components/Header/HeaderBanner";

import image from '../resources/img/accompagnement-deuil/image-1.png';

const AccompagnementPage = () => {
    return (
        <div className="accompagnement-deuil with-banner activity">
            <HeaderBanner title="Accompagnement du deuil" />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__body">
                            <div className="block activity activity-gap">
                                <h2 className="block__title">Soins aux parfums d’éveil</h2>
                                <p className="block__text">Je vous propose un accompagnement pour vous guider dans le processus de
                                    deuil, le comprendre, vous permettre de vous soutenir et de prendre en charge cette étape de
                                    cicatrisation.</p>
                                <img className="block__image" src={image} alt="main" />
                                <p className="block__text top-gap">Par le dialogue et au travers d’un travail sur le physique, nous
                                    allons décoder les émotions liées à la perte de l’être cher, définir avec vous vos besoins,
                                    mettre en lumière vos ressources naturelles ainsi que vos capacités, afin d’avancer plus
                                    sereinement, à votre rythme et avec conscience sur ce nouveau chemin.</p>
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

export default AccompagnementPage;