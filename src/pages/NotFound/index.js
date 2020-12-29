import React from 'react';
import { Link } from 'react-router-dom';

import NavMain from '../../components/NavMain/index'
import Footer from '../../components/Footer/index';

import './style.css'

const NotFound = () => {
    return(
        <div className="notFound">
            <header>
                <NavMain />
            </header>
            <section className="notFound-Section">
                <h1>Você se perdeu?</h1>
                <p>Infelizmente não localizamos essa página. Você encontrado vários muitos <br/> outros títulos na página inicial.</p>
                <Link className="notFound-Link" to="/">Página inicial da Netflix</Link>
            </section>
            <Footer />
        </div>
    )
}

export default NotFound;