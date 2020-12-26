import React from 'react';
import Footer from '../../components/Footer/index';
import Logo from '../../imagens/netflix-logo-150x79.png';
import './style.css';

const Welcome = () => {
    return(
        <div className="welcome">
            <header>
                <nav className="welcome-Nav">
                    <div className="welcome-NavLogo">
                        <img src={Logo} alt="Netflix"/>
                    </div>
                    <div className="welcome-NavItems">
                        <ul>
                            <li>
                                <a href="/login">Entrar</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="welcome-Section">
                <h1>
                    Filmes, séries e muito mais. <br/> Sem limites.
                </h1>
            </section>
            <Footer />
        </div>
    )
}

export default Welcome;