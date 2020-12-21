import React from 'react';
import Netflix from './imagens/netflix-logo-150x79.png';
import './Welcome.css';

const Welcome = () => {
    
    return(
        <div className="container">
            <header className="header">
                <nav className="nav">
                    <img src={Netflix} alt="Netflix" className="logo"/>
                    <div className="nav-items">
                        <ul>
                            <li>
                                <a href="/login" rel="next">Entrar</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="section">
                <h1>Filmes, séries e muito mais. <br/> Sem limites.</h1>
            </section>
            <footer className="footer">
                <p>Não possuo a marca Netflix e portanto este site foi criado apenas para treinar minhas habilidades na criação de uma aplicação da web e nunca será usada para fins comerciais.</p>
                <p>Veja o código-fonte no meu <span><a href="https://github.com/alessandrohenriqueramos/netflix-copy" rel="noreferrer" target="_blank">Github</a></span> <i className="fab fa-github"></i></p>
                <p>Desenvolvido por Alessandro Henrique Ramos.</p>
            </footer>
        </div>
    )
}

export default Welcome;