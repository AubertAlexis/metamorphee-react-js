import React from 'react'
import Input from './Input/Input'
import Textarea from './Textarea/Textarea'
import Button from "../Button/Button";
import Recaptcha from 'react-recaptcha';

const ContactForm = () => {
    return (
        <form className="form form-contact">
            <div className="container">
                <div className="form-group form-flex">
                    <Input placeholder="Nom" />
                    <Input placeholder="Prénom" />
                </div>

                <div className="form-group form-flex">
                    <Input placeholder="Adresse mail" type="email" />
                    <Input placeholder="Téléphone" />
                </div>

                <div className="form-group">
                    <Input placeholder="Objet" />
                </div>

                <div className="form-group">
                    <Textarea placeholder="Message" resize/>
                </div>

                <div className="form-contact__footer">
                    <Recaptcha sitekey="6LcP3_sZAAAAABnZ-YX1FmGWMddz7W49G8-YMOVA" render="explicit" />
                    <Button variant="primary" additionalClass="form-contact__submit" type="submit">Envoyé</Button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm
