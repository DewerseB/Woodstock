import React from 'react';
import './preview.css';
import { About_info, Shop_info } from '../../pages';

const Preview = () => {
    const pages = [About_info, Shop_info];
    return (
        <section className="section preview">
            {pages.map((page, index) => {
                return (
                    <div key={[page.title + index]}>
                        <h3>{page.title}</h3>
                        <p>{page.description}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default Preview;