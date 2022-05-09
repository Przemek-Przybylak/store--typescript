import React from 'react';
import {ProductsList} from "./featores/productsList/ProductsList";
import {TopBar} from "./featores/topBar/TopBar/index.js";

function App() {
    return (
        <div className="App">
            <TopBar />
            <div>
                <ProductsList/>
                waiting...
            </div>
        </div>
    );
};

export default App;
