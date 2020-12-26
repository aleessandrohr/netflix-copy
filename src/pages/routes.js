import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome/index';
import Login from './Login/index';
import Error404 from './Error404/index';

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={localStorage.getItem("isLogged") !== "true" && <Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default MainRoutes;