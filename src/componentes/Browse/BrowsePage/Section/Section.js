import React from 'react';
import './Section.css';

const Section = ({movie}) => {

    const handleLeft = (key) => {
        let movieList = document.getElementById(`movieList-${key}`)
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
        let movieList = document.getElementById(`movieList-${key}`)
        let style = movieList.currentStyle || window.getComputedStyle(movieList);
        let x = parseInt(style.marginLeft) - Math.round(window.innerWidth / 2);
        let listW = item.results.length * 150;
        let chevronLeft = document.getElementById(`Left${key}`)
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        movieList.style.marginLeft = `${x}px`
        chevronLeft.style.visibility = "visible"
    }

    const listItems = movie.map((item, key) =>
        <div key={key} className="container-listItem">
            <header className="movieTitle">
                <h1>{item.title}</h1>
            </header>
            <section className="movieChevron">
                <div className="chevronLeft" id={`Left${key}`}>
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