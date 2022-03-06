import React from 'react';
import AnimePageBanner2 from './AnimePageBanner2';


function Home() {
    return (
        <div>
           <AnimePageBanner2 />
           <h2 className="descHeader">Welcome To The Random Anime Generator!</h2>
           <p className="descHome">Feel free to use the API on the Anime page, or see the About us page.</p>
        </div>
    );
}

export default Home;