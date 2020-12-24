import React from 'react';
import Netflix from '../../imagens/netflix-logo-150x79.png';
import './Welcome.css';

const Welcome = () => {
    return(
        <div className="container-Welcome">
            <header className="header-Welcome">
                <nav className="nav-Welcome">
                    <div className="nav-WelcomeLogo">
                        <img src={Netflix} alt="Netflix"/>
                    </div>
                    <div className="nav-WelcomeItems">
                        <ul>
                            <li>
                                <a href="/browse" rel="next">Entrar</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="section-Welcome">
                <h1>Filmes, séries e muito mais. <br/> Sem limites.</h1>
            </section>
            <footer className="footer-Welcome">
                <p>Não possuo a marca Netflix e portanto este site foi criado apenas para treinar minhas habilidades <br/> na criação de uma aplicação da web e nunca será usada para fins comerciais.</p>
                <p>Veja o código-fonte no meu <a href="https://github.com/alessandrohenriqueramos/netflix-copy" rel="noreferrer" target="_blank">GitHub</a> <i className="fab fa-github"></i></p>
                <p>Desenvolvido por Alessandro Henrique Ramos.</p>
            </footer>
        </div>
    )
}

export default Welcome;