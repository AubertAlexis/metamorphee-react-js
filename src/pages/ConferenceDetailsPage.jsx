import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBanner from "../components/Header/HeaderBanner";

const ConferenceDetailsPage = () => {
    return (
        <div className="conference-details with-banner">
            <HeaderBanner title="Titre de la conférence" badge={true} />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__header">
                            <p className="section__date">Du 28 au 30 Mars 2020</p>
                            <p className="section__price">35 €</p>
                        </div>

                        <div className="section__body">
                            <p className="section__text">La métamorphose à été ma première formation en 2009. Elle a été comme une
                                évidence et est la base de mon travail. Elle m’a permis de me soutenir dans un moment de grande
                                transition dans ma vie, et j’ai eu envie d’en faire bénéficier le plus grand nombre. La vie m’a
                                amenée à me remettre en question et à définir ce que je souhaitais pour moi professionnellement.
                                Suite à mes recherches et avec une profonde envie de me diriger vers les soins palliatifs, j’ai
                                commencé à faire du bénévolat pour l’accompagnement de fin de vie à La Maison de Tara.
                            </p>
                            <p className="section__text">
                                Très vite, il m’a paru essentiel de me former pour l’accompagnement de personnes endeuillées. En
                                effet, les
                                familles et les amis qui entourent le mourant ont l’écoute attentive des médecins et des
                                soignants
                                sur le moment, mais après?…
                            </p>
                            <p className="section__text">
                                Depuis lors et au fil des rencontres faites sur ma route, j’ai continué
                                à me former, notamment avec le massage restructurant, le reiki et les parfums d’éveil.
                                Aujourd’hui
                                je suis heureuse de pouvoir me mettre à votre service pour vous accompagner dans votre processus
                                de
                                deuil ou pour vous soutenir dans votre développement personnel.
                            </p>
                        </div>

                        <div className="section__footer">
                            <Link to="/conference-valid" className="btn btn-primary btn-large section__btn">Réserver une séance</Link>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default ConferenceDetailsPage;