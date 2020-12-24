import React, { useState, useEffect, memo } from 'react';
import Netflix from '../../../../imagens/netflix-logo-93x49.png';
import './Header.css';

const Header = (props) => {

    const [blackNav, setBlackNav] = useState(false);

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
        backgroundColor: blackNav && '#141414',
    }

    let description = props.featured.overview
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
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
                                <li>

                                </li>
                            </ul>
                        </div>
                    </nav>
                    <h1>{props.featured.original_name}</h1>
                </header>
                <section className="container-SectionOverview">
                    <p>{description}</p>
                </section>
                <section className="container-SectionButtons">
                    <a className="watch" href={props.featured.homepage}><i className="fas fa-play"></i> Assistir</a>
                    <a className="plus" href={props.featured.homepage}><i className="fas fa-info-circle"></i> Mais informações</a>
                </section>
            </div>
        </div>
    )
}

export default memo(Header);