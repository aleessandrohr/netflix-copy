import React, { useState, useEffect, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Tmdb from '../../../API/Tmdb';
import BrowseLoading from '../../../components/BrowseLoading/index';
import Movie from './BrowseIdPage/index';

const BrowseId = ({type}) => {

    const [movieData, setMovieData] = useState(null);

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const loadMovie = async () => {
            const movie = await Tmdb.getMovieInfo(id, type)
            if (movie.success === false) {
                return navigate('/browse');
            }
            setMovieData(movie)
        }
        
        loadMovie()
    }, [navigate, id, type])

    return(
        <div>
            {movieData ? <Movie movieData={movieData} type={type} /> : <BrowseLoading />}
        </div>
    )
}

export default BrowseId;