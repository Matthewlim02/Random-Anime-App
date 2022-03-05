import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimeList from './AnimeList';

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
            <h2>New Animes To Check Out!</h2>
            {data.map(data => (
                <h1 key={data.anilist_id}>
                    <Link to={`/anime/${data.anilist_id}`}>{data.titles.rj}</Link>
                </h1>

            ))}
        <div>
            <h2>My Anime List:</h2>
            <AnimeList />
        </div>
        </div>
    );
}

export default Anime;