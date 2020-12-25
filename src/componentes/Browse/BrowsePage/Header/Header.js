import React, { useState, useEffect, memo } from 'react';
import Netflix from '../../../../imagens/netflix-logo-93x49.png';
import './Header.css';

const Header = ({featured}) => {

    const [blackNav, setBlackNav] = useState(false);
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        const scrollOn = () => {
            if (window.scrollY > 10) {
                setBlackNav(true);
            }
            else {
                setBlackNav(false)
            }
        }

        window.addEventListener('scroll', scrollOn)
        return () => {
            window.removeEventListener('scroll', scrollOn)
        }
    }, []);

    const navStyle = {
        backgroundColor: blackNav && '#161616',
    }

    let description = featured.overview
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    let userName = localStorage.getItem("Username")

    const clearStorage = () => {
        window.location.reload()
        localStorage.clear()
    }

    const visibilityProfile = () => {
        let profile = document.getElementById('navItems-Profile')
        if (visibility === true) {
            profile.style.visibility = "hidden"
            profile.style.opacity = 0
            setVisibility(false)
        } else {
            profile.style.visibility = "visible"
            profile.style.opacity = 1
            setVisibility(true)
        }
    }

    return(
        <div className="container-HeaderVertical">
            <div className="container-HeaderHorizontal">
                <header className="container-HeaderItems">
                    <nav style={navStyle} className="container-HeaderNav">
                        <div className="container-HeaderNavLogo">
                            <a href="/browse">
                                <img src={Netflix} alt="logo"/>
                            </a>
                        </div>
                        <div className="container-HeaderNavItems">
                            <ul>
                                <li onClick={visibilityProfile}>
                                    <img className="navItem-Avatar" src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/32/avatar-default-icon.png" alt="Avatar"/>
                                    <i className="fas fa-chevron-down"></i>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="navItems-Profile" id="navItems-Profile">
                        <ul>
                            <li>
                                {userName}
                            </li>
                            <li onClick={clearStorage}>
                                Sair da Netflix
                            </li>
                        </ul>
                    </nav>
                    <h1>{featured.original_name}</h1>
                </header>
                <section className="container-SectionOverview">
                    <p>{description}</p>
                </section>
                <section className="container-SectionButtons">
                    <a className="watch" href={featured.homepage} target="_blank" rel="noreferrer"><i className="fas fa-play"></i> Assistir</a>
                    <a className="plus" href={featured.homepage} target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i> Mais informações</a>
                </section>
            </div>
        </div>
    )
}

export default memo(Header);