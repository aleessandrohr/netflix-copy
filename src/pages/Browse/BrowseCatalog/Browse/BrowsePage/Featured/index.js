import React from 'react';

import NavBrowse from '../../../../../../components/NavBrowse/index';
import Netflix from '../../../../../../imagens/netflix-logo-94x29.png';

import './style.css';

const Featured = ({featuredData}) => {

    //description

    let description = featuredData.overview
    if (description.length > 180) {
        description = description.substring(0, 180) + '...';
    }

    return(
        <div className="featured-Vertical">
            <div className="featured-Horizontal">
                <header>
                    <NavBrowse Netflix={Netflix} />
                    <h1>{featuredData.original_name}</h1>
                </header>
                <section className="featured-Overview">
                    <p>{description}</p>
                </section>
                <section className="featured-Buttons">
                    <a className="watch" href={featuredData.homepage} target="_blank" rel="noreferrer"><i className="fas fa-play"></i> Assistir</a>
                    <a className="plus" href={featuredData.homepage} target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i> Mais informações</a>
                </section>
            </div>
        </div>
    )
}

export default Featured;