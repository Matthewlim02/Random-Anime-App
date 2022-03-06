import React from 'react';
import AnimePageBanner3 from './AnimePageBanner3';


function About() {
    return (
        <div>
            <AnimePageBanner3 />
            <h2 className="descHeader">What's this website for?</h2>
            <p className="desc">
                This website uses an api called AniAPI, and with it you can randomly load 5 anime. <br /> As well as create your own list of animes to save for later or check off. <br/> This allows you to find new anime,
                and it makes it easier by doing it randomly!
            </p>
        </div>
    );
}

export default About;