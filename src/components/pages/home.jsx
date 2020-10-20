import React from 'react';
import { Jumbotron, Preview, Team, ContactForm } from '../';

const Home = () => {
    window.scrollTo(0,0);
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