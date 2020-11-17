import React, { useState, useEffect } from 'react';
import './contact-form.css';

const ContactForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    useEffect(() => {
        if (firstname.length > 1) {
            document.getElementById('form-firstname').parentNode.querySelector('span').classList.add("has-text-success");
        } else {
            document.getElementById('form-firstname').parentNode.querySelector('span').classList.remove("has-text-success");
        }
        if (lastname.length > 1) {
            document.getElementById('form-lastname').parentNode.querySelector('span').classList.add("has-text-success");
        } else {
            document.getElementById('form-lastname').parentNode.querySelector('span').classList.remove("has-text-success");
        }
        if (mailRegex.test(email)) {
            document.getElementById('email').parentNode.querySelectorAll('span')[0].classList.add("has-text-success");
            document.getElementById('email').parentNode.querySelectorAll('span')[1].classList.add("has-text-success");
            document.getElementById('email').parentNode.querySelectorAll('span')[0].classList.remove("has-text-danger");
            document.getElementById('email').parentNode.querySelectorAll('span')[1].classList.remove("has-text-danger");
        } else if (email.length > 0) {
            document.getElementById('email').parentNode.querySelectorAll('span')[0].classList.remove("has-text-success");
            document.getElementById('email').parentNode.querySelectorAll('span')[1].classList.remove("has-text-success");
            document.getElementById('email').parentNode.querySelectorAll('span')[0].classList.add("has-text-danger");
            document.getElementById('email').parentNode.querySelectorAll('span')[1].classList.add("has-text-danger");
        }
    });

    return (
        <section className="section content contact-form" id="anchor-contact">
            <h2 className="title is-2">Contact form</h2>
            <form className="container box">
                <div className="field is-grouped is-grouped-centered">
                    <div className="container">
                        <label className="label" htmlFor="form-firstname">First name</label>
                        <div className="control is-expanded has-icons-right">
                            <input id="form-firstname" className="input" type="text" placeholder="First name" onChange={(e) => setFirstname(e.target.value)} required/>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>
                    </div>
                    <div className="container">
                        <label className="label" htmlFor="form-lastname">Last name</label>
                        <div className="control is-expanded has-icons-right">
                            <input id="form-lastname" className="input" type="text" placeholder="Last name" onChange={(e) => setLastname(e.target.value)} required/>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="email">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input id="email" className="input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                    <p className="help is-danger"></p>
                </div>
                <div className="field">
                    <label className="label" htmlFor="form-message">Message</label>
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