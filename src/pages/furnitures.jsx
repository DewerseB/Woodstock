import React, {useState} from 'react';
import logo from '../logo.svg';

const Furnitures = () => {
    const [count, setCount] = useState(0);
    return (
        <main>
            <h1 className="title is-1">Furnitures</h1>
            <section className="section">
                <img src={logo} className="App-logo" alt="logo" />
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </section>
        </main>
    )
}

export default Furnitures;