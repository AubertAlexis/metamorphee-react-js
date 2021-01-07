import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBanner from "../components/Header/HeaderBanner";

import image from '../resources/img/metamorphose/image-1.png';

const MetamorphosePage = () => {
    return (
        <div className="metamorphose with-banner activity">
            <HeaderBanner title="Métamorphose" />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__body">
                            <div className="block activity activity-gap">
                                <h2 className="block__title raw">Le massage métamorphique</h2>
                                <p className="block__text">Le massage métamorphique se fait sur le corps physique et les corps
                                    subtils (aura). Le travail sur les pieds permettra de se mettre en mouvement, offrir le
                                    relâchement nécessaire pour pouvoir « avancer ». Le massage des mains va travailler sur le
                                    donner-recevoir et permettre de déclencher l’action. Le passage sur la tête va libérer le
                                    mental, fluidifier la capacité de planification et de communication.</p>
                                <img className="block__image" src={image} alt="main" />
                                <p className="block__text top-gap">La métamorphose libère des vieux schémas, dissout les blocages
                                    pris dans le temps et permet le lâcher prise. Harmonise, re-centre, offre la possibilité de prendre sa
                                    place et de vivre le moment présent.</p>
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

export default MetamorphosePage;