import React from 'react';
import { Switch } from 'react-router';
import { Routes, Route, HashRouter, Router } from "react-router-dom"
import { Homepage } from './featores/Homepage';

function App() {
    return (
        <div className="App">
          <HashRouter>
                <Switch>
                <Route path="/">
                <Homepage />
                </Route>
                <Route path="category/name">
                <Homepage />
                </Route>
                </Switch>
          </HashRouter>
        </div>
    );
};

export default App;
