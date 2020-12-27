import React from 'react';
import { Link } from "react-router-dom";
import Netflix from '../../imagens/netflix-logo-150x46.png';
import './style.css';

const NavMain = () => {
    return(
        <nav className="navMain">
            <div className="navMain-NavLogo">
                <Link className="navMain-NavLink" to="/">
                    <img src={Netflix} alt="Netflix"/>
                </Link>
            </div>
        </nav>
    );
}

export default NavMain;