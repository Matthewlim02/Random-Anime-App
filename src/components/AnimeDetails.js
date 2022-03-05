import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AnimeDetails({ match }) {
    useEffect(() => {
        fetchAnime();
        console.log(match);
    },[]);

    const [data, setData] = useState([]);

    const fetchAnime = async () => {
        const fetchAnime = await fetch(`https://api.aniapi.com/v1/anime=${match.params.id}`);
        const anime = await fetchAnime.json();

        console.log(anime);
    };

    return (
        <div>
            
        </div>
    );
}

export default AnimeDetails;