import React from 'react';
import Netflix from '../../imagens/netflix-logo-150x79.png';
import './style.css';

const NavMain = () => {
    return(
        <nav className="navMain">
            <div className="navMain-NavLogo">
                <img src={Netflix} alt="Netflix"/>
            </div>
        </nav>
    );
}

export default NavMain;