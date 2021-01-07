import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import InputGroup from "../components/Form/Input/InputGroup";
import HeaderBanner from "../components/Header/HeaderBanner";

const ConferenceValidPage = () => {

    const [day, setDay] = useState("28")

    const handleChange = (e) => {
        setDay(e.currentTarget.value)
    }

    const handleClickParentRadio = (e) => {
        const target = e.target;

        if (!target.classList.contains("radio-choice")) return;

        var evt = new MouseEvent('click', {
            bubbles: true,
            view: window
        })

        target.children[1].dispatchEvent(evt);
    }

    return (
        <div className="conference-valid with-banner">
            <HeaderBanner title="Titre de la conférence" badge={true} />

            <main className="main">

                <div className="section">
                    <div className="container">

                        <div className="section__header centered">
                            <h2 className="section__title raw centered">Valider votre réservation</h2>
                        </div>
                        <form method="GET">

                        <div className="section__body">

                            <InputGroup label="Nom" name="nom" id="nom" />
                            <InputGroup label="Prénom" name="prenom" id="prenom" />

                            <div className="form-group multiple">
                                <label>Sélectionner une date</label>

                                <div className="multiple-choices">
                                    <div className={`radio-choice${day === "28" ? " selected" : ""}`} onClick={handleClickParentRadio}>
                                        <label htmlFor="radio-28">28</label>
                                        <input type="radio" name="date" id="radio-28" value="28" onChange={handleChange} checked={day === "28"} />
                                    </div>

                                    <div className={`radio-choice${day === "29" ? " selected" : ""}`} onClick={handleClickParentRadio}>
                                        <label htmlFor="radio-29">29</label>
                                        <input type="radio" name="date" id="radio-29" value="29" onChange={handleChange} checked={day === "29"} />
                                    </div>

                                    <div className={`radio-choice${day === "30" ? " selected" : ""}`} onClick={handleClickParentRadio}>
                                        <label htmlFor="radio-30">30</label>
                                        <input type="radio" name="date" id="radio-30" value="30" onChange={handleChange} checked={day === "30"} />
                                    </div>
                                </div>

                            </div>

                            </div>

                            <div className="section__footer">
                                <button type="submit" className="btn btn-primary section__btn">Je réserve !</button>
                            </div>

                        </form>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default ConferenceValidPage;