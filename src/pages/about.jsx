import React from 'react';
const info = {
    title : "About",
    description : "A page about us"
}

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
}

export {
    About,
    info
}