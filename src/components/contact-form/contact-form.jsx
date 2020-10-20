import React from 'react';
import './contact-form.css';

const ContactForm = () => {
    return (
        <section className="section contact-form">
            <h2 className="title is-2">Contact us</h2>
            <form className="container">
                <div className="field is-grouped is-grouped-centered">
                    <div className="control is-expanded">
                        <label className="label" for="form-firstname">First name</label>
                        <input id="form-firstname" className="input" type="text" placeholder="First name" required/>
                    </div>
                    <div className="control is-expanded">
                        <label className="label" for="form-lastname">Last name</label>
                        <input id="form-lastname" className="input" type="text" placeholder="Last name" required/>
                    </div>
                </div>
                <div className="field">
                    <label className="label" for="email">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input id="email" className="input is-danger" type="email" placeholder="Email" required/>
                        <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    <p className="help is-danger">This email is invalid</p>
                </div>
                <div className="field">
                    <label className="label" for="form-message">Message</label>
                    <div className="control">
                        <textarea id="form-message" className="textarea" placeholder="Enter your message here" required></textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button id="submit" className="button is-link" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;