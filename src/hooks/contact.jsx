import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h1>
                { contact.name + contact.surname}
            </h1>
            <h2>
                { contact.email }
                <br/>
                { contact.conected ? "Contacto En Línea" : "Contacto No Disponible"}
            </h2>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
