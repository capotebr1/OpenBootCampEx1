import React from 'react';
import ContactComponent from '../hooks/contact';
import { Contact } from '../models/contact.class';

const ContactList = () => {

    const defaultContact = new Contact("Bruno" , "Capote" , "brunetecapote@gmail.com" , false);

    return (
        <div>
            <h1>Your Contacts:</h1>
            <ContactComponent contact = {defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactList;
