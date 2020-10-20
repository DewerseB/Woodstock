import React, {useState} from 'react';
import logo from '../../logo.svg';

const info = {
    title: "Furnitures",
    description : "I wear your granddad's clothes, I look incredible, I'm in this big ass coat, From that thrift shop down the road",
    url : "/Woodstock/furnitures",
    link : "Go shopping"
};

const Furnitures = () => {
    const [count, setCount] = useState(0);
    return (
        <main>
            <section className="section intro">
                <h1 className="title is-1">{info.title}</h1>
                <p>{info.description}</p>
            </section>
            <section className="section">
                <img src={logo} className="App-logo" alt="logo" />
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </section>
        </main>
    )
};

export {
    Furnitures,
    info
};