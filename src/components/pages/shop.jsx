import React from 'react';

const info = {
    title: "Shop",
    description : "I wear your granddad's clothes, I look incredible, I'm in this big ass coat, From that thrift shop down the road",
    url : "/Woodstock/shop",
    link : "Go shopping"
};

const Shop = () => {
    return (
        <main>
            <section className="section intro">
                <h1 className="title is-1">{info.title}</h1>
                <p>{info.description}</p>
            </section>
            <section className="section">
                <p>Buy this!</p>
            </section>
        </main>
    )
};

export {
    Shop,
    info
};