import React, { useState, useEffect, memo} from 'react';
import { Link } from 'react-router-dom';
import Netflix from '../../../../imagens/netflix-logo-93x49.png';
import './style.css';

const Featured = ({featuredData}) => {

    const [blackNav, setBlackNav] = useState(false);
    const [visibility, setVisibility] = useState(false);

    //navStyle

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

    //visibilityProfile

    const visibilityProfile = (param) => {
        let profile = document.getElementById('featured-NavProfile')
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

    //Username

    let userName = localStorage.getItem("Username")

    //clearStorage

    const clearStorage = () => {
        localStorage.clear()
        window.location.reload()
    }

    //description

    let description = featuredData.overview
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    return(
        <div className="featured-Vertical">
            <div className="featured-Horizontal">
                <header>
                    <nav style={navStyle} className="featured-Nav">
                        <div className="featured-NavLogo">
                            <Link className="featured-NavLogoLink" to="/browse">
                                <img src={Netflix} alt="Netflix"/>
                            </Link>
                        </div>
                        <div className="featured-NavItems">
                            <ul>
                                <li onClick={visibilityProfile}>
                                    <img className="navItem-Avatar" src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/32/avatar-default-icon.png" alt="Avatar"/>
                                    <i className="fas fa-chevron-down"></i>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="featured-NavProfile" id="featured-NavProfile">
                        <ul>
                            <li>
                                {userName}
                            </li>
                            <li>
                                Gerenciar perfis
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Conta
                            </li>
                            <li>
                                Centro de ajuda
                            </li>
                            <li onClick={clearStorage}>
                                Sair da Netflix
                            </li>
                        </ul>
                    </nav>
                    <h1>{featuredData.original_name}</h1>
                </header>
                <section className="featured-Overview">
                    <p>{description}</p>
                </section>
                <section className="featured-Buttons">
                    <a className="watch" href={featuredData.homepage} target="_blank" rel="noreferrer"><i className="fas fa-play"></i> Assistir</a>
                    <a className="plus" href={featuredData.homepage} target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i> Mais informações</a>
                </section>
            </div>
        </div>
    )
}

export default memo(Featured);