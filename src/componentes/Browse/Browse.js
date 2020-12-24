import React, { useState, useEffect } from 'react';
import Dados from '../API/Dados';
import BrowsePage from './BrowsePage/BrowsePage';

const Browse = () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Dados.getHomeList();
            setMovieList(list);
            let originals = list.filter(i => i.slug === 'originals');
            let randomChose = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChose];
            let chosenInfo = await Dados.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }

        loadAll()
    }, []);

    return(
        <div className="container-Browse">
            {featuredData && <BrowsePage movie={movieList} featured={featuredData} />}
        </div>
    )
}

export default Browse;