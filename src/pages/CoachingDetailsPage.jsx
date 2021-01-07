import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderBanner from "../components/Header/HeaderBanner";

import main from '../resources/img/coaching/image-1.png';

const CoachingDetailsPage = () => {
    return (
        <div className="coaching-details with-banner">
            <HeaderBanner title="Coaching" little={true} />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__body">
                            <div className="block">
                                <h2 className="block__title">Soins aux parfums d’éveil</h2>

                                    <p className="block__text">La métamorphose à été ma première formation en 2009. Elle a été comme une
                                        évidence et est la base de mon travail. Elle m’a permis de me soutenir dans un moment de
                                        grande transition dans ma vie, et j’ai eu envie d’en faire bénéficier le plus grand nombre.
                                        La vie m’a amenée à me remettre en question et à définir ce que je souhaitais pour moi
                                        professionnellement. Suite à mes recherches et avec une profonde envie de me diriger vers
                                        les soins palliatifs, j’ai commencé à faire du bénévolat pour l’accompagnement de fin de vie
                                        à La Maison de Tara. </p>
                                    <p className="block__text">Très vite, il m’a paru essentiel de me former pour l’accompagnement de
                                        personnes endeuillées. En effet, les familles et les amis qui entourent le mourant ont
                                        l’écoute attentive des médecins et des soignants sur le moment, mais après?… </p>
                                    <p className="block__text">
                                        Depuis lors et
                                        au fil des rencontres faites sur ma route, j’ai continué à me former, notamment avec le
                                        massage restructurant, le reiki et les parfums d’éveil. Aujourd’hui je suis heureuse de
                                        pouvoir me mettre à votre service pour vous accompagner dans votre processus de deuil ou
                                        pour vous soutenir dans votre développement personnel.</p>
                            </div>

                            <div className="block image-text">
                                <img className="block__image" src={main} alt="main" />
                                <p className="block__text">
                                    La métamorphose à été ma première formation en 2009. Elle a été comme une évidence et est la
                                    base de mon travail. Elle m’a permis de me soutenir dans un moment de grande transition dans
                                    ma vie, et j’ai eu envie d’en faire bénéficier le plus grand nombre. La vie m’a amenée à me
                                    remettre en question et à définir ce que je souhaitais pour moi professionnellement. Suite à
                                    mes recherches et avec une profonde envie de me diriger vers les soins palliatifs, j’ai
                                    commencé à faire du bénévolat pour l’accompagnement de fin de vie à La Maison de Tara.
                                </p>
                            </div>

                            <div className="block no-gap">
                                <h2 className="block__title">Soins aux parfums d’éveil</h2>
                                <p className="block__text">La métamorphose à été ma première formation en 2009. Elle a été comme une
                                    évidence et est la base de mon travail. Elle m’a permis de me soutenir dans un moment de
                                    grande transition dans ma vie, et j’ai eu envie d’en faire bénéficier le plus grand nombre.
                                    La vie m’a amenée à me remettre en question et à définir ce que je souhaitais pour moi
                                    professionnellement. Suite à mes recherches et avec une profonde envie de me diriger vers
                                    les soins palliatifs, j’ai commencé à faire du bénévolat pour l’accompagnement de fin de vie
                                    à La Maison de Tara. </p>
                                <p className="block__text">Très vite, il m’a paru essentiel de me former pour l’accompagnement de
                                    personnes endeuillées. En effet, les familles et les amis qui entourent le mourant ont
                                    l’écoute attentive des médecins et des soignants sur le moment, mais après?… </p>
                                <p className="block__text">
                                    Depuis lors et
                                    au fil des rencontres faites sur ma route, j’ai continué à me former, notamment avec le
                                    massage restructurant, le reiki et les parfums d’éveil. Aujourd’hui je suis heureuse de
                                    pouvoir me mettre à votre service pour vous accompagner dans votre processus de deuil ou
                                    pour vous soutenir dans votre développement personnel.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default CoachingDetailsPage;