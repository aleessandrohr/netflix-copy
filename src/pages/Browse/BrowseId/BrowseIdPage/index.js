import React from 'react';

import NavBrowse from './../../../../components/NavBrowse/index';
import Footer from '../../../../components/Footer/index';

import './style.css';

const BrowseIdPage = ({movieData, type}) => {

    let title;

    if (type === "movie") {
        title = movieData.original_title
    } else {
        title = movieData.original_name
    }

    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return(
        <div className="browseIdPage">
            <div style={backgroundStyle} className="browseIdPage-Movie">
                <div className="browseIdPage-MovieVertical">
                    <div className="browseIdPage-MovieHorizontal">
                        <header className="browseIdPage-Header">
                            <NavBrowse />
                            <h1>{title}</h1>
                        </header>
                        <section className="browseIdPage-Overview">
                            <p>{movieData.overview}</p>
                        </section>
                        <section className="browseIdPage-Buttons">
                            <a className="watch" href={movieData.homepage} target="_blank" rel="noreferrer"><i className="fas fa-play"></i> Assistir</a>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BrowseIdPage;