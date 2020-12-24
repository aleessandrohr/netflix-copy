import React, { useState, memo } from 'react';
import Netflix from '../../imagens/netflix-logo-150x79.png';
import './Login.css';

const Login = (props) => {

    const [userName, setUserName] = useState('');

    const setUser = (event) => {
        setUserName(event.target.value)
    }

    const setUserSubmit = (event) => {
        if (setUser !== '') {
            props.LoggedTrue(userName)
        }
        event.preventDefault()
    }

    return(
        <div className="container-login">
            <header className="header-Login">
                <nav className="nav-Login">
                    <div className="nav-LoginLogo">
                        <img src={Netflix} alt="Netflix"/>
                    </div>
                </nav>
            </header>
            <section className="section-Login">
                <h1>Entrar</h1>
                <form className="form-Login" onSubmit={setUserSubmit}>
                    <input className="form-LoginUser" type="text" onChange={setUser} placeholder="Usuário" />
                    <br/>
                    <input className="form-LoginSubmit" type="submit" value="Entrar" />
                </form>
            </section>
            <footer className="footer">
                <p>Não possuo a marca Netflix e portanto este site foi criado apenas para treinar minhas habilidades <br/> na criação de uma aplicação da web e nunca será usada para fins comerciais.</p>
                <p>Veja o código-fonte no meu <a href="https://github.com/alessandrohenriqueramos/netflix-copy" rel="noreferrer" target="_blank">GitHub</a> <i className="fab fa-github"></i></p>
                <p>Desenvolvido por Alessandro Henrique Ramos.</p>
            </footer>
        </div>
    )
}

export default memo(Login);