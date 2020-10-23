import React, { Fragment } from 'react';
import './preview.css';
import { Link } from "react-router-dom";
import { About_info, Furnitures_info, Shop_info } from '../pages';
import * as Hooks from '../../hooks/hooks';

const Preview = () => {
    const pages = [About_info, Furnitures_info, Shop_info];
    return (
        <section className="section preview">
            <h2 className="title is-2">Preview</h2>
            <div className="container">
                {pages.map((page, index) => {
                    return (
                        <div className="columns box" key={[page.title + index]}>
                            {(index % 2 === 0) ? (
                                <Fragment>
                                    <div className="column is-hidden-desktop">
                                        <Link to={page.url} className="link-photo"><img src={page.photo} className="photo" alt=""></img></Link>
                                    </div>
                                    <div className="column">
                                        <h3 className="title is-3">{page.title}</h3>
                                        
                                        {Hooks.useArrayToQuote(page.description)}
                                        <Link to={page.url} className="button">{page.link}</Link>
                                    </div>
                                    <div className="column is-hidden-touch">
                                        <Link to={page.url} className="link-photo"><img src={page.photo} className="photo" alt=""></img></Link>
                                        {/* srcset and sizes */}
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="column">
                                        <Link to={page.url} className="link-photo"><img src={page.photo} className="photo" alt=""></img></Link>
                                    </div>
                                    <div className="column">
                                        <h3 className="title is-3">{page.title}</h3>
                                        {Hooks.useArrayToQuote(page.description)}
                                        <Link to={page.url} className="button">{page.link}</Link>
                                    </div>
                                </Fragment>
                            )}
                            
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Preview;