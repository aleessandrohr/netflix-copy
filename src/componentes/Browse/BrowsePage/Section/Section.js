import React from 'react';
import './Section.css';

const Section = (props) => {

    const handleLeft = (classeX) => {
        let movieList = document.getElementById(`movieList-${classeX}`)
        let style = movieList.currentStyle || window.getComputedStyle(movieList);
        let x = parseInt(style.marginLeft) + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        movieList.style.marginLeft = `${x}px`
    }

    const handleRight = (item, classeX) => {
        let movieList = document.getElementById(`movieList-${classeX}`)
        let style = movieList.currentStyle || window.getComputedStyle(movieList);
        let x = parseInt(style.marginLeft) - Math.round(window.innerWidth / 2);
        let listW = item.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        movieList.style.marginLeft = `${x}px`
    }

    const listItems = props.movie.map((item, key) =>
        <div key={key} className="container-listItem">
            <header className="movieTitle">
                <h1>{item.title}</h1>
            </header>
            <section className="movieChevron">
                <div className="chevronLeft">
                    <i className="fas fa-chevron-left" onClick={() => handleLeft(key)}></i>
                </div>
                <div className="chevronRight">
                    <i className="fas fa-chevron-right" onClick={() => handleRight(item.items, key)}></i>
                </div>
            </section>
            <section className="movieArea">
                <div className='movieList' id={`movieList-${key}`}>
                    {item.items.results.length > 0 && item.items.results.map((item, key) =>
                        <div key={key} className="movieItem"> 
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

export default Section;