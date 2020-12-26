import React, { useState, memo } from 'react'
import NavMain from '../../components/NavMain/index';
import Footer from '../../components/Footer/index';
import './style.css';

const Login = () => {

    const [userName, setUserName] = useState('')

    const setUser = (e) => {
        setUserName(e.target.value)
    }

    const submitUser = (e) => {
        if (userName !== '' && userName.length > 3) {
            localStorage.setItem("isLogged", "true")
            localStorage.setItem("Username", userName)
            window.location.reload()
        } else {
            alert('Ops\nPreencha todas as informações corretamente!')
            setUserName('')
        }
        e.preventDefault()
    }

    return(
        <div className="login">
            <header>
                <NavMain />
            </header>
            <section className="login-Section">
                <div className="login-FormContainer">
                    <h1>Entrar</h1>
                    <form className="login-Form" onSubmit={submitUser}>
                        <input className="input-Text" type="text" value={userName} onChange={setUser} placeholder="Usuário"/>
                        <br/>
                        <input className="input-Submit" type="submit" disabled value="Entrar"/>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default memo(Login);