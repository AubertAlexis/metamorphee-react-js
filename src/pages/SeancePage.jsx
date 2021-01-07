import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderBanner from "../components/Header/HeaderBanner";

const SeancePage = () => {
    return (
        <div className="seances with-banner activity">
            <HeaderBanner title="Séances" />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__body">
                            <div className="block activity activity-gap">
                                <h2 className="block__title no-gap large">Tarifs</h2>
                                <hr className="block__hr little-top-gap" />
                                <div className="block__table-row">
                                    <p className="block__text bold">Les séances de soins</p>
                                    <p className="block__text bold">1h30</p>
                                    <p className="block__text bold">120.-</p>
                                </div>
                                <div className="block__table-row">
                                    <p className="block__text bold">L'accompagnement du deuil</p>
                                    <p className="block__text bold">1h</p>
                                    <p className="block__text bold">80.-</p>
                                </div>
                                <hr className="block__hr" />
                                <p className="block__text">Le règlement se fait en espèces.</p>
                                <p className="block__text">La première séance comprend l’anamnèse
                                    (compter 15 minutes en plus) et est comprise dans le prix.</p>
                                <p className="block__text">Tous les soins se font habillés.
                                    Veuillez prévoir une tenue confortable et non serrée à la taille pour plus d’aisance.</p>
                                <p className="block__text">Le règlement se fait en espèces.
                                    Possibilité de se déplacer en EMS. Traitement à distance possible à la suite de séances au
                                    cabinet.</p>
                                <p className="block__subtitle">Pour qui? Pour quoi?</p>
                                <p className="block__text">Il n’y a aucunes contres-indications pour tous les soins que
                                    je propose. Toute personne susceptible de vouloir faire un travail de développement
                                    personnel, pour travailler sur un problématique précise, ou simplement s’accorder du temps
                                    pour soi et pour son bien être peut avoir recours à ces soins.</p>
                                </div>
                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
};

export default SeancePage;