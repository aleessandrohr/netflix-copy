import React from 'react';
import Netflix from '../../../imagens/netflix-logo-150x79.png'
import './style.css';

const BrowseLoading = () => {
    return(
        <div className="browseLoading">
            <img src={Netflix} alt="Netflix"/>
            <div className="browseLoading-Spinner"></div>
        </div>
    );
}

export default BrowseLoading;