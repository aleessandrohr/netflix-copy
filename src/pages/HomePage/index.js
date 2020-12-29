import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/index';

import Logo from '../../imagens/netflix-logo-150x46.png';

import './style.css';

const HomePage = () => {
    return(
        <div className="homepage">
            <header>
                <nav className="homepage-Nav">
                    <div className="homepage-NavLogo">
                        <Link className="homepage-NavLink" to="/">
                            <img src={Logo} alt="Netflix"/>
                        </Link>
                    </div>
                    <div className="homepage-NavItems">
                        <ul>
                            <li>
                                <Link className="homepage-NavItemLink" to="/login">Entrar</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="homepage-Section">
                <h1>
                    Filmes, séries e muito mais. <br/> Sem limites.
                </h1>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage;