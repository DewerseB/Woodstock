import React from 'react';
import './contact-form.css';

const ContactForm = () => {
    return (
        <section class="section contact-form">
            <h2 class="title is-2">Contact us</h2>
            <form class="container">
                <div class="field is-grouped is-grouped-centered">
                    <div class="control is-expanded">
                    <label class="label">First name</label>
                        <input class="input" type="text" placeholder="First name" required/>
                    </div>
                    <div class="control is-expanded">
                        <label class="label">Last name</label>
                        <input class="input" type="text" placeholder="Last name" required/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input id="email" class="input is-danger" type="email" placeholder="Email" required/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    <p class="help is-danger">This email is invalid</p>
                </div>
                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea id="message" class="textarea" placeholder="Enter your message here" required></textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button id="submit" class="button is-link" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;