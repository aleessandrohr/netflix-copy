import React, { Component } from 'react';
import Netflix from '../imagens/netflix-logo-150x79.png';
import './Welcome.css';

class Welcome extends Component {
    render() {
        return(
            <div className="container">
                <header>
                    <nav className="nav">
                        <div className="logo">
                            <img src={Netflix} alt="Netflix"/>
                        </div>
                        <div className="nav-items">
                            <ul>
                                <li>
                                    <a href="/login" rel="next">Entrar</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <section>
                    <div className="title">
                        <h1>Filmes, séries e muito mais. <br/> Sem limites.</h1>
                        <form className="form">
                            <input type="email" className="email" disabled/>
                            <input type="submit"className="submit" disabled value="VAMOS LÁ >"/>
                        </form>
                    </div>
                </section>
                <footer>
                    <div className="info">
                        <p>Não possuo a marca Netflix e portanto este site foi criado apenas para treinar minhas habilidades <br/> na criação de uma aplicação da web e nunca será usada para fins comerciais.</p>
                        <p>Veja o código-fonte no meu Github <i className="fab fa-github"></i></p>
                        <p>Desenvolvido por Alessandro Henrique Ramos.</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Welcome;