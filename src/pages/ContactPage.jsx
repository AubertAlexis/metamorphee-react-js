import React from "react";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Form/ContactForm";
import HeaderBanner from "../components/Header/HeaderBanner";

const ContactPage = () => {

    return (
        <div className="contact with-banner">
            <HeaderBanner />

            <main className="main">

                <div className="section">
                    <div className="container">
                        <div className="section__body">
                            <h2 className="section__title">Nous contacter</h2>

                            <ContactForm />
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;