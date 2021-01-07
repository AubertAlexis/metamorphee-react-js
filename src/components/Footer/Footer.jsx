import React from 'react'
import { Link } from 'react-router-dom'

import facebook from '../../resources/img/icon/facebook.svg';
import logo from '../../resources/img/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <div className="container">

                    <div className="footer__content">

                        <div className="footer__contact">

                            <p className="footer__title large desktop">Contact</p>

                            <div className="footer__items">

                                <div className="footer__section footer__address">
                                    <p className="footer__item">Céline Moncalvo</p>
                                    <p className="footer__item address">Avenue Choiseul 19 A</p>
                                    <p className="footer__item address">1290 Versoix</p>
                                </div>

                                <div className="footer__section">
                                    <p className="footer__item">
                                        <Link to="" className="social">
                                            <img src={facebook} alt="facebook-icon" />
                                        </Link>
                                    </p>
                                    <p className="footer__item">079 433 14 68</p>
                                    <p className="footer__item">celine@metamorphee.ch</p>
                                </div>

                            </div>

                        </div>

                        <div className="footer__utils">

                            <p className="footer__title large mobile">Contact</p>

                            <p className="footer__title">Liens utiles</p>

                            <div className="footer__items">

                                
                                <div className="footer__section">
                                    <p className="footer__item">
                                        <Link to="/seances">Réserver une séance</Link>
                                    </p>
                                    <p className="footer__item">
                                        <Link to="/blog">Blog</Link>
                                    </p>
                                    <p className="footer__item">
                                        <Link to="/contact">Contact</Link>
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </footer>

            <div className="footer__logo">
                <Link to="/">
                    <img className="footer__logo--img" src={logo} alt="logo-footer" />
                </Link>
            </div>
        </>
    )
}

export default Footer
