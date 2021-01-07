import React from 'react'
import { Link } from 'react-router-dom';

import SliderEvent from '../Slider/SliderEvent';

const Event = () => {
    return (
        <div className="section event">

            <div className="container">
                <h2 className="section__title white event__title">évènements</h2>
                <h3 className="section__subtitle white">Articles dans l'ordre chronologique</h3>

                <div className="event__cards">

                    <SliderEvent />

                </div>

                <div className="event__cards--btn-box">
                    <Link to="/" className="btn btn-transparent event__cards--btn">Afficher plus</Link>
                </div>

            </div>

        </div>
    )
}

export default Event
