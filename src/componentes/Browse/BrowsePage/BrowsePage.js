import React, { memo } from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import './BrowsePage.css';

const BrowsePage = (props) => {

    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.featured.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return(
        <div className="container-BrowsePage">
            <header style={backgroundStyle} className="container-BrowsePageHeader">
                <Header featured={props.featured} />
            </header>
            <section className="container-BrowsePageSection">
                <Section movie={props.movie}/>
            </section>
            <footer className="container-BrowsePageFooter">
                <p>Não possuo a marca Netflix e portanto este site foi criado apenas para treinar minhas habilidades <br/> na criação de uma aplicação da web e nunca será usada para fins comerciais.</p>
                <p>Veja o código-fonte no meu <a href="https://github.com/alessandrohenriqueramos/netflix-copy" rel="noreferrer" target="_blank">GitHub</a> <i className="fab fa-github"></i></p>
                <p>Desenvolvido por Alessandro Henrique Ramos.</p>
            </footer>
        </div>
    )
}

export default memo(BrowsePage);