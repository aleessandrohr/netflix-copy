import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Dados from './API/Dados';
import './Normalize.css';

const App = () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Dados.getHomeList();
            setMovieList(list);
            let originals = list.filter(i => i.slug === 'originals');
            let randomChose = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChose];
            let chosenInfo = await Dados.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }

        loadAll()
    }, []);

    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Welcome/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;