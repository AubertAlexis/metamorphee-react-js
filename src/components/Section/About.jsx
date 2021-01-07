import React from 'react'
import { Link } from 'react-router-dom';

import aboutImg from '../../resources/img/home/about.png';

const About = () => {
    return (
        <div className="section centered-content about" id="about">
            <div className="container">
                <h2 className="section__title about__title">Mon chemin</h2>
                <div className="about__content">
                    <img src={aboutImg} alt="portrait" className="about__img" />
                    <div className="about__text">
                        <p className="about__text--item">La métamorphose à été ma première formation en 2009. Elle a été
                            comme une évidence et est la base de mon travail. Elle m’a permis de me soutenir dans un
                            moment de grande transition dans ma vie, et j’ai eu envie d’en faire bénéficier le plus
                            grand nombre. La vie m’a amenée à me remettre en question et à définir ce que je souhaitais
                            pour moi professionnellement. Suite à mes recherches et avec une profonde envie de me
                            diriger vers les soins palliatifs, j’ai commencé à faire du bénévolat pour l’accompagnement
                            de fin de vie à La Maison de Tara.
                        </p>
                        <p className="about__text--item">Très vite, il m’a paru essentiel de me former pour l’accompagnement
                            de personnes endeuillées. En effet, les familles et les amis qui entourent le mourant ont
                            l’écoute attentive des médecins et des soignants sur le moment, mais après?…
                        </p>
                        <p className="about__text--item">Depuis lors et au fil des rencontres faites sur ma route,
                            j’ai continué à me former, notamment avec le massage restructurant, le reiki et les parfums
                            d’éveil. Aujourd’hui je suis heureuse de pouvoir me mettre à votre service pour vous
                            accompagner dans votre processus de deuil ou pour vous soutenir dans votre développement
                            personnel.
                        </p>
                    </div>
                </div>
                <div className="about__btn--box">
                    <Link to="/" className="btn-link arrow about__btn">En savoir plus</Link>
                </div>
            </div>
        </div>
    )
}

export default About
