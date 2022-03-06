import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimeList from './AnimeList';
import AnimePageBanner from './AnimePageBanner';
import HeaderComponent from './Header2Component';

function Anime() {

    useEffect(() => {
        fetchAnimes();
    },[]);

    const [data, setData] = useState([]);

    const fetchAnimes = async () => {
        const animeData = await fetch('https://api.aniapi.com/v1/random/anime/5/false');

        const anime = await animeData.json();
        console.log(anime.data);
        setData(anime.data);
    }

    return (
        <div>
            <AnimePageBanner />
            <br/>
            <HeaderComponent />
            {data.map(data => (
                <h4 key={data.anilist_id} className="animeApi">
                    <Link to={`/anime/${data.anilist_id}`}>{data.titles.rj}</Link>
                </h4>

            ))}
        <div>
            <br/>
            <h2>My Anime List:</h2>
            <br/>
            <AnimeList />
        </div>
        </div>
    );
}

export default Anime;