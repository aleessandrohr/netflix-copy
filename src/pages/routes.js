import React, { useState, memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome/index';
import Login from './Login/index';
import Error404 from './Error404/index';
import Browse from './Browse/index';

const MainRoutes = () => {

    const [isLogged,setIsLogged] = useState(localStorage.getItem("isLogged"));

    const setLogged = (param) => {
        setIsLogged(param)
    }

    return(
        <Routes>
            <Route path="/" element={isLogged !== "true" ? <Welcome /> : <Navigate to="/browse" />} />
            <Route path="/login" element={isLogged !== "true" ? <Login setLogged={setLogged} /> : <Navigate to="/browse" />} />
            <Route path="/browse" element={isLogged === "true" ? <Browse /> : <Navigate to="/" />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default memo(MainRoutes);