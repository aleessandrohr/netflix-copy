import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from '../components/Auth/index';

import HomePage from './HomePage/index';
import Login from './Login/index';
import NotFound from './NotFound/index';
import Browse from './Browse/index';
import BrowseCatalog from './Browse/BrowseCatalog/index';
import BrowseId from './Browse/BrowseId/index';

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={Auth.isAuthenticated() ? <Navigate to="/browse" /> : <HomePage /> } />
            <Route path="/login" element={Auth.isAuthenticated() ? <Navigate to="/browse" /> : <Login />} />
            <Route path="/browse" element={Auth.isAuthenticated() ? <Browse /> : <Navigate to="/" />} >
                <Route path="/" element={Auth.isAuthenticated() ? <BrowseCatalog /> : <Navigate to="/" />} />
                <Route path="/id/movie/:id" element={Auth.isAuthenticated() ? <BrowseId type="movie" /> : <Navigate to="/" />} />
                <Route path="/id/tv/:id" element={Auth.isAuthenticated() ? <BrowseId type="tv" /> : <Navigate to="/" />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default MainRoutes;