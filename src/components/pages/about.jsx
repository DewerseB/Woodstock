import React from 'react';

const info = {
    title : "About",
    description : "It might not be the right time, I might not be the right one, But there's something about us I want to say, Cause there's something between us anyway",
    url : "/Woodstock/about",
    link : "About us"
};

const About = () => {
    return (
        <main>
            <section className="section intro">
                <h1 className="title is-1">{info.title}</h1>
                <p>{info.description}</p>
            </section>
            <section className="section">
                <p>Plus plus plus</p>
                <p>This is a second section</p>
            </section>
        </main>
    )
};

export {
    About,
    info
};