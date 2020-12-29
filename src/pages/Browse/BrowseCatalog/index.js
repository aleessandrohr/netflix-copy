import React, { useState, useEffect, memo } from 'react';

import Tmdb from '../../../API/Tmdb';

import BrowsePage from './Browse/BrowsePage/index';
import BrowseLoading from '../../../components/BrowseLoading/index';

const BrowseCatalog = () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list)
            let originals = list.filter(i => i.slug === "originals");
            let randomChose = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChose];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }
        loadAll()
    }, [])

    return(
        <div>
            {featuredData ? <BrowsePage featuredData={featuredData} movieList={movieList} /> : <BrowseLoading />}
        </div>
    );
}

export default memo(BrowseCatalog);