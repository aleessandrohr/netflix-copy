import React from 'react'
import './style.css';

const Footer = () => {
    return(
        <footer className="footer-component">
            <p>Não possuo a marca Netflix e portanto este site foi criado apenas para treinar minhas habilidades <br/> na criação de uma aplicação web e nunca será usada para fins comerciais.</p>
            <p>Veja o código-fonte no meu <a href="https://github.com/alessandrohenriqueramos/netflix-copy" target="_blank" rel="noreferrer">GitHub</a> <i className="fab fa-github"></i></p>
            <p>Desenvolvido por Alessandro Henrique Ramos.</p>
        </footer>
    )
}

export default Footer;