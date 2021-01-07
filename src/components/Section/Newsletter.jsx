import React from 'react'
import Input from '../Form/Input/Input'

const Newsletter = () => {
    return (
        <div className="section newsletter">

            <div className="container">

                <h2 className="section__title newsletter__title">Inscription newsletter</h2>

                <form action="#" method="POST">

                    <div className="newsletter__content">

                        <div className="form-group newsletter__content--input">
                            <label htmlFor="newsletter-email">Votre e-mail</label>

                            <div className="input-group">
                                <Input type="email" id="newsletter-email" name="newsletter-email" />
                            </div>
                        </div>

                        <button className="btn btn-secondary newsletter__content--btn" type="submit">Valider</button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default Newsletter
