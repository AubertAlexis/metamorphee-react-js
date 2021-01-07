import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBanner from "../components/Header/HeaderBanner";

import image from '../resources/img/reki/image-1.png';

const RekiPage = () => {
    return (
        <div className="reki with-banner activity">
            <HeaderBanner title="Reki" />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__body">
                            <div className="block activity activity-gap">
                                <h2 className="block__title">Énergie universelle</h2>
                                <p className="block__text">Méthode utilisant l’énergie universelle pour stimuler le bien-être, elle
                                    participe au processus de guérison, libère le potentiel de santé en nous, procure un état de
                                    profonde relaxation et favorise la circulation de l’énergie. Lève les blocages d’énergie sur
                                    le physique et l’aura.</p>
                                <img className="block__image" src={image} alt="main" />
                                <p className="block__text top-gap">Harmonise la personne dans son ensemble. L’énergie du reiki se
                                    transmet par l’imposition des mains du praticien, qui agit comme catalyseur, et qui recourt
                                    à des positions précises sur tout le corps</p>
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

export default RekiPage;