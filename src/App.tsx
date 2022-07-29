import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import { Homepage } from './featores/Homepage';

function App() {
    return (
        <div className="App">
          <HashRouter>
          <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="category/name" element={<Homepage />} />
            </Routes>
          </HashRouter>
        </div>
    );
};

export default App;
