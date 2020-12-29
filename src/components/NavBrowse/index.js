import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import Netflix from '../../imagens/netflix-logo-94x29.png';

import './style.css'

const NavBrowse = () => {

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

    const visibilityProfile = () => {
        let profile = document.getElementById('navBrowse-NavProfile')
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

    return(
        <div>
            <nav style={navStyle} className="navBrowse-Nav">
                    <div className="navBrowse-NavLogo">
                        <Link className="navBrowse-NavLogoLink" to="/browse">
                            <img src={Netflix} alt="Netflix"/>
                        </Link>
                    </div>
                    <div className="navBrowse-NavItems">
                        <ul>
                            <li onClick={visibilityProfile}>
                                <img className="navItem-Avatar" src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/32/avatar-default-icon.png" alt="Avatar"/>
                                <i className="fas fa-chevron-down"></i>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="navBrowse-NavProfile" id="navBrowse-NavProfile">
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
        </div>
    )
}

export default NavBrowse;