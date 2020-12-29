import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

const Movie = ({movieList}) => {

    const navigate = useNavigate()

    const handleMovie = (id, original_title) => {
        if (original_title !== undefined) {
            navigate(`/browse/id/movie/${id}`)
        } else {
            navigate(`/browse/id/tv/${id}`)
        }
    }

    const handleLeft = (key) => {
        let movieList = document.getElementById(`movie-MovieList-${key}`)
        let style = movieList.currentStyle || window.getComputedStyle(movieList);
        let x = parseInt(style.marginLeft) + Math.round(window.innerWidth / 2);
        if (x > 0 || x === 0) {
            let chevronLeft = document.getElementById(`Left${key}`)
            chevronLeft.style.visibility = "hidden"
            x = 0
        }
        movieList.style.marginLeft = `${x}px`
    }

    const handleRight = (item, key) => {
        let movieList = document.getElementById(`movie-MovieList-${key}`)
        let style = movieList.currentStyle || window.getComputedStyle(movieList);
        let x = parseInt(style.marginLeft) - Math.round(window.innerWidth / 2);
        let listW = item.results.length * 200;
        let chevronLeft = document.getElementById(`Left${key}`)
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 50
        }
        movieList.style.marginLeft = `${x}px`
        chevronLeft.style.visibility = "visible"
    }

    const listItems = movieList.map((item, key) =>
        <div key={key} className="movie-listItem">
            <header className="movie-MovieTitle">
                <h1>{item.title}</h1>
            </header>
            <section className="movie-MovieChevron">
                <div className="chevronLeft" id={`Left${key}`}>
                    <i className="fas fa-chevron-left" onClick={() => handleLeft(key)}></i>
                </div>
                <div className="chevronRight">
                    <i className="fas fa-chevron-right" onClick={() => handleRight(item.items, key)}></i>
                </div>
            </section>
            <section className="movie-MovieArea">
                <div className='movie-MovieList' id={`movie-MovieList-${key}`}>
                    {item.items.results.length > 0 && item.items.results.map((item, key) =>
                        <div key={key} className="movie-MovieItem" onClick={() => handleMovie(item.id, item.original_title)}>
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
    return(
       listItems
    )
}

export default Movie;