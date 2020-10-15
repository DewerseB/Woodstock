import React from 'react';
const info = {
    title: "Shop",
    description : "Let's shop"
}

const Shop = () => {
    return (
        <main>
            <h1 className="title is-1">{info.title}</h1>
            <section className="section">
                <p>{info.description}</p>
            </section>
        </main>
    )
}

export {
    Shop,
    info
}