import React from 'react';
import { ContactForm } from '../';

const Contact = () => {
    window.scrollTo(0,0);
    return (
        <main>
            <section className="section intro">
                <h1 className="title is-1">Contact us</h1>
                <p>If you have any questions or inquiries, please do not hesitate to contact us by using the form below.</p>
                <p>We'll do our best to answer you within 24 hours during business days.</p>
            </section>
            <ContactForm/>
        </main>
    )
};

export default Contact;