import React from 'react'
import Input from './Input/Input'
import Textarea from './Textarea/Textarea'
import Button from "../Button/Button";

const ContactForm = () => {
    return (
        <form method="post">
            <div className="form-group">
                <Input placeholder="Nom" />
            </div>

            <div className="form-group">
                <Input type="email" placeholder="E-mail" />
            </div>

            <div className="form-group">
                <Input type="text" placeholder="Objet" />
            </div>

            <div className="form-group">
                <Textarea placeholder="Message..." resize/>
            </div>

            <Button variant="primary" type="submit">Envoyer</Button>
        </form>
    )
}

export default ContactForm
