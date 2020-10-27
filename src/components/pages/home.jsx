import React, { useState, useEffect } from 'react';
import { Jumbotron, Preview, Team, ContactForm } from '../';

const Home = () => {
    window.scrollTo(0,0);
    useEffect(() => {
        console.log(document.querySelectorAll('section[id]'));
    });
    
    return (
        <main>
            <Jumbotron/>
            <Preview/>
            <Team/>
            <ContactForm/>
        </main>
    )
}

export default Home;