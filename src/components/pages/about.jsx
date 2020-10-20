import React from 'react';
import * as Hooks from '../../hooks/hooks';

const info = {
    title : "About",
    description : ["It might not be the right time", "I might not be the right one", "But there's something about us I want to say", "Cause there's something between us anyway"],
    url : "/Woodstock/about",
    link : "About us",
    photo : require('../../assets/wood-stack.jpg')
};

const About = () => {
    window.scrollTo(0,0);
    return (
        <main>
            <section className="section intro">
                <h1 className="title is-1">{info.title}</h1>
                {Hooks.useArrayToP(info.description)}
            </section>
            <section className="section content">
                <div className="container">
                    <h2 className="title is-2">This is a subtitle</h2>
                    <p>And this is a relatively short paragraph, note that everything is relative.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
                </div>
            </section>
            <section className="section content">
                <div className="container">
                    <h2 className="title is-2">This is another subtitle</h2>
                    <p>And yet another relatively short paragraph, note that everything is still relative.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
                </div>
            </section>
        </main>
    )
};

export {
    About,
    info
};