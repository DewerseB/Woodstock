import React from 'react';
import './preview.css';
import { Link } from "react-router-dom";
import { About_info, Furnitures_info, Shop_info } from '../pages';

const Preview = () => {
    const pages = [About_info, Furnitures_info, Shop_info];
    return (
        <section className="section preview">
            <h2 className="title is-2">Preview</h2>
            {pages.map((page, index) => {
                return (
                    <div className="container" key={[page.title + index]}>
                        <h3 className="title is-3">{page.title}</h3>
                        <p>{page.description}</p>
                        <Link to={page.url} className="">{page.link}</Link>
                    </div>
                )
            })}
        </section>
    )
}

export default Preview;